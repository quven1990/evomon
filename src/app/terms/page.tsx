import type { Metadata } from "next";
import Link from "next/link";
import { ScrollText } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.terms();

const effectiveDate = "July 8, 2026";

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Terms of Use — ${SITE.name}`,
    url: canonical("/terms"),
    description: `Terms for using ${SITE.domain}, an independent unofficial wiki for ${GAME.fullName}.`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <StructuredData data={schema} />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <PageBack href="/" />
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          <ScrollText className="h-3.5 w-3.5" />
          Terms
        </div>
        <h1 className={`${pageTitleClass()} mt-4`}>Terms of Use</h1>
        <p className={pageLeadClass()}>
          These terms cover your use of {SITE.domain}. They are a site policy notice — not legal
          advice. By using the site you agree to these terms and our{" "}
          <Link href="/privacy" className="text-emerald-300 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <p className="mt-2 text-sm text-zinc-500">Last updated: {effectiveDate}</p>

        <div className="prose-wiki mt-10">
          <h2>Fan site — not official</h2>
          <p>
            {SITE.name} is an independent community wiki for {GAME.fullName}. It is{" "}
            <strong>not</strong> affiliated with, endorsed by, or operated by {GAME.developer},
            Roblox Corporation, or any official Evomon team. Game names, characters, images, and
            trademarks belong to their respective owners.
          </p>

          <h2>What you may use this site for</h2>
          <ul>
            <li>Looking up codes, dex entries, type charts, tiers, and guides for personal play</li>
            <li>Using tools such as the team builder for personal planning</li>
            <li>Sharing feedback or corrections via our published email addresses</li>
          </ul>

          <h2>What you may not do</h2>
          <ul>
            <li>Present this site as an official Roblox or Evomon channel</li>
            <li>Ask us for — or try to send us — Roblox passwords or account takeover material</li>
            <li>Scrape the site in a way that degrades service, or mirror content to mislead players</li>
            <li>Use the site to promote spam, malware, cheating services, or illegal activity</li>
            <li>
              Imply guaranteed income, guaranteed codes forever, or &quot;100% accurate&quot;
              competitive rankings without verification
            </li>
          </ul>

          <h2>Codes, data accuracy, and risk</h2>
          <p>
            Codes expire, rewards change, and in-game systems update without notice. We label sources
            when we can (see{" "}
            <Link href="/about" className="text-emerald-300 hover:underline">
              About
            </Link>
            ), but we do <strong>not</strong> guarantee that any code still works or that any tier
            list, odds note, or guide is complete. Always redeem codes only inside the official
            Roblox game client.
          </p>

          <h2>Advertising</h2>
          <p>
            The site may display advertisements from Google and/or other partners. Ads do not mean
            endorsement of advertisers by us or by Roblox / Evomon developers. Clicking ads is
            optional and subject to the advertiser&apos;s terms.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Original site layout, wiki writing, and tooling on {SITE.domain} are provided for fan
            reference. Roblox, Evomon, and related game assets remain owned by their rights holders.
            Contact{" "}
            <a href={`mailto:${SITE.emails.contact}`} className="text-emerald-300 hover:underline">
              {SITE.emails.contact}
            </a>{" "}
            for legitimate takedown or correction requests.
          </p>

          <h2>No warranty</h2>
          <p>
            The site is provided &quot;as is&quot; without warranties of any kind. We are not liable
            for losses from expired codes, gameplay decisions, third-party ads, or downtime.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms when features or policies change. The date above will be
            updated when we do.
          </p>

          <h2>Contact</h2>
          <p>
            General:{" "}
            <a href={`mailto:${SITE.emails.contact}`} className="text-emerald-300 hover:underline">
              {SITE.emails.contact}
            </a>
            . Privacy:{" "}
            <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
              {SITE.emails.privacy}
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
