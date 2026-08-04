import { shouldShowDisplayAds } from "@/lib/display-ads";

/** Google AdSense publisher client (auto ads). */
export const ADSENSE_CLIENT = "ca-pub-9101692675645964";

export const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;

/** Auto ads only on substantive pages — same gate as other display ads. */
export function shouldLoadAdSense(pathname: string | null): boolean {
  return shouldShowDisplayAds(pathname);
}
