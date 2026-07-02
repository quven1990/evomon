import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageTitleClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.mutationsGuide();

export default function MutationsGuidePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
      <PageBack href="/" />
      <h1 className={pageTitleClass()}>Shiny & Sparkle Guide</h1>

      <div className="prose-wiki mt-6">
        <p>
          Shiny and Sparkle are rare visual variants with different pity systems. Build a working team
          first — chase rare forms after your main route is stable.
        </p>

        <h2>Mutation types</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table>
          <thead>
            <tr>
              <th>Mutation</th>
              <th>Pity (approx.)</th>
              <th>Combat benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shiny</td>
              <td>~600 copies of same Evomon (catch or defeat)</td>
              <td>Yes — stat boost</td>
            </tr>
            <tr>
              <td>Sparkle / Prismatic</td>
              <td>~150 copies of same Evomon</td>
              <td>Cosmetic only</td>
            </tr>
          </tbody>
          </table>
        </div>

        <h2>Hunt planning</h2>
        <ul>
          <li>Don&apos;t evolve a Shiny before confirming the line is worth keeping.</li>
          <li>Target species you&apos;ll actually use in battle, not just index filler.</li>
          <li>Stack Advanced Balls and codes before dedicated hunt sessions.</li>
          <li>Index completion and Shiny hunting overlap in late game — plan routes.</li>
        </ul>

        <h2>Related</h2>
        <ul>
          <li><Link href="/dex" className="text-emerald-300 hover:underline">Browse dex</Link></li>
          <li><Link href="/guides/level-30" className="text-emerald-300 hover:underline">Level 30 guide</Link></li>
        </ul>
      </div>
    </main>
  );
}
