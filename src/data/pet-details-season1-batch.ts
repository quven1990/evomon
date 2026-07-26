import type { PetDetailExtra } from "./pet-details";

/**
 * Season-1 / late-dex thick copy for pets missing from our earlier index.
 * Facts (types, stats, lines, catch routes) aligned to community wiki;
 * blurbs/FAQs written as route guides — not lore paraphrases of competitor pages.
 *
 * All slugs are live: slotted in dexEntries (#067, #094–101, #104–106) and
 * listed in INDEXABLE_DEX_SLUGS.
 */
export const petDetailsSeason1Batch: Record<string, PetDetailExtra> = {
  // ── Tarro final (dex #067 rename Terragon → Tarragon) ─────────────────
  tarragon: {
    typesDisplay: "Grass / Dragon",
    metaTitle: "Tarragon Evomon — Murkwood Grass/Dragon Tank",
    metaDescription:
      "Tarragon (#067) is Tarro’s Murkwood final — Grass/Dragon sustain for long bosses. Catch/evolve route, stones, and when it beats other late tanks.",
    location: "Murkwood wild (~Lv 140–150); or evolve Tarro",
    weather: "Any",
    role: "Late grass/dragon sustain tank",
    blurb:
      "Tarragon is the Murkwood payoff for Tarro: a Grass/Dragon wall community S-tier notes keep for long boss timers, not a mid-island filler. You can hunt it wild (~Lv 140–150) next to Tarro, but most accounts catch Tarro first and evolve once Evolution + Grass/Dragon stones (or Omni substitutes) are stocked. Ice hits the line hard — bring frost coverage when farming Murkwood, then park Tarragon as the sustain answer after Lavite/Bluebird already clear dailies.",
    evolutionNote:
      "Tarro → Tarragon (2-stage). Prefer evolving a keeper Talent Tarro over forcing a wild Tarragon catch. Confirm stone counts in-game before spending the stack.",
    shinyHuntNote:
      "Shiny volume is easier on Tarro wilds, then evolve. Wild Tarragon is the same island band but usually slower KO loops.",
    faqs: [
      {
        q: "How do you get Tarragon in Evomon?",
        a: "Either evolve Tarro or catch Tarragon in Murkwood around Lv 140–150. Evolving Tarro is the cleaner route for most players.",
      },
      {
        q: "Is Tarragon worth Evolution Stones?",
        a: "Yes as a late sustain tank once your daily clears are stable. It is a poor first-stone target while Verdant → Lava Crag still needs Rock/Fire carries.",
      },
      {
        q: "Tarragon vs Frostseer for endgame bosses?",
        a: "Pick the answer that matches the boss typing you are stuck on. Evolution-priority notes group Tarro with Arcub/Frostlet — fund the line your party actually needs next.",
      },
      {
        q: "What are Tarragon’s base stats?",
        a: "Community bases: HP 87, Attack 90, Defense 75, Sp. Atk 88, Sp. Def 75, Speed 100 — bulky with usable Speed for a wall.",
      },
    ],
  },

  // ── Glowy line (dex #104–106 empty slots) ─────────────────────────────
  glowy: {
    metaTitle: "Glowy Evomon — Floating Realm Ground Catch",
    metaDescription:
      "Glowy (#104) is the Floating Realm Ground catch toward Glowres → Goliath. Seasonal World Select route, level band, and stone plan on evomon.cc.",
    location: "Floating Realm / Floating Island (Seasonal · World Select), past the stone bridge (~Lv 140–145)",
    weather: "Any",
    role: "Seasonal Ground seed / Goliath line",
    blurb:
      "Glowy is the seasonal Ground opener for the Goliath line — not a main-map wild. Unlock Seasonal Island from World Select (community guides gate it around account Lv 30), teleport to Floating Realm/Island, cross the stone bridge, and farm the ~Lv 140–145 band. Grass, Flying, or Dragon pressure helps chip it for the catch. Treat Glowy as a project pet: the real ceiling is Glowres → Goliath after you bank Evolution Stones plus Ground stones; do not burn early-route stock here.",
    evolutionNote:
      "Glowy → Glowres → Goliath (3-stage). Community material tables often list ~10 Evolution + 6 Ground (+ matching Light stones in some guides) for the first evo, then a heavier second stack — verify live costs in your client.",
    shinyHuntNote:
      "Seasonal island loops are the shiny volume play. Evolve a keeper Glowy rather than hoping for a wild Goliath.",
    faqs: [
      {
        q: "Where do you catch Glowy?",
        a: "Floating Realm / Floating Island via World Select → Seasonal Island. Community routes put it past the stone bridge around Lv 140–145.",
      },
      {
        q: "What does Glowy evolve into?",
        a: "Glowy → Glowres → Goliath. Confirm stone and level gates in-game before committing your best copy.",
      },
      {
        q: "Is Glowy Ground-only?",
        a: "Our dex follows the community wiki primary typing: Ground. Some seasonal guides also discuss Light coverage on the line — treat move pools and live UI as the final check.",
      },
      {
        q: "What are Glowy’s base stats?",
        a: "Community bases: HP 41, Attack 44, Defense 55, Sp. Atk 52, Sp. Def 37, Speed 30 — bulky seed that scales hard after both evolutions.",
      },
    ],
  },
  glowres: {
    metaTitle: "Glowres Evomon — Glowy Mid Evolution Guide",
    metaDescription:
      "Glowres (#105) is Glowy’s mid Ground evolution toward Goliath. Stone costs, when to evolve, and seasonal catch context on evomon.cc.",
    location: "Evolve from Glowy",
    weather: "Any",
    role: "Glowy mid form / Goliath bridge",
    blurb:
      "Glowres is the bridge form — better stats than Glowy, not yet the Goliath ceiling. Evolve only when you already own a keeper Glowy and can afford the second stone stack soon after; parking forever on Glowres wastes the seasonal grind. Same Ground typing as the rest of the line on our sheet.",
    evolutionNote:
      "Glowy → Glowres → Goliath. Second evolution is the expensive step in community material tables — bank tickets/stones before you press the first evolve if Goliath is the real goal.",
    faqs: [
      {
        q: "How do you get Glowres?",
        a: "Evolve Glowy after the Floating Realm catch. There is no separate wild band listed for Glowres on our map.",
      },
      {
        q: "Should I stop at Glowres?",
        a: "Only if stones are blocked. The line’s community value is the Goliath final — plan both evolutions as one project.",
      },
      {
        q: "What are Glowres’s base stats?",
        a: "Community bases: HP 58, Attack 63, Defense 76, Sp. Atk 72, Sp. Def 52, Speed 40.",
      },
      {
        q: "Glowres vs other Ground walls?",
        a: "Mudthorn / Thordlord cover main-map Ground routes. Glowres is the seasonal path into Goliath — different unlock, different stone tax.",
      },
    ],
  },
  goliath: {
    metaTitle: "Goliath Evomon — Glowy Final Ground Evolution",
    metaDescription:
      "Goliath (#106) is the Glowy-line Ground final for seasonal DPS/tank hybrids. Evolution costs, Floating Realm route, and team fit on evomon.cc.",
    location: "Evolve from Glowres",
    weather: "Any",
    role: "Seasonal Ground final / raid-tower carry",
    blurb:
      "Goliath is why players farm Floating Realm: the Glowy line’s final form with community bases peaking Defense 107 / Sp. Atk 102. It is evolve-only — no shortcut wild. Fund it after your main-map carries are online, because the stone stack is steep. Watch Grass and Flying answers when you leave it in; swap out when those leads show up.",
    evolutionNote:
      "Glowy → Glowres → Goliath. Community tables often cite ~30 Evolution Stones plus heavy Ground (and sometimes Light) element stones for the last step — confirm in-game before dumping tickets.",
    shinyHuntNote:
      "Hunt shiny on Glowy seasonal loops, then evolve. Cosmetics do not replace Talent/Nature investment for the final form.",
    faqs: [
      {
        q: "Can you catch Goliath in the wild?",
        a: "Not on our map data — Goliath is listed as evolve-from-Glowres. Start with Glowy on Floating Realm.",
      },
      {
        q: "Is Goliath worth the seasonal grind?",
        a: "Yes if you want a late Ground final and already cleared early stone priorities (Lavite/Bluebird-class). Skip it if Seasonal Island is still locked or stones are empty.",
      },
      {
        q: "What are Goliath’s base stats?",
        a: "Community bases: HP 81, Attack 88, Defense 107, Sp. Atk 102, Sp. Def 74, Speed 57.",
      },
      {
        q: "Goliath team role?",
        a: "Ground final for raids/tower-style content once kitted. Keep a Grass/Flying answer ready for its bad matchups.",
      },
    ],
  },

  // ── Clipdow line (dex #097–099 blocked by third-party names — item 2) ─
  clipdow: {
    metaTitle: "Clipdow Evomon — Lunaria Boss Reward Normal",
    metaDescription:
      "Clipdow (often searched as Clipdown) is the Lunaria Isle boss reward that opens Cliphas → Clipexor. Normal typing, unlock path, and stone timing on evomon.cc.",
    location: "Boss reward — Dark King Clipexor on Lunaria Isle (Seasonal)",
    weather: "Any",
    role: "Seasonal Normal seed / Clipexor line",
    blurb:
      "Clipdow is a Seasonal Island boss drop, not a grass-route wild: beat Dark King Clipexor on Lunaria Isle and claim the Normal-type seed for Cliphas → Clipexor. The boss itself is Dark-typed; the playable line on our sheet is Normal — do not build as if your party Clipdow shares the boss’s Dark typing. Speed (57) leads the base spread; Fighting hits the line hard, while Psychic/Dark matchups are where Normal bulk helps. Community searches often spell it “Clipdown” — same pet, correct in-game name is Clipdow.",
    evolutionNote:
      "Clipdow → Cliphas → Clipexor (3-stage). Evolve after you have a keeper Talent copy; the final form is the design goal of the line.",
    shinyHuntNote:
      "Boss-reward loops are slower shiny volume than wild farms. Prioritize a usable Talent Clipdow before spending double evolution stacks.",
    faqs: [
      {
        q: "How do you get Clipdow?",
        a: "Defeat Dark King Clipexor on Lunaria Isle (Seasonal / World Select) and take the Clipdow reward. It is not a standard main-map wild on our chart.",
      },
      {
        q: "Is it Clipdow or Clipdown?",
        a: "In-game and on our dex the name is Clipdow. Clipdown is a common community misspelling for the same pet.",
      },
      {
        q: "Is Clipdow the same typing as Dark King Clipexor?",
        a: "No. The boss is Dark; community dex data lists playable Clipdow / Cliphas / Clipexor as Normal.",
      },
      {
        q: "What does Clipdow evolve into?",
        a: "Clipdow → Cliphas → Clipexor. Confirm stone and level gates in-game.",
      },
      {
        q: "What are Clipdow’s base stats?",
        a: "Community bases: HP 43, Attack 54, Defense 35, Sp. Atk 44, Sp. Def 39, Speed 57.",
      },
    ],
  },
  cliphas: {
    metaTitle: "Cliphas Evomon — Clipdow Mid Evolution",
    metaDescription:
      "Cliphas is Clipdow’s mid Normal evolution toward Clipexor. Boss-reward route, stats, and when to spend stones on evomon.cc.",
    location: "Evolve from Clipdow",
    weather: "Any",
    role: "Clipdow mid form",
    blurb:
      "Cliphas is the mid spike after the Lunaria reward — better Attack/Speed than Clipdow, still short of Clipexor’s final sheet. Evolve when you are ready to finish the line soon; stopping mid-stack leaves a seasonal boss pet underleveled for the content that unlocked it.",
    evolutionNote: "Clipdow → Cliphas → Clipexor. Plan both stone spends as one project after the boss clear.",
    faqs: [
      {
        q: "How do you get Cliphas?",
        a: "Evolve Clipdow from the Lunaria Isle boss reward. No separate wild band on our map.",
      },
      {
        q: "What are Cliphas’s base stats?",
        a: "Community bases: HP 60, Attack 75, Defense 49, Sp. Atk 57, Sp. Def 55, Speed 79.",
      },
      {
        q: "Cliphas vs Mopillow for Normal?",
        a: "Mopillow is the early Petal Pond Normal line. Cliphas is a seasonal boss-line mid form — later unlock, higher ceiling toward Clipexor.",
      },
      {
        q: "What hits Cliphas hard?",
        a: "Fighting is the clean super-effective answer into Normal. Pack Astraknight / Pummash-class Fighting when farming the line’s bosses.",
      },
    ],
  },
  clipexor: {
    metaTitle: "Clipexor Evomon — Clipdow Final Normal Evolution",
    metaDescription:
      "Clipexor is the Clipdow-line Normal final (Atk/Spe 110). Lunaria boss context, evolution path, and team use on evomon.cc.",
    location: "Evolve from Cliphas",
    weather: "Any",
    role: "Seasonal Normal final / Psychic-Dark answer",
    blurb:
      "Clipexor is the Normal final with community Attack 110 / Speed 110 — the form players actually want after Lunaria. Remember: Dark King Clipexor (boss) ≠ playable Clipexor typing. Use the evolved Normal form into Psychic/Dark pressure; respect Fighting leads. Evolve-only on our map data.",
    evolutionNote: "Clipdow → Cliphas → Clipexor. Final stage is evolve-from-Cliphas.",
    faqs: [
      {
        q: "Can you catch playable Clipexor from the boss?",
        a: "The Lunaria clear rewards Clipdow. Clipexor the party mon is the evolved final — separate from the Dark King boss encounter.",
      },
      {
        q: "What are Clipexor’s base stats?",
        a: "Community bases: HP 83, Attack 110, Defense 68, Sp. Atk 72, Sp. Def 76, Speed 110.",
      },
      {
        q: "When do you put Clipexor on the team?",
        a: "When Psychic or Dark walls are slowing clears and you already finished the Clipdow evolution project.",
      },
      {
        q: "Clipexor vs Clanxor?",
        a: "Different seasonal lines: Clipexor is Normal (Clipdow reward); Clanxor is Steel from Floating Island. Unlock and typing needs differ.",
      },
    ],
  },

  // ── Wispark line (dex #094–096 blocked — item 2) ──────────────────────
  wispark: {
    metaTitle: "Wispark Evomon — Solaris Boss Reward Seed",
    metaDescription:
      "Wispark opens Wisflare → Wispreign after Light King Wispreign on Solaris Isle. Catch route, Normal typing note, and stone plan on evomon.cc.",
    location: "Boss reward — Light King Wispreign on Solaris Isle (Seasonal)",
    weather: "Any",
    role: "Seasonal seed / Wispreign line",
    blurb:
      "Wispark is the Solaris Isle boss reward after Light King Wispreign — paired with Lunaria’s Clipdow as the other seasonal legend drop. Community dex lists the playable line as Normal (special-leaning Spe/SpA), even though the boss encounter is Light-framed. Bring Grass/Dragon answers like Tarragon for the boss clear, then evolve Wispark only when you want the Wispreign final, not as an early stone sink.",
    evolutionNote: "Wispark → Wisflare → Wispreign (3-stage). Confirm materials in-game after the boss reward.",
    shinyHuntNote: "Boss-reward shiny odds are volume-poor versus wild islands. Lock a keeper Talent before double-evolving.",
    faqs: [
      {
        q: "How do you get Wispark?",
        a: "Clear Light King Wispreign on Solaris Isle (Seasonal / World Select) and take the Wispark reward.",
      },
      {
        q: "Is Wispark Light-type?",
        a: "The boss is Light-framed; our dex follows community wiki primary typing for playable Wispark as Normal. Check the in-game sheet if a patch changes it.",
      },
      {
        q: "What does Wispark evolve into?",
        a: "Wispark → Wisflare → Wispreign.",
      },
      {
        q: "What are Wispark’s base stats?",
        a: "Community bases: HP 41, Attack 40, Defense 39, Sp. Atk 56, Sp. Def 37, Speed 58.",
      },
    ],
  },
  wisflare: {
    metaTitle: "Wisflare Evomon — Wispark Mid Evolution",
    metaDescription:
      "Wisflare is Wispark’s mid form toward Wispreign. Solaris boss-reward path, stats, and evolve timing on evomon.cc.",
    location: "Evolve from Wispark",
    weather: "Any",
    role: "Wispark mid form",
    blurb:
      "Wisflare bumps Sp. Atk/Speed after the Solaris reward. Same advice as other seasonal mids: do not evolve into a dead end — bank the final Wispreign stack before you spend the first stones if the final form is the goal.",
    evolutionNote: "Wispark → Wisflare → Wispreign.",
    faqs: [
      {
        q: "How do you get Wisflare?",
        a: "Evolve Wispark from the Solaris Isle boss reward.",
      },
      {
        q: "What are Wisflare’s base stats?",
        a: "Community bases: HP 57, Attack 54, Defense 55, Sp. Atk 78, Sp. Def 51, Speed 81.",
      },
      {
        q: "Wisflare vs Wispshade?",
        a: "Different lines. Wispshade is Nether Land Poison/Psychic (Wispuff). Wisflare is the seasonal Wispark mid form.",
      },
      {
        q: "Worth stopping at Wisflare?",
        a: "Only if stones are gated. The line’s payoff is Wispreign’s Sp. Atk/Speed final.",
      },
    ],
  },
  wispreign: {
    metaTitle: "Wispreign Evomon — Wispark Final Evolution",
    metaDescription:
      "Wispreign is the Wispark-line final (SpA 108 / Spe 114). Solaris boss context, evolution path, and team fit on evomon.cc.",
    location: "Evolve from Wisflare",
    weather: "Any",
    role: "Seasonal special final",
    blurb:
      "Wispreign is the special-leaning final (Sp. Atk 108, Speed 114) after the Solaris reward chain. Evolve-only. Do not confuse the Light King boss fight with the playable final’s Normal typing on our sheet — build and type-chart from the party mon, not the boss card.",
    evolutionNote: "Wispark → Wisflare → Wispreign.",
    faqs: [
      {
        q: "Is Wispreign catchable from the boss?",
        a: "The clear rewards Wispark. Wispreign is the evolved final on our data.",
      },
      {
        q: "What are Wispreign’s base stats?",
        a: "Community bases: HP 78, Attack 74, Defense 77, Sp. Atk 108, Sp. Def 70, Speed 114.",
      },
      {
        q: "Wispreign vs Clipexor?",
        a: "Both are seasonal finals from opposite legend bosses. Clipexor leans physical Normal; Wispreign leans special Normal. Unlock path differs (Lunaria vs Solaris).",
      },
      {
        q: "What beats Wispreign?",
        a: "As a Normal final on our sheet, Fighting is the standard super-effective answer — verify live typing if a patch adds Light.",
      },
    ],
  },

  // ── Clanx line (dex #100–101 blocked — item 2) ───────────────────────
  clanx: {
    metaTitle: "Clanx Evomon — Floating Island Steel Catch",
    metaDescription:
      "Clanx is the Floating Island Steel catch toward Clanxor. Seasonal unlock (~Lv 30), wild band, and tank role on evomon.cc.",
    location: "Floating Island (Seasonal · World Select)",
    weather: "Any",
    role: "Seasonal Steel seed / Clanxor tank",
    blurb:
      "Clanx is Floating Island’s Steel seed — same seasonal World Select unlock as Glowy’s island, different spawn. Community bases already lean wall (Defense 83 on the base form). Fire, Electric, and Fighting chunk it; Ice/Rock are where Steel pays off. Evolve toward Clanxor when you need the Dark-adjacent seasonal tank niche guides talk about — our primary typing stays Steel per wiki.",
    evolutionNote: "Clanx → Clanxor (2-stage). Level gates in community notes often mention high 60s–70s — confirm in-game.",
    shinyHuntNote: "Floating Island wild loops are better shiny volume than the Clanxor boss clear.",
    faqs: [
      {
        q: "Where do you catch Clanx?",
        a: "Floating Island via Seasonal / World Select (community unlock around account Lv 30).",
      },
      {
        q: "What does Clanx evolve into?",
        a: "Clanx → Clanxor. Some guides also list a Floating Island Clanxor boss as a separate fight.",
      },
      {
        q: "Is Clanx Steel/Dark?",
        a: "Our dex follows wiki primary typing: Steel. Seasonal write-ups often discuss Dark coverage on the line — check moves and the live pet sheet.",
      },
      {
        q: "What are Clanx’s base stats?",
        a: "Community bases: HP 51, Attack 63, Defense 83, Sp. Atk 55, Sp. Def 69, Speed 42.",
      },
    ],
  },
  clanxor: {
    metaTitle: "Clanxor Evomon — Floating Island Steel Final",
    metaDescription:
      "Clanxor is Clanx’s Steel final (Def 115) plus Floating Island boss context. Evolution, counters, and team use on evomon.cc.",
    location: "Floating Island wild/boss; or evolve Clanx",
    weather: "Any",
    role: "Seasonal Steel wall / island boss",
    blurb:
      "Clanxor is the Floating Island Steel wall (Defense 115) and the namesake ~Lv 195 boss on the same map. Catch/evolve Clanx for the party mon; treat the boss clear as a separate prep problem (Fire/Electric/Fighting leads). Primary typing on our sheet: Steel.",
    evolutionNote: "Clanx → Clanxor. Final form — no further stage on community data.",
    faqs: [
      {
        q: "How do you get Clanxor?",
        a: "Evolve Clanx from Floating Island, or engage the island’s Clanxor boss loop — party Clanxor and boss Clanxor are related but not the same prep checklist.",
      },
      {
        q: "What are Clanxor’s base stats?",
        a: "Community bases: HP 71, Attack 88, Defense 115, Sp. Atk 78, Sp. Def 96, Speed 60.",
      },
      {
        q: "Best types into Clanxor?",
        a: "Fire, Electric, and Fighting are the standard punches into Steel. Arcub/Lavite/Astraknight-class picks show up in seasonal boss guides.",
      },
      {
        q: "Clanxor vs Tinkore?",
        a: "Tinkore is the main-map Silent Sands Steel path. Clanxor is seasonal Floating Island — later unlock, different island tax.",
      },
    ],
  },
};
