import { petDetailsMapCombatBatch } from "./pet-details-map-combat-batch";
import { petDetailsSeason1Batch } from "./pet-details-season1-batch";
import { petDetailsLineFillBatch } from "./pet-details-line-fill-batch";
import { petDetailsExpeditionBatch } from "./pet-details-expedition-batch";

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
  /** Contextual internal links (species guides, map, egg path). Keep 1–3. */
  relatedLinks?: { href: string; label: string }[];
  /**
   * Page-specific FAQ answers. When set, replaces the shared FAQ template
   * so indexable pets do not all ask “What element is X?”.
   */
  faqs?: PetFaq[];
  /** Extra SERP keywords (misspellings, how-to-get phrases). Merged into dex metadata. */
  seoKeywords?: string[];
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
    relatedLinks: [
      { href: "/starters", label: "Starter comparison" },
      { href: "/dex/bubboxer", label: "Bubboxer" },
      { href: "/dex/bubblade", label: "Bubblade" },
    ],
    faqs: [
      {
        q: "Is Bubble the best Evomon starter?",
        a: "For most new accounts, yes — Water coverage clears Verdant Valley and softens early Lava Crag with fewer dead ends than Blazpup. Leafbun is the sustain/comfort pick, not the fastest clear.",
      },
      {
        q: "What does Bubble evolve into?",
        a: "Bubble → Bubboxer → Bubblade. Confirm stone/level gates in the in-game Evolve panel.",
      },
      {
        q: "Should I dump all Evolution Stones into Bubblade?",
        a: "No. Finish enough Water to clear early islands, then expect Clampip/Lavite (and later Bluebird) to take leftover stones.",
      },
      {
        q: "Bubble vs Blazpup vs Leafbun?",
        a: "Bubble = safest early route; Blazpup = Fire-first but slower Verdant; Leafbun = tankier sustain. See the starters page for the full comparison.",
      },
    ],
  },
  bubboxer: {
    metaTitle: "Bubboxer Evomon — Bubble Evolution & Water Matchups",
    metaDescription:
      "Bubboxer (#002) is Bubble’s mid Water evolution toward Bubblade. When to evolve, stone timing vs Clampip/Lavite, and early-island Water coverage.",
    location: "Evolve from Bubble",
    weather: "Any",
    role: "Mid water striker",
    blurb:
      "Bubboxer is the mid spike on the tutorial Water starter: Bubble → Bubboxer → Bubblade. Community bases sit in the low-60s across the board (HP 64 / Sp. Atk 66) with Rainveil in the trait pool — enough Water coverage to finish Verdant Valley and soft-open Lava Crag, not a forever DPS pick. Evolve when Bubble is stalling early bosses; do not empty your Evolution Stone stock here if Clampip or Lavite is already unlocked.",
    evolutionNote:
      "Bubble → Bubboxer → Bubblade. Treat both evolves as one early Water project, then expect Petal Pond Clampip and Lava Crag Lavite to take leftover stones.",
    relatedLinks: [
      { href: "/dex/bubble", label: "Bubble (starter)" },
      { href: "/dex/bubblade", label: "Bubblade (final)" },
      { href: "/starters", label: "Starter comparison" },
    ],
    faqs: [
      {
        q: "How do you get Bubboxer in Evomon?",
        a: "Evolve Bubble from the tutorial starter choice. It is evolve-only on our map data — not a separate wild catch.",
      },
      {
        q: "Should I evolve Bubble into Bubboxer right away?",
        a: "Yes if early islands are chewing your Water slot. Bubboxer is a bridge form — plan Bubblade as the line’s payoff, then stop heavy investment once Clampip/Lavite cover Fire routes.",
      },
      {
        q: "Bubboxer vs Clampip for Water stones?",
        a: "Bubble’s line wins the lab pick; Clampip → Clamspire usually wins the Petal Pond → Lava Crag water slot. Avoid funding Bubblade and Clamspire and Lavite in the same week.",
      },
      {
        q: "What are Bubboxer’s base stats?",
        a: "Community bases: HP 64, Attack 61, Defense 59, Sp. Atk 66, Sp. Def 60, Speed 59. Signature trait pool opens with Rainveil.",
      },
    ],
  },
  bubblade: {
    metaTitle: "Bubblade Evomon — Bubble Final Evolution Guide",
    metaDescription:
      "Bubblade (#003) finishes Bubble’s Water starter line (Sp. Atk 100). Evolution timing, when to bench for Clampip/Lavite, and type coverage.",
    location: "Evolve from Bubboxer",
    weather: "Any",
    role: "Final water starter evolution",
    blurb:
      "Bubblade closes the Bubble starter line with a Sp. Atk-leaning Water profile (community base Sp. Atk 100, Speed 91) and Rainveil access. It is a strong early Water closer if you committed at the lab, but July 2026 route notes still usually pivot leftover stones toward Clampip → Clamspire for Petal Pond Fire answers, then Lavite → Lavarock. Finish Bubblade when this line is still clearing your current island — not as a second full Water stone dump beside Clamspire.",
    evolutionNote:
      "Bubble → Bubboxer → Bubblade. Evolve the last step on a keeper Talent Bubboxer. Rock/Electric answers still check Water — keep coverage ready in the team builder.",
    relatedLinks: [
      { href: "/dex/bubble", label: "Bubble starter" },
      { href: "/dex/clamspire", label: "Clamspire (route water)" },
      { href: "/starters", label: "Starter guide" },
    ],
    faqs: [
      {
        q: "How do you get Bubblade?",
        a: "Evolve Bubboxer after Bubble. Evolve-only — there is no separate Bubblade wild spawn on our map sheet.",
      },
      {
        q: "Is Bubblade better than Clamspire?",
        a: "Different jobs. Bubblade is the starter-line payoff; Clamspire is the Petal Pond water catch/boss name many guides prefer for Lava Crag. Pick the one already in your party, then stop double-funding Water.",
      },
      {
        q: "When should I stop investing in Bubblade?",
        a: "Once Lavite or Bluebird is online and your Water slot is covered by Clamspire (or Bubblade still clears without more stones). Early Water wins the first islands; it should not own the whole stone budget.",
      },
      {
        q: "What are Bubblade’s base stats?",
        a: "Community bases: HP 86, Attack 81, Defense 78, Sp. Atk 100, Sp. Def 85, Speed 91.",
      },
    ],
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
      "Blazgrowl (#005) is Blazpup’s mid Fire evolution toward Blazmane. Stone timing vs Sparkit/Lavite, stats, and when to keep the starter line.",
    location: "Evolve from Blazpup",
    weather: "Any",
    role: "Mid fire striker",
    blurb:
      "Blazgrowl is the mid form on the Fire starter line: Blazpup → Blazgrowl → Blazmane. Community bases peak Attack 74 with Flamefiend in the trait pool — a bridge, not the endgame Fire answer. Evolve past Blazpup only if you locked Fire at the lab and still need damage before Lava Crag opens Sparkit/Lavite. Most accounts that picked Bubble still skip heavy Blazgrowl stones and catch route Fire instead.",
    evolutionNote:
      "Blazpup → Blazgrowl → Blazmane. Plan Blazmane as the line’s payoff if you committed; otherwise park stones for Sparkit → Empixy or Lavite → Lavarock.",
    relatedLinks: [
      { href: "/dex/blazpup", label: "Blazpup (starter)" },
      { href: "/dex/blazmane", label: "Blazmane (final)" },
      { href: "/dex/sparkit", label: "Sparkit (route Fire)" },
    ],
    faqs: [
      {
        q: "How do you get Blazgrowl?",
        a: "Evolve Blazpup from the tutorial Fire starter. Evolve-only on our map data.",
      },
      {
        q: "Blazgrowl vs Sparkit — who gets Evolution Stones?",
        a: "Sparkit (Lava Crag wild) usually wins practical early Fire coverage if you did not commit to Blazpup. Finish Blazgrowl → Blazmane only when the starter line is still your daily Fire slot.",
      },
      {
        q: "Should I evolve Blazgrowl into Blazmane?",
        a: "Yes if this line is still clearing content. Blazmane’s community Attack 105 is the physical payoff — see the Blazmane page for full stats and vs Lavite timing.",
      },
      {
        q: "What are Blazgrowl’s base stats?",
        a: "Community bases: HP 58, Attack 74, Defense 64, Sp. Atk 56, Sp. Def 55, Speed 62.",
      },
    ],
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
    metaTitle: "Mopebun Evomon — Evolution to Mopillow",
    metaDescription:
      "Mopebun (#016) evolves into Mopillow. Petal Pond Normal wild (~Lv 15–29): catch route, when to skip Evolution Stones, vs Clampip priority.",
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
        q: "What does Mopebun evolve into?",
        a: "Mopebun evolves into Mopillow. Confirm stone/level gates in-game before spending materials.",
      },
      {
        q: "Is Mopebun worth Evolution Stones?",
        a: "Usually no for long-term investment. Use Mopebun to progress Petal Pond, then prioritize Clampip water coverage and later Lavite/Bluebird stones over a Normal filler line.",
      },
      {
        q: "Mopebun vs Clampip on Petal Pond — which first?",
        a: "Catch both if you can. Clampip matters more for Lava Crag Fire matchups; Mopebun is the easier early wild for EXP and temporary slots.",
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
      "Pebble (#018) is a Verdant Valley Rock wild (~Lv 1–13) toward Pebgolem. Early tank value, Counter later in the line, and when Lavite takes the stones.",
    location: "Verdant Valley wild (~Lv 1–13)",
    weather: "Any",
    role: "Early rock tank",
    blurb:
      "Pebble is one of the first Verdant Valley catches community beginner videos tell you to keep: a Rock wall for early bosses that evolves Pebble → Pebroll → Pebgolem and unlocks Counter later in the line. Our map band places wild Pebble around Lv 1–13. Catch a practical Talent copy with basic balls; evolve when bulk is the bottleneck; then expect Lavite → Lavarock to own leftover stones after Lava Crag — ItzVexo-style notes call the line strong early/mid and replaceable late.",
    evolutionNote:
      "Pebble → Pebroll → Pebgolem. Push the line for Verdant walls; stop heavy investment once Lavarock is online. Full route notes: [Pebble guide](/blog/pebble-evomon-guide).",
    relatedLinks: [
      { href: "/blog/pebble-evomon-guide", label: "Pebble full guide" },
      { href: "/dex/pebroll", label: "Pebroll" },
      { href: "/dex/pebgolem", label: "Pebgolem" },
      { href: "/tier-list/early-carries", label: "Early carries" },
    ],
    faqs: [
      {
        q: "Where do you catch Pebble in Evomon?",
        a: "Verdant Valley wild spawns around Lv 1–13 on our map-zones chart — one of the first useful tank options for new accounts.",
      },
      {
        q: "What does Pebble evolve into?",
        a: "Pebble → Pebroll → Pebgolem. Confirm stone/level gates in-game before spending materials.",
      },
      {
        q: "Is Pebble worth Evolution Stones?",
        a: "Yes for early Verdant bosses when Rock bulk clears the wall in front of you. After Lava Crag, most July 2026 guides pivot leftover stones to Lavite → Lavarock.",
      },
      {
        q: "Does Pebble learn Counter?",
        a: "Community beginner guides (e.g. Purp) say the Pebble line unlocks Counter later — treat that as a line mechanic, and verify the live move list before rerolling.",
      },
      {
        q: "Pebble vs Lavite for long-term stones?",
        a: "Pebble solves early Rock walls; Lavite/Lavarock usually wins mid/late fire-tank ROI. Catch Pebble early, then reassess at Lava Crag.",
      },
    ],
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
      "Sparkit (#021) is a Lava Crag Fire wild (~Lv 30–43) toward Empixy. Blazpup alternative, stone timing vs Lavite, and shiny hunt notes.",
    location: "Lava Crag (wild ~Lv 30–43)",
    weather: "Any",
    role: "Early fire DPS",
    blurb:
      "Sparkit is the common reason Bubble starters skip Blazpup: a Lava Crag Fire wild (~Lv 30–43) that evolves Sparkit → Emfox → Empixy for early-to-mid Fire DPS. Keep it while Empixy (or the Lava Crag boss name overlap) still clears your Fire slot; once Lavite is online, most July 2026 lists give leftover Evolution Stones to Lavarock instead of finishing a second full Fire line.",
    evolutionNote:
      "Sparkit → Emfox → Empixy. Keep Sparkit as a fast early Fire option unless Lava Crag already has a stronger Fire/Rock carry (Lavite). See Empixy for final-form / boss-name notes.",
    shinyHuntNote:
      "Sparkit is a practical shiny target because encounters are fast on Lava Crag. Shiny speed bumps can matter, but prioritize a useful Talent roll before long pity sessions.",
    relatedLinks: [
      { href: "/blog/sparkit-evolution-vs-lavite", label: "Sparkit evolution vs Lavite" },
      { href: "/dex/empixy", label: "Empixy (final / boss name)" },
      { href: "/dex/lavite", label: "Lavite (stone priority)" },
      { href: "/blog/shiny-sparkit-evomon-guide", label: "Shiny Sparkit hunt" },
      { href: "/map-zones", label: "Map zones" },
    ],
    faqs: [
      {
        q: "Where do you catch Sparkit in Evomon?",
        a: "Lava Crag wild band around Lv 30–43 on our map data — the usual early Fire pickup if you skipped Blazpup.",
      },
      {
        q: "What does Sparkit evolve into?",
        a: "Sparkit → Emfox → Empixy. Confirm stone/level gates in-game before spending materials.",
      },
      {
        q: "Sparkit vs Lavite — who gets Evolution Stones?",
        a: "Sparkit covers early Fire DPS; Lavite → Lavarock usually wins long-term fire-tank ROI after the catch is online. Evolve Sparkit far enough to clear, then pivot stones.",
      },
      {
        q: "Is Sparkit good for shiny hunting?",
        a: "Yes as a volume hunt — Lava Crag wilds are faster than boss cycles. Prioritize a usable Talent before deep pity; boss Empixy shiny loops are a different farm.",
      },
    ],
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
    metaTitle: "Tarro Evomon — Murkwood Catch Toward Tarragon",
    metaDescription:
      "Tarro (#066) is a late Murkwood Grass wild (~Lv 140–150) toward Tarragon. Endgame grass/dragon tank line — when to invest after Lavite and Bluebird.",
    location: "Murkwood wild (~Lv 140–150)",
    weather: "Any",
    role: "Late grass/dragon tank seed",
    blurb:
      "Tarro opens the Tarragon grass/dragon wall line that community S-tier notes keep for self-sustain on long boss fights. It is a late Murkwood catch (~Lv 140–150) — not an early-island project. Evolution-priority tips group Tarro with Arcub/Frostlet: unlock it after Lavarock + Bluebird handle dailies, then invest when this boss answer is what you actually run.",
    evolutionNote:
      "Tarro → Tarragon. Save the stone for a keeper with usable Talent once Murkwood is unlocked. Do not dump early-route stones here while Verdant → Lava Crag still needs Rock/Fire carries.",
    shinyHuntNote:
      "Hunt shiny on deep-Murkwood Tarro wilds (faster than wild Tarragon), then evolve. Ice coverage shortens the Hard loop — full route: Shiny Tarro guide.",
    relatedLinks: [
      { href: "/blog/shiny-tarro-evomon-guide", label: "Shiny Tarro hunt guide" },
      { href: "/dex/tarragon", label: "Tarragon (final)" },
      { href: "/map-zones#murkwood", label: "Murkwood map" },
      { href: "/tier-list/evolution-priority", label: "Evolution priority" },
    ],
    faqs: [
      {
        q: "Where do you catch Tarro in Evomon?",
        a: "Murkwood wild spawns around Lv 140–150 on our map-zones list. You need late-game island progress — this is not a Verdant Valley catch.",
      },
      {
        q: "Is Tarro / Tarragon worth Evolution Stones?",
        a: "Yes as a late endgame grass/dragon tank once your daily clears are stable. Community S-tier notes highlight Tarragon’s sustain for long bosses; it is a poor place to spend your first stones.",
      },
      {
        q: "Should I hunt Tarro before Frostseer or Arcapex?",
        a: "Pick the late answer that matches the bosses you are stuck on. Evolution-priority notes list Arcub, Frostlet, and Tarro as strong but harder obtains — fund the one your team actually needs next.",
      },
      {
        q: "What does Tarro evolve into?",
        a: "Tarro evolves into Tarragon. Confirm stone/level requirements in-game before committing your best copy.",
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
      "Lavite (#052) is the Lava Crag Fire/Rock catch that evolves to Lavarock. Location, Counter wall value, shiny notes, and evolution-stone priority.",
    location: "Lava Crag (3rd island)",
    weather: "Any",
    role: "Fire carry + wall",
    blurb:
      "Lavite is the Lava Crag Fire/Rock catch July 2026 tier and evolution-priority lists keep near the top: easy to grab on the third island, stays relevant after evolving into Lavarock, and pairs bulk with Fire coverage for mid/late bosses. Check Talent and nature before locking your best copy — community tank guidance generally prefers HP/defense-up natures, but verify the live tooltip. Shiny hunting on Lavite is popular; a strong normal SSS copy is still worth evolving if waiting for shiny blocks progression.",
    evolutionNote:
      "Lavite evolves into Lavarock and is one of the clearest Evolution Stone priorities for mid-game teams. Check nature and Talent before committing your best copy.",
    shinyHuntNote:
      "Shiny Lavite is worth hunting because Lavarock stays useful in boss routes. Lava Crag is a beginner-friendly route once you can clear Fire/Rock spawns quickly with Water coverage.",
    relatedLinks: [
      { href: "/dex/lavarock", label: "Lavarock (final)" },
      { href: "/blog/shiny-lavite-evomon-guide", label: "Shiny Lavite guide" },
      { href: "/blog/best-nature-lavite-evomon", label: "Lavite natures" },
      { href: "/blog/sparkit-evolution-vs-lavite", label: "Sparkit evolution vs Lavite" },
      { href: "/tier-list/evolution-priority", label: "Evolution priority" },
    ],
    faqs: [
      {
        q: "Where do you catch Lavite in Evomon?",
        a: "Lava Crag (third island) wilds. It is the mid-game Fire/Rock pickup most progression guides flag after Petal Pond.",
      },
      {
        q: "What does Lavite evolve into?",
        a: "Lavite → Lavarock. Confirm stone/level requirements in-game before spending your best copy.",
      },
      {
        q: "Is Lavite worth Evolution Stones?",
        a: "Yes for most mid-game accounts — community lists treat Lavite → Lavarock as a primary fire-tank stone sink once the catch is online.",
      },
      {
        q: "Lavite vs Sparkit / Blazpup for Fire?",
        a: "Sparkit/Blazpup cover earlier Fire DPS; Lavite usually wins long-term stone priority for the Fire/Rock wall after Lava Crag opens.",
      },
    ],
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
    metaTitle: "Arcub Evomon — Electric Line Toward Arcapex",
    metaDescription:
      "Arcub (#070) opens the Arcapex Electric line on the Funder Cliff / Thunder Cliffs route. Evolution, AOE role, and shiny-egg notes.",
    location: "Funder Cliff / Thunder Cliffs electric route",
    weather: "Any",
    role: "Electric AOE seed",
    blurb:
      "Arcub is the base form of the late Electric AOE line that evolves into Arcapex — the Thunder Cliffs Lv 200 boss name on our map sheet. Community tier lists call the evolved line a wave-clear staple once you can farm the cliff route reliably; Arcub itself is the Talent-safe seed, not the end payoff. Site and creator notes also use “Funder Cliff” for the same electric boss corridor — naming varies, the Arcapex evolve target does not.",
    evolutionNote:
      "Arcub → Arcapex. Evolve a keeper with usable Talent when Electric AOE is a real party slot. Exact stone/level gates: confirm in the in-game Evolve panel.",
    relatedLinks: [
      { href: "/dex/arcapex", label: "Arcapex (final / boss)" },
      { href: "/blog/shiny-arcapex-evomon-guide", label: "Shiny Arcapex guide" },
      { href: "/map-zones#thunder-cliffs", label: "Thunder Cliffs map" },
    ],
    faqs: [
      {
        q: "Where do you get Arcub in Evomon?",
        a: "Community progression and tier notes place Arcub on the Funder Cliff / Thunder Cliffs electric boss route. Unlock that late corridor before planning the hunt — it is not an early-island wild.",
      },
      {
        q: "What does Arcub evolve into?",
        a: "Arcub → Arcapex. Arcapex is also listed as the Thunder Cliffs Lv 200 boss on our map-zones sheet.",
      },
      {
        q: "Is Arcub worth Evolution Stones?",
        a: "Yes when Electric AOE is what your late team needs. Evolution-priority notes group Arcub with Frostlet/Tarro as strong but harder obtains — fund it after Lavite/Bluebird dailies are stable.",
      },
      {
        q: "Can I pity-hunt Shiny Arcub?",
        a: "Community shiny guides group the Arcapex line with boss lines that often lack field shiny pity. Check the live odds panel on an Arcub encounter; the documented flex route is still the Thunder Cliffs shiny-egg farm — see the Shiny Arcapex guide.",
      },
      {
        q: "What are Arcub’s base stats?",
        a: "Community bases: HP 65, Attack 82, Defense 62, Sp. Atk 64, Sp. Def 50, Speed 77. Trait pool includes Charge among standouts.",
      },
    ],
  },
  arcapex: {
    metaTitle: "How to Get Arcapex Evomon — Thunder Cliffs & Evolve",
    metaDescription:
      "Get Arcapex by evolving Arcub or farming the Thunder Cliffs Lv 200 boss. Electric AOE stats, stone timing, and shiny-egg route (no field pity) on evomon.cc.",
    location: "Evolve from Arcub; Thunder Cliffs boss (Lv 200)",
    weather: "Any",
    role: "AOE burst / electric boss",
    seoKeywords: [
      "arcapex evomon",
      "how to get arcapex",
      "how to get arcapex evomon",
      "arcapex location",
      "thunder cliffs arcapex",
      "arcapex evolution",
    ],
    blurb:
      "How to get Arcapex: evolve a keeper Arcub, and/or fight the Thunder Cliffs Lv 200 Arcapex boss — same name, two loops. It is why Arcub stays on late-game lists: Electric wave-clear with community bases Attack 115 / Speed 108 and Charge in the trait pool. Evolve when AOE is the bottleneck; for shiny flex, community guides (ImSoaren / 2kane) say this boss has no field shiny pity — repeated successful catches for a Shiny Arcapex Egg are the documented route.",
    evolutionNote:
      "Arcub → Arcapex. Evolve when this line is a real party slot. Prefer usable Talent before the stone; a strong normal copy still clears content while shiny-egg RNG runs.",
    shinyHuntNote:
      "No field shiny pity on the Thunder Cliffs boss per community guides. Catch the Lv 200 boss successfully until a Shiny Arcapex Egg drops — full loop on the Shiny Arcapex guide.",
    relatedLinks: [
      { href: "/map-zones#thunder-cliffs", label: "Thunder Cliffs map zone" },
      { href: "/dex/arcub", label: "Arcub (base)" },
      { href: "/blog/shiny-arcapex-evomon-guide", label: "Shiny Arcapex guide" },
    ],
    faqs: [
      {
        q: "How do you get Arcapex in Evomon?",
        a: "Two routes: evolve Arcub with Evolution Stones when the line is a party slot, or fight/catch the Thunder Cliffs Lv 200 Arcapex boss on our map-zones list. Boss cycles and your evolved copy share the name but are different loops.",
      },
      {
        q: "Where is Arcapex located?",
        a: "Wild/boss: Thunder Cliffs Lv 200. Party copy: evolve from Arcub. Confirm the live zone list in-game after map patches.",
      },
      {
        q: "Is Arcapex worth Evolution Stones?",
        a: "Yes as a late Electric AOE closer once you can farm the cliff route. It is a poor first-stone target while Verdant → Lava Crag still needs Rock/Fire carries.",
      },
      {
        q: "Does Arcapex have shiny pity?",
        a: "Community shiny guides list the Thunder Cliffs Arcapex boss as having no field shiny pity. The shiny-egg catch farm is the documented path — details on our Shiny Arcapex guide.",
      },
      {
        q: "What are Arcapex’s base stats?",
        a: "Community bases: HP 90, Attack 115, Defense 87, Sp. Atk 91, Sp. Def 69, Speed 108.",
      },
      {
        q: "Arcub vs Arcapex — which do I keep?",
        a: "Keep the best Talent Arcub as the evolve seed; Arcapex is the combat payoff and boss name. Do not dual-fund mid and final as separate stone projects.",
      },
    ],
  },
  wispuff: {
    typesDisplay: "Poison / Psychic",
    metaTitle: "Wispuff Evomon — Nether Land Poison Line Start",
    metaDescription:
      "Wispuff (#082) starts Wispuff → Wispshade → Wisphex. Nether Land wild (~Lv 156–160), dual Poison/Psychic, and stone plan toward Wisphex.",
    location: "Nether Land wild (~Lv 156–160)",
    weather: "Any",
    role: "Poison line base",
    blurb:
      "Wispuff opens the late Poison/Psychic status line that community tier lists keep near the top once Nether Land is unlocked: Wispuff → Wispshade → Wisphex. Our map sheet places wild Wispuff around Lv 156–160 in Nether Land (zone 14). Catch a Talent-safe copy here, then push toward Wisphex — mid forms are bridges. Dual Poison/Psychic typing matches the rest of the line on our combat sheet.",
    evolutionNote:
      "Wispuff → Wispshade → Wisphex. Trait pool includes Evolve among standouts. Confirm stone/level gates in-game before spending the keeper.",
    relatedLinks: [
      { href: "/dex/wispshade", label: "Wispshade (mid)" },
      { href: "/dex/wisphex", label: "Wisphex (final)" },
      { href: "/map-zones#nether-land", label: "Nether Land map" },
    ],
    faqs: [
      {
        q: "Where do you catch Wispuff in Evomon?",
        a: "Nether Land wild spawns around Lv 156–160 on our map-zones chart — late-game, not an early island.",
      },
      {
        q: "What does Wispuff evolve into?",
        a: "Wispuff → Wispshade → Wisphex. Wisphex is the line’s endgame Poison/Psychic core.",
      },
      {
        q: "Is Wispuff Poison/Psychic?",
        a: "Yes — dual typing on our sheet for Wispuff, Wispshade, and Wisphex (community wiki aligned).",
      },
      {
        q: "Is Wispuff worth Evolution Stones?",
        a: "Fund the line when you need late status pressure and Nether Land is open. It is a weak place to spend your first stones while Lavite/Bluebird still carry dailies.",
      },
      {
        q: "What are Wispuff’s base stats?",
        a: "Community bases: HP 37, Attack 44, Defense 40, Sp. Atk 48, Sp. Def 34, Speed 56 — expect the stats to jump through Wispshade into Wisphex.",
      },
    ],
  },
  wisphex: {
    typesDisplay: "Poison / Psychic",
    metaTitle: "Wisphex Evomon — Poison Evolution & Tier Role",
    metaDescription:
      "Wisphex (#084) finishes Wispuff → Wispshade. Nether Land Poison/Psychic core, stats (Speed 109), and when the line earns Evolution Stones.",
    location: "Evolve from Wispshade",
    weather: "Any",
    role: "Poison / Psychic core",
    blurb:
      "Wisphex is the payoff for the Nether Land Wispuff line: dual Poison/Psychic with community bases Sp. Atk 95 / Speed 109 and Evolve in the trait pool. Evolve-only from Wispshade on our sheet — farm Wispuff/Wispshade wilds (~Lv 156–160) for keepers, then finish Wisphex when status pressure is a real boss answer. Ground and Psychic-class checks still matter; verify live matchups in the type chart before locking the slot.",
    evolutionNote:
      "Wispuff → Wispshade → Wisphex. Push the last evolve on a keeper Talent mid form — mid stages are bridges, not separate stone sinks.",
    relatedLinks: [
      { href: "/dex/wispuff", label: "Wispuff (base)" },
      { href: "/dex/wispshade", label: "Wispshade (mid)" },
      { href: "/type-chart", label: "Type chart" },
    ],
    faqs: [
      {
        q: "How do you get Wisphex?",
        a: "Evolve Wispshade after Wispuff (Nether Land). Evolve-only on our combat location notes.",
      },
      {
        q: "Is Wisphex good in the meta?",
        a: "Community tier lists commonly keep the Wispuff line near the top for late Poison/Psychic status pressure once Nether Land is reachable.",
      },
      {
        q: "Wisphex vs Wispshade — which form do I play?",
        a: "Wisphex is the endgame core. Evolve through Wispshade; do not park long-term stones on the mid form.",
      },
      {
        q: "What are Wisphex’s base stats?",
        a: "Community bases: HP 74, Attack 86, Defense 78, Sp. Atk 95, Sp. Def 68, Speed 109.",
      },
    ],
  },
  astraknight: {
    metaTitle: "Astraknight Evomon — Battle Pass Fighting Closer",
    metaDescription:
      "Astraknight (#088) is a Battle Pass Fighting closer (Atk 108). Obtain path, stats, vs Pummash, and when it earns a team slot — not a wild catch.",
    location: "Battle Pass reward (not a wild route)",
    weather: "Any",
    role: "Fighting carry / pass obtain",
    blurb:
      "Astraknight is a late Fighting physical closer with community bases Attack 108 / Defense 94 and BattleSpirit in the trait pool. Combat data marks obtain as Battle Pass — not a map-zone wild. Use it when you already own the pass copy and need Fighting answers into Normal/Rock/Steel matchups; do not plan a Verdant-style catch route. Compare against Pummash (Dusk Town Pummpaw final) if you need a wild Fighting line instead.",
    evolutionNote:
      "No public multi-stage evolution line on our dex sheet — Astraknight is listed as its own Fighting entry. Confirm any live pass track text in-game; seasons change.",
    relatedLinks: [
      { href: "/dex/pummash", label: "Pummash (wild Fighting)" },
      { href: "/type-chart", label: "Type chart" },
      { href: "/team-builder", label: "Team builder" },
    ],
    faqs: [
      {
        q: "Where do you catch Astraknight in Evomon?",
        a: "You do not — community combat data lists Astraknight as a Battle Pass obtain, not a wild map spawn. Check the current pass track in your client.",
      },
      {
        q: "Is Astraknight worth building?",
        a: "Yes if you already have the pass copy and need a Fighting closer. It is not a progression catch you farm on early islands.",
      },
      {
        q: "Astraknight vs Pummash?",
        a: "Both Fighting. Pummash is the Dusk Town Pummpaw final (wild/evolve path); Astraknight is the Battle Pass Fighting pick — use whichever you actually own for the fight you are stuck on.",
      },
      {
        q: "What are Astraknight’s base stats?",
        a: "Community bases: HP 88, Attack 108, Defense 94, Sp. Atk 50, Sp. Def 80, Speed 90.",
      },
    ],
  },
  ...petDetailsMapCombatBatch,
  ...petDetailsSeason1Batch,
  ...petDetailsLineFillBatch,
  ...petDetailsExpeditionBatch,
};
