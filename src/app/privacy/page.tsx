import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.privacy();

const effectiveDate = "July 3, 2026";

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Privacy Policy — ${SITE.name}`,
    url: canonical("/privacy"),
    description: `How ${SITE.domain} handles analytics, email contact, and visitor data on this unofficial Evomon fan wiki.`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
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
          <Lock className="h-3.5 w-3.5" />
          Privacy
        </div>
        <h1 className={`${pageTitleClass()} mt-4`}>Privacy Policy</h1>
        <p className={pageLeadClass()}>
          {SITE.domain} is an independent fan wiki for {GAME.fullName}. This page explains what we
          collect, what we do not collect, and how to reach us about privacy questions.
        </p>
        <p className="mt-2 text-sm text-zinc-500">Effective: {effectiveDate}</p>

        <div className="prose-wiki mt-10">
          <h2>Summary</h2>
          <ul>
            <li>We do not run user accounts, sell data, or ask for your Roblox password.</li>
            <li>
              We use privacy-focused analytics (Plausible, Google Analytics, Microsoft Clarity) to
              understand traffic — not to identify individual players.
            </li>
            <li>
              If you email us, we receive your message and address so we can reply. See{" "}
              <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
                {SITE.emails.privacy}
              </a>
              .
            </li>
          </ul>

          <h2>Who operates this site</h2>
          <p>
            {SITE.name} ({SITE.domain}) is a community reference site. It is{" "}
            <strong>not</strong> operated by {GAME.developer}, Roblox Corporation, or any official
            Evomon team. See our{" "}
            <Link href="/about" className="text-emerald-300 hover:underline">
              About page
            </Link>{" "}
            for sourcing and disclaimer details.
          </p>

          <h2>Information we collect</h2>
          <h3>Analytics</h3>
          <p>
            We use third-party analytics to measure page views and improve the wiki. These services
            may set cookies or use similar technologies in your browser:
          </p>
          <ul>
            <li>
              <strong>Plausible</strong> — privacy-oriented analytics hosted at shipsolo.io
            </li>
            <li>
              <strong>Google Analytics</strong> (measurement ID G-HWEF9CC7Z7)
            </li>
            <li>
              <strong>Microsoft Clarity</strong> — session replay and heatmaps to fix UX issues
            </li>
          </ul>
          <p>
            Analytics data is aggregated. We do not use it to build profiles of individual Roblox
            players or to link site visits to in-game accounts.
          </p>

          <h3>Team builder share links</h3>
          <p>
            The{" "}
            <Link href="/team-builder" className="text-emerald-300 hover:underline">
              team builder
            </Link>{" "}
            can encode your selected pets in the page URL so you can share a squad. That information
            lives in the link you share — we do not store party compositions on our servers.
          </p>

          <h3>Email</h3>
          <p>
            If you contact us, we receive whatever you send (message body, subject, and email
            address). We use this only to respond and to improve the wiki when you report errors.
          </p>
          <ul>
            <li>
              <a href={`mailto:${SITE.emails.contact}`} className="text-emerald-300 hover:underline">
                {SITE.emails.contact}
              </a>{" "}
              — corrections, broken pages, code reports
            </li>
            <li>
              <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
                {SITE.emails.privacy}
              </a>{" "}
              — privacy questions and data requests
            </li>
          </ul>

          <h2>Information we do not collect</h2>
          <ul>
            <li>Roblox usernames, passwords, or account credentials</li>
            <li>Payment or billing information (this site is free)</li>
            <li>In-game inventory or save data</li>
            <li>Newsletter sign-ups — we do not run a mailing list</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Analytics providers may place cookies or use local storage in your browser. You can block
            cookies in your browser settings; the wiki will still work, but we will see less
            traffic insight. We do not show a cookie banner because we only use analytics — no
            advertising or cross-site tracking for ads.
          </p>

          <h2>Third-party links</h2>
          <p>
            We link to Roblox, community wikis, and other external sites. Their privacy policies
            apply when you leave {SITE.domain}. Redeem codes only inside the official Roblox game.
          </p>

          <h2>Children</h2>
          <p>
            {GAME.name} is popular with younger players. This site does not knowingly collect
            personal information from children. If you are a parent or guardian and believe a child
            sent us personal data by email, contact{" "}
            <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
              {SITE.emails.privacy}
            </a>{" "}
            and we will delete it.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy when we add tools or analytics. The effective date at the top
            will change when we do. Material changes will also be noted on the{" "}
            <Link href="/about" className="text-emerald-300 hover:underline">
              About page
            </Link>
            .
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions or requests:{" "}
            <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
              {SITE.emails.privacy}
            </a>
            . General wiki feedback:{" "}
            <a href={`mailto:${SITE.emails.contact}`} className="text-emerald-300 hover:underline">
              {SITE.emails.contact}
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
