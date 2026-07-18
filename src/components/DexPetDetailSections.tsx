import Link from "next/link";
import { PetAvatar } from "@/components/PetAvatar";
import type { DexEntry } from "@/data/dex";
import { getPetCombat, type PetBaseStats } from "@/data/pet-combat";
import { elementStyles } from "@/data/type-chart";
import {
  buildPetFaqs,
  getElementMatchups,
  getEvolutionLine,
  getPetExtra,
  getSimilarPets,
} from "@/lib/dex-pet";
import { getDexContextLinks } from "@/lib/dex-context-links";

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

function BaseStatsPanel({ name, stats }: { name: string; stats: PetBaseStats }) {
  const max = Math.max(...STAT_ROWS.map((r) => stats[r.key]), 1);
  return (
    <section>
      <h2 className="text-xl font-bold text-white">{name} base stats</h2>
      <p className="mt-2 text-sm text-zinc-500">
        Species base spread before Talent and Nature. Community-sourced — verify in-game before
        investing.
      </p>
      <ul className="mt-4 space-y-2.5">
        {STAT_ROWS.map(({ key, label }) => {
          const value = stats[key];
          const width = Math.round((value / max) * 100);
          return (
            <li key={key} className="grid grid-cols-[4.5rem_2.5rem_1fr] items-center gap-3 text-sm">
              <span className="text-zinc-400">{label}</span>
              <span className="text-right font-semibold tabular-nums text-white">{value}</span>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-emerald-500/70" style={{ width: `${width}%` }} />
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
  const similar = getSimilarPets(entry);
  const matchups = getElementMatchups(entry.element);
  const faqs = buildPetFaqs(entry);
  const contextLinks = getDexContextLinks(slug);
  const styles = elementStyles[entry.element];

  return (
    <div className="mt-10 space-y-10">
      {extra?.blurb && (
        <p className="text-base leading-7 text-zinc-300">{extra.blurb}</p>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
        <div className="space-y-8">
          {combat?.stats && <BaseStatsPanel name={entry.name} stats={combat.stats} />}

          {combat?.traits && combat.traits.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white">Possible traits</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Trait pool this species can roll. Exact rates are not published — treat as a checklist.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {combat.traits.map((trait) => (
                  <li
                    key={trait}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-200"
                  >
                    {trait}
                  </li>
                ))}
              </ul>
            </section>
          )}

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
              <MatchupGroup title="Weak to" hint="2× damage taken" types={matchups.weakTo} tone="bad" />
              <MatchupGroup title="Resists" hint="0.5× damage taken" types={matchups.resists} tone="neutral" />
            </div>
          </section>

          {line.length > 1 && (
            <section>
              <h2 className="text-xl font-bold text-white">{entry.name} evolution line</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Consecutive dex slots with the same element — confirm evolution requirements in-game
                before spending stones.
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
                            #{String(form.number).padStart(3, "0")}
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
              <h2 className="text-xl font-bold text-white">Similar {entry.element} Evomon</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Other confirmed {entry.element} entries in the dex — compare roles on the tier list.
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
                        <p className="text-xs text-zinc-500">#{String(pet.number).padStart(3, "0")}</p>
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
            {entry.tier && (
              <div className="flex justify-between gap-3">
                <dt className="text-zinc-500">Tier signal</dt>
                <dd className="font-medium text-amber-300">{entry.tier}</dd>
              </div>
            )}
            {location && (
              <div>
                <dt className="text-zinc-500">Location</dt>
                <dd className="mt-1 text-zinc-200">{location}</dd>
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
          </dl>
          <div className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
            <Link href={`/team-builder?t=${slug}`} className="block text-emerald-300 hover:underline">
              Add to team builder →
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
