import type { Metadata } from "next";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { PAGE_SEO } from "@/lib/seo";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.cookies();

const effectiveDate = "July 17, 2026";

export default function CookiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Cookies — ${SITE.name}`,
    url: canonical("/cookies"),
    description: `How ${SITE.domain} and its analytics/advertising partners use cookies and similar technologies.`,
  };

  return (
    <>
      <StructuredData data={schema} />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <PageBack href="/" />
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          <Cookie className="h-3.5 w-3.5" />
          Cookies
        </div>
        <h1 className={`${pageTitleClass()} mt-4`}>Cookies & similar technologies</h1>
        <p className={pageLeadClass()}>
          This page explains cookie categories used on {SITE.domain}. Details about data uses live in
          our{" "}
          <Link href="/privacy" className="text-emerald-300 hover:underline">
            Privacy Policy
          </Link>
          . This is a site policy notice — not legal advice.
        </p>
        <p className="mt-2 text-sm text-zinc-500">Last updated: {effectiveDate}</p>

        <div className="prose-wiki mt-10">
          <h2>What we mean by cookies</h2>
          <p>
            &quot;Cookies&quot; here includes HTTP cookies, local storage, pixels, and similar
            client-side identifiers that partners may set when scripts load.
          </p>

          <h2>Categories</h2>
          <h3>Strictly necessary / functional</h3>
          <p>
            Needed to deliver pages securely and remember basic UI preferences (for example dismissing
            this site&apos;s cookie notice). The wiki content itself is static and does not require an
            account.
          </p>

          <h3>Analytics</h3>
          <ul>
            <li>
              <strong>Plausible</strong> — traffic measurement
            </li>
            <li>
              <strong>Google Analytics</strong> (G-HWEF9CC7Z7) — pages and engagement
            </li>
            <li>
              <strong>Microsoft Clarity</strong> — heatmaps / session diagnostics
            </li>
          </ul>

          <h3>Advertising</h3>
          <p>
            When Google AdSense or other ad partners are enabled, third-party vendors (including
            Google) may use cookies to serve, measure, and (where allowed) personalize ads based on
            your prior visits to this site or other sites. Learn more:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-emerald-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google uses information from sites or apps that use our services
            </a>
            .
          </p>

          <h2>On-site notice</h2>
          <p>
            The bottom &quot;Got it&quot; bar is an informational disclosure so you know analytics and
            ads may use cookies. It is not a full consent-management platform, and dismissing it does
            not disable analytics scripts. Personalized advertising in the EU/EEA/UK/Switzerland may
            use Google&apos;s certified consent message when AdSense requires it.
          </p>

          <h2>How to control cookies</h2>
          <ul>
            <li>Browser settings: block or delete cookies (site still works for reading guides)</li>
            <li>
              <a
                href="https://adssettings.google.com"
                className="text-emerald-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>{" "}
              — opt out of personalized ads from Google where available
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className="text-emerald-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google partner-sites policy
              </a>{" "}
              — how Google uses data on partner sites
            </li>
            <li>
              Contact{" "}
              <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
                {SITE.emails.privacy}
              </a>{" "}
              for privacy questions
            </li>
          </ul>

          <h2>Related pages</h2>
          <ul>
            <li>
              <Link href="/privacy" className="text-emerald-300 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-emerald-300 hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-emerald-300 hover:underline">
                About & trust
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
