import Link from "next/link";
import { PetAvatar } from "@/components/PetAvatar";
import type { DexEntry } from "@/data/dex";
import { getPetCombat, type PetBaseStats } from "@/data/pet-combat";
import { elementStyles } from "@/data/type-chart";
import {
  buildPetFaqs,
  getElementMatchups,
  getEvolutionLine,
  getEvolutionStage,
  getPetExtra,
  getPetLeadCopy,
  getPetSpawns,
  getSignatureTraits,
  getSimilarPets,
  getStatArchetype,
} from "@/lib/dex-pet";
import { getDexContextLinks } from "@/lib/dex-context-links";
import { isIndexableDexSlug } from "@/lib/indexing";

function ElementChip({ type }: { type: string }) {
  const styles = elementStyles[type as keyof typeof elementStyles] ?? elementStyles.Unknown;
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${styles.bg} ${styles.text}`}>
      {type}
    </span>
  );
}

function MatchupGroup({
  title,
  hint,
  types,
  tone,
}: {
  title: string;
  hint: string;
  types: string[];
  tone: "good" | "bad" | "neutral";
}) {
  const border =
    tone === "good"
      ? "border-emerald-500/25 bg-emerald-500/5"
      : tone === "bad"
        ? "border-rose-500/25 bg-rose-500/5"
        : "border-white/10 bg-white/[0.02]";

  return (
    <div className={`rounded-xl border p-4 ${border}`}>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <p className="mt-1 text-xs text-zinc-500">{hint}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {types.length > 0 ? (
          types.map((t) => <ElementChip key={t} type={t} />)
        ) : (
          <span className="text-sm text-zinc-500">No chart data yet</span>
        )}
      </div>
    </div>
  );
}

const STAT_ROWS: { key: keyof PetBaseStats; label: string }[] = [
  { key: "hp", label: "HP" },
  { key: "attack", label: "Attack" },
  { key: "defense", label: "Defense" },
  { key: "spAtk", label: "Sp. Atk" },
  { key: "spDef", label: "Sp. Def" },
  { key: "speed", label: "Speed" },
];

function BaseStatsPanel({
  name,
  stats,
}: {
  name: string;
  stats: PetBaseStats;
}) {
  const max = Math.max(...STAT_ROWS.map((r) => stats[r.key]), 1);
  const archetype = getStatArchetype(stats);
  return (
    <section>
      <h2 className="text-xl font-bold text-white">{name} base stats</h2>
      <p className="mt-2 text-sm text-zinc-500">
        Species base spread before Talent and Nature. Community-sourced — verify in-game before
        investing.
      </p>
      <p className="mt-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-sm text-emerald-100/90">
        Build read: <span className="font-semibold text-white">{archetype.label}</span> · peak{" "}
        {archetype.peakStat} {archetype.peakValue} ·{" "}
        {archetype.physicalBias ? "physical" : "special"} bias
      </p>
      <ul className="mt-4 space-y-2.5">
        {STAT_ROWS.map(({ key, label }) => {
          const value = stats[key];
          const width = Math.round((value / max) * 100);
          const isPeak = label === archetype.peakStat;
          return (
            <li key={key} className="grid grid-cols-[4.5rem_2.5rem_1fr] items-center gap-3 text-sm">
              <span className={isPeak ? "font-semibold text-emerald-300" : "text-zinc-400"}>
                {label}
              </span>
              <span className="text-right font-semibold tabular-nums text-white">{value}</span>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${isPeak ? "bg-emerald-400" : "bg-emerald-500/70"}`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function DexPetDetailSections({
  entry,
  slug,
}: {
  entry: DexEntry & { name: string };
  slug: string;
}) {
  const extra = getPetExtra(slug);
  const combat = getPetCombat(slug);
  const location = extra?.location ?? combat?.location;
  const line = getEvolutionLine(entry);
  const stage = getEvolutionStage(entry);
  const similar = getSimilarPets(entry);
  const matchups = getElementMatchups(entry.element);
  const faqs = buildPetFaqs(entry);
  const contextLinks = getDexContextLinks(slug);
  const styles = elementStyles[entry.element];
  const lead = getPetLeadCopy(entry);
  const spawns = getPetSpawns(slug);
  const signatureTraits = getSignatureTraits(combat?.traits);
  const curated = Boolean(extra?.blurb || extra?.faqs?.length);
  const indexable = isIndexableDexSlug(slug);

  return (
    <div className="mt-10 space-y-10">
      <p className="text-base leading-7 text-zinc-300">{lead.blurb}</p>

      {!curated && (
        <p className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-500">
          Route notes for this species are still being filled in. Stats, map spawns, and evolution
          neighbors below are what we can verify today — confirm anything that gates stones in your
          client.
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
        <div className="space-y-8">
          {spawns.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white">Where to catch {entry.name}</h2>
              <p className="mt-2 text-sm text-zinc-500">
                From our{" "}
                <Link href="/map-zones" className="text-emerald-300 hover:underline">
                  map zones
                </Link>{" "}
                chart (community levels — patch notes can shift bands).
              </p>
              <ul className="mt-4 space-y-3">
                {spawns.map((s) => (
                  <li
                    key={`${s.zoneId}-${s.role}-${s.level}`}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <Link
                        href={`/map-zones#${s.zoneId}`}
                        className="font-semibold text-white hover:text-emerald-300"
                      >
                        {s.zoneName}
                      </Link>
                      <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                        {s.role} · ~Lv {s.level}
                      </span>
                    </div>
                    {s.huntTip && <p className="mt-2 text-sm text-zinc-400">{s.huntTip}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {combat?.stats && <BaseStatsPanel name={entry.name} stats={combat.stats} />}

          {combat?.traits && combat.traits.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white">Possible traits</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Trait pool this species can roll. Exact rates are not published — treat as a
                checklist. Full glossary:{" "}
                <Link href="/traits" className="text-emerald-300 hover:underline">
                  Evomon traits
                </Link>
                .
              </p>
              {signatureTraits.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-400/90">
                    Signature / standout
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {signatureTraits.map((trait) => (
                      <li key={trait}>
                        <Link
                          href={`/traits#${trait.toLowerCase()}`}
                          className="inline-block rounded-lg border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-100 hover:bg-emerald-500/25"
                        >
                          {trait}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ul className="mt-4 flex flex-wrap gap-2">
                {combat.traits
                  .filter((t) => !signatureTraits.includes(t))
                  .map((trait) => (
                    <li key={trait}>
                      <Link
                        href={`/traits#${trait.toLowerCase()}`}
                        className="inline-block rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-200 hover:border-emerald-500/40 hover:text-emerald-200"
                      >
                        {trait}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          )}

          {curated || indexable ? (
            <section>
              <h2 className="text-xl font-bold text-white">Element matchups</h2>
              <p className="mt-2 text-sm text-zinc-500">
                How {entry.element} trades damage on the{" "}
                <Link href="/type-chart" className="text-emerald-300 hover:underline">
                  public type chart
                </Link>
                . Dual-type pets may differ in duels.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <MatchupGroup
                  title="Super effective vs"
                  hint="2× damage dealt"
                  types={matchups.strongAgainst}
                  tone="good"
                />
                <MatchupGroup
                  title="Weak to"
                  hint="2× damage taken"
                  types={matchups.weakTo}
                  tone="bad"
                />
                <MatchupGroup
                  title="Resists"
                  hint="0.5× damage taken"
                  types={matchups.resists}
                  tone="neutral"
                />
              </div>
            </section>
          ) : (
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h2 className="text-lg font-bold text-white">{entry.element} matchups</h2>
              <p className="mt-2 text-sm text-zinc-400">
                {matchups.weakTo.length > 0
                  ? `Weak to ${matchups.weakTo.join(", ")} on the public chart.`
                  : `Open the type chart for ${entry.element} matchups.`}{" "}
                <Link href="/type-chart" className="text-emerald-300 hover:underline">
                  Full type chart →
                </Link>
              </p>
            </section>
          )}

          {line.length > 1 && (
            <section>
              <h2 className="text-xl font-bold text-white">{entry.name} evolution line</h2>
              <p className="mt-2 text-sm text-zinc-500">
                {stage.label}. Consecutive dex slots with the same element — confirm evolution
                requirements in-game before spending stones.
              </p>
              <ol className="mt-4 flex flex-wrap items-center gap-3">
                {line.map((form, i) => {
                  const formSlug = form.name.toLowerCase();
                  const isCurrent = form.name === entry.name;
                  return (
                    <li key={form.number} className="flex items-center gap-3">
                      {i > 0 && <span className="text-zinc-600">→</span>}
                      <Link
                        href={`/dex/${formSlug}`}
                        className={`flex items-center gap-3 rounded-xl border p-3 transition ${
                          isCurrent
                            ? `${styles.border} bg-white/[0.04] ring-1 ring-emerald-500/30`
                            : "border-white/10 bg-white/[0.02] hover:border-emerald-500/30"
                        }`}
                      >
                        <PetAvatar entry={form} size="sm" />
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                            #{String(form.number).padStart(3, "0")} · stage {i + 1}
                          </p>
                          <p className={`font-semibold ${isCurrent ? "text-white" : "text-zinc-200"}`}>
                            {form.name}
                          </p>
                          <p className={`text-xs ${styles.text}`}>{form.element}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </section>
          )}

          {(extra?.evolutionNote || extra?.shinyHuntNote) && (
            <section>
              <h2 className="text-xl font-bold text-white">{entry.name} route notes</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {extra?.evolutionNote && (
                  <div className="rounded-xl border border-white/10 bg-[#0b1512] p-4 sm:p-5">
                    <h3 className="font-semibold text-white">Evolution search answer</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{extra.evolutionNote}</p>
                    <Link
                      href="/tier-list/evolution-priority"
                      className="mt-3 inline-flex text-sm text-emerald-300 hover:underline"
                    >
                      Evolution stone priority →
                    </Link>
                  </div>
                )}
                {extra?.shinyHuntNote && (
                  <div className="rounded-xl border border-violet-300/20 bg-violet-500/10 p-4 sm:p-5">
                    <h3 className="font-semibold text-violet-100">Shiny hunting note</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">{extra.shinyHuntNote}</p>
                    <Link
                      href="/guides/mutations"
                      className="mt-3 inline-flex text-sm text-emerald-300 hover:underline"
                    >
                      Shiny & prismatic guide →
                    </Link>
                  </div>
                )}
              </div>
            </section>
          )}

          {similar.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white">Other {entry.element} options</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Same element, different evolution lines — compare roles on the tier list.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {similar.map((pet) => (
                  <li key={pet.number}>
                    <Link
                      href={`/dex/${pet.name.toLowerCase()}`}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-emerald-500/30"
                    >
                      <PetAvatar entry={pet} size="sm" />
                      <div>
                        <p className="font-medium text-white">{pet.name}</p>
                        <p className="text-xs text-zinc-500">
                          #{String(pet.number).padStart(3, "0")}
                          {pet.tier ? ` · ${pet.tier}` : ""}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-xl font-bold text-white">Common questions about {entry.name}</h2>
            <dl className="mt-4 space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <dt className="font-semibold text-white">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-white/10 bg-[#0b1512] p-5 lg:sticky lg:top-24">
          <h2 className="text-sm font-bold uppercase tracking-wide text-zinc-400">Quick info</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Dex #</dt>
              <dd className="font-medium text-white">{String(entry.number).padStart(3, "0")}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-zinc-500">Element</dt>
              <dd>
                <ElementChip type={entry.element} />
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Evolution</dt>
              <dd className="mt-1 text-zinc-200">{stage.label}</dd>
            </div>
            {entry.tier && (
              <div className="flex justify-between gap-3">
                <dt className="text-zinc-500">Tier signal</dt>
                <dd className="font-medium text-amber-300">{entry.tier}</dd>
              </div>
            )}
            {combat?.stats && (
              <div>
                <dt className="text-zinc-500">Stat read</dt>
                <dd className="mt-1 text-zinc-200">{getStatArchetype(combat.stats).label}</dd>
              </div>
            )}
            {spawns.length > 0 ? (
              <div>
                <dt className="text-zinc-500">Catch</dt>
                <dd className="mt-1 text-zinc-200">
                  {spawns.map((s) => `${s.zoneName} (${s.role})`).join(" · ")}
                </dd>
              </div>
            ) : location ? (
              <div>
                <dt className="text-zinc-500">Location</dt>
                <dd className="mt-1 text-zinc-200">{location}</dd>
              </div>
            ) : null}
            {signatureTraits.length > 0 && (
              <div>
                <dt className="text-zinc-500">Signature traits</dt>
                <dd className="mt-1 text-zinc-200">{signatureTraits.join(", ")}</dd>
              </div>
            )}
            {extra?.weather && (
              <div className="flex justify-between gap-3">
                <dt className="text-zinc-500">Weather</dt>
                <dd className="text-zinc-200">{extra.weather}</dd>
              </div>
            )}
            {extra?.role && (
              <div>
                <dt className="text-zinc-500">Role</dt>
                <dd className="mt-1 text-zinc-200">{extra.role}</dd>
              </div>
            )}
            {combat?.stats && (
              <div>
                <dt className="text-zinc-500">BST</dt>
                <dd className="mt-1 font-medium tabular-nums text-white">
                  {combat.stats.hp +
                    combat.stats.attack +
                    combat.stats.defense +
                    combat.stats.spAtk +
                    combat.stats.spDef +
                    combat.stats.speed}
                </dd>
              </div>
            )}
            <div>
              <dt className="text-zinc-500">Data</dt>
              <dd className="mt-1 text-xs text-zinc-400">
                {combat?.stats ? "Community stats ✓" : "Stats pending"}
                {" · "}
                {spawns.length > 0 ? "Map spawn ✓" : "Map spawn —"}
                {" · "}
                {curated ? "Route notes ✓" : "Route notes pending"}
              </dd>
            </div>
          </dl>
          <div className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
            <Link
              href={`/team-builder?t=${slug}`}
              className="flex min-h-[44px] items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3 py-2.5 text-center text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/25"
            >
              Add to team builder
            </Link>
            <Link href="/map-zones" className="block text-emerald-300 hover:underline">
              Map zones →
            </Link>
            <Link href="/type-chart" className="block text-emerald-300 hover:underline">
              {entry.element} type chart →
            </Link>
            <Link href="/tier-list" className="block text-emerald-300 hover:underline">
              Tier list →
            </Link>
            {contextLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-emerald-300 hover:underline">
                {link.label}
              </Link>
            ))}
            {slug === "bubble" || slug === "blazpup" || slug === "leafbun" ? (
              <Link href="/starters" className="block text-emerald-300 hover:underline">
                Best starters guide →
              </Link>
            ) : null}
          </div>
        </aside>
      </div>

      <section className="prose-wiki border-t border-white/10 pt-8">
        <h2>More on evomon.cc</h2>
        <ul>
          <li>
            <Link href="/dex" className="text-emerald-300 hover:underline">
              Full Evomon dex gallery
            </Link>
          </li>
          <li>
            <Link href="/map-zones" className="text-emerald-300 hover:underline">
              Map zones & spawn levels
            </Link>
          </li>
          <li>
            <Link href="/codes#codes-list" className="text-emerald-300 hover:underline">
              Active Evomon codes
            </Link>
          </li>
          <li>
            <Link href="/guides/beginner" className="text-emerald-300 hover:underline">
              Beginner progression guide
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export { buildPetFaqs };
