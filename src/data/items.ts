/**
 * Consumable / progression items — spend-first hub, not a full database scrape.
 * Only include rows with multi-source or on-site verified notes.
 * Do not invent drop rates, shop prices, or heal amounts.
 */

export type ItemCategory =
  | "catchers"
  | "evolution"
  | "rerolls"
  | "tickets"
  | "exp"
  | "gear-mats";

export type ItemSourceRef = {
  label: string;
  url?: string;
};

export type ItemEntry = {
  name: string;
  category: ItemCategory;
  /** Local sprite under /items/{icon}.png (community item art CDN). */
  icon: string;
  /** What it does — rewrite in our voice; no invented numbers. */
  does: string;
  /** When to spend. */
  spendWhen: string;
  /** Common waste / skip advice. */
  avoid?: string;
  /** How players usually get it — only community-agreed channels. */
  obtain: string;
  related?: { href: string; label: string }[];
  sources: ItemSourceRef[];
};

export const ITEMS_LAST_CHECKED = "2026-08-04";

export const itemCategories: {
  id: ItemCategory;
  title: string;
  lead: string;
}[] = [
  {
    id: "catchers",
    title: "Catchers (balls)",
    lead: "Capture tools. Better balls matter most on bosses and shiny-egg routes where a failed throw wastes the whole clear.",
  },
  {
    id: "evolution",
    title: "Evolution materials",
    lead: "Every evolve needs the universal Evolution Stone plus matching Element Stones (Omni can cover an Element gap). Spend on the line you will keep.",
  },
  {
    id: "rerolls",
    title: "Reroll potions",
    lead: "Fix Nature, Trait, or Talent distribution on a keeper — not on every wild catch.",
  },
  {
    id: "tickets",
    title: "Summon & dungeon tickets",
    lead: "Spawn Summon Ruins bosses or run daily dungeon challenges. Codes and login often top these up.",
  },
  {
    id: "exp",
    title: "EXP Fruit",
    lead: "Bag EXP without grinding. Save Large fruit for carries you intend to keep.",
  },
  {
    id: "gear-mats",
    title: "Gear materials (short list)",
    lead: "Refine / Enhance stones belong to the equipment loop — details live on the equipment guide.",
  },
];

export const itemEntries: ItemEntry[] = [
  {
    name: "Basic Catcher / Basic Ball",
    icon: "basic-catcher",
    category: "catchers",
    does: "Standard capture tool for wild Evomon after a KO. Community guides treat it as the always-available starter catcher.",
    spendWhen: "Early routes and volume farming when the target is weakened.",
    avoid: "Do not rely on it alone for hard bosses if you have Advanced / King stock.",
    obtain: "Starter inventory; shops and common rewards.",
    related: [
      { href: "/blog/how-to-get-eggs-evomon", label: "How to get eggs" },
      { href: "/guides/beginner", label: "Beginner guide" },
    ],
    sources: [
      { label: "AllThings.How — Items list (catchers)", url: "https://allthings.how/evomon-items-list-every-catcher-stone-potion-and-where-to-get-it/" },
      { label: "On-site beginner + eggs guides" },
    ],
  },
  {
    name: "Advanced Ball / Advance Catcher",
    icon: "advanced-ball",
    category: "catchers",
    does: "Stronger capture ball for tougher wilds and bosses. Community lists often call out a high catch guarantee — confirm the live tooltip.",
    spendWhen: "Boss catches and routes where failed throws waste time (egg farms).",
    obtain: "Shops, boss chests, codes (often listed as Advanced Balls).",
    related: [
      { href: "/codes", label: "Codes" },
      { href: "/guides/mutations/shiny-egg", label: "Shiny egg guide" },
    ],
    sources: [
      { label: "AllThings.How — Items list", url: "https://allthings.how/evomon-items-list-every-catcher-stone-potion-and-where-to-get-it/" },
      { label: "On-site codes rewards (Advanced Balls)" },
    ],
  },
  {
    name: "King Ball",
    icon: "king-ball",
    category: "catchers",
    does: "Premium catcher community guides use when they want a high Talent outcome on the catch (often described as SSS-oriented). Exact UI wording can patch — read the ball tooltip.",
    spendWhen: "Keeper catches that matter (final forms, boss eggs you will build).",
    avoid: "Do not burn King Balls on disposable route fodder.",
    obtain: "Battle Pass / level-pass style rewards and special quests (community lists).",
    related: [
      { href: "/guides/mutations/shiny-egg", label: "Shiny egg guide" },
      { href: "/blog/shiny-arcapex-evomon-guide", label: "Shiny Arcapex" },
    ],
    sources: [
      { label: "AllThings.How — Items list", url: "https://allthings.how/evomon-items-list-every-catcher-stone-potion-and-where-to-get-it/" },
      { label: "On-site shiny / pity guides (King Ball on keepers)" },
    ],
  },
  {
    name: "Prismatic Ball",
    icon: "prismatic-ball",
    category: "catchers",
    does: "Forces the Sparkle / Prismatic cosmetic layer on a catch or when used on a shiny-egg hatch. Community creators treat it as the flex/cosmetic ball — not a substitute for field shiny pity math.",
    spendWhen: "Shiny eggs you already earned (especially boss eggs) when you also want Prismatic looks.",
    avoid: "Do not waste on random weak wilds if you are saving for boss shiny eggs.",
    obtain: "Shop / premium pass tracks and invite-style rewards (community lists).",
    related: [
      { href: "/blog/prismatic-egg-evomon", label: "Prismatic egg guide" },
      { href: "/blog/how-to-hatch-eggs-evomon", label: "How to hatch eggs" },
      { href: "/blog/what-is-sparkle-evomon", label: "What is Sparkle" },
    ],
    sources: [
      { label: "On-site Prismatic Egg + hatch guides (YouTube-sourced)" },
      { label: "AllThings.How — Items list (obtain channels)", url: "https://allthings.how/evomon-items-list-every-catcher-stone-potion-and-where-to-get-it/" },
    ],
  },
  {
    name: "Evolution Stone",
    icon: "evolution-stone",
    category: "evolution",
    does: "Universal evolution catalyst. Paired with matching Element Stones (and level milestone) in the Evolve UI.",
    spendWhen: "Only on the line you will keep — see evolution priority.",
    avoid: "Do not empty early stock on duplicate typings or vanity lines.",
    obtain: "Exchange Merchant (tokens from Summon fights), island / Summon Ruins bosses, Battle Pass and level rewards, Traveling Merchant (community).",
    related: [
      { href: "/tier-list/evolution-priority", label: "Evolution priority" },
      { href: "/guides/beginner", label: "Beginner guide" },
    ],
    sources: [
      { label: "Sportskeeda — How to get Evolution Stones", url: "https://www.sportskeeda.com/roblox-news/how-get-evolution-stones-evomon" },
      { label: "Nerdschalk — Evolution / Element / Omni Stones", url: "https://nerdschalk.com/how-to-get-evolution-element-omni-stones-evomon-roblox/" },
      { label: "Bloxodes — Evolution materials", url: "https://bloxodes.com/wiki/evomon/items" },
    ],
  },
  {
    name: "Element Stones",
    icon: "element-stone",
    category: "evolution",
    does: "Type-locked stones (Fire, Water, Grass, Electric, …). Dual-type lines need both elements covered. Exact counts are per Evolve UI — we do not invent numbers.",
    spendWhen: "When evolving the matching element line you are funding.",
    obtain: "First-clear NPC trainers, island bosses, and Summon Ruins bosses matching the element (community).",
    related: [
      { href: "/tier-list/evolution-priority", label: "Evolution priority" },
      { href: "/map-zones", label: "Map zones" },
    ],
    sources: [
      { label: "AllThings.How — Evolution items", url: "https://allthings.how/evomon-evolution-items/" },
      { label: "Nerdschalk — stone farms", url: "https://nerdschalk.com/how-to-get-evolution-element-omni-stones-evomon-roblox/" },
    ],
  },
  {
    name: "Omni Stone / Omni-Stone",
    icon: "omni-stone",
    category: "evolution",
    does: "Substitutes for a missing Element Stone (one Omni ≈ one Element slot). Still need Evolution Stones and the level gate.",
    spendWhen: "When a specific Element Stone is the only blocker on a keeper evolve.",
    avoid: "Do not burn Omni on lines you will bench.",
    obtain: "Exchange / Traveling Merchant, Tower rewards, Battle Pass, some boss/shop sources (community). Codes sometimes grant Omni-Stones.",
    related: [
      { href: "/codes", label: "Codes" },
      { href: "/tier-list/evolution-priority", label: "Evolution priority" },
    ],
    sources: [
      { label: "Bloxodes — Omni Stone", url: "https://bloxodes.com/wiki/evomon/items" },
      { label: "Nerdschalk — Omni Stone", url: "https://nerdschalk.com/how-to-get-evolution-element-omni-stones-evomon-roblox/" },
      { label: "On-site codes (e.g. Omni-Stones rewards)" },
    ],
  },
  {
    name: "Nature Reroll Potion",
    icon: "nature-reroll",
    category: "rerolls",
    does: "Rerolls Nature (+10% / −10% stat personality).",
    spendWhen: "On a keeper with the right Talent/Trait already locked.",
    obtain: "Codes, Battle Pass / shops / Tower (community). Official-like codes often list Nature Reroll Potions.",
    related: [
      { href: "/natures", label: "Natures table" },
      { href: "/blog/best-nature-lavite-evomon", label: "Lavite nature example" },
      { href: "/codes", label: "Codes" },
    ],
    sources: [
      { label: "On-site codes + natures page" },
      { label: "Bloxodes — Nature Reroll Potion", url: "https://bloxodes.com/wiki/evomon/items" },
    ],
  },
  {
    name: "Trait Reroll Potion",
    icon: "trait-reroll",
    category: "rerolls",
    does: "Rerolls the passive Trait on a caught Evomon.",
    spendWhen: "When the species Trait pool has a Legendary you are chasing on a keeper.",
    obtain: "Codes (frequent), Battle Pass / shops / Tower (community).",
    related: [
      { href: "/traits", label: "Traits list" },
      { href: "/codes", label: "Codes" },
    ],
    sources: [
      { label: "On-site codes (Trait Reroll Potions)" },
      { label: "Bloxodes — Trait Reroll Potion", url: "https://bloxodes.com/wiki/evomon/items" },
    ],
  },
  {
    name: "Talent Vector Potion",
    icon: "talent-vector",
    category: "rerolls",
    does: "Rerolls Talent stat distribution. Community notes: it does not raise Talent letter rank by itself.",
    spendWhen: "On high-rank Talent keepers whose IV-like spread is awkward.",
    obtain: "Codes, Battle Pass, Tower (community).",
    related: [
      { href: "/codes", label: "Codes" },
      { href: "/guides/mutations", label: "Mutations hub" },
    ],
    sources: [
      { label: "Bloxodes — Talent Vector Potion", url: "https://bloxodes.com/wiki/evomon/items" },
      { label: "On-site codes (Talent Vector Potions)" },
    ],
  },
  {
    name: "Summon Ticket",
    icon: "summon-ticket",
    category: "tickets",
    does: "Spawns Summon Ruins bosses — feeds Exchange Tokens, Element Stones, and related shop loops.",
    spendWhen: "When you need stones/tokens for the Exchange Merchant or a typed boss farm.",
    obtain: "Codes, trainers/bosses, Battle Pass style rewards (community).",
    related: [
      { href: "/codes", label: "Codes" },
      { href: "/map-zones", label: "Map zones (Summon Ruins)" },
    ],
    sources: [
      { label: "Sportskeeda — Summon Tickets note", url: "https://www.sportskeeda.com/roblox-news/how-get-evolution-stones-evomon" },
      { label: "On-site codes (Summon Tickets)" },
    ],
  },
  {
    name: "EXP Challenge / Multidrop tickets",
    icon: "exchange-token",
    category: "tickets",
    does: "Entry tickets for daily EXP Dungeon (Petal Pond, unlock ~Lv 10) and Equipment Dungeon (Silent Sands, unlock Lv 40). Community guides list free daily allotments — confirm in-client.",
    spendWhen: "Every day you can clear the dungeon reliably.",
    obtain: "Daily free tickets + pass / quest top-ups (community).",
    related: [
      { href: "/equipment", label: "Equipment guide" },
      { href: "/guides/farming", label: "Farming guide" },
    ],
    sources: [
      { label: "AllThings.How — EXP vs Equipment dungeons", url: "https://allthings.how/evomon-dungeons-how-the-exp-and-equipment-runs-work/" },
      { label: "On-site farming + level-30 guides" },
    ],
  },
  {
    name: "EXP Fruit (Small / Medium / Large)",
    icon: "exp-fruit",
    category: "exp",
    does: "Feeds EXP without battling. Community tables treat Large as far more valuable than Small — save Large for keepers.",
    spendWhen: "Pushing a carry to an evolve gate or Ultimate breakpoint.",
    avoid: "Do not dump Large fruit on pets you will release.",
    obtain: "Battles, release fodder, EXP Dungeon, quests, codes.",
    related: [
      { href: "/guides/farming", label: "Farming guide" },
      { href: "/codes", label: "Codes" },
    ],
    sources: [
      { label: "Bloxodes — EXP Fruit", url: "https://bloxodes.com/wiki/evomon/items" },
      { label: "AllThings.How — EXP Fruit tiers", url: "https://allthings.how/evomon-items-list-every-catcher-stone-potion-and-where-to-get-it/" },
      { label: "On-site codes (Medium EXP Fruits)" },
    ],
  },
  {
    name: "Refine Stone",
    icon: "refine-stone",
    category: "gear-mats",
    does: "Rerolls bonus stats / grades on equipment (community: best spent on Legendary bases). Full loop on the equipment page.",
    spendWhen: "After you have a Legendary piece with a primary stat worth keeping.",
    obtain: "Equipment Challenges, salvage, Battle Pass (community).",
    related: [{ href: "/equipment", label: "Equipment guide" }],
    sources: [
      { label: "Nerdschalk — Refine / Enhance", url: "https://nerdschalk.com/evomon-equipment-refine-enhance-guide/" },
      { label: "AllThings.How — Equipment sets & refine", url: "https://allthings.how/evomon-equipment-how-to-unlock-sets-passives-and-refine-gear/" },
    ],
  },
  {
    name: "Enhance Stone",
    icon: "enhance-stone",
    category: "gear-mats",
    does: "Raises a piece’s primary (top-line) power. Costs stones + Coins at the Gear Station (community).",
    spendWhen: "Only on gear you plan to keep or transfer forward.",
    obtain: "Equipment Challenges and Battle Pass (community).",
    related: [{ href: "/equipment", label: "Equipment guide" }],
    sources: [
      { label: "Nerdschalk — Enhance Stones", url: "https://nerdschalk.com/evomon-equipment-enhance-refine-stones-guide/" },
      { label: "gamer.org — Equipment guide", url: "https://www.gamer.org/evomon-equipment-guide/" },
    ],
  },
];

export const itemFaqs: { q: string; a: string }[] = [
  {
    q: "What items should I spend first in Evomon?",
    a: "Fund Evolution Stones into your priority carry, use Advanced/King balls on bosses you will keep, and save Prismatic Balls for shiny-egg hatches you care about. Reroll potions only after Talent/catch quality is worth it.",
  },
  {
    q: "What is the difference between Evolution Stone and Element Stone?",
    a: "Evolution Stone is universal. Element Stones are type-locked. Most evolves need both at a level milestone. Omni Stone can cover a missing Element slot.",
  },
  {
    q: "Does Talent Vector Potion raise Talent rank?",
    a: "Community item guides say no — it reshuffles which stats the Talent boosts. Letter rank stays the same.",
  },
  {
    q: "King Ball vs Prismatic Ball?",
    a: "King Ball is the community pick for high-Talent keeper catches. Prismatic Ball is for Sparkle/Prismatic cosmetics (including shiny-egg hatches). Confirm live tooltips after patches.",
  },
];

export function itemsInCategory(category: ItemCategory): ItemEntry[] {
  return itemEntries.filter((item) => item.category === category);
}

/** Deduped page-level sources for GEO / citation footers. */
export function itemPageSources(): ItemSourceRef[] {
  const seen = new Set<string>();
  const out: ItemSourceRef[] = [];
  for (const entry of itemEntries) {
    for (const src of entry.sources) {
      const key = `${src.label}|${src.url ?? ""}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(src);
    }
  }
  return out;
}
