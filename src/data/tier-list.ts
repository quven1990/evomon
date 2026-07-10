export type TierPick = {
  name: string;
  types: string;
  role: string;
  why: string;
  obtain?: string;
};

export type TierGroup = {
  tier: string;
  label: string;
  color: string;
  picks: TierPick[];
};

/** Community endgame meta — synthesized from July 2026 creator tier lists & guides. */
export const endgameTiers: TierGroup[] = [
  {
    tier: "S",
    label: "Must-have",
    color: "text-rose-300 bg-rose-500/15 border-rose-500/30",
    picks: [
      {
        name: "Lavite → Lavarock",
        types: "Fire / Rock",
        role: "Carry + wall",
        why: "Easy to grab on Lava Crag early, still a top carry late. Fire/Rock coverage plus a counter-style punish after surviving hits.",
        obtain: "Lava Crag (3rd island)",
      },
      {
        name: "Bluebird → Volcrest",
        types: "Flying / Electric",
        role: "Bleed DPS",
        why: "Bleed stacks ramp damage on high-HP targets — melts bosses. Strong for farming routes once evolved.",
        obtain: "Raven Ridge quest line",
      },
      {
        name: "Frostlet → Frostseer",
        types: "Ice / Flying",
        role: "Boss killer",
        why: "Frostbite permanently chips away usable max HP. Stacks make huge boss bars manageable; AOE helps group farming.",
        obtain: "Late-game ice routes",
      },
      {
        name: "Whispurr → Wisphex",
        types: "Psychic / Poison",
        role: "Poison core",
        why: "Best poison line in most lists. Status pressure plus solid damage — worth the evolution stone investment.",
        obtain: "Mid-to-late poison routes",
      },
      {
        name: "Arcub → Arcapex",
        types: "Electric",
        role: "AOE burst",
        why: "Lightning AOE clears waves fast. Harder to obtain early, but one of the strongest late-game damage dealers.",
        obtain: "Funder Cliff boss",
      },
      {
        name: "Tarro → Terragon",
        types: "Grass / Dragon",
        role: "Main tank",
        why: "Self-sustain and bulk for long boss fights. Often called a must-have grass/dragon wall for endgame teams.",
        obtain: "Late grass / dragon content",
      },
    ],
  },
  {
    tier: "A",
    label: "Strong picks",
    color: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    picks: [
      {
        name: "Gobfish line",
        types: "Water",
        role: "Water DPS",
        why: "Underrated water line with good tower coverage. Not always S-tier, but several creators rank it top water after starters.",
        obtain: "Water routes / towers",
      },
      {
        name: "Sparkit → Emfox",
        types: "Fire",
        role: "Early fire",
        why: "Reason to skip the fire starter — grab on early routes instead. Strong through mid game; some lists push it to S.",
        obtain: "Early routes, Lava Crag area",
      },
      {
        name: "Pebble → Pebroll → Pebgolem",
        types: "Rock",
        role: "Early tank",
        why: "Amazing Verdant Valley catch and reliable mid-game wall. Power falls off in deep endgame — plan a replacement.",
        obtain: "Verdant Valley",
      },
      {
        name: "Dattbug",
        types: "Psychic",
        role: "Debuff support",
        why: "Strong psychic debuff kit for fourth-island teams. Great beginner pickup when paired with Mudbud line.",
        obtain: "4th island",
      },
      {
        name: "Vippit line",
        types: "Poison",
        role: "Poison DPS",
        why: "Solid poison damage if you are not running Whispurr yet. Cheaper investment than the top poison line.",
      },
      {
        name: "Pompor",
        types: "Fighting",
        role: "Free fighter",
        why: "Best free-to-play fighting pick in several rankings. Strong if you grab the base from Duck's Town map.",
        obtain: "Duck's Town map",
      },
      {
        name: "Stardrift",
        types: "Grass",
        role: "Grass carry",
        why: "Split opinions: some creators call it top grass, others mid-only. Good if you like the moveset through Crystal-era content.",
      },
    ],
  },
  {
    tier: "B",
    label: "Situational",
    color: "text-emerald-300 bg-emerald-500/15 border-emerald-500/30",
    picks: [
      {
        name: "Blazpup line",
        types: "Fire",
        role: "Starter DPS",
        why: "Fine if you commit to fire and skip Sparkit. Several lists rank it below Lavite and route fires.",
      },
      {
        name: "Clampip line",
        types: "Water",
        role: "Water backup",
        why: "Decent Petal Pond water — not the best water in the game, but solid coverage next to Bubble.",
        obtain: "Petal Pond",
      },
      {
        name: "Mudbud line",
        types: "Ground",
        role: "Ground coverage",
        why: "Pairs well with Dattbug for early island clears. Ground slot filler until you need a dedicated endgame wall.",
      },
      {
        name: "Fluffit",
        types: "Rock",
        role: "Early grinder",
        why: "Llama rock type — nice for early EXP loops, not a long-term core.",
      },
    ],
  },
  {
    tier: "C",
    label: "Low priority",
    color: "text-sky-300 bg-sky-500/15 border-sky-500/30",
    picks: [
      {
        name: "Bubble → Bubblade",
        types: "Water",
        role: "Starter",
        why: "Top starter for island matchups, but multiple endgame lists rank the line low — replace once Lavite / Bluebird come online.",
        obtain: "Starter choice",
      },
      {
        name: "Leafbun line",
        types: "Grass",
        role: "Starter",
        why: "Tanky starter with a slower early route. Often ranked below Bubble and many route catches.",
        obtain: "Starter choice",
      },
      {
        name: "Mopebun",
        types: "Normal",
        role: "Route filler",
        why: "Okay early normal pickup — not worth heavy stone investment.",
      },
      {
        name: "Budling / Silvanarch",
        types: "Grass",
        role: "Grass filler",
        why: "Weak grass line in most community rankings — skip unless you like the design.",
        obtain: "Petal Pond region",
      },
      {
        name: "Homding / Mothbun / Starlu",
        types: "Bug / Normal",
        role: "Dex filler",
        why: "Early dex slots with little team value in current meta lists.",
      },
    ],
  },
];

export const earlyRoutePicks: TierPick[] = [
  {
    name: "Bubble",
    types: "Water",
    role: "Starter",
    why: "Smoothest Verdant Valley + Lava Crag matchups for new accounts.",
    obtain: "Tutorial pick",
  },
  {
    name: "Pebble",
    types: "Rock",
    role: "Tank",
    why: "First real wall — grab before pushing early bosses.",
    obtain: "Verdant Valley",
  },
  {
    name: "Sparkit",
    types: "Fire",
    role: "Coverage",
    why: "Fire damage without committing to Blazpup; pairs well with Bubble teams.",
    obtain: "Early routes / Lava Crag",
  },
  {
    name: "Lavite",
    types: "Fire / Rock",
    role: "Carry",
    why: "Start leveling immediately — do not sleep on this catch.",
    obtain: "Lava Crag",
  },
  {
    name: "Clampip",
    types: "Water",
    role: "Backup",
    why: "Second water slot if Bubble is your only aquatic damage.",
    obtain: "Petal Pond",
  },
];

export const metaDebates = [
  {
    topic: "Bubble — starter god or endgame dead?",
    summary:
      "Creators disagree hard. Early-route guides rank Bubble top tier for island matchups; full-roster lists often drop the line to C/D because route pets outscale it.",
    pick: "Pick Bubble as a new player, plan to bench Bubblade once Lavite or Bluebird is online.",
  },
  {
    topic: "Blazpup vs Sparkit vs Lavite",
    summary:
      "If you grab Sparkit on Lava Crag, Blazpup loses value. Lavite outclasses both for long-term fire investment in every July 2026 list we checked.",
    pick: "Skip fire starter → Sparkit early → pivot stones to Lavite.",
  },
  {
    topic: "Stardrift & Gobfish placement",
    summary:
      "Stardrift ranges from S to C depending on the creator. Gobfish is frequently called underrated water — worth catching if you lack Bluebird.",
    pick: "Treat both as A-tier flex picks until you have a settled endgame trio.",
  },
];

export const TIER_LIST_UPDATED = "July 2026";

/** Evolution stone spend order — for /tier-list/evolution-priority. */
export type EvolutionPriorityStep = {
  step: number;
  title: string;
  detail: string;
  examples: string[];
  avoid: string;
};

export const evolutionPrioritySteps: EvolutionPriorityStep[] = [
  {
    step: 1,
    title: "First stone → the pet already winning fights",
    detail:
      "Spend on the line that is clearing islands, bosses, or dungeons today — not the pet you like on paper. On most routes that is Lavite on Lava Crag, but the rule is simpler: fund performance first.",
    examples: ["Lavite → Lavarock", "Bluebird → Volcrest (after quest unlock)"],
    avoid: "Evolving Bubblade or Blazgrowl while Lavite is still unevolved.",
  },
  {
    step: 2,
    title: "Second stone → whatever wall you are stuck on",
    detail:
      "If Petal Pond grass is the problem, grass jumps up the queue. If boss DPS is the problem, fire or bleed lines move ahead. Pick by blocker, not abstract tier rank.",
    examples: ["Pebble → Pebgolem if early bosses hurt", "Whispuff line when poison routes open"],
    avoid: "Copying a YouTube endgame list before you can reach that island.",
  },
  {
    step: 3,
    title: "Skip duplicate typings until core trio is set",
    detail:
      "Two water lines or two fire lines before mid-game wastes stones. One strong water, one fire/rock, one flex DPS or tank is enough through Amber Acres.",
    examples: ["Bubble line + Lavite is fine — stop at Bubboxer", "Sparkit OR Blazpup line, not both"],
    avoid: "Stoning Clampip, Gobfish, and Bubble in the same week.",
  },
  {
    step: 4,
    title: "Boss specialists after your daily team works",
    detail:
      "Arcub, Frostlet, and Tarro are strong but harder to obtain. Once Lavarock + Bluebird (or equivalent) handle dailies, invest in the boss answer you actually run.",
    examples: ["Arcub → Arcapex for AOE routes", "Frostlet → Frostseer for high-HP bosses"],
    avoid: "Rushing Arcapex before you can farm Funder Cliff reliably.",
  },
  {
    step: 5,
    title: "Re-check at trainer level 30",
    detail:
      "Ultimates and Ascension change combat timing. Pets with better Ultimate windows often deserve the next stone even if they ranked lower pre-30.",
    examples: ["Finish Lavarock before side projects", "See level 30 guide for Ascension order"],
    avoid: "Keeping a pre-30 stone plan after Ultimates unlock.",
  },
];

export const evolutionPriorityFaqs = [
  {
    q: "Should I evolve Bubble first?",
    a: "Usually no after Lava Crag. Bubble helps early islands; Lavite outscales the starter line for stone ROI in July 2026 lists.",
  },
  {
    q: "Lavite or Bluebird first?",
    a: "Lavite first if you are on or near Lava Crag — easier to catch and immediately stabilizes fire/rock fights. Bluebird after Raven Ridge unlocks.",
  },
  {
    q: "When is it okay to evolve a favorite?",
    a: "After your first carry and second blocker pick are evolved and clearing the content you play daily.",
  },
];
