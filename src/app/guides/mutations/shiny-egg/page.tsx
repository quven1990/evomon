import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { GuideTrustFooter } from "@/components/GuideTrustFooter";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { eggHunting, MUTATIONS_UPDATED, pityRules } from "@/data/mutations";
import { guideArticleSchema } from "@/lib/guide-trust";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.mutationsShinyEgg();

const eggFaqs = [
  {
    q: "How do you get shiny eggs in Evomon?",
    a: "Defeat a wild Evomon, then catch it — catches can roll eggs. Shiny eggs hatch a guaranteed shiny of that species.",
  },
  {
    q: "Do boss Evomon have shiny pity?",
    a: "Many boss and mount lines do not. Shiny eggs from repeated catches are the main path for those species.",
  },
  {
    q: "Should I use a Prismatic Ball on a shiny egg?",
    a: "Use a Prismatic Ball when you want the shiny egg hatch to also have prismatic / sparkle appearance. It is a hatch or shiny-encounter tool, not a catch-rate suit.",
  },
  {
    q: "What does Catch Master do in Evomon?",
    a: "Catch Master is an adventure suit community hunters use for +10% capture success and an extra capture attempt. It helps boss shiny egg farms because failed catches skip the egg roll.",
  },
  {
    q: "Do you need Catch Master for shiny eggs?",
    a: "No, but it is strongly recommended for hard boss and mount lines. Regular route egg farming can work without it if you have enough balls and fast clears.",
  },
  {
    q: "Does KO-and-run work for egg farming?",
    a: "No. Eggs and prismatic pity require catches after you defeat the target.",
  },
];

export default function ShinyEggPage() {
  const article = guideArticleSchema({
    path: "/guides/mutations/shiny-egg",
    headline: "Evomon Shiny Egg Guide — Prismatic Ball & Catch Master",
    description:
      "How shiny eggs drop after catches, when to use Prismatic Ball, why Catch Master helps boss routes, and how egg farming differs from field shiny pity.",
  });

  return (
    <>
      <StructuredData
        data={[
          article,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: eggFaqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/guides/mutations" label="Mutations guide" />
        <h1 className={pageTitleClass()}>Shiny Egg Guide</h1>
        <p className={pageLeadClass()}>
          Eggs drop from <strong className="text-white">catches</strong> after you defeat a target — not
          from KO-and-run. Boss shinies often depend on shiny eggs because field shiny pity does not
          apply on several mount lines. This page also separates{" "}
          <strong className="text-white">Prismatic Ball</strong> hatching from{" "}
          <strong className="text-white">Catch Master</strong> farming. Reviewed {MUTATIONS_UPDATED};
          compare types on{" "}
          <Link href="/guides/mutations/shiny-vs-sparkle" className="text-emerald-300 hover:underline">
            shiny vs sparkle
          </Link>
          .
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            In-game confirmed
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
            Shiny eggs hatch a guaranteed shiny. Use a{" "}
            <strong className="text-white">Prismatic Ball</strong> when you want the hatch to also be
            Sparkle / Prismatic. Use <strong className="text-white">Catch Master</strong> before boss
            routes where every failed catch wastes an egg roll.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Egg types</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{eggHunting.intro}</p>

          <div className="mt-5 grid gap-3">
            {eggHunting.rows.map((row) => (
              <div
                key={row.egg}
                className="rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <h3 className="font-semibold text-white">{row.egg}</h3>
                <p className="mt-2 text-sm text-zinc-300">{row.effect}</p>
                <p className="mt-2 text-sm text-emerald-300/90">{row.tip}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Catch rules that affect eggs</h2>
          <ul className="mt-5 space-y-3">
            {pityRules
              .filter((r) => r.rule.includes("egg") || r.rule.includes("catch") || r.rule.includes("Catch"))
              .map((item) => (
                <li
                  key={item.rule}
                  className="rounded-xl border border-white/10 bg-[#0b1512] px-4 py-3 sm:px-5 sm:py-4"
                >
                  <p className="font-medium text-white">{item.rule}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{item.detail}</p>
                </li>
              ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Prismatic Ball vs Catch Master
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            These two tools solve different parts of shiny egg hunting. Mixing them up is a common
            reason players waste rare balls or boss cycles.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-violet-300/20 bg-violet-500/10 p-4 sm:p-5">
              <h3 className="font-semibold text-violet-100">Prismatic Ball</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">
                Use it on a shiny encounter or shiny egg hatch when you want the guaranteed shiny to
                also have prismatic / Sparkle appearance. It does not make boss catches easier.
              </p>
              <Link href="/blog/how-to-get-eggs-evomon" className="mt-3 inline-flex text-sm text-emerald-300 hover:underline">
                Full egg catch loop →
              </Link>
            </div>
            <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-4 sm:p-5">
              <h3 className="font-semibold text-amber-100">Catch Master</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">
                Use it before hard boss farms. The extra catch chance and attempt matter because egg
                drops only roll after a successful catch, not after the knockout.
              </p>
              <Link href="/guides/level-30" className="mt-3 inline-flex text-sm text-emerald-300 hover:underline">
                Equipment dungeon unlocks →
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Boss & mount lines</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Listed routes are community-confirmed hunt paths — verify level gates before farming.
          </p>
          <div className="mt-4 space-y-3">
            {eggHunting.bosses.map((boss) => (
              <div
                key={boss.name}
                className="rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5"
              >
                <p className="font-medium text-white">{boss.name}</p>
                <p className="mt-1 text-xs text-emerald-400">
                  {boss.name === "Volcras King / Bluebird line" ? (
                    <>
                      Raven Ridge boss + wild{" "}
                      <Link href="/dex/bluebird" className="text-emerald-300 hover:underline">
                        Bluebird
                      </Link>{" "}
                      route
                    </>
                  ) : (
                    boss.where
                  )}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{boss.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-5 sm:p-6">
          <h2 className="font-semibold text-amber-100">Catch Master suit</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            Shiny egg farmers often run the <strong className="text-white">Catch Master</strong>{" "}
            adventure suit for +10% capture success and an extra capture attempt (
            <span className="text-amber-200/90">community reported</span>). Critical on bosses where
            you must land the catch to roll eggs. Unlocks via equipment progression — see{" "}
            <Link href="/guides/level-30" className="text-emerald-300 hover:underline">
              equipment dungeons (Lv40+)
            </Link>{" "}
            for dungeons at trainer level 40.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">FAQ</h2>
          <dl className="mt-4 space-y-4">
            {eggFaqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <dt className="font-semibold text-white">{item.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <GuideTrustFooter pageId="mutations-shiny-egg" />
      </main>
    </>
  );
}
