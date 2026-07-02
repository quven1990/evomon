import Image from "next/image";
import Link from "next/link";
import { FeaturedPets } from "@/components/FeaturedPets";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        {/* Native img: LCP paints without waiting for client hydration */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050c0a] via-[#050c0a]/85 to-[#050c0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c0a] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/game-icon.png"
              alt="Evomon"
              width={56}
              height={56}
              priority
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
              Evomon
            </span>{" "}
            Dex & Wiki
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
            76+ pet sprites, team builder, codes, type chart — a real wiki with pictures, not a text
            stub.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dex"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-500/25"
            >
              Browse Dex
            </Link>
            <Link
              href="/codes"
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
