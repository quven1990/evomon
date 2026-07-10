import type { MetadataRoute } from "next";
import { INDEXABLE_DEX_SLUGS } from "@/lib/indexing";
import { SITE } from "@/lib/site";

/** Indexable static routes. Popular /dex/[slug] pages are listed in INDEXABLE_DEX_SLUGS. */
const indexableRoutes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/codes", priority: 0.95, changeFrequency: "daily" },
  { path: "/dex", priority: 0.9, changeFrequency: "weekly" },
  { path: "/starters", priority: 0.85, changeFrequency: "weekly" },
  { path: "/type-chart", priority: 0.85, changeFrequency: "monthly" },
  { path: "/team-builder", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tier-list", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.5, changeFrequency: "yearly" },
  { path: "/guides/beginner", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides/level-30", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guides/mutations", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guides/farming", priority: 0.75, changeFrequency: "monthly" },
];

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const dexEntries: MetadataRoute.Sitemap = INDEXABLE_DEX_SLUGS.map((slug) => ({
    url: `${SITE.url}/dex/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...dexEntries];
}

export function getSitemapXml(): string {
  const entries = getSitemapEntries();
  const urls = entries
    .map((entry) => {
      const lastmod =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString().slice(0, 10)
          : String(entry.lastModified).slice(0, 10);

      return `<url>
<loc>${entry.url}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>${entry.changeFrequency}</changefreq>
<priority>${entry.priority}</priority>
</url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
