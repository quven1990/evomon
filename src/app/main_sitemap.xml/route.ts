import { getSitemapXml } from "@/lib/sitemap";

export function GET() {
  return new Response(getSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
