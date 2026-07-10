import type { ElementType } from "@/data/dex";

export const elementStyles: Record<
  ElementType,
  { bg: string; border: string; text: string; dot: string }
> = {
  Water: { bg: "bg-sky-500/15", border: "border-sky-500/30", text: "text-sky-300", dot: "bg-sky-400" },
  Fire: { bg: "bg-orange-500/15", border: "border-orange-500/30", text: "text-orange-300", dot: "bg-orange-400" },
  Grass: { bg: "bg-emerald-500/15", border: "border-emerald-500/30", text: "text-emerald-300", dot: "bg-emerald-400" },
  Flying: { bg: "bg-violet-500/15", border: "border-violet-500/30", text: "text-violet-300", dot: "bg-violet-400" },
  Bug: { bg: "bg-lime-500/15", border: "border-lime-500/30", text: "text-lime-300", dot: "bg-lime-400" },
  Normal: { bg: "bg-zinc-500/15", border: "border-zinc-500/30", text: "text-zinc-300", dot: "bg-zinc-400" },
  Rock: { bg: "bg-amber-700/15", border: "border-amber-700/30", text: "text-amber-300", dot: "bg-amber-600" },
  Poison: { bg: "bg-purple-500/15", border: "border-purple-500/30", text: "text-purple-300", dot: "bg-purple-400" },
  Ice: { bg: "bg-cyan-400/15", border: "border-cyan-400/30", text: "text-cyan-200", dot: "bg-cyan-300" },
  Ground: { bg: "bg-yellow-700/15", border: "border-yellow-700/30", text: "text-yellow-300", dot: "bg-yellow-600" },
  Electric: { bg: "bg-yellow-400/15", border: "border-yellow-400/30", text: "text-yellow-200", dot: "bg-yellow-300" },
  Psychic: { bg: "bg-pink-500/15", border: "border-pink-500/30", text: "text-pink-300", dot: "bg-pink-400" },
  Steel: { bg: "bg-slate-400/15", border: "border-slate-400/30", text: "text-slate-300", dot: "bg-slate-400" },
  Fighting: { bg: "bg-red-600/15", border: "border-red-600/30", text: "text-red-300", dot: "bg-red-500" },
  Light: { bg: "bg-amber-300/15", border: "border-amber-300/30", text: "text-amber-200", dot: "bg-amber-200" },
  Dark: { bg: "bg-indigo-900/30", border: "border-indigo-500/30", text: "text-indigo-300", dot: "bg-indigo-500" },
  Unknown: { bg: "bg-zinc-800/40", border: "border-zinc-700/40", text: "text-zinc-500", dot: "bg-zinc-600" },
};

export const typeChart: { attacker: ElementType; strong: ElementType[]; weak: ElementType[] }[] = [
  { attacker: "Water", strong: ["Fire", "Rock", "Ground"], weak: ["Grass", "Electric"] },
  { attacker: "Fire", strong: ["Grass", "Bug", "Ice"], weak: ["Water", "Rock", "Ground"] },
  { attacker: "Grass", strong: ["Water", "Rock", "Ground"], weak: ["Fire", "Flying", "Bug", "Poison", "Ice"] },
  { attacker: "Electric", strong: ["Water", "Flying"], weak: ["Ground"] },
  { attacker: "Rock", strong: ["Fire", "Flying", "Bug", "Ice"], weak: ["Water", "Grass", "Fighting", "Ground", "Steel"] },
  { attacker: "Ground", strong: ["Fire", "Electric", "Poison", "Rock", "Steel"], weak: ["Water", "Grass", "Ice"] },
  { attacker: "Flying", strong: ["Grass", "Fighting", "Bug"], weak: ["Electric", "Rock", "Ice", "Steel"] },
  { attacker: "Bug", strong: ["Grass", "Psychic", "Dark"], weak: ["Fire", "Flying", "Rock"] },
  { attacker: "Poison", strong: ["Grass", "Fighting"], weak: ["Ground", "Psychic", "Steel"] },
  { attacker: "Ice", strong: ["Grass", "Ground", "Flying"], weak: ["Fire", "Fighting", "Rock", "Steel"] },
  { attacker: "Fighting", strong: ["Normal", "Rock", "Steel", "Ice", "Dark"], weak: ["Flying", "Psychic"] },
  { attacker: "Psychic", strong: ["Fighting", "Poison"], weak: ["Bug", "Dark", "Steel"] },
  { attacker: "Steel", strong: ["Ice", "Rock"], weak: ["Fire", "Fighting", "Ground"] },
  { attacker: "Light", strong: ["Dark"], weak: ["Dark"] },
  { attacker: "Dark", strong: ["Psychic", "Light"], weak: ["Fighting", "Bug", "Light"] },
];

/** Types that deal reduced damage to `defender` (defender is in the attacker's weak list). */
export function getResistedFrom(defender: ElementType): ElementType[] {
  return typeChart.filter((row) => row.weak.includes(defender)).map((row) => row.attacker);
}

/** Types that deal super-effective damage to `defender` (attacker's strong list includes defender). */
export function getTypesThatBeat(defender: ElementType): ElementType[] {
  return typeChart.filter((row) => row.strong.includes(defender)).map((row) => row.attacker);
}

/** What `attacker` is super-effective against. */
export function getStrongAgainst(attacker: ElementType): ElementType[] {
  return typeChart.find((row) => row.attacker === attacker)?.strong ?? [];
}

/** Types that `attacker` takes super-effective damage from. */
export function getWeakTo(attacker: ElementType): ElementType[] {
  return typeChart.find((row) => row.attacker === attacker)?.weak ?? [];
}

export const TYPE_CHART_TYPES = typeChart.map((row) => row.attacker);

export const TYPE_CHART_NOTES: Partial<Record<ElementType, string>> = {
  Light:
    "Light only super-effective vs Dark in this chart. Community data — dual-type pets may change practical matchups.",
  Dark: "Dark hits Psychic and Light for super-effective damage. Also weak to Light — verify in duels when both apply.",
  Normal:
    "Normal appears on dex entries but has no offensive row here yet. Fighting is usually super-effective vs Normal in creature-collector games — confirm in-game.",
};
