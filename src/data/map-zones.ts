export type MapSpawnRole = "wild" | "mini-boss" | "boss";

export type MapSpawn = {
  name: string;
  level: string;
  role: MapSpawnRole;
};

export type MapZone = {
  id: string;
  name: string;
  zone: number | null;
  levelRange: string | null;
  note?: string;
  spawns: MapSpawn[];
};

export const MAP_ZONES_LAST_CHECKED = "2026-07-18";

export const mapZones: MapZone[] = [
  {
    "id": "verdant-valley",
    "name": "Verdant Valley",
    "zone": 1,
    "levelRange": "1–15",
        "spawns": [
      {
        "name": "Pebble",
        "level": "1–13",
        "role": "wild"
      },
      {
        "name": "Budling",
        "level": "6–15",
        "role": "wild"
      },
      {
        "name": "Pebroll",
        "level": "13–15",
        "role": "mini-boss"
      },
      {
        "name": "Pebgolem",
        "level": "15",
        "role": "boss"
      }
    ]
  },
  {
    "id": "petal-pond",
    "name": "Petal Pond",
    "zone": 2,
    "levelRange": "15–30",
        "spawns": [
      {
        "name": "Mopebun",
        "level": "15–29",
        "role": "wild"
      },
      {
        "name": "Clampip",
        "level": "22–30",
        "role": "wild"
      },
      {
        "name": "Clamwhirl",
        "level": "27–30",
        "role": "mini-boss"
      },
      {
        "name": "Clamspire",
        "level": "30",
        "role": "boss"
      }
    ]
  },
  {
    "id": "lava-crag",
    "name": "Lava Crag",
    "zone": 3,
    "levelRange": "30–45",
        "spawns": [
      {
        "name": "Sparkit",
        "level": "30–43",
        "role": "wild"
      },
      {
        "name": "Lavite",
        "level": "35–41",
        "role": "wild"
      },
      {
        "name": "Lavarock",
        "level": "43–45",
        "role": "wild"
      },
      {
        "name": "Empixy",
        "level": "45",
        "role": "boss"
      }
    ]
  },
  {
    "id": "amber-acres",
    "name": "Amber Acres",
    "zone": 4,
    "levelRange": "45–60",
        "spawns": [
      {
        "name": "Datubud",
        "level": "45–60",
        "role": "wild"
      },
      {
        "name": "Mudbud",
        "level": "50–60",
        "role": "wild"
      },
      {
        "name": "Mudthorn",
        "level": "57–60",
        "role": "mini-boss"
      },
      {
        "name": "Datunymph",
        "level": "60",
        "role": "boss"
      }
    ]
  },
  {
    "id": "autumn-hill",
    "name": "Autumn Hill",
    "zone": 5,
    "levelRange": "55",
    "note": "Roster not fully documented yet.",
    "spawns": []
  },
  {
    "id": "shiver-snows",
    "name": "Shiver Snows",
    "zone": 6,
    "levelRange": "60–75",
        "spawns": [
      {
        "name": "Stardrift",
        "level": "60–75",
        "role": "wild"
      },
      {
        "name": "Glaclide",
        "level": "65–75",
        "role": "wild"
      },
      {
        "name": "Glacone",
        "level": "72–75",
        "role": "mini-boss"
      },
      {
        "name": "Glacitadel",
        "level": "75",
        "role": "boss"
      }
    ]
  },
  {
    "id": "flying-territory",
    "name": "Flying Territory",
    "zone": 7,
    "levelRange": "75+",
        "spawns": [
      {
        "name": "Sundercrene",
        "level": "100",
        "role": "boss"
      }
    ]
  },
  {
    "id": "raven-ridge",
    "name": "Raven Ridge",
    "zone": 8,
    "levelRange": "75–90",
        "spawns": [
      {
        "name": "Chirppy",
        "level": "75–85",
        "role": "wild"
      },
      {
        "name": "Chirplume",
        "level": "75–85",
        "role": "wild"
      },
      {
        "name": "Chirplume",
        "level": "87–90",
        "role": "mini-boss"
      },
      {
        "name": "Bluebird",
        "level": "75–90",
        "role": "wild"
      },
      {
        "name": "Volcrest",
        "level": "90",
        "role": "boss"
      }
    ]
  },
  {
    "id": "silent-sands",
    "name": "Silent Sands",
    "zone": 9,
    "levelRange": "90–105",
    "note": "Tinkore appears as both mini-boss and boss in community data.",
    "spawns": [
      {
        "name": "Tinkog",
        "level": "91–95",
        "role": "wild"
      },
      {
        "name": "Humding",
        "level": "97–100",
        "role": "wild"
      },
      {
        "name": "Tinkore",
        "level": "100–105",
        "role": "mini-boss"
      },
      {
        "name": "Tinkore",
        "level": "105",
        "role": "boss"
      }
    ]
  },
  {
    "id": "crystal-cascade",
    "name": "Crystal Cascade",
    "zone": 10,
    "levelRange": "105–125",
        "spawns": [
      {
        "name": "Gulpfish",
        "level": "105–110",
        "role": "wild"
      },
      {
        "name": "Frostlet",
        "level": "111–113",
        "role": "wild"
      },
      {
        "name": "Mirefish",
        "level": "120",
        "role": "mini-boss"
      },
      {
        "name": "Frostseer",
        "level": "125",
        "role": "boss"
      }
    ]
  },
  {
    "id": "dusk-town",
    "name": "Dusk Town",
    "zone": 11,
    "levelRange": "115–120",
        "spawns": [
      {
        "name": "Pummpaw",
        "level": "115–120",
        "role": "wild"
      }
    ]
  },
  {
    "id": "canyon-oasis",
    "name": "Canyon Oasis",
    "zone": 12,
    "levelRange": "120–135",
        "spawns": [
      {
        "name": "Gempillar",
        "level": "120–125",
        "role": "wild"
      },
      {
        "name": "Chitmite",
        "level": "127–128",
        "role": "wild"
      },
      {
        "name": "Chitgladi",
        "level": "130–135",
        "role": "mini-boss"
      },
      {
        "name": "Chitaladin",
        "level": "135",
        "role": "boss"
      }
    ]
  },
  {
    "id": "murkwood",
    "name": "Murkwood",
    "zone": 13,
    "levelRange": "135–150",
    "note": "Datunymph also appears here as a mini-boss.",
    "spawns": [
      {
        "name": "Vipip",
        "level": "135–140",
        "role": "wild"
      },
      {
        "name": "Tarro",
        "level": "142–150",
        "role": "wild"
      },
      {
        "name": "Datunymph",
        "level": "150",
        "role": "mini-boss"
      },
      {
        "name": "Viparch",
        "level": "150",
        "role": "boss"
      }
    ]
  },
  {
    "id": "nether-land",
    "name": "Nether Land",
    "zone": 14,
    "levelRange": "150–165",
    "note": "Starmuse acts as both mini-boss and boss in community data.",
    "spawns": [
      {
        "name": "Starloop",
        "level": "150–154",
        "role": "wild"
      },
      {
        "name": "Wispuff",
        "level": "156–160",
        "role": "wild"
      },
      {
        "name": "Starmuse",
        "level": "165",
        "role": "boss"
      }
    ]
  },
  {
    "id": "rocky-ridge",
    "name": "Rocky Ridge",
    "zone": 15,
    "levelRange": "165–180",
        "spawns": [
      {
        "name": "Fluffet",
        "level": "165–178",
        "role": "wild"
      },
      {
        "name": "Spikub",
        "level": "172–177",
        "role": "wild"
      },
      {
        "name": "Fluffastar",
        "level": "180",
        "role": "mini-boss"
      },
      {
        "name": "Spikumane",
        "level": "180",
        "role": "boss"
      }
    ]
  },
  {
    "id": "thunder-cliffs",
    "name": "Thunder Cliffs",
    "zone": 16,
    "levelRange": "175+",
        "spawns": [
      {
        "name": "Arcapex",
        "level": "200",
        "role": "boss"
      }
    ]
  },
  {
    "id": "maincity",
    "name": "Maincity",
    "zone": null,
    "levelRange": null,
    "note": "Main hub — no wild Evomon spawn here.",
    "spawns": []
  },
  {
    "id": "summon-ruins-i",
    "name": "Summon Ruins I",
    "zone": null,
    "levelRange": "45",
    "note": "Boss Summon altar — bring a Boss Summon to fight the zone boss.",
    "spawns": []
  },
  {
    "id": "summon-ruins-ii",
    "name": "Summon Ruins II",
    "zone": null,
    "levelRange": "90",
    "note": "Boss Summon altar.",
    "spawns": []
  },
  {
    "id": "summon-ruins-iii",
    "name": "Summon Ruins III",
    "zone": null,
    "levelRange": "180",
    "note": "Boss Summon altar.",
    "spawns": []
  }
];
