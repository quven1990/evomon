"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ADSTERRA_BANNER, isAdsterraBannerEnabled } from "@/lib/adsterra";
import { shouldShowDisplayAds } from "@/lib/display-ads";
import { getVisitorCountry, isAdsterraBlockedCountry } from "@/lib/visitor-geo";

type Props = {
  className?: string;
};

/**
 * Adsterra 300×250 via static HTML iframe.
 * Skips CN (scammy redirect creatives) and hides when invoke.js is blocked (VPN 403).
 */
export function AdsterraBanner({ className = "" }: Props) {
  const pathname = usePathname();
  const reactId = useId().replace(/:/g, "");
  const hostRef = useRef<HTMLDivElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [near, setNear] = useState(false);
  const [canServe, setCanServe] = useState<boolean | null>(null);

  const enabled = isAdsterraBannerEnabled() && shouldShowDisplayAds(pathname);
  const { width, height, key, invokeHost } = ADSTERRA_BANNER;
  const show = enabled && allowed && near && canServe === true;

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;

    (async () => {
      const country = await getVisitorCountry();
      if (cancelled) return;
      if (isAdsterraBlockedCountry(country)) {
        setCanServe(false);
        return;
      }

      const url = `https://${invokeHost}/${key}/invoke.js`;
      try {
        const res = await fetch(url, { method: "GET", cache: "no-store", mode: "cors" });
        const text = await res.text();
        if (!cancelled) setCanServe(res.status === 200 && text.length > 50);
      } catch {
        // Adblock / opaque network → still attempt iframe for non-blocked geos.
        if (!cancelled) setCanServe(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [enabled, key, invokeHost, pathname]);

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
  if (canServe === false) return null;

  return (
    <aside
      ref={hostRef}
      className={`mx-auto flex w-full flex-col items-center ${className}`}
      style={{ maxWidth: width }}
      aria-label="Advertisement"
      data-ad-slot={reactId}
    >
      {show ? (
        <>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-600">Ad</p>
          <div
            className="flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0b1512]"
            style={{ width: "100%", maxWidth: width, height, minHeight: height }}
          >
            <iframe
              title="Advertisement"
              src="/ads/adsterra-300x250"
              width={width}
              height={height}
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 bg-[#0b1512]"
              style={{ width, height, maxWidth: "100%" }}
            />
          </div>
        </>
      ) : null}
    </aside>
  );
}
