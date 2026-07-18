import type { Metadata } from "next";
import Link from "next/link";
import { PageBack, pageLeadClass, pageMainClass, pageTitleClass } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";
import { MAP_ZONES_LAST_CHECKED, mapZones, type MapSpawnRole } from "@/data/map-zones";
import { PAGE_SEO } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.mapZones();

const ROLE_LABEL: Record<MapSpawnRole, string> = {
  wild: "Wild",
  "mini-boss": "Mini-boss",
  boss: "Boss",
};

const ROLE_CLASS: Record<MapSpawnRole, string> = {
  wild: "text-zinc-300",
  "mini-boss": "text-amber-300",
  boss: "text-rose-300",
};

export default function MapZonesPage() {
  const pageUrl = canonical("/map-zones");
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Evomon Wiki", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Map Zones", item: pageUrl },
    ],
  };

  return (
    <>
      <StructuredData data={[breadcrumbSchema]} />
      <main className={pageMainClass()}>
        <PageBack href="/" />
        <h1 className={pageTitleClass()}>Map Zones</h1>
        <p className={`${pageLeadClass()} hidden sm:block`}>
          Island-by-island spawn list with level ranges — plan your next catch, then lock a{" "}
          <Link href="/team-builder" className="text-emerald-300 hover:underline">
            5-pet party
          </Link>
          . Last checked {MAP_ZONES_LAST_CHECKED}. Community-sourced; confirm bosses in-game.
        </p>

        <nav aria-label="Jump to zone" className="mt-6 flex flex-wrap gap-2">
          {mapZones.map((zone) => (
            <a
              key={zone.id}
              href={`#${zone.id}`}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300 transition hover:border-emerald-500/40 hover:text-emerald-200"
            >
              {zone.zone != null ? `${zone.zone}. ` : ""}
              {zone.name}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          {mapZones.map((zone) => (
            <section
              key={zone.id}
              id={zone.id}
              className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:scroll-mt-24 sm:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-bold text-white">
                  {zone.zone != null ? (
                    <span className="mr-2 text-sm font-semibold text-zinc-500">Zone {zone.zone}</span>
                  ) : null}
                  {zone.name}
                </h2>
                {zone.levelRange && (
                  <p className="text-sm font-medium tabular-nums text-emerald-300">Lv {zone.levelRange}</p>
                )}
              </div>
              {zone.note && <p className="mt-2 text-sm text-zinc-500">{zone.note}</p>}

              {zone.spawns.length > 0 ? (
                <ul className="mt-4 divide-y divide-white/5">
                  {zone.spawns.map((spawn, i) => {
                    const slug = spawn.name.toLowerCase();
                    return (
                      <li
                        key={`${spawn.name}-${spawn.role}-${spawn.level}-${i}`}
                        className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-sm"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <Link
                            href={`/dex/${slug}`}
                            className="font-medium text-white hover:text-emerald-300 hover:underline"
                          >
                            {spawn.name}
                          </Link>
                          <span className={`text-xs font-semibold uppercase tracking-wide ${ROLE_CLASS[spawn.role]}`}>
                            {ROLE_LABEL[spawn.role]}
                          </span>
                        </div>
                        <span className="tabular-nums text-zinc-400">Lv {spawn.level}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-zinc-500">No Evomon roster documented for this zone yet.</p>
              )}
            </section>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Need a party for the next island? Open the{" "}
          <Link href="/team-builder" className="text-emerald-300 hover:underline">
            team builder
          </Link>{" "}
          or browse the{" "}
          <Link href="/dex" className="text-emerald-300 hover:underline">
            full dex
          </Link>
          .
        </p>
      </main>
    </>
  );
}
