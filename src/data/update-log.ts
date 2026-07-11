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
export const UPDATE_LOG_LAST_PUBLISHED = "2026-07-11";

export const updateLogGroups: UpdateLogGroup[] = [
  {
    month: "July 2026",
    entries: [
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
