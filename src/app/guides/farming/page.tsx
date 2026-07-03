import type { Metadata } from "next";
import Link from "next/link";
import { DataFreshness } from "@/components/DataFreshness";
import { LoginRewardsGrid } from "@/components/LoginRewardsGrid";
import { PageBack, pageTitleClass } from "@/components/PageShell";
import {
  loginRewardHowTo,
  LOGIN_REWARDS_LAST_CHECKED,
  sevenDayLoginRewards,
} from "@/data/login-rewards";
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
          <li>7-day login rewards — Evolution Stones, Rainbow Egg, Crystals, Summon Ticket (see below)</li>
          <li>Daily quests — ~2,000 player EXP</li>
          <li>EXP Challenge tickets (Petal Pond) — 50 EXP each, 2 free/day</li>
          <li>Equipment Challenge (Silent Sands, Lv40+) — 200 EXP per ticket</li>
        </ol>

        <h2 id="login-rewards" className="scroll-mt-24">
          7-day login rewards
        </h2>
        <DataFreshness label="Checked in-game" date={LOGIN_REWARDS_LAST_CHECKED} />
        <p className="mt-3">{loginRewardHowTo}</p>
        <LoginRewardsGrid rewards={sevenDayLoginRewards} />
        <p className="mt-3 text-sm text-zinc-400">
          Day 7&apos;s Rainbow Summon Ticket is the best pull in the streak — log in daily so you
          don&apos;t reset progress. Rewards are separate from redeem codes on{" "}
          <Link href="/codes" className="text-emerald-300 hover:underline">
            the codes page
          </Link>
          .
        </p>

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
