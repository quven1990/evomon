import { CalendarClock } from "lucide-react";

export function DataFreshness({ label, date }: { label: string; date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">
      <CalendarClock className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
      <span>
        {label}: <time dateTime={date}>{date}</time>
      </span>
    </div>
  );
}
