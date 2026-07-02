import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { TeamBuilder } from "@/components/TeamBuilder";
import { PageBack, pageLeadClass, pageMainClass, pageTitleClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = PAGE_SEO.teamBuilder();

export default function TeamBuilderPage() {
  return (
    <main className={pageMainClass()}>
      <PageBack href="/" />
      <h1 className={pageTitleClass()}>Team Builder</h1>
      <p className={`${pageLeadClass()} hidden sm:block`}>
        Build a 3-pet party, analyze element coverage, and share your comp with a link. Pair with the{" "}
        <Link href="/type-chart" className="text-emerald-300 hover:underline">
          type chart
        </Link>{" "}
        when planning dungeons.
      </p>

      <div className="mt-4 sm:mt-8 lg:mt-10">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-white/10 bg-[#0b1512] p-12 text-center text-zinc-500">
              Loading team builder…
            </div>
          }
        >
          <TeamBuilder />
        </Suspense>
      </div>
    </main>
  );
}
