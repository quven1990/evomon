import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CitationSources } from "@/components/CitationSources";
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
import { guideArticleSchema } from "@/lib/guide-trust";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.equipment();

const STEP_ICONS = [
  "/items/equipment-set-a.png",
  "/items/equipment-set-b.png",
  "/items/enhance-stone.png",
  "/items/refine-stone.png",
] as const;

const COMPARE_ICONS = {
  Enhance: "/items/enhance-stone.png",
  Refine: "/items/refine-stone.png",
} as const;

export default function EquipmentPage() {
  const pageUrl = canonical("/equipment");
  const article = guideArticleSchema({
    path: "/equipment",
    headline: "Evomon Equipment — Silent Sands, Refine & Enhance",
    description:
      "Unlock gear at trainer level 40 on Silent Sands: Equipment Challenges, Enhance vs Refine Stones, Carly’s Gear Station, and what to spend stones on.",
    dateModified: EQUIPMENT_LAST_CHECKED,
  });

  return (
    <>
      <StructuredData
        data={[
          article,
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
            "@type": "HowTo",
            name: "How Evomon equipment progression works",
            description: equipmentQuickAnswer,
            step: equipmentSteps.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.title,
              text: step.body,
            })),
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

      <main className="mx-auto max-w-5xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={`${pageTitleClass()} text-[1.65rem] sm:text-4xl`}>
          Evomon Equipment — Dungeons, Refine & Enhance
        </h1>
        <p className={pageLeadClass()}>
          Silent Sands gear loop after trainer level 40. Last checked {EQUIPMENT_LAST_CHECKED}.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
            <div className="flex -space-x-3" aria-hidden>
              {["/items/equipment-set-a.png", "/items/equipment-set-c.png", "/items/equipment-set-b.png"].map(
                (src) => (
                  <div
                    key={src}
                    className="relative h-14 w-14 rounded-2xl border border-white/15 bg-black/50 p-1.5 shadow-lg sm:h-16 sm:w-16"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={56}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ),
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Quick answer
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">{equipmentQuickAnswer}</p>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">How the gear loop works</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {equipmentSteps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 sm:h-14 sm:w-14">
                    <Image
                      src={STEP_ICONS[i] ?? STEP_ICONS[0]}
                      alt=""
                      width={48}
                      height={48}
                      className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                      aria-hidden
                    />
                    <span className="absolute -left-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-black">
                      {i + 1}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{step.body}</p>
                  </div>
                </div>
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
                className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-[#0b1512] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 sm:h-16 sm:w-16">
                    <Image
                      src={COMPARE_ICONS[row.name as keyof typeof COMPARE_ICONS]}
                      alt={`${row.name} Stone icon`}
                      width={56}
                      height={56}
                      className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{row.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{row.does}</p>
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
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {equipmentSpendRules.map((rule) => (
              <li
                key={rule}
                className="rounded-xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm leading-6 text-zinc-300"
              >
                {rule}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Related progression</h2>
          <ul className="mt-3 space-y-1 text-sm leading-7 text-zinc-300">
            <li>
              <Link
                href="/guides/level-30"
                className="inline-flex min-h-11 items-center text-emerald-300 hover:underline"
              >
                Level 30 Ascension checkpoint
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="inline-flex min-h-11 items-center text-emerald-300 hover:underline"
              >
                Items — balls, stones, Refine / Enhance in the bag
              </Link>
            </li>
            <li>
              <Link
                href="/guides/farming"
                className="inline-flex min-h-11 items-center text-emerald-300 hover:underline"
              >
                Farming — daily tickets
              </Link>
            </li>
            <li>
              <Link
                href="/guides/mutations/shiny-egg"
                className="inline-flex min-h-11 items-center text-emerald-300 hover:underline"
              >
                Catch Master suit
              </Link>{" "}
              — separate from dungeon gear
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {equipmentFaqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <CitationSources className="mt-12" sources={equipmentSources} />
      </main>
    </>
  );
}
