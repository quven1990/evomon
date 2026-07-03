import Link from "next/link";
import { footerLinks } from "@/data/navigation";
import { ContactMailLink } from "@/components/ContactMailLink";
import { PlayLink } from "@/components/PlayLink";
import { GAME } from "@/lib/game";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#040a09] pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold text-white">{SITE.name}</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Community wiki for {GAME.fullName}. Codes, dex, type chart, tier list, and progression
            guides — independent and not affiliated with {GAME.developer} or Roblox.{" "}
            <Link href="/about" className="text-emerald-400 hover:underline">
              How we source data →
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block rounded-lg px-2 py-2.5 text-zinc-400 transition hover:text-emerald-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Play</h3>
          <p className="mt-4 text-sm text-zinc-400">
            <PlayLink placement="footer" className="text-emerald-300 hover:underline">
              Open Evomon on Roblox →
            </PlayLink>
          </p>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <ContactMailLink
                channel="contact"
                href={`mailto:${SITE.emails.contact}`}
                className="text-emerald-300 hover:underline"
              >
                {SITE.emails.contact}
              </ContactMailLink>
              <span className="text-zinc-500"> — corrections</span>
            </li>
            <li>
              <ContactMailLink
                channel="privacy"
                href={`mailto:${SITE.emails.privacy}`}
                className="text-emerald-300 hover:underline"
              >
                {SITE.emails.privacy}
              </ContactMailLink>
              <span className="text-zinc-500"> — privacy</span>
            </li>
            <li>
              <Link href="/privacy" className="text-zinc-400 transition hover:text-emerald-300">
                Privacy Policy →
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs text-zinc-600">© {new Date().getFullYear()} {SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
