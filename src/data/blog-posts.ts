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
          "Do not confuse Pebble with Tarro/Terragon — they are different lines. Pebble is the early Rock wall; Tarro/Terragon is the later Grass/Dragon tank.",
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
      "For the standard **Counter** Lavite/Lavarock build, community guides prioritize a nature that **raises HP (+10%)** — Purp ranks **HP first**, then defenses, then attack. **Avoid any nature that lowers HP** (e.g. **Anxious** in his reroll demo). Do **not** chase speed or special attack on Counter sets; those stats do not help Counter damage. Reroll with **nature potions** until you hit +HP.",
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
          "**Shiny eggs** — hatch a **guaranteed shiny**; optional **Prismatic Ball** at hatch for shiny + prismatic look.",
        ],
      },
      {
        heading: "Boss lines: no field shiny pity → eggs matter more",
        paragraphs: [
          "Several mount/boss Evomon — including **King of Flying** (Flying Territory) and the **Thunder Cliffs** boss line — **do not build field shiny pity**. ImSoaren’s rule: the **only realistic shiny path is repeated catches for shiny eggs**.",
          "That makes **shiny egg chance** the bottleneck for Arcapex/Thunder Crane-style hunts, not the 1-in-500 field roll. Pair with our [egg farming post](/blog/how-to-get-eggs-evomon) and boss notes in [Shiny Egg Guide](/guides/mutations/shiny-egg).",
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
    ],
    quickAnswer:
      "Shiny Evomon give a **small but real stat boost** — not just a recolor. Community in-game comparisons show roughly **~2.5% higher total stats (Flare) on the base form** and **~4% after evolution** (e.g. Lavite +9 Flare; Lavarock +20). **Prismatic (Sparkle)** is cosmetic only and does **not** add combat stats. Hunt shinies on species you will actually use in battle.",
    sections: [
      {
        heading: "Shiny vs Prismatic — only one buffs stats",
        paragraphs: [
          "Evomon has two rare overlays that look similar in thumbnails but behave very differently in combat.",
        ],
        bullets: [
          "**Shiny** (four-point star icon) — alternate color palette **plus** a stat boost. Revealed after you KO the wild Evomon.",
          "**Prismatic / Sparkle** (five-point star icon) — random glow color and body pattern. **Cosmetic only** — zero combat buff.",
          "**Shiny + Prismatic** — shiny stats with prismatic looks. The endgame flex; see our [Shiny vs Sparkle guide](/guides/mutations/shiny-vs-sparkle) for odds and pity.",
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
          "**Yes** — species you will evolve and keep — the ~4% evolved gap beats flexing a non-shiny meta pick.",
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
    title: "How to Get Eggs in Evomon (2026) — Catch Loop & Shiny Eggs",
    description:
      "How to get eggs in Evomon in 2026: 1) defeat, 2) catch, 3) roll normal/shiny eggs, 4) farm boss routes with Catch Master. Prismatic Ball hatching tips included.",
    published: "2026-07-11",
    gscTargets: [
      "how to get eggs in evomon",
      "how to get egg in evomon",
      "evomon egg",
      "evomon egg drop rate",
      "prismatic egg evomon",
      "evomon prismatic egg",
      "how to get shiny egg evomon",
      "how to get shiny egg in evomon",
    ],
    relatedGuides: [
      "/guides/mutations/shiny-egg",
      "/guides/mutations",
      "/guides/beginner",
      "/team-builder",
      "/codes",
      "/dex",
    ],
    quickAnswer:
      "Most stable egg path: **(1)** Defeat the wild Evomon — do not run. **(2)** Catch it (eggs only roll after a successful catch). **(3)** Hope for a normal egg (S Talent) or rarer shiny egg. **(4)** For boss/mount lines without field pity, farm catches with Catch Master and hatch shiny eggs — Prismatic Ball on hatch for Shiny + Prismatic looks. There is no separate “prismatic egg” item.",
    sections: [
      {
        heading: "The three egg outcomes",
        paragraphs: [
          "After a successful catch, the game can roll one of three egg-related outcomes. Normal eggs are the volume farm; shiny eggs are the boss-line chase; Prismatic Ball hatching is the endgame flex combo. If you are asking **how to get eggs in Evomon**, the important rule is simple: the egg roll happens after the catch, not after the knockout.",
        ],
        bullets: [
          "**Normal egg** — hatches with guaranteed **S-tier Talent** (community reports). Best for early route farming.",
          "**Shiny egg** — hatches a guaranteed **Shiny** of that species. Main path for boss/mount lines without field shiny pity.",
          "**Shiny egg + Prismatic Ball** — hatch with a Prismatic Ball to force **Shiny + Prismatic look** in one step.",
        ],
      },
      {
        heading: "Egg sources: what to farm first",
        paragraphs: [
          "There is no public in-game table for every egg drop rate, so treat this as a practical farming map rather than a guaranteed percentage chart.",
        ],
        bullets: [
          "**Regular route targets** — best for learning the loop and collecting normal eggs; catch every target after the KO.",
          "**Boss and mount lines** — best for shiny egg hunting because several boss lines do not use normal field shiny pity.",
          "**Event or patched routes** — check the in-game UI first; odds and available targets can change faster than community videos.",
          "**Codes and ball supply** — claim [Evomon codes](/codes) before long egg sessions so failed catches do not end the farm early.",
        ],
      },
      {
        heading: "Step-by-step: farm eggs on any route",
        bullets: [
          "Build a team that can KO the target reliably — one-shotting low-level routes (e.g. Lavarock in Lava Crag) saves time.",
          "Battle until the wild Evomon faints — pity counters (prismatic 150 captures, shiny 600 KOs/captures) show bottom-left after the fight.",
          "Always attempt a catch — KO-and-run does not advance prismatic pity or roll eggs.",
          "Repeat until a normal or shiny egg drops into your inventory.",
          "Hatch from the egg menu. For a shiny egg, optionally use a **Prismatic Ball** at hatch to force prismatic colors (UI label: Sparkle).",
        ],
      },
      {
        heading: "Boss lines: why catch rate matters",
        paragraphs: [
          "Several high-value bosses — including **Arcapex** and **Thunder Cream** lines — are easiest to shiny via **shiny eggs from repeated catches**, not field shiny pity.",
          "The **Catch Master** suit (+10% capture success, +1 capture attempt) is widely used because failed catches waste entire boss cycles. Community creator [2kane Unleashed](https://www.youtube.com/watch?v=cdToZL_GwLQ) reports two Arcapex shiny eggs in one session using this setup — luck varies, but the capture-first logic matches our [Shiny Egg Guide](/guides/mutations/shiny-egg).",
        ],
      },
      {
        heading: 'What "prismatic egg" actually means',
        paragraphs: [
          'Google searches for **"prismatic egg evomon"** usually mean: hatch a **shiny egg** using a **Prismatic Ball** → guaranteed shiny **with** prismatic appearance.',
          "There is no separate prismatic egg item. The combo is: **farm shiny egg → hatch with Prismatic Ball**.",
          "Advanced players also use the [149 prismatic pity trick](/guides/mutations) on live shiny encounters — different path, same Prismatic Ball payoff.",
        ],
        callout: {
          title: "Not a glitch",
          body: 'Some YouTube titles call Catch Master a "hack" — it is a legitimate adventure suit, not an exploit.',
          variant: "warn",
        },
      },
      {
        heading: "Beginner mistake to avoid",
        paragraphs: [
          "Both community sources agree: do not shiny hunt on day one. Finish a strong **normal-form** team first ([Beginner Guide](/guides/beginner)), then farm eggs faster with higher level and better balls.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do eggs drop if I KO and run?",
        a: "No. You must catch the Evomon after defeating it. KO-and-run does not roll eggs or raise prismatic pity.",
      },
      {
        q: "What is a prismatic egg in Evomon?",
        a: "Community shorthand for hatching a shiny egg with a Prismatic Ball — not a separate egg type.",
      },
      {
        q: "Which bosses need shiny eggs?",
        a: "Many mount/boss lines (Arcapex, Thunder Crane, Volcras King) lack field shiny pity. Repeated catches for shiny eggs are the main path.",
      },
      {
        q: "Can eggs hatch shiny Evomon?",
        a: "Yes. A shiny egg hatches a guaranteed shiny Evomon. Normal eggs are different; they are used for talent farming and are not guaranteed shiny.",
      },
      {
        q: "What is the best way to farm eggs in Evomon?",
        a: "Pick a target you can defeat quickly, catch after every KO, use enough balls before the session, and use Catch Master on boss routes where failed catches waste the egg roll.",
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
