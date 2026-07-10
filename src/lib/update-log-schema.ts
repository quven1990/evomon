import type { UpdateLogEntry } from "@/data/update-log";
import { canonical } from "@/lib/site";

export function updateLogSchema(entries: UpdateLogEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Evomon Wiki Update Log",
    url: canonical("/update-log"),
    description:
      "Chronological record of content, SEO, and quality updates to evomon.cc — maintained by Remy.",
    dateModified: entries[0]?.date,
    author: {
      "@type": "Person",
      name: "Remy",
      url: canonical("/about"),
    },
    publisher: {
      "@type": "Organization",
      name: "Evomon Wiki",
      url: canonical("/"),
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Site updates",
      itemListElement: entries.slice(0, 20).map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.title,
        description: entry.body,
        url: `${canonical("/update-log")}#${entry.date}-${slugify(entry.title)}`,
      })),
    },
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function updateEntryAnchor(entry: UpdateLogEntry): string {
  return `${entry.date}-${slugify(entry.title)}`;
}
