import type { ElementType } from "@/data/dex";
import type { DexEntry } from "@/data/dex";
import { typeChart } from "@/data/type-chart";

const OFFENSE_TYPES = typeChart.map((r) => r.attacker).filter((t) => t !== "Unknown");

function getStrongAgainst(attacker: ElementType, defender: ElementType): boolean {
  const row = typeChart.find((r) => r.attacker === attacker);
  return row?.strong.includes(defender) ?? false;
}

function getWeakTo(defender: ElementType): ElementType[] {
  return typeChart.filter((r) => r.strong.includes(defender)).map((r) => r.attacker);
}

export interface TeamAnalysis {
  elements: ElementType[];
  uniqueElements: ElementType[];
  offenseCoverage: { target: ElementType; hitters: ElementType[] }[];
  offenseGaps: ElementType[];
  defensiveThreats: { threat: ElementType; vulnerableMembers: number }[];
  diversityScore: number;
  notes: string[];
}

export function analyzeTeam(members: (DexEntry | null)[]): TeamAnalysis {
  const filled = members.filter((m): m is DexEntry => m !== null);
  const elements = filled.map((m) => m.element);
  const uniqueElements = [...new Set(elements.filter((e) => e !== "Unknown"))];

  const offenseCoverage = OFFENSE_TYPES.map((target) => ({
    target,
    hitters: uniqueElements.filter((e) => getStrongAgainst(e, target)),
  })).filter((row) => row.hitters.length > 0);

  const offenseGaps = OFFENSE_TYPES.filter(
    (target) => !uniqueElements.some((e) => getStrongAgainst(e, target)),
  );

  const threatMap = new Map<ElementType, number>();
  for (const member of filled) {
    for (const threat of getWeakTo(member.element)) {
      threatMap.set(threat, (threatMap.get(threat) ?? 0) + 1);
    }
  }

  const defensiveThreats = [...threatMap.entries()]
    .map(([threat, vulnerableMembers]) => ({ threat, vulnerableMembers }))
    .filter((t) => t.vulnerableMembers >= 2)
    .sort((a, b) => b.vulnerableMembers - a.vulnerableMembers);

  const notes: string[] = [];
  if (filled.length === 0) notes.push("Add Evomons to see type coverage.");
  if (filled.length < 3) notes.push(`Team has ${filled.length}/3 slots — add coverage picks.`);
  if (uniqueElements.length < filled.length) notes.push("Duplicate elements — consider broader coverage.");
  if (offenseGaps.length <= 3) notes.push("Strong offensive spread across most types.");
  else if (offenseGaps.length >= 8) notes.push("Narrow offense — add a second element line.");

  const diversityScore = Math.min(
    100,
    Math.round((uniqueElements.length / 3) * 40 + ((OFFENSE_TYPES.length - offenseGaps.length) / OFFENSE_TYPES.length) * 60),
  );

  return {
    elements,
    uniqueElements,
    offenseCoverage,
    offenseGaps,
    defensiveThreats,
    diversityScore,
    notes,
  };
}

export const TEAM_PRESETS: { id: string; label: string; slugs: string[]; desc: string }[] = [
  {
    id: "early",
    label: "Early Game",
    slugs: ["bubble", "pebble", "sparkit"],
    desc: "Water carry + Rock tank + Fire coverage for Verdant Valley",
  },
  {
    id: "starter",
    label: "Starter Trio",
    slugs: ["bubble", "blazgrowl", "leafbun"],
    desc: "All three starter lines for type spread",
  },
  {
    id: "water",
    label: "Water Core",
    slugs: ["bubboxer", "clampip", "pebble"],
    desc: "Water-heavy route through Petal Pond",
  },
];
