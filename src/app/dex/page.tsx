import { Suspense } from "react";
import Link from "next/link";
import { DexGallery } from "@/components/DexGallery";
import { StructuredData } from "@/components/StructuredData";
import { DEX_LAST_CHECKED, DEX_TOTAL_SLOTS, dexStats } from "@/data/dex";
import { dexGalleryFaqs, dexGallerySchemas, elementCounts } from "@/lib/dex-gallery-schema";

const stats = dexStats();
const byElement = elementCounts();

export default function DexPage() {
  return (
    <>
      <StructuredData data={dexGallerySchemas()} />

      <Suspense
        fallback={
          <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
            <p className="text-zinc-500">Loading dex…</p>
          </main>
        }
      >
        <DexGallery />
      </Suspense>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-4 py-10 sm:py-12">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Evomon pokedex facts
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
          This gallery is the unofficial Roblox Evomon dex / pokedex on evomon.cc:{" "}
          <strong className="font-semibold text-zinc-200">{DEX_TOTAL_SLOTS} numbered slots</strong>,{" "}
          <strong className="font-semibold text-zinc-200">{stats.named} named</strong> ({stats.percent}
          %), last checked <time dateTime={DEX_LAST_CHECKED}>{DEX_LAST_CHECKED}</time>. Filter by
          element or search by name/number above; open a card for the pet page when one exists.
        </p>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Total slots</dt>
            <dd className="mt-1 text-2xl font-bold text-white">{DEX_TOTAL_SLOTS}</dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Named pets</dt>
            <dd className="mt-1 text-2xl font-bold text-white">{stats.named}</dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Named coverage</dt>
            <dd className="mt-1 text-2xl font-bold text-white">{stats.percent}%</dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0b1512] p-4">
            <dt className="text-xs uppercase tracking-wide text-zinc-500">Data checked</dt>
            <dd className="mt-1 text-2xl font-bold text-white">{DEX_LAST_CHECKED}</dd>
          </div>
        </dl>

        <h3 className="mt-10 text-lg font-semibold text-white">Pets by element</h3>
        <p className="mt-2 text-sm text-zinc-500">
          Counts include every filled slot with a known element (unknown/silhouette slots excluded).
          Use the chips above to filter the gallery, or open the{" "}
          <Link href="/type-chart" className="text-emerald-300 hover:underline">
            type chart
          </Link>{" "}
          for matchups.
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {byElement.map((row) => (
            <li
              key={row.element}
              className="rounded-lg border border-white/10 bg-[#0b1512] px-3 py-2 text-sm text-zinc-300"
            >
              <span className="font-medium text-white">{row.element}</span>
              <span className="float-right text-zinc-500">{row.count}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-lg font-semibold text-white">Dex FAQ</h3>
        <div className="mt-4 space-y-4">
          {dexGalleryFaqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5">
              <h4 className="font-semibold text-white">{faq.q}</h4>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Related:{" "}
          <Link href="/starters" className="text-emerald-300 hover:underline">
            Starters
          </Link>
          {" · "}
          <Link href="/map-zones" className="text-emerald-300 hover:underline">
            Map zones
          </Link>
          {" · "}
          <Link href="/tier-list" className="text-emerald-300 hover:underline">
            Tier list
          </Link>
          {" · "}
          <Link href="/team-builder" className="text-emerald-300 hover:underline">
            Team builder
          </Link>
        </p>
      </section>
    </>
  );
}
