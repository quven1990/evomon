export type GuideClusterRoute = {
  href: string;
  title: string;
  description: string;
  tag?: string;
};

export type GuideCluster = {
  id: "mutations" | "tier-list";
  hubHref: string;
  hubLabel: string;
  heading: string;
  lead: string;
  schemaName: string;
  routes: GuideClusterRoute[];
};

export const mutationsCluster: GuideCluster = {
  id: "mutations",
  hubHref: "/guides/mutations",
  hubLabel: "Mutations overview",
  heading: "Focused mutation guides",
  lead: "This page is the full reference. Open a focused guide when you have one specific question.",
  schemaName: "Evomon Mutations Guide Pages",
  routes: [
    {
      href: "/guides/mutations/shiny-vs-sparkle",
      title: "Shiny vs Sparkle",
      tag: "Basics",
      description:
        "Stat boost vs cosmetic prismatic, pity counters, and how mutations differ from Talent and Nature.",
    },
    {
      href: "/guides/mutations/shiny-egg",
      title: "Shiny Egg Guide",
      tag: "Boss routes",
      description: "Egg drops, boss lines without field pity, Prismatic Ball hatches, and Catch Master tips.",
    },
  ],
};

export const tierListCluster: GuideCluster = {
  id: "tier-list",
  hubHref: "/tier-list",
  hubLabel: "Tier list overview",
  heading: "Route & stone guides",
  lead: "Full rankings stay on this page. Use the guides below for early carries or evolution stone order.",
  schemaName: "Evomon Tier List Guide Pages",
  routes: [
    {
      href: "/tier-list/early-carries",
      title: "Early Route Carries",
      tag: "0–30",
      description: "Verdant Valley through Lava Crag — Bubble starter vs Lavite stone ROI and backup picks.",
    },
    {
      href: "/tier-list/evolution-priority",
      title: "Evolution Priority",
      tag: "Stones",
      description: "Who gets Evolution Stones first when merchant stock and tower drip are slow.",
    },
  ],
};

export const headerClusters = [mutationsCluster, tierListCluster] as const;
