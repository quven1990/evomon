"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Shield, Swords } from "lucide-react";
import { TypeChartMatchupButton, isTypeChartType } from "@/components/TypeChartTypeLink";
import type { ElementType } from "@/data/dex";
import {
  TYPE_CHART_NOTES,
  TYPE_CHART_TYPES,
  elementStyles,
  getStrongAgainst,
  getWeakTo,
} from "@/data/type-chart";
import { AnalyticsEvent, track } from "@/lib/analytics";

function TypeChip({ type, active, onSelect, size = "md" }: {
  type: ElementType;
  active: boolean;
  onSelect: (type: ElementType) => void;
  size?: "sm" | "md";
}) {
  const styles = elementStyles[type];
  const sizeClass =
    size === "sm"
      ? "min-h-[44px] px-3 py-2 text-xs"
      : "min-h-[44px] px-4 py-2.5 text-sm";

  return (
    <button
      type="button"
      data-active={active ? "true" : undefined}
      aria-pressed={active}
      aria-label={`Show ${type} matchups`}
      onClick={() => onSelect(type)}
      className={`shrink-0 cursor-pointer rounded-xl border font-semibold transition ${sizeClass} ${
        active
          ? `${styles.bg} ${styles.text} ${styles.border} ring-2 ring-emerald-500/40`
          : `border-white/10 bg-[#0b1512] text-zinc-300 hover:border-white/20 hover:text-white`
      }`}
    >
      {type}
    </button>
  );
}

function MatchupList({
  title,
  hint,
  tone,
  types,
  onPick,
}: {
  title: string;
  hint: string;
  tone: "good" | "bad";
  types: ElementType[];
  onPick: (type: ElementType) => void;
}) {
  const titleClass = tone === "good" ? "text-emerald-400" : "text-rose-400";
  const Icon = tone === "good" ? Swords : Shield;

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1512] p-4 sm:p-5">
      <div className="pointer-events-none flex items-center gap-2">
        <Icon className={`h-4 w-4 shrink-0 ${titleClass}`} aria-hidden />
        <p className={`text-xs font-bold uppercase tracking-wide ${titleClass}`}>{title}</p>
      </div>
      <p className="mt-2 text-sm text-zinc-500">{hint}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {types.length ? (
          types.map((type) => (
            <TypeChartMatchupButton key={type} type={type} onPick={onPick} />
          ))
        ) : (
          <p className="text-sm text-zinc-500">No entries in chart.</p>
        )}
      </div>
    </div>
  );
}

export function TypeChartExplorer() {
  const searchParams = useSearchParams();
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const initial = searchParams.get("type");
  const [selected, setSelected] = useState<ElementType>(() =>
    initial && isTypeChartType(initial) ? initial : "Fire",
  );

  useEffect(() => {
    const param = searchParams.get("type");
    if (param && isTypeChartType(param) && param !== selected) setSelected(param);
  }, [searchParams, selected]);

  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const activeChip = container.querySelector('[data-active="true"]');
    if (activeChip instanceof HTMLElement) {
      activeChip.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [selected]);

  const strong = useMemo(() => getStrongAgainst(selected), [selected]);
  const counters = useMemo(() => getWeakTo(selected), [selected]);
  const styles = elementStyles[selected];
  const note = TYPE_CHART_NOTES[selected];

  function selectType(type: ElementType) {
    setSelected(type);
    track(AnalyticsEvent.TYPE_SELECT, { type });
    const params = new URLSearchParams(window.location.search);
    params.set("type", type);
    const qs = params.toString();
    const nextUrl = `${window.location.pathname}?${qs}#lookup`;
    window.history.replaceState(null, "", nextUrl);
  }

  return (
    <div className="mt-4 lg:mt-6 lg:grid lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-8 lg:items-start">
      <div className="lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Select type</p>
        <p className="mt-1 text-xs text-zinc-600 lg:hidden">Swipe the row — tap a type to update matchups.</p>
        <div
          ref={mobileScrollRef}
          className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TYPE_CHART_TYPES.map((type) => (
            <TypeChip key={type} type={type} active={type === selected} onSelect={selectType} size="sm" />
          ))}
        </div>
        <div className="mt-3 hidden grid-cols-2 gap-2 lg:grid">
          {TYPE_CHART_TYPES.map((type) => (
            <TypeChip key={type} type={type} active={type === selected} onSelect={selectType} />
          ))}
        </div>
      </div>

      <div>
        <div className={`rounded-2xl border ${styles.border} bg-gradient-to-br from-white/[0.04] to-[#0b1512] p-4 sm:p-6`}>
          <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Matchups for</p>
          <h2 className={`mt-1 text-3xl font-black sm:text-4xl ${styles.text}`}>{selected}</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Tap a <strong className="font-semibold text-zinc-300">colored type button</strong> below to
            switch — labels are not clickable. Dual-type Evomons may differ in duels.
          </p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <MatchupList
            title={`${selected} — super effective`}
            hint="Tap a type to view its matchups."
            tone="good"
            types={strong}
            onPick={selectType}
          />
          <MatchupList
            title={`Counters vs ${selected}`}
            hint="Tap a counter type to view its matchups."
            tone="bad"
            types={counters}
            onPick={selectType}
          />
        </div>

        {note && (
          <p className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm leading-6 text-zinc-300">
            {note}
          </p>
        )}

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/team-builder"
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-500/30 transition hover:bg-emerald-500/25"
          >
            Check squad coverage
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/guides/beginner#islands"
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Island route guide
          </Link>
        </div>
      </div>
    </div>
  );
}
