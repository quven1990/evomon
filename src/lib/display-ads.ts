import { isIndexableDexSlug } from "@/lib/indexing";

/**
 * Routes that never show display ads (CWV, legal, trust).
 * Shared by AdSense auto-ads and third-party banners (e.g. Adsterra).
 */
const DISPLAY_ADS_BLOCKED_PATHS = new Set([
  "/",
  "/about",
  "/privacy",
  "/terms",
  "/cookies",
]);

/**
 * Substantive content pages only — skip homepage, legal, thin noindex dex stubs.
 */
export function shouldShowDisplayAds(pathname: string | null): boolean {
  if (!pathname) return false;
  if (DISPLAY_ADS_BLOCKED_PATHS.has(pathname)) return false;

  const dexMatch = pathname.match(/^\/dex\/([^/]+)\/?$/);
  if (dexMatch) {
    return isIndexableDexSlug(decodeURIComponent(dexMatch[1]));
  }

  return true;
}
