import Link from "next/link";

type Props = {
  href: string;
  label?: string;
};

/** Consistent back link + page title sizing for mobile */
export function PageBack({ href, label = "Home" }: Props) {
  return (
    <Link href={href} className="inline-flex min-h-[44px] items-center text-sm text-zinc-500 hover:text-emerald-300">
      ← {label}
    </Link>
  );
}

export function pageTitleClass() {
  return "mt-3 text-3xl font-black leading-tight text-white sm:mt-4 sm:text-4xl";
}

export function pageLeadClass() {
  return "mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base";
}

export function pageMainClass() {
  return "mx-auto max-w-7xl px-4 py-8 sm:py-10";
}
