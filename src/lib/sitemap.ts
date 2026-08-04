import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/data/blog-posts";
import { CODES_LAST_UPDATED } from "@/data/codes";
import { DEX_LAST_CHECKED } from "@/data/dex";
import { TYPE_CHART_LAST_CHECKED } from "@/data/type-chart";
import { UPDATE_LOG_LAST_PUBLISHED, getAllUpdateLogEntries } from "@/data/update-log";
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
  { path: "/natures", priority: 0.82, changeFrequency: "monthly" },
  { path: "/traits", priority: 0.82, changeFrequency: "monthly" },
  { path: "/items", priority: 0.84, changeFrequency: "weekly" },
  { path: "/equipment", priority: 0.84, changeFrequency: "weekly" },
  { path: "/map-zones", priority: 0.85, changeFrequency: "weekly" },
  { path: "/team-builder", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tier-list", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/update-log", priority: 0.55, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.65, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.5, changeFrequency: "yearly" },
  { path: "/guides/beginner", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides/level-30", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guides/mutations", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guides/mutations/shiny-vs-sparkle", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/mutations/shiny-egg", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/farming", priority: 0.75, changeFrequency: "monthly" },
  { path: "/tier-list/evolution-priority", priority: 0.72, changeFrequency: "monthly" },
  { path: "/tier-list/early-carries", priority: 0.72, changeFrequency: "monthly" },
];

/** Site launch / first public content — last resort when no better signal exists. */
const SITE_LAUNCH = "2026-07-03";

/**
 * Hard freshness signals from page copy / data constants.
 * Prefer these over "build time" so Google can trust lastmod.
 */
const KNOWN_LASTMOD: Record<string, string> = {
  "/": CODES_LAST_UPDATED,
  "/codes": CODES_LAST_UPDATED,
  "/dex": DEX_LAST_CHECKED,
  "/type-chart": TYPE_CHART_LAST_CHECKED,
  "/update-log": UPDATE_LOG_LAST_PUBLISHED,
  "/privacy": "2026-07-17",
  "/cookies": "2026-07-17",
  "/terms": "2026-07-08",
};

function parseDay(iso: string): Date {
  return new Date(`${iso.slice(0, 10)}T00:00:00.000Z`);
}

function maxDay(...values: Array<string | Date | undefined | null>): Date {
  let best = 0;
  for (const value of values) {
    if (!value) continue;
    const t = value instanceof Date ? value.getTime() : parseDay(value).getTime();
    if (!Number.isNaN(t) && t > best) best = t;
  }
  return new Date(best || parseDay(SITE_LAUNCH).getTime());
}

/** Newest update-log date per path from `pages[]` (honest content touch dates). */
function buildUpdateLogLastmod(): Map<string, string> {
  const map = new Map<string, string>();
  for (const entry of getAllUpdateLogEntries()) {
    for (const page of entry.pages ?? []) {
      const key = page === "" ? "/" : page;
      const prev = map.get(key);
      if (!prev || entry.date > prev) map.set(key, entry.date);
    }
  }
  return map;
}

function lastmodForPath(
  path: string,
  logDates: Map<string, string>,
  extra?: Array<string | Date | undefined | null>,
): Date {
  const normalized = path === "" ? "/" : path;
  return maxDay(KNOWN_LASTMOD[normalized], logDates.get(normalized), ...(extra ?? []));
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const logDates = buildUpdateLogLastmod();
  const posts = getAllBlogPosts();
  const latestBlogPublished = posts.reduce<string | undefined>((best, post) => {
    if (!best || post.published > best) return post.published;
    return best;
  }, undefined);

  const staticEntries = indexableRoutes.map(({ path, priority, changeFrequency }) => {
    const normalized = path || "/";
    const extras: Array<string | undefined> = [];
    if (normalized === "/" || normalized === "/blog") {
      extras.push(latestBlogPublished);
    }
    return {
      url: `${SITE.url}${path || "/"}`,
      lastModified: lastmodForPath(normalized, logDates, extras),
      changeFrequency,
      priority,
    };
  });

  const dexEntries: MetadataRoute.Sitemap = INDEXABLE_DEX_SLUGS.map((slug) => ({
    url: `${SITE.url}/dex/${slug}`,
    // Prefer the changelog touch for that species; fall back to dex data check date.
    lastModified: lastmodForPath(`/dex/${slug}`, logDates, [DEX_LAST_CHECKED, logDates.get("/dex")]),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: lastmodForPath(`/blog/${post.slug}`, logDates, [post.published]),
    changeFrequency: "monthly" as const,
    priority: 0.62,
  }));

  return [...staticEntries, ...blogEntries, ...dexEntries];
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
