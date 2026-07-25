import type { PetDetailExtra } from "./pet-details";

/**
 * Thick copy that completes partially indexed evolution lines.
 * Facts aligned to community wiki (types/stats/lines/locations);
 * blurbs written as stone-priority / route guides — not lore clones.
 */
export const petDetailsLineFillBatch: Record<string, PetDetailExtra> = {
  blazmane: {
    metaTitle: "Blazmane Evomon — Blazpup Final Fire Evolution",
    metaDescription:
      "Blazmane (#006) is the Blazpup-line Fire final (Atk 105). When to evolve past Blazgrowl, stone timing vs Sparkit/Lavite, and team fit on evomon.cc.",
    location: "Evolve from Blazgrowl",
    weather: "Any",
    role: "Fire starter final / physical closer",
    blurb:
      "Blazmane closes the lab Fire starter line: Blazpup → Blazgrowl → Blazmane. Community bases peak Attack 105 with solid Defense/Speed (93/93) — a physical Fire closer if you committed at the tutorial. Most accounts still pivot stones toward Sparkit or Lavite for route coverage; finish Blazmane only when this line is still your daily Fire slot, not out of habit.",
    evolutionNote:
      "Blazpup → Blazgrowl → Blazmane. Evolve the last step after a keeper Talent Blazgrowl — Water/Ground/Rock still check Fire hard.",
    faqs: [
      {
        q: "How do you get Blazmane?",
        a: "Evolve Blazgrowl from the Blazpup starter line. It is evolve-only on our map data.",
      },
      {
        q: "Blazmane vs Sparkit / Lavite for Fire stones?",
        a: "Sparkit and Lavite usually win long-term stone priority for route and boss needs. Finish Blazmane if you already invested in the starter and it still clears your current island.",
      },
      {
        q: "What are Blazmane’s base stats?",
        a: "Community bases: HP 78, Attack 105, Defense 93, Sp. Atk 79, Sp. Def 72, Speed 93.",
      },
      {
        q: "Signature trait on the Blazmane line?",
        a: "Community pools open with Flamefiend (plus shared generics). Verify rolls in-game.",
      },
    ],
  },

  leafroge: {
    metaTitle: "Leafroge Evomon — Leafbun Mid Grass Evolution",
    metaDescription:
      "Leafroge (#008) is Leafbun’s mid Grass evolution toward Leafblade. Stone timing, starter context, and when to keep evolving on evomon.cc.",
    location: "Evolve from Leafbun",
    weather: "Any",
    role: "Grass starter mid form",
    blurb:
      "Leafroge is the mid spike on the Leafbun starter line — balanced Atk/SpA 70 before Leafblade’s dual 100 offense. Evolve when you locked Grass at the lab and still need sustain coverage; if Bubble or Fire starters already carry early islands, do not dump early Evolution Stones here.",
    evolutionNote: "Leafbun → Leafroge → Leafblade. Plan both evolves as one project if Leafblade is the real goal.",
    faqs: [
      {
        q: "How do you get Leafroge?",
        a: "Evolve Leafbun from the starter choice. No separate wild band on our chart.",
      },
      {
        q: "Should I stop at Leafroge?",
        a: "Only if stones are gated. Leafblade is the line’s balanced final — mid forms are bridges.",
      },
      {
        q: "What are Leafroge’s base stats?",
        a: "Community bases: HP 54, Attack 70, Defense 55, Sp. Atk 70, Sp. Def 54, Speed 67.",
      },
      {
        q: "Leafroge vs Florawn?",
        a: "Different Grass lines. Leafroge is the lab starter mid; Florawn is Budling’s Verdant Valley path toward Silvanarch.",
      },
    ],
  },

  leafblade: {
    metaTitle: "Leafblade Evomon — Leafbun Final Grass Evolution",
    metaDescription:
      "Leafblade (#009) is the Leafbun-line Grass final (Atk/SpA 100). Evolution path, when starter Grass still earns stones, and matchups on evomon.cc.",
    location: "Evolve from Leafroge",
    weather: "Any",
    role: "Grass starter final",
    blurb:
      "Leafblade is why Leafbun stays a comfort pick: community Atk and SpA both hit 100 with Speed 95. It is evolve-only. Compared with route Grass (Budling → Silvanarch or Tarro → Tarragon), Leafblade is the early-commit final — fund it if the starter still anchors your party, otherwise save stones for later Grass tanks.",
    evolutionNote: "Leafbun → Leafroge → Leafblade. Signature trait pool opens with Reaper.",
    faqs: [
      {
        q: "How do you get Leafblade?",
        a: "Evolve Leafroge after Leafbun. Confirm stone and level gates in-game.",
      },
      {
        q: "What are Leafblade’s base stats?",
        a: "Community bases: HP 77, Attack 100, Defense 77, Sp. Atk 100, Sp. Def 76, Speed 95.",
      },
      {
        q: "Is Leafblade worth Evolution Stones late?",
        a: "Usually only if this line is still your Grass slot. Late Murkwood Tarro/Tarragon outscales most starter finals for boss sustain.",
      },
      {
        q: "Leafblade vs Silvanarch?",
        a: "Leafblade is the starter final (balanced offense). Silvanarch is the Verdant Budling final with Sp. Def 102 — tankier special wall.",
      },
    ],
  },

  chirphantom: {
    metaTitle: "Chirphantom Evomon — Chirppy Final Flying Evolution",
    metaDescription:
      "Chirphantom (#012) is the Chirppy-line Flying final (Atk 104 / Spe 103). Raven Ridge context, stone priority vs Bluebird, and stats on evomon.cc.",
    location: "Evolve from Chirplume",
    weather: "Any",
    role: "Raven Ridge Flying final / filler carry",
    blurb:
      "Chirphantom finishes Chirppy → Chirplume on Raven Ridge: physical Flying with community Attack 104 and Speed 103. Catch Chirppy/Chirplume on the ridge (~Lv 75–85), then evolve. Bluebird → Volcrest still owns most leftover Flying stones on the same island — treat Chirphantom as dex completion and coverage, not the default ridge carry.",
    evolutionNote: "Chirppy → Chirplume → Chirphantom. Prefer evolving a keeper Chirplume over hunting a phantom wild.",
    faqs: [
      {
        q: "How do you get Chirphantom?",
        a: "Evolve Chirplume. Chirppy and Chirplume wild on Raven Ridge (~Lv 75–85); Chirphantom is evolve-only on our sheet.",
      },
      {
        q: "Chirphantom vs Volcrest on Raven Ridge?",
        a: "Volcrest (from Bluebird) is the ridge carry most guides fund. Chirphantom is the easier Chirppy-line final for Flying filler and dex.",
      },
      {
        q: "What are Chirphantom’s base stats?",
        a: "Community bases: HP 76, Attack 104, Defense 77, Sp. Atk 65, Sp. Def 79, Speed 103.",
      },
      {
        q: "Signature trait?",
        a: "Community pools open with Claws on the Chirppy line.",
      },
    ],
  },

  flutterby: {
    metaTitle: "Flutterby Evomon — Humding Mid Bug Evolution",
    metaDescription:
      "Flutterby (#014) is Humding’s mid Bug form toward Twirlby. Silent Sands catch/evolve path, stats, and stone timing on evomon.cc.",
    location: "Silent Sands wild (~Lv 96–105); or evolve Humding",
    weather: "Any",
    role: "Silent Sands Bug mid / Twirlby bridge",
    blurb:
      "Flutterby bridges Humding → Twirlby. Map data lists Flutterby wild on Silent Sands (~Lv 96–105) alongside evolving Humding. Mid stats (Spe 74 peak) are fine for the island, but the line’s payoff is Twirlby’s Bug/Flying final — do not park stones on Flutterby forever.",
    evolutionNote: "Humding → Flutterby → Twirlby. Signature trait pool includes Blight on later stages.",
    faqs: [
      {
        q: "Where do you get Flutterby?",
        a: "Evolve Humding, or catch Flutterby wild on Silent Sands around Lv 96–105 on our map-zones list.",
      },
      {
        q: "What does Flutterby evolve into?",
        a: "Flutterby → Twirlby. Confirm materials in-game.",
      },
      {
        q: "What are Flutterby’s base stats?",
        a: "Community bases: HP 58, Attack 67, Defense 66, Sp. Atk 49, Sp. Def 52, Speed 74.",
      },
      {
        q: "Flutterby vs Gempillar on Bug routes?",
        a: "Different islands. Flutterby is Silent Sands Humding mid; Gempillar is Canyon Oasis toward Gempress.",
      },
    ],
  },

  twirlby: {
    typesDisplay: "Bug / Flying",
    metaTitle: "Twirlby Evomon — Humding Final Bug/Flying",
    metaDescription:
      "Twirlby (#015) is the Humding-line Bug/Flying final (Atk 97 / Spe 100). Silent Sands path, dual typing, and when to invest on evomon.cc.",
    location: "Evolve from Flutterby",
    weather: "Any",
    role: "Bug/Flying final / aerial hunter",
    blurb:
      "Twirlby is the Humding final with community Attack 97 / Speed 100 and Bug/Flying dual typing on our sheet. Evolve-only after Flutterby. Useful when you need Bug pressure with Flying coverage; Electric and Rock still punish Flying, so keep swaps ready.",
    evolutionNote: "Humding → Flutterby → Twirlby. Trait pool opens with Blight.",
    faqs: [
      {
        q: "How do you get Twirlby?",
        a: "Evolve Flutterby (from Humding / Silent Sands). Listed as evolve-only on community catch notes.",
      },
      {
        q: "Is Twirlby Bug/Flying?",
        a: "Yes — our dex follows community wiki dual typing: Bug / Flying. Primary badge still tracks the Bug line for matchups helpers.",
      },
      {
        q: "What are Twirlby’s base stats?",
        a: "Community bases: HP 82, Attack 97, Defense 92, Sp. Atk 65, Sp. Def 73, Speed 100.",
      },
      {
        q: "Twirlby vs Chirphantom for Flying damage?",
        a: "Chirphantom is pure Flying on the Raven Ridge line. Twirlby adds Bug STAB with Flying secondary — pick by the bosses you are stuck on.",
      },
    ],
  },

  mopillow: {
    metaTitle: "Mopillow Evomon — Mopebun Final Normal Evolution",
    metaDescription:
      "Mopillow (#017) is Mopebun’s Normal final (balanced ~85s). Petal Pond evolve path, stone priority, and when to skip on evomon.cc.",
    location: "Evolve from Mopebun",
    weather: "Any",
    role: "Early Normal final / bulky filler",
    blurb:
      "Mopillow finishes Mopebun from Petal Pond: bulky Normal with community spreads clustered around the mid-80s. Evolve if you still need a Normal slot before real route carries arrive — do not empty early Evolution Stones here while Clampip / Lavite / Bluebird are unlocked.",
    evolutionNote: "Mopebun → Mopillow (2-stage). Trait pool opens with Soulshock.",
    faqs: [
      {
        q: "How do you get Mopillow?",
        a: "Evolve Mopebun caught on Petal Pond (~Lv 15–29). Evolve-only final.",
      },
      {
        q: "Is Mopillow worth stones?",
        a: "Low priority. Catch and evolve for dex/filler; spend premium stones on route carries.",
      },
      {
        q: "What are Mopillow’s base stats?",
        a: "Community bases: HP 85, Attack 85, Defense 79, Sp. Atk 90, Sp. Def 79, Speed 82.",
      },
      {
        q: "Mopillow vs Clipexor for Normal?",
        a: "Mopillow is early Petal Pond. Clipexor is the seasonal Lunaria boss-line final — much later unlock and higher ceiling.",
      },
    ],
  },

  florawn: {
    metaTitle: "Florawn Evomon — Budling Mid Grass Evolution",
    metaDescription:
      "Florawn (#035) is Budling’s mid Grass form toward Silvanarch. Verdant Valley path, stats, and stone timing on evomon.cc.",
    location: "Evolve from Budling",
    weather: "Any",
    role: "Verdant Grass mid / Silvanarch bridge",
    blurb:
      "Florawn sits between Budling (Verdant Valley) and Silvanarch. Sp. Def already leans tanky (73) before the final’s 102. Evolve a keeper Budling when you want the Silvanarch special wall — mid forms are not long-term stone sinks.",
    evolutionNote: "Budling → Florawn → Silvanarch. Trait pool opens with Regen.",
    faqs: [
      {
        q: "How do you get Florawn?",
        a: "Evolve Budling from Verdant Valley. Florawn is evolve-only on community catch notes.",
      },
      {
        q: "What are Florawn’s base stats?",
        a: "Community bases: HP 60, Attack 62, Defense 53, Sp. Atk 50, Sp. Def 73, Speed 64.",
      },
      {
        q: "Florawn vs Leafroge?",
        a: "Both Grass mids. Leafroge is the lab starter path; Florawn is the Verdant Budling path toward Silvanarch.",
      },
      {
        q: "Should I evolve to Silvanarch immediately?",
        a: "If stones allow and you want the Sp. Def wall, yes. Otherwise hold until the Grass answer matches your current bosses.",
      },
    ],
  },

  silvanarch: {
    metaTitle: "Silvanarch Evomon — Budling Final Grass Wall",
    metaDescription:
      "Silvanarch (#036) is the Budling-line Grass final (SpD 102). Verdant evolve path, B-tier context, and team role on evomon.cc.",
    location: "Evolve from Florawn",
    weather: "Any",
    role: "Grass special wall / Verdant final",
    blurb:
      "Silvanarch is the Budling final: community Sp. Def 102 with solid Speed 90 — a special-leaning Grass wall from the Verdant seed line. Community lists often park it B-tier: useful, not a stone race vs Tarragon or Wisphex. Evolve when you need this wall and Budling was already farmed.",
    evolutionNote: "Budling → Florawn → Silvanarch. Trait pool opens with Regen.",
    faqs: [
      {
        q: "How do you get Silvanarch?",
        a: "Evolve Florawn after Budling. Evolve-only on our map data.",
      },
      {
        q: "What are Silvanarch’s base stats?",
        a: "Community bases: HP 83, Attack 88, Defense 75, Sp. Atk 72, Sp. Def 102, Speed 90.",
      },
      {
        q: "Silvanarch vs Tarragon?",
        a: "Tarragon is the late Murkwood Grass/Dragon sustain tank. Silvanarch is earlier Verdant Grass wall — fund Tarragon when Murkwood is open.",
      },
      {
        q: "Is Silvanarch B-tier worth stones?",
        a: "Yes for a dedicated Grass wall if the line is already started. Skip if your Grass slot is already covered.",
      },
    ],
  },

  vipour: {
    metaTitle: "Vipour Evomon — Vipip Mid Poison Evolution",
    metaDescription:
      "Vipour (#038) bridges Vipip → Viparch. Murkwood wild/evolve path, stats, and when to push the final on evomon.cc.",
    location: "Murkwood wild (~Lv 135–150); or evolve Vipip",
    weather: "Any",
    role: "Murkwood Poison mid / Viparch bridge",
    blurb:
      "Vipour is the missing mid on the Vipip → Viparch line. Map data lists it wild on Murkwood (~Lv 135–150) with Vipip; you can also evolve Vipip. Attack 82 / Speed 76 already hit hard, but Viparch (island boss / final) is the real Poison carry — treat Vipour as the bridge.",
    evolutionNote: "Vipip → Vipour → Viparch. Trait pool opens with Infect.",
    faqs: [
      {
        q: "Where do you get Vipour?",
        a: "Murkwood wild (~Lv 135–150) or evolve Vipip. Both paths appear on community maps.",
      },
      {
        q: "What does Vipour evolve into?",
        a: "Vipour → Viparch. Viparch also lists as the Murkwood island boss (~Lv 150).",
      },
      {
        q: "What are Vipour’s base stats?",
        a: "Community bases: HP 54, Attack 82, Defense 46, Sp. Atk 55, Sp. Def 46, Speed 76.",
      },
      {
        q: "Vipour vs Wispshade for Poison?",
        a: "Different islands and roles. Vipour is Murkwood physical Poison mid; Wispshade is Nether Land Poison/Psychic toward Wisphex.",
      },
    ],
  },

  frostelle: {
    typesDisplay: "Grass / Ice",
    metaTitle: "Frostelle Evomon — Stardrift Grass/Ice Evolution",
    metaDescription:
      "Frostelle (#055) evolves from Stardrift (Shiver Snows). Grass/Ice dual typing, stats, and stone timing on evomon.cc.",
    location: "Evolve from Stardrift",
    weather: "Any",
    role: "Grass/Ice final / Shiver Snows payoff",
    blurb:
      "Frostelle is Stardrift’s evolution from Shiver Snows: community Speed 113 with Sp. Atk 92, typed Grass/Ice on our sheet. Catch Stardrift on the snow route, then evolve. It is a coverage final — not a replacement for Frostseer (pure Ice boss answer) or Tarragon (Grass/Dragon tank).",
    evolutionNote: "Stardrift → Frostelle (2-stage). Trait pool opens with OpenSupport.",
    faqs: [
      {
        q: "How do you get Frostelle?",
        a: "Evolve Stardrift caught in Shiver Snows. Frostelle is evolve-only on community notes.",
      },
      {
        q: "Is Frostelle Grass/Ice?",
        a: "Yes — dual typing per community wiki. Primary dex element stays Grass for line grouping.",
      },
      {
        q: "What are Frostelle’s base stats?",
        a: "Community bases: HP 81, Attack 80, Defense 71, Sp. Atk 92, Sp. Def 81, Speed 113.",
      },
      {
        q: "Frostelle vs Frostseer?",
        a: "Frostseer is the Frostlet Ice final aimed at bulky bosses. Frostelle is the Stardrift Grass/Ice coverage evolve — different unlock and role.",
      },
    ],
  },

  graycrene: {
    metaTitle: "Graycrene Evomon — King of Flying Boss Reward",
    metaDescription:
      "Graycrene (#056) unlocks after the King of Flying boss, then evolves to Sundercrene. Catch route, stats, and stone plan on evomon.cc.",
    location: "Reward after King of Flying boss (Flying Territory)",
    weather: "Any",
    role: "Boss-reward Flying seed / Sundercrene line",
    blurb:
      "Graycrene is not a random wild — community data ties it to clearing the King of Flying fight in Flying Territory, then evolving into Sundercrene. Bases lean Attack 78 / Speed 73 as a seed. Prep Flying checks before the boss; after the reward, bank stones for Sundercrene if that final is your goal.",
    evolutionNote: "Graycrene → Sundercrene (2-stage). Trait pool opens with Pursuit.",
    faqs: [
      {
        q: "How do you get Graycrene?",
        a: "Community catch notes: after the King of Flying boss fight (Flying Territory). Then evolve toward Sundercrene.",
      },
      {
        q: "What does Graycrene evolve into?",
        a: "Graycrene → Sundercrene. Sundercrene also appears as the Flying Territory boss on our map.",
      },
      {
        q: "What are Graycrene’s base stats?",
        a: "Community bases: HP 60, Attack 78, Defense 54, Sp. Atk 70, Sp. Def 65, Speed 73.",
      },
      {
        q: "Graycrene vs Chirppy for Flying?",
        a: "Chirppy is a Raven Ridge wild filler. Graycrene is a boss-reward seed into the Sundercrene storm final — later and stronger ceiling.",
      },
    ],
  },

  gempress: {
    metaTitle: "Gempress Evomon — Gempillar Bug Final Evolution",
    metaDescription:
      "Gempress (#065) is Gempillar’s Bug final (SpA 104 / Atk 98). Canyon Oasis path, wild/evolve notes, and team fit on evomon.cc.",
    location: "Canyon Oasis wild (~Lv 120–135); or evolve Gempillar",
    weather: "Any",
    role: "Canyon Oasis Bug final / special lean",
    blurb:
      "Gempress finishes Gempillar from Canyon Oasis: community Sp. Atk 104 with Attack 98 and Speed 97 — a threatening Bug final. Map data also lists Gempress wild (~Lv 120–135); evolving Gempillar is still the cleaner Talent path. Trait pool opens with Unseen.",
    evolutionNote: "Gempillar → Gempress (2-stage).",
    faqs: [
      {
        q: "How do you get Gempress?",
        a: "Evolve Gempillar or catch Gempress wild in Canyon Oasis (~Lv 120–135) on our map-zones list.",
      },
      {
        q: "What are Gempress’s base stats?",
        a: "Community bases: HP 73, Attack 98, Defense 68, Sp. Atk 104, Sp. Def 68, Speed 97.",
      },
      {
        q: "Gempress vs Twirlby for Bug?",
        a: "Twirlby is Bug/Flying from Silent Sands. Gempress is pure Bug with higher Sp. Atk — pick by coverage needs.",
      },
      {
        q: "Worth Evolution Stones?",
        a: "Yes if Canyon Oasis is current content and you lack a Bug special attacker. Otherwise finish after daily carries are funded.",
      },
    ],
  },

  pummash: {
    metaTitle: "Pummash Evomon — Pummpaw Fighting Final",
    metaDescription:
      "Pummash (#079) is Pummpaw’s Fighting final (Atk 117). Dusk Town path, wild/evolve notes, and counters on evomon.cc.",
    location: "Dusk Town wild (~Lv 115–120); or evolve Pummpaw",
    weather: "Any",
    role: "Fighting physical final / Normal answer",
    blurb:
      "Pummash is the Pummpaw payoff: community Attack 117 with Defense 90 — the Fighting closer for Normal and Ice targets. Dusk Town lists both the line and Pummash wild (~Lv 115–120); evolving a keeper Pummpaw is usually cleaner. Trait pool includes TrueDmg among standouts.",
    evolutionNote: "Pummpaw → Pummash (2-stage).",
    faqs: [
      {
        q: "How do you get Pummash?",
        a: "Evolve Pummpaw from Dusk Town, or catch Pummash wild there around Lv 115–120.",
      },
      {
        q: "What are Pummash’s base stats?",
        a: "Community bases: HP 82, Attack 117, Defense 90, Sp. Atk 68, Sp. Def 69, Speed 88.",
      },
      {
        q: "Pummash vs Astraknight?",
        a: "Both Fighting. Pummash is the Dusk Town Pummpaw final; Astraknight is a separate late Fighting pick — compare the fight you are stuck on.",
      },
      {
        q: "What should I bring against Pummash?",
        a: "Flying, Psychic, and Fairy-class answers (per public chart) check Fighting. Verify dual moves in live fights.",
      },
    ],
  },

  wispshade: {
    typesDisplay: "Poison / Psychic",
    metaTitle: "Wispshade Evomon — Wispuff Mid Poison/Psychic",
    metaDescription:
      "Wispshade (#083) bridges Wispuff → Wisphex. Nether Land wild/evolve path, dual typing, and stone plan on evomon.cc.",
    location: "Nether Land wild (~Lv 156–160); or evolve Wispuff",
    weather: "Any",
    role: "Nether Land Poison/Psychic mid",
    blurb:
      "Wispshade is the mid form on the Wispuff → Wisphex line that community tier lists keep near the top for status pressure. Nether Land lists Wispshade wild (~Lv 156–160); evolving Wispuff is the Talent-safe path. Dual Poison/Psychic on our sheet — same as Wispuff/Wisphex. Push to Wisphex when stones allow; mid forms are bridges.",
    evolutionNote: "Wispuff → Wispshade → Wisphex. Trait pool includes Evolve among standouts.",
    faqs: [
      {
        q: "Where do you get Wispshade?",
        a: "Nether Land wild (~Lv 156–160) or evolve Wispuff. Both appear in community data.",
      },
      {
        q: "What does Wispshade evolve into?",
        a: "Wispshade → Wisphex. Wisphex is the line’s endgame Poison/Psychic core.",
      },
      {
        q: "Is Wispshade Poison/Psychic?",
        a: "Yes — dual typing aligned with community wiki for the whole Wispuff line.",
      },
      {
        q: "What are Wispshade’s base stats?",
        a: "Community bases: HP 52, Attack 62, Defense 56, Sp. Atk 67, Sp. Def 48, Speed 78.",
      },
    ],
  },

  thordlord: {
    typesDisplay: "Ground / Grass",
    metaTitle: "Thordlord Evomon — Mudbud Final Ground/Grass",
    metaDescription:
      "Thordlord (#087) is the Mudbud-line Ground/Grass final. Amber Acres evolve path, stats, and when it earns stones on evomon.cc.",
    location: "Evolve from Mudthorn",
    weather: "Any",
    role: "Ground/Grass final / Mudbud line closer",
    blurb:
      "Thordlord closes Mudbud → Mudthorn from Amber Acres: balanced Ground/Grass final (community spreads in the mid-80s). Evolve-only. Useful when you need Ground with Grass coverage after Mudthorn; Ice and Flying still punish Grass half — keep answers ready. Source upgraded to cross-source after wiki confirmation.",
    evolutionNote: "Mudbud → Mudthorn → Thordlord. Trait pool includes PartingGift among standouts.",
    faqs: [
      {
        q: "How do you get Thordlord?",
        a: "Evolve Mudthorn after Mudbud (Amber Acres). Evolve-only on community catch notes.",
      },
      {
        q: "Is Thordlord Ground/Grass?",
        a: "Yes — dual typing per community wiki for the Mudbud line.",
      },
      {
        q: "What are Thordlord’s base stats?",
        a: "Community bases: HP 84, Attack 90, Defense 87, Sp. Atk 86, Sp. Def 86, Speed 81.",
      },
      {
        q: "Thordlord vs Goliath for Ground?",
        a: "Goliath is the seasonal Floating Realm Glowy final. Thordlord is the main-map Mudbud closer — earlier unlock, different stone tax.",
      },
    ],
  },
};
