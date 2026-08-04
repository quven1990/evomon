import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsterraBanner } from "@/components/AdsterraBanner";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";
import {
  ITEMS_LAST_CHECKED,
  itemCategories,
  itemFaqs,
  itemPageSources,
  itemsInCategory,
} from "@/data/items";
import { guideArticleSchema } from "@/lib/guide-trust";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.items();

const CATEGORY_ACCENT: Record<string, string> = {
  catchers: "from-sky-500/20 to-transparent border-sky-500/25",
  evolution: "from-amber-500/20 to-transparent border-amber-500/25",
  rerolls: "from-violet-500/20 to-transparent border-violet-500/25",
  tickets: "from-rose-500/20 to-transparent border-rose-500/25",
  exp: "from-lime-500/20 to-transparent border-lime-500/25",
  "gear-mats": "from-orange-500/20 to-transparent border-orange-500/25",
};

export default function ItemsPage() {
  const pageUrl = canonical("/items");
  const sources = itemPageSources();
  const article = guideArticleSchema({
    path: "/items",
    headline: "Evomon Items — Balls, Stones & What to Spend First",
    description:
      "Evomon item spend guide: King vs Prismatic Ball, Evolution / Element / Omni Stones, reroll potions, Summon tickets, and EXP fruit — with sources, not a scraped catalog.",
    dateModified: ITEMS_LAST_CHECKED,
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
              { "@type": "ListItem", position: 2, name: "Items", item: pageUrl },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: itemFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Evomon items by spend category",
            numberOfItems: itemCategories.length,
            itemListElement: itemCategories.map((cat, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: cat.title,
              url: `${pageUrl}#${cat.id}`,
            })),
          },
        ]}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={`${pageTitleClass()} text-[1.65rem] sm:text-4xl`}>
          Evomon Items — What to Spend First
        </h1>
        <p className={pageLeadClass()}>
          Balls, stones, potions, and tickets with icons — organized by{" "}
          <strong className="text-white">when to spend</strong>, not a 40-row dump. Last checked{" "}
          {ITEMS_LAST_CHECKED}.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            Fund{" "}
            <strong className="text-white">Evolution Stones</strong> into your priority carry, use{" "}
            <strong className="text-white">Advanced / King</strong> on boss keepers, save{" "}
            <strong className="text-white">Prismatic Balls</strong> for shiny-egg hatches, and only
            reroll on pets worth building. Gear loop →{" "}
            <Link
              href="/equipment"
              className="inline-flex min-h-11 items-center font-medium text-emerald-300 hover:underline"
            >
              equipment guide
            </Link>
            .
          </p>
        </div>

        <AdsterraBanner className="mt-8" />

        <nav aria-label="Item categories" className="mt-8 flex flex-wrap gap-2">
          {itemCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-zinc-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-100"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-14">
          {itemCategories.map((cat) => {
            const rows = itemsInCategory(cat.id);
            const accent = CATEGORY_ACCENT[cat.id] ?? "from-white/10 to-transparent border-white/10";
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-28 sm:scroll-mt-24">
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-white sm:text-2xl">{cat.title}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">{cat.lead}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {rows.map((item) => (
                    <article
                      key={item.name}
                      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${accent} bg-[#0b1512]/90 p-4 sm:p-5`}
                    >
                      <div className="flex gap-3 sm:gap-4">
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-inner sm:h-24 sm:w-24">
                          <Image
                            src={`/items/${item.icon}.png`}
                            alt={`${item.name} icon`}
                            width={88}
                            height={88}
                            className="h-12 w-12 object-contain drop-shadow-lg sm:h-20 sm:w-20"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                            {item.name}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-zinc-300">{item.does}</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2 border-t border-white/5 pt-3 text-sm leading-6">
                        <p>
                          <span className="font-medium text-emerald-300/90">Spend when · </span>
                          <span className="text-zinc-300">{item.spendWhen}</span>
                        </p>
                        {item.avoid ? (
                          <p>
                            <span className="font-medium text-zinc-500">Avoid · </span>
                            <span className="text-zinc-400">{item.avoid}</span>
                          </p>
                        ) : null}
                        <p className="text-zinc-500">
                          <span className="font-medium text-zinc-500">Obtain · </span>
                          {item.obtain}
                        </p>
                      </div>
                      {item.related && item.related.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-x-1 gap-y-1 text-sm">
                          {item.related.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="inline-flex min-h-11 items-center px-1 text-emerald-300/90 hover:text-emerald-200 hover:underline"
                              >
                                {link.label} →
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Not on this page (yet)</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Seasonal medals, food/hunger snacks, and full skill-cache lists stay out of scope until
            they clear the same multi-source bar. Gear sets →{" "}
            <Link
              href="/equipment"
              className="inline-flex min-h-11 items-center text-emerald-300 hover:underline"
            >
              equipment guide
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {itemFaqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-white">Sources</h2>
          <ul className="mt-3 space-y-1 text-sm text-zinc-400">
            {sources.map((src) => (
              <li key={`${src.label}|${src.url ?? ""}`}>
                {src.url ? (
                  <a
                    href={src.url}
                    className="inline-flex min-h-11 items-center text-emerald-300/90 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {src.label}
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center">{src.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-xs leading-6 text-zinc-500">
          Icons mirrored from the shared community item-art CDN used by fan wikis; copy is rewritten
          for spend decisions. Confirm tooltips in-game after patches.
        </p>
      </main>
    </>
  );
}
