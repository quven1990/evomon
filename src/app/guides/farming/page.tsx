import type { Metadata } from "next";
import Link from "next/link";
import { DataFreshness } from "@/components/DataFreshness";
import { LoginRewardsGrid } from "@/components/LoginRewardsGrid";
import { PageBack, pageLeadClass, pageTitleClass, wikiLinkClass } from "@/components/PageShell";
import {
  loginRewardHowTo,
  LOGIN_REWARDS_LAST_CHECKED,
  sevenDayLoginRewards,
} from "@/data/login-rewards";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.farmingGuide();

const dailyChecklist = [
  { label: "7-day login rewards", href: "#login-rewards", note: "Stones, ticket, crystals" },
  { label: "Daily quests", href: "/guides/beginner#xp", note: "~2,000 player EXP" },
  { label: "EXP Challenge (×2 free)", href: "/guides/beginner#petal-pond", note: "50 EXP each" },
  { label: "Equipment Challenge (Lv40+)", href: "/guides/level-30#equipment-dungeons", note: "200 EXP per ticket" },
] as const;

export default function FarmingGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
      <PageBack href="/" />
      <h1 className={pageTitleClass()}>Farming Guide</h1>
      <p className={pageLeadClass()}>
        Daily player EXP, coins, and materials — the loop to run before long grinds or shiny hunts.
      </p>

      <section
        id="daily"
        className="scroll-mt-28 mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:scroll-mt-24 sm:p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Daily checklist
        </p>
        <p className="mt-2 text-2xl font-bold text-white">~2,500+ player EXP / day</p>
        <ul className="mt-4 space-y-3">
          {dailyChecklist.map((item) => (
            <li key={item.label} className="flex gap-3 text-sm leading-6">
              <span className="mt-0.5 text-emerald-400" aria-hidden>
                □
              </span>
              <span>
                <Link href={item.href} className="font-medium text-emerald-300 hover:underline">
                  {item.label}
                </Link>
                <span className="text-zinc-400"> — {item.note}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-zinc-400">
          Redeem{" "}
          <Link href="/codes#codes-list" className={wikiLinkClass()}>
            Evomon codes
          </Link>{" "}
          first for balls and EXP Fruits — separate from login streak rewards below.
        </p>
      </section>

      <div className="prose-wiki mt-10">
        <h2 id="daily-reset">Daily reset</h2>
        <p>
          Daily quests, challenge tickets, and login streak progress reset on a fixed server schedule
          (community reports align with Roblox&apos;s usual midnight UTC rollover). If a quest looks
          stuck, rejoin a fresh server after reset before spending balls or tickets.
        </p>

        <h2>Daily checklist details</h2>
        <p>
          The fastest daily loop combines quests, challenge tickets, and targeted dungeon runs. Skip
          none of these if you want steady player level growth.
        </p>
        <ol>
          <li>
            <Link href="#login-rewards" className={wikiLinkClass()}>
              7-day login rewards
            </Link>{" "}
            — Evolution Stones, Rainbow Egg, Crystals, Summon Ticket (see below)
          </li>
          <li>
            <Link href="/guides/beginner#xp" className={wikiLinkClass()}>
              Daily quests
            </Link>{" "}
            — ~2,000 player EXP
          </li>
          <li>
            <Link href="/guides/beginner#xp" className={wikiLinkClass()}>
              EXP Challenge
            </Link>{" "}
            tickets (
            <Link href="/guides/beginner#petal-pond" className={wikiLinkClass()}>
              Petal Pond
            </Link>
            ) — 50 EXP each, 2 free/day
          </li>
          <li>
            <Link href="/guides/level-30#equipment-dungeons" className={wikiLinkClass()}>
              Equipment Challenge
            </Link>{" "}
            (
            <Link href="/guides/beginner#silent-sands" className={wikiLinkClass()}>
              Silent Sands
            </Link>
            , Lv40+) — 200 EXP per ticket
          </li>
        </ol>

        <h2 id="login-rewards">7-day login rewards</h2>
        <DataFreshness label="Checked in-game" date={LOGIN_REWARDS_LAST_CHECKED} />
        <p className="mt-3">{loginRewardHowTo}</p>
        <LoginRewardsGrid rewards={sevenDayLoginRewards} />
        <p className="mt-3 text-sm text-zinc-400">
          Day 7&apos;s Rainbow Summon Ticket is the best pull in the streak — log in daily so you
          don&apos;t reset progress. Rewards are separate from redeem codes on{" "}
          <Link href="/codes#codes-list" className={wikiLinkClass()}>
            the Evomon codes page
          </Link>
          .
        </p>

        <h2>Coin & material sources</h2>
        <ul>
          <li>Wild captures and releases → coins + EXP Fruits</li>
          <li>Island bosses and first-clear NPC duels → Evo materials, summon tickets</li>
          <li>Equipment Dungeons (Lv40+) — only source for gear drops</li>
          <li>
            <Link href="/codes#codes-list" className={wikiLinkClass()}>
              Active Evomon codes
            </Link>{" "}
            — instant coins, fruits, and balls
          </li>
        </ul>

        <h2>EXP Fruit farming</h2>
        <ul>
          <li>
            EXP Dungeon unlocks at Lv10 in{" "}
            <Link href="/guides/beginner#petal-pond" className={wikiLinkClass()}>
              Petal Pond
            </Link>
          </li>
          <li>Weekly large EXP Fruits from daily quest streaks</li>
          <li>
            Redeem{" "}
            <Link href="/codes#codes-list" className={wikiLinkClass()}>
              Evomon codes
            </Link>{" "}
            before long grind sessions
          </li>
        </ul>

        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/codes#codes-list" className={wikiLinkClass()}>
              Evomon codes — copy & redeem
            </Link>
          </li>
          <li>
            <Link href="/guides/beginner" className={wikiLinkClass()}>
              Beginner guide — island route
            </Link>
          </li>
          <li>
            <Link href="/guides/level-30" className={wikiLinkClass()}>
              Level 30 guide
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
