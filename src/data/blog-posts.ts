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
    title: "How to Get Eggs in Evomon — Normal, Shiny & Prismatic Hatch",
    description:
      "Eggs drop only after you catch a defeated Evomon. Learn normal vs shiny eggs, boss routes, Catch Master suit, and Prismatic Ball hatching.",
    published: "2026-07-11",
    gscTargets: [
      "how to get eggs in evomon",
      "how to get egg in evomon",
      "prismatic egg evomon",
      "evomon prismatic egg",
      "how to get shiny egg evomon",
      "how to get shiny egg in evomon",
    ],
    relatedGuides: [
      "/guides/mutations/shiny-egg",
      "/guides/mutations",
      "/guides/beginner",
    ],
    quickAnswer:
      "In Evomon, eggs never drop if you only knock out and run. You must defeat the wild Evomon, then successfully catch it. That catch roll can give you a normal egg, a shiny egg, or nothing — depending on the species and your grind volume.",
    sections: [
      {
        heading: "The three egg outcomes",
        paragraphs: [
          "After a successful catch, the game can roll one of three egg-related outcomes. Normal eggs are the volume farm; shiny eggs are the boss-line chase; Prismatic Ball hatching is the endgame flex combo.",
        ],
        bullets: [
          "**Normal egg** — hatches with guaranteed **S-tier Talent** (community reports). Best for early route farming.",
          "**Shiny egg** — hatches a guaranteed **Shiny** of that species. Main path for boss/mount lines without field shiny pity.",
          "**Shiny egg + Prismatic Ball** — hatch with a Prismatic Ball to force **Shiny + Prismatic look** in one step.",
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
