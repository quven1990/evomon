#!/usr/bin/env node
/**
 * Losslessly-ish compress local images for production.
 * - Pet sprites: max 512px, PNG level-9 (no upscale)
 * - Site icons: max 512px PNG
 * - Hero: WebP quality 80
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const PET_MAX = 512;
const ICON_MAX = 512;
const HERO_QUALITY = 80;

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function compressPng(file, maxDim) {
  const before = fs.statSync(file).size;
  const img = sharp(file);
  const meta = await img.metadata();

  let pipeline = img;
  if ((meta.width ?? 0) > maxDim || (meta.height ?? 0) > maxDim) {
    pipeline = pipeline.resize(maxDim, maxDim, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const out = await pipeline
    .png({ compressionLevel: 9, effort: 10, palette: meta.hasAlpha })
    .toBuffer();

  if (out.length >= before) {
    return { before, after: before, skipped: true };
  }

  fs.writeFileSync(file, out);
  return { before, after: out.length, skipped: false };
}

async function compressWebp(file, quality) {
  const before = fs.statSync(file).size;
  const out = await sharp(file).webp({ quality, effort: 6 }).toBuffer();

  if (out.length >= before) {
    return { before, after: before, skipped: true };
  }

  fs.writeFileSync(file, out);
  return { before, after: out.length, skipped: false };
}

async function runDir(dir, maxDim, label) {
  if (!fs.existsSync(dir)) return { files: 0, saved: 0 };

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));
  let saved = 0;

  for (const name of files) {
    const file = path.join(dir, name);
    const { before, after, skipped } = await compressPng(file, maxDim);
    if (!skipped && after < before) {
      saved += before - after;
      const pct = Math.round((1 - after / before) * 100);
      console.log(`  ${name}: ${formatBytes(before)} → ${formatBytes(after)} (-${pct}%)`);
    }
  }

  console.log(`${label}: ${files.length} files, saved ${formatBytes(saved)}`);
  return { files: files.length, saved };
}

async function main() {
  console.log("Compressing pet sprites…");
  await runDir(path.join(root, "public/pets"), PET_MAX, "Pets");

  console.log("\nCompressing site icons…");
  for (const rel of ["public/images/game-icon.png", "public/icon.png"]) {
    const file = path.join(root, rel);
    if (!fs.existsSync(file)) continue;
    const before = fs.statSync(file).size;
    const out = await sharp(file)
      .resize(ICON_MAX, ICON_MAX, { fit: "inside", withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 10, palette: true })
      .toBuffer();
    if (out.length < before) {
      fs.writeFileSync(file, out);
      console.log(`  ${rel}: ${formatBytes(before)} → ${formatBytes(out.length)}`);
    }
  }

  const hero = path.join(root, "public/images/hero.webp");
  if (fs.existsSync(hero)) {
    console.log("\nCompressing hero.webp…");
    const { before, after, skipped } = await compressWebp(hero, HERO_QUALITY);
    if (!skipped) {
      console.log(`  hero.webp: ${formatBytes(before)} → ${formatBytes(after)}`);
    }
  }

  const favicon = path.join(root, "src/app/favicon.ico");
  if (fs.existsSync(favicon)) {
    try {
      const before = fs.statSync(favicon).size;
      const out = await sharp(favicon)
        .resize(48, 48, { fit: "cover" })
        .png()
        .toBuffer();
      if (out.length < before) {
        fs.writeFileSync(favicon, out);
        console.log(`\nFavicon: ${formatBytes(before)} → ${formatBytes(out.length)}`);
      }
    } catch {
      console.log("\nFavicon: skipped (unsupported format)");
    }
  }

  const petsDir = path.join(root, "public/pets");
  const total = fs
    .readdirSync(petsDir)
    .filter((f) => f.endsWith(".png"))
    .reduce((sum, f) => sum + fs.statSync(path.join(petsDir, f)).size, 0);
  console.log(`\nTotal pets folder: ${formatBytes(total)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
