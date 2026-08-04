"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ADSTERRA_LEADERBOARD,
  ADSTERRA_RECT,
  hasAdsterraLeaderboard,
  isAdsterraBannerEnabled,
} from "@/lib/adsterra";
import { shouldShowDisplayAds } from "@/lib/display-ads";
import { getVisitorCountry, isAdsterraBlockedCountry } from "@/lib/visitor-geo";

type Props = {
  className?: string;
};

type Slot = typeof ADSTERRA_RECT;

function AdFrame({ slot }: { slot: Slot }) {
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0b1512]"
      style={{ width: slot.width, height: slot.height, maxWidth: "100%" }}
    >
      <iframe
        title="Advertisement"
        src={slot.src}
        width={slot.width}
        height={slot.height}
        scrolling="no"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 bg-[#0b1512]"
        style={{ width: slot.width, height: slot.height, maxWidth: "100%" }}
      />
    </div>
  );
}

/**
 * Full-width ad rail: 300×250 on small screens; 728×90 on md+ when configured,
 * otherwise centered 300×250 in the same rail (avoids a tiny floating box).
 * Skips CN and hides when invoke.js is blocked (VPN 403).
 */
export function AdsterraBanner({ className = "" }: Props) {
  const pathname = usePathname();
  const reactId = useId().replace(/:/g, "");
  const hostRef = useRef<HTMLDivElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [near, setNear] = useState(false);
  const [canServe, setCanServe] = useState<boolean | null>(null);

  const enabled = isAdsterraBannerEnabled() && shouldShowDisplayAds(pathname);
  const leaderboard = hasAdsterraLeaderboard();
  const probe = ADSTERRA_RECT;
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

      const url = `https://${probe.invokeHost}/${probe.key}/invoke.js`;
      try {
        const res = await fetch(url, { method: "GET", cache: "no-store", mode: "cors" });
        const text = await res.text();
        if (!cancelled) setCanServe(res.status === 200 && text.length > 50);
      } catch {
        if (!cancelled) setCanServe(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [enabled, probe.key, probe.invokeHost, pathname]);

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
      className={`w-full ${className}`}
      aria-label="Advertisement"
      data-ad-slot={reactId}
    >
      {show ? (
        <div className="w-full border-y border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent py-5 sm:py-6">
          <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
            Advertisement
          </p>
          <div className="flex justify-center px-1">
            {leaderboard ? (
              <>
                <div className="md:hidden">
                  <AdFrame slot={ADSTERRA_RECT} />
                </div>
                <div className="hidden md:block">
                  <AdFrame slot={ADSTERRA_LEADERBOARD} />
                </div>
              </>
            ) : (
              <AdFrame slot={ADSTERRA_RECT} />
            )}
          </div>
        </div>
      ) : (
        <div
          className="w-full"
          style={{ minHeight: leaderboard ? 90 : ADSTERRA_RECT.height }}
          aria-hidden
        />
      )}
    </aside>
  );
}
