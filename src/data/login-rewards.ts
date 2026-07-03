export const LOGIN_REWARDS_LAST_CHECKED = "2026-07-03";

export interface LoginRewardEntry {
  day: number;
  item: string;
  quantity: number;
  /** Day 7 grand prize */
  highlight?: boolean;
}

/** Seven-day login streak shown in-game. Verified from live client UI. */
export const sevenDayLoginRewards: LoginRewardEntry[] = [
  { day: 1, item: "Evolution Stone", quantity: 1 },
  { day: 2, item: "Rainbow Egg", quantity: 1 },
  { day: 3, item: "Rainbow Crystal", quantity: 30 },
  { day: 4, item: "Evolution Stone", quantity: 1 },
  { day: 5, item: "Rainbow Crystal", quantity: 30 },
  { day: 6, item: "Evolution Stone", quantity: 1 },
  { day: 7, item: "Rainbow Summon Ticket", quantity: 1, highlight: true },
];

export const loginRewardHowTo =
  "Open Evomon on Roblox — the 7-day login panel appears on the right when rewards are available. Tap each day to claim; missed days break the streak.";

export function formatLoginReward(entry: LoginRewardEntry): string {
  return `${entry.item} ×${entry.quantity}`;
}
