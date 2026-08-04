/**
 * Client-side country from Cloudflare edge (`/cdn-cgi/trace`).
 * Used to suppress Adsterra for CN (junk/scam redirect creatives).
 */

const CACHE_KEY = "evomon-cf-country";

/** ISO countries that must not load Adsterra banners. */
export const ADSTERRA_BLOCKED_COUNTRIES = new Set(["CN"]);

export async function getVisitorCountry(): Promise<string | null> {
  if (typeof window === "undefined") return null;

  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) return cached;
  } catch {
    // private mode
  }

  try {
    const res = await fetch("/cdn-cgi/trace", { cache: "no-store" });
    if (!res.ok) return null;
    const text = await res.text();
    const match = /^loc=(.+)$/m.exec(text);
    const country = match?.[1]?.trim().toUpperCase() || null;
    if (country) {
      try {
        sessionStorage.setItem(CACHE_KEY, country);
      } catch {
        // ignore
      }
    }
    return country;
  } catch {
    return null;
  }
}

export function isAdsterraBlockedCountry(country: string | null): boolean {
  if (!country) return false;
  return ADSTERRA_BLOCKED_COUNTRIES.has(country.toUpperCase());
}
