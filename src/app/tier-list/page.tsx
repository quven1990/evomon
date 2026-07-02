import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.tierList();

const tiers = [
  {
    tier: "SS",
    color: "text-rose-300 bg-rose-500/15 border-rose-500/30",
    picks: [
      { name: "Bubble → Bubboxer", type: "Water", role: "Starter carry", note: "Best early island matchups" },
      { name: "Bubblade", type: "Water", role: "Late Water DPS", note: "End of starter line" },
    ],
  },
  {
    tier: "S",
    color: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    picks: [
      { name: "Blazpup line", type: "Fire", role: "Damage carry", note: "Strong mid-game once covered" },
      { name: "Mopebun", type: "Normal", role: "Route catch", note: "Solid early Normal pickup" },
      { name: "Pebble → Pebroll", type: "Rock", role: "Tank", note: "Great Verdant Valley catch" },
      { name: "Leafbun", type: "Grass", role: "Starter", note: "Tanky, slower early route" },
    ],
  },
  {
    tier: "A",
    color: "text-emerald-300 bg-emerald-500/15 border-emerald-500/30",
    picks: [
      { name: "Sparkit / Emfox", type: "Fire", role: "Coverage", note: "Fire damage after starters" },
      { name: "Clampip line", type: "Water", role: "Petal Pond", note: "Water backup for team" },
      { name: "Pebgolem", type: "Rock", role: "Wall", note: "Rock wall for tough bosses" },
    ],
  },
  {
    tier: "B",
    color: "text-sky-300 bg-sky-500/15 border-sky-500/30",
    picks: [
      { name: "Lavite / Lavarock", type: "Fire", role: "Route Fire", note: "Worth training if found early" },
      { name: "Budling / Silvanarch", type: "Grass", role: "Grass coverage", note: "Petal Pond region" },
      { name: "Mudbud line", type: "Ground", role: "Ground", note: "Coverage for Electric weak spots" },
    ],
  },
];

const earlyCatches = [
  { name: "Pebble", when: "Verdant Valley", why: "Rock tank for early bosses" },
  { name: "Clampip", when: "Petal Pond", why: "Water backup alongside Bubble" },
  { name: "Sparkit", when: "Early routes", why: "Fire coverage for Grass zones" },
  { name: "Lavite", when: "Lava Crag area", why: "Fire route staple if spellings match" },
  { name: "Mopebun", when: "Early routes", why: "Normal type filler" },
];

export default function TierListPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the best Evomon starter?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bubble (Water) is the safest starter for most players due to early island matchups.",
              },
            },
          ],
        }}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Tier List</h1>
        <p className={pageLeadClass()}>
          Overall early-to-mid game rankings for team building — not collector flex. Element matchups
          matter more than raw tier labels. Use with the{" "}
          <Link href="/type-chart" className="text-emerald-300 hover:underline">type chart</Link>.
        </p>

        <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-zinc-500">
          Community meta snapshot — mode-specific dungeon/tower lists may be added when we have
          enough sourced data.{" "}
          <Link href="/about" className="text-emerald-400 hover:underline">
            How we rank →
          </Link>
        </p>

        <div className="mt-10 space-y-6">
          {tiers.map((group) => (
            <section key={group.tier} className="rounded-2xl border border-white/10 bg-[#0b1512] p-6">
              <h2 className={`inline-flex rounded-lg border px-3 py-1 text-lg font-black ${group.color}`}>
                {group.tier}-Tier
              </h2>
              <div className="mt-4 divide-y divide-white/5">
                {group.picks.map((pick) => (
                  <div key={pick.name} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-white">{pick.name}</span>
                        <span className="rounded bg-white/5 px-2 py-0.5 text-xs text-zinc-400">{pick.type}</span>
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">{pick.role}</span>
                      </div>
                      <p className="mt-1 text-sm text-zinc-500">{pick.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Best early route catches</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {earlyCatches.map((row) => (
              <div key={row.name} className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
                <p className="font-semibold text-white">{row.name}</p>
                <p className="mt-1 text-xs text-emerald-400">{row.when}</p>
                <p className="mt-2 text-sm text-zinc-400">{row.why}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
