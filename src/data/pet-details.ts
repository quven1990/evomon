/** Curated copy for indexable dex detail pages — single source for meta + on-page blurbs. */
export type PetDetailExtra = {
  /** Display typing in copy (e.g. "Fire / Rock"). Defaults to dex element. */
  typesDisplay?: string;
  /** SERP title (%s segment before ` | Evomon Wiki`). Keep ≤ ~52 chars. */
  metaTitle: string;
  /** SERP description. Unique per pet; 140–160 chars ideal. */
  metaDescription: string;
  location?: string;
  weather?: string;
  role?: string;
  blurb?: string;
};

export const petDetailExtras: Record<string, PetDetailExtra> = {
  bubble: {
    metaTitle: "Bubble Evomon — Best Starter, Evolution & Location",
    metaDescription:
      "Bubble (#001) — Smoothest water starter for Verdant Valley and Lava Crag. Evolution line, type matchups, catch info, and starter guide on evomon.cc.",
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Beginner water carry",
    blurb:
      "Best starter for most new players — smooth Verdant Valley and early Lava Crag matchups. Plan to bench the line once Lavite or Bluebird come online.",
  },
  bubboxer: {
    metaTitle: "Bubboxer Evomon — Bubble Evolution & Water Matchups",
    metaDescription:
      "Bubboxer (#002) — Stage two of the water starter line from Bubble. Evolution path, Water matchups, and team builder tips on evomon.cc.",
    location: "Evolve from Bubble",
    weather: "Any",
    role: "Mid water striker",
    blurb: "Second stage of the water starter line. Strong through early islands before route catches outscale it.",
  },
  bubblade: {
    metaTitle: "Bubblade Evomon — Bubble Final Evolution Guide",
    metaDescription:
      "Bubblade (#003) — final Water evolution from Bubble. Evolution line, starter context, type matchups, and when to replace the line on evomon.cc.",
    location: "Evolve from Bubboxer",
    weather: "Any",
    role: "Final water starter evolution",
    blurb:
      "Final Bubble-line evolution. Good early water coverage, but many teams pivot to stronger route catches once Lavite or Bluebird comes online.",
  },
  blazpup: {
    metaTitle: "Blazpup Evomon — Fire Starter Guide & Evolution",
    metaDescription:
      "Blazpup (#004) — Fire starter with high damage but a slower early route. Evolution path, matchups, and how it compares to Sparkit on evomon.cc.",
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Fire starter",
    blurb: "High fire damage but a slower early route than Bubble. Many players skip in favor of Sparkit on Lava Crag.",
  },
  blazgrowl: {
    metaTitle: "Blazgrowl Evomon — Fire Evolution & Team Role",
    metaDescription:
      "Blazgrowl (#005) — Mid-stage fire evolution from Blazpup. Type matchups, when to spend evolution stones, and team links on evomon.cc.",
    location: "Evolve from Blazpup",
    weather: "Any",
    role: "Mid fire striker",
    blurb: "Blazpup's mid evolution. Commit only if you are building a dedicated fire squad.",
  },
  leafbun: {
    metaTitle: "Leafbun Evomon — Grass Starter, Evolution & Location",
    metaDescription:
      "Leafbun (#007) — Tanky grass starter with sustain skills. Evolution line, element matchups, and beginner route notes on evomon.cc.",
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Grass starter / sustain",
    blurb: "Tankier grass opener with healing skills. Slower early progression than Bubble but solid mid-game coverage.",
  },
  pebble: {
    metaTitle: "Pebble Evomon — Verdant Valley Catch & Evolution",
    metaDescription:
      "Pebble (#018) — Strong early-route rock tank from Verdant Valley. Evolution to Pebgolem, type matchups, and tier context on evomon.cc.",
    location: "Verdant Valley",
    weather: "Any",
    role: "Early rock tank",
    blurb: "One of the best early-route catches. Reliable wall through mid game — replace before deep endgame.",
  },
  sparkit: {
    metaTitle: "Sparkit Evomon — Early Fire Catch & Evolution",
    metaDescription:
      "Sparkit (#021) — Popular fire pick on early routes and Lava Crag instead of Blazpup. Evolution line, matchups, and tier notes on evomon.cc.",
    location: "Early routes / Lava Crag area",
    weather: "Any",
    role: "Early fire DPS",
    blurb: "Common reason to skip the fire starter. Strong through mid game; stones often go to Lavite instead.",
  },
  bluebird: {
    typesDisplay: "Flying / Electric",
    metaTitle: "Bluebird Evomon — Raven Ridge Catch & Evolution",
    metaDescription:
      "Bluebird (#026) — Flying/Electric catch from Raven Ridge; evolves to Volcrest. Bleed DPS role, matchups, and team tips on evomon.cc.",
    location: "Raven Ridge quest line",
    weather: "Any",
    role: "Bleed DPS (Flying)",
    blurb: "Bleed stacks ramp damage on high-HP targets. A top pick once evolved into Volcrest for boss farming.",
  },
  lavite: {
    typesDisplay: "Fire / Rock",
    metaTitle: "Lavite Evomon — Lava Crag Catch & Evolution",
    metaDescription:
      "Lavite (#052) — Top Lava Crag Fire/Rock catch that stays relevant late. Evolves to Lavarock; matchups, tier list, and team builder on evomon.cc.",
    location: "Lava Crag (3rd island)",
    weather: "Any",
    role: "Fire carry + wall",
    blurb: "Easy early grab that stays relevant late. One of the most invested-in fire lines in July 2026 tier lists.",
  },
  lavarock: {
    typesDisplay: "Fire / Rock",
    metaTitle: "Lavarock Evomon — Lavite Evolution & Matchups",
    metaDescription:
      "Lavarock (#053) — Lavite's evolution and a late-game fire wall. Fire/Rock matchups, stone priority, and endgame tier notes on evomon.cc.",
    location: "Evolve from Lavite",
    weather: "Any",
    role: "Late-game fire tank",
    blurb: "Lavite's evolution. Fire coverage plus bulk for boss routes and Lava Crag progression.",
  },
  arcub: {
    metaTitle: "Arcub Evomon — Electric Line & Funder Cliff Route",
    metaDescription:
      "Arcub (#070) — Base of the Arcapex electric line near Funder Cliff. Evolution path, matchups, and late-game AOE planning on evomon.cc.",
    location: "Funder Cliff boss route",
    weather: "Any",
    role: "Electric AOE",
    blurb: "Base form of the Arcapex line. Harder to obtain early but pays off as a wave-clearing electric attacker.",
  },
  arcapex: {
    metaTitle: "Arcapex Evomon — Electric Evolution & AOE Build",
    metaDescription:
      "Arcapex (#071) — High-impact electric evolution with strong AOE clears. Type matchups, team slots, and tier comparisons on evomon.cc.",
    location: "Evolve from Arcub",
    weather: "Any",
    role: "AOE burst",
    blurb: "Lightning AOE clears waves fast. A staple late-game damage dealer when you can invest evolution stones.",
  },
  wispuff: {
    typesDisplay: "Poison / Psychic",
    metaTitle: "Wispuff Evomon — Poison Line Start & Location",
    metaDescription:
      "Wispuff (#082) — Starts the poison/psychic line toward Wisphex. Catch routes, evolution steps, and status-team notes on evomon.cc.",
    location: "Mid-to-late poison routes",
    weather: "Any",
    role: "Poison line base",
    blurb: "Opens the Wispuff → Wispshade → Wisphex poison line — top status-pressure core in community lists.",
  },
  wisphex: {
    typesDisplay: "Poison / Psychic",
    metaTitle: "Wisphex Evomon — Poison Evolution & Tier Role",
    metaDescription:
      "Wisphex (#084) — End-stage poison/psychic pick in most tier lists. Evolution from Wispshade, matchups, and stone guide on evomon.cc.",
    location: "Evolve from Wispshade",
    weather: "Any",
    role: "Poison / Psychic core",
    blurb: "Final form of the poison line in most rankings. Worth evolution stones if you want boss-melting poison pressure.",
  },
  astraknight: {
    metaTitle: "Astraknight Evomon — Fighting Type & Catch Route",
    metaDescription:
      "Astraknight (#088) — Late-game fighting closer for boss and dungeon teams. Type matchups, evolution neighbors, and team builder on evomon.cc.",
    location: "Late-game fighting routes",
    weather: "Any",
    role: "Fighting carry",
    blurb: "High-impact fighting pick for teams that need a physical closer in harder content.",
  },
};
