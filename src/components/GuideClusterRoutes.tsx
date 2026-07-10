import Link from "next/link";
import type { GuideCluster } from "@/data/guide-clusters";

export function GuideClusterRoutes({ cluster }: { cluster: GuideCluster }) {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-[#0b1512] p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-white">{cluster.heading}</h2>
      <p className="mt-2 text-sm leading-7 text-zinc-400">{cluster.lead}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {cluster.routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-emerald-500/30 hover:bg-emerald-500/5"
          >
            {route.tag ? (
              <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-400/90">
                {route.tag}
              </span>
            ) : null}
            <h3 className="mt-1 text-sm font-semibold text-emerald-300 group-hover:underline">
              {route.title} →
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">{route.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
