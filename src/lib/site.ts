export const SITE = {
  name: "Evomon Wiki",
  domain: "evomon.cc",
  url: "https://evomon.cc",
  description:
    "Roblox Evomon wiki with working codes, pet sprites, team builder & type chart — practical tools updated regularly on evomon.cc.",
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
