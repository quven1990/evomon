import { SITE, canonical } from "@/lib/site";

export function guideArticleSchema(input: {
  path: string;
  headline: string;
  description: string;
  dateModified?: string;
}) {
  const modified = input.dateModified ?? "2026-07-09";
  const url = canonical(input.path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: "2026-07-09",
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
