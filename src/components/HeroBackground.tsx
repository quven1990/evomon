/** LCP layer — server-only, no client imports. */
export function HeroBackground() {
  return (
    <div className="absolute inset-0" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero.webp"
        alt=""
        width={1280}
        height={720}
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050c0a] via-[#050c0a]/85 to-[#050c0a]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050c0a] via-transparent to-transparent" />
    </div>
  );
}
