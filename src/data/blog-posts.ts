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
