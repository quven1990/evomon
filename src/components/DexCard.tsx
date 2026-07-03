"use client";

import Link from "next/link";
import { DexSourceBadge } from "@/components/Badges";
import { PetAvatar } from "@/components/PetAvatar";
import type { DexEntry } from "@/data/dex";
import { AnalyticsEvent, track } from "@/lib/analytics";
import { elementStyles } from "@/data/type-chart";

export function DexCard({ entry }: { entry: DexEntry }) {
  const styles = elementStyles[entry.element];
  const displayName = entry.name ?? `Slot ${String(entry.number).padStart(3, "0")}`;
  const unpublished = !entry.name;

  const inner = (
    <article
      className={`group relative overflow-hidden rounded-2xl border ${styles.border} ${unpublished ? "bg-zinc-900/50 opacity-60" : "bg-[#0d1714]/90"} p-4 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/5`}
    >
      <div className="flex justify-center py-2">
        <PetAvatar entry={entry} size="lg" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            #{String(entry.number).padStart(3, "0")}
          </p>
          <h3 className={`mt-0.5 font-semibold ${unpublished ? "text-zinc-500" : "text-white group-hover:text-emerald-300"}`}>
            {displayName}
          </h3>
        </div>
        {entry.tier && (
          <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-xs font-bold text-amber-300">
            {entry.tier}
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-2 py-0.5 text-xs ${styles.bg} ${styles.text}`}>
          {entry.element}
        </span>
        <DexSourceBadge source={entry.source} />
      </div>
    </article>
  );

  if (entry.name) {
    return (
      <Link
        href={`/dex/${entry.name.toLowerCase()}`}
        className="block"
        onClick={() => track(AnalyticsEvent.DEX_PET_CLICK, { pet: entry.name! })}
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
