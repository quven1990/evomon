"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { trackCodeCopy } from "@/lib/analytics";
import { copyToClipboard } from "@/lib/copy";

type CopyState = "idle" | "copied" | "failed";

type Props = {
  code: string;
  size?: "sm" | "lg";
  className?: string;
  source?: string;
  placement?: "featured" | "highlight" | "list" | "table";
};

export function CopyButton({ code, size = "sm", className = "", source, placement = "list" }: Props) {
  const [state, setState] = useState<CopyState>("idle");

  async function handleCopy() {
    const ok = await copyToClipboard(code);
    if (ok) {
      trackCodeCopy({ code, source, placement });
    }
    setState(ok ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 2000);
  }

  const label =
    state === "copied" ? "Copied!" : state === "failed" ? "Tap to retry" : size === "lg" ? "Copy code" : "Copy";

  const base =
    size === "lg"
      ? "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition"
      : "rounded-lg border px-3 py-1.5 text-sm font-medium transition";

  const tone =
    state === "copied"
      ? size === "lg"
        ? "bg-emerald-500 text-black"
        : "border-emerald-400/50 bg-emerald-500/20 text-emerald-200"
      : state === "failed"
        ? size === "lg"
          ? "bg-amber-500/20 text-amber-200 ring-1 ring-amber-500/40"
          : "border-amber-500/40 bg-amber-500/10 text-amber-300"
        : size === "lg"
          ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:brightness-110"
          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${base} ${tone} ${className}`}
      aria-label={`Copy code ${code}`}
    >
      {size === "lg" && state === "idle" && <Copy className="h-4 w-4" />}
      {label}
    </button>
  );
}
