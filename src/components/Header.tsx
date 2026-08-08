import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { HeaderBrand } from "@/components/HeaderBrand";
import { HeaderMoreMenu } from "@/components/HeaderMoreMenu";
import { MobileHeaderMenu } from "@/components/MobileNav";
import { PlayLink } from "@/components/PlayLink";
import { getHeaderCluster, headerNavItems } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06110f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4">
        <HeaderBrand />

        <nav className="hidden items-center gap-1 lg:flex">
          {headerNavItems.map((item) => {
            if (item.kind === "link") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              );
            }

            const cluster = getHeaderCluster(item.clusterId);
            if (!cluster) return null;

            const navLabel = cluster.id === "mutations" ? "Mutations" : "Tier List";

            return (
              <div key={cluster.id} className="group relative">
                <Link
                  href={cluster.hubHref}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                >
                  {navLabel}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="max-h-[min(24rem,calc(100dvh-5rem))] w-64 overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-[#0a1412]/95 p-2 shadow-2xl backdrop-blur-xl">
                    <Link
                      href={cluster.hubHref}
                      className="block rounded-lg px-3 py-2 transition hover:bg-white/5"
                    >
                      <div className="text-sm font-semibold text-white">{cluster.hubLabel}</div>
                      <div className="text-xs text-zinc-500">Full reference guide</div>
                    </Link>
                    <ul className="mt-1 space-y-0.5 border-t border-white/10 pt-1">
                      {cluster.routes.map((route) => (
                        <li key={route.href}>
                          <Link
                            href={route.href}
                            className="block rounded-lg px-3 py-2 transition hover:bg-emerald-500/10"
                          >
                            <div className="text-sm font-medium text-emerald-300">{route.title}</div>
                            <div className="text-xs text-zinc-500">{route.tag ?? route.description}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          <HeaderMoreMenu />
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <MobileHeaderMenu />
          <PlayLink
            placement="header"
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-sm font-bold text-black shadow-lg shadow-emerald-500/20 transition hover:brightness-110 sm:px-4"
          >
            Play
          </PlayLink>
        </div>
      </div>
    </header>
  );
}
