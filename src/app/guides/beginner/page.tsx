import type { Metadata } from "next";
import Link from "next/link";
import { BeginnerGuideNav } from "@/components/BeginnerGuideNav";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import {
  ascensionWalls,
  ballRules,
  BEGINNER_GUIDE_UPDATED,
  coreTeamTargets,
  islandRoute,
  playerXpSources,
  quickStart,
  resourceRules,
  suitTips,
} from "@/data/beginner-guide";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.beginnerGuide();

const phases = [
  {
    title: "Early game (trainer level 0–30)",
    steps: [
      "Complete main story quests on the right — they gate islands and dump player EXP.",
      "Redeem codes + 7-day login before grinding wild spawns.",
      "Use infinite balls only until Lava Crag; save King / Prismatic balls.",
      "Catch Lavite on Lava Crag and start leveling it — do not dump Evolution Stones on starters.",
      "Hit trainer level 30 for your starter Ultimate, then finish the first Ascension quest (may need daily reset).",
    ],
  },
  {
    title: "Mid game (level 30–90)",
    steps: [
      "Never skip daily quests — most player EXP is daily-gated after early islands.",
      "Hunt Tarro (Autumn Hill / Murkwood) and Bluebird (Raven Ridge) for your core team.",
      "Spend summon-rune tokens on Evolution Stones before buying Large EXP Fruits.",
      "Unlock Equipment Dungeons at trainer level 40 on Silent Sands.",
      "Evolve Lavarock and main carries before side projects.",
    ],
  },
  {
    title: "Late game (level 90+)",
    steps: [
      "Add Frostlet and Wispuff lines from later islands.",
      "Push Index for bonus trainer EXP (+50 per new entry).",
      "Farm Infinite Tower mainly for Evolution Stones and trait rolls.",
      "Start shiny hunts only after your core team is stable — see mutations guide.",
    ],
  },
];

export default function BeginnerGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Beginner Guide",
        item: canonical("/guides/beginner"),
      },
    ],
  };

  return (
    <>
      <StructuredData
        data={[
          breadcrumbSchema,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What should beginners do first in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Redeem codes, claim login rewards, follow main quests, and catch Lavite on Lava Crag before spending Evolution Stones on starters.",
                },
              },
              {
                "@type": "Question",
                name: "Why am I stuck before level 30 in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ascension requires trainer level 30 and much of player EXP is daily-gated — complete daily quests, EXP Challenges, and world boss rewards each day.",
                },
              },
            ],
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Beginner Guide</h1>
        <p className={pageLeadClass()}>
          Island-by-island route for {GAME.fullName} ({BEGINNER_GUIDE_UPDATED}) — what to catch, what
          to skip, and how to reach Ascension without wasting balls or Evolution Stones.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            Follow <strong className="text-white">main quests</strong>, redeem{" "}
            <Link href="/codes" className="text-emerald-300 hover:underline">
              codes
            </Link>
            , grab <strong className="text-white">Lavite</strong> on Lava Crag, and never skip{" "}
            <strong className="text-white">daily quests</strong>. Player level — not creature level —
            unlocks the game.
          </p>
        </div>

        <div className="mt-8">
          <BeginnerGuideNav />
        </div>

        {/* Quick start */}
        <section id="start" className="scroll-mt-24 mt-10 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">First 30 minutes</h2>
          <ol className="mt-5 space-y-3">
            {quickStart.map((item, index) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-300">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-white">
                    {item.href ? (
                      <Link href={item.href} className="text-emerald-300 hover:underline">
                        {item.step} →
                      </Link>
                    ) : (
                      item.step
                    )}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-8 text-lg font-semibold text-white">Which balls to use</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {ballRules.map((row) => (
              <div
                key={row.ball}
                className="rounded-xl border border-white/10 bg-[#0b1512] p-4"
              >
                <p className="font-medium text-white">{row.ball}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{row.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Islands */}
        <section id="islands" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Island route — catch vs skip</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Progression order from community beginner guides. Pair with the{" "}
            <Link href="/type-chart" className="text-emerald-300 hover:underline">
              type chart
            </Link>{" "}
            for duels.
          </p>

          <div className="mt-5 space-y-4">
            {islandRoute.map((row) => (
              <article
                key={row.island}
                id={row.anchor}
                className="scroll-mt-36 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:scroll-mt-20 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-300">{row.island}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                      Catch / do
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-6 text-zinc-300">
                      {row.catch.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Skip / low priority
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-6 text-zinc-500">
                      {row.skip.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm text-zinc-400">
                  {row.notes}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Core team */}
        <section id="team" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Core team to work toward</h2>
          <p className="mt-2 text-sm text-zinc-400">
            You do not need these on day one — see the{" "}
            <Link href="/tier-list" className="text-emerald-300 hover:underline">
              tier list
            </Link>{" "}
            for rankings.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <div className="divide-y divide-white/5 sm:hidden">
              {coreTeamTargets.map((row) => (
                <div key={row.name} className="bg-[#0b1512] p-4">
                  <p className="font-semibold text-white">{row.name}</p>
                  <p className="mt-1 text-xs text-emerald-400">{row.role}</p>
                  <p className="mt-2 text-sm text-zinc-400">{row.priority}</p>
                </div>
              ))}
            </div>
            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
                    <th className="px-4 py-3">Evomon</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">When</th>
                  </tr>
                </thead>
                <tbody>
                  {coreTeamTargets.map((row) => (
                    <tr key={row.name} className="border-b border-white/5 bg-[#0b1512]">
                      <td className="px-4 py-3 font-medium text-white">{row.name}</td>
                      <td className="px-4 py-3 text-zinc-400">{row.role}</td>
                      <td className="px-4 py-3 text-emerald-300/90">{row.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Player XP */}
        <section id="xp" className="scroll-mt-36 mt-14 sm:scroll-mt-8 sm:mt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Player EXP & Ascension walls</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Trainer level gates equipment, dungeons, and evolutions — creature EXP alone will not
            carry you.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {playerXpSources.map((row) => (
              <div
                key={row.source}
                className="rounded-xl border border-white/10 bg-[#0b1512] p-4"
              >
                <p className="font-medium text-white">{row.source}</p>
                <p className="mt-1 text-sm font-semibold text-emerald-300">{row.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{row.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {ascensionWalls.map((wall) => (
              <div
                key={wall.title}
                className="rounded-2xl border border-amber-500/25 bg-amber-500/10 p-5"
              >
                <h3 className="font-semibold text-amber-100">{wall.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{wall.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Full daily numbers:{" "}
            <Link href="/guides/farming" className="text-emerald-400 hover:underline">
              farming guide →
            </Link>
          </p>
        </section>

        {/* Resources */}
        <section id="resources" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Resources & leveling tricks</h2>
          <ul className="mt-5 space-y-2">
            {resourceRules.map((rule) => (
              <li
                key={rule}
                className="flex gap-3 rounded-xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm leading-6 text-zinc-300"
              >
                <span className="text-emerald-400" aria-hidden>
                  ✓
                </span>
                {rule}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-white">Adventure suits (mid-game)</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {suitTips.map((row) => (
              <div
                key={row.suit}
                className="rounded-xl border border-white/10 bg-[#0b1512] p-4"
              >
                <p className="font-medium text-white">{row.suit}</p>
                <p className="mt-1 text-xs text-emerald-400">{row.when}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{row.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Phases + daily */}
        <section id="daily" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Progression phases</h2>
          <div className="mt-5 space-y-6">
            {phases.map((phase) => (
              <section
                key={phase.title}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-emerald-300">{phase.title}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-300">
                  {phase.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-white">Related guides</h3>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link href="/guides/level-30" className="text-emerald-300 hover:underline">
                  Level 30 & Ascension →
                </Link>
              </li>
              <li>
                <Link href="/guides/farming" className="text-emerald-300 hover:underline">
                  Daily farming loop →
                </Link>
              </li>
              <li>
                <Link href="/guides/mutations" className="text-emerald-300 hover:underline">
                  Shiny & prismatic (late) →
                </Link>
              </li>
              <li>
                <Link href="/team-builder" className="text-emerald-300 hover:underline">
                  Team builder →
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
