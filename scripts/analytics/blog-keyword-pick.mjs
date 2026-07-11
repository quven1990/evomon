#!/usr/bin/env node
/**
 * Score GSC queries for blog/YouTube long-tail opportunity.
 *
 * Usage:
 *   node scripts/analytics/fetch-all.mjs --days 30 | node scripts/analytics/blog-keyword-pick.mjs
 *   node scripts/analytics/blog-keyword-pick.mjs --file /tmp/gsc.json
 *
 * Only outputs queries that pass the long-tail opportunity rubric.
 */

import { readFileSync } from "node:fs";

const BRAND_HEAD = [
  /^evomon wiki$/i,
  /^wiki evomon$/i,
  /^evomon$/,
  /^evomon pokedex$/i,
  /^evomon dex$/i,
  /^evomon codes$/i,
  /^evomon tier list$/i,
  /^evomon team builder$/i,
  /^evomon roblox$/i,
];

/** Pages that already own broad intent — blog only for unanswered slices. */
const OWNED_BROAD = [
  { pattern: /shiny egg|shiny eggs/i, owner: "/guides/mutations/shiny-egg", maxCtr: 0.12, maxPos: 4 },
  { pattern: /^evomon shiny$/i, owner: "/guides/mutations", maxCtr: 0.08, maxPos: 6 },
  { pattern: /type chart|weakness/i, owner: "/type-chart", maxCtr: 0.05, maxPos: 5 },
  { pattern: /^shiny evomon$/i, owner: "/guides/mutations", maxCtr: 0.1, maxPos: 6 },
];

const BLOGGED = [
  "how to get eggs in evomon",
  "how to get egg in evomon",
  "prismatic egg evomon",
  "evomon prismatic egg",
];

const HUB_SKIP = [
  { pattern: /type chart|weakness chart|weaknesses/i, owner: "/type-chart" },
  { pattern: /shiny vs|sparkle vs|difference between shiny/i, owner: "/guides/mutations/shiny-vs-sparkle" },
];

function wordCount(q) {
  return q.trim().split(/\s+/).length;
}

function isQuestion(q) {
  return /^(how|what|why|when|where|does|can|is|are)\b/i.test(q) || /\bhow to\b/i.test(q);
}

function ownedByHub(query, ctr, pos) {
  for (const rule of OWNED_BROAD) {
    if (rule.pattern.test(query) && ctr >= rule.maxCtr && pos <= rule.maxPos) {
      return rule.owner;
    }
  }
  return null;
}

function scoreQuery(row) {
  const q = row.query.trim();
  const words = wordCount(q);
  const imp = row.impressions ?? 0;
  const clicks = row.clicks ?? 0;
  const ctr = imp > 0 ? clicks / imp : 0;
  const pos = row.position ?? 99;

  const reasons = [];
  const reject = [];

  if (BRAND_HEAD.some((re) => re.test(q))) {
    reject.push("brand/head — not blog intent");
  }
  if (BLOGGED.some((b) => q.toLowerCase() === b)) {
    reject.push("already blogged");
  }
  if (HUB_SKIP.some((h) => h.pattern.test(q))) {
    reject.push(`dedicated page exists (${HUB_SKIP.find((h) => h.pattern.test(q)).owner})`);
  }
  if (words < 3 && !isQuestion(q)) {
    reject.push("too short — need 3+ words or clear question");
  }
  if (imp < 15) {
    reject.push("demand too low (<15 imp/30d)");
  }
  if (pos <= 2 && ctr >= 0.15) {
    reject.push("already winning SERP slot");
  }

  const hub = ownedByHub(q, ctr, pos);
  if (hub) {
    reject.push(`hub owns it (${hub}, CTR ${(ctr * 100).toFixed(0)}%, pos ${pos.toFixed(1)})`);
  }

  // Opportunity signals
  let score = 0;
  if (words >= 5) {
    score += 25;
    reasons.push("long-tail (5+ words)");
  } else if (words >= 4) {
    score += 18;
    reasons.push("mid-tail (4 words)");
  } else if (words >= 3) {
    score += 10;
    reasons.push("3-word query");
  }

  if (isQuestion(q)) {
    score += 20;
    reasons.push("question intent");
  }
  if (imp >= 50) {
    score += 20;
    reasons.push("solid demand");
  } else if (imp >= 25) {
    score += 12;
    reasons.push("moderate demand");
  } else {
    score += 5;
    reasons.push("emerging demand");
  }

  if (pos >= 4 && pos <= 12) {
    score += 22;
    reasons.push("striking distance (pos 4–12)");
  } else if (pos > 12 && pos <= 20) {
    score += 10;
    reasons.push("needs lift (pos 12–20)");
  }

  if (ctr < 0.04 && imp >= 25) {
    score += 15;
    reasons.push("CTR underperforming — snippet gap");
  } else if (ctr < 0.08 && imp >= 40) {
    score += 8;
    reasons.push("room to improve CTR");
  }

  if (/\b(chance|vs|difference|pity|without|faster|best way|guarantee)\b/i.test(q)) {
    score += 12;
    reasons.push("narrow modifier — blog-fit");
  }

  const tier = reject.length > 0 ? "REJECT" : score >= 55 ? "P0" : score >= 40 ? "P1" : score >= 28 ? "P2" : "REJECT";

  if (tier === "REJECT" && reject.length === 0) {
    reject.push("score too low — weak opportunity");
  }

  return { query: q, clicks, impressions: imp, ctr, position: pos, words, score, tier, reasons, reject };
}

function readInput() {
  const fileArg = process.argv.indexOf("--file");
  if (fileArg !== -1) {
    const raw = readFileSync(process.argv[fileArg + 1], "utf8");
    return JSON.parse(raw).gsc?.topQueries ?? JSON.parse(raw);
  }
  return new Promise((resolve, reject) => {
    let s = "";
    process.stdin.on("data", (d) => (s += d));
    process.stdin.on("end", () => {
      try {
        resolve(JSON.parse(s).gsc?.topQueries ?? []);
      } catch (e) {
        reject(e);
      }
    });
  });
}

async function main() {
  const queries = await readInput();
  const scored = queries.map(scoreQuery).sort((a, b) => b.score - a.score);

  const picks = scored.filter((r) => r.tier === "P0" || r.tier === "P1");
  const watch = scored.filter((r) => r.tier === "P2").slice(0, 5);
  const rejected = scored.filter((r) => r.tier === "REJECT").slice(0, 8);

  console.log(
    JSON.stringify(
      {
        rubric: "Long-tail (3+ words), 15+ imp, not brand/owned, striking distance pos 4–20",
        picks: picks.map(({ query, impressions, position, ctr, score, tier, reasons }) => ({
          query,
          tier,
          score,
          impressions,
          position: +position.toFixed(1),
          ctr: +(ctr * 100).toFixed(1),
          why: reasons.join("; "),
          youtube: `Evomon ${query.replace(/^evomon\s*/i, "")}`,
        })),
        watch,
        sampleRejected: rejected.map(({ query, reject }) => ({ query, reject })),
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
