# Evomon Wiki (evomon.cc)

Unofficial fan wiki for **Evomon** on Roblox — codes, tier list, starter picks, and progression guides.

## Pet images

Sprites are bundled locally in `public/pets/` (76 pets). To refresh from CDN:

```bash
npm run images:sync
npm run images:compress   # shrink PNGs after download (recommended)
# or one step:
npm run images:prepare
```

Then commit `public/pets/` before deploy so production shows images without running the script.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static export outputs to `out/` (no Node server required).

## Deploy to evomon.cc (Cloudflare Pages)

Static export — no Worker CPU limits, served from CDN.

```bash
npm run deploy
```

This runs `prebuild` (generates `robots.txt`, `main_sitemap.xml`, `llms*.txt`), `next build`, then `wrangler pages deploy out`.

**Custom domain (one-time):** Cloudflare Dashboard → **Workers & Pages** → **evomon** → **Custom domains** → add `evomon.cc` and `www.evomon.cc`.

Preview URL: `https://evomon-3l6.pages.dev`

## GEO / LLM discovery

- [`/llms.txt`](https://evomon.cc/llms.txt) — curated page index for AI assistants ([llmstxt.org](https://llmstxt.org) format)
- [`/llms-full.txt`](https://evomon.cc/llms-full.txt) — expanded context: codes, type chart, starters, FAQs

Content is generated from `src/lib/llms.ts` at build time (`npm run prebuild`).

## Site map (MVP)

| Path | Purpose |
|------|---------|
| `/` | Homepage + hub links |
| `/codes` | Active codes (highest traffic) |
| `/tier-list` | Team building |
| `/starters` | Best starter pick |
| `/guides/beginner` | Progression walkthrough |

## Next steps (week 1)

1. **Deploy** — get `https://evomon.cc` live this week.
2. **Google Search Console** — verify domain, submit sitemap `/main_sitemap.xml`.
3. **Codes pipeline** — update `src/data/codes.ts` daily (later: Discord scraper via `roblox-game-data-scraper` skill).
4. **Analytics** — add Plausible or GA4.
5. **Phase 2 pages** — pokedex, evolution guide, shiny pity calculator.

## Update codes

Edit `src/data/codes.ts`:

- `activeCodes` — working codes
- `expiredCodes` — move retired codes here
- `CODES_LAST_UPDATED` — set to today's date

## Tech stack

- Next.js 16 (App Router, static export)
- Cloudflare Pages
- TypeScript + Tailwind CSS
- SEO: metadata, FAQ schema, breadcrumbs, sitemap, robots

## Disclaimer

This is an unofficial fan site. Not affiliated with Evomon Devs or Roblox Corporation.
