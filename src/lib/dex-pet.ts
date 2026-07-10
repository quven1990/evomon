import { petDetailExtras } from "@/data/pet-details";
import { dexEntries, type DexEntry, type ElementType } from "@/data/dex";
import {
  getResistedFrom,
  getStrongAgainst,
  getTypesThatBeat,
} from "@/data/type-chart";

const namedEntries = () => dexEntries.filter((e): e is DexEntry & { name: string } => Boolean(e.name));

/** Consecutive dex numbers with the same element — likely evolution line (community-confirmed where noted). */
export function getEvolutionLine(entry: DexEntry & { name: string }): (DexEntry & { name: string })[] {
  const named = namedEntries();
  const byNumber = new Map(named.map((e) => [e.number, e]));

  let start = entry.number;
  while (true) {
    const prev = byNumber.get(start - 1);
    if (!prev || prev.element !== entry.element) break;
    start -= 1;
  }

  let end = entry.number;
  while (true) {
    const next = byNumber.get(end + 1);
    if (!next || next.element !== entry.element) break;
    end += 1;
  }

  const line: (DexEntry & { name: string })[] = [];
  for (let n = start; n <= end; n += 1) {
    const slot = byNumber.get(n);
    if (slot) line.push(slot);
  }
  return line.length > 1 ? line : [entry];
}

export function getSimilarPets(entry: DexEntry & { name: string }, limit = 6): (DexEntry & { name: string })[] {
  return namedEntries()
    .filter((e) => e.name !== entry.name && e.element === entry.element)
    .sort((a, b) => a.number - b.number)
    .slice(0, limit);
}

export function getPetExtra(slug: string) {
  return petDetailExtras[slug.toLowerCase()];
}

export function getElementMatchups(element: ElementType) {
  if (element === "Unknown" || element === "Normal") {
    return { strongAgainst: [] as ElementType[], weakTo: [] as ElementType[], resists: [] as ElementType[] };
  }
  return {
    strongAgainst: getStrongAgainst(element),
    weakTo: getTypesThatBeat(element),
    resists: getResistedFrom(element),
  };
}

export type PetFaq = { q: string; a: string };

export function buildPetFaqs(entry: DexEntry & { name: string }): PetFaq[] {
  const extra = getPetExtra(entry.name.toLowerCase());
  const line = getEvolutionLine(entry);
  const idx = line.findIndex((e) => e.name === entry.name);
  const prev = idx > 0 ? line[idx - 1] : null;
  const next = idx >= 0 && idx < line.length - 1 ? line[idx + 1] : null;

  const faqs: PetFaq[] = [
    {
      q: `What element is ${entry.name} in Evomon?`,
      a: `${entry.name} is a ${entry.element} element creature in Roblox Evomon (dex #${entry.number}).`,
    },
  ];

  if (extra?.location) {
    faqs.push({
      q: `Where do you get ${entry.name} in Evomon?`,
      a: `${entry.name} is found at ${extra.location}.${extra.weather ? ` Weather: ${extra.weather}.` : ""}`,
    });
  }

  if (next) {
    faqs.push({
      q: `Does ${entry.name} evolve in Evomon?`,
      a: `${entry.name} evolves into ${next.name} (dex #${next.number}). Confirm stone and level gates in-game before spending materials.`,
    });
  } else if (prev) {
    faqs.push({
      q: `What does ${entry.name} evolve from?`,
      a: `${entry.name} evolves from ${prev.name} (dex #${prev.number}).`,
    });
  } else if (line.length === 1) {
    faqs.push({
      q: `Does ${entry.name} evolve in Evomon?`,
      a: `No confirmed evolution line is linked to ${entry.name} yet. Check back after community datamines or in-game confirmation.`,
    });
  }

  if (extra?.role || extra?.blurb) {
    faqs.push({
      q: `Is ${entry.name} good in Evomon?`,
      a: extra.blurb ?? `${entry.name} fills a ${extra.role} role. See the tier list for current meta rankings.`,
    });
  } else if (entry.tier) {
    faqs.push({
      q: `Is ${entry.name} good in Evomon?`,
      a: `Community tier signal: ${entry.tier}. Compare on the tier list and test in your team builder before investing stones.`,
    });
  }

  const { weakTo, strongAgainst } = getElementMatchups(entry.element);
  if (weakTo.length > 0) {
    faqs.push({
      q: `What types beat ${entry.name} in Evomon?`,
      a: `${entry.name} is weak to ${weakTo.join(", ")} attacks in the public type chart. Dual-type pets may differ in real fights.`,
    });
  }
  if (strongAgainst.length > 0) {
    faqs.push({
      q: `What is ${entry.name} strong against?`,
      a: `${entry.name}'s ${entry.element} attacks are super-effective vs ${strongAgainst.join(", ")} on the current chart.`,
    });
  }

  return faqs;
}
