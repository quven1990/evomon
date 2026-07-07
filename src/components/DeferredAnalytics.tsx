"use client";

import { useEffect } from "react";

const PLAUSIBLE_SRC = "https://plausible.shipsolo.io/js/pa-e7H4dQeqDLbGc8ELzaMzz.js";
const GTAG_SRC = "https://www.googletagmanager.com/gtag/js?id=G-HWEF9CC7Z7";
const GTAG_ID = "G-HWEF9CC7Z7";
const CLARITY_ID = "xg9ddd1pvr";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function loadClarity(): void {
  if (document.getElementById("microsoft-clarity")) return;
  const script = document.createElement("script");
  script.id = "microsoft-clarity";
  script.text = `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_ID}");`;
  document.head.appendChild(script);
}

async function bootAnalytics(): Promise<void> {
  await Promise.all([
    loadScript(PLAUSIBLE_SRC).then(() => {
      window.plausible?.init?.();
    }),
    loadScript(GTAG_SRC).then(() => {
      window.gtag?.("js", new Date());
      window.gtag?.("config", GTAG_ID);
    }),
  ]);
  loadClarity();
}

/**
 * Loads heavy third-party analytics after idle or first interaction so LCP/FCP
 * are not blocked. Stubs in layout.tsx queue events until scripts arrive.
 */
export function DeferredAnalytics() {
  useEffect(() => {
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      void bootAnalytics().catch(() => {
        // Analytics must never break UX
      });
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
