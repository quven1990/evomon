"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ADSTERRA_BANNER, isAdsterraBannerEnabled } from "@/lib/adsterra";
import { shouldShowDisplayAds } from "@/lib/display-ads";

type Props = {
  /** Extra classes on the outer wrapper. */
  className?: string;
};

/**
 * Single fixed-size Adsterra banner in an isolated iframe (Next.js-safe).
 * Loads only after first user interaction AND when scrolled near the slot —
 * no popunders, no auto page-wide injection.
 */
export function AdsterraBanner({ className = "" }: Props) {
  const pathname = usePathname();
  const hostRef = useRef<HTMLDivElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [near, setNear] = useState(false);

  const enabled = isAdsterraBannerEnabled() && shouldShowDisplayAds(pathname);
  const { key, width, height, invokeHost } = ADSTERRA_BANNER;

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
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !hostRef.current) return;

    const node = hostRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [enabled]);

  if (!enabled) return null;

  const show = allowed && near;
  const srcDoc = `<!DOCTYPE html><html><head><meta charset="utf-8"/><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style></head><body><script>atOptions={key:${JSON.stringify(key)},format:"iframe",height:${height},width:${width},params:{}};</script><script src="https://${invokeHost}/${key}/invoke.js"><\/script></body></html>`;

  return (
    <aside
      ref={hostRef}
      className={`mx-auto flex w-full flex-col items-center ${className}`}
      style={{ maxWidth: width }}
      aria-label="Advertisement"
    >
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-600">Ad</p>
      <div
        className="flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30"
        style={{ width: "100%", maxWidth: width, height, minHeight: height }}
      >
        {show ? (
          <iframe
            title="Advertisement"
            srcDoc={srcDoc}
            width={width}
            height={height}
            scrolling="no"
            loading="lazy"
            className="border-0"
            style={{ width, height, maxWidth: "100%" }}
          />
        ) : (
          <span className="px-3 text-center text-xs text-zinc-600">Ad loads after you scroll</span>
        )}
      </div>
    </aside>
  );
}
