import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { PageBack, pageLeadClass, pageTitleClass } from "@/components/PageShell";
import { GAME } from "@/lib/game";
import { PAGE_SEO } from "@/lib/seo";
import { SITE, canonical } from "@/lib/site";

export const metadata: Metadata = PAGE_SEO.privacy();

const effectiveDate = "July 17, 2026";

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Privacy Policy — ${SITE.name}`,
    url: canonical("/privacy"),
    description: `How ${SITE.domain} handles analytics, advertising, cookies, email contact, and visitor data on this unofficial Evomon fan wiki.`,
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
          collect, how advertising and analytics partners may process data, and how to contact us.
          This is a site policy notice — not legal advice.
        </p>
        <p className="mt-2 text-sm text-zinc-500">Last updated: {effectiveDate}</p>

        <div className="prose-wiki mt-10">
          <h2>Summary</h2>
          <ul>
            <li>We do not run user accounts, sell your data as a product, or ask for Roblox passwords.</li>
            <li>
              We use analytics (Plausible, Google Analytics, Microsoft Clarity) to understand traffic
              and fix UX issues.
            </li>
            <li>
              We may show advertising (including Google AdSense or similar partners). Ad partners may
              use cookies or similar technologies — see also our{" "}
              <Link href="/cookies" className="text-emerald-300 hover:underline">
                Cookies
              </Link>{" "}
              page.
            </li>
            <li>
              Email contact:{" "}
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
            for sourcing and disclaimer details. Acceptance of this policy and our{" "}
            <Link href="/terms" className="text-emerald-300 hover:underline">
              Terms of Use
            </Link>{" "}
            is a condition of using the site.
          </p>

          <h2>Information we collect</h2>
          <h3>Analytics</h3>
          <p>
            We use third-party analytics to measure page views and improve the wiki. These services
            may set cookies, local storage, or similar technologies:
          </p>
          <ul>
            <li>
              <strong>Plausible</strong> — privacy-oriented analytics (script hosted at
              plausible.shipsolo.io)
            </li>
            <li>
              <strong>Google Analytics</strong> (measurement ID G-HWEF9CC7Z7)
            </li>
            <li>
              <strong>Microsoft Clarity</strong> — session replay and heatmaps for UX diagnostics
            </li>
          </ul>
          <p>
            Analytics data is used in aggregate to improve content and performance. We do not use it
            to link site visits to your Roblox account.
          </p>

          <h3>Advertising</h3>
          <p>
            We may display ads served by Google AdSense and/or other advertising networks. Third-party
            vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to
            this site or other sites on the Internet. Google&apos;s use of advertising cookies enables
            it and its partners to serve ads to you based on your visit to this site and/or other sites
            on the Internet.
          </p>
          <p>Depending on your region and settings, these partners may:</p>
          <ul>
            <li>Set or read cookies and similar identifiers</li>
            <li>Collect device, browser, approximate location, and page-view context</li>
            <li>Serve personalized or non-personalized ads</li>
          </ul>
          <p>
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://adssettings.google.com"
              className="text-emerald-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . You can also learn how Google uses information from sites or apps that use its services
            at{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-emerald-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google uses information from sites or apps that use our services
            </a>
            . Browser controls and our{" "}
            <Link href="/cookies" className="text-emerald-300 hover:underline">
              Cookies
            </Link>{" "}
            page describe additional options.
          </p>
          <p>
            When AdSense (or another partner) is active, their own privacy policies also apply to the
            data they process. Authorized sellers are listed in our root <code>ads.txt</code> file.
            In the EU/EEA/UK/Switzerland, Google may show a certified consent message for personalized
            ads where required; that flow is separate from this site&apos;s informational cookie notice.
          </p>

          <h3>Team builder share links</h3>
          <p>
            The{" "}
            <Link href="/team-builder" className="text-emerald-300 hover:underline">
              team builder
            </Link>{" "}
            can encode selected pets in the page URL so you can share a squad. That information lives
            in the link you share — we do not store party compositions on our servers.
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

          <h3>Hosting and infrastructure</h3>
          <p>
            The site is served via Cloudflare (including CDN/edge delivery). Cloudflare may process
            connection metadata needed to deliver pages securely (standard hosting practice).
          </p>

          <h2>Information we do not collect</h2>
          <ul>
            <li>Roblox usernames, passwords, or account credentials</li>
            <li>Payment or billing information from you (this wiki does not sell accounts or paid memberships)</li>
            <li>In-game inventory or save data</li>
            <li>Newsletter sign-ups — we do not run a mailing list</li>
          </ul>

          <h2>Cookies and similar technologies</h2>
          <p>
            Analytics and advertising partners may place cookies, pixels, or use local storage when
            their scripts load. Analytics scripts (Plausible, Google Analytics, Microsoft Clarity) are
            loaded for site measurement and UX diagnostics; dismissing the on-site cookie notice does
            not turn them off. See{" "}
            <Link href="/cookies" className="text-emerald-300 hover:underline">
              Cookies
            </Link>{" "}
            for categories, examples, and how to control them. Site features (dex, guides, codes
            list) generally work without advertising cookies; blocking analytics may reduce the
            insight we have into traffic.
          </p>

          <h2>Third-party links and content</h2>
          <p>
            We link to Roblox, community resources, and other external sites. Their privacy policies
            apply when you leave {SITE.domain}. Redeem codes only inside the official Roblox game.
            Pet images and game assets referenced on this fan wiki remain subject to Roblox / game
            developer rights — we claim no ownership.
          </p>

          <h2>Children</h2>
          <p>
            {GAME.name} is popular with younger players. This site does not knowingly collect
            personal information from children for account-style profiles. If you are a parent or
            guardian and believe a child sent us personal data by email, contact{" "}
            <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
              {SITE.emails.privacy}
            </a>{" "}
            and we will delete it. Advertising partners may apply their own child-directed policies.
          </p>

          <h2>International visitors</h2>
          <p>
            We primarily publish in English for a global Roblox audience. Depending on where you
            access the site, local laws (including GDPR / UK GDPR / CCPA-style rules) may give you
            rights to request access or deletion of personal data we hold from email contact, or to
            object to certain processing. Contact{" "}
            <a href={`mailto:${SITE.emails.privacy}`} className="text-emerald-300 hover:underline">
              {SITE.emails.privacy}
            </a>
            . For ads controlled by Google, use{" "}
            <a
              href="https://adssettings.google.com"
              className="text-emerald-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . For analytics controlled by Google or Microsoft, use those companies&apos; privacy
            tools or your browser&apos;s cookie/script controls as well.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy when we add tools, advertising, or analytics. The date at the
            top will change when we do. Material changes may also be noted on the{" "}
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
