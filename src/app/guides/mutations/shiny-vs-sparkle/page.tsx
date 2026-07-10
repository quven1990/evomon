import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { GuideTrustFooter } from "@/components/GuideTrustFooter";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { qualitySystems } from "@/data/guide-trust";
import { MUTATIONS_UPDATED, mutationVariants } from "@/data/mutations";
import { guideArticleSchema } from "@/lib/guide-trust";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.mutationsShinyVsSparkle();

const faqs = [
  {
    q: "What is the difference between Shiny and Sparkle in Evomon?",
    a: "Shiny (four-point star) gives an alternate palette and a small stat boost. Sparkle / Prismatic (five-point star) is cosmetic only. Pity counters are separate per species.",
  },
  {
    q: "Does Sparkle give stats in Evomon?",
    a: "No. Prismatic (Sparkle in the UI) is cosmetic — random glow color and pattern. Only Shiny adds combat stats in community testing.",
  },
  {
    q: "Is mutation the same as Talent or Nature?",
    a: "No. Mutation is Shiny/Sparkle. Talent is the letter grade on capture. Nature is a separate personality stat modifier.",
  },
];

export default function ShinyVsSparklePage() {
  const article = guideArticleSchema({
    path: "/guides/mutations/shiny-vs-sparkle",
    headline: "Evomon Shiny vs Sparkle (Prismatic) — Stats & Differences",
    description:
      "Shiny gives a small stat boost; Sparkle (Prismatic) is cosmetic only. Compare odds, pity counters, and how mutation differs from Talent and Nature.",
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

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/guides/mutations" label="Mutations guide" />
        <h1 className={pageTitleClass()}>Shiny vs Sparkle (Prismatic)</h1>
        <p className={pageLeadClass()}>
          In-game UI labels prismatic mutations as <strong className="text-white">Sparkle</strong>.
          This page compares mutation types only — not Talent grades or Nature rolls. Community notes
          from {MUTATIONS_UPDATED}; full hunt routes stay on the{" "}
          <Link href="/guides/mutations" className="text-emerald-300 hover:underline">
            mutations hub
          </Link>
          .
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Quick answer</p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            <strong className="text-white">Shiny</strong> = stats + fixed palette.{" "}
            <strong className="text-white">Sparkle / Prismatic</strong> = looks only. A shiny pet can
            still have bad Talent — check all three systems separately.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Mutation vs Talent vs Nature</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Google and new players both confuse these layers. They roll independently on capture.
          </p>
          <div className="mt-5 space-y-3">
            {qualitySystems.map((row) => (
              <div
                key={row.system}
                className="rounded-xl border border-white/10 bg-[#0b1512] px-4 py-4 sm:px-5"
              >
                <p className="font-semibold text-white">{row.system}</p>
                <p className="mt-1 text-sm text-zinc-400">{row.what}</p>
                <p className="mt-2 text-xs text-emerald-400/90">How to check: {row.judge}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Three mutation types</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            KO the wild Evomon first — the shiny check happens in the smoke reveal. Prismatic rolls on
            capture. Pity counters show bottom-left after battles.
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

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Side-by-side snapshot</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-[#0b1512]">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-zinc-500">
                  <th className="px-4 py-3 font-normal">Variant</th>
                  <th className="px-4 py-3 font-normal">Community odds</th>
                  <th className="px-4 py-3 font-normal">Pity</th>
                  <th className="hidden px-4 py-3 font-normal sm:table-cell">Stats?</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 text-zinc-300">
                    Prismatic <span className="text-zinc-500">(Sparkle)</span>
                  </td>
                  <td className="px-4 py-3">~1/125–1/220</td>
                  <td className="px-4 py-3">150 captures</td>
                  <td className="hidden px-4 py-3 sm:table-cell">No</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-4 py-3 text-zinc-300">Shiny</td>
                  <td className="px-4 py-3">~1/500 (0.2%)</td>
                  <td className="px-4 py-3">~600 KOs/catches</td>
                  <td className="hidden px-4 py-3 sm:table-cell">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-zinc-300">Shiny Prismatic</td>
                  <td className="px-4 py-3">Very rare</td>
                  <td className="px-4 py-3">Pity tricks / balls</td>
                  <td className="hidden px-4 py-3 sm:table-cell">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-zinc-500">
            Odds and pity values are <strong className="text-zinc-400">community reported</strong> —
            the live game UI may not show exact percentages. Always confirm on your pity HUD after
            patches.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Which should you chase?</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
            <li>
              <strong className="text-white">Progression first:</strong> build a normal team from the{" "}
              <Link href="/tier-list" className="text-emerald-300 hover:underline">
                tier list
              </Link>{" "}
              before long pity sessions.
            </li>
            <li>
              <strong className="text-white">Stats hunters:</strong> shiny + strong Talent (King Ball
              on targets that matter).
            </li>
            <li>
              <strong className="text-white">Collectors:</strong> prismatic for mount colors — see{" "}
              <Link href="/guides/mutations/shiny-egg" className="text-emerald-300 hover:underline">
                shiny egg guide
              </Link>{" "}
              for boss paths.
            </li>
          </ul>
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

        <GuideTrustFooter pageId="mutations-shiny-vs-sparkle" />
      </main>
    </>
  );
}
