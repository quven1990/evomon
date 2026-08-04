/**
 * Adsterra banners — UX-safe fixed sizes only (no popunder / social bar / sticky 320×50).
 *
 * Keys appear in client HTML (not secrets). Env overrides:
 *   NEXT_PUBLIC_ADSTERRA_BANNER_KEY=          → 300×250 (mobile + fallback)
 *   NEXT_PUBLIC_ADSTERRA_LEADERBOARD_KEY=     → 728×90 (desktop md+)
 *   NEXT_PUBLIC_ADSTERRA_INVOKE_HOST=www.highperformanceformat.com
 *   NEXT_PUBLIC_ADSTERRA_ENABLED=false        → force off
 *
 * 320×50 unit exists in Adsterra but is NOT wired — fights mobile bottom nav.
 */

export type AdsterraBannerConfig = {
  key: string;
  width: number;
  height: number;
  /** Static HTML path under /public/ads (no .html) */
  src: string;
  /** Host from Adsterra snippet, without protocol */
  invokeHost: string;
};

/** Placement `300x250_1` from Adsterra (IFRAME SYNC). */
const DEFAULT_RECT_KEY = "6d1af51817130afbe57903ad47282ac0";
const DEFAULT_HOST = "www.highperformanceformat.com";

/** Desktop leaderboard — Banner 728×90 from Adsterra. */
const DEFAULT_LEADERBOARD_KEY = "5f938011bd8b5bf4f90f4d2e52ea5a1f";

const envOff =
  (process.env.NEXT_PUBLIC_ADSTERRA_ENABLED ?? "true").trim().toLowerCase() === "false";

const invokeHost = (process.env.NEXT_PUBLIC_ADSTERRA_INVOKE_HOST ?? DEFAULT_HOST)
  .trim()
  .replace(/^https?:\/\//, "");

const rectKey = (process.env.NEXT_PUBLIC_ADSTERRA_BANNER_KEY ?? DEFAULT_RECT_KEY).trim();
const leaderboardKey = (
  process.env.NEXT_PUBLIC_ADSTERRA_LEADERBOARD_KEY ?? DEFAULT_LEADERBOARD_KEY
).trim();

/** Mobile + desktop fallback: 300×250 */
export const ADSTERRA_RECT: AdsterraBannerConfig = {
  key: rectKey,
  width: 300,
  height: 250,
  src: "/ads/adsterra-300x250",
  invokeHost,
};

/** Desktop md+: 728×90 when key is set */
export const ADSTERRA_LEADERBOARD: AdsterraBannerConfig = {
  key: leaderboardKey,
  width: 728,
  height: 90,
  src: "/ads/adsterra-728x90",
  invokeHost,
};

/** @deprecated use ADSTERRA_RECT */
export const ADSTERRA_BANNER = ADSTERRA_RECT;

/** Kept for reference — do not mount on pages with MobileBottomNav. */
export const ADSTERRA_MOBILE_STRIP = {
  key: "4f3e74a9dbdb30ada211850a83908fc5",
  width: 320,
  height: 50,
  invokeHost: DEFAULT_HOST,
} as const;

export function isAdsterraBannerEnabled(): boolean {
  if (envOff) return false;
  return ADSTERRA_RECT.key.length > 0;
}

export function hasAdsterraLeaderboard(): boolean {
  return isAdsterraBannerEnabled() && ADSTERRA_LEADERBOARD.key.length > 0;
}
