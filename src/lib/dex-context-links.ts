import { INDEXABLE_DEX_SLUGS } from "@/lib/indexing";

export type DexContextLink = {
  href: string;
  label: string;
};

const earlyCarrySlugs = new Set([
  "bubble",
  "bubboxer",
  "blazpup",
  "blazgrowl",
  "leafbun",
  "pebble",
  "sparkit",
  "lavite",
  "lavarock",
]);

const shinyEggSlugs = new Set(["bluebird", "sparkit", "arcub", "arcapex", "wispuff", "wisphex"]);

const evolutionPrioritySlugs = new Set([
  "bubble",
  "bubboxer",
  "blazpup",
  "blazgrowl",
  "pebble",
  "lavite",
  "lavarock",
  "bluebird",
  "arcub",
  "arcapex",
  "wispuff",
  "wisphex",
]);

const indexableSet = new Set<string>(INDEXABLE_DEX_SLUGS);

export function getDexContextLinks(slug: string): DexContextLink[] {
  if (!indexableSet.has(slug)) return [];

  const links: DexContextLink[] = [];

  if (earlyCarrySlugs.has(slug)) {
    links.push({ href: "/tier-list/early-carries", label: "Early route carries →" });
  }
  if (shinyEggSlugs.has(slug)) {
    links.push({ href: "/guides/mutations/shiny-egg", label: "Shiny egg guide →" });
  }
  if (evolutionPrioritySlugs.has(slug)) {
    links.push({ href: "/tier-list/evolution-priority", label: "Evolution stone priority →" });
  }

  return links;
}
