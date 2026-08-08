"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Gamepad2 } from "lucide-react";
import { headerDropdownSections } from "@/data/navigation";

/**
 * Desktop "More" mega-menu: click to open, panel scrolls internally,
 * page scroll is locked so short viewports can still reach Blog / Tools.
 */
export function HeaderMoreMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const el = rootRef.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (target && !el.contains(target)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("touchstart", onPointer, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("touchstart", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-sm font-semibold text-white transition ${
          open
            ? "border-emerald-500/40 bg-emerald-500/10"
            : "border-white/10 bg-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/10"
        }`}
      >
        <Gamepad2 className="h-4 w-4 text-emerald-400" />
        More
        <ChevronDown
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div
          id={panelId}
          role="menu"
          aria-label="More pages"
          className="absolute right-0 top-11 z-50 w-[min(520px,calc(100vw-2rem))]"
        >
          <div
            className="max-h-[min(32rem,calc(100dvh-5.5rem))] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#0a1412]/98 p-4 shadow-2xl backdrop-blur-xl [scrollbar-gutter:stable]"
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2 gap-4">
              {headerDropdownSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                >
                  <h3 className="text-sm font-bold text-white">{section.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{section.description}</p>
                  <ul className="mt-3 space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          role="menuitem"
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-1.5 transition hover:bg-emerald-500/10"
                        >
                          <div className="text-sm font-medium text-emerald-300">
                            {link.label}
                          </div>
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
      ) : null}
    </div>
  );
}
