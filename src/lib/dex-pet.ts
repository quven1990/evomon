import { petDetailExtras } from "@/data/pet-details";
import { getPetCombat, type PetBaseStats } from "@/data/pet-combat";
import { dexEntries, type DexEntry, type ElementType } from "@/data/dex";
import { mapZones, spawnToDexSlug, type MapSpawnRole, type MapZone } from "@/data/map-zones";
import {
  getResistedFrom,
  getStrongAgainst,
  getTypesThatBeat,
} from "@/data/type-chart";

const namedEntries = () => dexEntries.filter((e): e is DexEntry & { name: string } => Boolean(e.name));

/** Traits that appear on nearly every species pool — not useful as page identity. */
const GENERIC_TRAITS = new Set([
  "Adapt",
  "SkyFire",
  "Dread",
  "Thorns",
  "Foresight",
  "Awe",
  "VitalGaurd",
  "Abyss",
  "Toughskin",
  "Arcane",
  "Frost",
  "Venomward",
  "StoneHeart",
  "Frenzy",
  "Inferno",
  "Toxin",
  "Gale",
  "Sear",
  "Coldward",
  "Renew",
  "Psywall",
]);

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

export type EvolutionStageInfo = {
  stage: number;
  stages: number;
  label: string;
  prev: (DexEntry & { name: string }) | null;
  next: (DexEntry & { name: string }) | null;
};

export function getEvolutionStage(entry: DexEntry & { name: string }): EvolutionStageInfo {
  const line = getEvolutionLine(entry);
  const idx = line.findIndex((e) => e.name === entry.name);
  const stage = idx >= 0 ? idx + 1 : 1;
  const stages = line.length;
  const label =
    stages <= 1
      ? "Single form"
      : stages === 2
        ? stage === 1
          ? "2-stage line · base"
          : "2-stage line · final"
        : `${stages}-stage line · stage ${stage}`;
  return {
    stage,
    stages,
    label,
    prev: idx > 0 ? line[idx - 1]! : null,
    next: idx >= 0 && idx < line.length - 1 ? line[idx + 1]! : null,
  };
}

/** Same-element pets that are not on this evolution line. */
export function getSimilarPets(entry: DexEntry & { name: string }, limit = 6): (DexEntry & { name: string })[] {
  const lineNames = new Set(getEvolutionLine(entry).map((e) => e.name));
  return namedEntries()
    .filter((e) => e.name !== entry.name && e.element === entry.element && !lineNames.has(e.name))
    .sort((a, b) => a.number - b.number)
    .slice(0, limit);
}

export function getPetExtra(slug: string) {
  return petDetailExtras[slug.toLowerCase()];
}

export function getPetTypingLabel(slug: string, element: ElementType): string {
  return getPetExtra(slug)?.typesDisplay ?? element;
}

export type PetSpawnHit = {
  zoneId: string;
  zoneName: string;
  level: string;
  role: MapSpawnRole;
  zoneLevelRange: string | null;
  huntTip?: string;
};

export function getPetSpawns(slug: string): PetSpawnHit[] {
  const key = slug.toLowerCase();
  const hits: PetSpawnHit[] = [];
  for (const zone of mapZones) {
    for (const spawn of zone.spawns) {
      const spawnSlug = spawnToDexSlug(spawn);
      if (spawnSlug !== key) continue;
      hits.push({
        zoneId: zone.id,
        zoneName: zone.name,
        level: spawn.level,
        role: spawn.role,
        zoneLevelRange: zone.levelRange,
        huntTip: zone.huntTip,
      });
    }
  }
  return hits;
}

export function formatSpawnSummary(spawns: PetSpawnHit[]): string | null {
  if (spawns.length === 0) return null;
  return spawns
    .map((s) => `${s.zoneName} (${s.role} ~Lv ${s.level})`)
    .join("; ");
}

export function getSignatureTraits(traits: string[] | undefined, limit = 3): string[] {
  if (!traits?.length) return [];
  const sig = traits.filter((t) => !GENERIC_TRAITS.has(t));
  if (sig.length > 0) return sig.slice(0, limit);
  return traits.slice(0, 1);
}

export type StatArchetype = {
  label: string;
  peakStat: string;
  peakValue: number;
  physicalBias: boolean;
  summary: string;
};

export function getStatArchetype(stats: PetBaseStats): StatArchetype {
  const rows: { key: keyof PetBaseStats; label: string; value: number }[] = [
    { key: "hp", label: "HP", value: stats.hp },
    { key: "attack", label: "Attack", value: stats.attack },
    { key: "defense", label: "Defense", value: stats.defense },
    { key: "spAtk", label: "Sp. Atk", value: stats.spAtk },
    { key: "spDef", label: "Sp. Def", value: stats.spDef },
    { key: "speed", label: "Speed", value: stats.speed },
  ];
  const peak = rows.reduce((a, b) => (b.value > a.value ? b : a));
  const physicalBias = stats.attack >= stats.spAtk;
  const bulk = stats.hp + stats.defense + stats.spDef;
  const offense = stats.attack + stats.spAtk;

  let label = "Balanced";
  if (peak.key === "speed" && offense >= bulk * 0.55) label = "Fast striker";
  else if (peak.key === "defense" || (peak.key === "hp" && bulk > offense * 1.15)) label = "Bulky wall";
  else if (peak.key === "spAtk") label = "Special attacker";
  else if (peak.key === "attack") label = "Physical attacker";
  else if (peak.key === "spDef") label = "Special wall";
  else if (peak.key === "hp") label = "HP tank";

  return {
    label,
    peakStat: peak.label,
    peakValue: peak.value,
    physicalBias,
    summary: `${label} — peak ${peak.label} ${peak.value} (${physicalBias ? "physical" : "special"} bias)`,
  };
}

/** Programmatic intro when curated blurb is missing — keeps thin pages distinct. */
export function buildAutoBlurb(entry: DexEntry & { name: string }): string {
  const extra = getPetExtra(entry.name.toLowerCase());
  if (extra?.blurb) return extra.blurb;

  const combat = getPetCombat(entry.name);
  const stage = getEvolutionStage(entry);
  const spawns = getPetSpawns(entry.name.toLowerCase());
  const spawnText = formatSpawnSummary(spawns);
  const location = extra?.location ?? combat?.location;
  const sig = getSignatureTraits(combat?.traits);
  const archetype = combat?.stats ? getStatArchetype(combat.stats) : null;

  const bits: string[] = [];
  bits.push(
    `${entry.name} is dex #${entry.number}, a ${entry.element} Evomon (${stage.label.toLowerCase()}).`,
  );

  if (stage.next) {
    bits.push(`It evolves toward ${stage.next.name}.`);
  } else if (stage.prev) {
    bits.push(`It evolves from ${stage.prev.name}.`);
  }

  if (archetype) {
    bits.push(`Community bases read as a ${archetype.summary}.`);
  }

  if (sig.length > 0) {
    bits.push(`Signature trait pool opens with ${sig.join(", ")}.`);
  }

  if (spawnText) {
    bits.push(`Map data lists it at ${spawnText}.`);
  } else if (location && !/^via evo/i.test(location)) {
    bits.push(`Listed location: ${location}.`);
  } else if (stage.prev) {
    bits.push(`Usually obtained by evolving ${stage.prev.name} rather than a unique wild band.`);
  }

  if (entry.tier) {
    bits.push(`Community tier signal: ${entry.tier}.`);
  }

  if (!combat) {
    bits.push(
      "Combat stats are not verified in our community sheet yet — treat this page as a name/element stub until more data lands.",
    );
  }

  return bits.join(" ");
}

export function getPetLeadCopy(entry: DexEntry & { name: string }): {
  blurb: string;
  roleLine: string;
  curated: boolean;
} {
  const extra = getPetExtra(entry.name.toLowerCase());
  const stage = getEvolutionStage(entry);
  const combat = getPetCombat(entry.name);
  const archetype = combat?.stats ? getStatArchetype(combat.stats) : null;
  const curated = Boolean(extra?.blurb);

  const roleLine = extra?.role
    ? `${extra.role} — Roblox Evomon dex entry.`
    : archetype
      ? `${archetype.label} · ${stage.label} — Roblox Evomon dex entry.`
      : `${stage.label} · ${entry.element} — Roblox Evomon dex entry #${entry.number}.`;

  return {
    blurb: buildAutoBlurb(entry),
    roleLine,
    curated,
  };
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
  const blurb = named ? buildAutoBlurb(named) : "";
  const description =
    blurb.length > 155
      ? `${blurb.slice(0, 152).trim()}…`
      : blurb ||
        `${entry.name} (dex #${entry.number}, ${typing}) — evolution neighbors, type matchups, sprite, and FAQ on evomon.cc.`;

  return {
    title: `${entry.name} Evomon — #${num} ${entry.element} Dex`,
    description,
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

  const stage = getEvolutionStage(entry);
  const combat = getPetCombat(entry.name);
  const spawns = getPetSpawns(entry.name.toLowerCase());
  const spawnSummary = formatSpawnSummary(spawns);
  const location = extra?.location ?? combat?.location;
  const sig = getSignatureTraits(combat?.traits);
  const faqs: PetFaq[] = [];

  if (spawnSummary) {
    faqs.push({
      q: `Where do you get ${entry.name} in Evomon?`,
      a: `${entry.name} appears on our map-zones chart at ${spawnSummary}. Confirm the live spawn UI after patches.`,
    });
  } else if (location && !/^via evo/i.test(location)) {
    faqs.push({
      q: `Where do you get ${entry.name} in Evomon?`,
      a: `${entry.name} is listed at ${location}. Confirm the current spawn UI in your client — island unlocks and level bands can shift with patches.`,
    });
  } else if (stage.prev) {
    faqs.push({
      q: `Where do you get ${entry.name} in Evomon?`,
      a: `${entry.name} is primarily obtained by evolving ${stage.prev.name} (dex #${stage.prev.number}). Check stone and level gates in-game.`,
    });
  }

  if (stage.next) {
    faqs.push({
      q: `What does ${entry.name} evolve into?`,
      a: extra?.evolutionNote
        ? extra.evolutionNote
        : `${entry.name} evolves into ${stage.next.name} (dex #${stage.next.number}). Confirm materials before spending Evolution Stones.`,
    });
  } else if (stage.prev) {
    faqs.push({
      q: `How do you get ${entry.name} from evolution?`,
      a: extra?.evolutionNote
        ? extra.evolutionNote
        : `${entry.name} evolves from ${stage.prev.name} (dex #${stage.prev.number}). Prefer a keeper with usable Talent before the stone.`,
    });
  }

  if (combat?.stats) {
    const arch = getStatArchetype(combat.stats);
    faqs.push({
      q: `Is ${entry.name} a physical or special attacker?`,
      a: `Community bases lean ${arch.physicalBias ? "physical (Attack)" : "special (Sp. Atk)"} — ${arch.summary}. Talent and Nature still reshape the final sheet.`,
    });
    const s = combat.stats;
    faqs.push({
      q: `What is ${entry.name}'s base stat spread?`,
      a: `Community base stats (before Talent/Nature): HP ${s.hp}, Atk ${s.attack}, Def ${s.defense}, SpA ${s.spAtk}, SpD ${s.spDef}, Spe ${s.speed}.`,
    });
  }

  if (sig.length > 0) {
    faqs.push({
      q: `What signature traits can ${entry.name} roll?`,
      a: `Standout trait names in the community pool include ${sig.join(", ")} (plus a shared generic pool). Rates are unpublished — verify rolls in-game.`,
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

  // Weakness FAQ only when we lack spawn/stat differentiation — avoid identical per-element spam.
  if (faqs.length < 3) {
    const { weakTo } = getElementMatchups(entry.element);
    if (weakTo.length > 0) {
      faqs.push({
        q: `What should I bring against ${entry.name}?`,
        a: `On the public type chart, ${entry.element} takes super-effective damage from ${weakTo.join(", ")}. Dual-type pets and move pools can change real duel results.`,
      });
    }
  }

  if (faqs.length === 0) {
    faqs.push({
      q: `What is ${entry.name} in Evomon?`,
      a: buildAutoBlurb(entry),
    });
  }

  return faqs;
}

/** Zones that mention this pet — for related hunting tips. */
export function getPetHuntZones(slug: string): MapZone[] {
  const keys = new Set(getPetSpawns(slug).map((s) => s.zoneId));
  return mapZones.filter((z) => keys.has(z.id));
}
