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
npm run start
```

## Deploy to evomon.cc

Recommended: **Vercel** (zero-config for Next.js).

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add custom domain `evomon.cc` and `www.evomon.cc`.
4. Ensure `public/pets/` is committed before deploy.

## GEO / LLM discovery

- [`/llms.txt`](https://evomon.cc/llms.txt) — curated page index for AI assistants ([llmstxt.org](https://llmstxt.org) format)
- [`/llms-full.txt`](https://evomon.cc/llms-full.txt) — expanded context: codes, type chart, starters, FAQs

Content is generated from `src/lib/llms.ts` and revalidates hourly on deploy.

5. Point DNS at Vercel (A/CNAME per their dashboard).

Alternative: Cloudflare Pages, Netlify, or any Node host running `next start`.

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
2. **Google Search Console** — verify domain, submit sitemap `/sitemap.xml`.
3. **Codes pipeline** — update `src/data/codes.ts` daily (later: Discord scraper via `roblox-game-data-scraper` skill).
4. **Analytics** — add Plausible or GA4.
5. **Phase 2 pages** — pokedex, evolution guide, shiny pity calculator.

## Update codes

Edit `src/data/codes.ts`:

- `activeCodes` — working codes
- `expiredCodes` — move retired codes here
- `CODES_LAST_UPDATED` — set to today's date

## Tech stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS
- SEO: metadata, FAQ schema, breadcrumbs, sitemap, robots

## Disclaimer

This is an unofficial fan site. Not affiliated with Evomon Devs or Roblox Corporation.
