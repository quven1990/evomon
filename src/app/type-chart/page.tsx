import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { TypeChartExplorer } from "@/components/TypeChartExplorer";
import { TypeChartNav } from "@/components/TypeChartNav";
import { TypeChartTypeLink, TypeChartTypeLinkList } from "@/components/TypeChartTypeLink";
import { islandTypeTips, typeChartFaqs } from "@/data/type-chart-islands";
import { elementStyles, typeChart } from "@/data/type-chart";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.typeChart();

export default function TypeChartPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Evomon Wiki", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Type Chart", item: canonical("/type-chart") },
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
            mainEntity: typeChartFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Type Chart</h1>
        <p className={pageLeadClass()}>
          Every elemental weakness and strength for Roblox Evomon — Water beats Fire, Electric beats Flying,
          Ice beats Grass, and all 15 types below. Click any type name below to open the matchup lookup, or use the interactive lookup for one type, or open the{" "}
          <Link href="/team-builder" className="text-emerald-300 hover:underline">
            team builder
          </Link>{" "}
          to check squad coverage.
        </p>

        <section id="quick-answer" className="scroll-mt-32 mt-6 sm:scroll-mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Quick answer</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            Evomon uses standard creature-collector type matchups.{" "}
            <strong className="text-white">Water</strong> is super-effective vs Fire, Rock, and Ground.{" "}
            <strong className="text-white">Fire</strong> hits Grass, Bug, and Ice for double damage.{" "}
            <strong className="text-white">Electric</strong> beats Water and Flying.{" "}
            <strong className="text-white">Ground</strong> is the hard counter to Electric. Endgame pets
            often have two types — treat this table as the baseline, then verify in duels.
          </p>

          <div className="mt-5 space-y-3 lg:hidden">
            {typeChart.map((row) => {
              const styles = elementStyles[row.attacker];
              return (
                <article
                  key={row.attacker}
                  className={`rounded-xl border ${styles.border} bg-[#0d1714] p-4`}
                >
                  <Link
                    href={`/type-chart?type=${row.attacker}#lookup`}
                    className={`text-base font-bold hover:underline ${styles.text}`}
                  >
                    {row.attacker}
                  </Link>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-emerald-400">Strong vs</p>
                      <div className="mt-2">
                        <TypeChartTypeLinkList types={row.strong} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-rose-400">Weak to</p>
                      <div className="mt-2">
                        <TypeChartTypeLinkList types={row.weak} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 hidden overflow-hidden rounded-2xl border border-white/10 lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Super effective vs</th>
                    <th className="px-4 py-3">Weak to</th>
                  </tr>
                </thead>
                <tbody>
                  {typeChart.map((row) => (
                    <tr key={row.attacker} className="border-b border-white/5 bg-[#0b1512]">
                      <td className="px-4 py-3">
                        <Link
                          href={`/type-chart?type=${row.attacker}#lookup`}
                          className={`font-semibold hover:underline ${elementStyles[row.attacker].text}`}
                        >
                          {row.attacker}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <TypeChartTypeLinkList types={row.strong} />
                      </td>
                      <td className="px-4 py-3">
                        <TypeChartTypeLinkList types={row.weak} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <TypeChartNav />
        </div>

        {/* Interactive lookup — above the fold on mobile */}
        <section id="lookup" className="scroll-mt-32 mt-5 sm:scroll-mt-8 sm:mt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Type lookup</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            <span className="text-zinc-300">
              Water → Fire (Lava Crag) · Electric → Flying · Ice → Grass
            </span>
            <span className="mt-1 block sm:mt-0 sm:inline sm:before:content-['_|_']">
              Share:{" "}
              <TypeChartTypeLink type="Water" size="sm" />
            </span>
          </p>
          <div className="mt-3 hidden rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm leading-6 text-zinc-300 sm:block">
            Endgame pets often have <strong className="text-white">two types</strong> — use this chart as
            the baseline, then verify in duels.
          </div>
          <Suspense
            fallback={
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1512] p-8 text-center text-zinc-500">
                Loading chart…
              </div>
            }
          >
            <TypeChartExplorer />
          </Suspense>
        </section>

        {/* Island tips */}
        <section id="islands" className="scroll-mt-32 mt-12 sm:scroll-mt-8 sm:mt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Types by island</h2>
          <p className="mt-2 text-sm text-zinc-400">
            What you will face and what to bring — from the{" "}
            <Link href="/guides/beginner#islands" className="text-emerald-300 hover:underline">
              beginner island route
            </Link>
            .
          </p>

          <div className="mt-5 space-y-4">
            {islandTypeTips.map((row) => (
              <article
                key={row.island}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">{row.island}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Common types</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {row.dominantTypes.map((type) => (
                        <TypeChartTypeLink key={type} type={type} size="sm" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-400">Bring</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {row.bringTypes.map((type) => (
                        <TypeChartTypeLink
                          key={type}
                          type={type}
                          size="sm"
                          className="ring-emerald-500/30"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{row.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Full reference */}
        <section id="reference" className="scroll-mt-32 mt-12 sm:scroll-mt-8 sm:mt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Full type reference</h2>
          <p className="mt-2 text-sm text-zinc-400">
            The{" "}
            <Link href="#quick-answer" className="text-emerald-300 hover:underline">
              quick-answer table
            </Link>{" "}
            above lists all 15 types. Use Type lookup for shareable single-type links.
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            <strong className="text-zinc-400">Normal</strong> appears on dex entries but is not in this offensive
            chart yet. Confirm Normal matchups in-game before ranked duels.
          </p>
        </section>

        {/* Teams + FAQ */}
        <section id="teams" className="scroll-mt-32 mt-12 sm:scroll-mt-8 sm:mt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Build your squad</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href="/team-builder"
              className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 transition hover:bg-emerald-500/15 sm:p-6"
            >
              <p className="font-semibold text-emerald-200">Team builder →</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Pick 5 Evomons and see offensive gaps, duplicate types, and defensive threats.
              </p>
            </Link>
            <Link
              href="/tier-list"
              className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 transition hover:border-white/20 sm:p-6"
            >
              <p className="font-semibold text-white">Tier list →</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Type coverage alone does not win — see which pets stay on teams through endgame.
              </p>
            </Link>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-white">Common questions</h3>
          <div className="mt-4 space-y-3">
            {typeChartFaqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/10 bg-[#0b1512] open:border-emerald-500/20"
              >
                <summary className="cursor-pointer list-none px-4 py-4 text-sm font-semibold text-white marker:content-none sm:px-5 sm:text-base">
                  {item.q}
                </summary>
                <p className="border-t border-white/5 px-4 pb-4 pt-3 text-sm leading-7 text-zinc-400 sm:px-5">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Related tools</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
                Evomon codes →
              </Link>
            </li>
            <li>
              <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
                Beginner guide →
              </Link>
            </li>
            <li>
              <Link href="/starters" className="text-emerald-300 hover:underline">
                Best starter pick →
              </Link>
            </li>
            <li>
              <Link href="/dex" className="text-emerald-300 hover:underline">
                Evomon dex →
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
