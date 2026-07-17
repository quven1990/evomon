"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ADSENSE_SCRIPT_SRC, shouldLoadAdSense } from "@/lib/adsense";

function loadAdSense(): void {
  if (document.querySelector(`script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`)) {
    return;
  }
  const script = document.createElement("script");
  script.src = ADSENSE_SCRIPT_SRC;
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

/**
 * Auto ads on substantive content pages only, after the first real interaction.
 * Never uses idle timeout — avoids loading AdSense/FundingChoices during LCP.
 * Analytics (GA/Clarity/Plausible) stay on DeferredAnalytics and are not gated here.
 */
export function DeferredAdSense() {
  const pathname = usePathname();

  useEffect(() => {
    if (!shouldLoadAdSense(pathname)) return;

    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      try {
        loadAdSense();
      } catch {
        // Ads must never break UX
      }
    };

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    const opts: AddEventListenerOptions = { capture: true, passive: true, once: true };
    events.forEach((event) => window.addEventListener(event, start, opts));

    return () => {
      events.forEach((event) => window.removeEventListener(event, start, opts));
    };
  }, [pathname]);

  return null;
}
