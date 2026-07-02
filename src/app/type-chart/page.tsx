import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { typeChart, elementStyles } from "@/data/type-chart";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.typeChart();

export default function TypeChartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <PageBack href="/" />
      <h1 className={pageTitleClass()}>Evomon Type Chart</h1>
      <p className={pageLeadClass()}>
        Element matchups for team building. Evomon battles follow rock-paper-scissors logic — bring
        coverage for the island you&apos;re clearing.
      </p>

      <div className="mt-10 space-y-4">
        {typeChart.map((row) => {
          const styles = elementStyles[row.attacker];
          return (
            <article
              key={row.attacker}
              className={`rounded-2xl border ${styles.border} bg-[#0b1512]/80 p-5`}
            >
              <h2 className={`text-xl font-bold ${styles.text}`}>{row.attacker}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-emerald-400">Strong against</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {row.strong.map((t) => (
                      <span key={t} className={`rounded-full px-2 py-0.5 text-xs ${elementStyles[t].bg} ${elementStyles[t].text}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-red-400">Weak against</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {row.weak.map((t) => (
                      <span key={t} className={`rounded-full px-2 py-0.5 text-xs ${elementStyles[t].bg} ${elementStyles[t].text}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-10 text-sm text-zinc-500">
        Pair with the{" "}
        <Link href="/tier-list" className="text-emerald-300 hover:underline">tier list</Link> and{" "}
        <Link href="/team-builder" className="text-emerald-300 hover:underline">team builder</Link>.
      </p>
    </main>
  );
}
