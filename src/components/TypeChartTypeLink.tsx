import Link from "next/link";
import type { ElementType } from "@/data/dex";
import { TYPE_CHART_TYPES, elementStyles } from "@/data/type-chart";

export function isTypeChartType(value: string): value is ElementType {
  return TYPE_CHART_TYPES.includes(value as ElementType);
}

const pillBase =
  "inline-flex items-center justify-center rounded-full font-semibold ring-1 ring-white/15 transition hover:brightness-110 hover:ring-emerald-500/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400";

type TypeChartTypeLinkProps = {
  type: ElementType;
  size?: "sm" | "md";
  className?: string;
};

/** Links to the interactive lookup with this type pre-selected. */
export function TypeChartTypeLink({ type, size = "md", className = "" }: TypeChartTypeLinkProps) {
  const styles = elementStyles[type];
  const sizeClass =
    size === "sm" ? "min-h-[36px] px-2.5 py-1 text-xs" : "min-h-[44px] px-3.5 py-2 text-sm";

  return (
    <Link
      href={`/type-chart?type=${type}#lookup`}
      className={`${pillBase} ${styles.bg} ${styles.text} ${sizeClass} ${className}`}
    >
      {type}
    </Link>
  );
}

export function TypeChartTypeLinkList({
  types,
  size = "sm",
}: {
  types: ElementType[];
  size?: "sm" | "md";
}) {
  if (!types.length) return <span className="text-sm text-zinc-500">—</span>;

  return (
    <span className="inline-flex flex-wrap gap-1.5">
      {types.map((type) => (
        <TypeChartTypeLink key={type} type={type} size={size} />
      ))}
    </span>
  );
}

type TypeChartMatchupButtonProps = {
  type: ElementType;
  onPick: (type: ElementType) => void;
};

/** In-explorer pill — instant switch without full navigation. */
export function TypeChartMatchupButton({ type, onPick }: TypeChartMatchupButtonProps) {
  const styles = elementStyles[type];

  return (
    <button
      type="button"
      onClick={() => onPick(type)}
      aria-label={`Show ${type} type matchups`}
      className={`${pillBase} cursor-pointer ${styles.bg} ${styles.text} min-h-[44px] px-3.5 py-2 text-sm`}
    >
      {type}
    </button>
  );
}
