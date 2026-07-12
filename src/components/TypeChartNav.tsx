"use client";

import { useEffect, useState } from "react";
import { trackGuideSection } from "@/lib/analytics";

const sections = [
  { id: "lookup", label: "Type lookup" },
  { id: "islands", label: "Islands" },
  { id: "reference", label: "All types" },
  { id: "teams", label: "Teams" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function TypeChartNav() {
  const [active, setActive] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Type chart sections"
      className="sticky top-16 z-20 -mx-4 border-b border-white/10 bg-[#040a09]/95 px-4 py-3 backdrop-blur-md sm:static sm:top-auto sm:mx-0 sm:rounded-2xl sm:border sm:px-3 sm:py-2"
    >
      <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => {
              setActive(section.id);
              trackGuideSection("type-chart", section.id);
            }}
            className={`inline-flex min-h-[44px] shrink-0 items-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              active === section.id
                ? "bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/40"
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
            }`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
