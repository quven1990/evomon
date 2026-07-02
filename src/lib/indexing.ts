import type { Metadata } from "next";

/** Thin or utility pages: crawl links, skip indexing. */
export const NOINDEX_FOLLOW: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};
