import { DEX_LAST_CHECKED, DEX_TOTAL_SLOTS, dexEntries, dexStats } from "@/data/dex";
import { INDEXABLE_DEX_SLUGS } from "@/lib/indexing";
import { SITE, canonical } from "@/lib/site";

const stats = dexStats();

export const dexGalleryFaqs = [
  {
    q: "How many Evomon are in the dex?",
    a: `The public dex tracks ${DEX_TOTAL_SLOTS} numbered slots. About ${stats.named} are named on this gallery (${stats.percent}%); the rest appear as silhouettes until community or in-game sources confirm a name.`,
  },
  {
    q: "Is Evomon Dex the same as an Evomon pokedex?",
    a: "Yes — players search both “evomon dex” and “evomon pokedex” for the same numbered creature index. This page is the searchable gallery with sprites, elements, and links into individual pet pages.",
  },
  {
    q: "Why are some dex slots blank silhouettes?",
    a: "Silhouette slots exist as numbers in the public index but do not yet have a reliably verified name or sprite on our sheet. We leave them unnamed rather than inventing pets.",
  },
  {
    q: "How do I find where to catch a pet?",
    a: "Open a named pet’s dex page for catch notes when available, or use the Map Zones guide for island level bands and spawn lists. Pair with the Type Chart when planning coverage.",
  },
] as const;

export function elementCounts(): { element: string; count: number }[] {
  const map = new Map<string, number>();
  for (const entry of dexEntries) {
    if (entry.element === "Unknown") continue;
    map.set(entry.element, (map.get(entry.element) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([element, count]) => ({ element, count }))
    .sort((a, b) => b.count - a.count || a.element.localeCompare(b.element));
}

/** Named pets for ItemList — prefer indexable thick pages first, then remaining named. */
export function dexItemListPets(limit = 40): { name: string; slug: string; number: number; element: string }[] {
  const named = dexEntries.filter((e): e is typeof e & { name: string } => Boolean(e.name));
  const indexable = new Set<string>(INDEXABLE_DEX_SLUGS);
  const ranked = [
    ...named.filter((e) => indexable.has(e.name.toLowerCase())),
    ...named.filter((e) => !indexable.has(e.name.toLowerCase())),
  ];
  const seen = new Set<string>();
  const out: { name: string; slug: string; number: number; element: string }[] = [];
  for (const e of ranked) {
    const slug = e.name.toLowerCase();
    if (seen.has(slug)) continue;
    seen.add(slug);
    out.push({ name: e.name, slug, number: e.number, element: e.element });
    if (out.length >= limit) break;
  }
  return out;
}

export function dexGallerySchemas() {
  const pets = dexItemListPets(40);
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Evomon Dex", item: canonical("/dex") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Evomon Dex — ${stats.named} Pets with Sprites`,
      url: canonical("/dex"),
      description: `Browse all ${DEX_TOTAL_SLOTS} Evomon dex slots — ${stats.named} named pets with sprites, elements, and evolution links. Community-maintained Roblox Evomon pokedex gallery.`,
      isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
      dateModified: DEX_LAST_CHECKED,
      about: {
        "@type": "Thing",
        name: "Evomon",
        description: "Roblox creature-collection game with numbered dex slots, evolutions, and type matchups.",
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Named Evomon (sample of gallery)",
        numberOfItems: stats.named,
        itemListElement: pets.map((pet, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `#${String(pet.number).padStart(3, "0")} ${pet.name}`,
          url: canonical(`/dex/${pet.slug}`),
          description: `${pet.name} — ${pet.element}-type Evomon in the public dex.`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: dexGalleryFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
}
