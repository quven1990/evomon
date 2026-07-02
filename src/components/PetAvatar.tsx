"use client";

import { useMemo, useState } from "react";
import type { DexEntry } from "@/data/dex";
import { getPetImageCandidates } from "@/lib/pet-images";
import { elementStyles } from "@/data/type-chart";

type Props = {
  entry: Pick<DexEntry, "number" | "name" | "element">;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { box: "h-14 w-14", text: "text-sm" },
  md: { box: "h-20 w-20", text: "text-lg" },
  lg: { box: "h-28 w-28", text: "text-2xl" },
  xl: { box: "h-36 w-36", text: "text-3xl" },
  "2xl": { box: "h-44 w-44", text: "text-4xl" },
};

export function PetAvatar({ entry, size = "md", className = "", priority = false }: Props) {
  const candidates = useMemo(() => getPetImageCandidates(entry), [entry]);
  const [index, setIndex] = useState(0);
  const styles = elementStyles[entry.element];
  const dim = sizes[size];
  const src = candidates[index];
  const showImage = Boolean(entry.name && src && index < candidates.length);
  const initials = entry.name ? entry.name.slice(0, 2).toUpperCase() : "?";

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${styles.border} bg-gradient-to-b from-white/[0.06] to-black/40 ${dim.box} ${className}`}
    >
      {showImage ? (
        // Native img: reliable multi-URL fallback (next/image onError is flaky for remotes)
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={entry.name ?? `Evomon #${entry.number}`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-[88%] w-[88%] object-contain drop-shadow-lg"
          onError={() => setIndex((i) => i + 1)}
        />
      ) : (
        <span className={`font-black ${styles.text} ${dim.text}`}>{initials}</span>
      )}
    </div>
  );
}
