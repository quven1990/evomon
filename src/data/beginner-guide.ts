export const BEGINNER_GUIDE_UPDATED = "July 2026";

export const quickStart = [
  {
    step: "Redeem codes",
    detail: "Free EXP Fruits, Advanced Balls, and coins before your first grind session.",
    href: "/codes",
  },
  {
    step: "Claim 7-day login",
    detail: "Evolution Stones and a Rainbow Summon Ticket on day 7 — do not skip days.",
    href: "/guides/farming#login-rewards",
  },
  {
    step: "Follow main story quests",
    detail: "The quest tracker on the right is your primary route — it awards the most player EXP early.",
  },
  {
    step: "Pick Bubble (or read starters)",
    detail: "Water starter smooths Verdant Valley and Lava Crag; route catches outscale all starters later.",
    href: "/starters",
  },
];

export const ballRules = [
  {
    ball: "Basic / infinite balls",
    use: "Tutorial islands and quest catches only.",
  },
  {
    ball: "King Ball",
    use: "Guaranteed SSS talent — save for Lavite, Bluebird, Tarro, or shiny encounters.",
  },
  {
    ball: "Prismatic Ball",
    use: "Guaranteed prismatic look — save for shiny catches or shiny egg hatches, not random route fodder.",
  },
];

export const resourceRules = [
  "Do not waste Evolution Stones on starters or duplicate typings — stones are scarce (merchant, login, tower, battle pass).",
  "Spend summon-rune tokens on Evolution Stones before Large EXP Fruits — creatures level from battles; stones do not.",
  "Preserve King and Prismatic balls until mid-game targets or shiny hunts.",
  "AFK creature EXP is shared across your party — unequip extras to level one carry faster.",
];

export type IslandGuide = {
  island: string;
  catch: string[];
  skip: string[];
  notes: string;
};

export const islandRoute: IslandGuide[] = [
  {
    island: "Verdant Valley (tutorial)",
    catch: ["Pebble — early tank; learns Counter when evolved", "Quest targets only — do not over-invest"],
    skip: ["Grinding every spawn — most early route pets get replaced"],
    notes: "Use infinite balls. Main quest unlocks the next island.",
  },
  {
    island: "Petal Pond",
    catch: ["Clampip — water coverage for the next fire-heavy island", "Unlock EXP Challenge dungeon — run daily"],
    skip: ["Mushroom / grass filler spawns", "Sparkit unless you need fire now"],
    notes: "First place players regret spending Evolution Stones on non-cores.",
  },
  {
    island: "Lava Crag",
    catch: [
      "Lavite / Lavarock — top priority; fire + rock + Counter",
      "Farm with your water type from Petal Pond",
    ],
    skip: ["Adventure suits — low priority early (no pity)", "Evolving everything you see"],
    notes: "Community consensus: evolve and level Lavarock first. Aim for SSS talent; shiny is a bonus.",
  },
  {
    island: "Amber Acres",
    catch: ["Summon runes — NPC duels for Evolution Stone tokens"],
    skip: ["Dattbug line for most players — outscaled by Wispuff + Terragon later"],
    notes: "Exchange tokens for Evolution Stones before EXP fruits.",
  },
  {
    island: "Autumn Hill",
    catch: ["Tarro / Terragon — endgame grass/dragon tank (party or ice-types help)"],
    skip: ["Gym leader rush without prep — bring Lavarock and type counters"],
    notes: "Murkwood Tarro fights are easier with a high-level friend; ice deals 4× damage to grass.",
  },
  {
    island: "Shiver Snow",
    catch: ["Nothing critical — push main quest"],
    skip: ["Most local spawns"],
    notes: "Get Frostlet later in Cascade-era content for your ice slot.",
  },
  {
    island: "Flying Territory",
    catch: ["King of Flying — hard boss; Tarro’s sustain helps despite type disadvantage"],
    skip: ["Expecting a solo win without levels or party"],
    notes: "Level ~75 area — group up for first clears.",
  },
  {
    island: "Raven Ridge",
    catch: ["Bluebird → Volcrest — best bird line; wild route above boss area", "Boss clear for quests"],
    skip: ["Chirpy and other filler spawns"],
    notes: "See tier list for why Bluebird stays on teams through endgame.",
  },
  {
    island: "Silent Sands",
    catch: ["Tincog — only steel-type (optional)", "Equipment Dungeon unlocks at trainer level 40"],
    skip: ["Heavy investment in steel unless you love the slot"],
    notes: "Equipment runs give 200 player EXP per ticket (up to ~3/day).",
  },
];

export const coreTeamTargets = [
  { name: "Lavarock", role: "Fire / rock carry", priority: "Evolve first" },
  { name: "Terragon", role: "Main tank", priority: "Mid-game hunt" },
  { name: "Bluebird / Volcrest", role: "Flying / electric DPS", priority: "Raven Ridge" },
  { name: "Frostlet", role: "Ice AoE + frostbite", priority: "Late mid-game" },
  { name: "Wispuff", role: "Psychic / poison", priority: "Netherland area" },
];

export const playerXpSources = [
  { source: "Daily quests", value: "~2,000 player EXP", note: "Highest priority — ~45 min with world-boss step" },
  { source: "EXP Challenge", value: "50 EXP × 2 free tickets", note: "Petal Pond dungeon" },
  { source: "World boss", value: "100 EXP per 10 defeats", note: "Claim reward twice daily; party helps" },
  { source: "Equipment Challenge", value: "200 EXP per run", note: "Trainer level 40+, ~3/day" },
  { source: "Dex / Index entries", value: "50 EXP each new slot", note: "Nice bonus, not a main grind" },
];

export const ascensionWalls = [
  {
    title: "First wall (~level 28–30)",
    body: "Ascension quest requires trainer level 30. You may need to wait for the next daily reset even after farming — plan dailies instead of brute-forcing.",
  },
  {
    title: "Evolution level gates",
    body: "Many evolutions need level 70+ on the pre-evo. During an ascension wait, focus on catching and leveling — not spending stones on placeholders.",
  },
];

export const suitTips = [
  {
    suit: "Catch Master (epic)",
    when: "Boss shiny-egg farming or hard catches",
    why: "+capture success and extra attempts — needed when catches drop eggs.",
  },
  {
    suit: "Breeder (epic)",
    when: "AFK leveling one pet",
    why: "Bonus EXP while grinding wild encounters.",
  },
  {
    suit: "Elite Hunter (legendary)",
    when: "Counter users like Lavarock",
    why: "Take more damage → bigger Counter returns. Avoid damage-reduction suits on them.",
  },
  {
    suit: "Guardian (legendary)",
    when: "Tarro / sustain tanks",
    why: "Stack Seed Bomb healing — you need to survive turns, not amplify incoming hits.",
  },
];
