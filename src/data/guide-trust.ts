import { GAME } from "@/lib/game";

export const GUIDE_REVIEWED_ISO = "2026-07-09";
export const GUIDE_REVIEWED_LABEL = "July 2026";

export type GuideTrustPageId =
  | "mutations-shiny-vs-sparkle"
  | "mutations-shiny-egg"
  | "tier-evolution-priority"
  | "tier-early-carries";

export type SourceEntry = {
  label: string;
  href?: string;
  note: string;
  confidence: "in-game" | "community" | "cross-source";
};

export type GuideTrustConfig = {
  scopeNote: string;
  verification: string;
  sources: SourceEntry[];
  mistakes?: string[];
};

export const qualitySystems = [
  {
    system: "Mutation (Shiny / Sparkle)",
    what: "Rare variant roll — shiny palette + small stat boost; sparkle/prismatic is cosmetic.",
    judge: "Star icons after battle + pity counters bottom-left.",
  },
  {
    system: "Talent",
    what: "Letter grade (C → SSS) on capture — separate from mutation.",
    judge: "Talent label on catch screen; King Ball guarantees SSS.",
  },
  {
    system: "Nature",
    what: "Personality stat modifier — independent of shiny or talent.",
    judge: "Nature name on pet summary; reroll potions from codes/events.",
  },
] as const;

export const guideTrustPages: Record<GuideTrustPageId, GuideTrustConfig> = {
  "mutations-shiny-vs-sparkle": {
    scopeNote:
      "Deep dive on mutation types only. Pity numbers below are community-reported unless marked in-game — verify on your HUD after patches.",
    verification:
      "Reviewed against in-game mutation UI, capture flow, and July 2026 community hunt guides. Exact drop rates are not officially published.",
    sources: [
      {
        label: "Roblox — Evomon experience page",
        href: GAME.robloxUrl,
        note: "Confirms Shiny and Sparkle exist as mutation types.",
        confidence: "in-game",
      },
      {
        label: "In-game pity HUD",
        note: "Separate shiny and prismatic counters per species after battles.",
        confidence: "in-game",
      },
      {
        label: "Community hunt guides & Discord reports",
        note: "~600 shiny pity, ~150 prismatic capture pity, ~0.2% shiny odds cited.",
        confidence: "community",
      },
    ],
    mistakes: [
      "Treating Sparkle as a stat upgrade — it is cosmetic unless paired with Shiny.",
      "Judging catch quality by mutation alone — Talent and Nature still matter for combat.",
      "Assuming published community % rates are official — the live UI may not show exact odds.",
    ],
  },
  "mutations-shiny-egg": {
    scopeNote:
      "Egg drops, boss shiny paths, and catch rules. Boss lines without field shiny pity are called out explicitly.",
    verification:
      "Egg types and catch-only drops checked in-game July 2026; boss mount notes cross-checked with community boss routes.",
    sources: [
      {
        label: "Roblox — Evomon experience page",
        href: GAME.robloxUrl,
        note: "Mutation feature overview.",
        confidence: "in-game",
      },
      {
        label: "In-game catch → egg drops",
        note: "Eggs roll after defeating and catching wild targets.",
        confidence: "in-game",
      },
      {
        label: "Community boss hunt threads",
        note: "King of Flying / Bluebird / Arcub shiny-egg routing.",
        confidence: "community",
      },
    ],
    mistakes: [
      "KO-and-run farming when you need eggs or prismatic pity — catches are required.",
      "Using normal balls on boss shiny-egg attempts without Catch Master or party support.",
      "Hatching shiny eggs without planning Prismatic Ball use when you want both effects.",
    ],
  },
  "tier-evolution-priority": {
    scopeNote:
      "Evolution stone order for mid-game accounts. Lavite-first reflects our route meta — some creators rank Bubble higher for the first 30 minutes only.",
    verification:
      "Synthesized from July 2026 creator tier lists, our beginner island chart, and in-game stone scarcity (merchant, login, tower).",
    sources: [
      {
        label: "evomon.cc beginner island route",
        href: "/guides/beginner",
        note: "Lava Crag Lavite priority and stone warnings.",
        confidence: "cross-source",
      },
      {
        label: "Community tier list videos (July 2026)",
        note: "Endgame must-haves: Lavite, Bluebird, Frostlet, Whispurr, Arcub, Tarro.",
        confidence: "community",
      },
      {
        label: "In-game Evolution Stone income",
        note: "Stones remain scarce through mid game — mistakes are costly.",
        confidence: "in-game",
      },
    ],
    mistakes: [
      "Spending the first stone on a starter while Lavite is still unevolved on Lava Crag.",
      "Evolving duplicate typings (two water lines, two fire lines) before core trio is set.",
      "Funding collection pets before your daily team clears current islands or bosses.",
    ],
  },
  "tier-early-carries": {
    scopeNote:
      "Island-by-island catches through Lava Crag — not the full endgame tier list. Bubble leads the starter lab; Lavite leads evolution-stone ROI after island 3.",
    verification:
      "Pick order aligned with beginner guide island chart and July 2026 early-route tier consensus.",
    sources: [
      {
        label: "evomon.cc beginner guide — island route",
        href: "/guides/beginner",
        note: "Verdant Valley → Petal Pond → Lava Crag catch/skip chart.",
        confidence: "cross-source",
      },
      {
        label: "Community early PvE tier lists",
        note: "Bubble/Bubboxer, Lavite, Pebble, Sparkit commonly top early lists.",
        confidence: "community",
      },
      {
        label: "Dex entries (cross-source labels)",
        href: "/dex",
        note: "Obtain hints on individual pet pages.",
        confidence: "cross-source",
      },
    ],
    mistakes: [
      "Confusing best starter (Bubble for tutorial matchups) with best stone target (Lavite after Lava Crag).",
      "Over-investing in Pebble past mid game when endgame walls need typed DPS.",
      "Skipping Sparkit or Clampip water coverage before pushing fire-heavy islands.",
    ],
  },
};

export const confidenceStyles = {
  "in-game": "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
  community: "text-amber-300 bg-amber-500/10 border-amber-500/30",
  "cross-source": "text-violet-300 bg-violet-500/10 border-violet-500/30",
} as const;

export const confidenceLabels = {
  "in-game": "In-game confirmed",
  community: "Community reported",
  "cross-source": "Cross-source",
} as const;
