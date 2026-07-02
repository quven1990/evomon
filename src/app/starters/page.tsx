import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.starters();

export default function StartersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best Evomon starter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bubble (Water) is the best starter for most new players because Verdant Valley and Lava Crag favor Water matchups early.",
        },
      },
      {
        "@type": "Question",
        name: "Can you reroll your Evomon starter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your starter choice is made during the tutorial. Only reroll mentality if progression is blocked — otherwise commit and build coverage with catches.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Best Evomon Starter</h1>
        <p className={pageLeadClass()}>
          Your first pick in {GAME.fullName} shapes the opening islands. Here is the practical order
          for new accounts in July 2026.
        </p>

        <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">Quick answer</p>
          <p className="mt-2 text-lg text-white">
            Pick <strong>Bubble</strong> if you want the smoothest beginner route.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {GAME.starters.map((starter, index) => (
            <article
              key={starter.name}
              className="rounded-2xl border border-white/10 bg-[#0b1512] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-emerald-300">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-white">{starter.name}</h2>
                  <p className="text-sm text-zinc-400">{starter.type}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{starter.pick}</p>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-[#0b1512]/80 p-6">
          <h2 className="text-xl font-semibold text-white">Evolution lines (community data)</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>Bubble → Bubboxer → Bubblade</li>
            <li>Blazpup → Blazgrowl → Blazmane</li>
            <li>Leafbun → Leafroge → Leafblade</li>
          </ul>
        </section>

        <p className="mt-8 text-sm text-zinc-500">
          Next step: read the{" "}
          <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
            beginner guide
          </Link>{" "}
          for level 30, Ascension, and dungeon unlocks.
        </p>
      </main>
    </>
  );
}
