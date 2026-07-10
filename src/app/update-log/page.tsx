import type { Metadata } from "next";
import Link from "next/link";
import { History } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { UPDATE_LOG_LAST_PUBLISHED, getAllUpdateLogEntries, updateLogGroups } from "@/data/update-log";
import { PAGE_SEO } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { updateEntryAnchor, updateLogSchema } from "@/lib/update-log-schema";

export const metadata: Metadata = PAGE_SEO.updateLog();

const entries = getAllUpdateLogEntries();

export default function UpdateLogPage() {
  return (
    <>
      <StructuredData data={updateLogSchema(entries)} />

      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 sm:py-10 lg:pb-10">
        <PageBack href="/about" label="About" />
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          <History className="h-3.5 w-3.5" />
          Changelog
        </div>
        <h1 className={`${pageTitleClass()} mt-4`}>Update log</h1>
        <p className={pageLeadClass()}>
          What changed on {SITE.domain} and when — content refreshes, new guides, SEO fixes, and
          quality improvements. Maintained by{" "}
          <Link href="/about" className="text-emerald-300 hover:underline">
            Remy
          </Link>
          . Last entry:{" "}
          <time dateTime={UPDATE_LOG_LAST_PUBLISHED}>
            {new Date(UPDATE_LOG_LAST_PUBLISHED).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          .
        </p>

        <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-zinc-500">
          Independent fan wiki — not affiliated with Roblox or Evomon developers. This log reflects
          our editorial and engineering work, not official game patch notes. For in-game changes, check
          the official Discord or Roblox update feed.
        </p>

        {updateLogGroups.map((group) => (
          <section key={group.month} className="mt-12">
            <h2 className="text-xl font-bold text-white sm:text-2xl">{group.month}</h2>
            <ol className="mt-6 space-y-5">
              {group.entries.map((entry) => {
                const anchor = updateEntryAnchor(entry);
                return (
                  <li
                    key={anchor}
                    id={anchor}
                    className="scroll-mt-24 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <time
                        dateTime={entry.date}
                        className="text-xs font-semibold uppercase tracking-wide text-zinc-500"
                      >
                        {new Date(`${entry.date}T12:00:00`).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{entry.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{entry.body}</p>
                    {entry.pages && entry.pages.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        {entry.pages.map((path) => (
                          <li key={path}>
                            <Link href={path} className="text-emerald-300 hover:underline">
                              {path} →
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}

        <section className="mt-12 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">Spot an error?</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-400">
            Email{" "}
            <a href={`mailto:${SITE.emails.contact}`} className="text-emerald-300 hover:underline">
              {SITE.emails.contact}
            </a>{" "}
            with the page URL. See also our{" "}
            <Link href="/about" className="text-emerald-300 hover:underline">
              data sourcing policy
            </Link>
            .
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-500">
            AI assistants: curated site index at{" "}
            <Link href="/llms.txt" className="text-emerald-300 hover:underline">
              /llms.txt
            </Link>{" "}
            (expanded context:{" "}
            <Link href="/llms-full.txt" className="text-emerald-300 hover:underline">
              /llms-full.txt
            </Link>
            ).
          </p>
        </section>
      </main>
    </>
  );
}
