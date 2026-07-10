/** Desktop header — ordered by recent Plausible traffic (7d). */
export const headerNavLinks = [
  { href: "/guides/mutations", label: "Mutations" },
  { href: "/dex", label: "Dex" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/codes", label: "Codes" },
] as const;

export const navSections = [
  {
    title: "Guides",
    description: "Walkthroughs and hunt planning",
    links: [
      {
        href: "/guides/mutations",
        label: "Shiny & Sparkle",
        desc: "Mutations, pity odds, and shiny egg routes",
      },
      {
        href: "/guides/beginner",
        label: "Beginner Guide",
        desc: "First 30 minutes and island routing",
      },
      {
        href: "/guides/farming",
        label: "Farming Guide",
        desc: "EXP, coins, and daily loops",
      },
      {
        href: "/guides/level-30",
        label: "Level 30 Guide",
        desc: "Ultimate, Ascension, endgame prep",
      },
      { href: "/starters", label: "Best Starter", desc: "Bubble, Blazpup, or Leafbun" },
    ],
  },
  {
    title: "Wiki & Data",
    description: "Dex, tiers, types, and codes",
    links: [
      { href: "/dex", label: "Evomon Dex", desc: "108-slot pokedex gallery" },
      { href: "/tier-list", label: "Tier List", desc: "Best picks by role and element" },
      { href: "/type-chart", label: "Type Chart", desc: "Element strengths and weaknesses" },
      { href: "/codes", label: "Evomon Codes", desc: "Active codes and redeem steps" },
    ],
  },
  {
    title: "Tools",
    description: "Party planning and coverage",
    links: [
      {
        href: "/team-builder",
        label: "Team Builder",
        desc: "3-pet party planner with type coverage",
      },
    ],
  },
] as const;

const headerHrefs = new Set<string>(headerNavLinks.map((link) => link.href));

/** Header mega-menu — skips links already in the top bar. */
export const headerDropdownSections = navSections
  .map((section) => ({
    ...section,
    links: section.links.filter((link) => !headerHrefs.has(link.href)),
  }))
  .filter((section) => section.links.length > 0);

export const footerLinks = [
  { href: "/about", label: "About & Trust" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookies" },
  { href: "/guides/mutations", label: "Mutations" },
  { href: "/dex", label: "Dex" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/codes", label: "Codes" },
  { href: "/type-chart", label: "Type Chart" },
  { href: "/team-builder", label: "Team Builder" },
  { href: "/guides/beginner", label: "Beginner Guide" },
  { href: "/guides/level-30", label: "Level 30" },
  { href: "/guides/farming", label: "Farming" },
] as const;

/** Primary mobile bottom bar — matches top traffic routes. */
export const mobileTabLinks = [
  { href: "/", label: "Home", match: (path: string) => path === "/" },
  {
    href: "/guides/mutations",
    label: "Shiny",
    match: (path: string) => path.startsWith("/guides/mutations"),
  },
  { href: "/dex", label: "Dex", match: (path: string) => path.startsWith("/dex") },
  {
    href: "/tier-list",
    label: "Tiers",
    match: (path: string) => path === "/tier-list" || path.startsWith("/tier-list/"),
  },
] as const;
