/** Evomon natures — community wiki (+10% / −10% one stat each). */
export type NatureStat = "HP" | "Attack" | "Defense" | "Sp. Atk" | "Sp. Def" | "Speed";

export type EvomonNature = {
  name: string;
  raises: NatureStat;
  lowers: NatureStat;
};

export const NATURES_SOURCE = "community-wiki";
export const NATURES_LAST_CHECKED = "2026-07-20";

/** All natures currently documented for Evomon (±10% pair). */
export const natures: EvomonNature[] = [
  { name: "Hardy", raises: "Attack", lowers: "HP" },
  { name: "Lonely", raises: "Attack", lowers: "Defense" },
  { name: "Adamant", raises: "Attack", lowers: "Sp. Atk" },
  { name: "Naughty", raises: "Attack", lowers: "Sp. Def" },
  { name: "Brave", raises: "Attack", lowers: "Speed" },
  { name: "Bold", raises: "Defense", lowers: "Attack" },
  { name: "Docile", raises: "Defense", lowers: "HP" },
  { name: "Impish", raises: "Defense", lowers: "Sp. Atk" },
  { name: "Lax", raises: "Defense", lowers: "Sp. Def" },
  { name: "Relaxed", raises: "Defense", lowers: "Speed" },
  { name: "Modest", raises: "Sp. Atk", lowers: "Attack" },
  { name: "Mild", raises: "Sp. Atk", lowers: "Defense" },
  { name: "Rational", raises: "Sp. Atk", lowers: "HP" },
  { name: "Rash", raises: "Sp. Atk", lowers: "Sp. Def" },
  { name: "Quiet", raises: "Sp. Atk", lowers: "Speed" },
  { name: "Calm", raises: "Sp. Def", lowers: "Attack" },
  { name: "Gentle", raises: "Sp. Def", lowers: "Defense" },
  { name: "Careful", raises: "Sp. Def", lowers: "Sp. Atk" },
  { name: "Anxious", raises: "Sp. Def", lowers: "HP" },
  { name: "Sassy", raises: "Sp. Def", lowers: "Speed" },
  { name: "Timid", raises: "Speed", lowers: "Attack" },
  { name: "Hasty", raises: "Speed", lowers: "Defense" },
  { name: "Jolly", raises: "Speed", lowers: "Sp. Atk" },
  { name: "Naive", raises: "Speed", lowers: "Sp. Def" },
  { name: "Warm", raises: "Speed", lowers: "HP" },
  { name: "Mellow", raises: "HP", lowers: "Attack" },
  { name: "Gloomy", raises: "HP", lowers: "Defense" },
  { name: "Peaceful", raises: "HP", lowers: "Sp. Atk" },
  { name: "Serious", raises: "HP", lowers: "Sp. Def" },
  { name: "Steady", raises: "HP", lowers: "Speed" },
];

export const NATURE_STAT_ORDER: NatureStat[] = [
  "HP",
  "Attack",
  "Defense",
  "Sp. Atk",
  "Sp. Def",
  "Speed",
];

export function naturesRaising(stat: NatureStat): EvomonNature[] {
  return natures.filter((n) => n.raises === stat);
}

export function formatNatureDelta(n: EvomonNature): string {
  return `+10% ${n.raises} / −10% ${n.lowers}`;
}
