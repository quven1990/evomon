export type UpdateLogEntry = {
  date: string;
  title: string;
  body: string;
  tags: string[];
  /** Optional in-site pages touched by this update. */
  pages?: string[];
};

export type UpdateLogGroup = {
  month: string;
  entries: UpdateLogEntry[];
};

/** Public-facing changelog — derived from git history, grouped for readability. */
export const UPDATE_LOG_LAST_PUBLISHED = "2026-07-17";

export const updateLogGroups: UpdateLogGroup[] = [
  {
    month: "July 2026",
    entries: [
      {
        date: "2026-07-17",
        title: "Dex SERP polish — Bubble, Leafbun, Blazpup, Lavarock",
        body: "Retitled and deepened four indexable dex pages with wasted impressions or weak rankings. Bubble / Leafbun / Blazpup titles now answer starter-choice intent (water route, tank heal, vs Sparkit). Lavarock is no longer a Lavite stub — Counter/boss tank copy, evolution keeper rules, and shiny-to-evolve notes were added.",
        tags: ["SEO", "Dex"],
        pages: ["/dex/bubble", "/dex/leafbun", "/dex/blazpup", "/dex/lavarock"],
      },
      {
        date: "2026-07-17",
        title: "Privacy & ads compliance polish",
        body: "Clarified Privacy/Cookies advertising disclosures with clickable Google Ads Settings and partner-sites links. Cookie notice remains informational (does not gate analytics). Auto ads skip legal/trust pages and thin noindex dex stubs. Contact email corrected to contact@evomon.cc.",
        tags: ["Compliance", "Privacy", "AdSense"],
        pages: ["/privacy", "/cookies", "/about"],
      },
      {
        date: "2026-07-17",
        title: "Blog — Shiny Lavite and Pebble investment guides",
        body: "Added two video-sourced pet-level answers. /blog/shiny-lavite-evomon-guide covers the Lava Crag Water-route hunt, Shiny/SSS/nature trade-offs, and when to evolve Lavarock. /blog/pebble-evomon-guide covers Verdant Valley location, Pebble → Pebroll → Pebgolem, early tank value, Counter access, and why Lavite usually becomes the better long-term stone target. Unsupported exact moves and nature claims were intentionally excluded.",
        tags: ["Blog", "SEO", "GEO", "Sources"],
        pages: [
          "/blog",
          "/blog/shiny-lavite-evomon-guide",
          "/blog/pebble-evomon-guide",
          "/dex/lavite",
          "/dex/pebble",
        ],
      },
      {
        date: "2026-07-16",
        title: "Blog — Shiny Bluebird route guide",
        body: "Added /blog/evomon-shiny-bluebird-guide for emerging pet-level shiny intent. The post targets shiny Bluebird route searches, separates Raven Ridge wild-route farming from boss-only cycles, and links Bluebird dex, Mutations, Shiny vs Sparkle, Shiny Egg, and tier-list context for SEO and GEO discovery.",
        tags: ["Blog", "SEO", "GEO"],
        pages: ["/blog", "/blog/evomon-shiny-bluebird-guide", "/dex/bluebird"],
      },
      {
        date: "2026-07-15",
        title: "Long-tail SEO — Sparkle, shiny egg, and Dex route notes",
        body: "Strengthened existing guide and dex pages instead of creating duplicate blogs. /guides/mutations/shiny-vs-sparkle now targets Sparkle vs Shiny, shiny buff, and shiny stats queries. /guides/mutations/shiny-egg now separates Prismatic Ball from Catch Master. Dex detail pages for Bluebird, Sparkit, Lavite, and Pebble gained evolution and shiny-route notes for emerging long-tail queries.",
        tags: ["SEO", "Guides", "Dex"],
        pages: [
          "/guides/mutations/shiny-vs-sparkle",
          "/guides/mutations/shiny-egg",
          "/dex/bluebird",
          "/dex/sparkit",
          "/dex/lavite",
          "/dex/pebble",
        ],
      },
      {
        date: "2026-07-15",
        title: "Codes — Discord 100K milestone gift",
        body: "Added 100DCUNITY from the official Discord 100K members announcement. Updated code freshness dates, promoted the new Discord milestone code in popular community codes, and refreshed the /codes SEO snippet.",
        tags: ["Codes", "Data", "SEO"],
        pages: ["/codes"],
      },
      {
        date: "2026-07-15",
        title: "Sitemap — standard Google submission path",
        body: "Restored the single standard sitemap endpoint at /sitemap.xml and removed extra sitemap variants from generation, headers, redirects, and machine-readable references.",
        tags: ["SEO", "Infrastructure"],
        pages: ["/sitemap.xml"],
      },
      {
        date: "2026-07-15",
        title: "Mutations — community video evidence",
        body: "Added embedded community video evidence to the 149 prismatic pity section, including VideoObject schema and mobile-checked lazy YouTube iframes. Clarified the advanced Shiny Prismatic pity-stack steps.",
        tags: ["Guides", "Video", "SEO"],
        pages: ["/guides/mutations"],
      },
      {
        date: "2026-07-15",
        title: "Starter intent routing — Bubblade",
        body: "Opened the Bubblade dex detail page for indexing, added curated Bubble final-evolution metadata, and linked Bubblade from the starter evolution line to better route specific starter-evolution searches.",
        tags: ["Dex", "Starters", "SEO"],
        pages: ["/starters", "/dex/bubblade"],
      },
      {
        date: "2026-07-15",
        title: "Egg guide — shiny and prismatic intent refresh",
        body: "Strengthened the eggs blog around normal eggs, shiny eggs, boss routes, and Prismatic Ball hatching. Added clearer quick answers, FAQ coverage, and internal links into codes, dex, and mutations hubs.",
        tags: ["Blog", "Guides", "SEO"],
        pages: ["/blog/how-to-get-eggs-evomon", "/guides/mutations"],
      },
      {
        date: "2026-07-13",
        title: "Blog — Best nature for Lavite (Counter build)",
        body: "New /blog/best-nature-lavite-evomon targets lavite-nature GSC queries. HP-first nature priority from Purp Counter build; nature mechanics from Roblox Guides; talent vs trait from AccelToWin. Links to /dex/lavite and tier-list subpages.",
        tags: ["Blog", "SEO", "Content"],
        pages: ["/blog", "/blog/best-nature-lavite-evomon"],
      },
      {
        date: "2026-07-13",
        title: "Blog — Shiny egg chance & odds answer",
        body: "New /blog/evomon-shiny-egg-chance targets shiny-egg-chance and shiny-odds GSC queries. Separates field 0.2% / 600 pity from post-catch shiny-egg rolls; boss no-pity note; links to Shiny Egg hub and eggs blog. Source: ImSoaren hunt guide.",
        tags: ["Blog", "SEO", "Content"],
        pages: ["/blog", "/blog/evomon-shiny-egg-chance"],
      },
      {
        date: "2026-07-12",
        title: "Blog — What Does Shiny Do? stat boost answer",
        body: "New /blog/what-does-shiny-do-evomon targets what-does-shiny-do GSC queries. Community-sourced Flare comparisons (Lavite ~2.5%, Lavarock ~4%), links to Shiny vs Sparkle and Mutations hubs, FAQ schema, Jabroskii + Purp attribution.",
        tags: ["Blog", "SEO", "Content"],
        pages: ["/blog", "/blog/what-does-shiny-do-evomon"],
      },
      {
        date: "2026-07-12",
        title: "Type chart — clickable matchups & dead-click fix",
        body: "Quick-answer table and island tags now link each type to ?type=#lookup. Lookup matchup pills use 44px touch targets, clearer hints, and non-clickable section labels after Clarity dead-click reports.",
        tags: ["UX", "Type Chart"],
        pages: ["/type-chart"],
      },
      {
        date: "2026-07-11",
        title: "Blog pipeline — GSC long-tail keyword scorer",
        body: "Added blog-keyword-pick.mjs to score Search Console queries (word count, impressions, position, CTR) before suggesting YouTube hunt targets. Pairs with blog-topic-check.mjs overlap gate.",
        tags: ["Blog", "Tooling", "SEO"],
      },
      {
        date: "2026-07-11",
        title: "Blog launch — How to Get Eggs answer post",
        body: "Added /blog index and first community-sourced answer post targeting how-to-get-eggs and prismatic-egg GSC queries. Sitemap and llms.txt now list /blog and each post URL. Links to Shiny Egg and Mutations hubs; includes FAQ schema and YouTube source attribution.",
        tags: ["Blog", "SEO", "Content"],
        pages: ["/blog", "/blog/how-to-get-eggs-evomon"],
      },
      {
        date: "2026-07-11",
        title: "Topic cluster guides & internal linking",
        body: "Added focused subpages for Shiny vs Sparkle, Shiny Egg, Early Carries, and Evolution Priority — each with trust footers and Article schema. Wired hub route cards, header dropdowns, and context links from beginner, codes, level-30, and indexable dex pages.",
        tags: ["Guides", "SEO", "Navigation"],
        pages: [
          "/guides/mutations/shiny-vs-sparkle",
          "/guides/mutations/shiny-egg",
          "/tier-list/early-carries",
          "/tier-list/evolution-priority",
        ],
      },
      {
        date: "2026-07-11",
        title: "Navigation aligned with live traffic",
        body: "Reordered desktop header and mobile bottom bar to match Plausible traffic (Mutations first). Renamed the mobile Shiny tab to Mutations for clarity.",
        tags: ["Navigation", "Mobile"],
      },
      {
        date: "2026-07-11",
        title: "Dex detail SEO & indexing",
        body: "Opened indexing for 15 high-traffic dex entries (starters, tier staples, Plausible leaders). Rewrote dex meta descriptions with unique curated copy instead of template duplicates. Enriched detail pages with matchups, evolution chains, and FAQ schema.",
        tags: ["Dex", "SEO"],
        pages: ["/dex"],
      },
      {
        date: "2026-07-10",
        title: "Maintainer profile on About",
        body: "Added Remy as named maintainer on the About page with Person schema — part of our E-E-A-T transparency push for guides and data policy.",
        tags: ["Trust", "About"],
        pages: ["/about"],
      },
      {
        date: "2026-07-10",
        title: "Mobile performance — ads & preloads",
        body: "Deferred AdSense load and trimmed homepage preloads to improve mobile LCP after advertising went live.",
        tags: ["Performance", "Mobile"],
      },
      {
        date: "2026-07-09",
        title: "Legal pages & AdSense readiness",
        body: "Published Privacy Policy, Terms of Use, and Cookies pages. Added ads.txt, cookie notice, and compliance copy mapping analytics (Plausible, GA4, Clarity) and Google AdSense.",
        tags: ["Legal", "Ads"],
        pages: ["/privacy", "/terms", "/cookies"],
      },
      {
        date: "2026-07-08",
        title: "Accessibility fixes",
        body: "Resolved Lighthouse contrast and accessibility tree issues so pages read cleanly for screen readers and automated audits.",
        tags: ["Accessibility", "Quality"],
      },
      {
        date: "2026-07-07",
        title: "Guide landing SEO & on-page answers",
        body: "Added quick-answer blocks, FAQ schema, and stronger internal links on codes, starters, beginner, and farming guides. Aligned meta snippets with search intent.",
        tags: ["Guides", "SEO"],
        pages: ["/guides/beginner", "/codes", "/starters", "/guides/farming"],
      },
      {
        date: "2026-07-07",
        title: "Dex internal link mesh",
        body: "Linked tier pick names, Lavite, Bluebird, and Sparkit to dex entries. Strengthened homepage and guide paths toward /dex for evomon dex queries.",
        tags: ["Dex", "Internal links"],
        pages: ["/tier-list", "/guides/mutations", "/dex"],
      },
      {
        date: "2026-07-07",
        title: "Mobile guide UX fixes",
        body: "Fixed farming guide dead clicks, improved mobile guide section nav, and deferred analytics to reduce homepage JS on mobile.",
        tags: ["Mobile", "Guides"],
      },
      {
        date: "2026-07-06",
        title: "Homepage LCP optimization",
        body: "Optimized hero image critical path and server-rendered hero to improve Largest Contentful Paint scores.",
        tags: ["Performance"],
        pages: ["/"],
      },
      {
        date: "2026-07-05",
        title: "Mobile codes copy & mutations table",
        body: "Fixed iOS clipboard crashes on code copy. Made mutations pity comparison table read-only to remove dead-click confusion.",
        tags: ["Mobile", "Codes", "Guides"],
        pages: ["/codes", "/guides/mutations"],
      },
      {
        date: "2026-07-04",
        title: "Type chart rebuild & IndexNow",
        body: "Shipped interactive type chart with mobile-first lookup. Added IndexNow for faster Bing/Yandex indexing. Retargeted homepage SEO for evomon wiki intent.",
        tags: ["Tools", "SEO"],
        pages: ["/type-chart"],
      },
      {
        date: "2026-07-04",
        title: "Plausible custom events",
        body: "Instrumented codes copy, Play CTAs, and team builder usage for privacy-friendly analytics.",
        tags: ["Analytics"],
      },
      {
        date: "2026-07-03",
        title: "Major content launch — tier list, mutations, beginner",
        body: "Rebuilt tier list around July 2026 community meta. Expanded shiny/prismatic guide with pity, eggs, and farm routes. Added island-by-island beginner guide with player EXP and ascension walls.",
        tags: ["Guides", "Content"],
        pages: ["/tier-list", "/guides/mutations", "/guides/beginner"],
      },
      {
        date: "2026-07-03",
        title: "Codes synced with official Roblox listing",
        body: "Aligned active codes with the official Roblox game description and added copy-to-clipboard with expired-code archiving.",
        tags: ["Codes", "Data"],
        pages: ["/codes"],
      },
      {
        date: "2026-07-03",
        title: "Site infrastructure & analytics",
        body: "Migrated to Cloudflare Pages static export. Added sitemap.xml, GitHub Actions deploy with cache purge, Plausible + Google Analytics, and Microsoft Clarity.",
        tags: ["Infrastructure", "Analytics"],
      },
      {
        date: "2026-07-03",
        title: "Privacy policy & contact emails",
        body: "First privacy policy draft and site-wide contact emails for corrections and privacy requests.",
        tags: ["Legal", "Trust"],
        pages: ["/privacy"],
      },
    ],
  },
];

export function getAllUpdateLogEntries(): UpdateLogEntry[] {
  return updateLogGroups.flatMap((group) => group.entries);
}
