/**
 * Adsterra banner — UX-safe: fixed 300×250 only (no popunder / social bar / sticky 320×50).
 *
 * Keys appear in client HTML (not secrets). Env can override for staging:
 *   NEXT_PUBLIC_ADSTERRA_BANNER_KEY=
 *   NEXT_PUBLIC_ADSTERRA_INVOKE_HOST=www.highperformanceformat.com
 *   NEXT_PUBLIC_ADSTERRA_ENABLED=false  → force off
 *
 * 320×50 unit exists in Adsterra but is NOT wired — would fight the mobile bottom nav.
 */

export type AdsterraBannerConfig = {
  key: string;
  width: number;
  height: number;
  /** Host from Adsterra snippet, without protocol */
  invokeHost: string;
};

/** Placement `300x250_1` from Adsterra (IFRAME SYNC). */
const DEFAULT_KEY = "6d1af51817130afbe57903ad47282ac0";
const DEFAULT_HOST = "www.highperformanceformat.com";

const envOff = (process.env.NEXT_PUBLIC_ADSTERRA_ENABLED ?? "true").trim().toLowerCase() === "false";

const key = (process.env.NEXT_PUBLIC_ADSTERRA_BANNER_KEY ?? DEFAULT_KEY).trim();
const invokeHost = (process.env.NEXT_PUBLIC_ADSTERRA_INVOKE_HOST ?? DEFAULT_HOST)
  .trim()
  .replace(/^https?:\/\//, "");

export const ADSTERRA_BANNER: AdsterraBannerConfig = {
  key,
  width: 300,
  height: 250,
  invokeHost,
};

/** Kept for reference — do not mount on pages with MobileBottomNav. */
export const ADSTERRA_MOBILE_STRIP = {
  key: "4f3e74a9dbdb30ada211850a83908fc5",
  width: 320,
  height: 50,
  invokeHost: DEFAULT_HOST,
} as const;

export function isAdsterraBannerEnabled(): boolean {
  if (envOff) return false;
  return ADSTERRA_BANNER.key.length > 0;
}
