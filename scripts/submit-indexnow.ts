import { getIndexNowUrlList, submitIndexNow } from "../src/lib/indexnow";

const extraUrls = process.argv.slice(2);

async function main() {
  const urlList = extraUrls.length > 0 ? extraUrls : getIndexNowUrlList();

  console.log(`IndexNow: submitting ${urlList.length} URL(s)...`);

  const results = await submitIndexNow(urlList);

  for (const result of results) {
    const label = result.ok ? "OK" : "FAIL";
    console.log(`  [${label}] ${result.status} ${result.endpoint}`);
    if (result.body) console.log(`        ${result.body}`);
  }

  const failed = results.filter((r) => !r.ok);
  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("IndexNow submit failed:", error);
  process.exitCode = 1;
});
