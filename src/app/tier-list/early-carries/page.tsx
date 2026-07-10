import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { GuideTrustFooter } from "@/components/GuideTrustFooter";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { TierPickCard } from "@/components/TierPickCard";
import { earlyRoutePicks, TIER_LIST_UPDATED } from "@/data/tier-list";
import { PickNameLinked } from "@/lib/dex-link";
import { guideArticleSchema } from "@/lib/guide-trust";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.tierListEarlyCarries();

/** Investment priority after Petal Pond — not the same as starter pick order. */
const stoneAndLevelPriority = [
  ["1", "Lavite", "Lava Crag", "First evolution stone target — long-term fire carry"],
  ["2", "Pebble", "Verdant Valley", "Early boss wall if you skipped it"],
  ["3", "Bluebird quest", "Raven Ridge", "Bleed DPS when unlocked"],
  ["4", "Sparkit", "Early routes", "Fire slot if you picked Bubble starter"],
  ["5", "Whispurr line", "Mid-late routes", "Poison core when stones allow"],
] as const;

const faqs = [
  {
    q: "What is the best early Evomon to catch?",
    a: "Bubble is the safest starter for tutorial islands. Lavite on Lava Crag is the best evolution-stone target once island 3 opens. Pebble is the top early tank on Verdant Valley.",
  },
  {
    q: "Should I evolve Bubble before Lavite?",
    a: "Usually no after Lava Crag. Route catches outscale starter lines — prioritize stones on Lavite.",
  },
  {
    q: "Why is this page separate from the main tier list?",
    a: "The main tier list ranks endgame meta. This page only covers island progression through Lava Crag and early investment order.",
  },
];

export default function EarlyCarriesPage() {
  const article = guideArticleSchema({
    path: "/tier-list/early-carries",
    headline: "Best Early Evomon Carries — Verdant Valley to Lava Crag",
    description:
      "Early route tier picks before level 30: starter choice, route catches, and evolution-stone priority through Lava Crag.",
  });

  return (
    <>
      <StructuredData
        data={[
          article,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/tier-list" label="Tier list" />
        <h1 className={pageTitleClass()}>Early Route Carries</h1>
        <p className={pageLeadClass()}>
          Catches and investment order from tutorial through Lava Crag (~trainer level 0–30).{" "}
          <strong className="text-white">Starter pick</strong> (Bubble) and{" "}
          <strong className="text-white">stone priority</strong> (Lavite) answer different questions.
          Endgame rankings stay on the{" "}
          <Link href="/tier-list" className="text-emerald-300 hover:underline">
            main tier list
          </Link>{" "}
          ({TIER_LIST_UPDATED}).
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Two different &quot;best&quot; answers
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-200">
            <li>
              <strong className="text-white">Best starter (lab):</strong> Bubble — smoothest Verdant
              Valley + early Petal Pond.
            </li>
            <li>
              <strong className="text-white">Best stone target (Lava Crag+):</strong> Lavite — still
              S-tier in July 2026 lists after starters fall off.
            </li>
          </ul>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Route picks by island order</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
            Ordered by when you typically meet each catch — not evolution-stone priority. Island chart:{" "}
            <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
              beginner guide
            </Link>
            .
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
        </section>

        <section className="mt-12 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-5 sm:p-6">
          <h2 className="font-semibold text-amber-100">Starter pick (tutorial only)</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            At the lab,{" "}
            <Link href="/starters" className="text-emerald-300 hover:underline">
              Bubble
            </Link>{" "}
            wins most early island matchups. Blazpup works if you plan Sparkit on Lava Crag; Leafbun is
            the slowest starter route. Once Lavite is online, bench heavy starter stone investment.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Evolution & level priority</h2>
          <p className="mt-2 text-sm text-zinc-400">
            After Petal Pond — where to spend levels and stones first. Full rules:{" "}
            <Link href="/tier-list/evolution-priority" className="text-emerald-300 hover:underline">
              evolution priority
            </Link>
            .
          </p>

          <div className="mt-5 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 sm:hidden">
            {stoneAndLevelPriority.map(([step, name, where, note]) => (
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

          <div className="mt-5 hidden overflow-x-auto rounded-2xl border border-white/10 sm:block">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
                  <th className="w-12 px-4 py-3">#</th>
                  <th className="px-4 py-3">Target</th>
                  <th className="px-4 py-3">Where</th>
                  <th className="px-4 py-3">Why</th>
                </tr>
              </thead>
              <tbody>
                {stoneAndLevelPriority.map(([step, name, where, note]) => (
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
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <GuideTrustFooter pageId="tier-early-carries" />
      </main>
    </>
  );
}
