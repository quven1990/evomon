import type { ElementType } from "@/data/dex";

export type IslandTypeTip = {
  island: string;
  dominantTypes: ElementType[];
  bringTypes: ElementType[];
  note: string;
};

/** Early-to-mid island type coverage — paired with the beginner route. */
export const islandTypeTips: IslandTypeTip[] = [
  {
    island: "Verdant Valley",
    dominantTypes: ["Grass", "Normal", "Bug"],
    bringTypes: ["Fire", "Flying"],
    note: "Tutorial island. Pebble (Rock) is the standout catch — do not over-grind coverage here.",
  },
  {
    island: "Petal Pond",
    dominantTypes: ["Water", "Grass"],
    bringTypes: ["Electric", "Grass"],
    note: "Build water before Lava Crag. Clampip line covers the next fire-heavy route.",
  },
  {
    island: "Lava Crag",
    dominantTypes: ["Fire", "Rock"],
    bringTypes: ["Water", "Ground"],
    note: "Priority catch: Lavite / Lavarock. Your water type from Petal Pond is the practical counter.",
  },
  {
    island: "Autumn Hill",
    dominantTypes: ["Grass"],
    bringTypes: ["Ice", "Fire", "Flying"],
    note: "Murkwood Tarro fights: Ice deals 4× to Grass. Bring Lavarock for general sustain.",
  },
  {
    island: "Flying Territory",
    dominantTypes: ["Flying"],
    bringTypes: ["Electric", "Rock", "Ice"],
    note: "Boss area (~Lv75). Electric and Rock hit Flying super-effectively — level matters more than perfect typing.",
  },
  {
    island: "Raven Ridge",
    dominantTypes: ["Flying", "Electric"],
    bringTypes: ["Rock", "Ice"],
    note: "Bluebird route lives here. Rock counters Flying birds; keep Lavarock leveled.",
  },
  {
    island: "Silent Sands",
    dominantTypes: ["Ground", "Steel"],
    bringTypes: ["Water", "Fire", "Fighting"],
    note: "Equipment Dungeon unlocks at trainer Lv40. Water hits Ground; Fire/Fighting pressure Steel.",
  },
];

export const typeChartFaqs = [
  {
    q: "Where is the Evomon type chart / weakness chart?",
    a: "This page is the Evomon type chart and weakness chart: interactive lookup, the all-15 table, and island tips. Share a deep link with ?type=Water (or any type) to jump straight into that row.",
  },
  {
    q: "What beats Fire in Evomon?",
    a: "Water, Rock, and Ground deal super-effective damage to Fire types. On Lava Crag, your water line from Petal Pond is the practical answer.",
  },
  {
    q: "What beats Water in Evomon?",
    a: "Grass and Electric hit Water for super-effective damage. Electric is the common Petal Pond → mid-game answer when you need to pressure water walls.",
  },
  {
    q: "What beats Electric in Evomon?",
    a: "Ground is the hard counter to Electric on this chart. Rock and Ice also help into Flying/Electric mixes on Raven Ridge–style routes.",
  },
  {
    q: "Does Evomon use dual types?",
    a: "Many endgame Evomons have two elements (for example Lavite is Fire/Rock, Volcrest is Flying/Electric). This chart lists single-type rules — in duels, both typings can apply. Use the team builder for squad coverage.",
  },
  {
    q: "How do I use the type chart for team building?",
    a: "Pick three Evomons whose types cover different weaknesses. Check island tips for what you will face next, then open the team builder to see offensive gaps.",
  },
  {
    q: "How many types are in Evomon?",
    a: "This chart covers 15 offensive types: Water, Fire, Grass, Electric, Rock, Ground, Flying, Bug, Poison, Ice, Fighting, Psychic, Steel, Light, and Dark. Normal appears on some dex entries but is not in the offensive chart yet.",
  },
];
