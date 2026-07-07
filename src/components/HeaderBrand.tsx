"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { canReturnViaHistory, getBackFallbackPath } from "@/lib/back-navigation";
import { SITE } from "@/lib/site";

export function HeaderBrand() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  function handleBack() {
    if (canReturnViaHistory()) {
      router.back();
      return;
    }
    router.push(getBackFallbackPath(pathname));
  }

  return (
    <div className="flex min-w-0 items-center gap-2">
      {!isHome && (
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back"
          className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-emerald-500/40 active:bg-emerald-500/10 lg:hidden"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
      )}

      <Link href="/" className="flex min-w-0 items-center gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/game-icon.png"
          alt="Evomon"
          width={36}
          height={36}
          loading="eager"
          decoding="async"
          className="shrink-0 rounded-xl border border-emerald-500/30 shadow-[0_0_16px_rgba(16,185,129,0.2)]"
        />
        <div className={`min-w-0 ${isHome ? "" : "hidden sm:block"}`}>
          <div className="truncate bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-lg font-bold tracking-tight text-transparent">
            {SITE.name}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{SITE.domain}</div>
        </div>
      </Link>
    </div>
  );
}
