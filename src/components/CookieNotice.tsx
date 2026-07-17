"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "evomon-cookie-notice-v1";

/**
 * Informational privacy notice for analytics + advertising.
 * Dismissing does not gate analytics scripts (see DeferredAnalytics).
 * Personalized-ad consent for EEA/UK/CH is handled by Google/AdSense CMP when required.
 */
export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") return;
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie and privacy notice"
      className="fixed inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-[60] px-3 pb-3 lg:bottom-4 lg:px-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a1412]/95 p-4 text-sm text-zinc-300 shadow-lg backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-6">
          We use analytics (including Google Analytics and Microsoft Clarity) and may show ads from
          Google and other partners, which can use cookies or similar tech. See{" "}
          <Link href="/privacy" className="text-emerald-300 underline underline-offset-2">
            Privacy
          </Link>
          ,{" "}
          <Link href="/cookies" className="text-emerald-300 underline underline-offset-2">
            Cookies
          </Link>
          , and{" "}
          <Link href="/terms" className="text-emerald-300 underline underline-offset-2">
            Terms
          </Link>
          . You can manage Google ad personalization in{" "}
          <a
            href="https://adssettings.google.com"
            className="text-emerald-300 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ads Settings
          </a>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-xl bg-emerald-500/20 px-4 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/30"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
