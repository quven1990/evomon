import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.beginnerGuide();

const phases = [
  {
    title: "Early game (Level 0–30)",
    steps: [
      "Claim the 7-day login panel on first join — free Evolution Stones and a Rainbow Summon Ticket on day 7.",
      "Pick Bubble for the easiest Verdant Valley and Lava Crag matchups.",
      "Clear Verdant Valley, Petal Pond, then add Fire or Electric coverage.",
      "Prioritize player level — AFK grinding gives creature EXP, not trainer EXP.",
      "Hit level 30 to unlock your starter's Ultimate ability.",
    ],
  },
  {
    title: "Mid game (Level 30–90)",
    steps: [
      "Complete Ascension quests as soon as they unlock — they raise level caps.",
      "Farm daily quests, EXP Challenge tickets, and Equipment Challenge after level 40.",
      "Evolve your main carry before spending stones on side favorites.",
      "Unlock Equipment Dungeons on Silent Sands at trainer level 40.",
    ],
  },
  {
    title: "Late game (Level 90+)",
    steps: [
      "Push Index completion and hunt Shiny variants with pity in mind (~600 copies).",
      "Stockpile Omni Stones before pushing deep challenge content.",
      "Optimize skills via Daisy NPC in Main City after level 30.",
    ],
  },
];

export default function BeginnerGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Beginner Guide",
        item: canonical("/guides/beginner"),
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Evomon Beginner Guide</h1>
        <p className={pageLeadClass()}>
          A progression-first walkthrough for {GAME.fullName}. Redeem{" "}
          <Link href="/codes" className="text-emerald-300 hover:underline">
            active codes
          </Link>{" "}
          before you grind — free EXP Fruits and Advanced Balls save hours early.
        </p>

        <div className="mt-10 space-y-6">
          {phases.map((phase) => (
            <section key={phase.title} className="rounded-2xl border border-white/10 bg-[#0b1512] p-6">
              <h2 className="text-xl font-semibold text-emerald-300">{phase.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-300">
                {phase.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-[#0b1512]/80 p-6">
          <h2 className="text-xl font-semibold text-white">Daily farming loop</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-zinc-300">
            <li>Clear daily quests first (~2,000 player EXP).</li>
            <li>Spend EXP Challenge tickets in Petal Pond.</li>
            <li>After level 40, run Equipment Challenge on Silent Sands.</li>
            <li>Check for new milestone codes on the official Discord.</li>
          </ol>
        </section>
      </main>
    </>
  );
}
