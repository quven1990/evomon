import { getSitemapEntries } from "@/lib/sitemap";
import { SITE } from "@/lib/site";

/** IndexNow API key — verification file served at /{key}.txt */
export const INDEXNOW_KEY = "dea551e27beb46b3a63bce11bbae62d2";

export const INDEXNOW_KEY_LOCATION = `${SITE.url}/${INDEXNOW_KEY}.txt`;

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
] as const;

export function getIndexNowUrlList(): string[] {
  return getSitemapEntries().map((entry) => entry.url);
}

export type IndexNowSubmitResult = {
  endpoint: string;
  ok: boolean;
  status: number;
  body: string;
};

/** Notify search engines (Bing, Yandex, etc.) that URLs were added or updated. */
export async function submitIndexNow(urlList?: string[]): Promise<IndexNowSubmitResult[]> {
  const urls = urlList ?? getIndexNowUrlList();

  if (urls.length === 0) {
    throw new Error("IndexNow: urlList is empty");
  }

  const payload = {
    host: SITE.domain,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };

  return Promise.all(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const body = await response.text();

      return {
        endpoint,
        ok: response.ok,
        status: response.status,
        body: body.slice(0, 500),
      };
    }),
  );
}
