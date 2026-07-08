"use client";

import { useEffect } from "react";
import { ADSENSE_SCRIPT_SRC } from "@/lib/adsense";

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
 * Loads AdSense after idle or first interaction — same pattern as analytics.
 * Does not wait for CookieNotice; stats and ads load independently.
 */
export function DeferredAdSense() {
  useEffect(() => {
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

    const onInteraction = () => start();

    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    const opts: AddEventListenerOptions = { capture: true, passive: true, once: true };
    events.forEach((event) => window.addEventListener(event, onInteraction, opts));

    const scheduleIdle =
      window.requestIdleCallback ??
      ((cb: IdleRequestCallback) => window.setTimeout(() => cb({ didTimeout: true, timeRemaining: () => 0 }), 1));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;

    const idleId = scheduleIdle(() => start(), { timeout: 4500 });

    return () => {
      events.forEach((event) => window.removeEventListener(event, onInteraction, opts));
      cancelIdle(idleId);
    };
  }, []);

  return null;
}
