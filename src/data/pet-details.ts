import { petDetailsMapCombatBatch } from "./pet-details-map-combat-batch";

/** Curated copy for indexable dex detail pages — single source for meta + on-page blurbs. */
export type PetFaq = { q: string; a: string };

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
  /**
   * Page-specific FAQ answers. When set, replaces the shared FAQ template
   * so indexable pets do not all ask “What element is X?”.
   */
  faqs?: PetFaq[];
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
  mopebun: {
    metaTitle: "Mopebun Evomon — Petal Pond Normal Catch",
    metaDescription:
      "Mopebun (#016) is a Petal Pond Normal wild (~Lv 15–29). Early filler catch before Clampip water coverage and Lava Crag — when to skip stone investment.",
    location: "Petal Pond wild (~Lv 15–29)",
    weather: "Any",
    role: "Early Normal filler / EXP route",
    blurb:
      "Mopebun is the first Petal Pond wild many accounts farm after Verdant Valley. It fills party slots and EXP while you unlock Clampip water coverage for Lava Crag — community tier lists still often park Mopebun lower once real route carries arrive. Catch it; do not empty Evolution Stones here.",
    evolutionNote:
      "Mopebun → Mopillow. Evolve only if the line is still clearing content for you; Petal Pond priority usually shifts to Clampip → Clamspire for Water into Fire islands.",
    faqs: [
      {
        q: "Where do you catch Mopebun in Evomon?",
        a: "Petal Pond wild spawns around Lv 15–29 on our map-zones chart. It is an early second-island catch, not a late locked pet.",
      },
      {
        q: "Is Mopebun worth Evolution Stones?",
        a: "Usually no for long-term investment. Use Mopebun to progress Petal Pond, then prioritize Clampip water coverage and later Lavite/Bluebird stones over a Normal filler line.",
      },
      {
        q: "Mopebun vs Clampip on Petal Pond — which first?",
        a: "Catch both if you can. Clampip matters more for Lava Crag Fire matchups; Mopebun is the easier early wild for EXP and temporary slots.",
      },
      {
        q: "What does Mopebun evolve into?",
        a: "Mopebun evolves into Mopillow. Confirm stone/level gates in-game before spending materials.",
      },
    ],
  },
  clampip: {
    metaTitle: "Clampip Evomon — Petal Pond Water Coverage",
    metaDescription:
      "Clampip (#031) is the Petal Pond Water wild (~Lv 22–30) that opens Clamspire. Grab it before Lava Crag Fire lines — stone priority vs Lavite.",
    location: "Petal Pond wild (~Lv 22–30)",
    weather: "Any",
    role: "Water coverage into Lava Crag",
    blurb:
      "Clampip is the Petal Pond Water pickup beginner routes want before Lava Crag: Fire lines punish teams that skipped water. Community notes often call the Clampip line a strong early water answer — and warn not to stone Clampip, Gobfish, and Bubble in the same week. Evolve toward Clamspire when water bulk/damage is still your bottleneck, then expect Lavite to take leftover stones.",
    evolutionNote:
      "Clampip → Clamwhirl → Clamspire. Push the line for Petal Pond → Lava Crag coverage; Clamspire is also listed as the Petal Pond boss (~Lv 30).",
    faqs: [
      {
        q: "Where is Clampip in Evomon?",
        a: "Petal Pond wild band around Lv 22–30. Farm it after Mopebun opens the island and before you lean into Lava Crag Fire spawns.",
      },
      {
        q: "Why do beginner guides tell me to catch Clampip?",
        a: "Lava Crag is Fire-heavy. Clampip water coverage shortens Sparkit/Lavite fights and keeps the third-island loop sane — more than Mopebun’s Normal filler role.",
      },
      {
        q: "Should Clampip get Evolution Stones before Lavite?",
        a: "Evolve Clampip far enough that Lava Crag is comfortable. Once Lavite is online, most July 2026 lists give leftover stones to Lavite → Lavarock, not a second full water stone dump.",
      },
      {
        q: "What does Clampip evolve into?",
        a: "Clampip → Clamwhirl → Clamspire. See the Clamspire page for the final form and Petal Pond boss overlap.",
      },
    ],
  },
  clamspire: {
    metaTitle: "Clamspire Evomon — Petal Pond Water Boss Form",
    metaDescription:
      "Clamspire (#033) finishes Clampip’s Water line — Petal Pond boss (~Lv 30) and bulky Atk/Def water. When to evolve vs saving stones for Lavite.",
    location: "Evolve from Clamwhirl; Petal Pond boss (~Lv 30)",
    weather: "Any",
    role: "Water wall / Petal Pond boss name",
    blurb:
      "Clamspire is the Clampip line payoff: community bases show high Attack/Defense (105 / 100) for a bulky water closer. Map data also lists Clamspire as the Petal Pond boss at ~Lv 30 — evolve your keeper separately from farming the boss encounter. Use it to stabilize water coverage into Lava Crag; do not treat it as the forever stone sink once Lavite/Bluebird are available.",
    evolutionNote:
      "Clampip → Clamwhirl → Clamspire. Evolve when water bulk clears Petal Pond and softens Lava Crag. Signature trait pool opens with Raincall.",
    faqs: [
      {
        q: "Is Clamspire only a boss, or can I evolve into it?",
        a: "Both. Petal Pond lists Clamspire as the island boss (~Lv 30), and the playable line is Clampip → Clamwhirl → Clamspire. Boss cycles and your evolved copy are related names, not identical farm loops.",
      },
      {
        q: "Is Clamspire better than Bubble’s line?",
        a: "For Petal Pond → Lava Crag water coverage, Clampip → Clamspire is the route catch many guides prefer over forcing Bubblade stones. Bubble still wins the tutorial pick; Clamspire wins the island water slot for many accounts.",
      },
      {
        q: "Clamspire vs Lavite stone priority?",
        a: "Finish Clamspire if you still lack water for Fire islands. After Lavite is caught, leftover Evolution Stones usually go to Lavarock — avoid triple-funding Bubble + Clamspire + Lavite in one week.",
      },
      {
        q: "What is Clamspire strong at statistically?",
        a: "Community base spreads lean physical bulk and Attack (Def 100 / Atk 105) with Raincall in the trait pool — a water wall profile more than a glass special attacker.",
      },
    ],
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
      "Pebble → Pebroll → Pebgolem. Catch and evolve when early bosses hurt; see [Pebroll](/dex/pebroll) and [Pebgolem](/dex/pebgolem) for mid/final-form tank value and when to stop investing stones after Lava Crag.",
  },
  pebroll: {
    metaTitle: "Pebroll Evomon — Verdant Mini-Boss Rock Mid Form",
    metaDescription:
      "Pebroll (#019) is Pebble’s Rock mid evolution / Verdant Valley mini-boss (~Lv 13–15). When to evolve to Pebgolem and when Lavite takes the stones.",
    location: "Verdant Valley mini-boss (~Lv 13–15); also evolve from Pebble",
    weather: "Any",
    role: "Mid Rock tank bridge",
    blurb:
      "Pebroll sits between the early Pebble catch and Pebgolem’s Counter wall. Map data lists it as a Verdant Valley mini-boss around Lv 13–15, so you can meet it as a fight target and as an evolution step. Use it to stabilize early bosses; do not treat mid-form stones as permanent — Pebgolem is the line’s payoff, and Lavite usually wins leftover stones after Lava Crag.",
    evolutionNote:
      "Pebble → Pebroll → Pebgolem. Evolve through Pebroll when bulk is the bottleneck. Stop heavy investment once Lavarock is online.",
    faqs: [
      {
        q: "Where is Pebroll in Evomon?",
        a: "Verdant Valley lists Pebroll as a mini-boss around Lv 13–15. You can also evolve a Pebble into Pebroll — treat wild/mini-boss and evolution as the same species line.",
      },
      {
        q: "Should I evolve Pebble into Pebroll right away?",
        a: "Yes if early Verdant bosses are chewing your team. Pebroll is a bridge form — push to Pebgolem when you need the final tank kit, then save stones for Lavite after Lava Crag.",
      },
      {
        q: "Is Pebroll better than Pebgolem?",
        a: "No. Pebroll is the mid step. Community early-carry notes value the line for early/mid walls, with Pebgolem as the Counter payoff and a planned bench once Lavarock arrives.",
      },
      {
        q: "Pebroll vs Lavite — who gets Evolution Stones?",
        a: "Finish Pebgolem if Rock bulk is still carrying your route. After Lava Crag opens, most July 2026 guides pivot leftover stones to Lavite → Lavarock.",
      },
    ],
  },
  pebgolem: {
    metaTitle: "Pebgolem Evomon — Early Rock Tank Final Form",
    metaDescription:
      "Pebgolem (#020) is Pebble’s Rock final evolution — early-to-mid tank with Counter access. When to evolve, when to bench for Lavite, and type matchups.",
    location: "Evolve from Pebroll (Verdant Valley Pebble line)",
    weather: "Any",
    role: "Early–mid Rock tank / Counter wall",
    blurb:
      "Pebgolem is the payoff for the Verdant Valley Pebble catch: a durable Rock wall that community guides rate highly for early and midgame, with Counter access later in the line. It is not a forever endgame pick — ItzVexo-style tier notes call the line strong early/mid then replaceable, and Purp-style routes usually swap the slot toward Lavite/Lavarock after Lava Crag.",
    evolutionNote:
      "Evolve Pebble → Pebroll → Pebgolem when bulk or Counter is what clears the bosses in front of you. Save leftover Evolution Stones once Lavarock is online — Pebgolem solves early walls, not the whole late-game stone budget.",
  },
  sparkit: {
    metaTitle: "Sparkit Evomon — Location, Evolution & Fire Role",
    metaDescription:
      "Sparkit (#021) — early Fire catch and Blazpup alternative. Location notes, evolution line, matchups, and shiny hunt context on evomon.cc.",
    location: "Lava Crag (wild ~Lv 30–43)",
    weather: "Any",
    role: "Early fire DPS",
    blurb: "Common reason to skip the fire starter. Strong through mid game; stones often go to Lavite instead.",
    evolutionNote:
      "Sparkit → Emfox → Empixy. Keep Sparkit as a fast early Fire option unless Lava Crag already has a stronger Fire/Rock carry (Lavite). See Empixy for the final-form / boss-name notes.",
    shinyHuntNote:
      "Sparkit is a practical shiny target because encounters are fast on Lava Crag. Shiny speed bumps can matter, but prioritize a useful Talent roll before long pity sessions.",
  },
  emfox: {
    metaTitle: "Emfox Evomon — Sparkit Mid Evolution Fire DPS",
    metaDescription:
      "Emfox (#022) is Sparkit’s mid Fire evolution toward Empixy. When to spend stones vs Lavite, Lava Crag context, and matchups on evomon.cc.",
    location: "Evolve from Sparkit (Lava Crag line)",
    weather: "Any",
    role: "Mid fire striker",
    blurb:
      "Middle step of the Sparkit line. Evolve when you need more Fire damage now and Lavite is not yet online — or park stones if Lavarock is already your main fire slot.",
    evolutionNote:
      "Sparkit → Emfox → Empixy. Emfox is a bridge form; judge the line by Empixy’s role and by whether Lavite still owns your Evolution Stone budget.",
  },
  empixy: {
    metaTitle: "Empixy Evomon — Sparkit Final Form & Lava Crag Boss",
    metaDescription:
      "Empixy (#023) is Sparkit’s Fire final evolution — Sp. Atk/Speed DPS. Evolution from Emfox, Lava Crag boss name overlap, and when Lavite still wins stones.",
    location: "Evolve from Emfox; also Lava Crag boss (~Lv 45)",
    weather: "Any",
    role: "Fire special DPS / zone boss name",
    blurb:
      "Empixy finishes Sparkit → Emfox with a glassier Sp. Atk / Speed profile (community base: Sp. Atk 100, Speed 109). It fills early-to-mid Fire damage when you skipped Blazpup, but July 2026 stone guides still usually prefer Lavite → Lavarock for the long-term fire wall. Map data also lists Empixy as the Lava Crag island boss — treat wild/evolved Empixy and the boss encounter as related names, not identical farming loops.",
    evolutionNote:
      "Evolve Sparkit → Emfox → Empixy when this line is a real party slot. Prefer a keeper with usable Talent before the stone. If Lavite is already your main fire investment, Empixy can stay a secondary or collection evolve.",
    shinyHuntNote:
      "Most shiny volume is on wild Sparkit (Lava Crag), then evolve the keeper. Boss Empixy cycles are a different loop — do not assume boss shiny pity matches the wild Sparkit farm.",
  },
  frostlet: {
    metaTitle: "Frostlet Evomon — Crystal Cascade Ice Catch",
    metaDescription:
      "Frostlet (#060) — Ice catch from starter pack or Crystal Cascade (~Lv 111–113). Evolves to Frostseer for high-HP boss Ice damage.",
    location: "Starter pack or Crystal Cascade (wild ~Lv 111–113)",
    weather: "Any",
    role: "Ice line base / frostbite setup",
    blurb:
      "Frostlet opens the Frostseer Ice line used for high-HP boss answers in community mid/late guides. Catch it from the starter pack when available, or farm Crystal Cascade wilds once that island is unlocked — our map notes place Frostlet around Lv 111–113 there. Invest only when you need Ice coverage; early islands do not require it.",
    evolutionNote:
      "Frostlet → Frostseer (2-stage). Evolve when Ice is a real team slot for bosses — see Frostseer for the payoff and stone timing.",
    shinyHuntNote:
      "Shiny Frostlet is a late-route hunt on Crystal Cascade or via eggs. Finish a usable normal Frostlet for progression before long shiny sessions on a high-level island.",
  },
  frostseer: {
    metaTitle: "Frostseer Evomon — Ice Final Form Boss DPS",
    metaDescription:
      "Frostseer (#061) is Frostlet’s Ice final evolution — Sp. Atk Ice for high-HP bosses. Evolution, Crystal Cascade catch/boss path, and stone priority.",
    location: "Evolve from Frostlet; also Crystal Cascade boss (~Lv 125)",
    weather: "Any",
    role: "Ice Sp. Atk / high-HP boss answer",
    blurb:
      "Frostseer is why Frostlet stays on endgame must-have lists: Ice special pressure (community base Sp. Atk 102, Speed 98) into Grass / Ground / Flying / Dragon matchups, aimed at bulky bosses once Lavarock and Bluebird handle dailies. Signature trait pool opens with Chillwind. Catch Frostlet first (starter pack or Crystal Cascade wilds ~Lv 111–113), then evolve — map data also lists Frostseer as the Crystal Cascade boss (~Lv 125), separate from evolving your own copy.",
    evolutionNote:
      "Frostlet → Frostseer. Evolve after Cascade-era content is reachable and Ice solves a boss you actually run. Do not dump early stones here while Verdant → Lava Crag still needs Lavite / Bluebird.",
    shinyHuntNote:
      "Hunt shiny on Frostlet wilds, then evolve. Boss Frostseer cycles are a different loop. Prismatic cosmetics are separate from the Sp. Atk payoff — prioritize Talent and levels for boss clears.",
  },
  tarro: {
    typesDisplay: "Grass / Dragon",
    metaTitle: "Tarro Evomon — Murkwood Catch Toward Terragon",
    metaDescription:
      "Tarro (#066) is a late Murkwood Grass wild (~Lv 142–150) toward Terragon. Endgame grass/dragon tank line — when to invest after Lavite and Bluebird.",
    location: "Murkwood wild (~Lv 142–150)",
    weather: "Any",
    role: "Late grass/dragon tank seed",
    blurb:
      "Tarro opens the Terragon grass/dragon wall line that July 2026 S-tier notes call out for self-sustain on long boss fights. It is a late Murkwood catch (~Lv 142–150) — not an early-island project. Community evolution-priority tips group Tarro with Arcub/Frostlet: unlock it after Lavarock + Bluebird (or equivalent) handle dailies, then invest when this boss answer is what you actually run.",
    evolutionNote:
      "Tarro → Terragon. Save the stone for a keeper with usable Talent once Murkwood is unlocked. Do not dump early-route stones here while Verdant → Lava Crag still needs Rock/Fire carries.",
    faqs: [
      {
        q: "Where do you catch Tarro in Evomon?",
        a: "Murkwood wild spawns around Lv 142–150 on our map-zones list. You need late-game island progress — this is not a Verdant Valley catch.",
      },
      {
        q: "Is Tarro / Terragon worth Evolution Stones?",
        a: "Yes as a late endgame grass/dragon tank once your daily clears are stable. Community S-tier notes highlight Terragon’s sustain for long bosses; it is a poor place to spend your first stones.",
      },
      {
        q: "Should I hunt Tarro before Frostseer or Arcapex?",
        a: "Pick the late answer that matches the bosses you are stuck on. Evolution-priority notes list Arcub, Frostlet, and Tarro as strong but harder obtains — fund the one your team actually needs next.",
      },
      {
        q: "What does Tarro evolve into?",
        a: "Tarro evolves into Terragon. Confirm stone/level requirements in-game before committing your best copy.",
      },
    ],
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
      "Bluebird evolves into Volcrest. Farm the Raven Ridge wild route (or quest unlock) before spending stones; see the Volcrest page for final-form Bleed/boss value.",
    shinyHuntNote:
      "For shiny Bluebird, farm the Raven Ridge wild route when possible instead of relying only on boss cycles. Wild encounters are faster; boss and mount variants may still need shiny egg planning.",
  },
  volcrest: {
    typesDisplay: "Flying / Electric",
    metaTitle: "Volcrest Evomon — Bluebird Final Form Boss DPS",
    metaDescription:
      "Volcrest (#027) is Bluebird’s Flying/Electric final evolution — Bleed DPS for boss routes. Evolution timing, Raven Ridge context, and stone priority.",
    location: "Evolve from Bluebird (Raven Ridge line)",
    weather: "Any",
    role: "Bleed DPS / boss farmer",
    blurb:
      "Volcrest is why Bluebird stays on late-game team lists: the Flying/Electric line’s Bleed pressure ramps on high-HP bosses once the evolution is online. Treat Volcrest as the investment target, not endless Bluebird leveling without the stone. Community tier lists commonly pair Lavite/Lavarock with Bluebird → Volcrest as a core mid-to-late answer.",
    evolutionNote:
      "Evolve Bluebird → Volcrest after Raven Ridge is unlocked and the line is a real team slot. Prefer a keeper with usable Talent before spending the stone; a strong normal Bluebird that can clear the route is still worth evolving if shiny hunting stalls progression.",
    shinyHuntNote:
      "Most shiny work happens on Bluebird’s Raven Ridge wild route, then evolve the keeper into Volcrest. Shiny eggs matter more for slow boss-gated variants — see the Shiny Bluebird guide and Shiny Egg pages for those paths.",
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
  ...petDetailsMapCombatBatch,
};
