import type { CodeSource } from "@/data/codes";
import type { DexSource } from "@/data/dex";

const codeSourceStyles: Record<CodeSource, string> = {
  official: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  community: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  "third-party": "bg-amber-500/15 text-amber-300 border-amber-500/30",
};

const dexSourceStyles: Record<DexSource, string> = {
  official: "bg-emerald-500/15 text-emerald-300",
  "cross-source": "bg-violet-500/15 text-violet-300",
  community: "bg-sky-500/15 text-sky-300",
  "third-party": "bg-amber-500/15 text-amber-300",
  unpublished: "bg-zinc-700/40 text-zinc-500",
};

export function CodeSourceBadge({ source }: { source: CodeSource }) {
  const labels: Record<CodeSource, string> = {
    official: "Official",
    community: "Community",
    "third-party": "Third-party",
  };
  return (
    <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${codeSourceStyles[source]}`}>
      {labels[source]}
    </span>
  );
}

export function DexSourceBadge({ source }: { source: DexSource }) {
  const labels: Record<DexSource, string> = {
    official: "Official",
    "cross-source": "Cross-source",
    community: "Community",
    "third-party": "Third-party",
    unpublished: "Unpublished",
  };
  return (
    <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${dexSourceStyles[source]}`}>
      {labels[source]}
    </span>
  );
}
