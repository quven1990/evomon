"use client";

type Chip = {
  id: string;
  label: string;
};

type Props = {
  chips: Chip[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
};

/** Horizontally scrollable filter chips — mobile-friendly touch targets */
export function FilterChips({ chips, activeId, onSelect, className = "" }: Props) {
  return (
    <div
      className={`flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {chips.map((chip) => {
        const active = chip.id === activeId;
        return (
          <button
            key={chip.id}
            type="button"
            onClick={() => onSelect(chip.id)}
            className={`shrink-0 rounded-lg px-3 py-2.5 text-xs font-medium transition ${
              active ? "bg-emerald-500 text-black" : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}
