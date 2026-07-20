import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";
import {
  NATURES_LAST_CHECKED,
  NATURE_STAT_ORDER,
  formatNatureDelta,
  naturesRaising,
  type NatureStat,
} from "@/data/natures";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.natures();

const ROLE_TIPS: { title: string; body: string }[] = [
  {
    title: "Tanks / Counter walls",
    body: "Prefer +HP first, then +Defense or +Sp. Def. Avoid anything that lowers HP (e.g. Anxious). See the Lavite Counter nature guide for a worked example.",
  },
  {
    title: "Physical attackers",
    body: "Community guides often chase +Attack natures (Adamant, Lonely, Naughty, Brave, Hardy) and skip wasted Speed on slow walls.",
  },
  {
    title: "Special attackers",
    body: "Look for +Sp. Atk (Modest, Mild, Quiet, Rash, Rational). Confirm the live tooltip before spending reroll potions.",
  },
];

export default function NaturesPage() {
  const pageUrl = canonical("/natures");

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Evomon Wiki", item: canonical("/") },
              { "@type": "ListItem", position: 2, name: "Natures", item: pageUrl },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do natures work in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Each Evomon rolls a nature on catch. A nature permanently raises one of the six stats by 10% and lowers another by 10% (HP, Attack, Defense, Sp. Atk, Sp. Def, or Speed). Nature is separate from Talent and Trait.",
                },
              },
              {
                "@type": "Question",
                name: "How do you reroll nature in Evomon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use a Nature Reroll Potion from codes, NPCs, battle pass, or other rewards. Open the nature box and tap ? to read the exact +/- before locking a keeper.",
                },
              },
              {
                "@type": "Question",
                name: "What is the best nature for Lavite?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For Counter Lavarock builds, community guides prioritize +HP natures and avoid −HP. Full walkthrough: https://evomon.cc/blog/best-nature-lavite-evomon",
                },
              },
            ],
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Natures</h1>
        <p className={pageLeadClass()}>
          Every nature raises one stat +10% and lowers another −10%. Use this table to plan rerolls —
          then check the live in-game tooltip. Last checked {NATURES_LAST_CHECKED}.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Quick answer
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            Nature ≠ Talent ≠ Trait. Reroll with a{" "}
            <strong className="text-white">Nature Reroll Potion</strong> (often from{" "}
            <Link href="/codes" className="text-emerald-300 hover:underline">
              codes
            </Link>
            ). Tanks usually want <strong className="text-white">+HP</strong>; physical carries want{" "}
            <strong className="text-white">+Attack</strong>; casters want{" "}
            <strong className="text-white">+Sp. Atk</strong>. Worked example:{" "}
            <Link
              href="/blog/best-nature-lavite-evomon"
              className="text-emerald-300 hover:underline"
            >
              best nature for Lavite
            </Link>
            .
          </p>
        </div>

        <nav aria-label="Jump to raised stat" className="mt-6 flex flex-wrap gap-2">
          {NATURE_STAT_ORDER.map((stat) => (
            <a
              key={stat}
              href={`#raises-${slugStat(stat)}`}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300 transition hover:border-emerald-500/40 hover:text-emerald-200"
            >
              +{stat}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-8">
          {NATURE_STAT_ORDER.map((stat) => (
            <section
              key={stat}
              id={`raises-${slugStat(stat)}`}
              className="scroll-mt-28 sm:scroll-mt-24"
            >
              <h2 className="text-lg font-bold text-white">Raises {stat}</h2>
              <div className="mt-3 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full min-w-[28rem] text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-zinc-500">
                      <th className="px-4 py-2.5 font-normal">Nature</th>
                      <th className="px-4 py-2.5 font-normal">Effect</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    {naturesRaising(stat).map((n) => (
                      <tr key={n.name} className="border-b border-white/5 last:border-0">
                        <td className="px-4 py-2.5 font-medium text-white">{n.name}</td>
                        <td className="px-4 py-2.5 tabular-nums text-zinc-400">
                          {formatNatureDelta(n)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white">Role tips</h2>
          <ul className="mt-4 space-y-3">
            {ROLE_TIPS.map((tip) => (
              <li
                key={tip.title}
                className="rounded-xl border border-white/10 bg-[#0b1512] px-4 py-3 text-sm leading-6 text-zinc-300"
              >
                <p className="font-medium text-white">{tip.title}</p>
                <p className="mt-1 text-zinc-400">{tip.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Related</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <Link href="/traits" className="text-emerald-300 hover:underline">
                Traits glossary →
              </Link>
            </li>
            <li>
              <Link href="/blog/best-nature-lavite-evomon" className="text-emerald-300 hover:underline">
                Best nature for Lavite →
              </Link>
            </li>
            <li>
              <Link href="/dex" className="text-emerald-300 hover:underline">
                Evomon dex →
              </Link>
            </li>
            <li>
              <Link href="/team-builder" className="text-emerald-300 hover:underline">
                Team builder →
              </Link>
            </li>
            <li>
              <Link href="/codes" className="text-emerald-300 hover:underline">
                Codes (reroll potions) →
              </Link>
            </li>
            <li>
              <Link href="/guides/mutations/shiny-vs-sparkle" className="text-emerald-300 hover:underline">
                Mutation vs Talent vs Nature →
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Community-sourced table — UI can patch. Not official. Confirm each +/- in-game before
            spending potions.
          </p>
        </section>
      </main>
    </>
  );
}

function slugStat(stat: NatureStat): string {
  return stat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
