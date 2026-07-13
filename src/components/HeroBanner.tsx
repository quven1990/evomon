import Link from "next/link";
import { HeroBackground } from "@/components/HeroBackground";
import { FeaturedPets } from "@/components/FeaturedPets";
import { FeaturedPetsDesktop } from "@/components/FeaturedPetsDesktop";
import { monthYear } from "@/lib/site";

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
            Unofficial Roblox Evomon wiki — codes, dex, shiny guides & type chart. Updated {monthLabel}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dex"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-500/25"
            >
              Evomon Dex
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
          <FeaturedPetsDesktop />
        </div>
      </div>

      <div className="relative border-t border-white/5 bg-black/20 px-4 py-6 lg:hidden">
        <FeaturedPets imageLoading="lazy" />
      </div>
    </section>
  );
}
