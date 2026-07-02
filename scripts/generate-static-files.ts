import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { generateLlmsFullTxt, generateLlmsTxt } from "../src/lib/llms";
import { getSitemapXml } from "../src/lib/sitemap";
import { SITE } from "../src/lib/site";

const publicDir = join(import.meta.dirname, "..", "public");

writeFileSync(join(publicDir, "main_sitemap.xml"), getSitemapXml(), "utf8");
writeFileSync(join(publicDir, "llms.txt"), generateLlmsTxt(), "utf8");
writeFileSync(join(publicDir, "llms-full.txt"), generateLlmsFullTxt(), "utf8");
writeFileSync(
  join(publicDir, "robots.txt"),
  `User-Agent: *\nAllow: /\n\nSitemap: ${SITE.url}/main_sitemap.xml\n`,
  "utf8",
);

console.log("Generated public/main_sitemap.xml, llms.txt, llms-full.txt, robots.txt");
