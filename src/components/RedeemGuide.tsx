import Link from "next/link";
import { Settings } from "lucide-react";
import { GAME } from "@/lib/game";

const steps = [
  {
    n: 1,
    title: "Open Evomon in Roblox",
    body: (
      <>
        Launch{" "}
        <a
          href={GAME.robloxUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-300 hover:underline"
        >
          Evomon on Roblox
        </a>{" "}
        and finish the tutorial (pick a starter). Codes won&apos;t work until then.
      </>
    ),
  },
  {
    n: 2,
    title: "Open Settings (gear icon)",
    body: (
      <>
        In-game, tap the <strong className="text-white">⚙️ gear icon</strong> in the top bar. This opens{" "}
        <span className="text-zinc-200">Settings</span>.
      </>
    ),
  },
  {
    n: 3,
    title: "Copy a code from this page",
    body: "Tap Copy code on any card above. Paste exactly — capitalization matters.",
  },
  {
    n: 4,
    title: "Paste & tap OK",
    body: (
      <>
        Scroll to the bottom of Settings. Paste into the <strong className="text-white">Code</strong> field,
        then tap <strong className="text-white">OK</strong>. Your rewards show in a Congratulations
        popup.
      </>
    ),
  },
];

export function RedeemGuide() {
  return (
    <section
      id="redeem-guide"
      className="scroll-mt-24 rounded-2xl border border-white/10 bg-[#0b1512]/90 p-5 sm:p-6"
    >
      <div className="flex items-center gap-2">
        <Settings className="h-4 w-4 text-emerald-400" />
        <h2 className="text-lg font-bold text-white">How to redeem</h2>
      </div>
      <p className="mt-1 text-sm text-zinc-400">
        Codes are redeemed in-game Settings — not on this website or Roblox.com.
      </p>

      <ol className="mt-5 space-y-4">
        {steps.map((step) => (
          <li key={step.n} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
              {step.n}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              <p className="mt-0.5 text-sm leading-6 text-zinc-400">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-5 text-sm text-zinc-500">
        Code failed? Rejoin a fresh server or see{" "}
        <Link href="#troubleshooting" className="text-emerald-400 hover:underline">
          troubleshooting
        </Link>
        .
      </p>
    </section>
  );
}
