import manifest from "@/data/pet-image-manifest.json";
import type { DexEntry } from "@/data/dex";

export const PET_IMAGE_CDN =
  "https://noccvatccxpakfedhysz.supabase.co/storage/v1/object/public/pet-images/catalog";

const manifestMap = manifest as Record<string, string | null>;

/** Local path if we bundled the sprite (run `npm run images:sync`). */
export function getLocalPetImage(slug: string): string {
  return `/pets/${slug}.png`;
}

export function getPetImageCandidates(entry: Pick<DexEntry, "number" | "name">): string[] {
  if (!entry.name) return [];

  const slug = entry.name.toLowerCase();
  const pad3 = String(entry.number).padStart(3, "0");
  const urls: string[] = [];

  // 1) Local bundle (fast, reliable — same approach as evomon.wiki /evomon/*.png)
  urls.push(getLocalPetImage(slug));

  // 2) Verified CDN file from manifest
  const verified = manifestMap[slug];
  if (verified) urls.push(`${PET_IMAGE_CDN}/${verified}`);

  // 3) Extra CDN guesses
  urls.push(
    `${PET_IMAGE_CDN}/${slug}.png`,
    `${PET_IMAGE_CDN}/evomon-${pad3}.png`,
    `https://www.evomon.wiki/evomon/${slug}.png`,
  );

  return [...new Set(urls)];
}

export function countManifestImages(): number {
  return Object.values(manifestMap).filter(Boolean).length;
}
