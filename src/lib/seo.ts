import type { Metadata } from "next";
import type { ElementType } from "@/data/dex";
import type { BlogPost } from "@/data/blog-posts";
import { isIndexableDexSlug, NOINDEX_FOLLOW } from "@/lib/indexing";
import { buildDexPetSeo } from "@/lib/dex-pet";
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
  const title = `Evomon Wiki — Roblox Codes, Dex & Shiny Guide (${monthLabel})`;
  const description = `Unofficial Evomon Wiki for Roblox — codes, pokedex with sprites, shiny guides, type chart & team builder. Updated ${monthLabel}. Browse the dex or copy codes now.`;

  return {
    ...buildPageMetadata({
      title,
      description,
      path: "/",
      ogTitle: "Evomon Wiki — Unofficial Roblox Fan Site",
      keywords: [
        "evomon",
        "evomon roblox",
        "evomon codes",
        "evomon wiki",
        "wiki evomon",
        "roblox evomon wiki",
        "wiki evomon roblox",
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
    const description = `${codeCount} working Evomon codes for ${monthLabel} — including 100DCUNITY, EVO120HYPE & EVO60SPARK. Free Summon Tickets, EXP Fruits, Evolution Stones & Advanced Balls. One-click copy, source labels, and redeem troubleshooting.`;

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
      title: "Evomon Team Builder — Build Your Best 5-Pet Squad",
      description:
        "Pick 5 Evomons (in-game party size), see type coverage gaps instantly, and share your squad link. Free team builder with presets for early, mid, and starter cores — no login needed.",
      path: "/team-builder",
      ogTitle: "Free Evomon Team Builder — Plan & Share Your Squad",
      keywords: ["evomon team builder", "evomon best team", "evomon team comp", "evomon party"],
    }),

  mapZones: () => {
    // Absolute title: keep ≤60 chars. Prefer catch/location intent over product jargon.
    const title = "Evomon Map — Where to Catch Pets by Island & Level";
    const description =
      "Where to catch Evomon by island: Verdant Valley, Lava Crag, Raven Ridge, Silent Sands — wild spawns, mini-bosses and bosses with level ranges.";

    return {
      ...buildPageMetadata({
        title,
        description,
        path: "/map-zones",
        ogTitle: title,
        keywords: [
          "evomon map",
          "evomon locations",
          "evomon where to catch",
          "evomon islands",
          "evomon spawn locations",
          "evomon map zones",
          "evomon verdant valley",
          "evomon lava crag",
        ],
      }),
      title: { absolute: title },
    };
  },

  typeChart: () => {
    // Absolute title: keep ≤60 chars. Avoid "Clickable" — GSC showed it hurt CTR vs weakness intent.
    const title = "Evomon Type Chart — Weaknesses & What Beats Each Type";
    const description =
      "Water beats Fire; Electric beats Flying; Ice beats Grass. Full Evomon weakness chart for all 15 types — strengths, resists, and matchup lookup.";

    return {
      ...buildPageMetadata({
        title,
        description,
        path: "/type-chart",
        ogTitle: title,
        keywords: [
          "evomon type chart",
          "evomon weaknesses",
          "evomon weakness chart",
          "evomon type matchup",
          "evomon elements",
          "type chart evomon",
        ],
      }),
      title: { absolute: title },
    };
  },

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
      title: "Best Evomon Starter — Bubble vs Blazpup vs Leafbun",
      description:
        "Bubble is the safest Evomon starter for most players. Compare Bubble, Blazpup and Leafbun by early islands, evolution line, matchups and when to replace them.",
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
      title: "Evomon Equipment Dungeons (Lv40+) — Gear Runs & Refine Guide",
      description:
        "Silent Sands gear dungeons at trainer level 40: daily Equipment Challenge tickets, enhance keeper gear, Refine Stones on Legendary rolls. Level 30 Ultimate recap links to the beginner guide.",
      path: "/guides/level-30",
      keywords: [
        "evomon equipment dungeon",
        "evomon silent sands",
        "evomon level 40",
        "evomon gear",
        "evomon refine stones",
        "evomon level 30",
      ],
    }),

  mutationsGuide: () => {
    // Hub owns shiny hunt overview + pity + 149. Egg/sparkle detail → child pages.
    const title = `How to Get Shiny Evomon (${monthLabel}) — Pity & 149 Trick`;
    const description = `Shiny hunt hub for Roblox Evomon: ~600 pity per species, catch-only counters, the 149 prismatic combo, and best farm routes. ${monthLabel}. Sparkle vs shiny and shiny eggs have dedicated guides.`;

    return {
      ...buildPageMetadata({
        title,
        description,
        path: "/guides/mutations",
        ogTitle: title,
        keywords: [
          "evomon shiny",
          "how to get shiny evomon",
          "evomon pity",
          "evomon shiny hunt",
          "evomon 149 trick",
          "evomon prismatic",
        ],
      }),
      title: { absolute: title },
    };
  },

  mutationsShinyVsSparkle: () =>
    buildPageMetadata({
      title: "Evomon Sparkle vs Shiny — Stats, Buff & Prismatic",
      description:
        "Sparkle in Evomon means Prismatic cosmetics only; Shiny gives the stat buff. Compare shiny stats, sparkle looks, pity counters, and icons.",
      path: "/guides/mutations/shiny-vs-sparkle",
      keywords: [
        "evomon sparkle",
        "sparkle evomon",
        "evomon shiny vs prismatic",
        "what is sparkle evomon",
        "evomon shiny buff",
        "evomon shiny stats",
        "evomon prismatic",
      ],
    }),

  mutationsShinyEgg: () =>
    buildPageMetadata({
      title: "Evomon Shiny Egg Guide — Prismatic Ball & Catch Master",
      description:
        "How shiny eggs drop after catches, when to use Prismatic Ball, why Catch Master helps boss routes, and how shiny egg odds differ from field pity.",
      path: "/guides/mutations/shiny-egg",
      keywords: [
        "evomon shiny egg",
        "how to get shiny egg evomon",
        "evomon shiny egg chance",
        "shiny egg evomon",
        "evomon prismatic ball",
        "evomon catch master",
        "evomon egg",
      ],
    }),

  tierListEvolutionPriority: () =>
    buildPageMetadata({
      title: "Evomon Evolution Priority — Who Gets Stones First",
      description:
        "Evolution stone order for Roblox Evomon: fund your carry first, spend on the next wall, skip duplicate typings, then boss specialists. Community July 2026 routing.",
      path: "/tier-list/evolution-priority",
      keywords: [
        "evomon evolution priority",
        "evomon evolution stones",
        "who to evolve evomon",
        "lavite evolution",
        "evomon stone guide",
      ],
    }),

  tierListEarlyCarries: () =>
    buildPageMetadata({
      title: "Best Early Evomon Carries — Verdant Valley to Lava Crag",
      description:
        "Early route tier picks before level 30: Bubble starter, Pebble tank, Sparkit fire, Lavite carry, and Clampip backup. Where to catch each on evomon.cc.",
      path: "/tier-list/early-carries",
      keywords: [
        "evomon early game",
        "best early evomon",
        "lavite early",
        "pebble evomon",
        "evomon route catches",
      ],
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

  updateLog: () =>
    buildPageMetadata({
      title: "Update Log — Evomon Wiki Changelog",
      description:
        "Chronological changelog for evomon.cc: new guides, dex updates, SEO improvements, and quality fixes. Maintained by Remy since July 2026.",
      path: "/update-log",
      ogTitle: "Evomon Wiki Update Log",
      keywords: ["evomon wiki updates", "evomon.cc changelog", "evomon wiki changelog"],
    }),

  blogIndex: () =>
    buildPageMetadata({
      title: "Evomon Blog — Short Answers & Hunt Tips",
      description:
        "Community-sourced Evomon blog posts for high-intent searches: eggs, shiny hunts, and boss routes. Cross-checked against our full guides.",
      path: "/blog",
      keywords: [
        "evomon blog",
        "how to get eggs in evomon",
        "evomon shiny egg",
        "prismatic egg evomon",
      ],
    }),
} as const;

export function blogPostMetadata(post: BlogPost): Metadata {
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.gscTargets,
  });
}

export function dexPetMetadata(entry: {
  name: string;
  number: number;
  element: string;
  tier: string | null;
}): Metadata {
  const slug = entry.name.toLowerCase();
  const { title, description, keywords } = buildDexPetSeo({
    number: entry.number,
    name: entry.name,
    element: entry.element as ElementType,
  });
  const indexable = isIndexableDexSlug(slug);

  return {
    ...buildPageMetadata({
      title,
      description,
      path: `/dex/${slug}`,
      ogTitle: title,
      keywords,
    }),
    ...(indexable ? {} : { robots: NOINDEX_FOLLOW }),
  };
}
