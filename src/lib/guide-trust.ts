import { SITE, canonical } from "@/lib/site";

export function guideArticleSchema(input: {
  path: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const published = input.datePublished ?? input.dateModified ?? "2026-07-09";
  const modified = input.dateModified ?? published;
  const url = canonical(input.path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: published,
    dateModified: modified,
    author: {
      "@type": "Person",
      name: "Remy",
      url: canonical("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: url,
    url,
  };
}
