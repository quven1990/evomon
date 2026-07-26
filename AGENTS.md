<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Update-log + sitemap lastmod

Whenever you ship a user-visible content or SEO change (blog, dex thick page, codes, redirects that affect indexed URLs, map-zones, guides):

1. **Update-log** — Same day, add an entry in `src/data/update-log.ts`:
   - `date` = today (`YYYY-MM-DD`)
   - Bump `UPDATE_LOG_LAST_PUBLISHED` to that date
   - `pages` = every public path you changed (e.g. `/blog/foo`, `/dex/bar`)
   - Always include `/update-log` in `pages` when adding an entry

2. **Sitemap lastmod** — Do not invent dates or stamp build time. Sitemap already derives lastmod from update-log `pages[]`, content constants (`CODES_LAST_UPDATED`, `DEX_LAST_CHECKED`, …), and blog `published`. An honest update-log entry **is** the sitemap freshness update.

3. Skip update-log only for pure local/infra work with no public URL impact.
