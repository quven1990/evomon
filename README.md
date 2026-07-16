# Evomon Wiki

**Live site:** [https://evomon.cc/](https://evomon.cc/)

Unofficial fan wiki for **Evomon** on Roblox — codes, dex, type chart, tier list, team builder, and progression guides.

## Core pages

Direct links to the main hub pages on [evomon.cc](https://evomon.cc/):

| Page | URL |
|------|-----|
| Homepage | [https://evomon.cc/](https://evomon.cc/) |
| Evomon Codes | [https://evomon.cc/codes](https://evomon.cc/codes) |
| Shiny & Mutations Guide | [https://evomon.cc/guides/mutations](https://evomon.cc/guides/mutations) |
| Evomon Dex | [https://evomon.cc/dex](https://evomon.cc/dex) |
| Tier List | [https://evomon.cc/tier-list](https://evomon.cc/tier-list) |
| Type Chart | [https://evomon.cc/type-chart](https://evomon.cc/type-chart) |
| Team Builder | [https://evomon.cc/team-builder](https://evomon.cc/team-builder) |
| Beginner Guide | [https://evomon.cc/guides/beginner](https://evomon.cc/guides/beginner) |
| Farming Guide | [https://evomon.cc/guides/farming](https://evomon.cc/guides/farming) |
| Equipment Dungeons (Lv40+) | [https://evomon.cc/guides/level-30](https://evomon.cc/guides/level-30) |
| Best Starter Pick | [https://evomon.cc/starters](https://evomon.cc/starters) |
| About & Trust | [https://evomon.cc/about](https://evomon.cc/about) |
| Update Log | [https://evomon.cc/update-log](https://evomon.cc/update-log) |

## Blog

| Page | URL |
|------|-----|
| Blog index | [https://evomon.cc/blog](https://evomon.cc/blog) |
| Evomon Shiny Bluebird Guide | [https://evomon.cc/blog/evomon-shiny-bluebird-guide](https://evomon.cc/blog/evomon-shiny-bluebird-guide) |
| Best Nature for Lavite | [https://evomon.cc/blog/best-nature-lavite-evomon](https://evomon.cc/blog/best-nature-lavite-evomon) |
| Evomon Shiny Egg Chance & Odds | [https://evomon.cc/blog/evomon-shiny-egg-chance](https://evomon.cc/blog/evomon-shiny-egg-chance) |
| What Does Shiny Do in Evomon | [https://evomon.cc/blog/what-does-shiny-do-evomon](https://evomon.cc/blog/what-does-shiny-do-evomon) |
| How to Get Eggs in Evomon | [https://evomon.cc/blog/how-to-get-eggs-evomon](https://evomon.cc/blog/how-to-get-eggs-evomon) |

## Guide subpages

| Page | URL |
|------|-----|
| Shiny vs Sparkle (Prismatic) | [https://evomon.cc/guides/mutations/shiny-vs-sparkle](https://evomon.cc/guides/mutations/shiny-vs-sparkle) |
| Shiny Egg Guide | [https://evomon.cc/guides/mutations/shiny-egg](https://evomon.cc/guides/mutations/shiny-egg) |

## Tier list subpages

| Page | URL |
|------|-----|
| Early Route Carries (0–30) | [https://evomon.cc/tier-list/early-carries](https://evomon.cc/tier-list/early-carries) |
| Evolution Stone Priority | [https://evomon.cc/tier-list/evolution-priority](https://evomon.cc/tier-list/evolution-priority) |

## Popular dex entries

| Pet | URL |
|-----|-----|
| Bubble (starter) | [https://evomon.cc/dex/bubble](https://evomon.cc/dex/bubble) |
| Bubboxer | [https://evomon.cc/dex/bubboxer](https://evomon.cc/dex/bubboxer) |
| Blazpup (starter) | [https://evomon.cc/dex/blazpup](https://evomon.cc/dex/blazpup) |
| Blazgrowl | [https://evomon.cc/dex/blazgrowl](https://evomon.cc/dex/blazgrowl) |
| Leafbun (starter) | [https://evomon.cc/dex/leafbun](https://evomon.cc/dex/leafbun) |
| Pebble | [https://evomon.cc/dex/pebble](https://evomon.cc/dex/pebble) |
| Sparkit | [https://evomon.cc/dex/sparkit](https://evomon.cc/dex/sparkit) |
| Lavite | [https://evomon.cc/dex/lavite](https://evomon.cc/dex/lavite) |
| Lavarock | [https://evomon.cc/dex/lavarock](https://evomon.cc/dex/lavarock) |
| Bluebird | [https://evomon.cc/dex/bluebird](https://evomon.cc/dex/bluebird) |
| Arcub | [https://evomon.cc/dex/arcub](https://evomon.cc/dex/arcub) |
| Arcapex | [https://evomon.cc/dex/arcapex](https://evomon.cc/dex/arcapex) |
| Wispuff | [https://evomon.cc/dex/wispuff](https://evomon.cc/dex/wispuff) |
| Wisphex | [https://evomon.cc/dex/wisphex](https://evomon.cc/dex/wisphex) |
| Astraknight | [https://evomon.cc/dex/astraknight](https://evomon.cc/dex/astraknight) |

## Legal & policies

| Page | URL |
|------|-----|
| Privacy Policy | [https://evomon.cc/privacy](https://evomon.cc/privacy) |
| Terms of Use | [https://evomon.cc/terms](https://evomon.cc/terms) |
| Cookies | [https://evomon.cc/cookies](https://evomon.cc/cookies) |

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

This runs `prebuild` (generates `robots.txt`, `sitemap.xml`, `llms*.txt`), `next build`, then `wrangler pages deploy out`.

**Custom domain (one-time):** Cloudflare Dashboard → **Workers & Pages** → **evomon** → **Custom domains** → add `evomon.cc` and `www.evomon.cc`.

Preview URL: [https://evomon-3l6.pages.dev](https://evomon-3l6.pages.dev)

## GEO / LLM discovery

- [`/llms.txt`](https://evomon.cc/llms.txt) — curated page index for AI assistants ([llmstxt.org](https://llmstxt.org) format)
- [`/llms-full.txt`](https://evomon.cc/llms-full.txt) — expanded context: codes, type chart, starters, FAQs

Content is generated from `src/lib/llms.ts` at build time (`npm run prebuild`).

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
