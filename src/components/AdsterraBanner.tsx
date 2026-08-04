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
 * Full-width ad rail: 300×250 on small screens; 728×90 on md+ when configured.
 * Blocks mainland CN only. Loads when near viewport.
 * Renders one slot via matchMedia (avoids dual iframe loads).
 */
export function AdsterraBanner({ className = "" }: Props) {
  const pathname = usePathname();
  const reactId = useId().replace(/:/g, "");
  const hostRef = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [blocked, setBlocked] = useState<boolean | null>(null);
  const [desktop, setDesktop] = useState(false);

  const enabled = isAdsterraBannerEnabled() && shouldShowDisplayAds(pathname);
  const leaderboard = hasAdsterraLeaderboard();
  const show = enabled && near && blocked === false;
  const slot: Slot =
    leaderboard && desktop ? ADSTERRA_LEADERBOARD : ADSTERRA_RECT;

  useEffect(() => {
    if (!enabled) return;

    let cancelled = false;
    (async () => {
      const country = await getVisitorCountry();
      if (cancelled) return;
      setBlocked(isAdsterraBlockedCountry(country));
    })();

    return () => {
      cancelled = true;
    };
  }, [enabled, pathname]);

  useEffect(() => {
    if (!leaderboard) {
      setDesktop(false);
      return;
    }
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [leaderboard]);

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
      { rootMargin: "320px 0px", threshold: 0 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [enabled, pathname]);

  if (!enabled) return null;
  if (blocked === true) return null;

  return (
    <aside
      ref={hostRef}
      className={`w-full ${className}`}
      aria-label="Advertisement"
      data-ad-slot={reactId}
      data-ad-size={`${slot.width}x${slot.height}`}
    >
      {show ? (
        <div className="w-full border-y border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent py-5 sm:py-6">
          <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
            Advertisement
          </p>
          <div className="flex justify-center px-1">
            <AdFrame slot={slot} />
          </div>
        </div>
      ) : (
        <div
          className={`w-full ${leaderboard && desktop ? "min-h-[90px]" : "min-h-[250px]"}`}
          aria-hidden
        />
      )}
    </aside>
  );
}
