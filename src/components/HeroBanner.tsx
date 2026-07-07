import dynamic from "next/dynamic";
import Link from "next/link";
import { HeroBackground } from "@/components/HeroBackground";
import { activeCodes } from "@/data/codes";
import { dexStats } from "@/data/dex";
import { monthYear } from "@/lib/site";

const FeaturedPets = dynamic(
  () => import("@/components/FeaturedPets").then((m) => ({ default: m.FeaturedPets })),
  {
    loading: () => (
      <div className="flex min-h-[6rem] items-end justify-center gap-2 sm:min-h-[8rem] sm:gap-4 lg:min-h-[8rem]" aria-hidden />
    ),
  },
);

const stats = dexStats();
const monthLabel = monthYear();

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            {/* Plain img — avoid next/image priority preload competing with hero LCP */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/game-icon.png"
              alt="Evomon"
              width={56}
              height={56}
              loading="eager"
              decoding="async"
              className="rounded-2xl border border-emerald-500/30 shadow-lg shadow-emerald-500/20"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">evomon.cc</p>
              <p className="text-sm text-zinc-400">Roblox Creature Collection</p>
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            The{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              Evomon Wiki
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
            {stats.named} dex entries with sprites, {activeCodes.length} working codes, Sparkle guide
            & type chart — updated {monthLabel}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dex"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-500/25"
            >
              Browse Dex
            </Link>
            <Link
              href="/codes#codes-list"
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
            >
              Free Codes
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <FeaturedPets />
        </div>
      </div>

      <div className="relative border-t border-white/5 bg-black/20 px-4 py-6 lg:hidden">
        <FeaturedPets />
      </div>
    </section>
  );
}
