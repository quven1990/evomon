import type { Metadata } from "next";

/**
 * Dex detail pages worth indexing: starters, tier-list staples, and Plausible traffic leaders.
 * Others stay noindex until content is thicker.
 */
export const INDEXABLE_DEX_SLUGS = [
  "bubble",
  "bubboxer",
  "bubblade",
  "blazpup",
  "blazgrowl",
  "leafbun",
  "pebble",
  "pebgolem",
  "sparkit",
  "bluebird",
  "volcrest",
  "lavite",
  "lavarock",
  "arcub",
  "arcapex",
  "wispuff",
  "wisphex",
  "astraknight",
] as const;

export type IndexableDexSlug = (typeof INDEXABLE_DEX_SLUGS)[number];

export function isIndexableDexSlug(slug: string): slug is IndexableDexSlug {
  return (INDEXABLE_DEX_SLUGS as readonly string[]).includes(slug.toLowerCase());
}

/** Thin or utility pages: crawl links, skip indexing. */
export const NOINDEX_FOLLOW: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};
