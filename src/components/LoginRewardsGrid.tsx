import { formatLoginReward, type LoginRewardEntry } from "@/data/login-rewards";

export function LoginRewardsGrid({ rewards }: { rewards: LoginRewardEntry[] }) {
  return (
    <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[16rem] text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wide text-zinc-500">
            <th className="px-4 py-3">Day</th>
            <th className="px-4 py-3">Reward</th>
          </tr>
        </thead>
        <tbody>
          {rewards.map((entry) => (
            <tr
              key={entry.day}
              className={`border-b border-white/5 ${entry.highlight ? "bg-emerald-500/10" : ""}`}
            >
              <td className="px-4 py-3 font-semibold text-white">Day {entry.day}</td>
              <td className={`px-4 py-3 ${entry.highlight ? "font-medium text-emerald-300" : "text-zinc-300"}`}>
                {formatLoginReward(entry)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
