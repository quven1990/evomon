import { petCombatBySlug } from "@/data/pet-combat";

/** Trait glossary — effects from community wiki; pet pools from our combat data. */
export type TraitRarity = "Legendary" | "Rare" | "Normal";

export type TraitMeta = {
  name: string;
  rarity: TraitRarity;
  /** Community-reported roll rate when known. */
  rate?: string;
  effect: string;
};

export const TRAITS_SOURCE = "community-wiki";
export const TRAITS_LAST_CHECKED = "2026-07-20";

/**
 * Canonical trait names + effects. Keys are lowercase for lookup.
 * Pet pools are resolved at runtime from petCombatBySlug (not duplicated here).
 */
export const traitMetaList: TraitMeta[] = [
  { name: "Blind", rarity: "Legendary", rate: "1.5%", effect: "Inflicts 1 extra Psymark stack." },
  { name: "Purify", rarity: "Legendary", rate: "1.5%", effect: "Cleanses 1 random debuff on itself at the end of each turn." },
  { name: "Raincall", rarity: "Legendary", rate: "1.5%", effect: "On first switch-in, changes the weather to Rain for 5 turns." },
  { name: "SoulShock", rarity: "Legendary", rate: "1.5%", effect: "When defeated, inflicts Confusion on the attacker for 2 turns." },
  { name: "Leech", rarity: "Legendary", rate: "1.5%", effect: "Life steal 66% of Poison damage dealt to foes." },
  { name: "Regen", rarity: "Legendary", rate: "1.5%", effect: "Heals 15% of max HP at the end of each turn while under 50% HP." },
  { name: "Emberbirth", rarity: "Legendary", rate: "1.5%", effect: "Life steal 100% of Burn damage dealt to foes." },
  { name: "Flamefiend", rarity: "Legendary", rate: "1.5%", effect: "On switch-in, changes the weather to Volcanic Eruption for 5 turns." },
  { name: "UltGuard", rarity: "Legendary", rate: "1.5%", effect: "The first time an ultimate skill hits it, damage taken is reduced by 50%." },
  { name: "Chillwind", rarity: "Legendary", rate: "1.5%", effect: "When inflicting Frostbite, also inflicts 1 additional stack." },
  { name: "OpenSupport", rarity: "Legendary", rate: "1.5%", effect: "Status skills have +1 priority." },
  { name: "BattleSpirit", rarity: "Legendary", rate: "1.5%", effect: "On first switch-in, raises ATK and SpA by 3 stages." },
  { name: "Reaper", rarity: "Legendary", rate: "1.5%", effect: "After defeating a target, raises ATK and SpA by 5 stages." },
  { name: "Pursuit", rarity: "Legendary", rate: "1.5%", effect: "Damage dealt +18%." },
  { name: "PartingGift", rarity: "Legendary", rate: "1.5%", effect: "When defeated, restores 2 energy." },
  { name: "Rainveil", rarity: "Legendary", rate: "1.5%", effect: "During Rain, Water-type skills gain +40 power." },
  { name: "Claws", rarity: "Legendary", rate: "1.5%", effect: "When inflicting Bleed, inflicts 1 additional stack." },
  { name: "Drain", rarity: "Legendary", rate: "1.5%", effect: "Gains 18% lifesteal." },
  { name: "Charge", rarity: "Legendary", rate: "1.5%", effect: "On first switch-in: 2× damage dealt." },
  { name: "Perpetual", rarity: "Legendary", rate: "1.5%", effect: "Upon defeating a target, restores 2 PP to all of its skills." },
  { name: "TrueDmg", rarity: "Legendary", rate: "1.5%", effect: "Ignores the target's Def and SpD stage changes." },
  { name: "Primeform", rarity: "Legendary", rate: "1.5%", effect: "Takes 60% less damage while at full HP." },
  { name: "Evolve", rarity: "Legendary", rate: "1.5%", effect: "Applying Poison also inflicts 2 stacks of Psymark." },
  { name: "Sandgale", rarity: "Legendary", rate: "1.5%", effect: "During Sandstorm, Ground- and Rock-type skills gain +40 power." },
  { name: "Deathrattle", rarity: "Legendary", rate: "1.5%", effect: "Upon defeat, deals 33% of the attacker's max HP as damage (cap 300)." },
  { name: "Infect", rarity: "Legendary", rate: "1.5%", effect: "When inflicting Poison, also inflicts 1 additional stack." },
  { name: "Blight", rarity: "Legendary", rate: "1.5%", effect: "Transfers negative stat stages from foes to its replacement on switch." },
  { name: "Snowfiend", rarity: "Legendary", rate: "1.5%", effect: "On first switch-in, changes the weather to Snow for 5 turns." },
  { name: "Unseen", rarity: "Legendary", rate: "1.5%", effect: "When attacking a target with stat boosts, steal 2 random stages." },
  { name: "Sandfiend", rarity: "Legendary", rate: "1.5%", effect: "On first switch-in, changes the weather to Sandstorm for 5 turns." },
  { name: "Adapt", rarity: "Rare", rate: "2.7%", effect: "Unaffected by weather." },
  { name: "SkyFire", rarity: "Rare", rate: "2.7%", effect: "Below 50% HP, Fire-type skills gain +25% power." },
  { name: "Dread", rarity: "Rare", rate: "2.7%", effect: "On switch-in, lowers all foes' SpA by 2 stages." },
  { name: "Thorns", rarity: "Rare", rate: "2.7%", effect: "When hit, reflects 12% of the damage taken." },
  { name: "Foresight", rarity: "Rare", rate: "2.7%", effect: "Gains +12% crit chance." },
  { name: "Awe", rarity: "Rare", rate: "2.7%", effect: "On first switch-in, lowers all foes' ATK by 2 stages." },
  { name: "VitalGaurd", rarity: "Rare", rate: "2.7%", effect: "Cannot be hit critically (Sturdy-style)." },
  { name: "Abyss", rarity: "Rare", rate: "2.7%", effect: "Below 50% HP, Water-type skills gain +25% power." },
  { name: "Toughskin", rarity: "Rare", rate: "2.7%", effect: "12% damage reduction." },
  { name: "Renew", rarity: "Rare", rate: "2.7%", effect: "Below 50% HP, Grass-type skills gain +25% power." },
  { name: "Coldward", rarity: "Normal", rate: "6.5%", effect: "When hit, 25% chance to inflict 1 stack of Frostbite on the attacker." },
  { name: "Sear", rarity: "Normal", rate: "6.5%", effect: "33% chance on hit to inflict 1 stack of Burn." },
  { name: "Gale", rarity: "Normal", rate: "6.5%", effect: "When hit, 11% chance to raise Speed by 2 stages." },
  { name: "Toxin", rarity: "Normal", rate: "6.5%", effect: "33% chance on hit to inflict 1 stack of Poison." },
  { name: "Inferno", rarity: "Normal", rate: "6.5%", effect: "When hit, 33% chance to inflict 1 stack of Burn on the attacker." },
  { name: "Frenzy", rarity: "Normal", rate: "6.5%", effect: "When hit, 11% chance to raise ATK by 3 stages." },
  { name: "StoneHeart", rarity: "Normal", rate: "6.5%", effect: "When hit, 11% chance to raise DEF by 3 stages." },
  { name: "Venomward", rarity: "Normal", rate: "6.5%", effect: "When hit, 33% chance to inflict 1 stack of Poison on the attacker." },
  { name: "Frost", rarity: "Normal", rate: "6.5%", effect: "25% chance on hit to inflict 1 stack of Frostbite." },
  { name: "Arcane", rarity: "Normal", rate: "6.5%", effect: "When hit, 11% chance to raise SpA by 3 stages." },
  { name: "Psywall", rarity: "Normal", rate: "6.5%", effect: "When hit, 11% chance to raise SpD by 3 stages." },
];

const metaByKey = new Map(traitMetaList.map((t) => [traitKey(t.name), t] as const));

function traitKey(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Normalize common spelling variants across data dumps → canonical display name. */
const ALIASES: Record<string, string> = {
  soulshock: "SoulShock",
  snowfiend: "Snowfiend",
  sandfiend: "Sandfiend",
  vitalgaurd: "VitalGaurd",
  unseen: "Unseen",
};

export type TraitCatalogEntry = TraitMeta & {
  /** Dex slugs that list this trait in their pool. */
  petSlugs: string[];
};

export function getTraitCatalog(): TraitCatalogEntry[] {
  const petsByTrait = new Map<string, string[]>();

  for (const [slug, data] of Object.entries(petCombatBySlug)) {
    for (const raw of data.traits) {
      const key = traitKey(ALIASES[traitKey(raw)] ?? raw);
      if (!petsByTrait.has(key)) petsByTrait.set(key, []);
      const list = petsByTrait.get(key)!;
      if (!list.includes(slug)) list.push(slug);
    }
  }

  const entries: TraitCatalogEntry[] = traitMetaList.map((meta) => ({
    ...meta,
    petSlugs: petsByTrait.get(traitKey(meta.name)) ?? [],
  }));

  const covered = new Set(entries.map((e) => traitKey(e.name)));

  for (const [key, slugs] of petsByTrait) {
    if (covered.has(key)) continue;
    const sampleName =
      Object.values(petCombatBySlug)
        .flatMap((d) => d.traits)
        .find((t) => traitKey(t) === key) ?? key;
    entries.push({
      name: sampleName,
      rarity: "Normal",
      effect: "Effect not verified yet — confirm in-game tooltip.",
      petSlugs: slugs,
    });
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name));
}

export function getTraitMeta(name: string): TraitMeta | undefined {
  const key = traitKey(ALIASES[traitKey(name)] ?? name);
  return metaByKey.get(key);
}
