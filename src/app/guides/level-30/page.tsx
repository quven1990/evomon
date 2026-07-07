import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageTitleClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.level30Guide();

export default function Level30GuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
      <PageBack href="/" />
      <h1 className={pageTitleClass()}>Level 30 & Endgame Guide</h1>

      <div className="prose-wiki mt-6">
        <p>
          Level 30 is your first major power spike in Evomon. Your main carry unlocks its Ultimate
          ability, and Ascension becomes the gate for higher level caps.
        </p>

        <h2>Before level 30</h2>
        <ul>
          <li>Commit resources to one carry (usually Bubble line for early islands).</li>
          <li>Clear Verdant Valley → Petal Pond → Lava Crag with type coverage.</li>
          <li>Prioritize player level — daily quests give trainer EXP, AFK does not.</li>
          <li>Redeem all active codes for EXP Fruits and Advanced Balls.</li>
        </ul>

        <h2>At level 30</h2>
        <ul>
          <li>Ultimate Gauge unlocks — plan burst windows around boss fights.</li>
          <li>Start Ascension questline immediately to raise level caps.</li>
          <li>Visit Daisy NPC in Main City for additional skills post-30.</li>
        </ul>

        <h2 id="equipment-dungeons">Level 40+ — Equipment Dungeons</h2>
        <ul>
          <li>Silent Sands unlocks Equipment Dungeons — core gear faucet.</li>
          <li>Run Equipment Challenge tickets daily (200 player EXP each).</li>
          <li>Enhance only keeper gear; use Refine Stones on Legendary bonus rolls.</li>
        </ul>

        <h2>Related</h2>
        <ul>
          <li><Link href="/guides/farming" className="text-emerald-300 hover:underline">Farming guide</Link></li>
          <li><Link href="/guides/mutations" className="text-emerald-300 hover:underline">Shiny & Sparkle hunting</Link></li>
          <li><Link href="/tier-list" className="text-emerald-300 hover:underline">Tier list</Link></li>
        </ul>
      </div>
    </main>
  );
}
