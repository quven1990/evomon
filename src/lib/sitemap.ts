import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Indexable routes only — thin /dex/[slug] pages are noindex and omitted here. */
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
  { path: "/guides/beginner", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides/level-30", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guides/mutations", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guides/farming", priority: 0.75, changeFrequency: "monthly" },
];

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

export function getSitemapXml(): string {
  const entries = getSitemapEntries();
  const urls = entries
    .map((entry) => {
      const lastmod =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString()
          : entry.lastModified;

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
