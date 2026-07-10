import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { DataFreshness } from "@/components/DataFreshness";
import {
  confidenceLabels,
  confidenceStyles,
  type GuideTrustPageId,
  GUIDE_REVIEWED_ISO,
  GUIDE_REVIEWED_LABEL,
  guideTrustPages,
} from "@/data/guide-trust";

export function GuideTrustFooter({ pageId }: { pageId: GuideTrustPageId }) {
  const config = guideTrustPages[pageId];

  return (
    <footer className="mt-12 space-y-8 border-t border-white/10 pt-10">
      {config.mistakes && config.mistakes.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-white">Common mistakes</h2>
          <ul className="mt-4 space-y-2">
            {config.mistakes.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-3 text-sm leading-6 text-zinc-300"
              >
                <span className="text-rose-400" aria-hidden>
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-emerald-400" aria-hidden />
          <h2 className="text-lg font-bold text-white">About this page</h2>
          <DataFreshness label="Reviewed" date={GUIDE_REVIEWED_ISO} />
        </div>

        <p className="mt-4 text-sm leading-7 text-zinc-400">{config.scopeNote}</p>
        <p className="mt-3 text-sm leading-7 text-zinc-400">{config.verification}</p>

        <p className="mt-4 text-sm text-zinc-500">
          Maintained by{" "}
          <Link href="/about" className="font-medium text-emerald-300 hover:underline">
            Remy
          </Link>{" "}
          ({GUIDE_REVIEWED_LABEL}). Independent fan wiki — not affiliated with Roblox or{" "}
          {`Evomon developers.`}{" "}
          <Link href="/about" className="text-emerald-400 hover:underline">
            Report an error →
          </Link>
        </p>

        <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-zinc-500">Sources</h3>
        <ul className="mt-3 space-y-3">
          {config.sources.map((source) => (
            <li
              key={source.label}
              className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
            >
              <div className="flex flex-wrap items-center gap-2">
                {source.href ? (
                  <Link
                    href={source.href}
                    className="text-sm font-medium text-emerald-300 hover:underline"
                    {...(source.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {source.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-white">{source.label}</span>
                )}
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${confidenceStyles[source.confidence]}`}
                >
                  {confidenceLabels[source.confidence]}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-6 text-zinc-500">{source.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
