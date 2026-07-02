#!/usr/bin/env node
/**
 * Generate app icons from public/images/game-icon.png
 * Outputs: src/app/icon.png, apple-icon.png, favicon.ico
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public/images/game-icon.png");
const appDir = path.join(root, "src/app");

async function main() {
  if (!fs.existsSync(src)) {
    console.error("Missing", src);
    process.exit(1);
  }

  const icon32 = path.join(appDir, "icon.png");
  const apple = path.join(appDir, "apple-icon.png");
  const favicon = path.join(appDir, "favicon.ico");

  await sharp(src).resize(32, 32, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(icon32);
  await sharp(src).resize(180, 180, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(apple);

  const png16 = await sharp(src).resize(16, 16, { fit: "cover" }).png().toBuffer();
  const png32 = await fs.promises.readFile(icon32);
  const ico = await pngToIco([png16, png32]);
  await fs.promises.writeFile(favicon, ico);

  console.log("Generated:", path.relative(root, icon32), path.relative(root, apple), path.relative(root, favicon));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
