export type MapSpawnRole = "wild" | "mini-boss" | "boss";

export type MapSpawn = {
  name: string;
  level: string;
  role: MapSpawnRole;
  /** Override dex slug when name ≠ slug (optional). */
  dexSlug?: string;
};

export type MapZoneRelated = {
  href: string;
  label: string;
};

export type MapZone = {
  id: string;
  name: string;
  zone: number | null;
  levelRange: string | null;
  note?: string;
  /** Short “what to catch / why you’re here” tip for SEO + UX. */
  huntTip?: string;
  related?: MapZoneRelated[];
  spawns: MapSpawn[];
};

export const MAP_ZONES_LAST_CHECKED = "2026-07-20";

/** Map display name → dex slug when simple lowercasing is wrong. */
const SPAWN_SLUG_ALIASES: Record<string, string> = {
  pebroll: "pebroll",
  pebgolem: "pebgolem",
};

export function spawnToDexSlug(spawn: MapSpawn): string | null {
  if (spawn.dexSlug) return spawn.dexSlug;
  const raw = spawn.name.split(/[/(]/)[0]?.trim() ?? "";
  if (!raw) return null;
  if (/\s/.test(raw)) return null;
  const key = raw.toLowerCase().replace(/[^a-z0-9-]/g, "");
  return SPAWN_SLUG_ALIASES[key] ?? (key || null);
}

export const mapZones: MapZone[] = [
  {
    id: "verdant-valley",
    name: "Verdant Valley",
    zone: 1,
    levelRange: "1–15",
    huntTip:
      "Early rock tank line — grab Pebble for bulk, then clear Pebroll / Pebgolem when ready. Pair with beginner route and early-carries picks.",
    related: [
      { href: "/blog/pebble-evomon-guide", label: "Pebble guide" },
      { href: "/tier-list/early-carries", label: "Early carries" },
      { href: "/guides/beginner", label: "Beginner route" },
    ],
    spawns: [
      { name: "Pebble", level: "1–13", role: "wild" },
      { name: "Budling", level: "6–15", role: "wild" },
      { name: "Pebroll", level: "13–15", role: "mini-boss" },
      { name: "Pebgolem", level: "15", role: "boss" },
    ],
  },
  {
    id: "petal-pond",
    name: "Petal Pond",
    zone: 2,
    levelRange: "15–30",
    huntTip: "Water island — farm Mopebun / Clampip for coverage before Lava Crag Fire lines.",
    related: [
      { href: "/type-chart", label: "Type chart" },
      { href: "/guides/beginner", label: "Beginner guide" },
    ],
    spawns: [
      { name: "Mopebun", level: "15–29", role: "wild" },
      { name: "Clampip", level: "22–30", role: "wild" },
      { name: "Clamwhirl", level: "27–30", role: "mini-boss" },
      { name: "Clamspire", level: "30", role: "boss" },
    ],
  },
  {
    id: "lava-crag",
    name: "Lava Crag",
    zone: 3,
    levelRange: "30–45",
    huntTip:
      "Best early shiny Fire farm (Sparkit) and stone priority (Lavite → Lavarock). Bring Water coverage.",
    related: [
      { href: "/blog/shiny-sparkit-evomon-guide", label: "Shiny Sparkit" },
      { href: "/dex/empixy", label: "Empixy" },
      { href: "/blog/shiny-lavite-evomon-guide", label: "Shiny Lavite" },
      { href: "/blog/best-nature-lavite-evomon", label: "Lavite nature" },
      { href: "/guides/mutations", label: "Shiny hub" },
    ],
    spawns: [
      { name: "Sparkit", level: "30–43", role: "wild" },
      { name: "Lavite", level: "35–41", role: "wild" },
      { name: "Lavarock", level: "43–45", role: "wild" },
      { name: "Empixy", level: "45", role: "boss" },
    ],
  },
  {
    id: "amber-acres",
    name: "Amber Acres",
    zone: 4,
    levelRange: "45–60",
    huntTip: "Mid-game grass/ground island — Datubud line and Mudbud toward Datunymph.",
    related: [
      { href: "/tier-list", label: "Tier list" },
      { href: "/team-builder", label: "Team builder" },
    ],
    spawns: [
      { name: "Datubud", level: "45–60", role: "wild" },
      { name: "Mudbud", level: "50–60", role: "wild" },
      { name: "Mudthorn", level: "57–60", role: "mini-boss" },
      { name: "Datunymph", level: "60", role: "boss" },
    ],
  },
  {
    id: "autumn-hill",
    name: "Autumn Hill",
    zone: 5,
    levelRange: "55",
    note: "Roster not fully documented yet.",
    huntTip: "Sparse community spawn data — confirm live spawns in-game before long hunts.",
    spawns: [],
  },
  {
    id: "shiver-snows",
    name: "Shiver Snows",
    zone: 6,
    levelRange: "60–75",
    huntTip: "Ice progression — Stardrift into Glaclide / Glacitadel. Watch type chart for Ice matchups.",
    related: [
      { href: "/type-chart", label: "Type chart" },
      { href: "/guides/mutations", label: "Shiny pity" },
    ],
    spawns: [
      { name: "Stardrift", level: "60–75", role: "wild" },
      { name: "Glaclide", level: "65–75", role: "wild" },
      { name: "Glacone", level: "72–75", role: "mini-boss" },
      { name: "Glacitadel", level: "75", role: "boss" },
    ],
  },
  {
    id: "flying-territory",
    name: "Flying Territory",
    zone: 7,
    levelRange: "75+",
    huntTip: "Boss island focus — Sundercrene. Prep Flying checks on the type chart.",
    related: [
      { href: "/type-chart", label: "Type chart" },
      { href: "/tier-list", label: "Tier list" },
    ],
    spawns: [{ name: "Sundercrene", level: "100", role: "boss" }],
  },
  {
    id: "raven-ridge",
    name: "Raven Ridge",
    zone: 8,
    levelRange: "75–90",
    huntTip:
      "Bluebird / Volcrest shiny-egg territory — bosses often need egg path, not field pity.",
    related: [
      { href: "/dex/bluebird", label: "Bluebird dex" },
      { href: "/blog/evomon-shiny-bluebird-guide", label: "Shiny Bluebird" },
      { href: "/guides/mutations/shiny-egg", label: "Shiny egg guide" },
    ],
    spawns: [
      { name: "Chirppy", level: "75–85", role: "wild" },
      { name: "Chirplume", level: "75–85", role: "wild" },
      { name: "Chirplume", level: "87–90", role: "mini-boss" },
      { name: "Bluebird", level: "75–90", role: "wild" },
      { name: "Volcrest", level: "90", role: "boss" },
    ],
  },
  {
    id: "silent-sands",
    name: "Silent Sands",
    zone: 9,
    levelRange: "90–105",
    note: "Tinkore appears as both mini-boss and boss in community data.",
    huntTip: "Ascension island — equipment dungeons unlock around trainer Lv40+; steel line Tinkog / Tinkore.",
    related: [
      { href: "/guides/level-30", label: "Equipment (Lv40+)" },
      { href: "/guides/farming", label: "Daily farming" },
    ],
    spawns: [
      { name: "Tinkog", level: "91–95", role: "wild" },
      { name: "Humding", level: "97–100", role: "wild" },
      { name: "Tinkore", level: "100–105", role: "mini-boss" },
      { name: "Tinkore", level: "105", role: "boss" },
    ],
  },
  {
    id: "crystal-cascade",
    name: "Crystal Cascade",
    zone: 10,
    levelRange: "105–125",
    huntTip: "Late water/ice mix — Gulpfish and Frostlet toward Frostseer.",
    related: [
      { href: "/dex/frostlet", label: "Frostlet" },
      { href: "/dex/frostseer", label: "Frostseer" },
      { href: "/type-chart", label: "Type chart" },
      { href: "/team-builder", label: "Team builder" },
    ],
    spawns: [
      { name: "Gulpfish", level: "105–110", role: "wild" },
      { name: "Frostlet", level: "111–113", role: "wild" },
      { name: "Mirefish", level: "120", role: "mini-boss" },
      { name: "Frostseer", level: "125", role: "boss" },
    ],
  },
  {
    id: "dusk-town",
    name: "Dusk Town",
    zone: 11,
    levelRange: "115–120",
    huntTip: "Short documented roster — Pummpaw wilds. Confirm extras in-game.",
    spawns: [{ name: "Pummpaw", level: "115–120", role: "wild" }],
  },
  {
    id: "canyon-oasis",
    name: "Canyon Oasis",
    zone: 12,
    levelRange: "120–135",
    huntTip: "Bug line island — Chitmite into Chitaladin boss.",
    related: [
      { href: "/traits", label: "Traits (Leech line)" },
      { href: "/tier-list", label: "Tier list" },
    ],
    spawns: [
      { name: "Gempillar", level: "120–125", role: "wild" },
      { name: "Chitmite", level: "127–128", role: "wild" },
      { name: "Chitgladi", level: "130–135", role: "mini-boss" },
      { name: "Chitaladin", level: "135", role: "boss" },
    ],
  },
  {
    id: "murkwood",
    name: "Murkwood",
    zone: 13,
    levelRange: "135–150",
    note: "Datunymph also appears here as a mini-boss.",
    huntTip: "Poison/dragon late island — Vipip / Tarro toward Viparch.",
    related: [
      { href: "/type-chart", label: "Type chart" },
      { href: "/guides/mutations", label: "Shiny hub" },
    ],
    spawns: [
      { name: "Vipip", level: "135–140", role: "wild" },
      { name: "Tarro", level: "142–150", role: "wild" },
      { name: "Datunymph", level: "150", role: "mini-boss" },
      { name: "Viparch", level: "150", role: "boss" },
    ],
  },
  {
    id: "nether-land",
    name: "Nether Land",
    zone: 14,
    levelRange: "150–165",
    note: "Starmuse acts as both mini-boss and boss in community data.",
    huntTip: "Psychic/ghost late game — Starloop / Wispuff toward Starmuse.",
    related: [
      { href: "/dex/wispuff", label: "Wispuff dex" },
      { href: "/tier-list", label: "Tier list" },
    ],
    spawns: [
      { name: "Starloop", level: "150–154", role: "wild" },
      { name: "Wispuff", level: "156–160", role: "wild" },
      { name: "Starmuse", level: "165", role: "boss" },
    ],
  },
  {
    id: "rocky-ridge",
    name: "Rocky Ridge",
    zone: 15,
    levelRange: "165–180",
    huntTip: "Endgame rock/ground — Fluffet / Spikub toward Spikumane.",
    related: [
      { href: "/team-builder", label: "Team builder" },
      { href: "/tier-list", label: "Tier list" },
    ],
    spawns: [
      { name: "Fluffet", level: "165–178", role: "wild" },
      { name: "Spikub", level: "172–177", role: "wild" },
      { name: "Fluffastar", level: "180", role: "mini-boss" },
      { name: "Spikumane", level: "180", role: "boss" },
    ],
  },
  {
    id: "thunder-cliffs",
    name: "Thunder Cliffs",
    zone: 16,
    levelRange: "175+",
    huntTip: "Electric end boss — Arcapex. Prep Electric checks and shiny pity if hunting.",
    related: [
      { href: "/dex/arcapex", label: "Arcapex dex" },
      { href: "/guides/mutations", label: "Shiny hub" },
    ],
    spawns: [{ name: "Arcapex", level: "200", role: "boss" }],
  },
  {
    id: "maincity",
    name: "Maincity",
    zone: null,
    levelRange: null,
    note: "Main hub — no wild Evomon spawn here.",
    huntTip: "Hub only — redeem codes, prep party, then pick the next island above.",
    related: [
      { href: "/codes", label: "Codes" },
      { href: "/team-builder", label: "Team builder" },
    ],
    spawns: [],
  },
  {
    id: "summon-ruins-i",
    name: "Summon Ruins I",
    zone: null,
    levelRange: "45",
    note: "Boss Summon altar — bring a Boss Summon to fight the zone boss.",
    huntTip: "Boss Summon altar (Lv45). Not a wild spawn island.",
    spawns: [],
  },
  {
    id: "summon-ruins-ii",
    name: "Summon Ruins II",
    zone: null,
    levelRange: "90",
    note: "Boss Summon altar.",
    huntTip: "Boss Summon altar (Lv90).",
    spawns: [],
  },
  {
    id: "summon-ruins-iii",
    name: "Summon Ruins III",
    zone: null,
    levelRange: "180",
    note: "Boss Summon altar.",
    huntTip: "Boss Summon altar (Lv180).",
    spawns: [],
  },
];
