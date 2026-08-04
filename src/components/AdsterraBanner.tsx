"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ADSTERRA_BANNER, isAdsterraBannerEnabled } from "@/lib/adsterra";
import { shouldShowDisplayAds } from "@/lib/display-ads";

type Props = {
  className?: string;
};

/**
 * Adsterra 300×250 via a real HTML iframe (`/ads/adsterra-300x250.html`).
 *
 * Why not inject invoke.js into React?
 * Adsterra's sync invoke.js relies on document.write during page parse.
 * Dynamically appending it after hydration leaves an empty box.
 *
 * Still gated: first interaction + near-viewport. Banner only.
 */
export function AdsterraBanner({ className = "" }: Props) {
  const pathname = usePathname();
  const reactId = useId().replace(/:/g, "");
  const hostRef = useRef<HTMLDivElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [near, setNear] = useState(false);

  const enabled = isAdsterraBannerEnabled() && shouldShowDisplayAds(pathname);
  const { width, height } = ADSTERRA_BANNER;
  const show = enabled && allowed && near;

  useEffect(() => {
    if (!enabled) return;

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      setAllowed(true);
    };

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    const opts: AddEventListenerOptions = { capture: true, passive: true, once: true };
    events.forEach((event) => window.addEventListener(event, start, opts));

    return () => {
      events.forEach((event) => window.removeEventListener(event, start, opts));
    };
  }, [enabled, pathname]);

  useEffect(() => {
    if (!enabled || !hostRef.current) return;
    setNear(false);

    const node = hostRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <aside
      ref={hostRef}
      className={`mx-auto flex w-full flex-col items-center ${className}`}
      style={{ maxWidth: width }}
      aria-label="Advertisement"
      data-ad-slot={reactId}
    >
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-600">Ad</p>
      <div
        className="flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0b1512]"
        style={{ width: "100%", maxWidth: width, height, minHeight: height }}
      >
        {show ? (
          <iframe
            title="Advertisement"
            src={`/ads/adsterra-300x250.html?v=2`}
            width={width}
            height={height}
            scrolling="no"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 bg-[#0b1512]"
            style={{ width, height, maxWidth: "100%" }}
          />
        ) : (
          <span className="px-3 text-center text-xs text-zinc-600">Ad loads after you scroll</span>
        )}
      </div>
    </aside>
  );
}
