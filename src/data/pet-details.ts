/** Optional enrichment for dex detail pages — location, role, and guide blurbs. */
export type PetDetailExtra = {
  /** Display typing in meta + copy (e.g. "Fire / Rock"). Defaults to dex element. */
  typesDisplay?: string;
  location?: string;
  weather?: string;
  role?: string;
  blurb?: string;
};

export const petDetailExtras: Record<string, PetDetailExtra> = {
  bubble: {
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Beginner water carry",
    blurb:
      "Best starter for most new players — smooth Verdant Valley and early Lava Crag matchups. Plan to bench the line once Lavite or Bluebird come online.",
  },
  bubboxer: {
    location: "Evolve from Bubble",
    weather: "Any",
    role: "Mid water striker",
    blurb: "Second stage of the water starter line. Strong through early islands before route catches outscale it.",
  },
  blazpup: {
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Fire starter",
    blurb: "High fire damage but a slower early route than Bubble. Many players skip in favor of Sparkit on Lava Crag.",
  },
  blazgrowl: {
    location: "Evolve from Blazpup",
    weather: "Any",
    role: "Mid fire striker",
    blurb: "Blazpup's mid evolution. Commit only if you are building a dedicated fire squad.",
  },
  leafbun: {
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Grass starter / sustain",
    blurb: "Tankier grass opener with healing skills. Slower early progression than Bubble but solid mid-game coverage.",
  },
  pebble: {
    location: "Verdant Valley",
    weather: "Any",
    role: "Early rock tank",
    blurb: "One of the best early-route catches. Reliable wall through mid game — replace before deep endgame.",
  },
  sparkit: {
    location: "Early routes / Lava Crag area",
    weather: "Any",
    role: "Early fire DPS",
    blurb: "Common reason to skip the fire starter. Strong through mid game; stones often go to Lavite instead.",
  },
  bluebird: {
    typesDisplay: "Flying / Electric",
    location: "Raven Ridge quest line",
    weather: "Any",
    role: "Bleed DPS (Flying)",
    blurb: "Bleed stacks ramp damage on high-HP targets. A top pick once evolved into Volcrest for boss farming.",
  },
  lavite: {
    typesDisplay: "Fire / Rock",
    location: "Lava Crag (3rd island)",
    weather: "Any",
    role: "Fire carry + wall",
    blurb: "Easy early grab that stays relevant late. One of the most invested-in fire lines in July 2026 tier lists.",
  },
  lavarock: {
    typesDisplay: "Fire / Rock",
    location: "Evolve from Lavite",
    weather: "Any",
    role: "Late-game fire tank",
    blurb: "Lavite's evolution. Fire coverage plus bulk for boss routes and Lava Crag progression.",
  },
  arcub: {
    location: "Funder Cliff boss route",
    weather: "Any",
    role: "Electric AOE",
    blurb: "Base form of the Arcapex line. Harder to obtain early but pays off as a wave-clearing electric attacker.",
  },
  arcapex: {
    location: "Evolve from Arcub",
    weather: "Any",
    role: "AOE burst",
    blurb: "Lightning AOE clears waves fast. A staple late-game damage dealer when you can invest evolution stones.",
  },
  wispuff: {
    typesDisplay: "Poison / Psychic",
    location: "Mid-to-late poison routes",
    weather: "Any",
    role: "Poison line base",
    blurb: "Opens the Wispuff → Wispshade → Wisphex poison line — top status-pressure core in community lists.",
  },
  wisphex: {
    typesDisplay: "Poison / Psychic",
    location: "Evolve from Wispshade",
    weather: "Any",
    role: "Poison / Psychic core",
    blurb: "Final form of the poison line in most rankings. Worth evolution stones if you want boss-melting poison pressure.",
  },
  astraknight: {
    location: "Late-game fighting routes",
    weather: "Any",
    role: "Fighting carry",
    blurb: "High-impact fighting pick for teams that need a physical closer in harder content.",
  },
};
