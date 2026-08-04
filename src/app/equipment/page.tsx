import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";
import {
  EQUIPMENT_LAST_CHECKED,
  enhanceVsRefine,
  equipmentFaqs,
  equipmentQuickAnswer,
  equipmentSources,
  equipmentSpendRules,
  equipmentSteps,
} from "@/data/equipment";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.equipment();

export default function EquipmentPage() {
  const pageUrl = canonical("/equipment");

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Evomon Wiki", item: canonical("/") },
              { "@type": "ListItem", position: 2, name: "Equipment", item: pageUrl },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: equipmentFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Equipment — Dungeons, Refine & Enhance</h1>
        <p className={pageLeadClass()}>
          Silent Sands gear loop after trainer level 40: Equipment Challenges, Enhance vs Refine,
          and Gear Station habits. Last checked {EQUIPMENT_LAST_CHECKED}.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">{equipmentQuickAnswer}</p>
        </div>

        <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-zinc-500">
          Unofficial. Ticket counts, map counts, and refine rates differ slightly across community
          guides and can patch — verify portals and tooltips in your client. We do not list every
          set name or invented drop %.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">How the gear loop works</h2>
          <ol className="mt-5 space-y-4">
            {equipmentSteps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300/90">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Enhance vs Refine</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {enhanceVsRefine.map((row) => (
              <div
                key={row.name}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <h3 className="text-lg font-semibold text-white">{row.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{row.does}</p>
                <p className="mt-3 text-sm leading-6 text-emerald-200/90">
                  <span className="font-medium text-emerald-300">Spend when:</span> {row.spendWhen}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  <span className="font-medium text-zinc-400">Avoid:</span> {row.avoid}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Spend rules</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-300">
            {equipmentSpendRules.map((rule) => (
              <li key={rule} className="flex gap-2">
                <span className="text-emerald-400">·</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Related progression</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
            <li>
              <Link href="/guides/level-30" className="text-emerald-300 hover:underline">
                Level 30 Ascension checkpoint
              </Link>{" "}
              — Ultimate + pre-gear progression before Silent Sands.
            </li>
            <li>
              <Link href="/items" className="text-emerald-300 hover:underline">
                Items — Refine / Enhance stones in the bag
              </Link>
            </li>
            <li>
              <Link href="/guides/farming" className="text-emerald-300 hover:underline">
                Farming — daily tickets and EXP loops
              </Link>
            </li>
            <li>
              <Link href="/guides/mutations/shiny-egg" className="text-emerald-300 hover:underline">
                Catch Master suit
              </Link>{" "}
              — adventure suit for boss egg catches (separate from dungeon gear).
            </li>
            <li>
              <Link href="/tier-list/evolution-priority" className="text-emerald-300 hover:underline">
                Evolution priority
              </Link>{" "}
              — who gets stones while you gear.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {equipmentFaqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Sources</h2>
          <ul className="mt-3 space-y-1 text-sm text-zinc-400">
            {equipmentSources.map((src) => (
              <li key={src.label}>
                {src.url ? (
                  <a
                    href={src.url}
                    className="text-emerald-300/90 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {src.label}
                  </a>
                ) : (
                  src.label
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
