import Link from "next/link";
import { preload } from "react-dom";
import {
  ArrowRight,
  BookOpen,
  Gift,
  Grid3x3,
  Layers,
  Sparkles,
  Swords,
  TrendingUp,
  Users,
} from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { StructuredData } from "@/components/StructuredData";
import { homeMetadata } from "@/lib/seo";
import { activeCodes } from "@/data/codes";
import { dexStats } from "@/data/dex";
import { navSections } from "@/data/navigation";
import { GAME } from "@/lib/game";
import { SITE, canonical, monthYear } from "@/lib/site";

const stats = dexStats();

export const metadata = homeMetadata();

const featureCards = [
  {
    href: "/dex",
    icon: Grid3x3,
    title: "Evomon Dex",
    desc: `${stats.named} named creatures — ${76} with sprites, filter by element.`,
    tag: "With images",
  },
  {
    href: "/codes#codes-list",
    icon: Gift,
    title: "Active Codes",
    desc: "One-click copy, source labels, and redeem troubleshooting.",
    tag: `${activeCodes.length} active`,
  },
  {
    href: "/type-chart",
    icon: Layers,
    title: "Type Chart",
    desc: "Element matchups for team building and island progression.",
    tag: "Interactive",
  },
  {
    href: "/team-builder",
    icon: Users,
    title: "Team Builder",
    desc: "Plan 3-pet parties, check type coverage, share via link.",
    tag: "Interactive",
  },
  {
    href: "/tier-list",
    icon: TrendingUp,
    title: "Tier List",
    desc: "Best starters, early route catches, and role rankings.",
    tag: "Meta",
  },
  {
    href: "/guides/beginner",
    icon: BookOpen,
    title: "Beginner Guide",
    desc: "First 30 minutes through Ascension and daily loops.",
    tag: "New players",
  },
  {
    href: "/guides/mutations",
    icon: Sparkles,
    title: "Shiny & Sparkle",
    desc: "Mutation pity, hunt routes, and when to chase rare forms.",
    tag: "Collectors",
  },
];

export default function HomePage() {
  preload("/images/hero.webp", { as: "image", fetchPriority: "high" });

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/dex?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: GAME.name,
      gamePlatform: GAME.platform,
      url: GAME.robloxUrl,
      author: { "@type": "Organization", name: GAME.developer },
      datePublished: GAME.releaseDate,
    },
  ];

  return (
    <>
      <StructuredData data={schemas} />

      <main>
        <HeroBanner />

        <section className="mx-auto max-w-7xl px-4 py-10">
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { label: "Pet sprites", value: "76+" },
              { label: "Dex slots", value: String(stats.total), href: "/dex" as const },
              { label: "Active codes", value: String(activeCodes.length) },
              { label: "Named", value: String(stats.named), href: "/dex" as const },
            ].map((item) => {
              const inner = (
                <>
                  <dt className="text-xs uppercase tracking-wide text-zinc-500">{item.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-white">{item.value}</dd>
                </>
              );
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-[#0b1512]/60 p-4 text-center"
                >
                  {item.href ? (
                    <Link href={item.href} className="block transition hover:text-emerald-300">
                      {inner}
                    </Link>
                  ) : (
                    inner
                  )}
                </div>
              );
            })}
          </dl>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="text-2xl font-bold text-white">Explore the wiki</h2>
          <p className="mt-2 text-zinc-400">Built like top Evomon fan sites — organized by what players actually search.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-2xl border border-white/10 bg-[#0b1512]/80 p-6 transition hover:border-emerald-500/30 hover:bg-[#0d1915]"
              >
                <div className="flex items-start justify-between">
                  <card.icon className="h-6 w-6 text-emerald-400" />
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                    {card.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-emerald-300">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{card.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400">
                  Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#08110e]/80">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-3">
              {navSections.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-2">
                    <Swords className="h-5 w-5 text-emerald-400" />
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="mt-2 text-sm text-zinc-500">{section.description}</p>
                  <ul className="mt-5 space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="group block rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-emerald-500/20">
                          <div className="font-medium text-emerald-300">{link.label}</div>
                          <div className="mt-1 text-xs text-zinc-500">{link.desc}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold text-white">What is Evomon Wiki?</h2>
          <div className="prose-wiki mt-4 max-w-3xl">
            <p>
              <strong>Evomon Wiki</strong> on {canonical("/")} is an independent fan wiki for Roblox
              Evomon — the{" "}
              <Link href="/dex" className="text-emerald-300 hover:underline">
                Evomon dex
              </Link>{" "}
              lists {stats.named} entries with sprites, plus {activeCodes.length} working codes, an
              interactive type chart, tier list, and beginner guides. Updated {monthYear()}.{" "}
              <Link href="/about" className="text-emerald-300 hover:underline">
                Not affiliated with the developers
              </Link>
              .
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-white">What is Evomon?</h2>
          <div className="prose-wiki mt-4 max-w-3xl">
            <p>
              {GAME.name} is a free Roblox creature-collection RPG by {GAME.developer}. Pick a starter,
              explore islands from Verdant Valley to Silent Sands, evolve your team, hunt Shiny and
              Sparkle variants, and run dungeons with friends.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
