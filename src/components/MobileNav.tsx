"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Grid3x3,
  Home,
  Menu,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { mobileTabLinks, navSections } from "@/data/navigation";
import { PlayLink } from "@/components/PlayLink";
import { GAME } from "@/lib/game";
import { SITE } from "@/lib/site";

const tabIcons = {
  "/": Home,
  "/guides/mutations": Sparkles,
  "/dex": Grid3x3,
  "/tier-list": TrendingUp,
} as const;

type MobileMenuContextValue = {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

function useMobileMenu() {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("useMobileMenu must be used within MobileNavProvider");
  return ctx;
}

function NavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] lg:hidden" role="presentation">
      <button
        type="button"
        aria-label="Close menu"
        className="fixed inset-0 bg-black/75"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed inset-y-0 right-0 z-[201] flex w-[min(100vw,20rem)] flex-col border-l border-white/10 bg-[#06110f] shadow-2xl"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/game-icon.png"
              alt=""
              width={32}
              height={32}
              className="rounded-lg border border-emerald-500/30"
            />
            <span className="text-sm font-bold text-white">{SITE.name}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
          {navSections.map((section) => (
            <div key={section.title} className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">{section.title}</p>
              <ul className="mt-2 space-y-1">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-xl px-3 py-3 transition active:bg-emerald-500/10"
                    >
                      <span className="text-sm font-medium text-emerald-300">{link.label}</span>
                      <span className="mt-0.5 block text-xs text-zinc-500">{link.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="shrink-0 border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <PlayLink
            placement="mobile-menu"
            className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-sm font-bold text-black"
          >
            Play Evomon on Roblox
          </PlayLink>
        </div>
      </aside>
    </div>,
    document.body,
  );
}

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <MobileMenuContext.Provider value={{ open, openMenu, closeMenu }}>
      {children}
      <NavDrawer open={open} onClose={closeMenu} />
    </MobileMenuContext.Provider>
  );
}

export function MobileHeaderMenu() {
  const { openMenu } = useMobileMenu();

  return (
    <button
      type="button"
      aria-label="Open menu"
      onClick={openMenu}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-emerald-500/40 lg:hidden"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();
  const { openMenu } = useMobileMenu();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#06110f]/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {mobileTabLinks.map((tab) => {
          const Icon = tabIcons[tab.href as keyof typeof tabIcons];
          const active = tab.match(pathname);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex min-h-[48px] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px] font-medium transition ${
                active ? "text-emerald-400" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? "text-emerald-400" : ""}`} />
              {tab.label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={openMenu}
          aria-label="More pages"
          className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px] font-medium text-zinc-500 transition hover:text-zinc-300"
        >
          <BookOpen className="h-5 w-5" />
          More
        </button>
      </div>
    </nav>
  );
}
