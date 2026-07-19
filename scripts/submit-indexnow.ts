/**
 * IndexNow submitter — streaming mode by default.
 *
 * Bing flags full-sitemap POSTs as "batch mode". Default behavior:
 * map git-changed files → small URL list → submit only those.
 *
 * Usage:
 *   npm run indexnow              # changed URLs since HEAD~1
 *   npm run indexnow:all          # intentional full sitemap (manual only)
 *   npm run indexnow -- https://evomon.cc/blog/foo
 *   INDEXNOW_BASE_REF=origin/main~1 npm run indexnow
 */
import { execSync } from "node:child_process";
import { getIndexNowUrlList, submitIndexNow } from "../src/lib/indexnow";
import { SITE } from "../src/lib/site";

const args = process.argv.slice(2);
const wantAll = args.includes("--all");
const explicitUrls = args.filter((a) => !a.startsWith("-") && /^https?:\/\//.test(a));

function gitChangedFiles(baseRef: string): string[] {
  try {
    const out = execSync(`git diff --name-only ${baseRef}...HEAD`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return out
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

function gitDiffText(baseRef: string, file: string): string {
  try {
    return execSync(`git diff ${baseRef}...HEAD -- ${file}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: 4 * 1024 * 1024,
    });
  } catch {
    return "";
  }
}

function matchAll(text: string, re: RegExp): string[] {
  const out: string[] = [];
  for (const m of text.matchAll(re)) {
    if (m[1]) out.push(m[1]);
  }
  return out;
}

function pathFromAppPage(file: string): string | null {
  const m = file.match(/^src\/app\/(.+)\/page\.tsx$/);
  if (!m) return null;
  const route = m[1]
    .split("/")
    .filter((seg) => !seg.startsWith("[") && !seg.startsWith("("))
    .join("/");
  if (!route || route.includes("[")) return null;
  return route === "" ? "/" : `/${route}`;
}

/** Map changed repo files to canonical page URLs. Shared fan-out files are skipped. */
function urlsFromChangedFiles(files: string[], baseRef: string): string[] {
  const paths = new Set<string>();

  for (const file of files) {
    if (file === "src/data/blog-posts.ts" || file === "src/app/blog/page.tsx") {
      paths.add("/blog");
      const diff = gitDiffText(baseRef, "src/data/blog-posts.ts");
      for (const slug of matchAll(diff, /^\+\s*slug:\s*"([^"]+)"/gm)) {
        paths.add(`/blog/${slug}`);
      }
      // Edited posts: slug usually appears in hunk context
      for (const slug of matchAll(diff, /slug:\s*"([^"]+)"/g)) {
        paths.add(`/blog/${slug}`);
      }
      continue;
    }

    if (file === "src/data/codes.ts" || file === "src/app/codes/page.tsx") {
      paths.add("/codes");
      continue;
    }

    if (file === "src/data/map-zones.ts") {
      paths.add("/map-zones");
      continue;
    }

    if (file === "src/data/update-log.ts") {
      paths.add("/update-log");
      continue;
    }

    if (file.startsWith("src/data/tier-list") || file.includes("/tier-list/")) {
      const pagePath = pathFromAppPage(file);
      if (pagePath) paths.add(pagePath);
      else paths.add("/tier-list");
      continue;
    }

    if (file === "src/data/pet-details.ts" || file === "src/data/pet-combat.ts") {
      const diff = gitDiffText(baseRef, file);
      for (const slug of matchAll(diff, /^\+\s{2}([a-z0-9-]+):\s*\{/gm)) {
        if (slug === "stats" || slug === "traits") continue;
        paths.add(`/dex/${slug}`);
      }
      for (const slug of matchAll(diff, /^\+\s{2}"([a-z0-9-]+)":\s*\{/gm)) {
        paths.add(`/dex/${slug}`);
      }
      paths.add("/dex");
      continue;
    }

    if (file === "src/lib/indexing.ts") {
      const diff = gitDiffText(baseRef, file);
      for (const slug of matchAll(diff, /^\+\s*"([a-z0-9-]+)",?\s*$/gm)) {
        paths.add(`/dex/${slug}`);
      }
      continue;
    }

    const pagePath = pathFromAppPage(file);
    if (pagePath) {
      paths.add(pagePath);
      continue;
    }

    // Shared/infra (components, seo helpers, layout, analytics): leave to crawl — do not fan out.
  }

  return Array.from(paths).map((p) => (p === "/" ? `${SITE.url}/` : `${SITE.url}${p}`));
}

async function main() {
  const baseRef = process.env.INDEXNOW_BASE_REF || "HEAD~1";
  let urlList: string[];

  if (explicitUrls.length > 0) {
    urlList = explicitUrls;
    console.log(`IndexNow: explicit ${urlList.length} URL(s)`);
  } else if (wantAll) {
    urlList = getIndexNowUrlList();
    console.log(`IndexNow: FULL sitemap ${urlList.length} URL(s) (--all)`);
  } else {
    const files = gitChangedFiles(baseRef);
    urlList = urlsFromChangedFiles(files, baseRef);
    console.log(`IndexNow: streaming vs ${baseRef}`);
    console.log(`  changed files: ${files.length}`);
    console.log(`  mapped URLs: ${urlList.length}`);
    if (urlList.length === 0) {
      console.log("IndexNow: nothing to submit (no mapped page changes) — skip.");
      return;
    }
  }

  for (const u of urlList.slice(0, 30)) console.log(`  - ${u}`);
  if (urlList.length > 30) console.log(`  … +${urlList.length - 30} more`);

  const results = await submitIndexNow(urlList);

  for (const result of results) {
    const label = result.ok ? "OK" : "FAIL";
    console.log(`  [${label}] ${result.status} ${result.endpoint}`);
    if (result.body) console.log(`        ${result.body}`);
  }

  if (results.some((r) => !r.ok)) process.exitCode = 1;
}

main().catch((error) => {
  console.error("IndexNow submit failed:", error);
  process.exitCode = 1;
});
