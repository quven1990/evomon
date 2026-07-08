export const navSections = [
  {
    title: "Start Fast",
    description: "New or returning after an update",
    links: [
      { href: "/codes", label: "Evomon Codes", desc: "Active codes, rewards, redeem steps" },
      { href: "/guides/beginner", label: "Beginner Guide", desc: "First 30 minutes and progression" },
      { href: "/starters", label: "Best Starter", desc: "Bubble, Blazpup, or Leafbun" },
    ],
  },
  {
    title: "Wiki & Data",
    description: "Dex, types, and reference",
    links: [
      { href: "/dex", label: "Evomon Dex", desc: "108-slot pokedex gallery" },
      { href: "/type-chart", label: "Type Chart", desc: "Element strengths and weaknesses" },
      { href: "/tier-list", label: "Tier List", desc: "Best picks by role and element" },
      { href: "/team-builder", label: "Team Builder", desc: "3-pet party planner with type coverage" },
    ],
  },
  {
    title: "Push Progression",
    description: "Mid and late game systems",
    links: [
      { href: "/guides/level-30", label: "Level 30 Guide", desc: "Ultimate, Ascension, endgame prep" },
      { href: "/guides/mutations", label: "Shiny & Sparkle", desc: "Mutations and hunt planning" },
      { href: "/guides/farming", label: "Farming Guide", desc: "EXP, coins, and daily routes" },
    ],
  },
] as const;

export const footerLinks = [
  { href: "/about", label: "About & Trust" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookies" },
  { href: "/codes", label: "Codes" },
  { href: "/dex", label: "Dex" },
  { href: "/type-chart", label: "Type Chart" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/guides/beginner", label: "Beginner Guide" },
  { href: "/guides/level-30", label: "Level 30" },
  { href: "/guides/mutations", label: "Mutations" },
  { href: "/team-builder", label: "Team Builder" },
] as const;

/** Primary mobile bottom bar — high-traffic routes */
export const mobileTabLinks = [
  { href: "/", label: "Home", match: (path: string) => path === "/" },
  { href: "/codes", label: "Codes", match: (path: string) => path === "/codes" },
  { href: "/dex", label: "Dex", match: (path: string) => path.startsWith("/dex") },
  { href: "/team-builder", label: "Build", match: (path: string) => path === "/team-builder" },
] as const;
