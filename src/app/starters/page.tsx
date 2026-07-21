import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";

const starterSlugs: Record<string, string> = {
  Bubble: "bubble",
  Blazpup: "blazpup",
  Leafbun: "leafbun",
};

const comparison = [
  {
    name: "Bubble",
    element: "Water",
    islands: "Verdant Valley, Lava Crag",
    verdict: "Best for most new players",
    highlight: true,
  },
  {
    name: "Blazpup",
    element: "Fire",
    islands: "Strong later; weaker early routes",
    verdict: "High damage, slower start",
    highlight: false,
  },
  {
    name: "Leafbun",
    element: "Grass",
    islands: "Mid-game coverage",
    verdict: "Tanky with healing skills",
    highlight: false,
  },
] as const;

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

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white">Starter comparison</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
                  <th className="px-4 py-3">Starter</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Early islands</th>
                  <th className="px-4 py-3">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.name}
                    className={`border-b border-white/5 ${row.highlight ? "bg-emerald-500/5" : "bg-[#0b1512]"}`}
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      <Link
                        href={`/dex/${starterSlugs[row.name]}`}
                        className="text-emerald-300 hover:underline"
                      >
                        {row.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">{row.element}</td>
                    <td className="px-4 py-3 text-zinc-300">{row.islands}</td>
                    <td className="px-4 py-3 text-zinc-300">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 space-y-4">
          {GAME.starters.map((starter, index) => {
            const slug = starterSlugs[starter.name];
            return (
              <article
                key={starter.name}
                className="rounded-2xl border border-white/10 bg-[#0b1512] p-6"
              >
                <div className="flex items-start gap-4">
                  <Link
                    href={`/dex/${slug}`}
                    className="shrink-0 transition hover:scale-105"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/pets/${slug}.png`}
                      alt=""
                      width={96}
                      height={96}
                      loading="eager"
                      decoding="async"
                      className="h-20 w-20 object-contain drop-shadow-[0_8px_24px_rgba(16,185,129,0.25)] sm:h-24 sm:w-24"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-emerald-300">
                        {index + 1}
                      </span>
                      <div>
                        <h2 className="text-xl font-semibold text-white">
                          <Link href={`/dex/${slug}`} className="hover:text-emerald-300">
                            {starter.name}
                          </Link>
                        </h2>
                        <p className="text-sm text-zinc-400">{starter.type}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{starter.pick}</p>
                    <Link
                      href={`/dex/${slug}`}
                      className="mt-3 inline-flex text-sm font-medium text-emerald-400 hover:underline"
                    >
                      {starter.name} dex entry →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-[#0b1512]/80 p-6">
          <h2 className="text-xl font-semibold text-white">Evolution lines (community data)</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>
              <Link href="/dex/bubble" className="text-emerald-300 hover:underline">
                Bubble
              </Link>{" "}
              → Bubboxer →{" "}
              <Link href="/dex/bubblade" className="text-emerald-300 hover:underline">
                Bubblade
              </Link>
            </li>
            <li>
              <Link href="/dex/blazpup" className="text-emerald-300 hover:underline">
                Blazpup
              </Link>{" "}
              → Blazgrowl → Blazmane
            </li>
            <li>
              <Link href="/dex/leafbun" className="text-emerald-300 hover:underline">
                Leafbun
              </Link>{" "}
              → Leafroge → Leafblade
            </li>
          </ul>
        </section>

        <p className="mt-8 text-sm text-zinc-500">
          Next step:{" "}
          <Link href="/team-builder" className="text-emerald-300 hover:underline">
            plan a 5-pet party
          </Link>
          , read the{" "}
          <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
            beginner guide
          </Link>{" "}
          for level 30, Ascension, and dungeon unlocks — or grab{" "}
          <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
            free Evomon codes
          </Link>{" "}
          before you grind.
        </p>
      </main>
    </>
  );
}
