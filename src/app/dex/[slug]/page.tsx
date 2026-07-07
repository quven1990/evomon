import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DexSourceBadge } from "@/components/Badges";
import { PageBack, pageTitleClass } from "@/components/PageShell";
import { PetAvatar } from "@/components/PetAvatar";
import { dexEntries } from "@/data/dex";
import { elementStyles } from "@/data/type-chart";
import { dexPetMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return dexEntries
    .filter((e) => e.name)
    .map((e) => ({ slug: e.name!.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = dexEntries.find((e) => e.name?.toLowerCase() === slug);
  if (!entry?.name) return { title: "Evomon Not Found" };
  return dexPetMetadata({
    name: entry.name,
    number: entry.number,
    element: entry.element,
    tier: entry.tier,
  });
}

export default async function DexDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = dexEntries.find((e) => e.name?.toLowerCase() === slug);
  if (!entry?.name) notFound();

  const styles = elementStyles[entry.element];
  const line = dexEntries.filter(
    (e) =>
      e.name &&
      e.number >= entry.number - 2 &&
      e.number <= entry.number + 2 &&
      e.element === entry.element,
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
      <PageBack href="/dex" label="Dex" />

      <div className="mt-6 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
        <PetAvatar entry={entry} size="2xl" priority />
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            #{String(entry.number).padStart(3, "0")}
          </p>
          <h1 className={pageTitleClass()}>{entry.name}</h1>
          <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
            <span className={`rounded-full px-3 py-1 text-sm ${styles.bg} ${styles.text}`}>{entry.element}</span>
            {entry.tier && (
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-bold text-amber-300">
                {entry.tier} Tier
              </span>
            )}
            <DexSourceBadge source={entry.source} />
          </div>
        </div>
      </div>

      <div className="prose-wiki mt-10">
        <p>
          {entry.name} is entry #{entry.number} in the Roblox Evomon dex. Element: {entry.element}.
          {entry.tier ? ` Community tier signal: ${entry.tier}.` : " Tier ranking pending more in-game data."}
        </p>
        <h2>Same-element neighbors (unconfirmed)</h2>
        <p className="text-sm text-zinc-500">
          Nearby dex numbers with the same element — not a confirmed evolution chain. Check in-game
          or community wikis before spending evolution stones.
        </p>
        <ul>
          {line.map((e) => (
            <li key={e.number}>
              {e.name === entry.name ? (
                <strong>{e.name} (#{e.number})</strong>
              ) : (
                <Link href={`/dex/${e.name!.toLowerCase()}`} className="text-emerald-300 hover:underline">
                  {e.name} (#{e.number})
                </Link>
              )}
            </li>
          ))}
        </ul>
        <h2>Related pages</h2>
        <ul>
          <li>
            <Link href={`/team-builder?t=${slug}`} className="text-emerald-300 hover:underline">
              Add to team builder
            </Link>
          </li>
          <li>
            <Link href="/type-chart" className="text-emerald-300 hover:underline">
              Type chart — {entry.element} matchups
            </Link>
          </li>
          <li>
            <Link href="/tier-list" className="text-emerald-300 hover:underline">
              Tier list
            </Link>
          </li>
          <li>
            <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
              Evomon codes
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
