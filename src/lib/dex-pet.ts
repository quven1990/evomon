import { petDetailExtras } from "@/data/pet-details";
import { getPetCombat } from "@/data/pet-combat";
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

export function getPetTypingLabel(slug: string, element: ElementType): string {
  return getPetExtra(slug)?.typesDisplay ?? element;
}

export type DexPetSeoCopy = { title: string; description: string; keywords: string[] };

/** SERP copy — indexable pets use curated meta; others use a short honest default. */
export function buildDexPetSeo(entry: {
  name: string;
  number: number;
  element: ElementType;
}): DexPetSeoCopy {
  const slug = entry.name.toLowerCase();
  const num = String(entry.number).padStart(3, "0");
  const typing = getPetTypingLabel(slug, entry.element);
  const extra = getPetExtra(slug);

  if (extra) {
    return {
      title: extra.metaTitle,
      description: extra.metaDescription,
      keywords: [
        `${slug} evomon`,
        `evomon ${slug}`,
        `${slug} evolution`,
        `evomon ${slug} location`,
        `${entry.element.toLowerCase()} evomon`,
      ],
    };
  }

  const named = namedEntries().find((e) => e.name.toLowerCase() === slug);
  const line = named ? getEvolutionLine(named) : [];
  const evoHint =
    line.length > 1
      ? ` Part of a ${entry.element} evolution line on the dex.`
      : "";

  return {
    title: `${entry.name} Evomon — #${num} ${entry.element} Dex`,
    description: `${entry.name} (dex #${entry.number}, ${typing}) — evolution neighbors, type matchups, sprite, and FAQ on evomon.cc.${evoHint}`,
    keywords: [
      `${slug} evomon`,
      `evomon ${slug}`,
      `${entry.element.toLowerCase()} evomon`,
    ],
  };
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

export type { PetFaq } from "@/data/pet-details";
import type { PetFaq } from "@/data/pet-details";

export function buildPetFaqs(entry: DexEntry & { name: string }): PetFaq[] {
  const extra = getPetExtra(entry.name.toLowerCase());

  // Curated pages: author FAQs only — no shared “What element / What traits” template.
  if (extra?.faqs?.length) {
    return extra.faqs;
  }

  const line = getEvolutionLine(entry);
  const idx = line.findIndex((e) => e.name === entry.name);
  const prev = idx > 0 ? line[idx - 1] : null;
  const next = idx >= 0 && idx < line.length - 1 ? line[idx + 1] : null;
  const combat = getPetCombat(entry.name);
  const location = extra?.location ?? combat?.location;
  const faqs: PetFaq[] = [];

  if (location) {
    faqs.push({
      q: `Where do you get ${entry.name} in Evomon?`,
      a: `${entry.name} is listed at ${location}. Confirm the current spawn UI in your client — island unlocks and level bands can shift with patches.`,
    });
  }

  if (next) {
    faqs.push({
      q: `What does ${entry.name} evolve into?`,
      a: extra?.evolutionNote
        ? extra.evolutionNote
        : `${entry.name} evolves into ${next.name} (dex #${next.number}). Check stone and level requirements in-game before spending materials.`,
    });
  } else if (prev) {
    faqs.push({
      q: `How do you get ${entry.name} from evolution?`,
      a: extra?.evolutionNote
        ? extra.evolutionNote
        : `${entry.name} evolves from ${prev.name} (dex #${prev.number}). Prefer a keeper with usable Talent before the stone.`,
    });
  }

  if (extra?.blurb) {
    faqs.push({
      q: `Is ${entry.name} worth using in Evomon?`,
      a: extra.blurb,
    });
  } else if (entry.tier) {
    faqs.push({
      q: `Where does ${entry.name} sit in community tiers?`,
      a: `Community tier signal: ${entry.tier}. Cross-check the tier list and your actual island blockers before investing Evolution Stones.`,
    });
  }

  if (extra?.shinyHuntNote) {
    faqs.push({
      q: `Any shiny tips for ${entry.name}?`,
      a: extra.shinyHuntNote,
    });
  }

  if (combat?.stats) {
    const s = combat.stats;
    faqs.push({
      q: `What is ${entry.name}'s base stat spread?`,
      a: `Community base stats (before Talent/Nature): HP ${s.hp}, Atk ${s.attack}, Def ${s.defense}, SpA ${s.spAtk}, SpD ${s.spDef}, Spe ${s.speed}.`,
    });
  }

  const { weakTo } = getElementMatchups(entry.element);
  if (weakTo.length > 0) {
    faqs.push({
      q: `What should I bring against ${entry.name}?`,
      a: `On the public type chart, ${entry.element} takes super-effective damage from ${weakTo.join(", ")}. Dual-type pets and move pools can change real duel results.`,
    });
  }

  if (faqs.length === 0) {
    faqs.push({
      q: `What is ${entry.name} in Evomon?`,
      a: `${entry.name} is dex #${entry.number} (${entry.element}). Open the type chart and team builder once you have a catch plan — full route notes are still being filled in.`,
    });
  }

  return faqs;
}
