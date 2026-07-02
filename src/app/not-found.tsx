import Link from "next/link";
import { Gift, Grid3x3, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-6xl font-black text-emerald-500/30">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Page not found</h1>
      <p className="mt-3 text-sm leading-7 text-zinc-400">
        This Evomon wiki page doesn&apos;t exist or was moved.
      </p>
      <div className="mt-8 grid w-full gap-3 sm:grid-cols-3">
        <Link
          href="/"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
        >
          <Home className="h-4 w-4 text-emerald-400" />
          Home
        </Link>
        <Link
          href="/codes"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
        >
          <Gift className="h-4 w-4 text-emerald-400" />
          Codes
        </Link>
        <Link
          href="/dex"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
        >
          <Grid3x3 className="h-4 w-4 text-emerald-400" />
          Dex
        </Link>
      </div>
    </main>
  );
}
