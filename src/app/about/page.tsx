import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { CODES_DATA_CHECKED, CODES_LAST_UPDATED } from "@/data/codes";
import { DEX_LAST_CHECKED } from "@/data/dex";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.about();

const trustLabels = [
  {
    label: "Official",
    scope: "Codes",
    meaning: "Listed in the Roblox game description or a developer announcement we can point to.",
  },
  {
    label: "Community",
    scope: "Codes & Dex",
    meaning: "Widely reported by players (Discord milestones, likes events). Try in a fresh server.",
  },
  {
    label: "Third-party",
    scope: "Codes",
    meaning: "Seen on fan sites or social posts — useful to try, but not confirmed by us.",
  },
  {
    label: "Cross-source",
    scope: "Dex",
    meaning: "Name and element match multiple community wikis; still not an in-game API dump.",
  },
  {
    label: "Unpublished",
    scope: "Dex",
    meaning: "Numbered slot with no confirmed name — we show a silhouette instead of inventing data.",
  },
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE.name}`,
    url: canonical("/about"),
    description: `How ${SITE.domain} sources Evomon data, what we verify, and our unofficial fan-site disclaimer.`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    maintainer: {
      "@type": "Person",
      name: "Remy",
      image: `${SITE.url}/images/remy-avatar.png`,
    },
  };

  return (
    <>
      <StructuredData data={schema} />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <PageBack href="/" />
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          Trust & transparency
        </div>
        <h1 className={`${pageTitleClass()} mt-4`}>About {SITE.name}</h1>
        <p className={pageLeadClass()}>
          {SITE.domain} is an independent fan reference for {GAME.fullName}. We focus on practical
          tools — codes you can copy, a visual dex, type chart, and team builder — and we label every
          data point so you know how much to trust it.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6">
          <h2 className="text-lg font-bold text-white">Not affiliated</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            {SITE.name} is <strong className="text-white">not</strong> owned by {GAME.developer},{" "}
            Roblox Corporation, or any official Evomon team. We do not speak for the developers. Game
            names, creature names, and art belong to their respective owners. This site is a
            community resource built for players who want quick answers.
          </p>
          <p className="mt-3 text-sm">
            <a
              href={GAME.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-emerald-300 hover:underline"
            >
              Play Evomon on Roblox
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>

        <div className="prose-wiki mt-10">
          <h2>Who runs this site</h2>
          <div className="not-prose mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/remy-avatar.png"
              alt="Remy — evomon.cc maintainer"
              width={96}
              height={96}
              className="h-24 w-24 shrink-0 rounded-2xl border border-emerald-500/30 object-cover shadow-lg shadow-emerald-500/10"
            />
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-white">Remy</p>
              <p className="mt-1 text-sm text-zinc-400">Independent maintainer · fan tools &amp; wiki</p>
            </div>
          </div>
          <p>
            {SITE.domain} is maintained by <strong>Remy</strong>, an independent Evomon player and
            fan-site builder — not by {GAME.developer}, Roblox Corporation, or anyone on the
            official game team. Remy updates the wiki in spare time when codes change, new pets show
            up in community lists, or players report broken pages.
          </p>
          <p>
            The site exists because mobile players kept hitting slow, text-heavy wikis when all they
            wanted was to <strong>copy a code</strong>, check a <strong>type matchup</strong>, or
            skim a <strong>dex sprite</strong>. {SITE.name} is meant to complement longer community
            wikis with fast tools — not to pretend to be the only source of truth.
          </p>
          <h3>How Remy keeps pages fresh</h3>
          <ul>
            <li>
              <strong>Codes</strong> — checked against the Roblox game listing and player reports;
              each code carries an official / community / third-party label.
            </li>
            <li>
              <strong>Dex</strong> — names and elements cross-checked with public fan wikis; empty
              slots stay empty instead of inventing entries.
            </li>
            <li>
              <strong>Guides &amp; tier notes</strong> — community meta snapshots with dates on-page;
              patch days can move numbers — verify in-game when it matters.
            </li>
            <li>
              <strong>Corrections</strong> — email{" "}
              <a href={`mailto:${SITE.emails.contact}`} className="text-emerald-300 hover:underline">
                {SITE.emails.contact}
              </a>{" "}
              with the page URL and what you saw in-game.
            </li>
          </ul>
          <p>
            This is a player-run fan project: no item sales, no Roblox password requests, no private
            API scraping — only public sources and tools built for the community.
          </p>
        </div>

        <div className="prose-wiki mt-10">
          <h2>What we publish</h2>
          <ul>
            <li>
              <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
                Evomon codes
              </Link>{" "}
              — rewards, source labels, redeem help, and troubleshooting when a code fails.
            </li>
            <li>
              <Link href="/dex" className="text-emerald-300 hover:underline">
                Dex gallery
              </Link>{" "}
              — numbered slots, sprites where available, elements, and honest gaps for unreleased
              entries.
            </li>
            <li>
              <Link href="/type-chart" className="text-emerald-300 hover:underline">
                Type chart
              </Link>{" "}
              &{" "}
              <Link href="/team-builder" className="text-emerald-300 hover:underline">
                team builder
              </Link>{" "}
              — planning tools, not battle simulators.
            </li>
            <li>
              <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
                Guides
              </Link>{" "}
              — short progression notes summarized from community play, not a full walkthrough.
            </li>
          </ul>

          <h2>How we source data</h2>
          <p>
            We are not inside the game&apos;s servers. Data is compiled manually and from public
            community sources, then tagged by confidence:
          </p>
          <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
                  <th className="px-4 py-3">Label</th>
                  <th className="px-4 py-3">Used on</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {trustLabels.map((row) => (
                  <tr key={`${row.label}-${row.scope}`} className="border-b border-white/5">
                    <td className="px-4 py-3 font-semibold text-white">{row.label}</td>
                    <td className="px-4 py-3 text-zinc-400">{row.scope}</td>
                    <td className="px-4 py-3 text-zinc-300">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Codes</h3>
          <p>
            Official codes come from the Roblox game page description. Community codes are added when
            multiple players report them working after milestone events. We sort by trust (official
            first) and separate a watchlist for unconfirmed codes.{" "}
            <strong>We do not claim every listed code works on every account.</strong>
          </p>

          <h3>Dex &amp; tier signals</h3>
          <p>
            Creature names and elements are cross-checked against community wikis and player lists.
            Empty slots stay empty. Tier notes on dex entries are community meta signals — see the{" "}
            <Link href="/tier-list" className="text-emerald-300 hover:underline">
              tier list
            </Link>{" "}
            for editorial rankings, which can disagree with a single dex badge.
          </p>

          <h3>Guides &amp; numbers</h3>
          <p>
            Guide pages (pity counts, daily EXP loops, island names) reflect common community advice
            at the time of writing. When the game patches, numbers may drift — check the freshness
            dates below and the official Discord for announcements.
          </p>

          <h2>Freshness</h2>
          <p>We show last-checked dates on key pages. Current snapshots:</p>
          <ul>
            <li>
              Codes last updated: <strong>{CODES_LAST_UPDATED}</strong> (data checked{" "}
              {CODES_DATA_CHECKED})
            </li>
            <li>
              Dex last checked: <strong>{DEX_LAST_CHECKED}</strong>
            </li>
          </ul>
          <p>
            Codes can expire without notice. If something fails after a fresh server rejoin, it may
            already be retired — we archive expired codes on the{" "}
            <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
              codes page
            </Link>{" "}
            when we confirm they no longer work.
          </p>

          <h2>Report a mistake</h2>
          <p>
            Wrong reward text, dead code, misspelled creature, or broken page? We want to fix it
            quickly:
          </p>
          <ul>
            <li>
              Email{" "}
              <a
                href={`mailto:${SITE.emails.contact}`}
                className="text-emerald-300 hover:underline"
              >
                {SITE.emails.contact}
              </a>{" "}
              with the page URL and what you saw in-game.
            </li>
            <li>
              Privacy questions:{" "}
              <a
                href={`mailto:${SITE.emails.privacy}`}
                className="text-emerald-300 hover:underline"
              >
                {SITE.emails.privacy}
              </a>{" "}
              or read our{" "}
              <Link href="/privacy" className="text-emerald-300 hover:underline">
                Privacy Policy
              </Link>
              ,{" "}
              <Link href="/terms" className="text-emerald-300 hover:underline">
                Terms
              </Link>
              , and{" "}
              <Link href="/cookies" className="text-emerald-300 hover:underline">
                Cookies
              </Link>
              .
            </li>
            <li>
              For new codes, mention where you found them (Discord post, in-game banner, etc.) so we
              can label the source correctly.
            </li>
            <li>
              Prefer official channels for game bugs — use the Roblox game page or the developer
              Discord, not this site.
            </li>
          </ul>

          <h2>What &quot;verified&quot; means here</h2>
          <p>
            When we say a code is <em>official</em>, we mean it appears on the Roblox listing — not
            that we are the game&apos;s support team. When we say <em>community reported</em>, we mean
            players said it worked recently; always try official codes first, then milestone codes in
            a new server.
          </p>
          <p>
            We do not scrape private APIs, sell items, or ask for your Roblox password. Only redeem
            codes inside the real game&apos;s Settings menu.
          </p>

          <h2>Other fan sites</h2>
          <p>
            Other community wikis (for example evomon.wiki) may go deeper on stats, traits, and
            locations. We link to public sprite mirrors when needed and aim to complement those
            resources with faster mobile tools — especially codes and team planning — not to pretend
            we are the only wiki.
          </p>

          <h2>AI &amp; LLM discovery</h2>
          <p>
            For language models and AI assistants, we publish curated site maps following the{" "}
            <a
              href="https://llmstxt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:underline"
            >
              llms.txt
            </a>{" "}
            convention:
          </p>
          <ul>
            <li>
              <a href="/llms.txt" className="text-emerald-300 hover:underline">
                /llms.txt
              </a>{" "}
              — concise index of our best pages (start here)
            </li>
            <li>
              <a href="/llms-full.txt" className="text-emerald-300 hover:underline">
                /llms-full.txt
              </a>{" "}
              — expanded markdown with codes, type chart, starters, and FAQs
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
