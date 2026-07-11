#!/usr/bin/env node
/**
 * Check whether a proposed blog topic overlaps existing guides/posts.
 *
 * Usage:
 *   node scripts/analytics/blog-topic-check.mjs "how to get eggs in evomon"
 *   node scripts/analytics/blog-topic-check.mjs --keywords "egg,shiny egg,prismatic"
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../..", import.meta.url).pathname;

const GUIDE_PATHS = [
  "src/data/mutations.ts",
  "src/data/beginner-guide.ts",
  "src/data/tier-list.ts",
  "src/data/blog-posts.ts",
  "src/app/guides",
  "src/app/tier-list",
  "src/app/blog",
];

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

function collectFiles(dir) {
  const abs = join(ROOT, dir);
  let stat;
  try {
    stat = statSync(abs);
  } catch {
    return [];
  }
  if (stat.isFile()) return [abs];
  const out = [];
  for (const name of readdirSync(abs)) {
    if (name.startsWith(".")) continue;
    out.push(...collectFiles(join(dir, name)));
  }
  return out.filter((f) => /\.(tsx?|md)$/.test(f));
}

function loadBlogPostsFromFile() {
  const text = readFileSync(join(ROOT, "src/data/blog-posts.ts"), "utf8");
  const posts = [];
  const slugMatches = [...text.matchAll(/slug:\s*"([^"]+)"/g)];
  const titleMatches = [...text.matchAll(/title:\s*"([^"]+)"/g)];
  const descMatches = [...text.matchAll(/description:\s*\n?\s*"([^"]+)"/g)];
  const gscBlocks = [...text.matchAll(/gscTargets:\s*\[([\s\S]*?)\]/g)];

  for (let i = 0; i < slugMatches.length; i++) {
    const gscRaw = gscBlocks[i]?.[1] ?? "";
    const gscTargets = [...gscRaw.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    posts.push({
      slug: slugMatches[i][1],
      title: titleMatches[i]?.[1] ?? "",
      description: descMatches[i]?.[1] ?? "",
      gscTargets,
    });
  }
  return posts;
}

function loadCorpus() {
  const files = GUIDE_PATHS.flatMap(collectFiles);
  const docs = files.map((file) => {
    const rel = relative(ROOT, file);
    const text = readFileSync(file, "utf8");
    return { rel, tokens: new Set(tokenize(text)) };
  });

  for (const post of loadBlogPostsFromFile()) {
    const blob = [post.title, post.description, ...post.gscTargets].join(" ");
    docs.push({
      rel: `blog:${post.slug}`,
      tokens: new Set(tokenize(blob)),
    });
  }

  return docs;
}

function jaccard(a, b) {
  const inter = [...a].filter((t) => b.has(t)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : inter / union;
}

function main() {
  const args = process.argv.slice(2);
  let query = args.join(" ").trim();
  if (args[0] === "--keywords") {
    query = args.slice(1).join(" ");
  }
  if (!query) {
    console.error("Usage: node scripts/analytics/blog-topic-check.mjs \"topic keywords\"");
    process.exit(1);
  }

  const queryTokens = new Set(tokenize(query));
  const corpus = loadCorpus();
  const scored = corpus
    .map((doc) => ({ ...doc, score: jaccard(queryTokens, doc.tokens) }))
    .filter((d) => d.score > 0.05)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const top = scored[0]?.score ?? 0;
  let verdict = "WRITE";
  let reason = "Low overlap — safe to draft a new blog post.";

  if (top >= 0.55) {
    verdict = "SKIP";
    reason = "High overlap — existing page likely owns this intent. Add internal links instead.";
  } else if (top >= 0.35) {
    verdict = "SHORT_ANSWER_ONLY";
    reason = "Medium overlap — write a ≤600-word answer post linking to the hub, not a full guide.";
  }

  console.log(JSON.stringify({ query, verdict, reason, topOverlap: top, matches: scored }, null, 2));
}

main();
