export type ElementType =
  | "Water"
  | "Fire"
  | "Grass"
  | "Flying"
  | "Bug"
  | "Normal"
  | "Rock"
  | "Poison"
  | "Ice"
  | "Ground"
  | "Electric"
  | "Psychic"
  | "Steel"
  | "Fighting"
  | "Light"
  | "Dark"
  | "Unknown";

export type DexSource = "official" | "cross-source" | "community" | "third-party" | "unpublished";
export type TierRank = "SS" | "S" | "A" | "B" | "C" | "D" | null;

export interface DexEntry {
  number: number;
  name: string | null;
  element: ElementType;
  tier: TierRank;
  source: DexSource;
}

export const DEX_LAST_CHECKED = "2026-06-24";
export const DEX_TOTAL_SLOTS = 108;

export const dexEntries: DexEntry[] = [
  { number: 1, name: "Bubble", element: "Water", tier: "SS", source: "cross-source" },
  { number: 2, name: "Bubboxer", element: "Water", tier: "SS", source: "cross-source" },
  { number: 3, name: "Bubblade", element: "Water", tier: null, source: "community" },
  { number: 4, name: "Blazpup", element: "Fire", tier: "S", source: "cross-source" },
  { number: 5, name: "Blazgrowl", element: "Fire", tier: "S", source: "cross-source" },
  { number: 6, name: "Blazmane", element: "Fire", tier: null, source: "community" },
  { number: 7, name: "Leafbun", element: "Grass", tier: "S", source: "cross-source" },
  { number: 8, name: "Leafroge", element: "Grass", tier: null, source: "community" },
  { number: 9, name: "Leafblade", element: "Grass", tier: null, source: "community" },
  { number: 10, name: "Chirppy", element: "Flying", tier: null, source: "cross-source" },
  { number: 11, name: "Chirplume", element: "Flying", tier: null, source: "community" },
  { number: 12, name: "Chirphantom", element: "Flying", tier: null, source: "community" },
  { number: 13, name: "Humding", element: "Bug", tier: null, source: "cross-source" },
  { number: 14, name: "Flutterby", element: "Bug", tier: null, source: "community" },
  { number: 15, name: "Twirlby", element: "Bug", tier: null, source: "community" },
  { number: 16, name: "Mopebun", element: "Normal", tier: "S", source: "cross-source" },
  { number: 17, name: "Mopillow", element: "Normal", tier: null, source: "community" },
  { number: 18, name: "Pebble", element: "Rock", tier: "S", source: "cross-source" },
  { number: 19, name: "Pebroll", element: "Rock", tier: "A", source: "cross-source" },
  { number: 20, name: "Pebgolem", element: "Rock", tier: "A", source: "cross-source" },
  { number: 21, name: "Sparkit", element: "Fire", tier: "A", source: "cross-source" },
  { number: 22, name: "Emfox", element: "Fire", tier: "A", source: "cross-source" },
  { number: 23, name: "Empixy", element: "Fire", tier: "A", source: "cross-source" },
  { number: 24, name: "Gulpfish", element: "Water", tier: null, source: "cross-source" },
  { number: 25, name: "Mirefish", element: "Water", tier: null, source: "community" },
  { number: 26, name: "Bluebird", element: "Flying", tier: null, source: "cross-source" },
  { number: 27, name: "Volcrest", element: "Flying", tier: null, source: "community" },
  { number: 28, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 29, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 30, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 31, name: "Clampip", element: "Water", tier: "A", source: "cross-source" },
  { number: 32, name: "Clamwhirl", element: "Water", tier: "A", source: "cross-source" },
  { number: 33, name: "Clamspire", element: "Water", tier: "B", source: "cross-source" },
  { number: 34, name: "Budling", element: "Grass", tier: "B", source: "cross-source" },
  { number: 35, name: "Florawn", element: "Grass", tier: null, source: "community" },
  { number: 36, name: "Silvanarch", element: "Grass", tier: "B", source: "cross-source" },
  { number: 37, name: "Vipip", element: "Poison", tier: null, source: "cross-source" },
  { number: 38, name: "Vipour", element: "Poison", tier: null, source: "community" },
  { number: 39, name: "Viparch", element: "Poison", tier: null, source: "community" },
  { number: 40, name: "Bonkoo", element: "Normal", tier: null, source: "third-party" },
  { number: 41, name: "Titanking", element: "Normal", tier: null, source: "third-party" },
  { number: 42, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 43, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 44, name: "Fluffet", element: "Rock", tier: null, source: "third-party" },
  { number: 45, name: "Fluffastar", element: "Rock", tier: null, source: "cross-source" },
  { number: 46, name: "Glaclide", element: "Ice", tier: null, source: "cross-source" },
  { number: 47, name: "Glacone", element: "Ice", tier: null, source: "community" },
  { number: 48, name: "Glacitadel", element: "Ice", tier: null, source: "community" },
  { number: 49, name: "Chitmite", element: "Bug", tier: null, source: "cross-source" },
  { number: 50, name: "Chitgladi", element: "Bug", tier: null, source: "community" },
  { number: 51, name: "Chitaladin", element: "Bug", tier: null, source: "community" },
  { number: 52, name: "Lavite", element: "Fire", tier: "B", source: "cross-source" },
  { number: 53, name: "Lavarock", element: "Fire", tier: "B", source: "cross-source" },
  { number: 54, name: "Stardrift", element: "Grass", tier: null, source: "cross-source" },
  { number: 55, name: "Frostelle", element: "Grass", tier: null, source: "community" },
  { number: 56, name: "Graycrene", element: "Flying", tier: null, source: "community" },
  { number: 57, name: "Sundercrene", element: "Flying", tier: null, source: "community" },
  { number: 58, name: "Spikub", element: "Ground", tier: null, source: "cross-source" },
  { number: 59, name: "Spikumane", element: "Ground", tier: null, source: "community" },
  { number: 60, name: "Frostlet", element: "Ice", tier: null, source: "cross-source" },
  { number: 61, name: "Frostseer", element: "Ice", tier: null, source: "community" },
  { number: 62, name: "Mushmer", element: "Water", tier: null, source: "third-party" },
  { number: 63, name: "Florajell", element: "Water", tier: null, source: "third-party" },
  { number: 64, name: "Gempillar", element: "Bug", tier: null, source: "cross-source" },
  { number: 65, name: "Gempress", element: "Bug", tier: null, source: "community" },
  { number: 66, name: "Tarro", element: "Grass", tier: null, source: "cross-source" },
  { number: 67, name: "Terragon", element: "Grass", tier: null, source: "community" },
  { number: 68, name: "Emberhorn", element: "Fire", tier: null, source: "third-party" },
  { number: 69, name: "Horninferno", element: "Fire", tier: null, source: "third-party" },
  { number: 70, name: "Arcub", element: "Electric", tier: null, source: "cross-source" },
  { number: 71, name: "Arcapex", element: "Electric", tier: null, source: "cross-source" },
  { number: 72, name: "Starloop", element: "Psychic", tier: null, source: "cross-source" },
  { number: 73, name: "Starmuse", element: "Psychic", tier: null, source: "community" },
  { number: 74, name: "Tinkog", element: "Steel", tier: null, source: "cross-source" },
  { number: 75, name: "Tinkore", element: "Steel", tier: null, source: "community" },
  { number: 76, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 77, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 78, name: "Pummpaw", element: "Fighting", tier: null, source: "community" },
  { number: 79, name: "Pummash", element: "Fighting", tier: null, source: "community" },
  { number: 80, name: "Datubud", element: "Grass", tier: "B", source: "cross-source" },
  { number: 81, name: "Datunymph", element: "Grass", tier: null, source: "community" },
  { number: 82, name: "Wispuff", element: "Poison", tier: null, source: "cross-source" },
  { number: 83, name: "Wispshade", element: "Poison", tier: null, source: "community" },
  { number: 84, name: "Wisphex", element: "Poison", tier: null, source: "community" },
  { number: 85, name: "Mudbud", element: "Ground", tier: "B", source: "cross-source" },
  { number: 86, name: "Mudthorn", element: "Ground", tier: null, source: "community" },
  { number: 87, name: "Thordlord", element: "Ground", tier: null, source: "third-party" },
  { number: 88, name: "Astraknight", element: "Fighting", tier: null, source: "cross-source" },
  { number: 89, name: "Boltonia", element: "Electric", tier: null, source: "cross-source" },
  { number: 90, name: "Unikid", element: "Psychic", tier: null, source: "third-party" },
  { number: 91, name: "Celesthorn", element: "Psychic", tier: null, source: "third-party" },
  { number: 92, name: "Metavolt", element: "Steel", tier: null, source: "third-party" },
  { number: 93, name: "Metascythe", element: "Steel", tier: null, source: "third-party" },
  { number: 94, name: "Lumikid", element: "Light", tier: null, source: "third-party" },
  { number: 95, name: "Lumisoul", element: "Light", tier: null, source: "third-party" },
  { number: 96, name: "Luminarch", element: "Light", tier: null, source: "third-party" },
  { number: 97, name: "Snipkit", element: "Dark", tier: null, source: "third-party" },
  { number: 98, name: "Snipdoll", element: "Dark", tier: null, source: "third-party" },
  { number: 99, name: "Snipslash", element: "Dark", tier: null, source: "third-party" },
  { number: 100, name: "Shellgrit", element: "Steel", tier: null, source: "third-party" },
  { number: 101, name: "Shellspike", element: "Steel", tier: null, source: "third-party" },
  { number: 102, name: "Frostin", element: "Ice", tier: null, source: "third-party" },
  { number: 103, name: "Frostclaw", element: "Ice", tier: null, source: "third-party" },
  { number: 104, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 105, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 106, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 107, name: null, element: "Unknown", tier: null, source: "unpublished" },
  { number: 108, name: null, element: "Unknown", tier: null, source: "unpublished" },
];

export function dexStats() {
  const named = dexEntries.filter((e) => e.name).length;
  return { named, total: DEX_TOTAL_SLOTS, percent: Math.round((named / DEX_TOTAL_SLOTS) * 100) };
}
