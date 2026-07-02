#!/usr/bin/env node
/**
 * Downloads pet sprites into public/pets/ for reliable local serving.
 * Sources: CDN manifest → evomon.wiki /evomon/ → extra CDN guesses
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public/pets");
const imagesDir = path.join(root, "public/images");
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/pet-image-manifest.json"), "utf8"),
);

const CDN =
  "https://noccvatccxpakfedhysz.supabase.co/storage/v1/object/public/pet-images/catalog";
const WIKI = "https://www.evomon.wiki/evomon";

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(imagesDir, { recursive: true });

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) return false;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) return false;
  fs.writeFileSync(dest, buf);
  return true;
}

function candidates(slug, manifestFile) {
  const urls = [];
  if (manifestFile) urls.push(`${CDN}/${manifestFile}`);
  urls.push(`${WIKI}/${slug}.png`);
  urls.push(`${CDN}/${slug}.png`);
  urls.push(`${CDN}/evomon-${slug}.png`);
  return urls;
}

let ok = 0;
let fail = 0;

for (const [slug, manifestFile] of Object.entries(manifest)) {
  const dest = path.join(outDir, `${slug}.png`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 200) {
    ok++;
    continue;
  }
  let saved = false;
  for (const url of candidates(slug, manifestFile)) {
    if (await download(url, dest)) {
      saved = true;
      ok++;
      process.stdout.write(".");
      break;
    }
  }
  if (!saved) {
    fail++;
    process.stdout.write("x");
  }
}

console.log(`\nPets: ${ok} ok, ${fail} missing`);

// Roblox official game icon
const iconRes = await fetch(
  "https://thumbnails.roblox.com/v1/games/icons?universeIds=9826885587&size=512x512&format=Png&isCircular=false",
);
const iconJson = await iconRes.json();
const iconUrl = iconJson?.data?.[0]?.imageUrl;
if (iconUrl) {
  await download(iconUrl, path.join(imagesDir, "game-icon.png"));
  await download(iconUrl, path.join(root, "public/icon.png"));
  console.log("Game icon saved");
}

// Hero background from evomon.app (webp)
const heroOk = await download("https://evomon.app/images/hero.webp", path.join(imagesDir, "hero.webp"));
console.log(heroOk ? "Hero webp saved" : "Hero download skipped");
