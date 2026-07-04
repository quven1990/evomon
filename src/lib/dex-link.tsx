import Link from "next/link";
import { Fragment } from "react";
import { dexEntries } from "@/data/dex";

const dexSlugs = new Set(
  dexEntries.filter((e) => e.name).map((e) => e.name!.toLowerCase()),
);

/** Tier-list / guide display names that differ from dex entry names. */
const ALIASES: Record<string, string> = {
  dattbug: "datubud",
  vippit: "vipip",
  whispurr: "wispuff",
  gobfish: "gulpfish",
  fluffit: "fluffet",
  homding: "humding",
  mothbun: "mopebun",
  starlu: "starloop",
};

export function resolveDexSlug(displayName: string): string | null {
  const key = displayName.toLowerCase().trim();
  if (dexSlugs.has(key)) return key;
  const aliased = ALIASES[key];
  if (aliased && dexSlugs.has(aliased)) return aliased;
  return null;
}

const linkClass = "text-emerald-300 hover:underline";

export function DexLink({ name }: { name: string }) {
  const slug = resolveDexSlug(name);
  if (!slug) return <>{name}</>;
  return (
    <Link href={`/dex/${slug}`} className={linkClass}>
      {name}
    </Link>
  );
}

/** Link evolution lines, slash lists, and “X line” tier pick titles to dex. */
export function PickNameLinked({ name }: { name: string }) {
  let base = name;
  let suffix = "";

  if (base.endsWith(" line")) {
    base = base.slice(0, -5);
    suffix = " line";
  } else if (base.endsWith(" quest")) {
    base = base.slice(0, -6);
    suffix = " quest";
  }

  if (base.includes(" → ")) {
    const parts = base.split(" → ");
    return (
      <>
        {parts.map((part, i) => (
          <Fragment key={i}>
            {i > 0 && " → "}
            <DexLink name={part.trim()} />
          </Fragment>
        ))}
        {suffix}
      </>
    );
  }

  if (base.includes(" / ")) {
    const parts = base.split(" / ");
    return (
      <>
        {parts.map((part, i) => (
          <Fragment key={i}>
            {i > 0 && " / "}
            <DexLink name={part.trim()} />
          </Fragment>
        ))}
        {suffix}
      </>
    );
  }

  return (
    <>
      <DexLink name={base.trim()} />
      {suffix}
    </>
  );
}
