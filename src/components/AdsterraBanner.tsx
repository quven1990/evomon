"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ADSTERRA_BANNER, isAdsterraBannerEnabled } from "@/lib/adsterra";
import { shouldShowDisplayAds } from "@/lib/display-ads";

type Props = {
  className?: string;
};

/**
 * Adsterra 300×250 via direct script inject (official atOptions + invoke.js).
 * Avoids srcdoc iframes (empty black box / no clicks on many browsers).
 * Gated: first interaction + near-viewport. Banner only.
 */
export function AdsterraBanner({ className = "" }: Props) {
  const pathname = usePathname();
  const reactId = useId().replace(/:/g, "");
  const hostRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [near, setNear] = useState(false);

  const enabled = isAdsterraBannerEnabled() && shouldShowDisplayAds(pathname);
  const { key, width, height, invokeHost } = ADSTERRA_BANNER;
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

  useEffect(() => {
    if (!show || !slotRef.current) return;

    const slot = slotRef.current;
    slot.innerHTML = "";

    const conf = document.createElement("script");
    conf.type = "text/javascript";
    conf.text = `atOptions = ${JSON.stringify({
      key,
      format: "iframe",
      height,
      width,
      params: {},
    })};`;

    const invoke = document.createElement("script");
    invoke.type = "text/javascript";
    invoke.src = `https://${invokeHost}/${key}/invoke.js`;

    try {
      slot.appendChild(conf);
      slot.appendChild(invoke);
    } catch {
      // Ads must never break the page
    }

    return () => {
      slot.innerHTML = "";
    };
  }, [show, key, width, height, invokeHost]);

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
        style={{ width: "100%", maxWidth: width, minHeight: height }}
      >
        {show ? (
          <div
            ref={slotRef}
            className="flex items-center justify-center [&_iframe]:max-w-full"
            style={{ width, minHeight: height }}
          />
        ) : (
          <span className="px-3 text-center text-xs text-zinc-600">Ad loads after you scroll</span>
        )}
      </div>
    </aside>
  );
}
