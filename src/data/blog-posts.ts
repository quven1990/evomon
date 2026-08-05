export type BlogSource = {
  label: string;
  url: string;
  channel?: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: {
    title: string;
    body: string;
    variant: "tip" | "warn" | "note";
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  /** GSC queries this post targets — used by topic dedup workflow. */
  gscTargets: string[];
  /** Existing guide paths this post supplements (not replaces). */
  relatedGuides: string[];
  quickAnswer: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  sources: BlogSource[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wispark-evomon-guide",
    title: "Wispark Evomon Guide — How to Get & Evolve (Solaris Isle)",
    description:
      "Get Wispark by beating Light King Wispreign on Solaris Isle. Wispark → Wisflare → Wispreign, Normal playable typing vs Light boss, and stone timing.",
    published: "2026-08-05",
    gscTargets: [
      "wispark evomon",
      "how to get wispark",
      "how to get wispark evomon",
      "wispark evolution",
      "wispark egg evomon",
      "wispreign evomon",
      "how to get wispreign",
      "light king wispreign",
      "solaris isle evomon",
    ],
    relatedGuides: [
      "/dex/wispark",
      "/dex/wisflare",
      "/dex/wispreign",
      "/dex/clipdow",
      "/blog/clipdow-evomon-guide",
      "/type-chart",
      "/guides/mutations/shiny-egg",
      "/tier-list/evolution-priority",
      "/blog/shiny-tarro-evomon-guide",
    ],
    quickAnswer:
      "**Wispark** is the **Solaris Isle** Seasonal reward after **Light King Wispreign** — not a main-map wild. Claim the seed, then evolve **Wispark → Wisflare → Wispreign**. The boss is **Light**; community dex lists the playable line as **Normal** (special-leaning). Community guides lean **Tarragon** (Grass/Dragon) for the clear. Final form bases peak **SpA 108 / Spe 114**.",
    sections: [
      {
        heading: "Wispark vs Wispreign — seed vs final",
        paragraphs: [
          "Google often lands **wispark evomon** on the [Wispreign](/dex/wispreign) page because the boss shares the final’s name. The clear rewards **Wispark** (lesser evolution). **Wispreign** is what you evolve into afterward — same naming trap as Dark King Clipexor vs playable Clipexor on Lunaria.",
        ],
        callout: {
          title: "Name check",
          body: "Light King Wispreign = boss fight. Wispark = party seed you keep. Wispreign (playable) = evolved final. Do not skip the seed page when you search “how to get Wispark.”",
          variant: "note",
        },
      },
      {
        heading: "How to get Wispark on Solaris Isle",
        paragraphs: [
          "Season 1 unlocks **Seasonal Island** from **World Select** once you meet the account gate community guides put around **Lv 30**. Open the map → World Select → Seasonal Island → teleport to **Solaris Isle**, then enter the **Light King Wispreign** fight.",
          "Gamezebo’s Dark/Light Season-1 walkthrough and Sportskeeda / AllThings.How boss routes agree: after you defeat the Light King, you get a shot at **Wispark** (catch of the lesser evolution). AllThings.How also flags this as limited-time Season-1 content — confirm the live seasonal window in your client before a long grind.",
        ],
        bullets: [
          "**Unlock** — Seasonal Island via World Select (community ~account Lv 30).",
          "**Island** — Solaris Isle (Light King Wispreign).",
          "**Reward** — Wispark seed for the Normal special line.",
          "**Twin** — Lunaria’s Clipdow is the Dark-side counterpart — [Clipdow guide](/blog/clipdow-evomon-guide).",
        ],
      },
      {
        heading: "Boss typing ≠ party typing",
        paragraphs: [
          "Light King Wispreign is a **Light** boss. Playable **Wispark / Wisflare / Wispreign** are listed as **Normal** on community dex sheets (and on ours). Build the party mon from the Normal sheet, not the boss card.",
          "Community boss guides say Light is weak to **Grass, Ice, and Psychic**. Keep party members alive — several write-ups note the boss’s skill damage scales when your monsters faint. On the [Type Chart](/type-chart), Normal still takes **2× from Fighting** once the playable line is on your team.",
        ],
        callout: {
          title: "Community clear pick: Tarragon",
          body: "Gamezebo and Sportskeeda both lean Tarragon (Grass/Dragon from Murkwood Tarro) for attrition — Seed Bomb sustain + Leaf Storm / Verdant Beam damage. Glacitadel / Chitaladin-class answers appear as backups. Verify levels and moves in-client; older posts spell the pet “Terragon.”",
          variant: "tip",
        },
      },
      {
        heading: "How players solo Light King Wispreign (community clears)",
        paragraphs: [
          "The most-shared clear on YouTube is a **Tarragon** attrition loop. In yao’s **How to BEAT Clipexor and Wispreign SOLO** walkthrough, the order is: open **10× Seed Bomb** to stack **Growth** (each stack restores ~8% max HP per turn, caps at 10 ≈ 80%/turn), then **Fighting Will** ×6 (or Fighting Will II ×4) to reach roughly **+30 Sp. Atk (≈300%)**, then alternate **Leaf Storm** and **Verdant Beam**. He runs an **SSS** Tarragon around **Lv 150–180** and stacks into **HP / Sp. Def / Sp. Atk** because both Legend Kings hit special.",
          "HomieRaf’s **FASTEST SOLO METHOD** shows an Ice alternative: a special-attack **Frostella** using **Fighting Will → Giga Drain** to sustain while chipping the Light boss. Either way, the boss is **immune to abnormal status and stat reduction** (you cannot sleep or debuff it), so pure damage + self-heal is the pattern.",
        ],
        callout: {
          title: "Watch the enrage",
          body: "Community clips (yao) show Wispreign’s ultimate Sacred Baptism scaling Light skill power the longer the fight drags — kill it before the stacks pile up. Each boss ultimate can also chip ~25% max HP, so a weaker Tarragon should skip Leaf Storm and grind safe with Verdant Beam. Verify moves/levels in your own client.",
          variant: "warn",
        },
        bullets: [
          "**Trait that carries** — Prime Form (−60% damage at full HP) per yao; Tough Skin as the epic fallback.",
          "**Catch after the clear** — beat the boss, then use your best Catcher on Wispark (community shows shiny **pity on the eggs**, so keep clearing).",
          "**First-clear reward** — HomieRaf’s run shows ~**18 large fruit** plus a Talent/nature roll; grind special-attack gear from Equipment Dungeon zone 1.",
        ],
      },
      {
        heading: "Evolution: Wispark → Wisflare → Wispreign",
        paragraphs: [
          "The line is three stages. Confirm stone and level gates on the in-game Evolve panel before dumping stock — Season-1 costs can shift.",
          "Plan both evolves as one project after Solaris. Stopping forever on Wisflare leaves a Seasonal unlock underleveled. Dex pages: [Wispark](/dex/wispark), [Wisflare](/dex/wisflare), [Wispreign](/dex/wispreign).",
        ],
        bullets: [
          "**Wispark** — base seed (community: HP 41 / SpA 56 / Spe 58).",
          "**Wisflare** — mid form (HP 57 / SpA 78 / Spe 81).",
          "**Wispreign** — final (HP 78 / SpA 108 / Spe 114) — special-leaning ceiling.",
        ],
      },
      {
        heading: "When the line earns a team slot",
        paragraphs: [
          "Use Wisflare/Wispreign when you want a **special Normal** seasonal final and you already finished the stone project. It is a poor place to spend your first Evolution Stones while Verdant → Lava Crag still needs Rock/Fire carries — see [Evolution Priority](/tier-list/evolution-priority).",
          "Compared with Lunaria’s [Clipexor](/dex/clipexor) (physical Normal), Wispreign leans **Sp. Atk / Speed**. Unlock path differs (Solaris vs Lunaria); fund the boss you can actually clear.",
        ],
      },
      {
        heading: "Shiny and “wispark egg” searches",
        paragraphs: [
          "Boss-reward loops are slower shiny volume than wild farms. Prioritize a usable Talent Wispark before double-evolving. Field shiny ID still uses the KO → smoke checklist — [How to Know If an Evomon Is Shiny](/blog/how-to-know-if-evomon-is-shiny).",
          "Some players search **wispark egg**. We do not invent a Wispark-only egg rate. For boss-adjacent shiny eggs, use the general [Shiny Egg Guide](/guides/mutations/shiny-egg) and [egg chance post](/blog/evomon-shiny-egg-chance), then verify whether your Wispark encounters show a pity panel in-client.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you get Wispark in Evomon?",
        a: "Unlock Seasonal Island (community ~Lv 30), go to Solaris Isle, defeat Light King Wispreign, and claim/catch the Wispark reward. It is not a standard main-map wild.",
      },
      {
        q: "Is Wispreign catchable from the boss?",
        a: "The clear rewards Wispark. Wispreign is the evolved final on our data — evolve Wispark → Wisflare → Wispreign.",
      },
      {
        q: "Is playable Wispark Light-type like the boss?",
        a: "No. Light King Wispreign is Light; community dex data lists the playable Wispark line as Normal.",
      },
      {
        q: "What does Wispark evolve into?",
        a: "Wispark → Wisflare → Wispreign. Confirm stone/level requirements in the Evolve UI before spending materials.",
      },
      {
        q: "What are Wispreign’s base stats?",
        a: "Community bases for the final form: HP 78, Attack 74, Defense 77, Sp. Atk 108, Sp. Def 70, Speed 114.",
      },
      {
        q: "Wispark vs Clipdow?",
        a: "Twin Seasonal seeds: Wispark from Solaris (Light King), Clipdow from Lunaria (Dark King). Both playable lines are Normal on our sheet; finals lean special vs physical.",
      },
      {
        q: "What is a Wispark egg in Evomon?",
        a: "Searches for “wispark egg” usually mean a species egg or shiny-egg drop tied to that line. We do not invent a Wispark-only egg rate — use the Shiny Egg Guide and check pity/odds in-client.",
      },
    ],
    sources: [
      {
        label: "yao — How to BEAT Clipexor and Wispreign SOLO (Tarragon Seed Bomb / Growth loop, boss mechanics)",
        url: "https://www.youtube.com/watch?v=Ka95SJrYIqI",
        channel: "yao",
      },
      {
        label: "HomieRaf — FASTEST SOLO METHOD for Light King Wispreign (Frostella build, rewards, egg pity)",
        url: "https://www.youtube.com/watch?v=58cGeVjNsas",
        channel: "HomieRaf",
      },
      {
        label: "Rexon — Obtaining the NEW OP SEASONAL EVOMON (Solaris/Lunaria/Floating islands, ~18k boss HP, catch-after-clear)",
        url: "https://www.youtube.com/watch?v=gNmSrHEruW4",
        channel: "Rexon",
      },
      {
        label: "Gamezebo — Dark and Light Season 1 (Seasonal unlock, catch Wispark after Light King)",
        url: "https://www.gamezebo.com/walkthroughs/evomon-dark-and-light/",
      },
      {
        label: "Sportskeeda — Light King Wispreign guide (Solaris path, Light typing, Tarragon clear)",
        url: "https://www.sportskeeda.com/roblox-news/evomon-light-king-wispreign-guide",
      },
    ],
  },
  {
    slug: "shiny-tarro-evomon-guide",
    title: "Shiny Tarro Evomon Guide — Murkwood Hunt Toward Tarragon",
    description:
      "Farm Shiny Tarro at Murkwood’s end (~Lv 140–150). Ice for 4× Grass, faster Tarro loops, then evolve into Tarragon — the late Grass/Dragon tank.",
    published: "2026-07-31",
    gscTargets: [
      "shiny tarro evomon",
      "evomon shiny tarro",
      "tarro shiny evomon",
      "tarro evomon shiny",
      "evomon tarro shiny",
      "shiny taro evomon",
      "shiny tarro",
      "shiny tarragon evomon",
      "evomon tarragon shiny",
      "how to get shiny tarro in evomon",
    ],
    relatedGuides: [
      "/dex/tarro",
      "/dex/tarragon",
      "/map-zones#murkwood",
      "/guides/mutations",
      "/blog/how-to-know-if-evomon-is-shiny",
      "/blog/evomon-pity-system-explained",
      "/blog/what-does-shiny-do-evomon",
      "/tier-list/evolution-priority",
      "/type-chart",
      "/blog/shiny-arcapex-evomon-guide",
    ],
    quickAnswer:
      "To hunt **Shiny Tarro in Evomon**, unlock **Murkwood**, push to the **far end of the island**, and farm the **Tarro / Tarragon** wild band (~**Lv 140–150** on our map). Bring **Ice** (community: Frostseer / Glacitadel-class) — the line is **4× weak to Ice**. KO each Tarro, check the post-KO smoke reveal, and prefer a usable **Talent** keeper before evolving **Tarro → Tarragon**. Shiny adds stats; Prismatic alone does not.",
    sections: [
      {
        heading: "Where to hunt Shiny Tarro",
        paragraphs: [
          "Tarro is a **late Murkwood** wild — not an early-island farm. NerdPurp’s get-Tarro route and 2kane Unleashed’s shiny priority list both send you to **Murkwood** and tell you to walk **all the way to the end of the map**, where **Tarros and Tarragons** share the spawn pocket. Our [Map Zones](/map-zones#murkwood) sheet puts that band around **Lv 140–150**.",
          "AR3ZY’s Tarragon speed clear stresses hunting **Tarro (first form)** when you can: lower HP than wild Tarragon, same island, faster KO loops for shiny checks. Dex pages: [Tarro](/dex/tarro) and [Tarragon](/dex/tarragon).",
        ],
        callout: {
          title: "Route answer",
          body: "Murkwood → deep end of the island → Tarro/Tarragon pocket. If fights drag past a minute, you are underleveled or missing Ice — fix coverage before a long shiny session.",
          variant: "tip",
        },
      },
      {
        heading: "Why Tarro is a Hard shiny (and still worth it)",
        paragraphs: [
          "Our [Mutations](/guides/mutations) hunt table lists **Tarro / Tarragon** as **Hard**: Leech Seed / healing kits make wild Tarro slow unless you overlevel or bring a party. 2kane still ranks **shiny Tarragon** among the shinies worth grinding because the final form’s sustain (Seed Bomb / Fighting Will-style kits in creator footage) is what many players use to **solo late Thunder Cliffs pressure** — including Arcapex clears once the kit is online.",
          "That is an **endgame project**. Evolution-priority notes group Tarro with Arcub/Frostlet: unlock after **Lavarock + Bluebird** handle dailies, then fund the late answer you actually need. Do not burn your first Evolution Stones here.",
        ],
        bullets: [
          "**Hard loop** — healing wilds punish weak teams; Ice shortens every check.",
          "**S-tier payoff** — community lists keep Tarragon as a late Grass/Dragon sustain tank.",
          "**Hunt base form** — shiny volume is easier on Tarro wilds, then evolve (same note on our Tarragon dex).",
          "**Shiny = stats** — Prismatic/Sparkle alone is cosmetic; see [What Does Shiny Do](/blog/what-does-shiny-do-evomon).",
        ],
      },
      {
        heading: "Coverage: Ice is the clear button",
        paragraphs: [
          "NerdPurp calls Tarragon **quadra weak to Ice** and recommends **Frostseer** (or another Ice) for the Murkwood farm. That matches our [Type Chart](/type-chart) island note: Ice deals **4×** into Grass on Murkwood Tarro fights. AR3ZY’s clear combo layers **Volcrest Electrify stacks** into a **Glacitadel** frost kit (Frostbite → Frigid Force) — use it if those mons are already built; otherwise any reliable Ice answer is enough.",
          "Hicko’s “Tarro farm for noobs” clip shows a **Lavarock** loop many mid/late accounts already own: **Wildfire twice → Fatal Rebound → Sandstorm** to chop Tarro HP fast. Treat that as a **clear-speed** tip for people who lack a dedicated Ice mon — not as a replacement for reading Tarro’s own shiny/pity counters in-client.",
        ],
        callout: {
          title: "Pity still follows captures",
          body: "General shiny rules (ImSoaren): odds + pity sit bottom-left while the mon is alive; **successful captures** advance that species’ pity. Do not invent Tarro-only rates — read the live panel. Smoke-reveal ID: [How to Know If an Evomon Is Shiny](/blog/how-to-know-if-evomon-is-shiny).",
          variant: "warn",
        },
      },
      {
        heading: "Shiny check loop on Tarro",
        paragraphs: [
          "Same field loop as other wilds: **defeat Tarro → wait for the smoke reveal → read Shiny / Prismatic overlays**. You cannot see shiny mid-fight. If you are also chasing Shiny Prismatic, park Prismatic pity one below guarantee (often **149** on a 150-pity species) and only capture on a shiny reveal — full steps on [Pity System Explained](/blog/evomon-pity-system-explained).",
          "Mikey KT’s catch video (title-level confirmation) shows players do land **shiny Tarro** and evolve the line; we could not pull stable captions under rate limits, so we do not invent session length or ball counts from that clip.",
        ],
        bullets: [
          "**KO → smoke → decide** — catch only keepers with usable Talent.",
          "**Ball plan** — King Ball for Talent goals; Prismatic Ball only if you want cosmetics and are not using pity for Prismatic.",
          "**Spelling** — GSC also shows **shiny taro**; in-game name is **Tarro** (final **Tarragon**, not Terragon).",
        ],
      },
      {
        heading: "After the catch: Tarro → Tarragon",
        paragraphs: [
          "Dex order is **Tarro (#066) → Tarragon (#067)** — Grass/Dragon on our sheets. Community bases for Tarragon peak around **HP 87 / Atk 90 / Spe 100** (bulky wall with usable Speed). Confirm Evolution + element stone costs in the Evolve UI before pressing — we do not invent exact counts here.",
          "2kane’s framing: shiny **Tarragon** is the combat goal (solo tools into late bosses). Evolving a junk-Talent shiny wastes the Murkwood grind — keep farming until Talent is acceptable, or park a strong normal SSS Tarro for stones while the shiny hunt continues.",
        ],
        callout: {
          title: "Stone budget",
          body: "A Shiny Tarro is a keeper for late sustain. Scarce stones should still follow [Evolution Priority](/tier-list/evolution-priority) — Lavite/Bluebird dailies first, then this line when Murkwood bosses are the bottleneck.",
          variant: "note",
        },
      },
      {
        heading: "Quick checklist before a Shiny Tarro session",
        bullets: [
          "Murkwood unlocked; team comfortable in the Lv 140–150 band.",
          "Ice coverage ready (Frostseer / Glacitadel-class) — or a proven Lavarock clear loop.",
          "Ball stock + codes topped up before a multi-hour pity grind.",
          "Decide: plain shiny keeper vs 149-park Shiny Prismatic project.",
          "Stone budget reserved for Tarro → Tarragon on a usable Talent copy.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do you find Shiny Tarro in Evomon?",
        a: "Same place as normal Tarro — deep Murkwood at the end of the island, around Lv 140–150 with Tarragon. Shiny status rolls per encounter and shows after the KO smoke reveal.",
      },
      {
        q: "Is Shiny Tarro / Tarragon worth hunting?",
        a: "Yes as a late endgame Grass/Dragon sustain project once dailies are stable. Creators rank shiny Tarragon highly for long boss timers; it is a poor early shiny farm compared with Sparkit or Lavite.",
      },
      {
        q: "What is Tarro weak to when shiny hunting?",
        a: "Ice hits the Grass/Dragon line for 4×. Community routes lean Frostseer or other Ice; some players clear with Lavarock kits if Ice is missing.",
      },
      {
        q: "Should I shiny hunt Tarro or wild Tarragon?",
        a: "Prefer Tarro wilds for faster KO loops, then evolve. Wild Tarragon is the same band but usually slower per check.",
      },
      {
        q: "Is shiny taro the same as shiny Tarro?",
        a: "Yes — taro is a common misspelling. The in-game name is Tarro; the final evolution is Tarragon.",
      },
      {
        q: "Does Tarro have shiny pity?",
        a: "Wild Tarro uses the standard field shiny/prismatic panels and per-species pity advanced by captures. Read Tarro’s own counters in-client — do not copy another species’ thresholds.",
      },
    ],
    sources: [
      {
        label: "NerdPurp — How to Get Tarro & Tarragon in Roblox Evomon",
        url: "https://www.youtube.com/watch?v=269U-DGIDhA",
        channel: "NerdPurp",
      },
      {
        label: "AR3ZY — How To Get Tarragon FAST In Roblox EvoMon",
        url: "https://www.youtube.com/watch?v=px_JnVQ1dJk",
        channel: "AR3ZY",
      },
      {
        label: "2kane Unleashed — Top 5 SHINY EVOMON'S You NEED in Evomon",
        url: "https://www.youtube.com/watch?v=S9BjLhyjBAc",
        channel: "2kane Unleashed",
      },
      {
        label: "Hicko — Tarro farm for noobs | Evomon Roblox",
        url: "https://www.youtube.com/watch?v=e1E65-HZccA",
        channel: "Hicko",
      },
      {
        label: "ImSoaren — The BEST Shiny Hunting Guide in Roblox Evomon!",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
      {
        label: "Mikey KT — I finally caught a shiny Tarro and evolved it (title confirmation; captions rate-limited)",
        url: "https://www.youtube.com/watch?v=BHehFCNrV74",
        channel: "Mikey KT",
      },
    ],
  },
  {
    slug: "sparkit-evolution-vs-lavite",
    title: "Sparkit Evolution vs Lavite — When to Evolve on Lava Crag",
    description:
      "Sparkit → Emfox → Empixy for early Lava Crag Fire DPS. Once Lavite is online, leftover Evolution Stones usually go to Lavarock — not a second full Fire line.",
    published: "2026-07-30",
    gscTargets: [
      "sparkit evolution",
      "sparkit evolution evomon",
      "sparkit evomon evolution",
      "sparkit vs lavite",
      "when to evolve sparkit",
      "empixy evolution",
      "emfox evolution",
      "sparkit or lavite",
    ],
    relatedGuides: [
      "/dex/sparkit",
      "/dex/emfox",
      "/dex/empixy",
      "/dex/lavite",
      "/dex/lavarock",
      "/map-zones#lava-crag",
      "/tier-list/evolution-priority",
      "/blog/shiny-sparkit-evomon-guide",
      "/blog/shiny-lavite-evomon-guide",
      "/blog/best-nature-lavite-evomon",
    ],
    quickAnswer:
      "**Evolve Sparkit → Emfox → Empixy** when you need **early Fire DPS now** on **Lava Crag** (~Lv 30–43 wilds) and Lavite is not online yet. Once **Lavite** is caught, most July 2026 guides give leftover **Evolution Stones to Lavarock**, not a second full Fire line. Empixy is also the island **boss name** — evolving your Sparkit and farming boss Empixy are related labels, not the same loop.",
    sections: [
      {
        heading: "Two Fire projects on the same island",
        paragraphs: [
          "Lava Crag hosts both lines. **Sparkit** is the early wild Fire catch that Candyblox-style hunt videos farm for speed; it evolves into **Emfox**, then **Empixy**. **Lavite** is the Fire/Rock catch Purp, Rexon, and ItzVexo-style guides keep funding into **Lavarock** for mid/late walls.",
          "The GSC question “Sparkit evolution” is usually **stone timing**, not shiny odds. For shiny loops see [Shiny Sparkit](/blog/shiny-sparkit-evomon-guide) and [Shiny Lavite](/blog/shiny-lavite-evomon-guide) — this page answers **when to press Evolve**.",
        ],
        callout: {
          title: "One-line rule",
          body: "Sparkit line = temporary Fire DPS bridge. Lavite line = default long-term Fire/Rock stone sink on Lava Crag. Do not fully fund Blazpup + Sparkit + Lavite in the same week.",
          variant: "tip",
        },
      },
      {
        heading: "Sparkit evolution line (what you unlock)",
        paragraphs: [
          "Dex order is **Sparkit (#021) → Emfox (#022) → Empixy (#023)**. Confirm stone and level gates in the in-game Evolve panel — we do not invent exact counts here.",
        ],
        bullets: [
          "**Sparkit** — Lava Crag wild (~Lv 30–43); community bases lean Sp. Atk 50 / Speed 55 (glassier early Fire).",
          "**Emfox** — mid bridge (Sp. Atk 70 / Speed 78); evolve when you need damage **now** and Lavite is missing.",
          "**Empixy** — final special DPS (Sp. Atk 100 / Speed 109). Map data also lists Empixy as the Lava Crag boss (~Lv 45) — boss cycles ≠ evolving your keeper.",
        ],
      },
      {
        heading: "When you should evolve Sparkit",
        bullets: [
          "**Yes — evolve** if Bubble/Leafbun teams lack Fire and Sparkit is your main clear for Lava Crag Grass/Bug/Ice/Steel matchups.",
          "**Yes — push to Empixy** if this line is still a real party slot and Lavite is not caught yet (or stones are stocked enough for both projects).",
          "**Partial evolve** is fine: Emfox can bridge a few islands; park the second stone if Lavarock is the next bottleneck.",
          "**Talent first** — evolve a usable Talent copy; junk Talent finals waste the Lava Crag farm.",
        ],
        paragraphs: [
          "Cross-source compare notes (and our [evolution-priority](/tier-list/evolution-priority) framing) treat Sparkit as the **earlier Fire coverage** pick — useful when you skipped or benched Blazpup — not as the forever fire wall.",
        ],
      },
      {
        heading: "When Lavite should take the stones instead",
        paragraphs: [
          "Once Lavite is online, July 2026 creator guidance (Purp beginner route, Rexon investment notes, ItzVexo tier framing) repeatedly points leftover Evolution Stones at **Lavite → Lavarock**: Fire/Rock bulk, Counter-oriented late value, and a clearer “main fire slot” ROI than finishing Empixy as a second full sink.",
          "If Sparkit is only patching damage while you hunt Lavite, **delay Empixy**. Keep Sparkit/Emfox as a secondary or collection evolve after Lavarock is safe.",
        ],
        bullets: [
          "**Prioritize Lavite stones** — long-term Fire/Rock carry on the same island.",
          "**Keep Sparkit evolved “enough”** — stop when Fire coverage is no longer the bottleneck.",
          "**Natures** — Lavite Counter builds want HP/defense direction; see [Best Nature for Lavite](/blog/best-nature-lavite-evomon).",
        ],
        callout: {
          title: "Verify live costs",
          body: "Community pages sometimes quote exact Lavite levels and stone stacks. Patches move those numbers — always confirm the Evolve UI before spending rare stock.",
          variant: "warn",
        },
      },
      {
        heading: "Decision checklist",
        bullets: [
          "Need Fire **this session** and no Lavite? → Evolve Sparkit toward Empixy.",
          "Lavite caught, stones scarce? → Fund Lavarock; park Sparkit mid-line if needed.",
          "Both online and stones plentiful? → Finish the line you actually run daily; Empixy can stay a secondary special Fire.",
          "Shiny hunting? → Separate decision: Sparkit is the faster wild loop; Lavite is the deeper carry project.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does Sparkit evolve into?",
        a: "Sparkit → Emfox → Empixy. Confirm stone/level requirements in-game before spending materials.",
      },
      {
        q: "What does Emfox evolve into?",
        a: "Emfox evolves into Empixy — the Sparkit-line final. Emfox is only the mid bridge.",
      },
      {
        q: "Should I evolve Sparkit or save stones for Lavite?",
        a: "Evolve Sparkit far enough to cover early Lava Crag Fire needs. Once Lavite is online, most guides give leftover stones to Lavite → Lavarock.",
      },
      {
        q: "Is Empixy better than Lavarock?",
        a: "Different jobs. Empixy is a Sp. Atk/Speed Fire final from the Sparkit line; Lavarock is the Fire/Rock wall most mid/late lists keep funding. Pick based on the slot you need, not the shiny color alone.",
      },
      {
        q: "Where do you catch Sparkit and Lavite?",
        a: "Both are Lava Crag (third island) catches. Sparkit sits in the mid wild band (~Lv 30–43 on our map); Lavite is the Fire/Rock pickup on the same island.",
      },
      {
        q: "Is the Empixy boss the same as evolving Sparkit?",
        a: "Related name only. Map data lists Empixy as the Lava Crag boss (~Lv 45); your playable Empixy comes from evolving Emfox. Treat the loops separately.",
      },
      {
        q: "Sparkit vs Blazpup for Fire stones?",
        a: "Many Bubble starters skip Blazpup and catch Sparkit on Lava Crag instead. Do not fully fund the starter Fire line and Sparkit and Lavite together.",
      },
    ],
    sources: [
      {
        label: "Candyblox — I Caught Shiny Sparkit in EVOMON Roblox (Lava Crag Sparkit route footage)",
        url: "https://www.youtube.com/watch?v=p7lPXM3i_6A",
        channel: "Candyblox",
      },
      {
        label: "Purp — Beginner guide (Lavite route / long-term fire investment framing)",
        url: "https://www.youtube.com/watch?v=KRWoAlccQeU",
        channel: "Purp",
      },
      {
        label: "Rexon — Beginner guide (Lavarock investment notes)",
        url: "https://www.youtube.com/watch?v=NOB08m6Pjuw",
        channel: "Rexon",
      },
      {
        label: "ItzVexo — Tier list (Lavite access and endgame fire-wall framing)",
        url: "https://www.youtube.com/watch?v=QT1vdzAAjn0",
        channel: "ItzVexo",
      },
    ],
  },
  {
    slug: "clipdow-evomon-guide",
    title: "Clipdow / Clipdown Evomon Guide — How to Get & Evolve",
    description:
      "Clipdow (Clipdown) comes from Dark King Clipexor on Lunaria Isle. How to get the seed, Clipdow → Cliphas → Clipexor, and why the playable line is Normal — not the boss’s Dark typing.",
    published: "2026-07-30",
    gscTargets: [
      "clipdow evomon",
      "clipdown evomon",
      "clipdow evolution",
      "clipdow egg evomon",
      "clipdown egg evomon",
      "how to get clipdow",
      "how to get clipdow evomon",
      "how to get clipdown",
      "how to get clipdown evomon",
      "clipexor evomon",
      "cliphas evomon",
      "clipdown evomon roblox",
    ],
    relatedGuides: [
      "/dex/clipdow",
      "/dex/cliphas",
      "/dex/clipexor",
      "/type-chart",
      "/guides/mutations/shiny-egg",
      "/blog/how-to-know-if-evomon-is-shiny",
      "/tier-list/evolution-priority",
    ],
    quickAnswer:
      "**Clipdow** (often misspelled **Clipdown**) is the **Lunaria Isle** Seasonal reward after **Dark King Clipexor** — not a main-map wild. Claim the seed, then evolve **Clipdow → Cliphas → Clipexor**. The boss is **Dark**; the playable line is **Normal** (Fighting hurts it; Psychic/Dark matchups are where it helps). Final form community bases peak **Atk/Spe 110**.",
    sections: [
      {
        heading: "Clipdow vs Clipdown — same pet",
        paragraphs: [
          "Google often sends **clipdown evomon** traffic to the homepage. In-game and on our dex the name is **Clipdow**. Clipdown is the common community misspelling for the same Seasonal Normal seed — we already 301 `/dex/clipdown` → `/dex/clipdow`. Use Clipdow when you search or link.",
        ],
        callout: {
          title: "Spelling check",
          body: "Clipdow = correct. Clipdown = same monster, wrong spelling. Clipexor = the final evolution (and the Dark King’s name), not a separate early wild.",
          variant: "note",
        },
      },
      {
        heading: "How to get Clipdow on Lunaria Isle",
        paragraphs: [
          "Season 1 unlocks Seasonal Island from **World Select** once you meet the account gate community guides put around **Lv 30**. Open the map pin → World Select → Seasonal Island → teleport to **Lunaria Isle**, then enter the **Dark King Clipexor** fight.",
          "Gamezebo’s Clipdow walkthrough and Dark/Light Season-1 notes agree on the payoff: after you defeat the Dark King, you get a shot at **Clipdow** (reward / catch of the lesser evolution) — then you evolve that copy yourself. Nerdschalk’s boss route mirrors the same Lunaria path and treats the clear as an endgame capture attempt; either way, the party seed you keep is **Clipdow**, not a free playable Dark Clipexor.",
        ],
        bullets: [
          "**Unlock** — Seasonal Island via World Select (community ~account Lv 30).",
          "**Island** — Lunaria Isle (Dark King Clipexor).",
          "**Reward** — Clipdow seed for the Normal line.",
          "**Not** — a Verdant/Petal Pond wild spawn on our map chart.",
        ],
      },
      {
        heading: "Boss typing ≠ party typing",
        paragraphs: [
          "Dark King Clipexor is a **Dark** boss. Playable **Clipdow / Cliphas / Clipexor** are listed as **Normal** on community dex sheets (and on ours). Do not build the party mon as if it keeps the boss’s Dark typing — that mismatch is the #1 trap after the clear.",
          "On the [Type Chart](/type-chart), Normal takes **2× from Fighting** and resists **Psychic / Dark** (0.5×) in the public chart. Gamezebo’s Clipdow guide uses the same matchup framing for when to slot the line.",
        ],
        callout: {
          title: "Bring Fighting answers when you fight the line",
          body: "Astraknight / Pummash-class Fighting checks Normal. For the Dark King clear itself, community write-ups lean Bug/Poison (Chitaladin) or Ground/Grass sustain (Thordlord) — verify moves and levels in your client before spending premium balls.",
          variant: "tip",
        },
      },
      {
        heading: "Evolution: Clipdow → Cliphas → Clipexor",
        paragraphs: [
          "The line is three stages. Confirm stone and level gates on the in-game Evolve panel before dumping stock — we do not publish exact stone counts here because Season-1 costs shift.",
          "Plan both evolves as one project after Lunaria. Stopping forever on Cliphas leaves a Seasonal unlock underleveled. Dex detail pages: [Clipdow](/dex/clipdow), [Cliphas](/dex/cliphas), [Clipexor](/dex/clipexor).",
        ],
        bullets: [
          "**Clipdow** — base seed (community: HP 43 / Atk 54 / Spe 57).",
          "**Cliphas** — mid form (HP 60 / Atk 75 / Spe 79).",
          "**Clipexor** — final (HP 83 / Atk 110 / Spe 110) — the form most players actually want.",
        ],
      },
      {
        heading: "When the line earns a team slot",
        paragraphs: [
          "Use Cliphas/Clipexor when **Psychic or Dark** walls are slowing clears and you already finished the stone project. It is a poor place to spend your first Evolution Stones while Verdant → Lava Crag still needs Rock/Fire carries — see [Evolution Priority](/tier-list/evolution-priority).",
          "Compared with early Normal fillers like Mopebun/Mopillow, Clipdow’s line is a **later Seasonal ceiling**, not a Petal Pond farm pet.",
        ],
      },
      {
        heading: "Shiny, eggs, and “clipdow egg” searches",
        paragraphs: [
          "Boss-reward loops are slower shiny volume than wild farms. Prioritize a usable Talent Clipdow before double-evolving. Field shiny ID still uses the KO → smoke checklist — [How to Know If an Evomon Is Shiny](/blog/how-to-know-if-evomon-is-shiny).",
          "Some players search **clipdow egg**. We do not invent a Clipdow-only egg rate. For boss-adjacent shiny eggs and Prismatic Ball hatching, use the general [Shiny Egg Guide](/guides/mutations/shiny-egg) and [egg chance post](/blog/evomon-shiny-egg-chance), then verify whether your Clipdow encounters show a pity panel in-client.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you get Clipdow in Evomon?",
        a: "Unlock Seasonal Island (community ~Lv 30), go to Lunaria Isle, defeat Dark King Clipexor, and claim/catch the Clipdow reward. It is not a standard main-map wild.",
      },
      {
        q: "Is Clipdow the same as Clipdown?",
        a: "Yes — Clipdown is a common misspelling. The in-game name is Clipdow.",
      },
      {
        q: "What does Clipdow evolve into?",
        a: "Clipdow → Cliphas → Clipexor. Confirm stone/level requirements in the Evolve UI before spending materials.",
      },
      {
        q: "Is playable Clipexor Dark-type like the boss?",
        a: "No. Dark King Clipexor is Dark; community dex data lists the playable Clipdow line as Normal.",
      },
      {
        q: "What are Clipexor’s base stats?",
        a: "Community bases for the final form: HP 83, Attack 110, Defense 68, Sp. Atk 72, Sp. Def 76, Speed 110.",
      },
      {
        q: "When should I put Clipdow’s line on my team?",
        a: "After you evolve toward Clipexor and need a Normal answer into Psychic/Dark pressure. Do not fund it before your early-route carries are online.",
      },
      {
        q: "What is a Clipdow egg in Evomon?",
        a: "Searches for “clipdow egg” usually mean a species egg or shiny-egg drop tied to that line. We do not invent a Clipdow-only egg rate — use the Shiny Egg Guide and check whether your client shows pity/odds on Clipdow encounters.",
      },
    ],
    sources: [
      {
        label: "Gamezebo — Evomon Clipdow (obtain, evolution, Normal matchups, base stats)",
        url: "https://www.gamezebo.com/walkthroughs/evomon-clipdow/",
      },
      {
        label: "Gamezebo — Dark and Light Season 1 (Seasonal Island unlock, catch Clipdow after Dark King)",
        url: "https://www.gamezebo.com/walkthroughs/evomon-dark-and-light/",
      },
      {
        label: "Nerdschalk — How to Beat Dark King Clipexor (Lunaria path, Lv 200 Dark boss framing)",
        url: "https://nerdschalk.com/beat-dark-king-clipexor-evomon/",
      },
    ],
  },
  {
    slug: "how-to-know-if-evomon-is-shiny",
    title: "How to Know If an Evomon Is Shiny (2026) — Smoke Reveal & Icons",
    description:
      "You cannot see shiny mid-fight in Evomon. KO the wild mon, wait for the smoke reveal, then check the alternate palette, Shiny label, and four-point star — plus how that differs from Sparkle/Prismatic.",
    published: "2026-07-30",
    gscTargets: [
      "how to know if evomon is shiny",
      "how to know if the evomon is shiny",
      "how to know if an evomon is shiny",
      "how to tell if evomon is shiny",
      "how to tell if an evomon is shiny",
      "is my evomon shiny",
      "evomon shiny indicator",
      "evomon shiny icon",
    ],
    relatedGuides: [
      "/guides/mutations",
      "/guides/mutations/shiny-vs-sparkle",
      "/blog/what-does-shiny-do-evomon",
      "/blog/what-is-sparkle-evomon",
      "/blog/evomon-pity-system-explained",
      "/blog/evomon-shiny-egg-chance",
    ],
    quickAnswer:
      "**You cannot tell mid-fight.** Unlike Pokémon’s encounter splash, Evomon only reveals Shiny **after you knock the wild mon out** — wait for the **smoke animation**, then look for the **full alternate color palette**, the **“Shiny” label**, and a **four-point star** icon. A **five-point star** is Sparkle/Prismatic (cosmetic only). Odds/pity numbers bottom-left are hunt progress, not the shiny check itself.",
    sections: [
      {
        heading: "Why shiny is invisible during the fight",
        paragraphs: [
          "Players coming from Pokémon expect the shiny to flash on the encounter screen. ImSoaren’s hunting guide calls that out directly: in Evomon you **must knock the Evomon out** first. Only when the smoke clears on the capture/reveal screen does the alternate palette (or the normal look) show up.",
          "That is why “is this shiny?” searches are really asking for the **post-KO checklist**, not a wild-spawn aura. While the target is still alive you can read **odds and pity** bottom-left for farm planning — those numbers do not paint the current mon shiny until the reveal.",
        ],
        callout: {
          title: "Hunt loop in one line",
          body: "KO → wait for smoke → confirm Shiny (or leave) → then decide whether to catch. Volume of reveals matters more than staring at the battle UI.",
          variant: "tip",
        },
      },
      {
        heading: "Step-by-step: confirm a wild shiny",
        bullets: [
          "**Defeat the wild Evomon** — do not rely on the encounter splash.",
          "**Wait for the smoke** on the post-battle reveal/capture screen.",
          "**Check the body colors** — Shiny uses a fixed alternate palette for that species (two shinies of the same species match; Prismatic glow rolls do not).",
          "**Read the UI label** — ImSoaren: pure shinies show a star indicator and explicitly say **Shiny**.",
          "**Match the star shape** — Purp: Shiny uses a **four-pointed star**; Prismatic/Sparkle uses a **five-pointed star** (often bottom-left on the Evomon card).",
        ],
        paragraphs: [
          "If the reveal looks normal, leave or catch for pity progress as needed — then spawn the next copy. Species routes (Lavite, Sparkit, Glowy, Bluebird…) are covered in their own hunt posts; this page only answers the ID question.",
        ],
      },
      {
        heading: "Already in your party? Read the icons",
        paragraphs: [
          "For Evomon you already own, open the party/inventory card. Purp’s shiny vs prismatic overview shows the same icon language on owned mons: **four-point star = Shiny**, **five-point star = Prismatic/Sparkle**. Clicking a Prismatic star opens the **color and pattern** panel (random glow on one body part) — that is Sparkle, not the combat shiny layer.",
          "If both stars appear, you are looking at **Shiny + Prismatic** (stats + cosmetics). Full naming and combat differences live on [What Does Shiny Do](/blog/what-does-shiny-do-evomon) and [What Is Sparkle](/blog/what-is-sparkle-evomon).",
        ],
        callout: {
          title: "Icon cheat sheet",
          body: "Four-point star + “Shiny” = real shiny (palette + stats). Five-point star / Sparkle panel = Prismatic cosmetics only. Both = Shiny Prismatic flex.",
          variant: "note",
        },
      },
      {
        heading: "Common mix-ups (don’t fail the check)",
        bullets: [
          "**Sparkle ≠ Shiny** — glow + pattern with a five-point star is cosmetic; it will not match a shiny palette check.",
          "**Shiny eggs** — a **Shiny [Species] Egg** hatches a guaranteed shiny; that is a different path from field smoke reveals (see [Shiny Egg Chance](/blog/evomon-shiny-egg-chance)).",
          "**Boss lines without field pity** — some bosses (e.g. Thunder Cliffs Arcapex) still use egg routes; the smoke rule for field mons does not invent pity where the client shows none.",
          "**Talent still matters** — confirming shiny is step one; keep a usable Talent before celebrating (see [Mutations hub](/guides/mutations)).",
        ],
      },
      {
        heading: "What to do after you confirm shiny",
        paragraphs: [
          "Catch when you want the keeper — especially if you parked Prismatic pity at **149** for a Shiny Prismatic stack ([Pity System explained](/blog/evomon-pity-system-explained)). If you only needed the visual ID answer, stop here and return to your route guide.",
          "Want the combat reason to keep hunting? Shiny adds a small real Flare/stat bump; Prismatic does not — details on [What Does Shiny Do in Evomon](/blog/what-does-shiny-do-evomon).",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you know if an Evomon is shiny?",
        a: "Knock it out, wait for the smoke reveal, then look for the alternate color palette, the Shiny label, and a four-point star icon. You cannot see shiny status mid-fight.",
      },
      {
        q: "Can you tell if an Evomon is shiny before the battle ends?",
        a: "No. Creator guides (ImSoaren) show that Evomon only reveals shiny after the knockout smoke — unlike Pokémon’s encounter splash.",
      },
      {
        q: "What does the shiny icon look like in Evomon?",
        a: "Shiny uses a four-pointed star (and a Shiny label). Prismatic/Sparkle uses a five-pointed star and opens a color/pattern panel — cosmetic only.",
      },
      {
        q: "Is Sparkle the same as shiny?",
        a: "No. Sparkle is the in-game name for Prismatic cosmetics. Shiny changes the full palette and adds stats. You can have both on one Evomon.",
      },
      {
        q: "Do the bottom-left odds mean this encounter is shiny?",
        a: "No. Those panels show species odds and pity progress while the target is alive. The shiny confirmation is still the post-KO smoke reveal.",
      },
      {
        q: "How do I know if my owned Evomon is shiny?",
        a: "Open its party/inventory card and check for the four-point Shiny star (and Shiny labeling). A five-point star alone means Prismatic/Sparkle, not shiny stats.",
      },
    ],
    sources: [
      {
        label: "ImSoaren — The BEST Shiny Hunting Guide in Roblox Evomon! (KO + smoke reveal, Shiny label)",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
      {
        label: "Purp — FULL GUIDE to SHINY and PRISMATIC (four-point vs five-point star icons)",
        url: "https://www.youtube.com/watch?v=t3Ar4Bslgzg",
        channel: "Purp",
      },
    ],
  },
  {
    slug: "what-is-sparkle-evomon",
    title: "Sparkle Evomon Explained — Prismatic Looks, No Combat Stats",
    description:
      "A Sparkle Evomon is the UI name for Prismatic: random glow + pattern, five-point star, cosmetic only. Odds (~0.2–0.8%), 150-catch pity, and Sparkle vs Shiny.",
    published: "2026-07-26",
    gscTargets: [
      "sparkle evomon",
      "evomon sparkle",
      "sparkling evomon",
      "sparkling egg evomon",
      "what is sparkle in evomon",
      "what does sparkle do in evomon",
      "what is sparkle evomon",
      "what is a sparkle evomon",
      "sparkle vs shiny evomon",
      "evomon sparkle vs shiny",
    ],
    relatedGuides: [
      "/guides/mutations/shiny-vs-sparkle",
      "/guides/mutations",
      "/blog/what-does-shiny-do-evomon",
      "/blog/evomon-pity-system-explained",
      "/blog/prismatic-egg-evomon",
    ],
    quickAnswer:
      "A **Sparkle Evomon** is what the game UI calls **Prismatic**: a **random glow color + pattern** on one body part, marked by a **five-point star**. It is **cosmetic only — zero combat stats**. Community odds sit around **0.2–0.8%** per encounter, with a **150-capture pity** (catches advance it; KO-and-run does not). Want power? Hunt **Shiny** (four-point star) instead. Side-by-side comparison: [Shiny vs Sparkle](/guides/mutations/shiny-vs-sparkle).",
    sections: [
      {
        heading: "Sparkle = Prismatic (one variant, two names)",
        paragraphs: [
          "The in-game star panel labels the variant **Sparkle**, while creators and wiki sheets almost always say **Prismatic** — same mechanic. ImSoaren's hunting guide shows the tell: click the five-point star icon and the panel reads **color and pattern** — for example a rose glowing purple with triangles popping off it. Because both the glow color and the pattern are rolled randomly, two Sparkle copies of the same species can look completely different.",
          "That randomness is also the collector angle: community trade talk rates **white and black glows** as the rarest-looking rolls. But none of it touches combat — a Sparkle Evomon fights exactly like the normal version.",
          "Searches for a **sparkling egg** usually mean the same cosmetic layer: either a field Sparkle/Prismatic catch, or hatching a shiny egg with a **Prismatic Ball** so the hatch also looks Sparkle. The egg/ball loop is covered in the [Prismatic Egg guide](/blog/prismatic-egg-evomon) and [Shiny Egg Guide](/guides/mutations/shiny-egg) — this page is only the naming + combat answer.",
        ],
        callout: {
          title: "Icon cheat sheet",
          body: "Five-point star = Sparkle/Prismatic (cosmetic, random look). Four-point star = Shiny (fixed alternate palette + real stat boost). Both stars together = Shiny Prismatic.",
          variant: "note",
        },
      },
      {
        heading: "What Sparkle actually does (and does not)",
        bullets: [
          "**Does** — adds a glow color + emitted pattern (petals, hearts, triangles…) on one body part.",
          "**Does** — raise trade/flex value, especially rare glow colors.",
          "**Does not** — change any stat, move, Talent, or Nature. Zero combat effect.",
          "**Does not** — replace Shiny: shiny is the variant with the stat layer (see [What Does Shiny Do](/blog/what-does-shiny-do-evomon)).",
        ],
      },
      {
        heading: "Sparkle odds and the 150-catch pity",
        paragraphs: [
          "Odds display bottom-left during battle. ImSoaren's example species showed **0.8% (1 in 125)** for Prismatic vs 0.2% for Shiny; community reports across species run roughly **0.2–0.8%**, so read your target's own panel. The pity counter sits under the odds: at **150 captures** of that species, the next catch is guaranteed Prismatic.",
          "The rule that trips people up: **Prismatic pity only advances on successful captures.** Knocking the Evomon out and leaving does nothing for this counter. Macrolo's guide builds the whole farm loop around that — catch volume, not KO volume.",
          "Want the guaranteed **Shiny Prismatic** combo instead? Park the counter at 149 and save the trigger for a shiny reveal — the full walkthrough is in the [Pity System post](/blog/evomon-pity-system-explained) and on the [Mutations hub](/guides/mutations).",
        ],
      },
      {
        heading: "Is a Sparkle Evomon worth keeping?",
        paragraphs: [
          "Keep it if you like the look or expect trade value — rare glow colors are the flex. Do not keep it **over** a better-Talent normal copy for battle: since Sparkle adds no stats, a junk-Talent Sparkle is a display piece. The practical priority most guides land on: Talent/Nature first, Shiny second for the stat layer, Sparkle as the bonus roll on top.",
          "One shortcut exists: a **Prismatic Ball** forces the Sparkle appearance on a catch or an egg hatch, no pity needed. Where those balls are best spent is covered in the [Prismatic Egg guide](/blog/prismatic-egg-evomon).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a Sparkle Evomon?",
        a: "A Sparkle Evomon is the UI name for Prismatic: random glow color + pattern on one body part, five-point star icon, cosmetic only — zero combat stats.",
      },
      {
        q: "What does sparkle mean in Evomon?",
        a: "Sparkle is the in-game name for the Prismatic variant: a random glow color and pattern on one body part, shown with a five-point star icon. It is purely cosmetic.",
      },
      {
        q: "Does sparkle do anything in Evomon?",
        a: "No combat effect — no stats, moves, or Talent changes. Its value is looks and trade flex. Shiny is the variant that adds stats.",
      },
      {
        q: "How rare is a sparkle Evomon?",
        a: "Community-reported odds are roughly 0.2–0.8% per encounter depending on species, with a pity that guarantees one after 150 captures of that species. The exact odds show bottom-left in battle.",
      },
      {
        q: "Sparkle vs shiny — which should I hunt?",
        a: "Shiny if you want power (it adds a real stat boost). Sparkle if you want looks or trade value. The 149 pity trick lets you aim for both on one catch.",
      },
      {
        q: "Can I force a sparkle without the pity?",
        a: "Yes — use a Prismatic Ball on a catch or when hatching an egg to guarantee the Sparkle/Prismatic appearance.",
      },
      {
        q: "What is a sparkling egg in Evomon?",
        a: "People usually mean Sparkle/Prismatic looks on an egg hatch: hatch a shiny egg with a Prismatic Ball (or catch with one) so the result has Sparkle cosmetics. Sparkle itself still adds no combat stats.",
      },
    ],
    sources: [
      {
        label: "ImSoaren — The BEST Shiny Hunting Guide in Roblox Evomon! (Sparkle panel & odds)",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
      {
        label: "Macrolo — How To Get SHINY Evomon FAST (catch-based prismatic pity)",
        url: "https://www.youtube.com/watch?v=xnc9cEJF1V8",
        channel: "Macrolo",
      },
      {
        label: "Purp — Shiny vs Prismatic overview",
        url: "https://www.youtube.com/watch?v=t3Ar4Bslgzg",
        channel: "Purp",
      },
    ],
  },
  {
    slug: "shiny-glowy-evomon-guide",
    title: "Shiny Glowy Evomon Guide — Floating Realm Hunt & Goliath Plan",
    description:
      "Hunt Shiny Glowy on Floating Realm (Seasonal Island, ~Lv 140–145 past the stone bridge). Route, pity mechanics, the 149 prismatic trick, and when to evolve the keeper into Goliath.",
    published: "2026-07-25",
    gscTargets: [
      "shiny glowy evomon",
      "glowy shiny evomon",
      "evomon glowy shiny",
      "evomon shiny glowy",
      "glowy evomon shiny",
      "glowy evomon",
      "evomon glowy",
    ],
    relatedGuides: [
      "/dex/glowy",
      "/dex/goliath",
      "/map-zones#floating-realm",
      "/guides/mutations",
      "/blog/what-does-shiny-do-evomon",
      "/blog/evomon-pity-system-explained",
      "/blog/what-is-sparkle-evomon",
      "/type-chart",
    ],
    quickAnswer:
      "To hunt **Shiny Glowy in Evomon**, open **World Select → Seasonal Island → Floating Realm** (community guides gate the seasonal map around **account Lv 30**), cross the stone bridge, and farm the wild Glowy band at roughly **Lv 140–145**. Knock each Glowy out and check the post-KO smoke reveal — shiny status is invisible during battle. Odds and the per-species **pity counter** display in the bottom-left while the Evomon is alive. Bring **Grass, Flying, or Dragon** pressure so fights stay short, then evolve your keeper: **Glowy → Glowres → Goliath**.",
    sections: [
      {
        heading: "Where to hunt Shiny Glowy",
        paragraphs: [
          "Glowy is a **Season 1 seasonal spawn**, not a main-map wild. Gamezebo's Season 1 coverage lists Floating Realm as its home island, reached through the **World Select** menu (map icon, top-left) once your account clears the seasonal unlock — community guides put that around **account Lv 30**. Teleport to Floating Realm, cross the **stone bridge**, and the wild Glowy pack spawns beyond it at about **Lv 140–145** on our [Map Zones](/map-zones#floating-realm) sheet.",
          "Level check first: a Lv 140+ wild band means an underleveled team turns every shiny check into a slog. AllThings.how's Glowy route guide recommends **Grass, Flying, or Dragon** attackers to chip it down fast — match that against our [Type Chart](/type-chart) before you commit to a long session.",
        ],
        callout: {
          title: "Route answer",
          body: "World Select → Seasonal Island → Floating Realm → past the stone bridge. If you cannot see Seasonal Island in World Select yet, level your account first — the seasonal map is gated.",
          variant: "tip",
        },
      },
      {
        heading: "How the shiny check works on Glowy",
        paragraphs: [
          "Evomon does not show shiny status during battle. ImSoaren's shiny hunting guide walks the loop: **KO the wild Evomon**, wait for the smoke on the capture screen, and the reveal shows whether it is Shiny, Prismatic, or both. The **odds and pity counters sit bottom-left** of the combat screen while the target is alive — pity values differ per species, so read Glowy's own numbers in your client rather than assuming another pet's thresholds.",
          "Remember which overlay you are hunting: **Shiny adds real stats**, Prismatic is cosmetic only. Full comparison with in-game numbers is on [What Does Shiny Do](/blog/what-does-shiny-do-evomon).",
        ],
        bullets: [
          "**KO first, reveal second** — shiny is confirmed on the post-knockout smoke screen.",
          "**Pity is per species** — captures advance Glowy's counters; KO-and-leave does not.",
          "**Shiny = stats, Prismatic = looks** — hunt shiny for combat value, prismatic for the flex.",
        ],
      },
      {
        heading: "The 149 trick: guaranteed Shiny Prismatic Glowy",
        paragraphs: [
          "Because captures (not KOs) advance pity, hunters park the **Prismatic pity one below its guarantee** and save the trigger for a shiny reveal. ImSoaren, Gamezebo, and Roonby all describe the same setup on species with a 150 Prismatic pity: catch Glowy until the Prismatic counter reads **149**, then **stop catching**. Keep KOing Glowy and checking reveals — leave without catching if it is not shiny. When a **Shiny Glowy** finally shows in the smoke, catch it: that capture fires the Prismatic guarantee on a mon that is already shiny, producing a **Shiny Prismatic Glowy**.",
          "No Prismatic Ball needed for this route — the pity supplies the Prismatic layer. Community guides suggest saving a **King Ball** for the final catch if you also want top Talent on the keeper. General pity math lives on [Pity System Explained](/blog/evomon-pity-system-explained).",
        ],
        callout: {
          title: "Do not waste the trigger",
          body: "One careless catch at 149 spends the Prismatic guarantee on a normal Glowy and the setup is gone. Confirm the number before every capture, and confirm Glowy's own guarantee value in your client — thresholds can differ per species.",
          variant: "warn",
        },
      },
      {
        heading: "After the catch: Glowy → Glowres → Goliath",
        paragraphs: [
          "The reason Glowy is worth a shiny project is the ceiling. **Goliath**, the final form, peaks at **Defense 107 / Sp. Atk 102** on community base-stat sheets — a seasonal tank-DPS hybrid. Goliath also appears as a **Lv 195 boss** on Floating Realm, but the practical shiny path is evolving a shiny Glowy, not praying at the boss.",
          "AllThings.how's material table lists **10 Evolution Stones + 6 Ground + 6 Light element stones** for Glowy → Glowres, then a much heavier **30 Evolution + 15 Ground + 15 Light** for Glowres → Goliath. Treat those as community-reported costs and verify in your client before pressing evolve — seasonal balancing can move numbers.",
        ],
        bullets: [
          "**Hunt shiny on the base form** — Glowy loops are the volume play; Glowres and Goliath have no listed wild band.",
          "**Bank stones before evolving** — the second step is the expensive one; parking on Glowres wastes the seasonal grind.",
          "**Talent still matters** — a shiny with junk Talent is a collection piece, not a carry. Read Talent before celebrating.",
        ],
      },
      {
        heading: "Quick checklist before a Shiny Glowy session",
        bullets: [
          "Seasonal Island unlocked in World Select (community guides: ~account Lv 30).",
          "Team comfortably clears Lv 140–145 — Grass / Flying / Dragon coverage ready.",
          "Ball stock topped up (grab active [codes](/codes) first).",
          "Decide the goal: plain shiny keeper, or the 149-park Shiny Prismatic project.",
          "Stone budget planned for Glowres → Goliath before you burn the first evolve.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do you find Shiny Glowy in Evomon?",
        a: "Same place as normal Glowy — Floating Realm on the Seasonal Island map, past the stone bridge, around Lv 140–145. Shiny status is rolled per encounter and revealed after the KO.",
      },
      {
        q: "Does Glowy have shiny pity?",
        a: "Wild Glowy shows shiny and prismatic odds plus pity counters in the bottom-left of the combat screen. Pity advances on successful captures of that species, and thresholds differ per species — read Glowy's own numbers in your client.",
      },
      {
        q: "How do I get a Shiny Prismatic Glowy?",
        a: "Park Glowy's Prismatic pity one below its guarantee (149 on a 150-pity species), stop catching, and only capture when the post-KO reveal shows a shiny. That catch triggers the Prismatic guarantee on the shiny.",
      },
      {
        q: "Should I evolve my Shiny Glowy?",
        a: "Yes if the Talent is usable and you can afford the full stone plan — community tables cite 10 Evolution + 6 Ground + 6 Light stones to Glowres, then 30 / 15 / 15 to Goliath. Verify costs in-game first.",
      },
      {
        q: "Is Shiny Glowy stronger than normal Glowy?",
        a: "Yes — shiny adds a real stat boost on top of the recolor. Prismatic alone is cosmetic. Details with in-game comparisons: What Does Shiny Do in Evomon.",
      },
    ],
    sources: [
      {
        label: "ImSoaren — The BEST Shiny Hunting Guide in Roblox Evomon!",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
      {
        label: "AllThings.how — How to Get Glowy and Evolve It Into Goliath in Evomon",
        url: "https://allthings.how/evomon-how-to-get-glowy-and-evolve-it-into-goliath/",
      },
      {
        label: "Gamezebo — Everything NEW in the Evomon Seasonal Update (Season 1)",
        url: "https://gameupnews.com/everything-new-in-the-evomon-seasonal-update-season-1-gamezebo/",
      },
      {
        label: "Gamezebo — Evomon Shiny Hunting Guide (Prismatic & Pris Shinies)",
        url: "https://www.gamezebo.com/walkthroughs/evomon-shiny-hunting-guide/",
      },
    ],
  },
  {
    slug: "shiny-arcapex-evomon-guide",
    title: "Shiny Arcapex Evomon Guide — No Pity, Farm the Shiny Egg",
    description:
      "Shiny Arcapex has no field shiny pity — the route is catching the Thunder Cliffs Lv 200 boss repeatedly until a shiny Arcapex egg drops. Catch Master suit, hatch steps, and Prismatic Ball timing.",
    published: "2026-07-25",
    gscTargets: [
      "shiny arcapex evomon",
      "evomon shiny arcapex",
      "shiny arcapex",
      "arcapex shiny evomon",
      "arcapex shiny",
      "how to get shiny arcapex",
      "how to get shiny arcapex evomon",
      "evomon shiny arcub",
      "shiny arcub",
    ],
    relatedGuides: [
      "/dex/arcapex",
      "/dex/arcub",
      "/map-zones#thunder-cliffs",
      "/guides/mutations/shiny-egg",
      "/blog/evomon-shiny-egg-chance",
      "/blog/how-to-hatch-eggs-evomon",
      "/type-chart",
    ],
    quickAnswer:
      "**Shiny Arcapex has no field shiny pity.** Community guides (ImSoaren, 2kane Unleashed) agree the route is the **shiny egg**: defeat the **Thunder Cliffs Lv 200 Arcapex boss**, **successfully catch it** — eggs only roll on catches, not KOs — and repeat until a **Shiny Arcapex Egg** drops. A shiny egg hatches a guaranteed shiny. Wear the **Catch Master suit** (+10% capture success, +1 capture attempt) so failed throws do not waste whole boss cycles, and select a **Prismatic Ball before hatching** if you want the Shiny Prismatic version.",
    sections: [
      {
        heading: "Why you cannot pity-hunt Shiny Arcapex",
        paragraphs: [
          "Regular wild Evomon show shiny odds and a pity counter bottom-left in combat — catch enough and a shiny is guaranteed. **Boss Arcapex is the exception.** ImSoaren's shiny hunting guide calls out the two big boss Evomon — the flying king at Flying Territory and the **Thunder Cliffs electric king (Arcapex)** — as having **no shiny pity**: \"the only way to get a shiny version of this Evomon is getting a shiny egg.\"",
          "That flips the whole hunt. Instead of grinding encounters toward a guaranteed number, you are farming **catches for an egg drop**, then hoping the egg rolls shiny. Our [Shiny Egg Chance](/blog/evomon-shiny-egg-chance) post covers why the egg roll — not a field roll — is the bottleneck on boss lines like this.",
        ],
        callout: {
          title: "Set expectations",
          body: "No pity means no guarantee. 2kane Unleashed pulled two shiny boss eggs in one recorded session; other players farm far longer. The only number you control is catches per hour.",
          variant: "note",
        },
      },
      {
        heading: "The Shiny Arcapex farm loop",
        paragraphs: [
          "Arcapex sits at the top of **Thunder Cliffs** as a **Lv 200 boss** on our [Map Zones](/map-zones#thunder-cliffs) sheet. Buhamon's June 2026 priority guide flags it as extremely time-consuming to solo — bring a party or an endgame team with answers to Electric (check the [Type Chart](/type-chart) before you queue up a long session).",
          "The loop community videos show is simple but strict: **every step only counts if the catch lands.**",
        ],
        bullets: [
          "**Defeat the boss** — Lv 200, high HP; slow clears are the real cost of this farm.",
          "**Catch it — successfully** — 2kane Unleashed: \"you need to capture the Evomon to actually get the shiny eggs.\" Failed throws burn the entire cycle.",
          "**Check the egg** — catches can drop an Arcapex egg; the rare outcome is a **Shiny Arcapex Egg**.",
          "**Repeat** — no counter is ticking toward a guarantee, so consistency of catches is everything.",
        ],
      },
      {
        heading: "Catch Master suit: the one gear check",
        paragraphs: [
          "Because the whole farm dies on a failed throw, 2kane Unleashed's shiny egg video leans on the **Catch Master suit**: **+10% capture success rate and +1 capture attempt** (three tries per cycle instead of two). On a boss you spent minutes clearing, that extra attempt is the difference between a wasted cycle and an egg roll.",
          "Ball choice on the boss catch itself is about securing the capture, not shiny odds — the shiny decision happens later at the egg. Save premium balls for where they change outcomes.",
        ],
      },
      {
        heading: "Hatching: where the Prismatic Ball comes in",
        paragraphs: [
          "A **Shiny Arcapex Egg hatches a guaranteed shiny** — you do not need anything extra for the shiny itself. The optional upgrade: Buhamon recommends spending a **Prismatic Ball on boss shiny eggs specifically**, because Shiny Prismatic boss mons are \"the rarest and highest flex Evomon in the game right now.\" Select the Prismatic Ball on the hatch UI **before** confirming Hatch — hatching plain gives a normal shiny only.",
          "Full chamber walkthrough (where the hatch UI hides, timers per egg type) is on [How to Hatch Eggs](/blog/how-to-hatch-eggs-evomon).",
        ],
        callout: {
          title: "Prismatic Ball timing",
          body: "The ball must be selected before you press Hatch. There is no way to add the Prismatic layer after a shiny egg has already hatched.",
          variant: "warn",
        },
      },
      {
        heading: "What about Shiny Arcub?",
        paragraphs: [
          "Plenty of searches ask for **shiny Arcub** — the base form on the Funder Cliff boss route that evolves into Arcapex. Community guides group the Arcapex line with the boss lines that **lack field shiny pity**, which is why the egg route dominates the discussion. Before planning an Arcub pity grind, check the bottom-left odds panel on a live Arcub encounter in your client: if no pity counter shows for it, the boss egg farm above is the realistic path.",
          "If you mainly want the line for combat rather than the shiny flex, a strong normal Arcub evolved into Arcapex is still one of the game's best Electric AOE clears — see the [Arcapex dex page](/dex/arcapex) for stats and team fit.",
        ],
      },
      {
        heading: "Quick checklist before an Arcapex session",
        bullets: [
          "Team clears the Lv 200 Thunder Cliffs boss reliably — solo attempts without answers to Electric waste hours.",
          "Catch Master suit equipped (+10% success, +1 attempt).",
          "Ball stock deep enough for repeated boss catches — top up via [codes](/codes).",
          "One Prismatic Ball reserved in case the shiny egg drops.",
          "Patience calibrated: this is an RNG egg farm, not a pity countdown.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you get Shiny Arcapex in Evomon?",
        a: "Farm the Thunder Cliffs Lv 200 Arcapex boss: defeat it, successfully catch it, and repeat until a Shiny Arcapex Egg drops. The shiny egg hatches a guaranteed shiny. There is no field shiny pity on this boss.",
      },
      {
        q: "Does Arcapex have shiny pity?",
        a: "No — community guides consistently list the big boss Evomon, including the Thunder Cliffs Arcapex, as having no shiny pity. Shiny eggs from repeated successful catches are the only route.",
      },
      {
        q: "Why am I not getting Arcapex eggs?",
        a: "Eggs only roll on successful captures, not knockouts. If your throws keep failing, equip the Catch Master suit (+10% capture success, +1 attempt) so each boss clear actually converts into an egg chance.",
      },
      {
        q: "Should I use a Prismatic Ball on the Shiny Arcapex Egg?",
        a: "The shiny is guaranteed either way. Use a Prismatic Ball before hatching only if you also want the Shiny Prismatic version — community creators rate boss Shiny Prismatics as the top flex in the game.",
      },
      {
        q: "Can I hunt Shiny Arcub and evolve it instead?",
        a: "Community guides group the Arcapex line with boss lines that lack field shiny pity, so the egg farm is the documented route. Verify on a live Arcub encounter in your client — if no pity counter displays, do not plan a pity grind.",
      },
    ],
    sources: [
      {
        label: "ImSoaren — The BEST Shiny Hunting Guide in Roblox Evomon! (boss shinies = egg only)",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
      {
        label: "2kane Unleashed — How To EASILY Get SHINY EGGS In Evomon (Catch Master suit)",
        url: "https://www.youtube.com/watch?v=cdToZL_GwLQ",
        channel: "2kane Unleashed",
      },
      {
        label: "Buhamon — Evomon Priority Guide June 2026 (Prismatic Balls on boss shiny eggs)",
        url: "https://www.youtube.com/watch?v=6lmuGBKpTwI",
        channel: "Buhamon",
      },
    ],
  },
  {
    slug: "how-to-hatch-eggs-evomon",
    title: "How to Hatch Eggs in Evomon (2026) — Hatching Chamber Steps",
    description:
      "How to hatch eggs in Evomon Roblox: open the Evomon menu, find the egg / “?” hatch UI, place an egg in a Hatching Chamber, wait out the timer, and use a Prismatic Ball before hatching shiny eggs.",
    published: "2026-07-25",
    gscTargets: [
      "how to hatch egg in evomon",
      "how to hatch eggs in evomon",
      "how to hatch an egg in evomon",
      "how to hatch eggs in evomon roblox",
      "how to hatch an egg in evomon roblox",
      "how to hatch evomon egg",
      "evomon egg hatching",
    ],
    relatedGuides: [
      "/blog/how-to-get-eggs-evomon",
      "/blog/prismatic-egg-evomon",
      "/blog/evomon-shiny-egg-chance",
      "/guides/mutations/shiny-egg",
      "/guides/mutations/shiny-vs-sparkle",
      "/codes",
    ],
    quickAnswer:
      "To **hatch** an Evomon egg: open the **Evomon team menu** → tap the **egg / “?” icon** under your party → pick a **Hatching Chamber** slot → select the egg → **Place**. Wait for the incubation timer (community reports ~**3 minutes** for normal eggs; longer for shiny / prismatic). For a **shiny egg**, select a **Prismatic Ball before you hatch** if you want Shiny + Prismatic look — clicking Hatch alone only gives a normal shiny. Need eggs first? See [How to Get Eggs](/blog/how-to-get-eggs-evomon).",
    sections: [
      {
        heading: "Hatch vs get eggs (why this page exists)",
        paragraphs: [
          "Searches like **how to hatch egg in evomon** and **how to hatch eggs in evomon roblox** want the incubation UI — not the catch loop. Our [How to Get Eggs](/blog/how-to-get-eggs-evomon) guide covers KO → catch → egg drop. This post is only the hatch steps creators keep pointing at when beginners cannot find the chamber.",
        ],
      },
      {
        heading: "Step-by-step: use the Hatching Chamber",
        paragraphs: [
          "Community walkthroughs (GuideHub’s hatch short, Roblox Guides’ eggs video, and Eurogamer’s eggs page) agree on the same flow. Exact icon corners can shift with UI patches — look for the Evomon party button, then the egg / question-mark control under the team strip.",
        ],
        bullets: [
          "**Open the Evomon menu** — the party / Evomon icon on the main HUD (guides usually show top-right; some beginner videos say top-left).",
          "**Open the egg hatch UI** — the egg icon with a **“?”** sitting under your active team.",
          "**Pick a Hatching Chamber slot** — click an empty chamber.",
          "**Choose the egg** from inventory and press **Place** to start incubation.",
          "**Wait for the timer** — the egg hatches when incubation finishes (you do not need to stay in a special map).",
        ],
        callout: {
          title: "Beginner tip from creators",
          body: "AbductedByRobloxians notes the hatch UI is easy to miss early — players often hunt the inventory for minutes before finding the egg / “?” button under the party. Open that menu as soon as you receive your first egg.",
          variant: "tip",
        },
      },
      {
        heading: "How long does hatching take?",
        paragraphs: [
          "There is no single official public table in-client for every egg type. Community guides report approximate timers — **always trust the timer on your chamber** after a patch.",
        ],
        bullets: [
          "**Normal egg** — GuideHub’s hatch guide shows coming back after about **3 minutes** for a standard hatch.",
          "**Shiny egg** — longer than a normal egg in several written guides (often cited around **10 minutes**).",
          "**Named Prismatic Egg / early tutorial prismatic egg** — AbductedByRobloxians and written guides often cite about **1 hour**; worth the wait for the cosmetic roll.",
        ],
      },
      {
        heading: "Shiny eggs: select Prismatic Ball before Hatch",
        paragraphs: [
          "2kane Unleashed’s beginner guide walks this mistake live: if you hatch a **shiny egg** without selecting a **Prismatic Ball** first, you get a normal shiny — not the Shiny + Prismatic look. Click the Prismatic Ball on the hatch UI **before** confirming Hatch.",
          "Full “prismatic egg” wording (pass reward vs ball hatch) sits on the [Prismatic Egg guide](/blog/prismatic-egg-evomon). Field odds and boss shiny-egg farms stay on [Shiny Egg Chance](/blog/evomon-shiny-egg-chance) and the [Shiny Egg Guide](/guides/mutations/shiny-egg).",
        ],
        callout: {
          title: "What hatches from each egg type",
          body: "Normal catch eggs hatch that species (community reports at least S Talent). Shiny eggs hatch a guaranteed shiny of that species. Named Prismatic Eggs from pass / login tracks often hatch a **random** prismatic cosmetic Evomon — different from “shiny egg + Prismatic Ball.”",
          variant: "note",
        },
      },
      {
        heading: "Quick checklist before you hatch",
        bullets: [
          "Confirm you actually own an egg (catch drops need a **successful catch**, not KO-and-run — details on [How to Get Eggs](/blog/how-to-get-eggs-evomon)).",
          "Claim [Evomon codes](/codes) if you need balls for the next farm session after hatching.",
          "For shiny eggs: Prismatic Ball ready **before** Hatch.",
          "Expect duplicates — eggs can hatch species you already own.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you hatch an egg in Evomon Roblox?",
        a: "Open the Evomon team menu, tap the egg / “?” icon under your party, choose a Hatching Chamber, select the egg, and press Place. Wait until the incubation timer finishes.",
      },
      {
        q: "Where is the hatching chamber in Evomon?",
        a: "It is inside the Evomon party UI — not a separate island. Look for the egg icon with a question mark under your active team, then pick a chamber slot.",
      },
      {
        q: "How long does it take to hatch an egg in Evomon?",
        a: "Community reports put normal eggs around 3 minutes, shiny eggs longer, and some prismatic / tutorial eggs around an hour. Use the timer shown on your chamber as the source of truth.",
      },
      {
        q: "Do I need a Prismatic Ball to hatch a shiny egg?",
        a: "No — a shiny egg always hatches a shiny. Use a Prismatic Ball before Hatch only if you also want the Prismatic cosmetic layer on that shiny.",
      },
      {
        q: "I have no eggs — how do I get some?",
        a: "Catch wild Evomon after KOs (eggs roll after successful catches), or claim Battle Pass / login eggs. Full farm loop: How to Get Eggs in Evomon.",
      },
    ],
    sources: [
      {
        label: "GuideHub — How To Hatch an Egg in Evomon (Full Guide)",
        url: "https://www.youtube.com/watch?v=lga0ffqHPJE",
        channel: "GuideHub",
      },
      {
        label: "Roblox Guides — EGGS GUIDE (Get, Hatch, Shiny & Prismatic)",
        url: "https://www.youtube.com/watch?v=2dxE2sd6yXs",
        channel: "Roblox Guides",
      },
      {
        label: "2kane Unleashed — Best BEGINNER'S Guide (Prismatic Ball on hatch)",
        url: "https://www.youtube.com/watch?v=zTXKVuo8R6g",
        channel: "2kane Unleashed",
      },
      {
        label: "AbductedByRobloxians — Ultimate Beginner Guide (egg UI + prismatic timer)",
        url: "https://www.youtube.com/watch?v=zO2mEz6pSRw",
        channel: "AbductedByRobloxians",
      },
    ],
  },
  {
    slug: "prismatic-egg-evomon",
    title: "Prismatic Egg Evomon — Shiny Egg + Prismatic Ball vs Pass Eggs",
    description:
      "What “prismatic egg” means in Evomon: hatch a shiny egg with a Prismatic Ball for Shiny + Prismatic + SSS, vs a named Prismatic Egg reward that hatches a random cosmetic prismatic. Sources from Purp, Macrolo, and community egg guides.",
    published: "2026-07-22",
    gscTargets: [
      "prismatic egg evomon",
      "evomon prismatic egg",
      "prismatic egg",
      "evomon shiny egg prismatic ball",
      "hatch shiny egg prismatic ball evomon",
    ],
    relatedGuides: [
      "/guides/mutations/shiny-egg",
      "/guides/mutations",
      "/guides/mutations/shiny-vs-sparkle",
      "/blog/how-to-get-eggs-evomon",
      "/blog/how-to-hatch-eggs-evomon",
      "/blog/evomon-pity-system-explained",
    ],
    quickAnswer:
      "Most **“prismatic egg Evomon”** searches mean this combo: get a **Shiny Egg** from catching, then hatch it with a **Prismatic Ball** so the hatch is **Shiny + Prismatic (Sparkle)** — Purp also says that hatch path lands **SSS talent**. Separately, some reward tracks list a named **Prismatic Egg** item (Battle Pass / login style rewards in community write-ups) that hatches a **random prismatic cosmetic** Evomon — not the same as the shiny-egg + ball flex. Prismatic alone does **not** add combat stats.",
    sections: [
      {
        heading: "Two things people call a “prismatic egg”",
        paragraphs: [
          "Google mixes two different loops under the same phrase. Creator hunt videos (YouTube) almost always mean the **shiny egg + Prismatic Ball** hatch. Written egg / Battle Pass guides also mention an inventory egg literally labeled **Prismatic Egg**. Answer the query by picking which inventory item you actually have.",
        ],
        bullets: [
          "**A — Shiny Egg + Prismatic Ball (YouTube meta)** — farm a species **Shiny Egg**, hatch with a **Prismatic Ball** → guaranteed shiny looks + prismatic (Sparkle) looks; Purp: also **triple S talent** on that hatch option.",
          "**B — Named Prismatic Egg reward** — community egg guides (e.g. Gamezebo) describe a **Prismatic Egg** that hatches a **random** Evomon as its **prismatic / sparkling** variant with at least **S talent** — cosmetic flex, not a shiny guarantee.",
          "**Not the same as field pity** — wild prismatic pity (~150 captures) and the [149 trick](/blog/evomon-pity-system-explained) are live-catch routes, not egg labels.",
        ],
        callout: {
          title: "Check the egg name in your bag",
          body: "If the egg says “Shiny [Species] Egg”, use path A. If it literally says “Prismatic Egg”, treat it as path B and confirm the current Battle Pass / login reward text in-game.",
          variant: "tip",
        },
      },
      {
        heading: "Path A — hatch a Shiny Egg with a Prismatic Ball",
        paragraphs: [
          "[Purp’s full shiny/prismatic guide](https://www.youtube.com/watch?v=t3Ar4Bslgzg) is the clearest July 2026 walkthrough: normal eggs (e.g. Mudbug egg) hatch with **guaranteed S talent**; a **shiny egg** is the special drop; when you hatch that shiny egg you can choose to use a **Prismatic Ball**, and that option **guarantees Shiny + Prismatic + SSS** in one hatch.",
          "[Macrolo](https://www.youtube.com/watch?v=xnc9cEJF1V8) repeats the same item logic: save a Prismatic Ball for a shiny egg hatch to skip the long wild combo grind.",
        ],
        bullets: [
          "1. **Defeat** then **catch** the target — eggs only roll after a successful catch (Macrolo / ImSoaren).",
          "2. Farm until a **Shiny [Species] Egg** drops (boss lines often rely on this when field shiny pity is missing — ImSoaren).",
          "3. Open the hatch UI and select hatch **with a Prismatic Ball** when you want the Sparkle appearance on the guaranteed shiny.",
          "4. Prefer boss / mount farms when the species lacks field shiny pity; use Catch Master on hard catches — see [Shiny Egg Guide](/guides/mutations/shiny-egg).",
        ],
        callout: {
          title: "Prismatic Ball UI wording",
          body: "Purp notes the ball text may say “sparkle appearance” — in practice that is the prismatic cosmetic layer (five-point star), not a second shiny.",
          variant: "note",
        },
      },
      {
        heading: "Path B — named Prismatic Egg rewards",
        paragraphs: [
          "Community written guides document a separate **Prismatic Egg** reward (not a wild shiny-egg drop). [Gamezebo’s eggs FAQ](https://www.gamezebo.com/walkthroughs/how-to-get-eggs-in-evomon/) describes it as hatching **any** Evomon as its prismatic sparkling variant with **at least S talent**. Other pass write-ups list Prismatic Eggs among Battle Pass / login-style rewards — **confirm the live pass track in your client**, because season reward rows change.",
        ],
        bullets: [
          "**Expect cosmetics, not shiny stats** — prismatic/Sparkle alone does not buff combat (Purp + ImSoaren).",
          "**Species is random** on that reward egg type (per Gamezebo) — do not expect a chosen boss mount from path B.",
          "**Do not spend a Prismatic Ball “fixing” path B** the same way as a shiny egg unless the hatch UI explicitly offers that option — save Prismatic Balls for shiny encounters or shiny eggs (Purp).",
        ],
      },
      {
        heading: "When to spend a Prismatic Ball",
        bullets: [
          "**Yes** — hatching a **Shiny Egg** you want as Shiny + Prismatic + SSS (Purp).",
          "**Yes** — capturing a **confirmed wild shiny** when you want prismatic looks without parking the 149 pity stack (Purp’s alternate to the egg method).",
          "**No** — random normal catches; balls are scarce mid-game.",
          "**Alternate** — park prismatic pity at 149 and catch the natural shiny with a **King Ball** instead ([pity explained](/blog/evomon-pity-system-explained)); ImSoaren: King Ball covers SSS when pity already forces prismatic.",
        ],
      },
      {
        heading: "Related pages (don’t duplicate farms here)",
        paragraphs: [
          "Catch loop and normal eggs: [How to Get Eggs](/blog/how-to-get-eggs-evomon). Field odds and boss egg notes: [Shiny Egg Chance](/blog/evomon-shiny-egg-chance). Sparkle vs shiny combat value: [Shiny vs Sparkle](/guides/mutations/shiny-vs-sparkle).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a prismatic egg in Evomon?",
        a: "Usually players mean hatching a Shiny Egg with a Prismatic Ball for Shiny + Prismatic. Separately, some rewards grant an item named Prismatic Egg that hatches a random prismatic (cosmetic) Evomon — check the exact egg name in your inventory.",
      },
      {
        q: "Does a Prismatic Egg give shiny stats?",
        a: "A named Prismatic Egg reward is described as a prismatic/cosmetic hatch, not a shiny. Shiny stats come from a Shiny Egg hatch or a wild/field shiny. Prismatic alone does not add combat stats.",
      },
      {
        q: "How do I get Shiny + Prismatic from an egg?",
        a: "Farm a Shiny Egg by catching after KOs, then hatch it using a Prismatic Ball. Purp’s July 2026 guide says that hatch option guarantees shiny, prismatic, and SSS talent together.",
      },
      {
        q: "Should I use a Prismatic Ball on every egg?",
        a: "No. Save Prismatic Balls for shiny eggs or confirmed shiny catches. Normal species eggs are the volume farm and do not need the ball.",
      },
    ],
    sources: [
      {
        label: "Purp — Full Shiny/Prismatic Guide (shiny egg + Prismatic Ball hatch)",
        url: "https://www.youtube.com/watch?v=t3Ar4Bslgzg",
        channel: "Purp",
      },
      {
        label: "Macrolo — Shiny hunting guide (Prismatic Ball on shiny egg)",
        url: "https://www.youtube.com/watch?v=xnc9cEJF1V8",
        channel: "Macrolo",
      },
      {
        label: "ImSoaren — Shiny hunting (eggs, boss no field pity, Prismatic Ball notes)",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
      {
        label: "Gamezebo — Eggs FAQ (named Prismatic Egg description)",
        url: "https://www.gamezebo.com/walkthroughs/how-to-get-eggs-in-evomon/",
        channel: "Gamezebo",
      },
    ],
  },
  {
    slug: "evomon-pity-system-explained",
    title: "Evomon Pity System Explained — When to Use the 149 Trick",
    description:
      "How Evomon shiny and prismatic pity work (UI odds, 150/600 counters), what catching vs KO-and-run changes, when to park at 149, and when to skip the trick for eggs or boss lines.",
    published: "2026-07-22",
    gscTargets: [
      "evomon pity",
      "evomon pity system",
      "evomon 149 trick",
      "evomon prismatic pity",
      "149 pity evomon",
      "how does pity work in evomon",
    ],
    relatedGuides: [
      "/guides/mutations",
      "/guides/mutations/shiny-vs-sparkle",
      "/guides/mutations/shiny-egg",
      "/blog/what-does-shiny-do-evomon",
      "/blog/what-is-sparkle-evomon",
      "/blog/shiny-glowy-evomon-guide",
    ],
    quickAnswer:
      "Evomon pity is the **per-species guarantee counter** shown bottom-left in battle. Community UI reads (July 2026) put **prismatic ~0.8% with ~150 capture pity** and **shiny ~0.2% with ~600 pity**. **Prismatic pity only rises when you capture** that species — KO-and-run does not. The **149 trick** parks prismatic pity one below the guarantee, then you only catch when a **natural shiny** appears so one catch can land **Shiny + Prismatic**. Skip the trick for early progression, boss lines without field shiny pity, or when you still need egg volume from every catch.",
    sections: [
      {
        heading: "What “pity” means in Evomon",
        paragraphs: [
          "Unlike Pokémon-style soft resets, Evomon shows **odds and pity in the UI** after you fight a wild target. Creator [ImSoaren](https://www.youtube.com/watch?v=kA5s2l7tE7M) walks through a live panel: prismatic and shiny are **separate lines**, each with a percent chance and a pity number underneath.",
        ],
        bullets: [
          "**Prismatic (Sparkle)** — glow/pattern cosmetic. ImSoaren’s July 2026 UI read: **~0.8% (1 in 125)** and pity **150**.",
          "**Shiny** — recolor plus combat stats. Same video: **~0.2% (1 in 500)** and pity **600**.",
          "**Reveal timing** — you must **knock out** the wild Evomon; shiny shows after the **smoke** animation (not on the encounter splash).",
        ],
        callout: {
          title: "Community UI, not a patch notes dump",
          body: "Rates and pity caps are what creators read from the client in June–July 2026. Confirm the bottom-left panel on your own target after patches — numbers can differ by species or update.",
          variant: "warn",
        },
      },
      {
        heading: "What actually raises pity (catch vs run)",
        paragraphs: [
          "This is the part most “just KO forever” sessions get wrong. [Macrolo](https://www.youtube.com/watch?v=xnc9cEJF1V8) opens with it: if you keep knocking out Evomon and **running away**, you slow prismatic progress because **prismatic pity is capture-based**.",
        ],
        bullets: [
          "**Prismatic pity** — rises on a **successful capture** of that species. No capture → prismatic counter stays put (ImSoaren + Macrolo).",
          "**Catching also** — rolls **egg** drops and, per ImSoaren, advances the **shiny** pity line when you capture.",
          "**Shiny check** — still requires the KO + smoke reveal; Macrolo: you cannot see shiny status mid-fight, only after knockout.",
        ],
        callout: {
          title: "Default farm habit",
          body: "Unless you are deliberately parking prismatic pity at 149, catch the species you are grinding. Catching builds pity, XP, and egg odds in one loop.",
          variant: "tip",
        },
      },
      {
        heading: "The 149 trick — steps creators agree on",
        paragraphs: [
          "Goal: spend the **150th prismatic capture** on an Evomon that is **already shiny**, so you get **Shiny Prismatic** without burning a Prismatic Ball. Short-form [DoffyRobloxnoob](https://www.youtube.com/shorts/PeEeTIKeDZY) and full guides from ImSoaren / Macrolo describe the same stack:",
        ],
        bullets: [
          "1. Catch **one species** until prismatic pity shows **149 / 150** (or one below whatever your UI lists as the guarantee).",
          "2. **Stop catching** that species — KO, check smoke, and leave/move on if it is not shiny so the counter stays parked.",
          "3. When smoke reveals a **shiny**, catch it. That capture should consume the prismatic pity threshold and target **Shiny + Prismatic**.",
          "4. Prefer a **King Ball** on that catch if you want **SSS talent** on top — ImSoaren: no need for a Prismatic Ball if pity already forced prismatic; King Ball covers talent.",
        ],
        callout: {
          title: "Accidental catch = rebuild",
          body: "If you catch a non-shiny while parked at 149, you can spend the prismatic guarantee on a normal copy and have to rebuild the stack. Treat 149 as a hard stop on routine catches.",
          variant: "warn",
        },
      },
      {
        heading: "When to use 149 — and when to skip it",
        paragraphs: [
          "Pity stacking is a **flex / keeper** tool, not the default early-game route. Use the decision cut below so you do not freeze egg progress or stall story islands.",
        ],
        bullets: [
          "**Use 149** when you already have a working team, balls to spare, and you want **one Shiny Prismatic keeper** of a wild species you will keep (trade flex or long-term shiny).",
          "**Skip 149** while you still need **every catch** for eggs, dex fills, or XP — parking means **zero catches** on that species until a shiny appears.",
          "**Skip for many boss / mount lines** — ImSoaren: King of Flying and Thunder Cliffs boss lines **do not have field shiny pity**; the realistic shiny path is **shiny eggs from catches**, not 600 field pity. See [Shiny Egg Guide](/guides/mutations/shiny-egg).",
          "**Alternate to 149** — save a **Prismatic Ball** for a shiny encounter or **shiny egg hatch** (Macrolo) if you would rather spend the item than park for hundreds of KO checks.",
        ],
      },
      {
        heading: "When to stop a pity grind",
        bullets: [
          "**Stop parking** if you have not seen a shiny after a long KO streak and you need eggs/XP again — resume catching; you can rebuild prismatic pity later.",
          "**Stop chasing SSS on every shiny** if you only care about looks — ImSoaren: any shiny is fine for flex; SSS matters when you want battle strength.",
          "**Switch species** if the target is too slow to KO — volume of smoke reveals matters more than stubbornness on one hard spawn.",
          "**Read the full hub** for tables and boss rows: [Mutations Guide](/guides/mutations). For “does shiny even matter in fights?”, see [What Does Shiny Do](/blog/what-does-shiny-do-evomon).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Evomon pity?",
        a: "A per-species guarantee counter in the battle UI (bottom-left). Community reads put prismatic near 150 captures and shiny near 600. Hit the number and the next qualifying outcome is treated as guaranteed for that line.",
      },
      {
        q: "Does knocking out without catching raise prismatic pity?",
        a: "No. Creator guides (ImSoaren, Macrolo) say prismatic pity only increases on a successful capture of that species.",
      },
      {
        q: "How does the 149 pity trick work?",
        a: "Raise prismatic pity to 149, stop catching that species, KO until a natural shiny appears, then catch it so the 150th capture lands on the shiny for Shiny + Prismatic. Optional King Ball for SSS talent.",
      },
      {
        q: "Should beginners use the 149 trick?",
        a: "Usually no. Build a usable team and catch volume first. Park pity only when you can afford to skip catches on that species for a long shiny wait.",
      },
      {
        q: "Do boss shinies use the same pity?",
        a: "Several boss/mount lines lack field shiny pity. Community guides rely on catching for shiny eggs instead — different loop from the 149 wild trick.",
      },
    ],
    sources: [
      {
        label: "ImSoaren — Best Shiny Hunting Guide (odds, pity, 149, eggs, bosses)",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
      {
        label: "Macrolo — Shiny hunting & prismatic guide (catch pity, 149 park, Prismatic Ball eggs)",
        url: "https://www.youtube.com/watch?v=xnc9cEJF1V8",
        channel: "Macrolo",
      },
      {
        label: "DoffyRobloxnoob Shorts — 149/150 pity stacking",
        url: "https://www.youtube.com/shorts/PeEeTIKeDZY",
        channel: "DoffyRobloxnoob",
      },
    ],
  },
  {
    slug: "evomon-tiktok-video-challenge-july-august-2026",
    title: "Evomon TikTok Video Challenge (July 20–Aug 19, 2026) — Robux Rewards",
    description:
      "Evomon TikTok Video Challenge window: July 20–August 19, 2026 UTC. Post original #evomon videos for view milestones and ranked Robux rewards — join Evomon Devs early for payout eligibility.",
    published: "2026-07-21",
    gscTargets: [
      "evomon video challenge",
      "evomon tiktok challenge",
      "evomon robux challenge",
      "evomon tiktok robux",
      "evomon video challenge robux",
    ],
    relatedGuides: ["/codes", "/guides/beginner", "/dex", "/blog"],
    quickAnswer:
      "From **July 20, 2026 07:00 UTC to August 19, 2026 07:00 UTC**, original **Evomon** videos first posted on **TikTok** with **#evomon** can earn Robux: **view rewards** for each eligible video with **10,000+** views, plus **ranked rewards** for videos with **300,000+** views. Keep videos public. To receive rewards you must be in the **Evomon Devs** Roblox group for **at least 14 days** when rewards are paid — join early.",
    sections: [
      {
        heading: "Event window & platform",
        paragraphs: [
          "Community posts describe an **Evomon Video Challenge** running **July 20, 2026, 07:00 UTC – August 19, 2026, 07:00 UTC** on **TikTok** only. Treat this page as a player-facing summary of those rules; always confirm the live Event Rules in official Evomon Discord / Roblox group announcements before you spend a long shoot day.",
        ],
        bullets: [
          "**Platform** — TikTok.",
          "**Window** — July 20 → August 19, 2026 (07:00 UTC both ends).",
          "**Hashtag** — include **#evomon** on the post.",
          "**Visibility** — keep the video **public**.",
        ],
        callout: {
          title: "Community-reported",
          body: "This write-up is based on a community forum notice, not a pasted official press release. Cross-check dates, view thresholds, and payout rules in official channels before relying on them.",
          variant: "warn",
        },
      },
      {
        heading: "Two ways to earn",
        paragraphs: [
          "Reported reward tracks separate **per-video view milestones** from a **top video** leaderboard. There is no requirement to combine views across uploads for the first track — each qualifying video can count on its own.",
        ],
        bullets: [
          "**Video View Rewards** — each eligible video with **10,000+** views can earn Robux. Post as many qualifying videos as you like.",
          "**Top Video Rewards** — eligible videos with **300,000+** views can compete for ranked rewards.",
          "**Eligible uploads** — original Evomon videos **first posted** on TikTok during the Event Period (not reuploads from earlier).",
        ],
      },
      {
        heading: "How to join (checklist)",
        bullets: [
          "Shoot an **original** Evomon video (gameplay, guides, hunts — still original footage).",
          "Post it on TikTok **during** the UTC window above.",
          "Add **#evomon** and leave the video **public**.",
          "Read the full Event Rules wherever the organizers link them (often tagged as the video-challenge notice in Discord/forum).",
          "Join [Evomon Devs on Roblox](https://www.roblox.com/communities/665060893/Evomon-Devs) **now** so you clear the **14-day membership** gate before reward distribution.",
        ],
        callout: {
          title: "Reward delivery gate",
          body: "Reported rule: you must have been a member of the Evomon Devs Group for at least 14 days at payout time. Late joiners who hit view goals can still miss Robux if the clock is short.",
          variant: "tip",
        },
      },
      {
        heading: "While you wait for views",
        paragraphs: [
          "If you are grinding content for the challenge, keep your in-game account fed: redeem [Evomon codes](/codes), follow the [beginner route](/guides/beginner), and grab sprites or spawn notes from the [dex](/dex) so your TikToks stay accurate.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is the Evomon TikTok Video Challenge?",
        a: "Community notices list July 20, 2026, 07:00 UTC through August 19, 2026, 07:00 UTC. Confirm on official Evomon channels before you plan uploads.",
      },
      {
        q: "Do I need 10,000 total views across all videos?",
        a: "No — the reported view-reward track counts each eligible video with 10,000+ views on its own. You can post multiple qualifying videos.",
      },
      {
        q: "What hashtag do I need?",
        a: "Include #evomon when you post. Keep the video public and first-posted on TikTok during the event window.",
      },
      {
        q: "Why join the Evomon Devs Roblox group?",
        a: "Reported payout rule: you must be a group member for at least 14 days when rewards are distributed. Join early at the Evomon Devs community page on Roblox.",
      },
    ],
    sources: [
      {
        label: "Evomon Devs (Roblox group)",
        url: "https://www.roblox.com/communities/665060893/Evomon-Devs#!/about",
      },
    ],
  },
  {
    slug: "shiny-sparkit-evomon-guide",
    title: "Shiny Sparkit Evomon Guide — Lava Crag Hunt & Worth It",
    description:
      "Hunt Shiny Sparkit on Lava Crag as a fast early Fire farm. Compare Sparkit → Emfox → Empixy vs Lavite for stone priority, and keep Talent in mind before long shiny sessions.",
    published: "2026-07-19",
    gscTargets: [
      "shiny sparkit evomon",
      "evomon shiny sparkit",
      "sparkit shiny evomon",
      "how to get shiny sparkit in evomon",
      "sparkit evomon location",
      "sparkit evomon",
    ],
    relatedGuides: [
      "/dex/sparkit",
      "/dex/lavite",
      "/map-zones#lava-crag",
      "/guides/mutations",
      "/tier-list/evolution-priority",
      "/blog/shiny-lavite-evomon-guide",
      "/blog/sparkit-evolution-vs-lavite",
      "/tier-list/early-carries",
    ],
    quickAnswer:
      "To hunt **Shiny Sparkit in Evomon**, farm wild Sparkit on **Lava Crag** (third island, roughly Lv 30–43). Bring Water coverage so Fire fights stay short, check each post-KO reveal, and keep a copy with usable Talent — not only the shiny color. Sparkit is a strong **early Fire** shiny target; long-term Evolution Stones still usually prefer **Lavite → Lavarock** on the same island.",
    sections: [
      {
        heading: "Where to find Shiny Sparkit",
        paragraphs: [
          "Sparkit is a **Lava Crag** wild spawn. On our [Map Zones](/map-zones#lava-crag) list it sits in the island’s mid band (about Lv 30–43), alongside Lavite, with Empixy as the zone boss later. Candyblox’s July 2026 hunt video shows a full Shiny Sparkit catch session on this route — use it as community footage, then confirm spawn levels in your own client.",
          "Practical loop: clear wild Sparkit quickly, watch the reveal for the shiny color change, and catch the keeper you want. General shiny UI, pity, and Prismatic vs Shiny rules live in the [Mutations Guide](/guides/mutations); this post focuses on **why Sparkit** and **how it compares to Lavite**.",
        ],
        callout: {
          title: "Route answer",
          body: "Lava Crag + Water-type clears. If each Sparkit fight is slow, upgrade coverage first — a slow loop makes shiny hunting feel worse than the odds.",
          variant: "tip",
        },
      },
      {
        heading: "Why Sparkit is a practical shiny target",
        paragraphs: [
          "Community tier notes treat Sparkit → Emfox as an **early Fire** line: easy Lava Crag access, fast encounters, and a common reason to skip or bench the Blazpup starter once the island opens. Base speed and Sp. Atk on Sparkit are already tilted toward a glassier DPS profile (community wiki spreads list Speed 55 / Sp. Atk 50 at base), so a shiny stat layer can feel noticeable in early clears.",
          "That does **not** mean Sparkit should eat every Evolution Stone. July 2026 lists repeatedly pivot long-term fire investment to **Lavite / Lavarock** on the same island. Hunt Shiny Sparkit for a strong early Fire slot; do not assume it replaces Lavite as your forever fire carry.",
        ],
        bullets: [
          "**Accessible farm** — wild Sparkit on Lava Crag, not a late locked island.",
          "**Fast loops** — shorter fights mean more shiny checks per hour than boss-gated hunts.",
          "**Real shiny benefit** — Shiny adds stats; Prismatic/Sparkle alone is cosmetic.",
          "**Starter substitute** — often fills the early Fire role better than forcing Blazpup stones.",
        ],
      },
      {
        heading: "Sparkit vs Lavite — which shiny should you farm?",
        paragraphs: [
          "Both sit on Lava Crag. If you only have time for one deep shiny project, community guides usually favor **Shiny Lavite** for the Lavarock payoff. Sparkit still makes sense when you need Fire coverage **now**, want a quicker wild loop, or already planned to keep Emfox/Empixy as a secondary fire slot.",
          "See [Shiny Lavite Guide](/blog/shiny-lavite-evomon-guide) and [Evolution Priority](/tier-list/evolution-priority) before dumping every stone into the Sparkit line.",
        ],
        bullets: [
          "**Farm Sparkit shiny** — early Fire DPS, fast encounters, Blazpup alternative.",
          "**Prioritize Lavite stones** — longer-term Fire/Rock carry on the same island.",
          "**Avoid dual fire waste** — do not fully fund Blazpup + Sparkit + Lavite at once.",
        ],
        callout: {
          title: "Stone budget",
          body: "A Shiny Sparkit can be a keeper for the mid game. Scarce Evolution Stones should still follow your best late carry — often Lavite — unless Sparkit is genuinely your main damage slot.",
          variant: "warn",
        },
      },
      {
        heading: "Evolution line: Sparkit → Emfox → Empixy",
        paragraphs: [
          "Dex order on the Fire line is **Sparkit (#021) → Emfox (#022) → Empixy (#023)**. Map data also lists Empixy as the Lava Crag boss at the top of the island level band — treat boss Empixy and your evolved Empixy as related names, not identical farming advice.",
          "Evolve when the line is clearing content for you. If Lavite is already online and Sparkit is only a temporary Fire patch, delay stones and keep the shiny for later or for collection.",
        ],
      },
      {
        heading: "Step-by-step Shiny Sparkit plan",
        bullets: [
          "Unlock Lava Crag and bring Water coverage that defeats Sparkit consistently.",
          "Farm wild Sparkit encounters; skip burning premium balls on junk Talent copies.",
          "Check every post-KO reveal for shiny — and read Talent before you celebrate.",
          "Keep strong normal SSS (or high Talent) copies while hunting; shiny without Talent is not automatically better.",
          "When a shiny appears, use your usual ball plan (King Ball for Talent goals, or Prismatic Ball only if you also want Prismatic cosmetics).",
          "Decide stones with Empixy vs Lavite in mind — shiny alone does not set evolution priority.",
        ],
      },
      {
        heading: "Is Shiny Sparkit worth the time?",
        paragraphs: [
          "Yes if Lava Crag fights are already fast and you still need a Fire attacker. Sparkit is one of the earliest comfortable shiny farms that also fills a real team role.",
          "If the hunt stalls Ascension or island progress, park a strong normal Sparkit, push Lavite/route goals, and return later. Shiny is a stat layer, not a substitute for levels and coverage.",
        ],
        callout: {
          title: "Community-sourced note",
          body: "Candyblox’s catch video confirms players do hunt Shiny Sparkit on this route. Exact session length and pity outcomes are not published as official rates — trust the in-game counters after patches.",
          variant: "note",
        },
      },
    ],
    faqs: [
      {
        q: "Where do I get Shiny Sparkit in Evomon?",
        a: "Farm wild Sparkit on Lava Crag (third island). Community map data places Sparkit around Lv 30–43 on that zone.",
      },
      {
        q: "Is Shiny Sparkit worth hunting?",
        a: "Yes as an early Fire shiny when encounters are fast. For long-term Evolution Stones, Lavite → Lavarock is still the more common priority on the same island.",
      },
      {
        q: "What does Sparkit evolve into?",
        a: "Sparkit evolves into Emfox, then Empixy. Confirm stone and level requirements in-game before spending materials.",
      },
      {
        q: "Should I shiny hunt Sparkit or Lavite first?",
        a: "Hunt Sparkit if you need Fire coverage now. Prefer Lavite if you only want one deep shiny project aimed at a late Fire/Rock carry.",
      },
      {
        q: "Is Prismatic Sparkit stronger than Shiny Sparkit?",
        a: "No. Prismatic/Sparkle is cosmetic. Shiny adds combat stats. Shiny + Prismatic combines both.",
      },
    ],
    sources: [
      {
        label: "Candyblox — I Caught Shiny Sparkit in EVOMON Roblox",
        url: "https://www.youtube.com/watch?v=p7lPXM3i_6A",
        channel: "Candyblox",
      },
    ],
  },
  {
    slug: "shiny-lavite-evomon-guide",
    title: "Shiny Lavite Evomon Guide — Lava Crag Hunt & Worth It",
    description:
      "Farm Shiny Lavite at Lava Crag with Water coverage, then keep the best copy for Lavarock. Community videos recommend the hunt because the line stays useful late, but SSS Talent and a usable nature still matter.",
    published: "2026-07-17",
    gscTargets: [
      "shiny lavite evomon",
      "evomon shiny lavite",
      "lavite shiny evomon",
      "how to get shiny lavite in evomon",
      "evomon lavite location",
      "lavite evomon",
    ],
    relatedGuides: [
      "/dex/lavite",
      "/dex/lavarock",
      "/blog/best-nature-lavite-evomon",
      "/blog/sparkit-evolution-vs-lavite",
      "/guides/mutations",
      "/tier-list/evolution-priority",
      "/guides/beginner",
    ],
    quickAnswer:
      "To hunt **Shiny Lavite in Evomon**, farm wild Lavite on **Lava Crag (third island)** with a Water-type team that can clear the Fire/Rock line quickly. Purp recommends grinding Lavite until you get a **Shiny + SSS Talent** keeper because Lavarock remains useful into late-game boss routes. Shiny is valuable, but do not discard a strong normal SSS copy while waiting — Talent, nature, levels, and the eventual Lavarock build still matter.",
    sections: [
      {
        heading: "Where to find Shiny Lavite",
        paragraphs: [
          "Lavite appears on **Lava Crag**, the third-island route. In Purp's comprehensive beginner guide, he recommends bringing the Water type obtained on the previous route and repeatedly farming Lavite because the line is one of his highest-priority early catches.",
          "The practical loop is simple: use Water coverage, defeat wild Lavites quickly, check the post-KO reveal, and catch the copy you want to keep. The general shiny UI and pity behavior are covered in the [Mutations Guide](/guides/mutations); this page focuses on why Lavite is a worthwhile target.",
        ],
        callout: {
          title: "Route answer",
          body: "Lava Crag + fast Water-type clears. If each fight is still slow, progress your Water team first instead of forcing a long shiny session.",
          variant: "tip",
        },
      },
      {
        heading: "Why Lavite is a good shiny target",
        paragraphs: [
          "Multiple community videos agree on the reason: Lavite is available unusually early for a line that remains useful late. ItzVexo ranks Lavite as an S-tier fire pick, citing easy third-island access, combo value, Counter, and endgame relevance.",
          "Purp goes further and recommends farming a Shiny SSS Lavite because Lavarock is a main evolution priority and can be used against later bosses. Rexon's beginner guide reaches a similar conclusion: a shiny is worth pursuing for a long-term Lavarock, but the shiny bonus is not so large that a good normal SSS copy becomes useless.",
        ],
        bullets: [
          "**Accessible route** — wild Lavite is farmable on Lava Crag.",
          "**Long-term evolution** — Lavite evolves into Lavarock, a common carry/wall pick.",
          "**Real shiny benefit** — shiny adds stats; Prismatic/Sparkle alone is cosmetic.",
          "**Efficient weakness coverage** — community guides use Water to speed up the route.",
        ],
      },
      {
        heading: "Shiny, SSS Talent, or nature — what comes first?",
        paragraphs: [
          "The ideal keeper combines all three, but community creators do not treat shiny as the only quality check. Purp recommends grinding for Shiny + SSS, while Rexon says a normal SSS Lavarock is still a reasonable shortcut if you do not want to wait for the perfect shiny.",
          "For the standard Counter build, nature is a separate roll. Our [Best Nature for Lavite](/blog/best-nature-lavite-evomon) source review prioritizes +HP, then defenses, and warns against lowering HP. Do not assume that any shiny automatically has the right Talent distribution or nature.",
        ],
        bullets: [
          "**Best-case keeper** — Shiny, SSS Talent, useful HP/defense nature.",
          "**Progression keeper** — normal SSS with a good nature; evolve it if waiting blocks progress.",
          "**Do not confuse Prismatic with power** — Prismatic changes appearance, not combat stats.",
        ],
      },
      {
        heading: "Step-by-step Shiny Lavite farming plan",
        bullets: [
          "Unlock Lava Crag and build a Water-type lead that can defeat Lavite consistently.",
          "Use fast wild encounters rather than spending premium balls on ordinary copies.",
          "Check every post-KO reveal for the shiny color change and watch the in-game counters.",
          "Keep strong SSS normal copies while hunting; compare Talent and nature before releasing anything valuable.",
          "When a shiny appears, use a King Ball if your goal is guaranteed SSS Talent, or follow the Prismatic Ball / pity plan only if you want Shiny + Prismatic.",
          "Evolve the keeper into Lavarock when it is your best stone investment, not merely because it is shiny.",
        ],
      },
      {
        heading: "Is Shiny Lavite worth the time?",
        paragraphs: [
          "Usually yes once Lava Crag fights are fast, because this is not a cosmetic-only side project: shiny adds a stat layer to a line you can keep using. The return is better than shiny-hunting a creature you plan to replace immediately.",
          "However, levels and build quality can outweigh the shiny bonus. If the hunt stalls your account, use the strongest normal SSS Lavite you already own, progress into faster farming, and return later. See [Evolution Priority](/tier-list/evolution-priority) before spending scarce stones.",
        ],
        callout: {
          title: "Community-sourced recommendation",
          body: "The value judgment comes from July 2026 creator guides, not an official balance statement. Re-check the in-game UI after balance updates.",
          variant: "note",
        },
      },
    ],
    faqs: [
      {
        q: "Where do I get Shiny Lavite in Evomon?",
        a: "Hunt wild Lavite on Lava Crag, the third island. Community guides recommend Water coverage to clear the Fire/Rock route quickly.",
      },
      {
        q: "Is Shiny Lavite worth hunting?",
        a: "Yes for players planning to use Lavarock long term. Lavite is available early, the evolved line remains useful, and shiny provides a real stat increase.",
      },
      {
        q: "Should I wait for Shiny SSS Lavite before evolving?",
        a: "It is the ideal target, but not mandatory. A normal SSS Lavite with a useful nature can carry progression while you return for a shiny later.",
      },
      {
        q: "What is the best nature for Shiny Lavite?",
        a: "For Counter-focused Lavarock builds, community testing prioritizes +HP, then defenses. Shiny and nature are separate rolls, so check both.",
      },
      {
        q: "Is Prismatic Lavite stronger than Shiny Lavite?",
        a: "No. Prismatic/Sparkle is cosmetic, while Shiny adds stats. A Shiny + Prismatic copy combines the combat bonus with the cosmetic effect.",
      },
    ],
    sources: [
      {
        label: "Purp — Comprehensive beginner guide (Lavite route and SSS shiny target)",
        url: "https://www.youtube.com/watch?v=KRWoAlccQeU",
        channel: "Purp",
      },
      {
        label: "Rexon — Beginner guide (Lavarock investment and shiny trade-off)",
        url: "https://www.youtube.com/watch?v=NOB08m6Pjuw",
        channel: "Rexon",
      },
      {
        label: "ItzVexo — Evomon tier list (Lavite access, Counter, endgame value)",
        url: "https://www.youtube.com/watch?v=QT1vdzAAjn0",
        channel: "ItzVexo",
      },
    ],
  },
  {
    slug: "pebble-evomon-guide",
    title: "Pebble Evomon Guide — Location, Evolution & Is It Worth It?",
    description:
      "Pebble is a Verdant Valley early tank that evolves through Pebroll into Pebgolem. Catch one for early walls and Counter access, but do not over-invest after Lava Crag when Lavite becomes the stronger long-term stone target.",
    published: "2026-07-17",
    gscTargets: [
      "pebble evomon",
      "evomon pebble",
      "pebble evomon build",
      "pebble evomon evolution",
      "evomon pebble location",
      "is pebble good in evomon",
      "pebgolem evomon",
    ],
    relatedGuides: [
      "/dex/pebble",
      "/tier-list/early-carries",
      "/tier-list/evolution-priority",
      "/guides/beginner",
      "/dex/lavite",
    ],
    quickAnswer:
      "**Pebble is worth catching early in Evomon**, especially if you need a safe Rock tank for Verdant Valley bosses. It evolves through **Pebroll into Pebgolem** and gains access to Counter later in the line. Community guides consistently rate it as a strong early-to-midgame wall, but they also agree it falls off or should be replaced once stronger long-term options such as Lavite/Lavarock become available.",
    sections: [
      {
        heading: "Where to find Pebble in Evomon",
        paragraphs: [
          "Pebble is an early **Verdant Valley** catch. It is one of the first creatures community guides tell new players to consider rather than blindly investing in every quest target.",
          "Purp recommends keeping one or two good Pebbles because the line unlocks Counter later. Rexon is more conservative: Pebble is useful when evolved or when early fights are difficult, but the game soon offers many alternatives. Those two views point to the same decision — catch a good one, then invest only if it solves an actual progression wall.",
        ],
      },
      {
        heading: "Pebble evolution line",
        paragraphs: [
          "The site's cross-source Dex records the line as **Pebble → Pebroll → Pebgolem**. The value of evolving is durability: ItzVexo calls Pebble an amazing early-game Evomon and a good midgame tank, while warning that it falls off in deep endgame.",
          "Do not confuse Pebble with Tarro/Tarragon — they are different lines. Pebble is the early Rock wall; Tarro/Tarragon is the later Grass/Dragon tank.",
        ],
        bullets: [
          "**Pebble** — early Verdant Valley catch.",
          "**Pebroll** — middle evolution in the Rock line.",
          "**Pebgolem** — final form and the point of the early tank investment.",
        ],
      },
      {
        heading: "What is the safest Pebble build?",
        paragraphs: [
          "No reliable July 2026 creator source we found gives a Pebble-only best-moves or exact-nature table, so this guide does not invent one. What the videos do support is a tank role, later Counter access, and the game's general nature rule for tanks.",
          "Purp's system explanation says tank characters generally want **HP or defenses up** and can afford to lower Speed. Treat that as a general starting rule, not a verified Pebble-exclusive best nature. Check the current in-game move and nature tooltips before spending reroll items.",
        ],
        bullets: [
          "**Role** — early Rock tank / wall.",
          "**Stat direction** — HP and defenses are the safe generic tank priority.",
          "**Key mechanic** — Counter later in the evolution line, according to Purp's beginner guide.",
          "**Avoid overclaiming** — no sourced exact Pebble move set or named best nature yet.",
        ],
        callout: {
          title: "Why this is not a fake build list",
          body: "The available videos support Pebble's role and investment window, but not a definitive three-move meta build. This page separates verified guidance from assumptions.",
          variant: "note",
        },
      },
      {
        heading: "When should you evolve Pebble?",
        paragraphs: [
          "Evolve Pebble when its bulk or Counter access helps you clear the bosses in front of you. Our evolution-priority model places it behind the line already winning your current route — most often Lavite after Lava Crag.",
          "Rexon specifically warns against wasting scarce evolution stones on early creatures you will stop using. Purp's recap similarly recommends Pebble early, then replacing it with Lavite and making Lavarock the main evolution priority.",
        ],
        bullets: [
          "**Evolve now** — Pebble is your main wall and early bosses are blocking progression.",
          "**Wait** — you have reached Lava Crag and still need stones for Lavite/Lavarock.",
          "**Replace later** — your team has stronger typed tanks or endgame carries and Pebgolem no longer solves a matchup.",
        ],
      },
      {
        heading: "Is Pebble good in the endgame?",
        paragraphs: [
          "Community consensus is **good early, useful midgame, replaceable late**. ItzVexo places Pebble in A tier for its early and midgame value but explicitly says it falls off in endgame. Purp recommends replacing the early Pebble slot with Lavite/Lavarock as progression opens.",
          "That does not make Pebble a bad catch. It means the correct ROI is to use it as a cheap early wall, not automatically pour every evolution stone, premium ball, and reroll potion into it.",
        ],
      },
      {
        heading: "Pebble checklist for new players",
        bullets: [
          "Catch Pebble in Verdant Valley with the free basic ball unless a rare shiny or exceptional copy appears.",
          "Compare Talent rolls and keep the best practical copy; do not spend a premium SSS ball by default.",
          "Use it as an early Rock wall and evolve only when it helps current progression.",
          "Prioritize HP/defense direction for a tank, but verify the live nature tooltip.",
          "Reassess at Lava Crag: Lavite/Lavarock usually has better long-term evolution-stone ROI.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where is Pebble in Evomon?",
        a: "Pebble is an early catch in Verdant Valley. It is one of the first useful tank options available to new players.",
      },
      {
        q: "What does Pebble evolve into?",
        a: "Pebble evolves into Pebroll and then Pebgolem, forming the early Rock tank line.",
      },
      {
        q: "Is Pebble good in Evomon?",
        a: "Yes in early and midgame. Community tier lists call it a strong early tank, but it generally falls off or gets replaced in deep endgame.",
      },
      {
        q: "Should I use an Evolution Stone on Pebble?",
        a: "Only if Pebble is actively helping you clear an early wall. Once Lava Crag opens, saving stones for Lavite/Lavarock is usually the stronger long-term choice.",
      },
      {
        q: "What is the best nature for Pebble?",
        a: "No reliable source currently confirms one named Pebble-only best nature. For tanks generally, community guidance favors HP or defenses and treats Speed as expendable.",
      },
    ],
    sources: [
      {
        label: "Purp — Comprehensive beginner guide (Pebble, Counter, replacement timing)",
        url: "https://www.youtube.com/watch?v=KRWoAlccQeU",
        channel: "Purp",
      },
      {
        label: "Rexon — Beginner guide (early investment and evolution-stone warning)",
        url: "https://www.youtube.com/watch?v=NOB08m6Pjuw",
        channel: "Rexon",
      },
      {
        label: "ItzVexo — Evomon tier list (early tank, midgame value, endgame falloff)",
        url: "https://www.youtube.com/watch?v=QT1vdzAAjn0",
        channel: "ItzVexo",
      },
    ],
  },
  {
    slug: "evomon-shiny-bluebird-guide",
    title: "Evomon Shiny Bluebird Guide - Route, Pity & Worth It",
    description:
      "Shiny Bluebird is worth hunting because wild Bluebirds spawn on the Raven Ridge upper tree route. Use the wild route over boss-only cycles, check smoke after KOs, and save premium balls for confirmed shiny or shiny-egg moments.",
    published: "2026-07-16",
    gscTargets: [
      "evomon shiny bluebird",
      "shiny bluebird evomon",
      "bluebird shiny evomon",
      "evomon bluebird shiny",
      "evomon bluebird route",
      "evomon bluebird location",
    ],
    relatedGuides: [
      "/dex/bluebird",
      "/guides/mutations",
      "/guides/mutations/shiny-vs-sparkle",
      "/guides/mutations/shiny-egg",
      "/blog/shiny-glowy-evomon-guide",
      "/tier-list",
    ],
    quickAnswer:
      "**Shiny Bluebird is one of the cleaner shiny hunts in Evomon** because Bluebird has a wild route at **Raven Ridge**. Purp's July 2026 shiny/prismatic guide shows that you can climb the small tree trunk near the Volcras King area and farm wild Bluebirds above the boss route. Hunt wild Bluebirds for faster KOs, check the smoke reveal after each knockout, and only spend King Balls or Prismatic Balls when you have a confirmed shiny or shiny egg plan.",
    sections: [
      {
        heading: "Where to find Bluebird for a shiny hunt",
        paragraphs: [
          "For **Evomon shiny Bluebird** searches, the important route detail is that Bluebird is not only a boss-side target. Community creator [Purp](https://www.youtube.com/watch?v=t3Ar4Bslgzg) points out that many players think Bluebird only comes from the lower Volcras King area, but wild Bluebirds also spawn on the upper Raven Ridge path.",
          "His route note: climb the small tree trunk near the area, walk along the upper path, and farm the Bluebirds that spawn there. That matters because wild encounters are faster than repeating boss cycles when your goal is to check many shiny reveals.",
        ],
        callout: {
          title: "Fast answer",
          body: "Farm wild Bluebirds on the Raven Ridge upper tree route when possible. Use boss or shiny-egg planning only when you are targeting boss-line variants or cannot clear the wild route efficiently.",
          variant: "tip",
        },
      },
      {
        heading: "Why wild Bluebird beats boss-only farming",
        paragraphs: [
          "A shiny hunt is mostly a volume problem: more quick KOs means more smoke reveals and more pity progress. Purp says Bluebirds on the upper route are relatively simple to defeat even around midgame, while harder targets like Tarro and Arcub can turn shiny hunting into slow boss or party content.",
          "That is why Bluebird is a better blog target than a generic shiny-egg post. The route itself changes the recommendation: do not spend the whole session on Volcras King if your actual target is a regular **Shiny Bluebird**.",
        ],
        bullets: [
          "**Use the wild route for speed** - shorter fights and more reveal checks.",
          "**Use boss cycles for egg goals** - shiny eggs and special boss-line plans are a different loop.",
          "**Do not catch every normal Bluebird if you are parking prismatic pity** - see the 149 method on the Mutations Guide.",
        ],
      },
      {
        heading: "Is Shiny Bluebird worth it?",
        paragraphs: [
          "Yes, if Bluebird or its evolution **Volcrest** is part of your main team. Bluebird is already mentioned across the site as a strong Raven Ridge pickup and a late-game team option, especially after it evolves. A shiny version adds a stat layer, while normal prismatic/sparkle is mostly cosmetic.",
          "The practical rule: shiny hunt Bluebird after your team can clear the Raven Ridge route quickly. If the fights are still slow, finish progression first, then come back with higher levels and better ball supply.",
        ],
        bullets: [
          "**Good target** - Bluebird has a farmable wild route.",
          "**Good team fit** - Bluebird -> Volcrest is a common endgame line in community tier lists.",
          "**Not required on day one** - a higher-level normal Bluebird usually beats a low-level shiny you cannot train yet.",
        ],
      },
      {
        heading: "Shiny vs Prismatic Bluebird",
        paragraphs: [
          "Do not mix up the two goals. **Shiny Bluebird** changes the color palette and provides a small stat boost. **Prismatic Bluebird** adds pattern/color cosmetics and trading appeal, but Purp is clear that prismatic by itself does not increase battle stats.",
          "If you care about battles, prioritize shiny first. If you care about future trading or flex value, a Shiny + Prismatic Bluebird is better, but it takes more setup through Prismatic Ball hatching or the 149 prismatic pity trick.",
        ],
        bullets: [
          "**Shiny** - stat value, better for battle teams.",
          "**Prismatic / Sparkle** - cosmetic value, better for collection and future trading.",
          "**Shiny + Prismatic** - best flex combo, but do not waste premium balls on normal catches.",
        ],
      },
      {
        heading: "Step-by-step shiny Bluebird route",
        bullets: [
          "Unlock Raven Ridge and confirm your team can defeat Bluebirds quickly.",
          "Climb to the upper tree path near the Volcras King / Bluebird area.",
          "KO wild Bluebirds repeatedly and watch the smoke reveal after the battle.",
          "If you only want shiny, keep farming reveals until the shiny version appears.",
          "If you are stacking Shiny + Prismatic, stop normal catches when prismatic pity is one below the guarantee, then only catch once the shiny appears.",
          "Use a King Ball on the confirmed shiny if you need SSS talent; use Prismatic Ball when your goal is the Shiny + Prismatic combo.",
        ],
      },
      {
        heading: "When to use shiny eggs instead",
        paragraphs: [
          "Shiny eggs are still useful, but they are not the first plan for a regular Shiny Bluebird hunt. Eggs matter more when a target is boss-gated, slow to defeat, or lacks a normal field shiny route. Bluebird's wild route means you can usually hunt the shiny directly.",
          "If you do receive a **Shiny Bluebird Egg**, hatch planning changes: using a Prismatic Ball at hatch can force prismatic appearance on top of the guaranteed shiny. See the full [Shiny Egg Guide](/guides/mutations/shiny-egg) for the egg path.",
        ],
        callout: {
          title: "Do not overclaim the odds",
          body: "The game UI shows shiny/prismatic counters by target, but public community sources do not publish a fixed shiny-egg drop percentage for every species. Treat this as a route guide, not an exact odds table.",
          variant: "warn",
        },
      },
      {
        heading: "Related pages",
        paragraphs: [
          "For Bluebird stats, location notes, evolution copy, and team links, start with the [Bluebird Dex page](/dex/bluebird). For the full shiny/prismatic system, use the [Mutations Guide](/guides/mutations). For battle value, compare [Shiny vs Sparkle](/guides/mutations/shiny-vs-sparkle) before spending rare balls.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get Shiny Bluebird in Evomon?",
        a: "Farm wild Bluebirds on the Raven Ridge upper tree route, defeat them quickly, and check the smoke reveal after each knockout. A shiny appears through the shiny roll or pity for that target.",
      },
      {
        q: "Where does Bluebird spawn in Evomon?",
        a: "Community route notes place wild Bluebirds on an upper Raven Ridge path near the Volcras King area. Purp shows climbing a small tree trunk to reach the wild Bluebird route.",
      },
      {
        q: "Is Shiny Bluebird worth hunting?",
        a: "Yes if Bluebird or Volcrest is part of your team. Bluebird has a faster wild route than many boss targets, and shiny adds a stat layer that prismatic alone does not provide.",
      },
      {
        q: "Should I farm Volcras King for Shiny Bluebird?",
        a: "Not as your first plan for regular Shiny Bluebird. Use the wild Bluebird route for faster KOs. Boss cycles and shiny eggs are better for boss-line or egg-specific goals.",
      },
      {
        q: "Is Prismatic Bluebird stronger than Shiny Bluebird?",
        a: "No. Prismatic/Sparkle is mainly cosmetic. Shiny is the variant with a stat boost, so battle-focused players should prioritize shiny before cosmetic prismatic rolls.",
      },
    ],
    sources: [
      {
        label: "Purp - Full Shiny/Prismatic Guide with Bluebird route",
        url: "https://www.youtube.com/watch?v=t3Ar4Bslgzg",
        channel: "Purp",
      },
    ],
  },
  {
    slug: "best-nature-lavite-evomon",
    title: "Best Nature for Lavite in Evomon — HP Counter Build Guide",
    description:
      "For Lavite/Lavarock Counter teams: reroll for +10% HP nature first (avoid -HP like Anxious). Skip speed and special attack. Ember + Stone Edge + Counter per community builds.",
    published: "2026-07-13",
    gscTargets: [
      "best nature for lavite evomon",
      "best nature for lavite in evomon",
      "lavite best nature evomon",
      "evomon best nature for lavite",
      "best nature for lavarock",
      "best nature for lava rock",
      "best nature for lavarock evomon",
      "best trait for lavite evomon",
      "evomon lavite build",
    ],
    relatedGuides: [
      "/natures",
      "/dex/lavite",
      "/tier-list/early-carries",
      "/tier-list/evolution-priority",
      "/guides/beginner",
    ],
    quickAnswer:
      "For the standard **Counter** Lavite/Lavarock build (Lavarock is often searched as **lava rock**), community guides prioritize a nature that **raises HP (+10%)** — Purp ranks **HP first**, then defenses, then attack. **Avoid any nature that lowers HP** (e.g. **Anxious** in his reroll demo). Do **not** chase speed or special attack on Counter sets; those stats do not help Counter damage. Reroll with **nature potions** until you hit +HP.",
    sections: [
      {
        heading: "How nature works in Evomon",
        paragraphs: [
          "Every Evomon gets a **random nature on catch**. Per [Roblox Guides](https://www.youtube.com/watch?v=UiopSjbc9rY), each nature **permanently +10% one stat and −10% another** among HP, Attack, Special Attack, Defense, Special Defense, and Speed.",
          "Unhappy with the roll? Use a **nature reroll potion** (NPC trainers, battle pass, codes, and other rewards). Tap the **?** icon on the nature box to read the exact +/-.",
          "[AccelToWin](https://www.youtube.com/watch?v=6F0TlzcAgX0) notes **nature is separate from talent and trait** — SSS talent and trait rerolls are a different grind. Nature only adjusts the percentage spread.",
        ],
      },
      {
        heading: "Best nature priority for Lavite / Lavarock (Counter build)",
        paragraphs: [
          "Most meta Lavarock guides — including [Purp’s OP Lavarock breakdown](https://www.youtube.com/watch?v=ywEaVgqMm7k) — assume you spam **Counter** on bosses. Counter returns **double the damage taken**; Lavarock’s high HP pool makes that hit hard.",
        ],
        bullets: [
          "**#1 — +HP nature** — More max HP = more Counter damage and survivability.",
          "**#2 — +Defense or +Special Defense** — Helps you survive hits before Counter fires (Purp’s second choice).",
          "**#3 — +Attack** — Only matters for **Stone Edge** and physical fire moves; Counter ignores Attack scaling in his testing.",
          "**Avoid −HP** — Purp calls lowering HP “the worst thing”; **Anxious** in his reroll clip penalizes HP.",
          "**Avoid +Speed / +Special Attack** — Lavarock is naturally slow; speed is wasted. Special Attack does not buff Counter or his recommended **Ember** physical slot.",
        ],
        callout: {
          title: "Purp’s reroll example",
          body: "He rerolled away from **Anxious** (−HP) into a **+HP / −Attack** nature and kept it — less Stone Edge damage, but more HP for Counter. That trade is intentional on boss teams.",
          variant: "tip",
        },
      },
      {
        heading: "If you are NOT running Counter",
        paragraphs: [
          "Purp’s alternate spread when Counter is not the matchup: invest in **Attack + both defenses**, still **skip Speed and Special Attack**. Without Counter, Lavarock acts more like a bulky attacker — Adamant-style +Attack natures from the general guide fit better here ([Roblox Guides](https://www.youtube.com/watch?v=UiopSjbc9rY) cites **Adamant** for physical dealers, **Modest** for special attackers).",
          "Lavite/Lavarock’s recommended boss kit in the same video: **Counter**, **Stone Edge**, and a **physical** fire move — **Ember over Cinder** (lower listed power but correct damage type).",
        ],
      },
      {
        heading: "Nature vs talent — roll both",
        paragraphs: [
          "Purp farms **triple SSS talent** Lavites in Lava Crag (world 3) and evolves the main shiny SSS copy to Lavarock. Talent vector potions control which stats get the big boosts — he wants **HP weighted high** in talent rolls to match the Counter plan.",
          "Catch volume on [Lava Crag](/dex/lavite) until you have SSS talent **and** a usable +HP nature, or reroll nature on your keeper. See [Early Carries](/tier-list/early-carries) and [Evolution Priority](/tier-list/evolution-priority) for when to spend stones.",
        ],
      },
      {
        heading: "What about “best trait for Lavite”?",
        paragraphs: [
          "GSC also shows **best trait for lavite** queries. Traits are rerolled separately (legendary traits are much rarer — AccelToWin cites ~1.5–2.7% examples). Purp did not recommend a specific Lavite trait in July 2026; prioritize **SSS talent + HP nature** first, trait second.",
          "Shiny adds a small stat layer on top — see [What Does Shiny Do?](/blog/what-does-shiny-do-evomon) if you are choosing between nature rerolls and shiny hunting.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best nature for Lavite in Evomon?",
        a: "For Counter boss builds: any nature with +10% HP. Second choice: +Defense or +Special Defense. Third: +Attack. Avoid −HP natures and avoid boosting Speed or Special Attack.",
      },
      {
        q: "What is the best nature for Lavarock / lava rock?",
        a: "Same Counter priority as Lavite: +HP first, then defenses, then Attack. Avoid −HP and skip Speed / Special Attack. Lavarock is the evolved form — the nature rolls on the pet and stays after evolution.",
      },
      {
        q: "Is Adamant good on Lavite?",
        a: "Adamant (+Attack, −Special Attack) fits physical attacker sets when you are not Counter-focused. Counter-heavy Lavarock teams prefer +HP per Purp’s priority list.",
      },
      {
        q: "How do I reroll Lavite’s nature?",
        a: "Use nature reroll potions from trainers, battle pass, codes, and other rewards. Each use randomizes nature; check the ? tooltip for +/- stats.",
      },
      {
        q: "Does nature matter more than talent?",
        a: "Both matter. Talent tier (aim SSS) sets your stat ceiling; nature is a permanent ±10% modifier. Community farmers reroll both on their main Lavarock.",
      },
    ],
    sources: [
      {
        label: "Purp — Lavarock OP build (nature, Counter, moves)",
        url: "https://www.youtube.com/watch?v=ywEaVgqMm7k",
        channel: "Purp",
      },
      {
        label: "Roblox Guides — Nature system & reroll",
        url: "https://www.youtube.com/watch?v=UiopSjbc9rY",
        channel: "Roblox Guides",
      },
      {
        label: "AccelToWin — Talent vs nature vs trait",
        url: "https://www.youtube.com/watch?v=6F0TlzcAgX0",
        channel: "AccelToWin",
      },
    ],
  },
  {
    slug: "evomon-shiny-egg-chance",
    title: "Evomon Shiny Egg Chance & Odds — Field Rates vs Egg Drops",
    description:
      "Shiny field odds are ~0.2% (1-in-500) with 600 pity; prismatic is separate. Shiny eggs are a post-catch roll with no published % — boss lines need them because field shiny pity does not apply.",
    published: "2026-07-13",
    gscTargets: [
      "evomon shiny egg chance",
      "evomon shiny egg odds",
      "evomon shiny odds",
      "shiny egg evomon chance",
      "evomon egg drop rate",
    ],
    relatedGuides: [
      "/guides/mutations/shiny-egg",
      "/guides/mutations",
      "/blog/how-to-get-eggs-evomon",
      "/blog/how-to-hatch-eggs-evomon",
      "/blog/shiny-arcapex-evomon-guide",
    ],
    quickAnswer:
      "**Field shiny chance** in Evomon is about **0.2% (1 in 500)** per encounter, with **600 KO/capture pity** per species. **Shiny eggs** are a **separate roll after you catch** a defeated Evomon — the game UI does not show a fixed shiny-egg percentage, but community guides treat it as much rarer than a normal egg. Boss lines (flying/thunder kings) **lack field shiny pity**, so shiny eggs are the realistic path.",
    sections: [
      {
        heading: "Two different “chance” numbers — don’t mix them up",
        paragraphs: [
          "Searchers asking **evomon shiny egg chance** usually mean one of two things: (1) the **field shiny rate** after you KO a wild Evomon, or (2) the **odds a catch drops a shiny egg**. They use different counters and different UI labels.",
        ],
        bullets: [
          "**Field shiny** — bottom-left after battle: ~**0.2%** (~**1 in 500**) + **600 pity** per species.",
          "**Prismatic (Sparkle)** — separate line, often ~**0.8%** (~**1 in 125**) in UI + **150 capture pity** (creator [ImSoaren](https://www.youtube.com/watch?v=kA5s2l7tE7M) reading July 2026 UI; rates can vary by encounter).",
          "**Shiny egg drop** — only rolls **after a successful catch** post-KO. Not the same as field shiny odds.",
        ],
        callout: {
          title: "Eggs require catches",
          body: "KO-and-run never rolls eggs or raises prismatic pity. See [How to Get Eggs](/blog/how-to-get-eggs-evomon) for the catch loop.",
          variant: "note",
        },
      },
      {
        heading: "What the in-game UI shows (field rates)",
        paragraphs: [
          "After you defeat a wild Evomon, the smoke reveal shows whether it was shiny. The pity/odds panel bottom-left lists prismatic and shiny separately — ImSoaren’s hunt guide walks through a live read:",
        ],
        bullets: [
          "**Shiny:** **0.2%** — described in-video as **1 in 500**.",
          "**Prismatic:** **0.8%** — **1 in 125** on the same screen.",
          "**Pity:** **150** prismatic captures / **600** shiny defeats or captures per species.",
        ],
      },
      {
        heading: "Shiny egg chance — what we know",
        paragraphs: [
          "When a catch succeeds, the game can drop a normal egg, a **shiny egg** (labeled e.g. “Shiny Frostlet Egg”), or nothing. ImSoaren notes shiny eggs are **not guaranteed** — there is “a chance” on top of the catch, separate from field shiny pity.",
          "Our [mutations data](/guides/mutations) and [Shiny Egg Guide](/guides/mutations/shiny-egg) align: **no community-verified fixed %** for shiny-egg drops is published in UI. Treat farming as volume + Catch Master (+10% capture, +1 attempt) on boss cycles.",
          "**Normal eggs** — community reports **guaranteed S-tier talent** on hatch (triple SSS from eggs alone is unconfirmed).",
          "**Shiny eggs** — hatch a **guaranteed shiny**; optional **Prismatic Ball** at hatch for shiny + prismatic look. Chamber steps: [how to hatch eggs](/blog/how-to-hatch-eggs-evomon).",
        ],
      },
      {
        heading: "Boss lines: no field shiny pity → eggs matter more",
        paragraphs: [
          "Several mount/boss Evomon — including **King of Flying** (Flying Territory) and the **Thunder Cliffs** boss line — **do not build field shiny pity**. ImSoaren’s rule: the **only realistic shiny path is repeated catches for shiny eggs**.",
          "That makes **shiny egg chance** the bottleneck for Arcapex/Thunder Crane-style hunts, not the 1-in-500 field roll. Worked example: [Shiny Arcapex guide](/blog/shiny-arcapex-evomon-guide). Pair with our [egg farming post](/blog/how-to-get-eggs-evomon) and boss notes in [Shiny Egg Guide](/guides/mutations/shiny-egg).",
        ],
      },
      {
        heading: "How this ties to pity tricks",
        paragraphs: [
          "Field **149/150 prismatic pity** + waiting for a natural shiny → catch with **King Ball** is about **Shiny Prismatic combos**, not egg odds. Different goal, different loop — full write-up on [Mutations Guide](/guides/mutations).",
          "For **stat value** of shinies once hatched, see [What Does Shiny Do?](/blog/what-does-shiny-do-evomon).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the shiny egg chance in Evomon?",
        a: "The game does not display a fixed shiny-egg drop %. Field shiny is ~0.2% (1-in-500) with 600 pity. Shiny eggs are a separate post-catch roll — farm bosses with Catch Master and expect volume grinding.",
      },
      {
        q: "Is shiny egg chance the same as shiny odds?",
        a: "No. Shiny odds (0.2%) apply to the wild reveal after KO. Shiny eggs only roll if you successfully catch afterward — different step, different math.",
      },
      {
        q: "Do boss Evomon have shiny pity?",
        a: "Many boss/mount lines do not. Community guides rely on shiny eggs from catches, not field 600 pity.",
      },
      {
        q: "What are prismatic odds vs shiny?",
        a: "On one July 2026 UI read: prismatic ~0.8% (1/125) with 150 capture pity; shiny ~0.2% (1/500) with 600 pity. Prismatic is cosmetic only; shiny adds stats.",
      },
    ],
    sources: [
      {
        label: "ImSoaren — Best Shiny Hunting Guide (odds, pity, eggs)",
        url: "https://www.youtube.com/watch?v=kA5s2l7tE7M",
        channel: "ImSoaren",
      },
    ],
  },
  {
    slug: "what-does-shiny-do-evomon",
    title: "What Does Shiny Do in Evomon? — Stat Boost Explained",
    description:
      "Shiny Evomon are not cosmetic only — they add real stats. See Lavite vs Lavarock flare comparisons (~2.5% base, ~4% evolved) and how that differs from Prismatic (Sparkle).",
    published: "2026-07-12",
    gscTargets: [
      "what does shiny do in evomon",
      "evomon shiny stat boost",
      "do shinies give stats in evomon",
      "shiny vs normal evomon stats",
      "evomon shiny buff",
    ],
    relatedGuides: [
      "/guides/mutations/shiny-vs-sparkle",
      "/guides/mutations",
      "/dex/lavite",
      "/blog/shiny-glowy-evomon-guide",
      "/blog/what-is-sparkle-evomon",
      "/blog/evomon-pity-system-explained",
      "/blog/how-to-know-if-evomon-is-shiny",
    ],
    quickAnswer:
      "Shiny Evomon give a **small but real stat boost** — not just a recolor. Community in-game comparisons show roughly **~2.5% higher total stats (Flare) on the base form** and **~4% after evolution** (e.g. Lavite +9 Flare; Lavarock +20). **Prismatic (Sparkle)** is cosmetic only and does **not** add combat stats — see [what Sparkle is](/blog/what-is-sparkle-evomon). Hunt shinies on species you will actually use in battle.",
    sections: [
      {
        heading: "Shiny vs Prismatic — only one buffs stats",
        paragraphs: [
          "Evomon has two rare overlays that look similar in thumbnails but behave very differently in combat. If you only want the naming answer for **Sparkle**, open [What is Sparkle Evomon?](/blog/what-is-sparkle-evomon).",
        ],
        bullets: [
          "**Shiny** (four-point star icon) — alternate color palette **plus** a stat boost. Revealed after you KO the wild Evomon.",
          "**Prismatic / Sparkle** (five-point star icon) — random glow color and body pattern. **Cosmetic only** — zero combat buff.",
          "**Shiny + Prismatic** — shiny stats with prismatic looks. The endgame flex; see our [Shiny vs Sparkle guide](/guides/mutations/shiny-vs-sparkle) for odds and pity, or the [149 pity walkthrough](/blog/evomon-pity-system-explained) when you are stacking both.",
        ],
        callout: {
          title: "Do not mix them up",
          body: "A prismatic Lavite looks cool but fights like a normal Lavite. A shiny Lavite hits harder — that is the whole point of shiny hunting for PvE and PvP.",
          variant: "warn",
        },
      },
      {
        heading: "How much stat boost? (community Flare numbers)",
        paragraphs: [
          "The in-game **Flare** stat is the total stat bundle shown on each Evomon card. Creator [Jabroskii](https://www.youtube.com/watch?v=_H3ozu8Af4o) compared the same species side-by-side in July 2026 — numbers vary by level, talent, and nature, but the **percentage gap** is what players care about.",
        ],
        bullets: [
          "**Lavite (unevolved)** — non-shiny Flare **365** vs shiny **374** → **+9 total stats (~2.5%)**.",
          "**Lavarock (evolved)** — non-shiny **502** vs shiny **522** → **+20 total stats (~4%)**.",
          "**Shiny Boom Mash vs non-shiny Astronite** — Flare **534** vs **510** → **+24 (~4.7%)** in one roster trade-off example from the same video.",
        ],
      },
      {
        heading: "Why evolution makes shiny stronger",
        paragraphs: [
          "The boost is a **percentage on the final stat sheet**, not a flat +9 forever. Base forms show a modest bump (~2%); fully evolved carries often land near **~4%** — enough to matter in long boss fights and speed-sensitive metas.",
          "Our [mutations data](/guides/mutations) notes that **speed** is often the most felt gain, but Flare rises across the board in these community samples.",
        ],
      },
      {
        heading: "When a shiny is worth the grind",
        bullets: [
          "**Yes** — your main carry or PvP anchor (e.g. [Lavite](/dex/lavite) → Lavarock line you already run).",
          "**Yes** — species you will evolve and keep — the ~4% evolved gap beats flexing a non-shiny meta pick. Seasonal example: [Shiny Glowy](/blog/shiny-glowy-evomon-guide) on Floating Realm toward Goliath.",
          "**Lower priority** — prismatic-only hunting for trade flex with no shiny stat layer.",
          "**Skip early game** — build a strong normal team first ([Beginner Guide](/guides/beginner)), then shiny sessions go faster.",
        ],
      },
      {
        heading: "How this differs from shiny eggs",
        paragraphs: [
          "Field shinies and **shiny eggs** both hatch or capture a guaranteed shiny — same stat rules apply once it is on your team. Eggs are the boss-line path where field shiny pity does not exist; see [How to Get Eggs](/blog/how-to-get-eggs-evomon) and the [Shiny Egg Guide](/guides/mutations/shiny-egg) for drop rates and catch loops — not repeated here.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does shiny only change color in Evomon?",
        a: "No. Shiny adds a real stat boost (community tests show ~2.5% on base forms, ~4% on evolved forms). Prismatic/Sparkle is the cosmetic-only variant.",
      },
      {
        q: "How much stronger is a shiny Lavite?",
        a: "One July 2026 community comparison: non-shiny Lavite Flare 365 vs shiny 374 (+9, ~2.5%). Evolved Lavarock showed +20 Flare (~4%). Your numbers may differ slightly by level and talent.",
      },
      {
        q: "Is prismatic the same as shiny?",
        a: "No. Prismatic (Sparkle) is cosmetic. Shiny gives stats. You can stack both on one Evomon for looks + power.",
      },
      {
        q: "Should I hunt shiny before beating the story?",
        a: "Most guides recommend a solid normal team first. Shiny hunting is easier once you one-shot farm routes and have balls to spare.",
      },
      {
        q: "How do I know if this encounter is shiny?",
        a: "You cannot tell mid-fight. KO the Evomon, wait for the smoke reveal, then check the alternate palette, Shiny label, and four-point star — full checklist on How to Know If an Evomon Is Shiny.",
      },
    ],
    sources: [
      {
        label: "Jabroskii — Shiny stat difference (Lavite / Lavarock)",
        url: "https://www.youtube.com/watch?v=_H3ozu8Af4o",
        channel: "Jabroskii",
      },
      {
        label: "Purp — Shiny vs Prismatic overview",
        url: "https://www.youtube.com/watch?v=t3Ar4Bslgzg",
        channel: "Purp",
      },
    ],
  },
  {
    slug: "how-to-get-eggs-evomon",
    title: "How to Get Eggs in Evomon — Defeat, Catch, Then Roll",
    description:
      "How to get eggs in Evomon: KO the wild mon, catch it (eggs never roll on run), then repeat. Normal eggs for S Talent; shiny eggs for boss lines — Catch Master helps.",
    published: "2026-07-11",
    gscTargets: [
      "how to get eggs in evomon",
      "how to get egg in evomon",
      "evomon egg",
      "evomon egg drop rate",
      "how to get shiny egg evomon",
      "how to get shiny egg in evomon",
      "how to get eggs in evomon roblox",
      "how to get eggs evomon",
      "evomon how to get eggs",
    ],
    relatedGuides: [
      "/guides/mutations/shiny-egg",
      "/guides/mutations",
      "/guides/beginner",
      "/team-builder",
      "/codes",
      "/dex",
      "/blog/prismatic-egg-evomon",
      "/blog/how-to-hatch-eggs-evomon",
    ],
    quickAnswer:
      "**How to get eggs in Evomon:** **(1)** Defeat the wild Evomon. **(2)** Catch it — eggs only roll after a **successful catch**, never after KO-and-run. **(3)** Repeat until a **normal egg** (S Talent hatch) or rarer **shiny egg** drops. **(4)** On boss/mount lines without field shiny pity, keep catching with **Catch Master** and hatch shiny eggs. Chamber UI: [How to Hatch Eggs](/blog/how-to-hatch-eggs-evomon). Prismatic Ball / named Prismatic Egg: [Prismatic Egg guide](/blog/prismatic-egg-evomon).",
    sections: [
      {
        heading: "How to get eggs in Evomon (the catch rule)",
        paragraphs: [
          "If you searched **how to get eggs in Evomon**, the loop is short: **defeat → catch → egg roll**. The roll happens **after the catch**, not after the knockout. Running from the capture screen skips both eggs and prismatic pity.",
        ],
        bullets: [
          "**Normal egg** — volume farm; hatches with guaranteed **S-tier Talent** (community reports).",
          "**Shiny egg** — guaranteed **Shiny** of that species; main path for several boss/mount lines.",
          "**Hatch UI** — inventory → Hatching Chamber; full steps on [How to Hatch Eggs](/blog/how-to-hatch-eggs-evomon).",
        ],
        callout: {
          title: "One rule that fixes most “no eggs” complaints",
          body: "KO alone is not enough. You must land the catch. Stock balls and claim [codes](/codes) before long sessions.",
          variant: "tip",
        },
      },
      {
        heading: "Step-by-step farm on any route",
        bullets: [
          "Pick a target your team KOs quickly (e.g. Lavarock clears on Lava Crag).",
          "Fight until the wild Evomon faints — odds/pity HUD sits bottom-left while it is alive.",
          "Throw until the catch lands — do not leave the capture screen empty-handed if you want eggs.",
          "Repeat until a normal or shiny egg appears in inventory.",
          "Hatch from the chamber. Optional: **Prismatic Ball** on a shiny-egg hatch for Sparkle looks — details on the [Prismatic Egg guide](/blog/prismatic-egg-evomon), not this page’s main job.",
        ],
      },
      {
        heading: "Boss lines: Catch Master matters",
        paragraphs: [
          "Several high-value bosses (including **Arcapex**) are easiest to shiny via **repeated catches for shiny eggs**, not field shiny pity. Failed throws waste the whole cycle.",
          "The **Catch Master** suit (+10% capture success, +1 attempt) is the community default for those farms. Creator [2kane Unleashed](https://www.youtube.com/watch?v=cdToZL_GwLQ) shows the capture-first loop — luck varies; the rule matches our [Shiny Egg Guide](/guides/mutations/shiny-egg).",
        ],
      },
      {
        heading: "Related searches (not this page’s main job)",
        paragraphs: [
          "**Prismatic egg** wording → [Prismatic Egg guide](/blog/prismatic-egg-evomon). **Shiny egg odds / pity** → [Shiny Egg Chance](/blog/evomon-shiny-egg-chance) and the [shiny egg guide](/guides/mutations/shiny-egg). This post owns **how to get eggs** (the catch loop).",
        ],
      },
      {
        heading: "Beginner mistake to avoid",
        paragraphs: [
          "Do not start egg shiny hunts on day one. Finish a strong **normal-form** team first ([Beginner Guide](/guides/beginner)), then farm eggs faster with levels and balls.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you get eggs in Evomon?",
        a: "Defeat the wild Evomon, then catch it. Eggs only roll after a successful catch. Repeat on a target you can clear quickly; use Catch Master on hard boss routes.",
      },
      {
        q: "Do eggs drop if I KO and run?",
        a: "No. You must catch the Evomon after defeating it. KO-and-run does not roll eggs or raise prismatic pity.",
      },
      {
        q: "What is a prismatic egg in Evomon?",
        a: "See the Prismatic Egg guide — usually shiny egg + Prismatic Ball hatch, or a named reward egg for random prismatic cosmetics.",
      },
      {
        q: "Which bosses need shiny eggs?",
        a: "Many mount/boss lines (Arcapex, Thunder Crane, Volcras King) lack field shiny pity. Repeated catches for shiny eggs are the main path.",
      },
      {
        q: "Can eggs hatch shiny Evomon?",
        a: "Yes. A shiny egg hatches a guaranteed shiny Evomon. Normal eggs are for talent farming and are not guaranteed shiny.",
      },
      {
        q: "What is the best way to farm eggs in Evomon?",
        a: "Pick a target you can defeat quickly, catch after every KO, stock balls first, and use Catch Master on boss routes where failed catches waste the egg roll.",
      },
    ],
    sources: [
      {
        label: "Purp — Full Shiny/Prismatic Guide",
        url: "https://www.youtube.com/watch?v=t3Ar4Bslgzg",
        channel: "Purp",
      },
      {
        label: "2kane Unleashed — Shiny Egg Catch Method",
        url: "https://www.youtube.com/watch?v=cdToZL_GwLQ",
        channel: "2kane Unleashed",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );
}
