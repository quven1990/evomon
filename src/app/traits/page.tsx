import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";
import { TRAITS_LAST_CHECKED, getTraitCatalog, type TraitRarity } from "@/data/traits";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.traits();

const RARITY_CLASS: Record<TraitRarity, string> = {
  Legendary: "text-amber-300",
  Rare: "text-violet-300",
  Normal: "text-zinc-400",
};

export default function TraitsPage() {
  const catalog = getTraitCatalog();
  const pageUrl = canonical("/traits");
  const legendary = catalog.filter((t) => t.rarity === "Legendary").length;

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Evomon Wiki", item: canonical("/") },
              { "@type": "ListItem", position: 2, name: "Traits", item: pageUrl },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are traits in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Traits are passive abilities rolled on catch, separate from Nature (+/− stats) and Talent (SSS-style grade). Each species has a pool of possible traits; rates are community-reported.",
                },
              },
              {
                "@type": "Question",
                name: "How do you reroll traits in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use Trait Reroll Potions from codes, events, and other rewards. Check the in-game trait tooltip before locking a keeper — this page lists effects and which pets can roll each trait.",
                },
              },
            ],
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Traits</h1>
        <p className={pageLeadClass()}>
          {catalog.length} traits with community effect notes — plus which pets can roll them from
          our dex combat data. Last checked {TRAITS_LAST_CHECKED}.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            Trait ≠ Nature ≠ Talent. Legendary traits (~1.5%) are scarce; commons (~6.5%) show up
            often. Reroll potions appear in{" "}
            <Link href="/codes" className="text-emerald-300 hover:underline">
              codes
            </Link>
            . Open a{" "}
            <Link href="/dex" className="text-emerald-300 hover:underline">
              dex
            </Link>{" "}
            page for that species&apos; full pool. {legendary} legendary traits listed below.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {catalog.map((trait) => (
            <article
              key={trait.name}
              id={trait.name.toLowerCase()}
              className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#0b1512] p-4 sm:scroll-mt-24 sm:p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-base font-semibold text-white">{trait.name}</h2>
                <p className={`text-xs font-medium uppercase tracking-wide ${RARITY_CLASS[trait.rarity]}`}>
                  {trait.rarity}
                  {trait.rate ? ` · ${trait.rate}` : ""}
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{trait.effect}</p>
              {trait.petSlugs.length > 0 ? (
                <p className="mt-3 text-xs leading-6 text-zinc-500">
                  <span className="text-zinc-400">Pets with this trait: </span>
                  {trait.petSlugs.slice(0, 12).map((slug, i) => (
                    <span key={slug}>
                      {i > 0 ? ", " : ""}
                      <Link href={`/dex/${slug}`} className="text-emerald-400/90 hover:underline">
                        {slug}
                      </Link>
                    </span>
                  ))}
                  {trait.petSlugs.length > 12
                    ? ` · +${trait.petSlugs.length - 12} more in combat data`
                    : ""}
                </p>
              ) : (
                <p className="mt-3 text-xs text-zinc-600">
                  No pet pool mapped in our combat dump yet.
                </p>
              )}
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Related</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <Link href="/natures" className="text-emerald-300 hover:underline">
                Natures (±10% stats) →
              </Link>
            </li>
            <li>
              <Link href="/dex" className="text-emerald-300 hover:underline">
                Evomon dex →
              </Link>
            </li>
            <li>
              <Link href="/tier-list" className="text-emerald-300 hover:underline">
                Tier list →
              </Link>
            </li>
            <li>
              <Link href="/guides/mutations/shiny-vs-sparkle" className="text-emerald-300 hover:underline">
                Mutation vs Talent vs Nature →
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Effects and rates are community-sourced and can patch. Confirm tooltips in-game before
            spending Trait Reroll Potions.
          </p>
        </section>
      </main>
    </>
  );
}
