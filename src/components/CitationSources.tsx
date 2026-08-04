import Link from "next/link";

export type CitationSourceItem = {
  label: string;
  /** External http(s) URL, or omit for plain-text citations */
  url?: string;
  note?: string;
};

const EXTERNAL_REL = "nofollow noopener noreferrer";

function isExternal(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

/**
 * Collapsed citation footer: points to /about methodology, nofollow on outbound links.
 */
export function CitationSources({
  sources,
  className = "",
  summary = "Sources (community references)",
}: {
  sources: CitationSourceItem[];
  className?: string;
  summary?: string;
}) {
  if (sources.length === 0) return null;

  return (
    <section className={className}>
      <p className="text-sm leading-7 text-zinc-500">
        Cross-checked from community guides — not a scraped catalog.{" "}
        <Link href="/about#how-we-source" className="text-emerald-300 hover:underline">
          How we source data →
        </Link>
      </p>
      <details className="mt-4 rounded-2xl border border-white/10 bg-[#0b1512]">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-zinc-300 marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="text-zinc-500">
              ▸
            </span>
            {summary}
            <span className="font-normal text-zinc-500">({sources.length})</span>
          </span>
        </summary>
        <ul className="space-y-1 border-t border-white/10 px-4 py-3 text-sm text-zinc-400">
          {sources.map((src) => (
            <li key={`${src.label}|${src.url ?? ""}`}>
              {src.url ? (
                <a
                  href={src.url}
                  className="inline-flex min-h-11 items-center text-emerald-300/90 hover:underline"
                  {...(isExternal(src.url)
                    ? { target: "_blank", rel: EXTERNAL_REL }
                    : {})}
                >
                  {src.label}
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center">{src.label}</span>
              )}
              {src.note ? (
                <p className="pb-2 text-xs leading-5 text-zinc-500">{src.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

/** One entry per external hostname; plain-text rows kept once by label. */
export function dedupeCitationsByHost(sources: CitationSourceItem[]): CitationSourceItem[] {
  const seenHost = new Set<string>();
  const seenLabel = new Set<string>();
  const out: CitationSourceItem[] = [];

  for (const src of sources) {
    if (!src.url || !isExternal(src.url)) {
      const key = src.label.trim().toLowerCase();
      if (seenLabel.has(key)) continue;
      seenLabel.add(key);
      out.push(src);
      continue;
    }
    try {
      const host = new URL(src.url).hostname.replace(/^www\./i, "").toLowerCase();
      if (seenHost.has(host)) continue;
      seenHost.add(host);
      out.push(src);
    } catch {
      out.push(src);
    }
  }
  return out;
}

export { EXTERNAL_REL as citationExternalRel };
