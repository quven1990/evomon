import {
  activeCodes,
  codesFaq,
  codeTroubleshooting,
  CODES_DATA_CHECKED,
  CODES_LAST_UPDATED,
  sortCodesByTrust,
  watchlistCodes,
} from "@/data/codes";
import { getAllBlogPosts } from "@/data/blog-posts";
import { DEX_LAST_CHECKED, dexStats } from "@/data/dex";
import { UPDATE_LOG_LAST_PUBLISHED } from "@/data/update-log";
import { typeChart } from "@/data/type-chart";
import { INDEXABLE_DEX_SLUGS } from "@/lib/indexing";
import { GAME } from "@/lib/game";
import { SITE, canonical } from "@/lib/site";

const stats = dexStats();

function blogLinksBlock(): string {
  const posts = getAllBlogPosts();
  if (posts.length === 0) {
    return `- [Blog](${canonical("/blog")}): Short GSC answer posts — community-sourced, links to full guides.`;
  }
  return [
    `- [Blog index](${canonical("/blog")}): Short GSC answer posts — community-sourced, links to full guides.`,
    ...posts.map(
      (post) =>
        `- [${post.title}](${canonical(`/blog/${post.slug}`)}): ${post.description}`,
    ),
  ].join("\n");
}

function lines(...parts: string[]) {
  return parts.filter(Boolean).join("\n");
}

/** Curated index for LLMs — https://llmstxt.org */
export function generateLlmsTxt(): string {
  const officialCount = activeCodes.filter((c) => c.source === "official").length;

  return lines(
    `# ${SITE.name}`,
    "",
    `> Independent fan wiki for ${GAME.fullName} — ${activeCodes.length} source-labeled redeem codes, dex gallery (${stats.named}/${stats.total} slots), type chart, team builder, and progression guides. Not affiliated with ${GAME.developer} or Roblox Corporation.`,
    "",
    `${SITE.domain} is a community tools site. Codes are tagged official (Roblox game page), community (milestone reports), or third-party. Official codes: ${officialCount}. Last code update: ${CODES_LAST_UPDATED}. Dex last checked: ${DEX_LAST_CHECKED}.`,
    "",
    "Redeem codes in-game only: Settings (gear icon) → Code box at bottom → paste → confirm. Never enter passwords on fan sites.",
    "",
    `Contact for corrections: ${SITE.emails.contact}`,
    `Privacy questions: ${SITE.emails.privacy}`,
    "",
    "## Primary tools",
    `- [Evomon Codes](${canonical("/codes")}): Active redeem codes with rewards, source labels, copy buttons, redeem guide, and troubleshooting.`,
    `- [Evomon Dex](${canonical("/dex")}): Searchable pokedex gallery for all ${stats.total} numbered slots; ${stats.named} named creatures with sprites.`,
    `- [Type Chart](${canonical("/type-chart")}): Element strengths and weaknesses for team building.`,
    `- [Team Builder](${canonical("/team-builder")}): Plan a 3-pet party, check type coverage, share via URL.`,
  "",
    "## Guides",
    `- [Best Starter](${canonical("/starters")}): Bubble vs Blazpup vs Leafbun — early-game recommendation (Bubble for most players).`,
    `- [Beginner Guide](${canonical("/guides/beginner")}): Island catch/skip route, Lavite priority, player EXP dailies, ball & stone economy.`,
    `- [Equipment Dungeons (Lv40+)](${canonical("/guides/level-30")}): Silent Sands gear runs — level 30 recap links to beginner guide.`,
    `- [Shiny & Prismatic hub](${canonical("/guides/mutations")}): Full mutations reference — pity (600/150), shiny eggs, 149 trick, boss farm routes.`,
    `- [Shiny vs Sparkle](${canonical("/guides/mutations/shiny-vs-sparkle")}): Stat boost vs cosmetic prismatic; Mutation vs Talent vs Nature; community odds.`,
    `- [Shiny Egg Guide](${canonical("/guides/mutations/shiny-egg")}): Boss lines without field pity, Catch Master, Prismatic Ball hatches.`,
    `- [Farming Guide](${canonical("/guides/farming")}): 7-day login rewards, daily EXP, coins, and material routes.`,
    `- [Tier List hub](${canonical("/tier-list")}): Community endgame and early-route rankings (July 2026 synthesis).`,
    `- [Early Route Carries](${canonical("/tier-list/early-carries")}): Best picks Verdant Valley–Lava Crag; Bubble starter vs Lavite stone ROI.`,
    `- [Evolution Priority](${canonical("/tier-list/evolution-priority")}): Evolution Stone spend order — Lavite-first on most routes.`,
    "",
    "## Blog",
    blogLinksBlock(),
    "",
    "## Trust & metadata",
    `- [About & data policy](${canonical("/about")}): Unofficial disclaimer, how we source data, freshness dates.`,
    `- [Update log](${canonical("/update-log")}): Chronological site changelog — guides, dex, SEO, and quality fixes (last entry ${UPDATE_LOG_LAST_PUBLISHED}).`,
    `- [Privacy policy](${canonical("/privacy")}): Analytics, advertising, cookies, email contact, and what we do not collect.`,
    `- [Terms of use](${canonical("/terms")}): Unofficial disclaimer, accuracy limits, advertising.`,
    `- [Cookies](${canonical("/cookies")}): Cookie categories and controls.`,
    `- [Play Evomon on Roblox](${GAME.robloxUrl}): Official game page.`,
    `- [Sitemap](${canonical("/sitemap.xml")}): Indexable pages for search engines.`,
    `- [Full LLM context](${canonical("/llms-full.txt")}): Expanded markdown with codes list, type chart, FAQs.`,
    "",
    "## Optional",
    `- [Homepage](${canonical("/")}): Site hub and feature overview.`,
    `- [Robots](${canonical("/robots.txt")}): Crawler rules.`,
    "Individual /dex/[name] pages exist for navigation but are thin reference stubs; prefer the main Dex gallery and llms-full.txt for creature lists.",
  );
}

/** Expanded machine-readable context for AI assistants */
export function generateLlmsFullTxt(): string {
  const sorted = sortCodesByTrust(activeCodes);

  const codesBlock = sorted
    .map((c) => {
      const note = c.sourceNote ? ` — ${c.sourceNote}` : "";
      return `- **${c.code}** (${c.source}): ${c.reward}${note}`;
    })
    .join("\n");

  const watchlistBlock = watchlistCodes
    .map((c) => `- ${c.code} (${c.source}): ${c.reward}${c.sourceNote ? ` — ${c.sourceNote}` : ""}`)
    .join("\n");

  const typeChartBlock = typeChart
    .map((row) => `- **${row.attacker}** strong vs ${row.strong.join(", ")}; weak to ${row.weak.join(", ")}`)
    .join("\n");

  const faqBlock = codesFaq.map((f) => `**Q: ${f.q}**\n${f.a}`).join("\n\n");

  const troubleBlock = codeTroubleshooting
    .map((t) => `- ${t.problem}: ${t.fix}`)
    .join("\n");

  const startersBlock = GAME.starters
    .map((s) => `- **${s.name}** (${s.type}): ${s.pick}`)
    .join("\n");

  return lines(
    `# ${SITE.name} — full context`,
    "",
    `> Machine-readable companion to ${canonical("/llms.txt")}. Independent ${GAME.fullName} fan wiki. Data checked ${CODES_DATA_CHECKED}.`,
    "",
    "## Game",
    `- Name: ${GAME.name}`,
    `- Platform: ${GAME.platform}`,
    `- Developer: ${GAME.developer} (not affiliated with this site)`,
    `- Release: ${GAME.releaseDate}`,
    `- Genre: ${GAME.genre}`,
    `- Play: ${GAME.robloxUrl}`,
    "",
    "## How to redeem codes",
    "1. Open Evomon on Roblox and finish the tutorial.",
    "2. Tap the gear icon (Settings) in the top bar.",
    "3. Scroll to the Code box at the bottom.",
    "4. Paste the code exactly (case-sensitive) and confirm with OK.",
    "5. If a code fails: rejoin a fresh server, try official codes first, check capitalization.",
    "",
    "## Active codes",
    codesBlock,
    "",
    "## Watchlist (unconfirmed)",
    watchlistBlock,
    "",
    "## Code troubleshooting",
    troubleBlock,
    "",
    "## Codes FAQ",
    faqBlock,
    "",
    "## Starters",
    startersBlock,
    "",
    "**Recommendation:** Bubble (Water) is the safest starter for Verdant Valley and early island matchups.",
    "",
    "Evolution lines (community data):",
    "- Bubble → Bubboxer → Bubblade",
    "- Blazpup → Blazgrowl → Blazmane",
    "- Leafbun → Leafroge → Leafblade",
    "",
    "## Tier list snapshot (overall, community meta — July 2026)",
    "- **S (endgame):** Lavite/Lavarock, Bluebird/Volcrest, Frostlet, Whispurr, Arcub, Tarro",
    "- **A:** Gobfish, Sparkit, Pebble line, Dattbug, Vippit, Pompor, Stardrift",
    "- **Early route:** Bubble starter, Pebble, Lavite on Lava Crag, Sparkit, Clampip",
    "- **Debated:** Bubble strong early / weak in some endgame lists; Stardrift ranges S–C",
    "",
    "Early route catches: Pebble (Verdant Valley), Clampip (Petal Pond), Sparkit (early routes).",
    "Evolution stone order (mid-game): fund Lavite/Lavarock first on Lava Crag routes, then blocker picks — see evolution priority guide.",
    "",
    "## Mutations snapshot (community-sourced — July 2026)",
    "- **Shiny:** ~1/500 odds; ~600 pity per species; small stat boost (speed matters).",
    "- **Prismatic / Sparkle (UI):** cosmetic only; ~150 capture pity; five-point star icon.",
    "- **Shiny eggs:** drop from catches after battle; boss lines often require eggs (no field shiny pity).",
    "- **149 pity trick:** raise prismatic pity to 149/150, stop catching, wait for natural shiny, King/Prismatic Ball.",
    "- **Farm routes:** Lavite (Lava Crag), Bluebird (Raven Ridge), Sparkit (early routes).",
    "",
    "## Guide cluster pages (focused URLs)",
    `- Mutations hub: ${canonical("/guides/mutations")}`,
    `- Shiny vs Sparkle: ${canonical("/guides/mutations/shiny-vs-sparkle")}`,
    `- Shiny egg & bosses: ${canonical("/guides/mutations/shiny-egg")}`,
    `- Tier list hub: ${canonical("/tier-list")}`,
    `- Early carries (0–30): ${canonical("/tier-list/early-carries")}`,
    `- Evolution stone priority: ${canonical("/tier-list/evolution-priority")}`,
    "",
    "## Blog (GSC answer posts)",
    blogLinksBlock(),
    "",
    "## Type chart",
    typeChartBlock,
    "",
    "## Dex",
    `- ${stats.named} named creatures across ${stats.total} numbered slots.`,
    `- Gallery: ${canonical("/dex")}`,
    `- Indexable detail pages (${INDEXABLE_DEX_SLUGS.length}): ${INDEXABLE_DEX_SLUGS.map((s) => canonical(`/dex/${s}`)).join(", ")}`,
    `- Empty unpublished slots are not invented.`,
    "",
    "## Site maintenance",
    `- Maintainer: Remy (see ${canonical("/about")})`,
    `- Update log (last entry ${UPDATE_LOG_LAST_PUBLISHED}): ${canonical("/update-log")}`,
    `- Machine-readable index: ${canonical("/llms.txt")}`,
    "",
    "## Data trust labels",
    "- **official** (codes): Listed on Roblox game description",
    "- **community**: Player-reported milestone or Discord codes",
    "- **third-party**: Seen on fan sites — try in fresh server",
    "- **cross-source** (dex): Name/element matches multiple community wikis",
    "",
    "## Site pages",
    `- Codes: ${canonical("/codes")}`,
    `- Dex: ${canonical("/dex")}`,
    `- Team builder: ${canonical("/team-builder")}`,
    `- About: ${canonical("/about")}`,
    `- Update log: ${canonical("/update-log")}`,
    `- Blog index: ${canonical("/blog")}`,
    `- Sitemap: ${canonical("/sitemap.xml")}`,
    `- Index: ${canonical("/llms.txt")}`,
    "",
    "## Corrections",
    `Email ${SITE.emails.contact} with page URL and in-game observation. Privacy: ${SITE.emails.privacy}. This site does not ask for Roblox passwords.`,
  );
}
