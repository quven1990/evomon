import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageTitleClass, wikiLinkClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.level30Guide();

export default function Level30GuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
      <PageBack href="/guides/beginner" label="Beginner guide" />
      <h1 className={pageTitleClass()}>Level 30 Ascension & What Unlocks Next</h1>
      <p className={pageLeadClass()}>
        Island routing, Lavite, and early clears live on the{" "}
        <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
          beginner guide
        </Link>
        . This page is the{" "}
        <strong className="text-white">trainer level 30 checkpoint</strong> — Ultimate, Ascension,
        then the handoff to Silent Sands gear.
      </p>

      <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Quick answer</p>
        <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
          Hit trainer level 30 for your carry Ultimate and start Ascension on the{" "}
          <Link href="/guides/beginner" className="font-medium text-emerald-300 hover:underline">
            beginner route
          </Link>
          . Gear itself unlocks later at level 40 — full dungeon / Refine / Enhance loop is on the{" "}
          <Link href="/equipment" className="font-medium text-emerald-300 hover:underline">
            equipment guide
          </Link>
          .
        </p>
      </div>

      <div className="prose-wiki mt-8">
        <h2 id="level-30">Level 30 checkpoint</h2>
        <p>
          If you are still on Verdant Valley or Lava Crag, use the{" "}
          <Link href="/guides/beginner" className={wikiLinkClass()}>
            beginner guide
          </Link>{" "}
          instead — it covers codes, daily EXP, Lavite, and the first Ascension steps.
        </p>
        <ul>
          <li>Ultimate Gauge unlocks on your main carry — plan burst windows around boss fights.</li>
          <li>Start the Ascension questline immediately to raise pet level caps.</li>
          <li>Visit Daisy in Main City for additional skills after trainer level 30.</li>
        </ul>

        <h2 id="toward-equipment">Toward level 40 gear</h2>
        <p>
          Silent Sands Equipment Challenges are the mid-game gear faucet. Community guides unlock
          them at trainer level 40 after Ascension raises your cap. Do not spread Evolution Stones
          across duplicates while you push — see{" "}
          <Link href="/tier-list/evolution-priority" className={wikiLinkClass()}>
            evolution priority
          </Link>
          .
        </p>
        <ul>
          <li>
            Full loop (Enhance vs Refine, Carly’s Gear Station, daily tickets) →{" "}
            <Link href="/equipment" className={wikiLinkClass()}>
              Evomon equipment guide
            </Link>
            .
          </li>
          <li>
            Bag materials (Refine / Enhance stones, balls, Omni) →{" "}
            <Link href="/items" className={wikiLinkClass()}>
              items spend guide
            </Link>
            .
          </li>
          <li>
            Catch Master suit for boss{" "}
            <Link href="/guides/mutations/shiny-egg" className={wikiLinkClass()}>
              shiny egg
            </Link>{" "}
            routes — farm gear first if captures are failing.
          </li>
        </ul>

        <h2>Who to level while gearing</h2>
        <p>
          The{" "}
          <Link href="/tier-list" className={wikiLinkClass()}>
            tier list
          </Link>{" "}
          lists which carries stay relevant through Silent Sands and beyond.
        </p>

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/equipment" className={wikiLinkClass()}>
              Equipment — dungeons, Refine & Enhance
            </Link>
          </li>
          <li>
            <Link href="/items" className={wikiLinkClass()}>
              Items — what to spend first
            </Link>
          </li>
          <li>
            <Link href="/guides/beginner" className={wikiLinkClass()}>
              Beginner guide — islands through level 30
            </Link>
          </li>
          <li>
            <Link href="/guides/farming" className={wikiLinkClass()}>
              Farming guide — daily EXP and tickets
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
