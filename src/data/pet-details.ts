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
  evolutionNote?: string;
  shinyHuntNote?: string;
};

export const petDetailExtras: Record<string, PetDetailExtra> = {
  bubble: {
    metaTitle: "Bubble Evomon — Best Water Starter Route",
    metaDescription:
      "Bubble (#001) is the best Water starter for Verdant Valley and early Lava Crag. See evolution to Bubblade, when to bench for Lavite, and type matchups.",
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Beginner water carry",
    blurb:
      "Best starter for most new accounts: Water coverage clears Verdant Valley and early Lava Crag with the fewest dead ends. Evolve through Bubboxer into Bubblade for temporary water damage, then expect to reinvest stones into Lavite or Bluebird once those routes open — Bubble wins the lab pick, not the endgame stone race.",
    evolutionNote:
      "Bubble → Bubboxer → Bubblade is the water starter line. Spend early stones if you need water coverage now, but do not empty your Evolution Stone stock here if Lava Crag Lavite is already unlocked.",
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
    metaTitle: "Blazpup Evomon — Fire Starter vs Sparkit",
    metaDescription:
      "Blazpup (#004) hits hard as a Fire starter but clears early islands slower than Bubble. Compare vs Sparkit on Lava Crag before locking fire stones.",
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Fire starter",
    blurb:
      "Pick Blazpup only if you want a Fire-first starter and accept a slower Verdant Valley. Many accounts instead take Bubble, then catch Sparkit (or Lavite) on the fire route — Sparkit often replaces Blazpup as the practical early Fire slot, and Lavite usually wins the long-term stone priority.",
    evolutionNote:
      "Blazpup → Blazgrowl → Blazmane. Evolve the line if you committed at the lab; otherwise save stones for Sparkit or Lavite once those catches are online.",
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
    metaTitle: "Leafbun Evomon — Tanky Grass Starter Heal",
    metaDescription:
      "Leafbun (#007) is the tanky Grass starter with sustain skills. Slower than Bubble early, stronger for players who want healing and mid-route bulk.",
    location: "Starter choice (tutorial)",
    weather: "Any",
    role: "Grass starter / sustain",
    blurb:
      "Choose Leafbun when you prefer a tankier opener with healing skills over Bubble’s fastest clear speed. Expect a slower Verdant Valley and Petal Pond start; the trade-off is sustain in longer fights. If your goal is the smoothest first islands, Bubble still wins — Leafbun is the comfort pick, not the speed pick.",
    evolutionNote:
      "Leafbun → Leafroge → Leafblade. Commit stones if you are building around Grass sustain; otherwise keep stones for stronger route tanks like Pebble once Verdant Valley opens.",
  },
  pebble: {
    metaTitle: "Pebble Evomon — Verdant Valley Catch & Evolution",
    metaDescription:
      "Pebble (#018) — Strong early-route rock tank from Verdant Valley. Evolution to Pebgolem, type matchups, and tier context on evomon.cc.",
    location: "Verdant Valley",
    weather: "Any",
    role: "Early rock tank",
    blurb: "One of the best early-route catches. Reliable wall through mid game — replace before deep endgame.",
    evolutionNote:
      "Pebble is the early Rock line players search for after Verdant Valley. Use the evolution line above to compare Pebble with Pebgolem before spending stones.",
  },
  sparkit: {
    metaTitle: "Sparkit Evomon — Location, Evolution & Fire Role",
    metaDescription:
      "Sparkit (#021) — early Fire catch and Blazpup alternative. Location notes, evolution line, matchups, and shiny hunt context on evomon.cc.",
    location: "Early routes / Lava Crag area",
    weather: "Any",
    role: "Early fire DPS",
    blurb: "Common reason to skip the fire starter. Strong through mid game; stones often go to Lavite instead.",
    evolutionNote:
      "Sparkit evolution searches usually mean whether to invest stones here or save for Lavite. Keep Sparkit as a fast early Fire option unless your Lava Crag route already has a stronger Fire/Rock carry.",
    shinyHuntNote:
      "Sparkit is a practical shiny target because encounters are fast on early routes. Shiny speed bumps can matter, but prioritize a useful Talent roll before long pity sessions.",
  },
  bluebird: {
    typesDisplay: "Flying / Electric",
    metaTitle: "Bluebird Evomon — Evolution, Location & Shiny Route",
    metaDescription:
      "Bluebird (#026) — Raven Ridge Flying/Electric catch that evolves to Volcrest. Location, evolution, shiny route, matchups, and team tips.",
    location: "Raven Ridge quest line",
    weather: "Any",
    role: "Bleed DPS (Flying)",
    blurb:
      "Bleed stacks ramp damage on high-HP targets. A top pick once evolved into Volcrest for boss farming.",
    evolutionNote:
      "Bluebird evolves into Volcrest in the community dex line. If you are searching Bluebird evolution, compare the Raven Ridge wild route with boss-route farming before investing stones.",
    shinyHuntNote:
      "For shiny Bluebird, farm the Raven Ridge wild route when possible instead of relying only on boss cycles. Wild encounters are faster; boss and mount variants may still need shiny egg planning.",
  },
  lavite: {
    typesDisplay: "Fire / Rock",
    metaTitle: "Lavite Evomon — Evolution, Location & Shiny Route",
    metaDescription:
      "Lavite (#052) — Lava Crag Fire/Rock catch that evolves to Lavarock. Location, evolution, shiny route, Counter build links, and matchups.",
    location: "Lava Crag (3rd island)",
    weather: "Any",
    role: "Fire carry + wall",
    blurb: "Easy early grab that stays relevant late. One of the most invested-in fire lines in July 2026 tier lists.",
    evolutionNote:
      "Lavite evolves into Lavarock and is one of the clearest Evolution Stone priorities for mid-game teams. Check nature and Talent before committing your best copy.",
    shinyHuntNote:
      "Shiny Lavite is worth hunting because Lavarock stays useful in boss routes. Lava Crag is a beginner-friendly route once you can clear Fire/Rock spawns quickly with Water coverage.",
  },
  lavarock: {
    typesDisplay: "Fire / Rock",
    metaTitle: "Lavarock Evomon — Counter Build & Boss Tank",
    metaDescription:
      "Lavarock (#053) is Lavite’s Fire/Rock final form — a late-game wall with Counter value. Evolution priority, boss use, and when the stone is worth it.",
    location: "Evolve from Lavite (Lava Crag catch)",
    weather: "Any",
    role: "Late-game fire tank / Counter wall",
    blurb:
      "Lavarock is the reason Lavite stays on investment lists: Fire/Rock coverage plus bulk that holds up on boss routes after Lava Crag. Treat it as its own carry decision — evolve your best Lavite (Talent and nature first) when you need a durable fire wall, not merely because the shiny hunt finished.",
    evolutionNote:
      "Evolve Lavite → Lavarock when this line is your main mid/late fire slot. Prefer a keeper with strong Talent (community guides often chase SSS) and a nature that keeps HP/defenses intact before spending the stone.",
    shinyHuntNote:
      "Most players shiny-hunt Lavite on Lava Crag, then evolve the keeper into Lavarock. A strong normal SSS Lavite is still worth evolving if waiting for shiny blocks progression — shiny helps, but levels and build quality matter more on bosses.",
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
