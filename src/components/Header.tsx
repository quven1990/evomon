import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Gamepad2 } from "lucide-react";
import { MobileHeaderMenu } from "@/components/MobileNav";
import { navSections } from "@/data/navigation";
import { GAME } from "@/lib/game";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06110f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/images/game-icon.png"
            alt="Evomon"
            width={36}
            height={36}
            className="shrink-0 rounded-xl border border-emerald-500/30 shadow-[0_0_16px_rgba(16,185,129,0.2)]"
          />
          <div className="min-w-0">
            <div className="truncate bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-lg font-bold tracking-tight text-transparent">
              {SITE.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{SITE.domain}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white transition hover:border-emerald-500/40 hover:bg-emerald-500/10"
            >
              <Gamepad2 className="h-4 w-4 text-emerald-400" />
              Guides
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-11 w-[720px] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-[#0a1412]/95 p-4 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-4">
                  {navSections.map((section) => (
                    <div key={section.title} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <h3 className="text-sm font-bold text-white">{section.title}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{section.description}</p>
                      <ul className="mt-3 space-y-2">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-lg px-2 py-1.5 transition hover:bg-emerald-500/10"
                            >
                              <div className="text-sm font-medium text-emerald-300">{link.label}</div>
                              <div className="text-xs text-zinc-500">{link.desc}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/dex" className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
            Dex
          </Link>
          <Link href="/codes" className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
            Codes
          </Link>
          <Link href="/team-builder" className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
            Team Builder
          </Link>
          <Link href="/tier-list" className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
            Tier List
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <MobileHeaderMenu />
          <a
            href={GAME.robloxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-sm font-bold text-black shadow-lg shadow-emerald-500/20 transition hover:brightness-110 sm:px-4"
          >
            Play
          </a>
        </div>
      </div>
    </header>
  );
}
