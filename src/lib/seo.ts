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
  const title = `Evomon Wiki (${monthLabel}) — Dex, Codes, Guides & Type Chart`;
  const description = `Evomon Wiki on evomon.cc — ${stats.named} dex entries with sprites, ${codeCount} working codes, type chart, tier list & beginner guides. Updated ${monthLabel}. Independent fan wiki for Roblox Evomon.`;

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
        "wiki evomon",
        "evomon dex",
        "evomon team builder",
        "roblox evomon",
      ],
    }),
    title: { absolute: title },
  };
}

export const PAGE_SEO = {
  codes: () => {
    const title = `${codeCount} Free Evomon Codes (${monthLabel}) — Copy & Redeem`;
    const description = `${codeCount} working Evomon codes for ${monthLabel} — including EVO120HYPE & EVO60SPARK. Free Summon Tickets, EXP Fruits, Evolution Stones & Advanced Balls. One-click copy, source labels, and redeem troubleshooting.`;

    return {
      ...buildPageMetadata({
        title,
        description,
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
      title: { absolute: title },
    };
  },

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

  tierList: () => {
    // ≤60 chars total — absolute title skips the layout `| Evomon Wiki` suffix.
    const title = `Best Evomon Tier List (${monthLabel}) — Lavite & S-Tier`;
    const description = `Who's worth evolution stones after Lava Crag? Boss rankings, early catches, starter debates, and a 6-step farm list. Community meta, ${monthLabel}.`;

    return {
      ...buildPageMetadata({
        title,
        description,
        path: "/tier-list",
        ogTitle: title,
        keywords: [
          "evomon tier list",
          "best evomon",
          "evomon rankings",
          "lavite evomon",
          "bluebird evomon",
          "evomon endgame",
        ],
      }),
      title: { absolute: title },
    };
  },

  starters: () =>
    buildPageMetadata({
      title: `Best Evomon Starter — Pick Bubble (${monthLabel})`,
      description:
        "Bubble is the best Evomon starter for most new players. Compare Bubble, Blazpup & Leafbun — element matchups, evolution lines, and who clears Verdant Valley and Lava Crag fastest.",
      path: "/starters",
      ogTitle: `Best Evomon Starter — Bubble vs Blazpup vs Leafbun`,
      keywords: ["evomon best starter", "bubble evomon", "blazpup", "leafbun", "evomon starters"],
    }),

  beginnerGuide: () => {
    const title = `Evomon Beginner Guide — Islands, Lavite & Level 30 (${monthLabel})`;
    const description = `New player route for Roblox Evomon: island catch/skip chart, Lavite on Lava Crag, daily EXP for level 30 & Ascension, and where to spend balls vs evolution stones. Updated ${monthLabel}.`;

    return {
      ...buildPageMetadata({
        title,
        description,
        path: "/guides/beginner",
        ogTitle: title,
        keywords: [
          "evomon guide",
          "evomon beginner guide",
          "how to play evomon",
          "evomon lavite",
          "evomon player exp",
        ],
      }),
      title: { absolute: title },
    };
  },

  level30Guide: () =>
    buildPageMetadata({
      title: "Evomon Level 30 Guide — Ultimate, Ascension & What to Do Next",
      description:
        "Just hit level 30? Unlock your Ultimate, start Ascension, unlock Equipment Dungeons at 40 — the exact order to spend resources so you don't hit a wall.",
      path: "/guides/level-30",
      keywords: ["evomon level 30", "evomon ultimate", "evomon ascension", "evomon endgame"],
    }),

  mutationsGuide: () => {
    const title = `How to Get Shiny Evomon (${monthLabel}) — 149 Pity Trick`;
    const description = `Prismatic looks cool but only shiny boosts stats — don't mix them up. Catch-only pity, shiny egg boss path, and the 149 combo for prismatic shinies. ${monthLabel}.`;

    return {
      ...buildPageMetadata({
        title,
        description,
        path: "/guides/mutations",
        ogTitle: title,
        keywords: [
          "evomon shiny",
          "evomon prismatic",
          "evomon sparkle",
          "evomon shiny egg",
          "evomon shiny hunt",
          "evomon pity",
        ],
      }),
      title: { absolute: title },
    };
  },

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

  privacy: () =>
    buildPageMetadata({
      title: "Privacy Policy — Evomon Wiki",
      description:
        "How evomon.cc handles analytics, advertising (including Google AdSense), cookies, email contact, and what we do not collect. Independent fan wiki — no Roblox accounts.",
      path: "/privacy",
      ogTitle: "Privacy Policy — evomon.cc",
      keywords: ["evomon wiki privacy", "evomon.cc privacy policy"],
    }),

  terms: () =>
    buildPageMetadata({
      title: "Terms of Use — Evomon Wiki",
      description:
        "Terms for using evomon.cc: unofficial fan site disclaimer, code accuracy limits, advertising, and IP notice. Not affiliated with Roblox or Evomon developers.",
      path: "/terms",
      ogTitle: "Terms of Use — evomon.cc",
      keywords: ["evomon wiki terms", "evomon.cc terms of use"],
    }),

  cookies: () =>
    buildPageMetadata({
      title: "Cookies — Evomon Wiki",
      description:
        "Cookie categories on evomon.cc: analytics (Plausible, Google Analytics, Clarity), advertising partners, and how to control them.",
      path: "/cookies",
      ogTitle: "Cookies — evomon.cc",
      keywords: ["evomon wiki cookies", "evomon.cc cookie policy"],
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
