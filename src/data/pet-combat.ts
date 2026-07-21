/** Base stats & traits from community wiki data (species spreads before Talent/Nature). */
export type PetBaseStats = {
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
};

export type PetCombatData = {
  stats: PetBaseStats;
  traits: string[];
  /** Catch location when known */
  location?: string;
};

export const PET_COMBAT_SOURCE = "community-wiki";
export const PET_COMBAT_LAST_CHECKED = "2026-07-21";

export const petCombatBySlug: Record<string, PetCombatData> = {
  "arcapex": {
    stats: { hp: 90, attack: 115, defense: 87, spAtk: 91, spDef: 69, speed: 108 },
    traits: ["Charge", "Coldward", "Renew", "Abyss", "Toughskin", "VitalGaurd", "Awe", "Foresight", "Dread", "Thorns", "SkyFire", "Adapt", "Sear", "Gale", "Inferno", "Toxin", "StoneHeart", "Frenzy", "Venomward", "Frost", "Arcane", "Psywall"], location: "Thunder Cliffs"
  },
  "arcub": {
    stats: { hp: 65, attack: 82, defense: 62, spAtk: 64, spDef: 50, speed: 77 },
    traits: ["Charge", "Coldward", "Toughskin", "Renew", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Adapt", "Gale", "Sear", "Inferno", "StoneHeart", "Frenzy", "Toxin", "Frost", "Venomward", "Arcane", "Psywall"]
  },
  "astraknight": {
    stats: { hp: 88, attack: 108, defense: 94, spAtk: 50, spDef: 80, speed: 90 },
    traits: ["BattleSpirit", "Adapt", "SkyFire", "Dread", "Foresight", "Thorns", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Frenzy", "StoneHeart", "Venomward", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Battle Pass"
  },
  "blazgrowl": {
    stats: { hp: 58, attack: 74, defense: 64, spAtk: 56, spDef: 55, speed: 62 },
    traits: ["Flamefiend", "Adapt", "SkyFire", "Dread", "Foresight", "Thorns", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Venomward", "StoneHeart", "Frost", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via evo"
  },
  "blazmane": {
    stats: { hp: 78, attack: 105, defense: 93, spAtk: 79, spDef: 72, speed: 93 },
    traits: ["Flamefiend", "SkyFire", "Dread", "Thorns", "Foresight", "Adapt", "Awe", "VitalGaurd", "Toughskin", "Abyss", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evo"
  },
  "blazpup": {
    stats: { hp: 37, attack: 56, defense: 42, spAtk: 43, spDef: 41, speed: 44 },
    traits: ["Flamefiend", "SkyFire", "Adapt", "Dread", "Thorns", "Foresight", "VitalGaurd", "Awe", "Abyss", "Toughskin", "Renew", "Coldward", "Gale", "Sear", "Inferno", "Toxin", "StoneHeart", "Frenzy", "Venomward", "Frost", "Arcane", "Psywall"], location: "Starter Zone"
  },
  "bluebird": {
    stats: { hp: 58, attack: 62, defense: 45, spAtk: 66, spDef: 50, speed: 86 },
    traits: ["Drain", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Venomward", "Frost", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Raven Ridge"
  },
  "bubblade": {
    stats: { hp: 86, attack: 81, defense: 78, spAtk: 100, spDef: 85, speed: 91 },
    traits: ["Rainveil", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "Abyss", "VitalGaurd", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Evolution"
  },
  "bubble": {
    stats: { hp: 44, attack: 43, defense: 41, spAtk: 47, spDef: 45, speed: 40 },
    traits: ["Rainveil", "Awe", "Abyss", "VitalGaurd", "Toughskin", "Arcane", "Venomward", "StoneHeart", "Sear", "Psywall", "Frost", "Thorns", "Dread", "Gale", "Toxin", "Inferno", "Frenzy", "Renew", "Foresight", "Coldward", "SkyFire", "Adapt"], location: "Starter Zone"
  },
  "bubboxer": {
    stats: { hp: 64, attack: 61, defense: 59, spAtk: 66, spDef: 60, speed: 59 },
    traits: ["Rainveil", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Adapt", "Psywall"], location: "Evolution"
  },
  "budling": {
    stats: { hp: 42, attack: 44, defense: 37, spAtk: 35, spDef: 52, speed: 45 },
    traits: ["Regen", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "Abyss", "VitalGaurd", "Toughskin", "Renew", "Adapt", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Psywall"], location: "Verdant Valley"
  },
  "chirphantom": {
    stats: { hp: 76, attack: 104, defense: 77, spAtk: 65, spDef: 79, speed: 103 },
    traits: ["Claws", "Adapt", "SkyFire", "Dread", "Thorns", "Awe", "Foresight", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Toxin", "Inferno", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via evo"
  },
  "chirplume": {
    stats: { hp: 54, attack: 64, defense: 55, spAtk: 56, spDef: 56, speed: 73 },
    traits: ["Claws", "Adapt", "SkyFire", "Dread", "Foresight", "Thorns", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Gale", "Sear", "Coldward", "Renew", "Toxin", "Psywall"], location: "Via Evo"
  },
  "chirppy": {
    stats: { hp: 39, attack: 48, defense: 40, spAtk: 38, spDef: 40, speed: 52 },
    traits: ["Claws", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Raven Ridge"
  },
  "chitaladin": {
    stats: { hp: 80, attack: 91, defense: 78, spAtk: 88, spDef: 82, speed: 92 },
    traits: ["Leech", "Adapt", "Coldward", "Renew", "Toughskin", "VitalGaurd", "Abyss", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall"], location: "Via Evo"
  },
  "chitgladi": {
    stats: { hp: 57, attack: 65, defense: 55, spAtk: 63, spDef: 58, speed: 66 },
    traits: ["Leech", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Renew", "Psywall", "Frost", "Arcane", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Adapt"], location: "Via Evo"
  },
  "chitmite": {
    stats: { hp: 40, attack: 46, defense: 40, spAtk: 45, spDef: 42, speed: 47 },
    traits: ["Leech", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Renew", "Psywall", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Adapt"], location: "Canyon Oasis"
  },
  "clampip": {
    stats: { hp: 43, attack: 45, defense: 51, spAtk: 41, spDef: 39, speed: 37 },
    traits: ["Raincall", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Inferno", "Frenzy", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"],
    location: "Petal Pond wild (~Lv 22–30)",
  },
  "clamspire": {
    stats: { hp: 85, attack: 105, defense: 100, spAtk: 65, spDef: 75, speed: 74 },
    traits: ["Raincall", "SkyFire", "Gale", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall", "Sear", "Coldward", "Toughskin", "Renew", "Adapt", "VitalGaurd", "Abyss", "Foresight", "Awe", "Thorns", "Dread"],
    location: "Via Evo from Clamwhirl; Petal Pond boss (~Lv 30)",
  },
  "clamwhirl": {
    stats: { hp: 60, attack: 70, defense: 71, spAtk: 51, spDef: 54, speed: 52 },
    traits: ["Raincall", "Adapt", "SkyFire", "Dread", "Thorns", "Awe", "Foresight", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evo"
  },
  "clanx": {
    stats: { hp: 51, attack: 63, defense: 83, spAtk: 55, spDef: 69, speed: 42 },
    traits: [], location: "Floating Island"
  },
  "clanxor": {
    stats: { hp: 71, attack: 88, defense: 115, spAtk: 78, spDef: 96, speed: 60 },
    traits: [], location: "Floating Island"
  },
  "datubud": {
    stats: { hp: 58, attack: 46, defense: 56, spAtk: 76, spDef: 57, speed: 70 },
    traits: ["Blind", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Gale", "Sear", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall"], location: "Amber Acres"
  },
  "datunymph": {
    stats: { hp: 81, attack: 65, defense: 79, spAtk: 107, spDef: 80, speed: 97 },
    traits: ["Blind", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "SkyFire", "Dread", "Sear", "Gale", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Psywall", "Arcane", "Frost"], location: "Via Evo"
  },
  "emfox": {
    stats: { hp: 56, attack: 60, defense: 48, spAtk: 70, spDef: 48, speed: 78 },
    traits: ["Purify", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Renew", "Psywall", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Adapt"], location: "Via Evo"
  },
  "empixy": {
    stats: { hp: 78, attack: 81, defense: 68, spAtk: 100, spDef: 68, speed: 109 },
    traits: ["Purify", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Toxin", "Inferno", "Frenzy", "Venomward", "Frost", "StoneHeart", "Arcane", "Psywall"],
    location: "Via Evo from Emfox; Lava Crag boss (~Lv 45)",
  },
  "florawn": {
    stats: { hp: 60, attack: 62, defense: 53, spAtk: 50, spDef: 73, speed: 64 },
    traits: ["Regen", "SkyFire", "Thorns", "Dread", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Renew", "Adapt", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Psywall"], location: "Via evo"
  },
  "fluffastar": {
    stats: { hp: 78, attack: 73, defense: 98, spAtk: 102, spDef: 75, speed: 94 },
    traits: ["Sandgale", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Gale", "Sear", "Toxin", "Inferno", "Frenzy", "Venomward", "StoneHeart", "Frost", "Arcane", "Psywall"], location: "Via Evolved"
  },
  "fluffet": {
    stats: { hp: 56, attack: 55, defense: 70, spAtk: 63, spDef: 53, speed: 67 },
    traits: ["Sandgale", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Toughskin", "Abyss", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Rocky Ridge"
  },
  "flutterby": {
    stats: { hp: 58, attack: 67, defense: 66, spAtk: 49, spDef: 52, speed: 74 },
    traits: ["SkyFire", "Dread", "Thorns", "Foresight", "VitalGaurd", "Awe", "Abyss", "Toughskin", "Renew", "Coldward", "Sear", "Gale", "Frenzy", "Inferno", "Toxin", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall", "Blight", "Adapt"], location: "Via Evo"
  },
  "frostelle": {
    stats: { hp: 81, attack: 80, defense: 71, spAtk: 92, spDef: 81, speed: 113 },
    traits: ["OpenSupport", "Adapt", "SkyFire", "Dread", "Thorns", "Awe", "Foresight", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Gale", "Toxin", "Sear", "Coldward", "Renew", "Psywall"], location: "Via evo"
  },
  "frostlet": {
    stats: { hp: 60, attack: 57, defense: 53, spAtk: 66, spDef: 62, speed: 70 },
    traits: ["Chillwind", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Psywall"],
    location: "Starter pack or Crystal Cascade (~Lv 111–113)",
  },
  "frostseer": {
    stats: { hp: 83, attack: 83, defense: 75, spAtk: 102, spDef: 87, speed: 98 },
    traits: ["Chillwind", "Gale", "Sear", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Psywall", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Adapt"],
    location: "Via evo from Frostlet; Crystal Cascade boss (~Lv 125)",
  },
  "gempillar": {
    stats: { hp: 52, attack: 70, defense: 48, spAtk: 74, spDef: 48, speed: 70 },
    traits: ["Unseen", "Adapt", "Coldward", "Renew", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Arcane", "Toughskin", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Psywall"], location: "Canyon Oasis"
  },
  "gempress": {
    stats: { hp: 73, attack: 98, defense: 68, spAtk: 104, spDef: 68, speed: 97 },
    traits: ["Unseen", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Gale", "Sear", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall"], location: "Via Evolved"
  },
  "glacitadel": {
    stats: { hp: 75, attack: 108, defense: 67, spAtk: 102, spDef: 67, speed: 93 },
    traits: ["Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Sear", "Gale", "Coldward", "Renew", "Psywall", "Snowfiend"], location: "Via Evolved"
  },
  "glaclide": {
    stats: { hp: 38, attack: 56, defense: 35, spAtk: 53, spDef: 35, speed: 45 },
    traits: ["Snowfiend", "Adapt", "Frost", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Abyss", "Toughskin", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Gale", "Sear", "Coldward", "Renew", "Psywall", "Arcane", "Toxin"], location: "Shiver Snows"
  },
  "glacone": {
    stats: { hp: 53, attack: 74, defense: 48, spAtk: 73, spDef: 49, speed: 63 },
    traits: ["Snowfiend", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evo"
  },
  "graycrene": {
    stats: { hp: 60, attack: 78, defense: 54, spAtk: 70, spDef: 65, speed: 73 },
    traits: ["Pursuit", "Adapt", "Dread", "SkyFire", "Thorns", "Foresight", "StoneHeart", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Psywall", "Renew"], location: "After Boss Fight in King Of Flying"
  },
  "gulpfish": {
    stats: { hp: 82, attack: 60, defense: 55, spAtk: 69, spDef: 55, speed: 35 },
    traits: ["Deathrattle", "Foresight", "Thorns", "Dread", "SkyFire", "Adapt", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Crystal Cascade"
  },
  "humding": {
    stats: { hp: 42, attack: 47, defense: 50, spAtk: 38, spDef: 37, speed: 51 },
    traits: ["Adapt", "SkyFire", "Dread", "Foresight", "Thorns", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Sear", "Coldward", "Renew", "Psywall", "Gale", "Blight"], location: "Silent Sands"
  },
  "lavarock": {
    stats: { hp: 82, attack: 104, defense: 105, spAtk: 77, spDef: 72, speed: 62 },
    traits: ["Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Frenzy", "Awe", "Foresight", "Inferno", "Toxin", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Emberbirth", "Psywall", "Arcane", "StoneHeart", "Venomward", "Frost"], location: "Via Evo"
  },
  "lavite": {
    stats: { hp: 62, attack: 72, defense: 75, spAtk: 51, spDef: 61, speed: 44 },
    traits: ["Emberbirth", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall", "Gale", "Sear", "Adapt", "Coldward", "Renew", "Toughskin", "VitalGaurd", "Abyss", "Foresight", "Awe", "Thorns", "Dread", "SkyFire"], location: "Lava Crag"
  },
  "leafblade": {
    stats: { hp: 77, attack: 100, defense: 77, spAtk: 100, spDef: 76, speed: 95 },
    traits: ["Reaper", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Arcane", "Toughskin", "Frost", "StoneHeart", "Venomward", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evo"
  },
  "leafbun": {
    stats: { hp: 39, attack: 50, defense: 37, spAtk: 50, spDef: 37, speed: 49 },
    traits: ["Reaper", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Inferno", "Toxin", "Gale", "Renew", "Coldward", "Sear", "Frenzy", "Psywall"], location: "Starting Area"
  },
  "leafroge": {
    stats: { hp: 54, attack: 70, defense: 55, spAtk: 70, spDef: 54, speed: 67 },
    traits: ["Reaper", "Adapt", "Dread", "SkyFire", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Sear", "Renew", "Coldward", "Gale", "Psywall", "Frost"], location: "Via Evo"
  },
  "mirefish": {
    stats: { hp: 115, attack: 80, defense: 78, spAtk: 101, spDef: 78, speed: 50 },
    traits: ["Deathrattle", "Adapt", "SkyFire", "Dread", "Foresight", "Thorns", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evolved"
  },
  "mopebun": {
    stats: { hp: 60, attack: 58, defense: 58, spAtk: 64, spDef: 58, speed: 63 },
    traits: ["Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "VitalGaurd", "Awe", "Toughskin", "Abyss", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Toxin", "Inferno", "Sear", "Gale", "Renew", "Coldward", "Psywall", "SoulShock"],
    location: "Petal Pond wild (~Lv 15–29)",
  },
  "mopillow": {
    stats: { hp: 85, attack: 85, defense: 79, spAtk: 90, spDef: 79, speed: 82 },
    traits: ["Soulshock", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Coldward", "Sear", "Renew", "Psywall"], location: "Via evo"
  },
  "mudbud": {
    stats: { hp: 43, attack: 46, defense: 44, spAtk: 43, spDef: 43, speed: 41 },
    traits: ["Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "PartingGift", "Foresight", "Thorns", "Dread", "SkyFire", "Gale", "Sear", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Psywall", "Arcane", "Frost"], location: "Amber Acres"
  },
  "mudthorn": {
    stats: { hp: 60, attack: 64, defense: 62, spAtk: 61, spDef: 61, speed: 57 },
    traits: ["PartingGift", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Frost", "Arcane", "Venomward", "Frenzy", "Inferno", "StoneHeart", "Gale", "Toxin", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evo"
  },
  "pebble": {
    stats: { hp: 37, attack: 40, defense: 58, spAtk: 33, spDef: 57, speed: 27 },
    traits: ["UltGuard", "SkyFire", "Dread", "Thorns", "Adapt", "Foresight", "VitalGaurd", "Awe", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Verdant Valley"
  },
  "pebgolem": {
    stats: { hp: 74, attack: 80, defense: 115, spAtk: 71, spDef: 112, speed: 55 },
    traits: ["UltGuard", "SkyFire", "Dread", "Foresight", "Thorns", "VitalGaurd", "Awe", "Abyss", "Toughskin", "Renew", "Coldward", "Sear", "Gale", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Psywall", "Arcane", "Adapt"], location: "Via evo"
  },
  "pebroll": {
    stats: { hp: 51, attack: 55, defense: 84, spAtk: 52, spDef: 79, speed: 39 },
    traits: ["UltGuard", "SkyFire", "Dread", "Thorns", "Awe", "VitalGaurd", "Foresight", "Abyss", "Toughskin", "Renew", "Psywall", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Adapt"],
    location: "Verdant Valley mini-boss (~Lv 13–15); via evo from Pebble",
  },
  "pummash": {
    stats: { hp: 82, attack: 117, defense: 90, spAtk: 68, spDef: 69, speed: 88 },
    traits: ["Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "Awe", "VitalGaurd", "Foresight", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Inferno", "Toxin", "Frenzy", "StoneHeart", "Venomward", "Arcane", "Frost", "Psywall", "TrueDmg"], location: "Via Evo"
  },
  "pummpaw": {
    stats: { hp: 58, attack: 83, defense: 64, spAtk: 49, spDef: 50, speed: 63 },
    traits: ["Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Sear", "Inferno", "Toxin", "Gale", "Frenzy", "StoneHeart", "Venomward", "Frost", "Psywall", "Arcane", "TrueDmg"], location: "Dusk Town"
  },
  "silvanarch": {
    stats: { hp: 83, attack: 88, defense: 75, spAtk: 72, spDef: 102, speed: 90 },
    traits: ["Regen", "SkyFire", "Dread", "Gale", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall", "Sear", "Adapt", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Coldward"], location: "Via evo"
  },
  "sparkit": {
    stats: { hp: 40, attack: 44, defense: 34, spAtk: 50, spDef: 34, speed: 55 },
    traits: ["Purify", "Adapt", "SkyFire", "Dread", "Thorns", "Awe", "Foresight", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Lava Crag"
  },
  "spikub": {
    stats: { hp: 58, attack: 55, defense: 52, spAtk: 65, spDef: 75, speed: 70 },
    traits: ["Sandfiend", "SkyFire", "Dread", "Adapt", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Psywall"], location: "Rocky Ridge"
  },
  "spikumane": {
    stats: { hp: 81, attack: 75, defense: 73, spAtk: 92, spDef: 101, speed: 97 },
    traits: ["Sandfiend", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Thorns", "Foresight", "Dread", "SkyFire", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Psywall"], location: "via evolved"
  },
  "stardrift": {
    stats: { hp: 57, attack: 65, defense: 51, spAtk: 68, spDef: 58, speed: 81 },
    traits: ["OpenSupport", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Shiver Snows"
  },
  "starloop": {
    stats: { hp: 58, attack: 60, defense: 67, spAtk: 72, spDef: 53, speed: 53 },
    traits: ["Blind", "Adapt", "Coldward", "Toughskin", "Renew", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall"], location: "Nether Land"
  },
  "starmuse": {
    stats: { hp: 81, attack: 79, defense: 94, spAtk: 115, spDef: 75, speed: 75 },
    traits: ["Blind", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Psywall", "Arcane", "Gale", "Sear", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Foresight", "Awe", "Thorns", "Dread", "SkyFire", "Adapt"], location: "Via Evolved"
  },
  "sundercrene": {
    stats: { hp: 87, attack: 114, defense: 73, spAtk: 87, spDef: 92, speed: 107 },
    traits: ["Pursuit", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Inferno", "Frenzy", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evo"
  },
  "tarragon": {
    stats: { hp: 87, attack: 90, defense: 75, spAtk: 88, spDef: 75, speed: 100 },
    traits: ["Primeform", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Frenzy", "Toxin", "Inferno", "StoneHeart", "Venomward", "Psywall", "Arcane", "Frost"], location: "Via Evo"
  },
  "tarro": {
    stats: { hp: 62, attack: 64, defense: 53, spAtk: 52, spDef: 53, speed: 71 },
    traits: ["Primeform", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "Awe", "Foresight", "VitalGaurd", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Psywall", "Arcane", "Frost"],
    location: "Murkwood wild (~Lv 142–150)",
  },
  "thordlord": {
    stats: { hp: 84, attack: 90, defense: 87, spAtk: 86, spDef: 86, speed: 81 },
    traits: ["Adapt", "Coldward", "PartingGift", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Sear", "Gale", "Inferno", "Frenzy", "Toxin", "StoneHeart", "Venomward", "Psywall", "Frost", "Arcane"], location: "Via Evo"
  },
  "tinkog": {
    stats: { hp: 57, attack: 50, defense: 77, spAtk: 57, spDef: 75, speed: 46 },
    traits: ["Perpetual", "Adapt", "SkyFire", "Thorns", "Dread", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Silent Sands"
  },
  "tinkore": {
    stats: { hp: 80, attack: 70, defense: 108, spAtk: 80, spDef: 106, speed: 65 },
    traits: ["Perpetual", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "VitalGaurd", "Awe", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "via evolved"
  },
  "twirlby": {
    stats: { hp: 82, attack: 97, defense: 92, spAtk: 65, spDef: 73, speed: 100 },
    traits: ["Blight", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Renew", "Coldward", "Sear", "Gale", "Toxin", "Frenzy", "Inferno", "StoneHeart", "Venomward", "Arcane", "Frost", "Psywall", "Adapt"], location: "Via Evolved"
  },
  "viparch": {
    stats: { hp: 75, attack: 114, defense: 65, spAtk: 77, spDef: 65, speed: 106 },
    traits: ["Infect", "Gale", "Sear", "Coldward", "Toughskin", "Renew", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Toxin", "Inferno", "Frenzy", "StoneHeart", "Venomward", "Frost", "Psywall", "Arcane", "Adapt"], location: "Via Evo"
  },
  "vipip": {
    stats: { hp: 39, attack: 59, defense: 33, spAtk: 40, spDef: 33, speed: 54 },
    traits: ["Infect", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Renew", "Adapt", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Coldward", "Sear", "Psywall"], location: "Murkwood"
  },
  "vipour": {
    stats: { hp: 54, attack: 82, defense: 46, spAtk: 55, spDef: 46, speed: 76 },
    traits: ["Infect", "Adapt", "Coldward", "Renew", "Toughskin", "Abyss", "VitalGaurd", "Awe", "Foresight", "Thorns", "Dread", "SkyFire", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Psywall"], location: "Via Evo"
  },
  "volcrest": {
    stats: { hp: 74, attack: 90, defense: 66, spAtk: 95, spDef: 70, speed: 120 },
    traits: ["Drain", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Gale", "Sear", "Coldward", "Renew", "Psywall"], location: "Via Evolved"
  },
  "wisphex": {
    stats: { hp: 74, attack: 86, defense: 78, spAtk: 95, spDef: 68, speed: 109 },
    traits: ["Adapt", "Coldward", "Renew", "Toughskin", "VitalGaurd", "Abyss", "Foresight", "Awe", "Thorns", "Dread", "SkyFire", "Sear", "Inferno", "Toxin", "Gale", "Frenzy", "StoneHeart", "Venomward", "Frost", "Arcane", "Psywall", "Evolve"], location: "Via Evo"
  },
  "wispshade": {
    stats: { hp: 52, attack: 62, defense: 56, spAtk: 67, spDef: 48, speed: 78 },
    traits: ["Evolve", "Adapt", "SkyFire", "Dread", "Thorns", "Foresight", "Awe", "VitalGaurd", "Abyss", "Toughskin", "Arcane", "Frost", "Venomward", "StoneHeart", "Frenzy", "Inferno", "Toxin", "Coldward", "Renew", "Gale", "Sear", "Psywall"], location: "Via Evo"
  },
  "wispuff": {
    stats: { hp: 37, attack: 44, defense: 40, spAtk: 48, spDef: 34, speed: 56 },
    traits: ["Adapt", "Coldward", "Renew", "Abyss", "Toughskin", "StoneHeart", "Gale", "Thorns", "Dread", "SkyFire", "Sear", "Foresight", "Frenzy", "Inferno", "Toxin", "Awe", "VitalGaurd", "Venomward", "Arcane", "Frost", "Psywall", "Evolve"], location: "Nether Land"
  },
};

export function getPetCombat(slug: string): PetCombatData | undefined {
  return petCombatBySlug[slug.toLowerCase()];
}
