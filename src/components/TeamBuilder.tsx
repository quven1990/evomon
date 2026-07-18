"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, ChevronDown, RotateCcw, Share2, Users, X } from "lucide-react";
import { PetAvatar } from "@/components/PetAvatar";
import { FilterChips } from "@/components/FilterChips";
import { dexEntries, type DexEntry } from "@/data/dex";
import { analyzeTeam, TEAM_PRESETS } from "@/lib/team-analysis";
import { AnalyticsEvent, track } from "@/lib/analytics";
import { copyToClipboard } from "@/lib/copy";
import { elementStyles } from "@/data/type-chart";

const SLOT_COUNT = 5;
const namedPets = dexEntries.filter((e) => e.name);

function findBySlug(slug: string): DexEntry | null {
  return namedPets.find((e) => e.name!.toLowerCase() === slug.toLowerCase()) ?? null;
}

function parseTeamFromParam(param: string | null): (DexEntry | null)[] {
  if (!param) return Array(SLOT_COUNT).fill(null);
  const slugs = param.split(",").slice(0, SLOT_COUNT);
  return Array(SLOT_COUNT)
    .fill(null)
    .map((_, i) => (slugs[i] ? findBySlug(slugs[i]) : null));
}

function teamToParam(team: (DexEntry | null)[]): string {
  return team
    .filter(Boolean)
    .map((p) => p!.name!.toLowerCase())
    .join(",");
}

function TeamSlotStrip({
  slots,
  activeSlot,
  onSelectSlot,
  size = "md",
}: {
  slots: (DexEntry | null)[];
  activeSlot: number;
  onSelectSlot: (index: number) => void;
  size?: "sm" | "md";
}) {
  const avatarClass = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const pad = size === "sm" ? "p-1.5" : "p-2";

  return (
    <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
      {slots.map((pet, index) => {
        const isActive = activeSlot === index;
        const isFilled = Boolean(pet);

        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelectSlot(index)}
            className={`relative flex flex-col items-center rounded-xl border ${pad} transition ${
              isActive
                ? "border-emerald-400 bg-emerald-500/15 ring-2 ring-emerald-400/50"
                : isFilled
                  ? "border-emerald-500/40 bg-emerald-500/5"
                  : "border-dashed border-white/20 bg-white/[0.02]"
            }`}
          >
            {isActive && (
              <span className="absolute -top-1.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-500 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-black">
                Edit
              </span>
            )}
            {pet ? (
              <>
                <div className="relative">
                  <PetAvatar entry={pet} size="sm" />
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-black">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                </div>
                <p className="mt-1 w-full truncate text-center text-[10px] font-bold text-white">{pet.name}</p>
              </>
            ) : (
              <>
                <div
                  className={`flex ${avatarClass} items-center justify-center rounded-lg border border-dashed ${
                    isActive ? "border-emerald-400/50 text-emerald-400" : "border-white/15 text-zinc-500"
                  } text-lg`}
                >
                  {index + 1}
                </div>
                <p className={`mt-1 text-[10px] ${isActive ? "font-semibold text-emerald-300" : "text-zinc-500"}`}>
                  Empty
                </p>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}

function PetPickerPanel({
  slots,
  activeSlot,
  query,
  setQuery,
  elementFilter,
  setElementFilter,
  elementChips,
  filteredPets,
  onPick,
  onSelectSlot,
  pickFlash,
}: {
  slots: (DexEntry | null)[];
  activeSlot: number;
  query: string;
  setQuery: (q: string) => void;
  elementFilter: string;
  setElementFilter: (el: string) => void;
  elementChips: { id: string; label: string }[];
  filteredPets: DexEntry[];
  onPick: (pet: DexEntry) => void;
  onSelectSlot: (index: number) => void;
  pickFlash: { slot: number; name: string } | null;
}) {
  const filledCount = slots.filter(Boolean).length;
  const activePet = slots[activeSlot];

  return (
    <>
      <TeamSlotStrip slots={slots} activeSlot={activeSlot} onSelectSlot={onSelectSlot} size="sm" />

      {pickFlash && (
        <div
          key={`${pickFlash.slot}-${pickFlash.name}`}
          className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3 py-2.5"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-black">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </span>
          <p className="text-sm text-white">
            <strong>{pickFlash.name}</strong> added to Slot {pickFlash.slot + 1}
          </p>
        </div>
      )}

      <p className="mt-3 text-sm text-zinc-400">
        {activePet ? (
          <>
            Tap a pet to <strong className="text-white">replace</strong>{" "}
            <strong className="text-emerald-300">{activePet.name}</strong> in Slot {activeSlot + 1}
          </>
        ) : (
          <>
            Choose a pet for <strong className="text-emerald-300">Slot {activeSlot + 1}</strong>
            {filledCount > 0 && (
              <span className="text-zinc-500">
                {" "}
                · {filledCount}/{SLOT_COUNT} filled
              </span>
            )}
          </>
        )}
      </p>
      <input
        type="search"
        placeholder="Search name or number..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-base text-white placeholder:text-zinc-600 focus:border-emerald-500/40 focus:outline-none"
      />
      <FilterChips className="mt-3" chips={elementChips} activeId={elementFilter} onSelect={setElementFilter} />
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
        {filteredPets.slice(0, 48).map((pet) => {
          const teamIndex = slots.findIndex((s) => s?.number === pet.number);
          const onTeam = teamIndex !== -1;
          const isCurrentSlot = teamIndex === activeSlot;

          return (
            <button
              key={pet.number}
              type="button"
              disabled={onTeam && !isCurrentSlot}
              onClick={() => onPick(pet)}
              className={`flex min-h-[56px] items-center gap-2 rounded-xl border p-2.5 text-left transition ${
                isCurrentSlot
                  ? "border-emerald-500/60 bg-emerald-500/15 ring-1 ring-emerald-500/40"
                  : onTeam
                    ? "border-white/5 bg-white/[0.02] opacity-45"
                    : "border-white/5 bg-white/[0.02] active:border-emerald-500/40 active:bg-emerald-500/10"
              }`}
            >
              <PetAvatar entry={pet} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">{pet.name}</p>
                <p className={`text-xs ${elementStyles[pet.element].text}`}>{pet.element}</p>
                {onTeam && (
                  <p className="mt-0.5 text-[10px] font-medium text-emerald-400">
                    {isCurrentSlot ? "Current pick" : `Slot ${teamIndex + 1}`}
                  </p>
                )}
              </div>
              {onTeam && !isCurrentSlot && (
                <Check className="h-4 w-4 shrink-0 text-emerald-500/70" aria-hidden />
              )}
            </button>
          );
        })}
      </div>
      {filteredPets.length > 48 && (
        <p className="mt-3 text-center text-xs text-zinc-500">Narrow search to find more</p>
      )}
      <Link href="/dex" className="mt-4 block text-center text-sm text-emerald-400 hover:underline">
        Browse full dex →
      </Link>
    </>
  );
}

function MobilePickerSheet({
  open,
  onClose,
  filledCount,
  children,
}: {
  open: boolean;
  onClose: () => void;
  filledCount: number;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[150] lg:hidden">
      <button type="button" aria-label="Close picker" className="fixed inset-0 bg-black/60" onClick={onClose} />
      <div className="fixed inset-x-0 bottom-0 z-[151] flex max-h-[min(85vh,640px)] flex-col rounded-t-2xl border-t border-white/10 bg-[#0b1512] shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
          <div>
            <h3 className="font-bold text-white">Build your team</h3>
            <p className="text-xs text-zinc-500">
              {filledCount}/{SLOT_COUNT} slots filled · tap a slot above to switch
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function TypeCoverageBody({ analysis }: { analysis: ReturnType<typeof analyzeTeam> }) {
  return (
    <>
      {analysis.notes.map((note) => (
        <p key={note} className="mt-2 text-sm text-zinc-400">
          {note}
        </p>
      ))}
      {analysis.uniqueElements.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {analysis.uniqueElements.map((el) => (
            <span
              key={el}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${elementStyles[el].bg} ${elementStyles[el].text}`}
            >
              {el}
            </span>
          ))}
        </div>
      )}
      {analysis.offenseGaps.length > 0 && analysis.uniqueElements.length > 0 && (
        <div className="mt-3 border-t border-white/5 pt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Offense gaps</p>
          <p className="mt-1 text-[11px] leading-relaxed text-zinc-500">
            Types your team can&apos;t hit super-effectively.
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-500">
            {analysis.offenseGaps.slice(0, 8).map((g, i) => (
              <span key={g}>
                {i > 0 && <span className="text-zinc-600"> · </span>}
                {g}
              </span>
            ))}
            {analysis.offenseGaps.length > 8 && (
              <span className="text-zinc-600"> · +{analysis.offenseGaps.length - 8} more</span>
            )}
          </p>
        </div>
      )}
      {analysis.defensiveThreats.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-400">Shared weaknesses</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-400">
            {analysis.defensiveThreats.map((t) => (
              <li key={t.threat}>
                <span className={elementStyles[t.threat].text}>{t.threat}</span> hits {t.vulnerableMembers} member
                {t.vulnerableMembers > 1 ? "s" : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function TypeCoverageCard({ analysis }: { analysis: ReturnType<typeof analyzeTeam> }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1512]/80 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-white">Type coverage</h3>
        <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-sm font-bold text-emerald-300">
          {analysis.diversityScore}/100
        </span>
      </div>
      <TypeCoverageBody analysis={analysis} />
    </div>
  );
}

export function TeamBuilder() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [slots, setSlots] = useState<(DexEntry | null)[]>(() =>
    parseTeamFromParam(searchParams.get("t")),
  );
  const [query, setQuery] = useState("");
  const [elementFilter, setElementFilter] = useState<string>("all");
  const [activeSlot, setActiveSlot] = useState(0);
  const [copied, setCopied] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [analysisOpen, setAnalysisOpen] = useState(true);
  const [pickFlash, setPickFlash] = useState<{ slot: number; name: string } | null>(null);

  useEffect(() => {
    const onPopState = () => {
      const param = new URLSearchParams(window.location.search).get("t");
      setSlots(parseTeamFromParam(param));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const nextParam = teamToParam(slots);
    const currentParam = searchParams.get("t") ?? "";
    if (nextParam === currentParam) return;
    const qs = nextParam ? `?t=${nextParam}` : "";
    router.replace(`/team-builder${qs}`, { scroll: false });
  }, [slots, router, searchParams]);

  const analysis = useMemo(() => analyzeTeam(slots), [slots]);

  const filteredPets = useMemo(() => {
    return namedPets.filter((p) => {
      const q = query.toLowerCase();
      const matchQ = !q || p.name!.toLowerCase().includes(q) || String(p.number).includes(q);
      const matchEl = elementFilter === "all" || p.element === elementFilter;
      return matchQ && matchEl;
    });
  }, [query, elementFilter]);

  const elements = useMemo(
    () => [...new Set(namedPets.map((p) => p.element).filter((e) => e !== "Unknown"))].sort(),
    [],
  );

  const elementChips = useMemo(
    () => [{ id: "all", label: "All" }, ...elements.map((el) => ({ id: el, label: el }))],
    [elements],
  );

  function firstEmptySlot(team = slots): number {
    const idx = team.findIndex((s) => !s);
    return idx === -1 ? 0 : idx;
  }

  function openPicker(slotIndex: number) {
    setActiveSlot(slotIndex);
    setPickFlash(null);
    setPickerOpen(true);
  }

  function openPickerForNext() {
    openPicker(firstEmptySlot());
  }

  function assignPet(pet: DexEntry) {
    const slotUsed = activeSlot;
    const nextSlots = [...slots];
    nextSlots[activeSlot] = pet;
    setSlots(nextSlots);
    setPickFlash({ slot: slotUsed, name: pet.name! });

    window.setTimeout(() => setPickFlash(null), 2200);

    const nextEmpty = nextSlots.findIndex((s, i) => i > activeSlot && !s);
    if (nextEmpty !== -1) {
      window.setTimeout(() => setActiveSlot(nextEmpty), 400);
    } else if (nextSlots.every(Boolean)) {
      window.setTimeout(() => setPickerOpen(false), 900);
    }
  }

  function clearSlot(index: number, e?: MouseEvent) {
    e?.stopPropagation();
    setSlots((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  }

  function applyPreset(slugs: string[]) {
    const preset = TEAM_PRESETS.find((p) => p.slugs.join(",") === slugs.join(","));
    if (preset) {
      track(AnalyticsEvent.TEAM_PRESET, { preset: preset.id });
    }
    const team = slugs.map((s) => findBySlug(s)).concat(Array(SLOT_COUNT).fill(null)).slice(0, SLOT_COUNT);
    setSlots(team);
    setPickerOpen(false);
  }

  async function shareTeam() {
    const slugs = slots.filter(Boolean).map((p) => p!.name!.toLowerCase());
    const qs = slugs.length ? `?t=${slugs.join(",")}` : "";
    const url = `${window.location.origin}/team-builder${qs}`;
    const ok = await copyToClipboard(url);
    if (ok) {
      track(AnalyticsEvent.TEAM_SHARE, { pets: String(slugs.length) });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  function clearAll() {
    setSlots(Array(SLOT_COUNT).fill(null));
    setActiveSlot(0);
    setPickerOpen(false);
  }

  const pickerPanel = (
    <PetPickerPanel
      slots={slots}
      activeSlot={activeSlot}
      query={query}
      setQuery={setQuery}
      elementFilter={elementFilter}
      setElementFilter={setElementFilter}
      elementChips={elementChips}
      filteredPets={filteredPets}
      onPick={assignPet}
      onSelectSlot={setActiveSlot}
      pickFlash={pickFlash}
    />
  );

  const filledCount = slots.filter(Boolean).length;

  return (
    <>
      {/* ——— Mobile ——— */}
      <div className="space-y-4 lg:hidden">
        <div className="sticky top-16 z-30 -mx-4 border-b border-white/10 bg-[#06110f]/95 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Users className="h-3.5 w-3.5 text-emerald-400" />
              {slots.filter(Boolean).length}/{SLOT_COUNT} filled
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={shareTeam}
                className="inline-flex min-h-[36px] items-center gap-1 rounded-lg bg-emerald-500/15 px-3 text-xs font-semibold text-emerald-300"
              >
                <Share2 className="h-3.5 w-3.5" />
                {copied ? "Copied" : "Share"}
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex min-h-[36px] items-center gap-1 rounded-lg border border-white/10 px-3 text-xs text-zinc-400"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear
              </button>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {slots.map((pet, index) => {
              const isActive = activeSlot === index && pickerOpen;
              const isFilled = Boolean(pet);

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => openPicker(index)}
                  className={`relative flex flex-col items-center rounded-xl border p-2 transition ${
                    isActive
                      ? "border-emerald-400 bg-emerald-500/15 ring-2 ring-emerald-400/40"
                      : isFilled
                        ? "border-emerald-500/40 bg-emerald-500/8"
                        : "border-dashed border-white/15 bg-[#0b1512]/80"
                  }`}
                >
                  {isFilled && (
                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-black">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                  )}
                  {pet ? (
                    <>
                      <PetAvatar entry={pet} size="sm" />
                      <p className="mt-1.5 w-full truncate text-center text-xs font-bold text-white">{pet.name}</p>
                      <p className={`text-[10px] ${elementStyles[pet.element].text}`}>{pet.element}</p>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => clearSlot(index, e)}
                        onKeyDown={(e) => e.key === "Enter" && clearSlot(index)}
                        className="mt-1 text-[10px] text-zinc-500 underline-offset-2 hover:text-red-400 hover:underline"
                      >
                        Remove
                      </span>
                    </>
                  ) : (
                    <>
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl border border-dashed text-2xl ${
                          isActive
                            ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-400"
                            : "border-emerald-500/25 bg-emerald-500/5 text-emerald-400/70"
                        }`}
                      >
                        +
                      </div>
                      <p
                        className={`mt-1.5 text-[10px] font-medium ${isActive ? "text-emerald-300" : "text-zinc-500"}`}
                      >
                        Slot {index + 1}
                      </p>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => (slots.every(Boolean) ? openPicker(activeSlot) : openPickerForNext())}
            className="mt-3 flex w-full min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-sm font-bold text-black"
          >
            {slots.every(Boolean) ? "Edit team" : filledCount > 0 ? `Add slot ${firstEmptySlot() + 1}` : "Add Evomon"}
          </button>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Quick presets</p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TEAM_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.slugs)}
                className="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-left"
              >
                <div className="text-sm font-medium text-emerald-300">{preset.label}</div>
                <div className="text-xs text-zinc-500">{preset.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0b1512]/80">
          <button
            type="button"
            onClick={() => setAnalysisOpen((o) => !o)}
            className="flex w-full items-center justify-between px-4 py-3 text-left"
          >
            <span className="font-semibold text-white">Type coverage</span>
            <span className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-bold text-emerald-300">
                {analysis.diversityScore}/100
              </span>
              <ChevronDown className={`h-4 w-4 text-zinc-500 transition ${analysisOpen ? "rotate-180" : ""}`} />
            </span>
          </button>
          {analysisOpen && (
            <div className="border-t border-white/10 px-4 py-3">
              <TypeCoverageBody analysis={analysis} />
            </div>
          )}
        </div>

        <MobilePickerSheet open={pickerOpen} onClose={() => setPickerOpen(false)} filledCount={filledCount}>
          {pickerPanel}
        </MobilePickerSheet>
      </div>

      {/* ——— Desktop ——— */}
      <div className="hidden gap-8 lg:grid lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Users className="h-4 w-4 text-emerald-400" />
              {slots.filter(Boolean).length}/{SLOT_COUNT} slots filled
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={shareTeam}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10"
              >
                <Share2 className="h-3.5 w-3.5" />
                {copied ? "Copied!" : "Share team"}
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {slots.map((pet, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlot(index)}
                className={`rounded-2xl border p-4 text-left transition ${
                  activeSlot === index
                    ? "border-emerald-500/50 bg-emerald-500/10 ring-1 ring-emerald-500/30"
                    : "border-white/10 bg-[#0b1512]/80 hover:border-white/20"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Slot {index + 1}</p>
                <div className="mt-3 flex flex-col items-center gap-3">
                  {pet ? (
                    <>
                      <PetAvatar entry={pet} size="lg" />
                      <div className="text-center">
                        <p className="font-bold text-white">{pet.name}</p>
                        <p className={`text-xs ${elementStyles[pet.element].text}`}>{pet.element}</p>
                      </div>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => clearSlot(index, e)}
                        onKeyDown={(e) => e.key === "Enter" && clearSlot(index)}
                        className="text-xs text-zinc-500 hover:text-red-400"
                      >
                        Remove
                      </span>
                    </>
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-dashed border-white/15 text-2xl text-zinc-600">
                      +
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-400">Quick presets</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {TEAM_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset.slugs)}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-left transition hover:border-emerald-500/30"
                >
                  <div className="text-sm font-medium text-emerald-300">{preset.label}</div>
                  <div className="text-xs text-zinc-500">{preset.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <TypeCoverageCard analysis={analysis} />
        </div>

        <aside className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1512]/90 p-4">
          <h3 className="font-bold text-white">Pick Evomon</h3>
          <div className="mt-3">{pickerPanel}</div>
        </aside>
      </div>
    </>
  );
}
