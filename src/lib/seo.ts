import type { Metadata } from "next";
import { NOINDEX_FOLLOW } from "@/lib/indexing";
import { activeCodes } from "@/data/codes";
import { dexStats } from "@/data/dex";
import { GAME } from "@/lib/game";
import { canonical, monthYear, SITE } from "@/lib/site";

const stats = dexStats();
const codeCount = activeCodes.length;
const monthLabel = monthYear();

const OG_IMAGE = {
  url: "/images/game-icon.png",
  width: 512,
  height: 512,
  alt: `${GAME.name} — Roblox creature collection game`,
};

type PageMetaInput = {
  /** Shown before ` | Evomon Wiki` via layout template (keep ≤ ~58 chars). */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** Override for Open Graph / Twitter when title template would look odd. */
  ogTitle?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogTitle,
}: PageMetaInput): Metadata {
  const url = canonical(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle ?? title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/** Homepage — uses absolute title to avoid template suffix. */
export function homeMetadata(): Metadata {
  const title = `Evomon Wiki — ${codeCount} Free Codes, Dex & Team Builder (${monthLabel})`;
  const description = `Roblox Evomon tools that save you time: ${codeCount} working codes (one-click copy), ${stats.named} dex entries with sprites, free team builder & type chart. Updated ${monthLabel}.`;

  return {
    ...buildPageMetadata({
      title,
      description,
      path: "/",
      ogTitle: title,
      keywords: [
        "evomon",
        "evomon roblox",
        "evomon codes",
        "evomon wiki",
        "evomon dex",
        "evomon team builder",
        "roblox evomon",
      ],
    }),
    title: { absolute: title },
  };
}

export const PAGE_SEO = {
  codes: () =>
    buildPageMetadata({
      title: `${codeCount} Free Evomon Codes (${monthLabel}) — Copy & Redeem`,
      description: `All working Evomon codes for ${monthLabel}: free EXP Fruits, Advanced Balls, Coins & Evolution Stones. One-click copy, source-labeled by trust level, plus fix guide if a code fails.`,
      path: "/codes",
      ogTitle: `Free Evomon Codes (${monthLabel}) — ${codeCount} Active Codes`,
      keywords: [
        "evomon codes",
        "roblox evomon codes",
        "evomon codes 2026",
        "free evomon codes",
        "evomon promo codes",
      ],
    }),

  dex: () =>
    buildPageMetadata({
      title: `Evomon Dex — ${stats.named} Pets with Sprites & Type Chart`,
      description: `Browse all ${stats.total} Evomon dex slots — ${stats.named} named pets with sprites, elements, tiers & evolution lines. Filter by type. The visual pokedex Roblox players actually use.`,
      path: "/dex",
      ogTitle: `Evomon Pokedex — ${stats.named} Creatures with Images`,
      keywords: ["evomon dex", "evomon pokedex", "evomon list", "all evomon", "roblox evomon dex"],
    }),

  teamBuilder: () =>
    buildPageMetadata({
      title: "Evomon Team Builder — Build Your Best 3-Pet Squad",
      description:
        "Pick 3 Evomons, see type coverage gaps instantly, and share your squad link. Free team builder with presets for early game, starters & dungeons — no login needed.",
      path: "/team-builder",
      ogTitle: "Free Evomon Team Builder — Plan & Share Your Squad",
      keywords: ["evomon team builder", "evomon best team", "evomon team comp", "evomon party"],
    }),

  typeChart: () =>
    buildPageMetadata({
      title: "Evomon Type Chart — Every Weakness & Strength",
      description:
        "Stop losing type matchups. Full Evomon element chart — what beats Fire, Water, Grass & every type. Build smarter teams and clear islands faster.",
      path: "/type-chart",
      keywords: ["evomon type chart", "evomon weaknesses", "evomon type matchup", "evomon elements"],
    }),

  tierList: () =>
    buildPageMetadata({
      title: `Evomon Tier List (${monthLabel}) — Best Pets & Starters Ranked`,
      description: `Who's S-tier in Evomon right now? Community overall rankings for starters, early-route catches & team roles — with notes on when to use each pick.`,
      path: "/tier-list",
      keywords: ["evomon tier list", "best evomon", "evomon rankings", "evomon best starter"],
    }),

  starters: () =>
    buildPageMetadata({
      title: "Best Evomon Starter? Bubble vs Blazpup vs Leafbun",
      description:
        "Pick wrong and you'll grind twice as long. Compare all 3 Evomon starters — matchups, evolution lines & who wins early game (most players choose Bubble).",
      path: "/starters",
      keywords: ["evomon best starter", "bubble evomon", "blazpup", "leafbun", "evomon starters"],
    }),

  beginnerGuide: () =>
    buildPageMetadata({
      title: "Evomon Beginner Guide — 0 to Level 30 Without Wasting Time",
      description:
        "New to Evomon? Redeem codes first, pick Bubble, hit level 30, unlock Ultimate — step-by-step route from tutorial to Ascension without common beginner traps.",
      path: "/guides/beginner",
      keywords: ["evomon guide", "evomon beginner guide", "how to play evomon", "evomon tips"],
    }),

  level30Guide: () =>
    buildPageMetadata({
      title: "Evomon Level 30 Guide — Ultimate, Ascension & What to Do Next",
      description:
        "Just hit level 30? Unlock your Ultimate, start Ascension, unlock Equipment Dungeons at 40 — the exact order to spend resources so you don't hit a wall.",
      path: "/guides/level-30",
      keywords: ["evomon level 30", "evomon ultimate", "evomon ascension", "evomon endgame"],
    }),

  mutationsGuide: () =>
    buildPageMetadata({
      title: "Evomon Shiny & Sparkle Guide — Pity, Odds & Hunt Routes",
      description:
        "Shiny vs Sparkle explained: pity counts (~600 / ~150), combat bonuses, and when to hunt rare forms vs when to focus on progression. Don't waste stones on flex picks.",
      path: "/guides/mutations",
      keywords: ["evomon shiny", "evomon sparkle", "evomon mutations", "evomon shiny hunt"],
    }),

  farmingGuide: () =>
    buildPageMetadata({
      title: "Evomon Farming Guide — Daily EXP, Coins & Best Routes",
      description:
        "2,500+ player EXP per day: 7-day login rewards, daily quests, EXP Challenge tickets, Equipment Challenge loop — plus coin & material farms that scale.",
      path: "/guides/farming",
      keywords: [
        "evomon farming",
        "evomon exp farm",
        "evomon coins",
        "evomon grind",
        "evomon login rewards",
        "evomon 7 day login",
      ],
    }),

  about: () =>
    buildPageMetadata({
      title: "About Evomon Wiki — Sources, Disclaimer & Data Policy",
      description:
        "Independent fan site for Roblox Evomon — not affiliated with the developers. How we label codes and dex data, what we verify, freshness dates, and how to report errors.",
      path: "/about",
      ogTitle: "About evomon.cc — Trust & Transparency",
      keywords: ["evomon wiki", "evomon fan site", "evomon disclaimer", "evomon data sources"],
    }),
} as const;

export function dexPetMetadata(entry: {
  name: string;
  number: number;
  element: string;
  tier: string | null;
}): Metadata {
  const num = String(entry.number).padStart(3, "0");
  const tierBit = entry.tier ? ` · ${entry.tier}-Tier` : "";
  const title = `${entry.name} Evomon — ${entry.element} Type #${num}${tierBit}`;
  const description = `${entry.name} — #${entry.number} ${entry.element}-type Evomon on evomon.cc. Sprite and dex slot info; see the full gallery for filters and team tools.`;

  return {
    ...buildPageMetadata({
      title,
      description,
      path: `/dex/${entry.name.toLowerCase()}`,
      ogTitle: `${entry.name} — Evomon #${num} Dex Entry`,
      keywords: [
        `${entry.name.toLowerCase()} evomon`,
        `evomon ${entry.name.toLowerCase()}`,
        `${entry.element.toLowerCase()} evomon`,
      ],
    }),
    robots: NOINDEX_FOLLOW,
  };
}
