export const SITE = {
  name: "Evomon Wiki",
  domain: "evomon.cc",
  url: "https://evomon.cc",
  description:
    "Unofficial Evomon Wiki for Roblox — working codes, pokedex with sprites, shiny guides, type chart & team builder. Updated regularly on evomon.cc.",
  locale: "en-US",
  emails: {
    contact: "contract@evomon.cc",
    privacy: "privacy@evomon.cc",
  },
} as const;

export function canonical(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "/" : normalized}`;
}

export function monthYear(date = new Date()) {
  return date.toLocaleDateString(SITE.locale, {
    month: "long",
    year: "numeric",
  });
}
