import { isIndexableDexSlug } from "@/lib/indexing";

/** Google AdSense publisher client (auto ads). */
export const ADSENSE_CLIENT = "ca-pub-9101692675645964";

export const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;

/** Trust / legal / utility routes — no auto ads. */
const ADSENSE_BLOCKED_PATHS = new Set([
  "/",
  "/about",
  "/privacy",
  "/terms",
  "/cookies",
]);

/**
 * Auto ads only on substantive, indexable content pages.
 * Skips homepage (CWV), legal/trust pages, and thin noindex dex stubs.
 */
export function shouldLoadAdSense(pathname: string | null): boolean {
  if (!pathname) return false;
  if (ADSENSE_BLOCKED_PATHS.has(pathname)) return false;

  const dexMatch = pathname.match(/^\/dex\/([^/]+)\/?$/);
  if (dexMatch) {
    return isIndexableDexSlug(decodeURIComponent(dexMatch[1]));
  }

  return true;
}
