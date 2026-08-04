/**
 * Adsterra banner config — UX-safe: fixed Banner only (no popunder / social bar).
 *
 * Setup:
 * 1. Adsterra publisher → add website → +ADD UNIT → Banner 300x250 (or 320x50 mobile)
 * 2. Copy the `key` from atOptions and the invoke host from the script src
 * 3. Set Cloudflare Pages / local env:
 *    NEXT_PUBLIC_ADSTERRA_BANNER_KEY=...
 *    NEXT_PUBLIC_ADSTERRA_INVOKE_HOST=www.highperformanceformat.com  (from your snippet)
 * 4. Redeploy. Empty key = component renders nothing.
 *
 * Never reuse one placement key in two DOM slots — create a second unit instead.
 */

export type AdsterraBannerConfig = {
  key: string;
  width: number;
  height: number;
  /** Host from Adsterra snippet, without protocol — e.g. www.highperformanceformat.com */
  invokeHost: string;
};

const key = (process.env.NEXT_PUBLIC_ADSTERRA_BANNER_KEY ?? "").trim();
const invokeHost = (
  process.env.NEXT_PUBLIC_ADSTERRA_INVOKE_HOST ?? "www.highperformanceformat.com"
).trim().replace(/^https?:\/\//, "");

const width = Number(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_WIDTH ?? "300") || 300;
const height = Number(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_HEIGHT ?? "250") || 250;

export const ADSTERRA_BANNER: AdsterraBannerConfig = {
  key,
  width,
  height,
  invokeHost,
};

export function isAdsterraBannerEnabled(): boolean {
  return ADSTERRA_BANNER.key.length > 0;
}
