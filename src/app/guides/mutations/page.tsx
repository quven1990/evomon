import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { GuideClusterRoutes } from "@/components/GuideClusterRoutes";
import { MutationVideoEvidence } from "@/components/MutationVideoEvidence";
import { MutationsNav } from "@/components/MutationsNav";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import {
  MUTATIONS_UPDATED,
  eggHunting,
  huntPrinciples,
  huntRoutes,
  mutationVariants,
  pityRules,
  pityTrick149,
} from "@/data/mutations";
import { mutationsCluster } from "@/data/guide-clusters";
import { guideClusterItemListSchema } from "@/lib/guide-cluster-schema";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.mutationsGuide();

const difficultyColor: Record<string, string> = {
  Easy: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
  Medium: "text-amber-300 bg-amber-500/10 border-amber-500/30",
  Hard: "text-orange-300 bg-orange-500/10 border-orange-500/30",
  "Very hard": "text-rose-300 bg-rose-500/10 border-rose-500/30",
};

export default function MutationsGuidePage() {
  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the difference between Shiny and Prismatic in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Shiny boosts stats (~600 pity). Prismatic (Sparkle in the UI) is cosmetic only (~150 capture pity). Full Sparkle vs Shiny comparison: https://evomon.cc/guides/mutations/shiny-vs-sparkle",
                },
              },
              {
                "@type": "Question",
                name: "How do shiny eggs work in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Eggs only roll after you catch a defeated target. Shiny eggs hatch a guaranteed shiny; bosses often need this path because they lack field shiny pity. Full shiny egg guide: https://evomon.cc/guides/mutations/shiny-egg",
                },
              },
              {
                "@type": "Question",
                name: "What is the 149 prismatic pity trick?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Raise prismatic pity to 149/150 on one species, stop catching until a natural shiny appears, then catch it with a King Ball or Prismatic Ball to target Shiny Prismatic with strong talent.",
                },
              },
              {
                "@type": "Question",
                name: "Can you get Shiny Prismatic Evomon without a Prismatic Ball?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Community guides describe a 149 prismatic pity trick: park prismatic pity at 149/150, stop catching, wait for a natural shiny reveal, then catch it so the next capture consumes prismatic pity. This is advanced and can reset if you catch a prismatic too early.",
                },
              },
            ],
          },
          guideClusterItemListSchema(mutationsCluster),
          ...pityTrick149.evidence.map((source) => ({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: source.title,
            description: source.note,
            thumbnailUrl: [source.thumbnailUrl],
            uploadDate: source.uploadDate,
            duration: source.duration,
            embedUrl: source.embedUrl,
            contentUrl: source.url,
          })),
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>How to Get Shiny Evomon</h1>
        <p className={pageLeadClass()}>
          Shiny hunt hub: pity rules, the 149 prismatic combo, and farm routes — from community guides
          ({MUTATIONS_UPDATED}). Pick what to hunt on the{" "}
          <Link href="/tier-list" className="text-emerald-300 hover:underline">
            tier list
          </Link>
          ; use the child guides below for Sparkle vs Shiny or shiny eggs.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            <strong className="text-white">Shiny</strong> = stat boost (~600 pity per species).{" "}
            <strong className="text-white">Prismatic / Sparkle</strong> = looks only (~150 capture
            pity). Always <strong className="text-white">catch</strong> what you farm — pity and eggs
            need captures. Species lookup:{" "}
            <Link href="/dex" className="font-medium text-emerald-300 hover:underline">
              Evomon dex
            </Link>
            . Boss lines without field pity usually need the{" "}
            <Link
              href="/guides/mutations/shiny-egg"
              className="font-medium text-emerald-300 hover:underline"
            >
              shiny egg path
            </Link>
            .
          </p>
        </div>

        <GuideClusterRoutes cluster={mutationsCluster} />

        <div className="mt-5 rounded-2xl border border-cyan-500/25 bg-cyan-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
            Looking for eggs?
          </p>
          <h2 className="mt-2 text-lg font-bold text-white">How to get eggs in Evomon</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            Eggs only roll after you <strong className="text-white">catch</strong> a defeated target.
            For the full catch loop, use the{" "}
            <Link href="/blog/how-to-get-eggs-evomon" className="text-cyan-200 hover:underline">
              Evomon egg guide
            </Link>
            . For shiny eggs, Prismatic Ball, and boss routes, open the{" "}
            <Link href="/guides/mutations/shiny-egg" className="text-cyan-200 hover:underline">
              shiny egg guide
            </Link>
            .
          </p>
        </div>

        <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-zinc-500">
          Community-sourced mechanics — odds UI can patch. Not official.{" "}
          <Link href="/about" className="text-emerald-400 hover:underline">
            How we source data →
          </Link>
        </p>

        <div className="mt-8">
          <MutationsNav />
        </div>

        {/* Variant types */}
        <section id="variants" className="scroll-mt-24 mt-10 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Shiny vs Prismatic vs both</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            In battle, KO the wild Evomon first — the shiny check happens in the smoke reveal. Check
            the bottom-left HUD for icons and pity counters. For Sparkle vs Shiny stats and Talent /
            Nature differences, see{" "}
            <Link
              href="/guides/mutations/shiny-vs-sparkle"
              className="text-emerald-300 hover:underline"
            >
              Shiny vs Sparkle
            </Link>
            .
          </p>

          <div className="mt-5 space-y-4">
            {mutationVariants.map((row) => (
              <article
                key={row.name}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">{row.name}</h3>
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
                    {row.uiLabel}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Odds</p>
                    <p className="mt-1 text-zinc-300">{row.odds}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Pity</p>
                    <p className="mt-1 text-zinc-300">{row.pity}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs uppercase tracking-wide text-zinc-500">Combat</p>
                    <p className="mt-1 text-zinc-300">{row.combat}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{row.notes}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pity */}
        <section id="pity" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Pity & odds rules</h2>

          <ul className="mt-5 space-y-3">
            {pityRules.map((item) => (
              <li
                key={item.rule}
                className="rounded-xl border border-white/10 bg-[#0b1512] px-4 py-3 sm:px-5 sm:py-4"
              >
                <p className="font-medium text-white">{item.rule}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{item.detail}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-5 text-zinc-500">
            At-a-glance comparison — this table is read-only, not clickable. See{" "}
            <Link href="#variants" className="text-emerald-400 hover:underline">
              Types above
            </Link>{" "}
            for full notes on each variant.
          </p>

          <div className="mt-2 cursor-default overflow-x-auto rounded-lg border border-white/5 bg-white/[0.02]">
            <table className="w-full min-w-[28rem] cursor-default text-left text-sm">
              <caption className="sr-only">
                Read-only comparison of prismatic and shiny odds, pity, and stat boosts
              </caption>
              <thead>
                <tr className="border-b border-white/5 text-xs uppercase tracking-wide text-zinc-500">
                  <th className="px-4 py-2.5 font-normal">Variant</th>
                  <th className="px-4 py-2.5 font-normal">Community odds</th>
                  <th className="px-4 py-2.5 font-normal">Pity</th>
                  <th className="hidden px-4 py-2.5 font-normal sm:table-cell">Stats?</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-white/5">
                  <td className="px-4 py-2.5 text-zinc-300">
                    Prismatic <span className="text-zinc-500">(Sparkle)</span>
                  </td>
                  <td className="px-4 py-2.5">~1/125–1/220</td>
                  <td className="px-4 py-2.5">150 captures</td>
                  <td className="hidden px-4 py-2.5 sm:table-cell">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-zinc-300">Shiny</td>
                  <td className="px-4 py-2.5">~1/500 (0.2%)</td>
                  <td className="px-4 py-2.5">~600 KOs/catches</td>
                  <td className="hidden px-4 py-2.5 sm:table-cell">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5 sm:p-6">
            <h3 className="font-semibold text-violet-100">{pityTrick149.title}</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-zinc-300">
              {pityTrick149.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-amber-200/90">{pityTrick149.warning}</p>
            <div className="mt-4 border-t border-violet-300/20 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-200">
                Community video evidence
              </p>
              <MutationVideoEvidence videos={pityTrick149.evidence} />
            </div>
          </div>
        </section>

        {/* Eggs — hub keeps a short cheat sheet; full guide is the child page */}
        <section id="eggs" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Shiny eggs (quick reference)</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Short cheat sheet only. For Prismatic Ball, Catch Master, boss egg odds, and step-by-step
            routes, use the{" "}
            <Link href="/guides/mutations/shiny-egg" className="text-emerald-300 hover:underline">
              shiny egg guide
            </Link>
            . Catch loop basics:{" "}
            <Link href="/blog/how-to-get-eggs-evomon" className="text-emerald-300 hover:underline">
              how to get eggs in Evomon
            </Link>
            .
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-500">{eggHunting.intro}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-1">
            {eggHunting.rows.map((row) => (
              <div
                key={row.egg}
                className="rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <h3 className="font-semibold text-white">{row.egg}</h3>
                <p className="mt-2 text-sm text-zinc-300">{row.effect}</p>
                <p className="mt-2 text-sm text-emerald-300/90">{row.tip}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-semibold text-white">Boss & mount lines</h3>
          <div className="mt-4 space-y-3">
            {eggHunting.bosses.map((boss) => (
              <div
                key={boss.name}
                className="flex flex-col gap-1 rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
              >
                <div>
                  <p className="font-medium text-white">{boss.name}</p>
                  <p className="mt-1 text-xs text-emerald-400">
                    {boss.name === "Volcras King / Bluebird line" ? (
                      <>
                        Raven Ridge boss + wild{" "}
                        <Link href="/dex/bluebird" className="text-emerald-300 hover:underline">
                          Bluebird
                        </Link>{" "}
                        route
                      </>
                    ) : (
                      boss.where
                    )}
                  </p>
                </div>
                <p className="text-sm leading-6 text-zinc-400 sm:max-w-md sm:text-right">
                  {boss.note}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm leading-7 text-zinc-300">
            Catch Master, Prismatic Ball hatching, and boss-only egg routes are covered in the{" "}
            <Link href="/guides/mutations/shiny-egg" className="text-emerald-300 hover:underline">
              shiny egg guide
            </Link>
            .
          </p>
        </section>

        {/* Routes */}
        <section id="routes" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Best shiny farm routes</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Sorted by practical grind speed — pair with your{" "}
            <Link href="/type-chart" className="text-emerald-300 hover:underline">
              type matchups
            </Link>
            .
          </p>

          <div className="mt-5 space-y-3">
            {huntRoutes.map((route) => (
              <article
                key={route.target}
                className="rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-white">
                    {route.target === "Sparkit line" ? (
                      <>
                        <Link href="/dex/sparkit" className="text-emerald-300 hover:underline">
                          Sparkit
                        </Link>{" "}
                        line
                      </>
                    ) : (
                      route.target
                    )}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColor[route.difficulty]}`}
                  >
                    {route.difficulty}
                  </span>
                </div>
                <p className="mt-1 text-xs text-emerald-400">{route.where}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{route.why}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="scroll-mt-24 mt-14 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Hunt planning checklist</h2>
          <ul className="mt-5 space-y-2">
            {huntPrinciples.map((tip) => (
              <li
                key={tip}
                className="flex gap-3 rounded-xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm leading-6 text-zinc-300"
              >
                <span className="text-emerald-400" aria-hidden>
                  ✓
                </span>
                {tip}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-white">Related guides</h3>
            <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
              <li>
                <Link href="/guides/mutations/shiny-vs-sparkle" className="text-emerald-300 hover:underline">
                  Shiny vs Sparkle — stats & differences →
                </Link>
              </li>
              <li>
                <Link href="/guides/mutations/shiny-egg" className="text-emerald-300 hover:underline">
                  Shiny egg & boss routes →
                </Link>
              </li>
              <li>
                <Link href="/team-builder" className="text-emerald-300 hover:underline">
                  Team builder — plan the hunt target →
                </Link>
              </li>
              <li>
                <Link href="/tier-list" className="text-emerald-300 hover:underline">
                  Tier list — what to hunt →
                </Link>
              </li>
              <li>
                <Link href="/guides/farming#daily" className="text-emerald-300 hover:underline">
                  Daily farming — EXP & reset →
                </Link>
              </li>
              <li>
                <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
                  Evomon codes →
                </Link>
              </li>
              <li>
                <Link href="/dex" className="text-emerald-300 hover:underline">
                  Evomon dex →
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
