import {
  activeCodes,
  codesFaq,
  codeTroubleshooting,
  CODES_DATA_CHECKED,
  CODES_LAST_UPDATED,
  sortCodesByTrust,
  watchlistCodes,
} from "@/data/codes";
import { DEX_LAST_CHECKED, dexStats } from "@/data/dex";
import { typeChart } from "@/data/type-chart";
import { GAME } from "@/lib/game";
import { SITE, canonical } from "@/lib/site";

const stats = dexStats();

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
    `- [Level 30 Guide](${canonical("/guides/level-30")}): Ultimate, Ascension, equipment dungeons at 40.`,
    `- [Shiny & Prismatic](${canonical("/guides/mutations")}): Shiny vs prismatic pity (600/150), shiny eggs, 149 pity trick, boss routes, Lavite/Bluebird farms.`,
    `- [Farming Guide](${canonical("/guides/farming")}): 7-day login rewards, daily EXP, coins, and material routes.`,
    `- [Tier List](${canonical("/tier-list")}): Community overall rankings for starters and early catches.`,
    "",
    "## Trust & metadata",
    `- [About & data policy](${canonical("/about")}): Unofficial disclaimer, how we source data, freshness dates.`,
    `- [Privacy policy](${canonical("/privacy")}): Analytics, advertising, cookies, email contact, and what we do not collect.`,
    `- [Terms of use](${canonical("/terms")}): Unofficial disclaimer, accuracy limits, advertising.`,
    `- [Cookies](${canonical("/cookies")}): Cookie categories and controls.`,
    `- [Play Evomon on Roblox](${GAME.robloxUrl}): Official game page.`,
    `- [Sitemap](${canonical("/main_sitemap.xml")}): Indexable pages for search engines.`,
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
    "",
    "## Type chart",
    typeChartBlock,
    "",
    "## Dex",
    `- ${stats.named} named creatures across ${stats.total} numbered slots.`,
    `- Gallery: ${canonical("/dex")}`,
    `- Empty unpublished slots are not invented.`,
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
    `- Index: ${canonical("/llms.txt")}`,
    "",
    "## Corrections",
    `Email ${SITE.emails.contact} with page URL and in-game observation. Privacy: ${SITE.emails.privacy}. This site does not ask for Roblox passwords.`,
  );
}
