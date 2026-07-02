export type CodeSource = "official" | "community" | "third-party";

export interface CodeEntry {
  code: string;
  reward: string;
  source: CodeSource;
  sourceNote?: string;
  addedAt?: string;
}

export const CODES_LAST_UPDATED = "2026-07-01";
export const CODES_DATA_CHECKED = "2026-07-01";

export const activeCodes: CodeEntry[] = [
  { code: "D50CREW", reward: "10 Evolution Stones, 10 Omni-Stones", source: "community", sourceNote: "Milestone code" },
  { code: "EVO60SPARK", reward: "3 Summon Tickets, 2 Trait Reroll Potions", source: "community" },
  { code: "SeasonComing", reward: "3 Summon Tickets, 10 Advanced Balls", source: "community" },
  { code: "30K-LIKES", reward: "2 Trait Reroll Potions, 2 Talent Vector Potions, 2 Nature Reroll Potions", source: "community" },
  { code: "20000LIKES", reward: "2 Trait Reroll Potions, 5 Medium EXP Fruits", source: "community" },
  { code: "20KMEMBERS", reward: "2 Trait Reroll Potions, 10 Advanced Balls", source: "community" },
  { code: "10KCCU_", reward: "4,000 Coins", source: "third-party", sourceNote: "Reported active — verify in fresh server" },
  { code: "12klikeS", reward: "5 Medium EXP Fruits", source: "third-party", sourceNote: "Case-sensitive" },
  { code: "10kthx", reward: "10 Advanced Balls", source: "third-party" },
  { code: "5000DC", reward: "5 Advanced Balls", source: "community" },
  { code: "DCGIFT", reward: "10 Medium EXP Fruits, 5 Advanced Balls, 1,000 Coins", source: "community" },
  { code: "THXFOR5K", reward: "5 Medium EXP Fruits", source: "official", sourceNote: "Listed in Roblox game description" },
  { code: "2K-LIKES", reward: "5 Medium EXP Fruits", source: "official", sourceNote: "Listed in Roblox game description" },
  { code: "DC2K", reward: "5 Medium EXP Fruits", source: "community" },
  { code: "LIKE1GIFT", reward: "2 Medium EXP Fruits, 1,000 Coins", source: "community" },
  { code: "FORDC1200", reward: "1,000 Coins", source: "community" },
  { code: "EvomonVip", reward: "5 Medium EXP Fruits", source: "community" },
];

export const watchlistCodes: CodeEntry[] = [
  { code: "YTBgift", reward: "2,000 Coins", source: "third-party", sourceNote: "Try after main list" },
  { code: "FORGROUP", reward: "5 Medium EXP Fruits", source: "third-party" },
  { code: "10KLIKES", reward: "Unknown", source: "third-party", sourceNote: "Milestone — unconfirmed" },
  { code: "100KVisits", reward: "Unknown", source: "third-party", sourceNote: "Milestone — unconfirmed" },
];

export const expiredCodes: CodeEntry[] = [];

/** Official Roblox-listing codes — featured above the fold */
export const featuredCodeIds = ["2K-LIKES", "THXFOR5K"] as const;

/** Popular community codes — shown after official block */
export const highlightCodeIds = ["D50CREW", "EVO60SPARK", "30K-LIKES", "DCGIFT"] as const;

export function getFeaturedCodes(): CodeEntry[] {
  return featuredCodeIds
    .map((id) => activeCodes.find((c) => c.code === id))
    .filter((c): c is CodeEntry => Boolean(c));
}

export function getHighlightCodes(): CodeEntry[] {
  return highlightCodeIds
    .map((id) => activeCodes.find((c) => c.code === id))
    .filter((c): c is CodeEntry => Boolean(c));
}

export function sortCodesByTrust(codes: CodeEntry[]): CodeEntry[] {
  const rank = { official: 0, community: 1, "third-party": 2 };
  return [...codes].sort((a, b) => rank[a.source] - rank[b.source]);
}

export const codeTroubleshooting = [
  { problem: "Wrong capitalization", fix: "Copy-paste exactly — codes are case-sensitive." },
  { problem: "Extra space", fix: "Remove spaces before or after the code." },
  { problem: "Tutorial lock", fix: "Finish the tutorial and pick a starter first." },
  { problem: "Old server", fix: "Rejoin Evomon and try in a fresh server." },
  { problem: "Already claimed", fix: "Most codes work once per Roblox account." },
];

export const codesFaq = [
  {
    q: "What are the active Evomon codes?",
    a: "Start with official Roblox-description codes (2K-LIKES, THXFOR5K), then try community milestone codes like 30K-LIKES and DCGIFT in a fresh server.",
  },
  {
    q: "Why does an Evomon code fail?",
    a: "Usually wrong capitalization, tutorial not finished, old server, or the code was already claimed. Use the troubleshooting table above.",
  },
  {
    q: "Where do I redeem Roblox Evomon codes?",
    a: "In-game: tap the gear icon (Settings) in the top bar → scroll to the 代码 / Code box at the bottom → paste the code → tap 好的 (OK). Not on evomon.cc or Roblox.com.",
  },
  {
    q: "When should I check for new codes?",
    a: "Before long sessions, after like/CCU milestones, and after Discord announcements. Next milestone target: 120K likes.",
  },
  {
    q: "Are release codes different from milestone codes?",
    a: "Same redeem flow. Milestone codes drop when the game hits like, member, or visit goals.",
  },
];
