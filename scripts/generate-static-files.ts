import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { INDEXNOW_KEY } from "../src/lib/indexnow";
import { generateLlmsFullTxt, generateLlmsTxt } from "../src/lib/llms";
import { getSitemapXml } from "../src/lib/sitemap";
import { SITE } from "../src/lib/site";

const publicDir = join(import.meta.dirname, "..", "public");

const sitemapXml = getSitemapXml();
writeFileSync(join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
writeFileSync(join(publicDir, "llms.txt"), generateLlmsTxt(), "utf8");
writeFileSync(join(publicDir, "llms-full.txt"), generateLlmsFullTxt(), "utf8");
writeFileSync(
  join(publicDir, "robots.txt"),
  `User-Agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n\n# LLM / AI discovery\n# ${SITE.url}/llms.txt\n# ${SITE.url}/llms-full.txt\n`,
  "utf8",
);
writeFileSync(join(publicDir, `${INDEXNOW_KEY}.txt`), `${INDEXNOW_KEY}\n`, "utf8");

console.log(
  "Generated public/sitemap.xml, llms.txt, llms-full.txt, robots.txt, IndexNow key file",
);
