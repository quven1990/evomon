export const MUTATIONS_UPDATED = "July 2026";

export type MutationVariant = {
  name: string;
  uiLabel: string;
  odds: string;
  pity: string;
  combat: string;
  notes: string;
};

export const mutationVariants: MutationVariant[] = [
  {
    name: "Prismatic",
    uiLabel: "Sparkle (in-game UI)",
    odds: "~0.2–0.8% per encounter (community reports vary)",
    pity: "150 captures of the same species",
    combat: "Cosmetic only — random color + pattern on a body part",
    notes:
      "Five-point star icon. Two prismatics can look different unless color and pattern match. Highest trade flex when trading opens; white/black colors are considered rarest.",
  },
  {
    name: "Shiny",
    uiLabel: "Shiny",
    odds: "~0.2% (often cited as 1-in-500)",
    pity: "600 defeats or captures of the same species",
    combat: "Yes — small but real stat boost (speed matters most)",
    notes:
      "Four-point star icon. Same palette every time for that species (unlike prismatic randomness). Reveal happens after you KO the wild Evomon — watch the smoke animation.",
  },
  {
    name: "Shiny Prismatic",
    uiLabel: "Shiny + Prismatic",
    odds: "Extremely rare naturally",
    pity: "Manipulated via pity tricks (see below)",
    combat: "Shiny stats + prismatic look",
    notes:
      "The chase combo for mounts and boss lines. Community goal is often Shiny + Prismatic + SSS talent on ridable bosses.",
  },
];

export const pityRules = [
  {
    rule: "Counters show bottom-left after battles",
    detail: "Separate prismatic and shiny pity per species.",
  },
  {
    rule: "Prismatic pity rises on capture",
    detail:
      "Knocking out and running does not raise prismatic pity. You must catch the Evomon for prismatic count to increase.",
  },
  {
    rule: "Always catch if you want eggs",
    detail:
      "Eggs drop from catches after defeating a target — not from KO-and-run. Shiny eggs are the reliable path for several boss species.",
  },
  {
    rule: "Shiny pity can tick from farming KOs",
    detail:
      "Community guides differ on whether shiny pity alone advances without catching — catching is still safest because it also rolls eggs and prismatic pity.",
  },
];

export const pityTrick149 = {
  title: "149 prismatic pity trick (advanced)",
  steps: [
    "Farm one species until prismatic pity hits 149/150.",
    "Stop catching that species — only battle until a natural shiny appears in the reveal.",
    "Catch the shiny with a King Ball for a high chance at Shiny + Prismatic + strong talent.",
    "Alternatively, use a Prismatic Ball on a shiny encounter or shiny egg hatch for guaranteed prismatic appearance.",
  ],
  warning:
    "You may accidentally catch a prismatic before 149 and reset your plan — keep grinding if that happens.",
};

export const eggHunting = {
  intro:
    "After you defeat an Evomon in battle, catching it can drop an egg. Boss lines are special: many do not have normal shiny pity — shiny eggs are the main path.",
  rows: [
    {
      egg: "Normal species egg",
      effect: "Guaranteed S-tier talent on hatch (community reports; triple SSS not confirmed from eggs alone).",
      tip: "Farm low-level routes for volume.",
    },
    {
      egg: "Shiny egg",
      effect: "Hatches a guaranteed shiny of that species.",
      tip: "Use a Prismatic Ball when hatching to force prismatic appearance on the shiny.",
    },
    {
      egg: "Boss shiny egg",
      effect: "Only way to shiny hunt certain bosses (e.g. flying/thunder kings) — no shiny pity on the boss itself.",
      tip: "Catch Master suit (+10% capture, +1 capture attempt) helps secure catches on hard bosses.",
    },
  ],
  bosses: [
    {
      name: "King of Flying / Thunder Crane",
      where: "Flying Territory (~trainer level 75)",
      note: "Ridable flying mount — high long-term trade value with prismatic colors.",
    },
    {
      name: "Volcras King / Bluebird line",
      where: "Raven Ridge boss + wild Bluebird route",
      note: "Wild Bluebirds on the upper tree path are easier shiny farms than the boss alone.",
    },
    {
      name: "Arcub / Arcapex",
      where: "Funder Cliff / Thunder Cliffs bosses",
      note: "Hard solo clears — shiny eggs need consistent catches; party helps.",
    },
  ],
};

export const huntRoutes = [
  {
    target: "Lavite / Lavarock",
    where: "Lava Crag",
    difficulty: "Easy",
    why: "Low-level fire rock spawns; many players one-shot with water after mid-game. Best beginner-friendly shiny farm.",
  },
  {
    target: "Bluebird → Volcrest",
    where: "Raven Ridge (wild route + quest)",
    difficulty: "Medium",
    why: "Wild Bluebirds on the elevated path are farmable without only doing boss fights.",
  },
  {
    target: "Sparkit line",
    where: "Early routes",
    difficulty: "Easy",
    why: "Fast encounters; shiny speed bumps can matter in PvP metas.",
  },
  {
    target: "Tarro / Terragon",
    where: "Late grass routes",
    difficulty: "Hard",
    why: "Leech Seed / healing moves make wild Tarro slow to farm — party or overlevel first.",
  },
  {
    target: "Boss mount lines",
    where: "Flying Territory, Thunder Cliffs",
    difficulty: "Very hard",
    why: "Prioritize shiny eggs + Catch Master suit; no shiny pity on the boss.",
  },
];

export const huntPrinciples = [
  "Build a normal-form endgame team before dedicated shiny sessions — stronger teams farm faster.",
  "Hunt species you will actually use; +20 levels and good traits often beat a non-shiny flex.",
  "Stock Advanced Balls and redeem codes before long pity grinds.",
  "Do not evolve a shiny until you confirm the evolution line is worth keeping.",
  "Prismatic hunting is for looks and trading; shiny hunting is for stats.",
  "Index completion overlaps with pity farming late game — plan routes that double-dip.",
];
