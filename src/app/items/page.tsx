import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";
import {
  ITEMS_LAST_CHECKED,
  itemCategories,
  itemEntries,
  itemFaqs,
  itemsInCategory,
} from "@/data/items";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.items();

export default function ItemsPage() {
  const pageUrl = canonical("/items");

  return (
    <>
      <StructuredData
        data={[
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
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Items — What to Spend First</h1>
        <p className={pageLeadClass()}>
          Balls, evolution stones, reroll potions, tickets, and EXP fruit — organized by{" "}
          <strong className="text-white">when to spend</strong>, not as a scraped 40-row catalog.
          Last checked {ITEMS_LAST_CHECKED}. {itemEntries.length} core items with community sources.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            Fund{" "}
            <strong className="text-white">Evolution Stones</strong> into your priority carry, use{" "}
            <strong className="text-white">Advanced / King</strong> balls on boss keepers, save{" "}
            <strong className="text-white">Prismatic Balls</strong> for shiny-egg hatches you care
            about, and only reroll Nature/Trait/Talent on pets worth building. Gear stones →{" "}
            <Link href="/equipment" className="font-medium text-emerald-300 hover:underline">
              equipment guide
            </Link>
            .
          </p>
        </div>

        <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-zinc-500">
          Unofficial fan guide. No official public item API — rows require multi-source or on-site
          verified notes. Shop prices, heal amounts, and exact stone counts can patch; always check
          the in-game tooltip. This page is intentionally narrower than full wiki databases.
        </p>

        <nav className="mt-8 flex flex-wrap gap-2 text-sm">
          {itemCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-lg border border-white/10 bg-[#0b1512] px-3 py-1.5 text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-200"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-12">
          {itemCategories.map((cat) => {
            const rows = itemsInCategory(cat.id);
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-28 sm:scroll-mt-24">
                <h2 className="text-xl font-bold text-white sm:text-2xl">{cat.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{cat.lead}</p>
                <div className="mt-5 space-y-4">
                  {rows.map((item) => (
                    <article
                      key={item.name}
                      className="rounded-2xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
                    >
                      <h3 className="text-base font-semibold text-white sm:text-lg">{item.name}</h3>
                      <dl className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                            Does
                          </dt>
                          <dd className="mt-0.5">{item.does}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                            Spend when
                          </dt>
                          <dd className="mt-0.5">{item.spendWhen}</dd>
                        </div>
                        {item.avoid ? (
                          <div>
                            <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                              Avoid
                            </dt>
                            <dd className="mt-0.5 text-zinc-400">{item.avoid}</dd>
                          </div>
                        ) : null}
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                            Obtain (community)
                          </dt>
                          <dd className="mt-0.5 text-zinc-400">{item.obtain}</dd>
                        </div>
                      </dl>
                      {item.related && item.related.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                          {item.related.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                className="text-emerald-300 hover:underline"
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
            Full seasonal medals, every food / hunger snack, skill caches, and move lists are out of
            scope until we have the same multi-source bar. For gear sets and Refine/Enhance loops,
            use{" "}
            <Link href="/equipment" className="text-emerald-300 hover:underline">
              /equipment
            </Link>
            . For moves, we still do not ship a{" "}
            <span className="text-zinc-300">/moves</span> database.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {itemFaqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-10 text-xs leading-6 text-zinc-500">
          Sources mixed across Sportskeeda, Nerdschalk, AllThings.How, Bloxodes, and our existing
          codes / shiny guides — rewritten for spend decisions, not mirrored as a wiki dump.
        </p>
      </main>
    </>
  );
}
