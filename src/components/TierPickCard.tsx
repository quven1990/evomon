import type { TierPick } from "@/data/tier-list";
import { PickNameLinked, resolveDexSlug } from "@/lib/dex-link";
import Link from "next/link";

type Props = {
  pick: TierPick;
  compact?: boolean;
};

function teamBuilderSlug(pickName: string): string | null {
  const base = pickName
    .replace(/ line$/i, "")
    .replace(/ quest$/i, "")
    .split(" → ")[0]
    ?.split(" / ")[0]
    ?.trim();
  return base ? resolveDexSlug(base) : null;
}

export function TierPickCard({ pick, compact }: Props) {
  const tbSlug = teamBuilderSlug(pick.name);

  return (
    <article
      className={`rounded-xl border border-white/10 bg-[#0b1512] ${
        compact ? "p-4" : "p-4 sm:p-5"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
            <PickNameLinked name={pick.name} />
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{pick.types}</span>
            <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              {pick.role}
            </span>
            {tbSlug ? (
              <Link
                href={`/team-builder?t=${tbSlug}`}
                className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20"
              >
                Build team
              </Link>
            ) : null}
          </div>
        </div>
        {pick.obtain ? (
          <p className="shrink-0 text-xs font-medium text-emerald-400 sm:max-w-[11rem] sm:text-right">
            {pick.obtain}
          </p>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{pick.why}</p>
    </article>
  );
}
