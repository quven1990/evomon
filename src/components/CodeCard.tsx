import { CodeSourceBadge } from "@/components/Badges";
import { CopyButton } from "@/components/CopyButton";
import type { CodeEntry } from "@/data/codes";

type Props = {
  entry: CodeEntry;
  featured?: boolean;
  placement?: "featured" | "highlight" | "list" | "table";
};

export function CodeCard({ entry, featured = false, placement = "list" }: Props) {
  if (featured) {
    return (
      <article className="flex flex-col rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-500/[0.08] to-[#0b1512] p-4 shadow-[0_0_24px_rgba(16,185,129,0.08)]">
        <div className="flex items-start justify-between gap-2">
          <code className="font-mono text-xl font-black tracking-tight text-emerald-300">{entry.code}</code>
          <CodeSourceBadge source={entry.source} />
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-300">{entry.reward}</p>
        {entry.sourceNote && <p className="mt-1 text-xs text-zinc-500">{entry.sourceNote}</p>}
        <div className="mt-4">
          <CopyButton code={entry.code} size="lg" source={entry.source} placement={placement} />
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-xl border border-white/10 bg-[#0b1512]/80 p-4 transition hover:border-white/15">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <code className="font-mono text-lg font-bold text-emerald-300">{entry.code}</code>
          <p className="mt-1.5 text-sm leading-6 text-zinc-400">{entry.reward}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <CodeSourceBadge source={entry.source} />
            {entry.sourceNote && <span className="text-xs text-zinc-600">{entry.sourceNote}</span>}
          </div>
        </div>
        <CopyButton code={entry.code} source={entry.source} placement={placement} />
      </div>
    </article>
  );
}
