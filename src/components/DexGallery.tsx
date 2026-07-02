"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { DexCard } from "@/components/DexCard";
import { FilterChips } from "@/components/FilterChips";
import { DataFreshness } from "@/components/DataFreshness";
import { PageBack, pageLeadClass, pageMainClass, pageTitleClass } from "@/components/PageShell";
import { DEX_LAST_CHECKED, dexEntries, dexStats, type ElementType } from "@/data/dex";

const stats = dexStats();
const elements = [...new Set(dexEntries.map((e) => e.element).filter((e) => e !== "Unknown"))].sort();

type Props = {
  initialQuery?: string;
};

export function DexGallery({ initialQuery = "" }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [element, setElement] = useState<ElementType | "all">("all");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const elementChips = useMemo(
    () => [{ id: "all", label: "All" }, ...elements.map((el) => ({ id: el, label: el }))],
    [],
  );

  const filtered = useMemo(() => {
    return dexEntries.filter((entry) => {
      const matchesElement = element === "all" || entry.element === element;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        entry.name?.toLowerCase().includes(q) ||
        String(entry.number).includes(q) ||
        entry.element.toLowerCase().includes(q);
      return matchesElement && matchesQuery;
    });
  }, [query, element]);

  function updateQuery(next: string) {
    setQuery(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next.trim()) params.set("q", next.trim());
    else params.delete("q");
    const qs = params.toString();
    router.replace(qs ? `/dex?${qs}` : "/dex", { scroll: false });
  }

  return (
    <main className={pageMainClass()}>
      <PageBack href="/" />
      <h1 className={pageTitleClass()}>Evomon Dex</h1>
      <p className={pageLeadClass()}>
        Pokedex-style gallery for all {stats.total} numbered slots. {stats.named} creatures named (
        {stats.percent}%). Unknown slots are shown as silhouettes — we don&apos;t invent data.
      </p>
      <div className="mt-4">
        <DataFreshness label="Data checked" date={DEX_LAST_CHECKED} />
      </div>

      <div className="relative mt-8">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          name="q"
          placeholder="Search by name or number..."
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#0b1512] py-3 pl-10 pr-4 text-base text-white placeholder:text-zinc-600 focus:border-emerald-500/50 focus:outline-none"
        />
      </div>

      <FilterChips
        className="mt-4"
        chips={elementChips}
        activeId={element}
        onSelect={(id) => setElement(id as ElementType | "all")}
      />

      <p className="mt-4 text-sm text-zinc-500">
        Showing {filtered.length} of {stats.total} slots
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((entry) => (
          <DexCard key={entry.number} entry={entry} />
        ))}
      </div>
    </main>
  );
}
