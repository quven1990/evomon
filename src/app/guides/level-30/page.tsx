import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageTitleClass, wikiLinkClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.level30Guide();

export default function Level30GuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
      <PageBack href="/guides/beginner" label="Beginner guide" />
      <h1 className={pageTitleClass()}>Equipment Dungeons & Post-30 Progression</h1>
      <p className={pageLeadClass()}>
        Island routing, Lavite, and the level 30 Ultimate/Ascension spike live on the{" "}
        <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
          beginner guide
        </Link>
        . This page covers what opens after that — especially{" "}
        <strong className="text-white">Equipment Dungeons at trainer level 40</strong> on Silent Sands.
      </p>

      <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Quick answer</p>
        <p className="mt-2 text-sm leading-7 text-zinc-200 sm:text-base">
          Hit trainer level 30 for your carry Ultimate and start Ascension on the{" "}
          <Link href="/guides/beginner" className="font-medium text-emerald-300 hover:underline">
            beginner route
          </Link>
          . At level 40, Silent Sands unlocks Equipment Dungeons — run daily Equipment Challenge
          tickets for gear, enhance keeper pieces only, and save Refine Stones for Legendary bonus
          rolls.
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

        <h2 id="equipment-dungeons">Level 40+ — Equipment Dungeons</h2>
        <p>
          Silent Sands is the core gear faucet. Ground and Steel types dominate the route — check the{" "}
          <Link href="/type-chart?type=Water" className={wikiLinkClass()}>
            type chart
          </Link>{" "}
          for Water/Fire/Fighting counters before you push dungeons.
        </p>
        <ul>
          <li>Equipment Dungeons unlock when your trainer reaches level 40 on Silent Sands.</li>
          <li>
            Run Equipment Challenge tickets daily — each grants{" "}
            <strong className="text-white">200 player EXP</strong> (see the{" "}
            <Link href="/guides/farming#daily" className={wikiLinkClass()}>
              farming checklist
            </Link>
            ).
          </li>
          <li>Enhance only gear you will keep long-term; fodder pieces stop at +0.</li>
          <li>Use Refine Stones on Legendary equipment when you are rolling for bonus stats.</li>
          <li>
            Catch Master suit (+10% capture) pays off once you start boss{" "}
            <Link href="/guides/mutations/shiny-egg" className={wikiLinkClass()}>
              shiny egg
            </Link>{" "}
            routes — farm dungeons first, then hunt.
          </li>
        </ul>

        <h2>Who to level while gearing</h2>
        <p>
          Do not spread evolution stones across duplicates. The{" "}
          <Link href="/tier-list/evolution-priority" className={wikiLinkClass()}>
            evolution priority guide
          </Link>{" "}
          and{" "}
          <Link href="/tier-list" className={wikiLinkClass()}>
            tier list
          </Link>{" "}
          list which carries stay relevant through Silent Sands and beyond.
        </p>

        <h2>Related</h2>
        <ul>
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
          <li>
            <Link href="/guides/mutations/shiny-egg" className={wikiLinkClass()}>
              Shiny egg & boss routes
            </Link>
          </li>
          <li>
            <Link href="/tier-list" className={wikiLinkClass()}>
              Tier list
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
