import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageTitleClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.farmingGuide();

export default function FarmingGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
      <PageBack href="/" />
      <h1 className={pageTitleClass()}>Farming Guide</h1>

      <div className="prose-wiki mt-6">
        <p>
          The fastest daily loop combines quests, challenge tickets, and targeted dungeon runs. Skip
          none of these if you want steady player level growth.
        </p>

        <h2>Daily checklist (~2,500+ player EXP)</h2>
        <ol className="list-decimal pl-5">
          <li>Daily quests — ~2,000 player EXP</li>
          <li>EXP Challenge tickets (Petal Pond) — 50 EXP each, 2 free/day</li>
          <li>Equipment Challenge (Silent Sands, Lv40+) — 200 EXP per ticket</li>
        </ol>

        <h2>Coin & material sources</h2>
        <ul>
          <li>Wild captures and releases → coins + EXP Fruits</li>
          <li>Island bosses and first-clear NPC duels → Evo materials, summon tickets</li>
          <li>Equipment Dungeons (Lv40+) — only source for gear drops</li>
          <li>Active codes — instant coins, fruits, and balls</li>
        </ul>

        <h2>EXP Fruit farming</h2>
        <ul>
          <li>EXP Dungeon unlocks at Lv10 in Petal Pond</li>
          <li>Weekly large EXP Fruits from daily quest streaks</li>
          <li>Redeem codes before long grind sessions</li>
        </ul>

        <h2>Related</h2>
        <ul>
          <li><Link href="/codes" className="text-emerald-300 hover:underline">Active codes</Link></li>
          <li><Link href="/guides/level-30" className="text-emerald-300 hover:underline">Level 30 guide</Link></li>
        </ul>
      </div>
    </main>
  );
}
