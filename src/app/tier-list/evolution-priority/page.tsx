import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { GuideTrustFooter } from "@/components/GuideTrustFooter";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import {
  evolutionPriorityFaqs,
  evolutionPrioritySteps,
  TIER_LIST_UPDATED,
} from "@/data/tier-list";
import { guideArticleSchema } from "@/lib/guide-trust";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.tierListEvolutionPriority();

export default function EvolutionPriorityPage() {
  const article = guideArticleSchema({
    path: "/tier-list/evolution-priority",
    headline: "Evomon Evolution Priority — Who Gets Stones First",
    description:
      "Evolution stone order for Roblox Evomon: fund your carry first, spend on the next wall, skip duplicate typings, then boss specialists.",
  });

  return (
    <>
      <StructuredData
        data={[
          article,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: evolutionPriorityFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/tier-list" label="Tier list" />
        <h1 className={pageTitleClass()}>Evolution Priority</h1>
        <p className={pageLeadClass()}>
          Evolution Stones are scarce — merchant stock, login rewards, Infinite Tower, and battle pass
          drip them slowly. This page is the <strong className="text-white">spend order</strong> only;
          full rankings stay on the{" "}
          <Link href="/tier-list" className="text-emerald-300 hover:underline">
            Evomon tier list
          </Link>{" "}
          ({TIER_LIST_UPDATED} community synthesis).
        </p>

        <div className="mt-6 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Rule of thumb</p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            Fund the pet that is <strong className="text-white">already clearing your current island</strong>{" "}
            — usually Lavite after Lava Crag, even if Bubble was the best starter in the tutorial.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Stone priority order</h2>
          <ol className="mt-6 space-y-5">
            {evolutionPrioritySteps.map((row) => (
              <li
                key={row.step}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-lg font-black text-emerald-300 ring-1 ring-emerald-500/30">
                    {row.step}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">{row.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">{row.detail}</p>
                    <p className="mt-3 text-sm text-emerald-300/90">
                      Examples: {row.examples.join(" · ")}
                    </p>
                    <p className="mt-2 text-sm text-rose-200/80">
                      <span className="font-medium text-rose-300">Avoid:</span> {row.avoid}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-4 py-3 font-normal">Situation</th>
                <th className="px-4 py-3 font-normal">Do first</th>
                <th className="px-4 py-3 font-normal">Why</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-white/5 bg-[#0b1512]">
                <td className="px-4 py-3 text-zinc-300">Just unlocked Lava Crag</td>
                <td className="px-4 py-3 text-emerald-300">Lavite → Lavarock</td>
                <td className="px-4 py-3">Highest long-term stone ROI on current route</td>
              </tr>
              <tr className="border-b border-white/5 bg-[#0b1512]">
                <td className="px-4 py-3 text-zinc-300">Petal Pond grass walls hurt</td>
                <td className="px-4 py-3 text-emerald-300">Grass flex or Pebble wall</td>
                <td className="px-4 py-3">Answer today&apos;s blocker, not endgame rank</td>
              </tr>
              <tr className="border-b border-white/5 bg-[#0b1512]">
                <td className="px-4 py-3 text-zinc-300">Trainer level 30 reached</td>
                <td className="px-4 py-3 text-emerald-300">Re-check carry Ultimate timing</td>
                <td className="px-4 py-3">Ultimates change who deserves the next stone</td>
              </tr>
              <tr className="bg-[#0b1512]">
                <td className="px-4 py-3 text-zinc-300">Core team stable</td>
                <td className="px-4 py-3 text-emerald-300">Collection / shiny projects</td>
                <td className="px-4 py-3">Side investments stop stealing survival stones</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {evolutionPriorityFaqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Related pages</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/team-builder" className="text-emerald-300 hover:underline">
                Team builder — slot your stone priority →
              </Link>
            </li>
            <li>
              <Link href="/tier-list/early-carries" className="text-emerald-300 hover:underline">
                Early route carries (0–30) →
              </Link>
            </li>
            <li>
              <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
                Beginner island routing →
              </Link>
            </li>
            <li>
              <Link href="/guides/farming" className="text-emerald-300 hover:underline">
                Farming — stone income →
              </Link>
            </li>
          </ul>
        </section>

        <GuideTrustFooter pageId="tier-evolution-priority" />
      </main>
    </>
  );
}
