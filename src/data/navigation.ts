import { headerClusters } from "@/data/guide-clusters";

/** Desktop header — ordered by recent Plausible traffic (7d). */
export const headerNavLinks = [
  { href: "/guides/mutations", label: "Mutations" },
  { href: "/dex", label: "Dex" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/codes", label: "Codes" },
] as const;

export { headerClusters };

export const navSections = [
  {
    title: "Guides",
    description: "Walkthroughs and hunt planning",
    links: [
      {
        href: "/guides/mutations",
        label: "Mutations",
        desc: "Shiny, prismatic & pity odds",
      },
      {
        href: "/guides/mutations/shiny-vs-sparkle",
        label: "Shiny vs Sparkle",
        desc: "Stat boost vs cosmetic prismatic",
      },
      {
        href: "/guides/mutations/shiny-egg",
        label: "Shiny Egg Guide",
        desc: "Boss routes, pity, and Prismatic Ball hatches",
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
        label: "Equipment (Lv40+)",
        desc: "Gear dungeons on Silent Sands after Ascension",
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
      {
        href: "/tier-list/early-carries",
        label: "Early Route Carries",
        desc: "Best picks before level 30",
      },
      {
        href: "/tier-list/evolution-priority",
        label: "Evolution Priority",
        desc: "Who gets Evolution Stones first",
      },
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
  { href: "/update-log", label: "Update Log" },
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
  { href: "/guides/level-30", label: "Equipment (Lv40+)" },
  { href: "/guides/farming", label: "Farming" },
] as const;

/** Primary mobile bottom bar — matches top traffic routes (home via header logo). */
export const mobileTabLinks = [
  {
    href: "/guides/mutations",
    label: "Mutations",
    match: (path: string) => path.startsWith("/guides/mutations"),
  },
  { href: "/dex", label: "Dex", match: (path: string) => path.startsWith("/dex") },
  { href: "/codes", label: "Codes", match: (path: string) => path.startsWith("/codes") },
  {
    href: "/tier-list",
    label: "Tiers",
    match: (path: string) => path === "/tier-list" || path.startsWith("/tier-list/"),
  },
] as const;

/** Top-bar items with optional cluster dropdowns (Mutations, Tier List). */
export const headerNavItems = [
  { kind: "cluster" as const, clusterId: "mutations" as const },
  { kind: "link" as const, href: "/dex", label: "Dex" },
  { kind: "cluster" as const, clusterId: "tier-list" as const },
  { kind: "link" as const, href: "/codes", label: "Codes" },
] as const;

export function getHeaderCluster(clusterId: "mutations" | "tier-list") {
  return headerClusters.find((cluster) => cluster.id === clusterId);
}
