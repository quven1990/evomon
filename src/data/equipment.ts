/**
 * Equipment progression notes — multi-source community consensus.
 * No invented set names, refine rates, or exact stone costs.
 */

export type EquipmentSourceRef = { label: string; url?: string };

export const EQUIPMENT_LAST_CHECKED = "2026-08-04";

export const equipmentQuickAnswer =
  "Reach trainer level 40 (after Ascension raises your cap), open Equipment Challenges on Silent Sands, farm gear + Refine/Enhance Stones, then talk to Carly at the Main City Gear Station. Enhance only keepers; Refine Legendary bonus rolls — not weak bases.";

export const equipmentSteps: { title: string; body: string }[] = [
  {
    title: "Unlock gate",
    body: "Community guides agree Equipment Challenges unlock at Player Level 40 on Silent Sands. Getting there means Player EXP plus Ascension (often framed as the fourth Ascension raising level caps). Confirm the live portal lock message in-client.",
  },
  {
    title: "Where to run",
    body: "Silent Sands equipment dungeon / portal (near Caleb in several walkthroughs). Pick a challenge map and zone when forming a party — zones drop different set pieces (look for crown / set icons in UI).",
  },
  {
    title: "What drops",
    body: "Equipment pieces, Enhance Stones, Refine Stones, and Player EXP. AllThings.How also notes Multidrop-style tickets for equipment runs and free daily tickets — treat ticket counts as patch-sensitive.",
  },
  {
    title: "Gear Station (Carly)",
    body: "Main City Gear Station NPC Carly handles Enhance, Refine, Transfer, and Salvage in community guides. Line up stones before you start rolling.",
  },
];

export const enhanceVsRefine: {
  name: string;
  does: string;
  spendWhen: string;
  avoid: string;
}[] = [
  {
    name: "Enhance",
    does: "Raises the primary (top-line) stat on a piece. Community guides say it costs Enhance Stones and Coins, with success chance dropping at higher levels.",
    spendWhen: "Pieces you will keep long-term, or plan to Transfer levels from.",
    avoid: "Placeholder Epic fodder you will replace tomorrow.",
  },
  {
    name: "Refine",
    does: "Rerolls the bonus-stat box (and grades) on gear — typically discussed for Legendary bases. Primary stat stays put.",
    spendWhen: "Legendary piece that already has the primary you want.",
    avoid: "Trying to “fix” a bad primary with Refine — it cannot rewrite the main line.",
  },
];

export const equipmentSpendRules: string[] = [
  "Farm the highest Equipment Challenge you can clear consistently.",
  "Pick zones for the slot / set you actually need (UI crown icons).",
  "Enhance keepers only; salvage extras for Refine Stones when the UI offers it.",
  "Refine Legendary bonus boxes after the primary is correct.",
  "Catch Master suit is separate adventure gear — useful for shiny-egg boss catches, not a dungeon drop substitute.",
];

export const equipmentFaqs: { q: string; a: string }[] = [
  {
    q: "When does Evomon equipment unlock?",
    a: "Community guides: Player Level 40 on Silent Sands after Ascension raises your cap. The portal stays locked until then.",
  },
  {
    q: "What is the difference between Refine and Enhance?",
    a: "Enhance pushes the primary stat. Refine rerolls bonus stats on a strong Legendary base. They are different currencies and different jobs.",
  },
  {
    q: "Where do you upgrade gear?",
    a: "Main City Gear Station — talk to Carly (community name). Enhance, Refine, Transfer, and Salvage happen there.",
  },
  {
    q: "EXP Dungeon vs Equipment Dungeon?",
    a: "EXP Dungeon unlocks earlier (community: ~Lv 10, Petal Pond) for fruits/coins. Equipment Dungeon is the Lv 40 Silent Sands gear faucet. Different tickets and drops.",
  },
];

export const equipmentSources: EquipmentSourceRef[] = [
  {
    label: "Nerdschalk — Refine / Enhance guide",
    url: "https://nerdschalk.com/evomon-equipment-refine-enhance-guide/",
  },
  {
    label: "AllThings.How — Sets, passives, refine",
    url: "https://allthings.how/evomon-equipment-how-to-unlock-sets-passives-and-refine-gear/",
  },
  {
    label: "gamer.org — Equipment guide",
    url: "https://www.gamer.org/evomon-equipment-guide/",
  },
];
