import manifest from "@/data/pet-image-manifest.json";
import localSlugs from "@/data/pet-images-local.json";
import type { DexEntry } from "@/data/dex";

export const PET_IMAGE_CDN =
  "https://noccvatccxpakfedhysz.supabase.co/storage/v1/object/public/pet-images/catalog";

const manifestMap = manifest as Record<string, string | null>;
const localSet = new Set(localSlugs as string[]);

/** True when public/pets/{slug}.png is bundled (see pet-images-local.json). */
export function hasLocalPetImage(slug: string): boolean {
  return localSet.has(slug.toLowerCase());
}

/** Local path only if the file exists in the deploy bundle. */
export function getLocalPetImage(slug: string): string | null {
  const key = slug.toLowerCase();
  return hasLocalPetImage(key) ? `/pets/${key}.png` : null;
}

/**
 * Ordered image candidates for <img onError> fallback.
 * Never invents /pets/{slug}.png when the file is missing — that caused crawl 404s
 * (e.g. mushmer) for bots that do not run JS.
 */
export function getPetImageCandidates(entry: Pick<DexEntry, "number" | "name">): string[] {
  if (!entry.name) return [];

  const slug = entry.name.toLowerCase();
  const pad3 = String(entry.number).padStart(3, "0");
  const urls: string[] = [];

  const local = getLocalPetImage(slug);
  if (local) urls.push(local);

  const verified = manifestMap[slug];
  if (verified) urls.push(`${PET_IMAGE_CDN}/${verified}`);

  // Client-only guesses after verified sources — skip when nothing known
  // so SSR does not emit a first src that 404s for crawlers.
  if (urls.length > 0) {
    urls.push(
      `${PET_IMAGE_CDN}/${slug}.png`,
      `${PET_IMAGE_CDN}/evomon-${pad3}.png`,
      `https://www.evomon.wiki/evomon/${slug}.png`,
    );
  }

  return [...new Set(urls)];
}

/** Best single src for static <img> tags, or null to render a text placeholder. */
export function getBestPetImageSrc(entry: Pick<DexEntry, "number" | "name">): string | null {
  return getPetImageCandidates(entry)[0] ?? null;
}

export function countManifestImages(): number {
  return Object.values(manifestMap).filter(Boolean).length;
}

export function countLocalPetImages(): number {
  return localSet.size;
}
