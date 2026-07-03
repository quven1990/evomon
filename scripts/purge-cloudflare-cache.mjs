/**
 * Purge Cloudflare edge cache for evomon.cc after a Pages deploy.
 *
 * Local: add CLOUDFLARE_API_TOKEN to `.env` (gitignored).
 * CI (GitHub Actions): add the same name under repo Settings → Secrets.
 *
 * Token permissions (custom token):
 * - Account → Cloudflare Pages → Edit
 * - Zone → Cache Purge → Purge
 * - Zone → Zone → Read
 * - Zone Resources → Include → evomon.cc
 */

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ZONE_ID = "01e933899a0edf33feee6772fef366a4"; // evomon.cc

function loadDotEnv() {
  const envPath = join(dirname(fileURLToPath(import.meta.url)), "..", ".env");
  if (!existsSync(envPath)) return;

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

async function purgeCache() {
  loadDotEnv();

  const token = process.env.CLOUDFLARE_API_TOKEN;
  const isCI = process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";

  if (!token) {
    const message =
      "CLOUDFLARE_API_TOKEN is not set. Add it to GitHub Secrets for push-to-deploy purge.";
    if (isCI) {
      throw new Error(message);
    }
    console.warn(`\n⚠️  Skipping Cloudflare cache purge: ${message}\n`);
    return;
  }

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ purge_everything: true }),
    },
  );

  const payload = await response.json();

  if (!response.ok || !payload.success) {
    const detail =
      payload.errors?.map((e) => e.message).join("; ") || response.statusText;
    throw new Error(`Cloudflare cache purge failed: ${detail}`);
  }

  console.log("✅ Cloudflare cache purged for evomon.cc");
}

purgeCache().catch((error) => {
  console.error(`\n❌ ${error.message}\n`);
  process.exit(1);
});
