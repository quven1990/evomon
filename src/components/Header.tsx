import Link from "next/link";
import { ChevronDown, Gamepad2 } from "lucide-react";
import { HeaderBrand } from "@/components/HeaderBrand";
import { MobileHeaderMenu } from "@/components/MobileNav";
import { PlayLink } from "@/components/PlayLink";
import { getHeaderCluster, headerDropdownSections, headerNavItems } from "@/data/navigation";

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

            return (
              <div key={cluster.id} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                >
                  {cluster.id === "mutations" ? "Mutations" : "Tier List"}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="w-64 rounded-xl border border-white/10 bg-[#0a1412]/95 p-2 shadow-2xl backdrop-blur-xl">
                    <ul className="space-y-0.5">
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
                    <div className="mt-1 border-t border-white/10 pt-1">
                      <Link
                        href={cluster.hubHref}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
                      >
                        {cluster.hubLabel} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="group relative">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-semibold text-white transition hover:border-emerald-500/40 hover:bg-emerald-500/10"
            >
              <Gamepad2 className="h-4 w-4 text-emerald-400" />
              More
              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute right-0 top-11 w-[520px] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-[#0a1412]/95 p-4 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-4">
                  {headerDropdownSections.map((section) => (
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
