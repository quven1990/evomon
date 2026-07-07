import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { CodeCard } from "@/components/CodeCard";
import { DataFreshness } from "@/components/DataFreshness";
import { PlayLink } from "@/components/PlayLink";
import { RedeemGuide } from "@/components/RedeemGuide";
import { StructuredData } from "@/components/StructuredData";
import {
  activeCodes,
  codeTroubleshooting,
  codesFaq,
  CODES_DATA_CHECKED,
  CODES_LAST_UPDATED,
  expiredCodes,
  getFeaturedCodes,
  getHighlightCodes,
  sortCodesByTrust,
  watchlistCodes,
} from "@/data/codes";
import { PAGE_SEO } from "@/lib/seo";
import { ExternalLink, Gift, Sparkles } from "lucide-react";

const featured = getFeaturedCodes();
const highlights = getHighlightCodes();
const allSorted = sortCodesByTrust(activeCodes);
const restCodes = allSorted.filter(
  (c) => !featured.some((f) => f.code === c.code) && !highlights.some((h) => h.code === c.code),
);
const officialCount = activeCodes.filter((c) => c.source === "official").length;

export const metadata = PAGE_SEO.codes();

export default function CodesPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: codesFaq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        {/* Hero — value + action first */}
        <section className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-[#0b1512] to-cyan-500/5 p-6 sm:p-8">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
          <Link href="/" className="text-sm text-zinc-500 hover:text-emerald-300">
            ← Home
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              Free rewards
            </span>
            <DataFreshness label="Updated" date={CODES_LAST_UPDATED} />
          </div>

          <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
            {activeCodes.length} Free Evomon Codes
            <span className="mt-1 block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-2xl text-transparent sm:text-3xl">
              Copy → Paste in Settings → Get rewards
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            Evolution Stones, Omni-Stones, EXP Fruits, Summon Tickets, Advanced Balls & Coins —{" "}
            <strong className="text-white">one-click copy</strong>, no login.{" "}
            {officialCount} official {officialCount === 1 ? "code" : "codes"} from the Roblox game page; others are
            community-reported — see source labels.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PlayLink
              placement="codes-hero"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-500/25 transition hover:brightness-110"
            >
              <ExternalLink className="h-4 w-4" />
              Play Evomon & redeem
            </PlayLink>
            <a
              href="#all-codes"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Gift className="h-4 w-4 text-emerald-400" />
              See all {activeCodes.length} codes
            </a>
          </div>
        </section>

        {/* Featured — immediate copy */}
        <section id="codes-list" className="scroll-mt-28 mt-8 sm:scroll-mt-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Official codes</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Listed on the Roblox game page — start here, then try community codes below.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {featured.map((entry) => (
              <CodeCard key={entry.code} entry={entry} featured placement="featured" />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Popular community codes</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Milestone rewards reported by players — try in a fresh server if one fails.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((entry) => (
              <CodeCard key={entry.code} entry={entry} placement="highlight" />
            ))}
          </div>
        </section>

        <div className="mt-8">
          <RedeemGuide />
        </div>

        {/* All codes — card layout, works on mobile */}
        <section id="all-codes" className="mt-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-white">All active codes</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Checked {CODES_DATA_CHECKED}. Third-party codes may need a fresh server.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {restCodes.map((entry) => (
              <CodeCard key={entry.code} entry={entry} />
            ))}
          </div>

          {/* Desktop-only compact table for power users */}
          <details className="mt-6 hidden lg:block">
            <summary className="cursor-pointer text-sm text-zinc-500 hover:text-emerald-300">
              View as table
            </summary>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/5 text-left text-zinc-400">
                  <tr>
                    <th className="px-4 py-3">Code</th>
                    <th className="px-4 py-3">Reward</th>
                    <th className="px-4 py-3">Source</th>
                    <th className="px-4 py-3 text-right">Copy</th>
                  </tr>
                </thead>
                <tbody>
                  {allSorted.map((item) => (
                    <tr key={item.code} className="border-t border-white/5">
                      <td className="px-4 py-3 font-mono font-bold text-emerald-300">{item.code}</td>
                      <td className="px-4 py-3 text-zinc-300">{item.reward}</td>
                      <td className="px-4 py-3 text-xs capitalize text-zinc-500">{item.source}</td>
                      <td className="px-4 py-3 text-right">
                        <CopyButton code={item.code} source={item.source} placement="table" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </section>

        <section id="troubleshooting" className="mt-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-white">Code not working?</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {codeTroubleshooting.map((row) => (
              <div key={row.problem} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <p className="font-medium text-white">{row.problem}</p>
                <p className="mt-1 text-sm text-zinc-400">{row.fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white">Codes to watch</h2>
          <p className="mt-1 text-sm text-zinc-400">Try after the main list — unconfirmed.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {watchlistCodes.map((item) => (
              <CodeCard key={item.code} entry={item} />
            ))}
          </div>
        </section>

        {expiredCodes.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold text-zinc-500">Expired codes</h2>
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white">FAQ</h2>
          <div className="mt-4 space-y-3">
            {codesFaq.map((item) => (
              <details key={item.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <summary className="cursor-pointer font-medium text-white">{item.q}</summary>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-8 text-sm">
          <Link href="/about" className="text-emerald-300 hover:underline">
            Data sources &amp; disclaimer →
          </Link>
          <Link href="/dex" className="text-emerald-300 hover:underline">
            Evomon Dex →
          </Link>
          <Link href="/tier-list" className="text-emerald-300 hover:underline">
            Tier List →
          </Link>
          <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
            Beginner Guide →
          </Link>
        </section>
      </main>
    </>
  );
}
