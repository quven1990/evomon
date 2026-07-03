/**
 * Plausible custom events for evomon.cc
 *
 * Register these goals in Plausible (shipsolo.io dashboard → Goals):
 *
 * | Event           | Purpose                          | Key props                          |
 * |-----------------|----------------------------------|------------------------------------|
 * | Code Copy       | User copied a redeem code        | code, source, placement, page      |
 * | Play Click      | Outbound to Roblox game          | placement, page                    |
 * | Team Share      | Copied shareable team URL        | pets, page                         |
 * | Team Preset     | Applied a quick preset           | preset, page                       |
 * | Dex Filter      | Element filter on dex gallery    | element, page                      |
 * | Dex Search      | Search query (≥2 chars, debounced)| query, results, page               |
 * | Dex Pet Click   | Opened a pet detail page         | pet, page                          |
 * | Type Select     | Picked a type on type chart      | type, page                         |
 * | Guide Section   | Jumped to a guide section        | guide, section, page               |
 * | Contact Click   | Email / contact link             | channel, page                      |
 *
 * Pageviews on client navigations are sent via AnalyticsPageview.
 */

export const AnalyticsEvent = {
  CODE_COPY: "Code Copy",
  PLAY_CLICK: "Play Click",
  TEAM_SHARE: "Team Share",
  TEAM_PRESET: "Team Preset",
  DEX_FILTER: "Dex Filter",
  DEX_SEARCH: "Dex Search",
  DEX_PET_CLICK: "Dex Pet Click",
  TYPE_SELECT: "Type Select",
  GUIDE_SECTION: "Guide Section",
  CONTACT_CLICK: "Contact Click",
} as const;

export type AnalyticsEventName = (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];

export type AnalyticsProps = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function sanitizeProps(props?: AnalyticsProps): Record<string, string> | undefined {
  if (!props) return undefined;
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null || value === "") continue;
    out[key] = String(value).slice(0, 200);
  }
  return Object.keys(out).length ? out : undefined;
}

function currentPage(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

/** Fire a Plausible custom event (no-op during SSR or if script blocked). */
export function track(event: AnalyticsEventName, props?: AnalyticsProps): void {
  if (typeof window === "undefined") return;
  const propsWithPage = { page: currentPage(), ...props };
  const clean = sanitizeProps(propsWithPage);
  try {
    window.plausible?.(event, clean ? { props: clean } : undefined);
  } catch {
    // Analytics must never break UX
  }
}

/** Manual pageview for Next.js client navigations (static export + Link). */
export function trackPageview(url?: string): void {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.("pageview", url ? { props: { url: url.slice(0, 200) } } : undefined);
  } catch {
    // ignore
  }
}

export function trackCodeCopy(props: {
  code: string;
  source?: string;
  placement: "featured" | "highlight" | "list" | "table";
}): void {
  track(AnalyticsEvent.CODE_COPY, props);
}

export function trackPlayClick(placement: string): void {
  track(AnalyticsEvent.PLAY_CLICK, { placement });
}

export function trackGuideSection(guide: string, section: string): void {
  track(AnalyticsEvent.GUIDE_SECTION, { guide, section });
}

export function trackContactClick(channel: "contact" | "privacy"): void {
  track(AnalyticsEvent.CONTACT_CLICK, { channel });
}
