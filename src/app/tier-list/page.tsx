import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { TierListNav } from "@/components/TierListNav";
import { TierPickCard } from "@/components/TierPickCard";
import {
  TIER_LIST_UPDATED,
  earlyRoutePicks,
  endgameTiers,
  metaDebates,
} from "@/data/tier-list";
import { PickNameLinked } from "@/lib/dex-link";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.tierList();

const mustHaves = ["Lavite", "Bluebird", "Frostlet", "Whispurr", "Arcub", "Tarro"];

export default function TierListPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are the best Evomons in 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Community endgame lists converge on Lavite/Lavarock, Bluebird/Volcrest, Frostlet, Whispurr, Arcub, and Tarro for bossing and late-game teams.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best Evomon starter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bubble is still the safest starter for early islands, but many players replace the line once route catches like Lavite and Bluebird come online.",
              },
            },
            {
              "@type": "Question",
              name: "Is Lavite worth training?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Lavite is available on Lava Crag early and remains an S-tier fire/rock carry in most July 2026 community tier lists.",
              },
            },
          ],
        }}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Tier List</h1>
        <p className={pageLeadClass()}>
          Two views: <strong className="font-semibold text-zinc-200">endgame meta</strong> (what
          creators rank for bosses & late teams) and{" "}
          <strong className="font-semibold text-zinc-200">early route</strong> (first islands).
          Pair with the{" "}
          <Link href="/type-chart" className="text-emerald-300 hover:underline">
            type chart
          </Link>{" "}
          and{" "}
          <Link href="/team-builder" className="text-emerald-300 hover:underline">
            team builder
          </Link>
          .
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer — endgame must-haves
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            If you are past the tutorial islands, prioritize{" "}
            <strong className="text-white">{mustHaves.join(", ")}</strong>. Lavite and Bluebird are
            the easiest high-ROI catches; Frostlet and Arcub are boss specialists; Tarro is your
            sustain tank; Whispurr is the poison core.
          </p>
        </div>

        <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-zinc-500">
          Community meta snapshot ({TIER_LIST_UPDATED}) — synthesized from multiple creator tier
          lists, not official balance. Rankings disagree on starters and mid-game grass/water lines.{" "}
          <Link href="/about" className="text-emerald-400 hover:underline">
            How we source data →
          </Link>
        </p>

        <div className="mt-8">
          <TierListNav />
        </div>

        {/* Endgame meta */}
        <section id="endgame" className="scroll-mt-24 mt-10 sm:scroll-mt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Endgame meta tier list</h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">
                Full-roster rankings for team building after Lava Crag. This is what most YouTube
                tier lists are actually arguing about.
              </p>
            </div>
            <p className="text-xs text-zinc-500">Updated {TIER_LIST_UPDATED}</p>
          </div>

          <div className="mt-6 space-y-8">
            {endgameTiers.map((group) => (
              <div key={group.tier}>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex rounded-lg border px-3 py-1.5 text-base font-black sm:text-lg ${group.color}`}
                  >
                    {group.tier}-Tier
                  </span>
                  <span className="text-sm text-zinc-500">{group.label}</span>
                  <span className="text-xs text-zinc-600">
                    {group.picks.length} pick{group.picks.length === 1 ? "" : "s"}
                  </span>
                </div>

                {/* Desktop: 2-col grid for S/A with many picks; mobile: single stack */}
                <div
                  className={`grid gap-3 ${
                    group.tier === "S" || group.picks.length >= 4
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-1"
                  }`}
                >
                  {group.picks.map((pick) => (
                    <TierPickCard key={pick.name} pick={pick} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Early route */}
        <section id="early" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Early route priorities (0–30)</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
            What to grab before Ultimates and Ascension. See the{" "}
            <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
              beginner guide
            </Link>{" "}
            for level milestones.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {earlyRoutePicks.map((pick, index) => (
              <div key={pick.name} className="relative">
                <span className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/30">
                  {index + 1}
                </span>
                <div className="pl-4">
                  <TierPickCard pick={pick} compact />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-5">
            <h3 className="font-semibold text-amber-100">Starter pick</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Still choosing at the lab?{" "}
              <Link href="/starters" className="text-emerald-300 hover:underline">
                Bubble
              </Link>{" "}
              wins most early island matchups. Blazpup is fine if you plan to pair with Sparkit;
              Leafbun is the slowest route for new accounts.
            </p>
          </div>
        </section>

        {/* Debates */}
        <section id="debates" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Where creators disagree</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Honest splits from July 2026 tier list videos — not every ranking is wrong, they measure
            different stages.
          </p>

          <div className="mt-5 space-y-4">
            {metaDebates.map((row) => (
              <article
                key={row.topic}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-white sm:text-lg">{row.topic}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{row.summary}</p>
                <p className="mt-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2.5 text-sm leading-6 text-emerald-100">
                  <span className="font-semibold text-emerald-300">Our take: </span>
                  {row.pick}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Farm targets */}
        <section id="targets" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Farm checklist</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Copy-friendly order for mid-game planning. Adjust for your{" "}
            <Link href="/type-chart" className="text-emerald-300 hover:underline">
              type gaps
            </Link>
            .
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            {/* Mobile: cards */}
            <div className="divide-y divide-white/5 sm:hidden">
              {[
                ["1", "Lavite", "Lava Crag", "Start leveling — long-term fire carry"],
                ["2", "Pebble", "Verdant Valley", "Early boss wall"],
                ["3", "Bluebird quest", "Raven Ridge", "Bleed DPS for high-HP fights"],
                ["4", "Sparkit", "Early routes", "Fire slot if you picked Bubble"],
                ["5", "Whispurr line", "Mid-late routes", "Poison core when stones allow"],
                ["6", "Arcub", "Funder Cliff", "AOE burst — hunt when ready"],
              ].map(([step, name, where, note]) => (
                <div key={step} className="bg-[#0b1512] p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-emerald-300">
                      {step}
                    </span>
                    <div>
                      <p className="font-semibold text-white">
                        <PickNameLinked name={name} />
                      </p>
                      <p className="text-xs text-emerald-400">{where}</p>
                    </div>
                  </div>
                  <p className="mt-2 pl-11 text-sm text-zinc-400">{note}</p>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
                    <th className="px-4 py-3 w-12">#</th>
                    <th className="px-4 py-3">Target</th>
                    <th className="px-4 py-3">Where</th>
                    <th className="px-4 py-3">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Lavite", "Lava Crag", "Start leveling — long-term fire carry"],
                    ["2", "Pebble", "Verdant Valley", "Early boss wall"],
                    ["3", "Bluebird quest", "Raven Ridge", "Bleed DPS for high-HP fights"],
                    ["4", "Sparkit", "Early routes", "Fire slot if you picked Bubble"],
                    ["5", "Whispurr line", "Mid-late routes", "Poison core when stones allow"],
                    ["6", "Arcub", "Funder Cliff", "AOE burst — hunt when ready"],
                  ].map(([step, name, where, note]) => (
                    <tr key={step} className="border-b border-white/5 bg-[#0b1512]">
                      <td className="px-4 py-3 font-bold text-emerald-300">{step}</td>
                      <td className="px-4 py-3 font-medium text-white">
                        <PickNameLinked name={name} />
                      </td>
                      <td className="px-4 py-3 text-emerald-400/90">{where}</td>
                      <td className="px-4 py-3 text-zinc-400">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Related tools</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <Link href="/starters" className="text-emerald-300 hover:underline">
                Best starter comparison →
              </Link>
            </li>
            <li>
              <Link href="/dex" className="text-emerald-300 hover:underline">
                Evomon dex →
              </Link>
            </li>
            <li>
              <Link href="/guides/level-30" className="text-emerald-300 hover:underline">
                Level 30 guide →
              </Link>
            </li>
            <li>
              <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
                Evomon codes →
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
