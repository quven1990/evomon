import type { PetDetailExtra } from "./pet-details";

/**
 * Season Pass EVENT + Expedition Isles (Cyanrock Valley) pets.
 * Sources: community wiki combat FAQ; Sportskeeda / AllThings.How obtain guides (Aug 2026).
 * No invented wild level bands or stone costs.
 */
export const petDetailsExpeditionBatch: Record<string, PetDetailExtra> = {
  boltonia: {
    metaTitle: "Boltonia Evomon — Season Pass Electric (#089)",
    metaDescription:
      "Boltonia is a standalone Electric from the Season Pass egg (free ~Lv 10). Stats (SpA/Spe), no evolution, shiny egg notes, vs Arcapex.",
    location: "Season Pass egg — not a wild catch",
    weather: "Any",
    role: "Electric special opener / pass obtain",
    blurb:
      "Boltonia (#089) is an EVENT Electric steed that does not evolve — what you hatch is the final form. Community wiki bases lean Special Attack 113 and Speed 115 (BST 510) with TrueDmg in the trait pool. Obtain is the Season Pass, not a map spawn: community guides put Boltonia’s Egg on the free track around pass level 10 (S-rank+ Talent). Shiny Boltonia is tied to the premium Shiny Egg track — confirm the live ladder in your client. Treat it as a flexible Electric opener; do not expect Arcapex-level boss ceiling.",
    evolutionNote:
      "No multi-stage line on our sheet — Boltonia is standalone. Do not save Evolution Stones expecting a follow-up form.",
    shinyHuntNote:
      "The free Season Pass egg is a normal egg (no shiny roll). Community reports put Shiny Boltonia eggs on the premium Season Pass ladder — check current reward text in-game.",
    relatedLinks: [
      { href: "/dex/arcapex", label: "Arcapex (Electric final)" },
      { href: "/dex/astraknight", label: "Astraknight (Battle Pass)" },
      { href: "/blog/how-to-hatch-eggs-evomon", label: "How to hatch eggs" },
      { href: "/guides/mutations/shiny-egg", label: "Shiny egg guide" },
    ],
    faqs: [
      {
        q: "Where do you catch Boltonia in Evomon?",
        a: "You do not wild-catch it. Claim Boltonia’s Egg from the Season Pass (community: free track around level 10), then hatch it in the Hatching Chamber.",
      },
      {
        q: "Does Boltonia evolve?",
        a: "No — it is a standalone Electric entry. The hatch is already the full form.",
      },
      {
        q: "How do you get Shiny Boltonia?",
        a: "Community guides say the free egg cannot roll shiny. Premium Season Pass Shiny Egg rewards are the documented path — confirm levels on your client’s pass UI.",
      },
      {
        q: "Boltonia vs Arcapex?",
        a: "Both Electric. Arcapex is the Thunder Cliffs Arcub final with a higher combat ceiling; Boltonia is a pass obtain that skips the wild egg grind. Use whichever you already own for the fight.",
      },
      {
        q: "What are Boltonia’s base stats?",
        a: "Community wiki bases: HP 76, Attack 60, Defense 73, Sp. Atk 113, Sp. Def 73, Speed 115 (BST 510).",
      },
    ],
  },

  coulomb: {
    metaTitle: "Coulomb Evomon — Cyanrock Electric Opener",
    metaDescription:
      "Coulomb (#028) is the Cyanrock Valley Electric opener → Coultron → Coulomtis. Unlock Expedition Isles, catch route, and base stats.",
    location: "Cyanrock Valley (Expedition Isles)",
    weather: "Any",
    role: "Electric line opener",
    typesDisplay: "Electric",
    blurb:
      "Coulomb is the first stage of the Expedition Isles Electric line (Coulomb → Coultron → Coulomtis). Community wiki places all three on Cyanrock Valley after you unlock Expedition Isles — sports/community guides commonly gate the world around Player Level 55 or the Expedition questline. Base sheet is tiny (BST 256); farm a keeper Talent here, then evolve. Thunderlord sits in the community trait pool.",
    evolutionNote:
      "Coulomb → Coultron → Coulomtis. Confirm Evolution Stone / Electric stone costs in the Evolve UI — we do not invent counts.",
    relatedLinks: [
      { href: "/dex/coultron", label: "Coultron" },
      { href: "/dex/coulomtis", label: "Coulomtis" },
      { href: "/map-zones#cyanrock-valley", label: "Cyanrock Valley" },
      { href: "/dex/cyanie", label: "Cyanie (same island)" },
    ],
    faqs: [
      {
        q: "Where do you catch Coulomb in Evomon?",
        a: "Cyanrock Valley inside Expedition Isles. Unlock the world first (community: ~Player Level 55 / Expedition questline), then catch after the KO.",
      },
      {
        q: "What does Coulomb evolve into?",
        a: "Coultron, then Coulomtis — a three-stage Electric line.",
      },
      {
        q: "Coulomb vs Cyanie?",
        a: "Same island. Coulomb starts a pure Electric evo line; Cyanie is the Electric/Rock pony line into Cyanknight. Different roles and typing.",
      },
      {
        q: "What are Coulomb’s base stats?",
        a: "Community wiki bases: HP 36, Attack 42, Defense 40, Sp. Atk 45, Sp. Def 50, Speed 43 (BST 256).",
      },
    ],
  },

  coultron: {
    metaTitle: "Coultron Evomon — Mid Electric Evolution",
    metaDescription:
      "Coultron (#029) is Coulomb’s mid form toward Coulomtis on Cyanrock Valley. When to evolve, stats, and Expedition Isles context.",
    location: "Cyanrock Valley (Expedition Isles); or Via Evo",
    weather: "Any",
    role: "Electric mid evolution",
    blurb:
      "Coultron is the bridge between Coulomb and Coulomtis (community BST 360). Evolve only when you already own a keeper Coulomb and can finish the final soon — parking forever on the mid form wastes the Cyanrock grind. Same island wilds can also drop mid/final forms; still prefer evolving a Talent you already like.",
    evolutionNote:
      "Coulomb → Coultron → Coulomtis. Check live stone costs before spending.",
    relatedLinks: [
      { href: "/dex/coulomb", label: "Coulomb catch route" },
      { href: "/dex/coulomtis", label: "Coulomtis final" },
      { href: "/map-zones#cyanrock-valley", label: "Cyanrock Valley" },
    ],
    faqs: [
      {
        q: "Is Coultron a wild catch or only an evolution?",
        a: "Community wiki lists Cyanrock Valley for the whole line, so mid forms can appear wild — evolving a keeper Coulomb is still the safer Talent path.",
      },
      {
        q: "What does Coultron evolve into?",
        a: "Coulomtis, the Electric final of the line.",
      },
      {
        q: "What are Coultron’s base stats?",
        a: "Community wiki bases: HP 51, Attack 57, Defense 57, Sp. Atk 65, Sp. Def 70, Speed 60 (BST 360).",
      },
    ],
  },

  coulomtis: {
    metaTitle: "Coulomtis Evomon — Cyanrock Electric Final",
    metaDescription:
      "Coulomtis (#030) is the Coulomb-line Electric final (SpA 100). Cyanrock Valley route, stats, and vs Cyanknight.",
    location: "Cyanrock Valley (Expedition Isles); or Via Evo",
    weather: "Any",
    role: "Electric special closer",
    blurb:
      "Coulomtis is the Expedition Isles Electric closer (community Sp. Atk 100 / Sp. Def 96, BST 518) with Thunderlord in the trait pool. Evolve from a keeper Coulomb when you need a dedicated Electric special for Cyanrock and later content. Compare with Cyanknight if you specifically want Electric/Rock dual coverage from the same island.",
    evolutionNote:
      "Final stage of Coulomb → Coultron → Coulomtis. No further public evolution on our sheet.",
    shinyHuntNote:
      "Hunt shiny on Coulomb wild loops when possible, then evolve — same pattern as other multi-stage lines.",
    relatedLinks: [
      { href: "/dex/coulomb", label: "Coulomb opener" },
      { href: "/dex/cyanknight", label: "Cyanknight" },
      { href: "/dex/arcapex", label: "Arcapex" },
      { href: "/map-zones#cyanrock-valley", label: "Cyanrock Valley" },
    ],
    faqs: [
      {
        q: "Is Coulomtis worth evolving?",
        a: "Yes if you need an Expedition Isles Electric special and already own a keeper Coulomb. It is not an early-route stone sink.",
      },
      {
        q: "Coulomtis vs Cyanknight?",
        a: "Coulomtis is pure Electric from the Coulomb line. Cyanknight is Electric/Rock from Cyanie — better into Fire/Ice/Poison matchups that Rock covers. Pick for typing, not the island alone.",
      },
      {
        q: "What are Coulomtis’s base stats?",
        a: "Community wiki bases: HP 74, Attack 85, Defense 80, Sp. Atk 100, Sp. Def 96, Speed 83 (BST 518).",
      },
    ],
  },

  cyanie: {
    metaTitle: "Cyanie Evomon — Cyanrock Electric/Rock",
    metaDescription:
      "Cyanie (#107) is Electric/Rock on Cyanrock Valley (Expedition Isles, ~Lv 55). Catch after KO, evolve to Cyanknight, base stats.",
    location: "Cyanrock Valley (Expedition Isles)",
    weather: "Any",
    role: "Electric/Rock opener",
    typesDisplay: "Electric / Rock",
    blurb:
      "Cyanie is the Electric/Rock pony opener for Cyanknight. Community guides unlock Expedition Isles around Player Level 55 (quests + Ascension), then send you to Cyanrock Valley — the only island currently hosting this line. Defeat a wild Cyanie, Cyanknight, or the Cyanknight boss, then catch; KO-and-run skips the ball. Community bases lean bulkier Sp. Def (83) on a modest BST 363. Relay appears in the trait pool.",
    evolutionNote:
      "Cyanie → Cyanknight. Confirm stone costs in the Evolve UI — we do not invent counts.",
    relatedLinks: [
      { href: "/dex/cyanknight", label: "Cyanknight final / boss" },
      { href: "/dex/coulomb", label: "Coulomb (same island)" },
      { href: "/map-zones#cyanrock-valley", label: "Cyanrock Valley" },
      { href: "/type-chart", label: "Type chart" },
    ],
    faqs: [
      {
        q: "Where do you catch Cyanie in Evomon?",
        a: "Cyanrock Valley in Expedition Isles after unlocking the world (community: ~Player Level 55). Defeat Cyanie, Cyanknight, or the Cyanknight boss, then throw a ball.",
      },
      {
        q: "What does Cyanie evolve into?",
        a: "Cyanknight — the Electric/Rock final and the island’s named boss line.",
      },
      {
        q: "What is Cyanie weak to?",
        a: "Community guides call out Water, Grass, and Fighting pressure for the catch fight — bring answers like Thordlord / Tarragon-class Grass or Fighting coverage.",
      },
      {
        q: "What are Cyanie’s base stats?",
        a: "Community wiki bases: HP 51, Attack 55, Defense 69, Sp. Atk 63, Sp. Def 83, Speed 42 (BST 363).",
      },
    ],
  },

  cyanknight: {
    metaTitle: "Cyanknight Evomon — Electric/Rock Final & Boss",
    metaDescription:
      "Cyanknight (#108) is Cyanie’s Electric/Rock final and Cyanrock Valley boss (~Lv 195). Stats, catch notes, and Grass counters.",
    location: "Cyanrock Valley (Expedition Isles); or Via Evo",
    weather: "Any",
    role: "Electric/Rock closer / island boss",
    typesDisplay: "Electric / Rock",
    blurb:
      "Cyanknight is the Cyanrock Valley flagship — playable Electric/Rock final (community Sp. Def 111 / Sp. Atk 96, BST 504) and a high-level island boss (community guides: ~Lv 195 with heavy self-heal). Catch wild Cyanie/Cyanknight after unlock, or evolve a keeper Cyanie. Grass and Fighting chunk the typing; Fire swaps help when you are the one piloting Cyanknight into Tarragon-class Grass. Relay stays in the trait pool.",
    evolutionNote:
      "Final stage of Cyanie → Cyanknight. The boss encounter shares the name but is a separate fight loop — treat catch and clear as related, not identical.",
    shinyHuntNote:
      "Prefer shiny checks on Cyanie wilds when the band is faster, then evolve. Boss clears are for unlock/catch access, not efficient shiny volume.",
    relatedLinks: [
      { href: "/dex/cyanie", label: "Cyanie unlock route" },
      { href: "/dex/coulomtis", label: "Coulomtis" },
      { href: "/dex/tarragon", label: "Tarragon (Grass answer)" },
      { href: "/map-zones#cyanrock-valley", label: "Cyanrock Valley" },
    ],
    faqs: [
      {
        q: "How do you beat the Cyanknight boss?",
        a: "Community guides push Grass (and Fighting) and high team levels to outpace its healing — Tarragon-class Grass is the usual answer. Confirm live boss mechanics in your client after patches.",
      },
      {
        q: "Can you catch Cyanknight or only Cyanie?",
        a: "Community catch guides say defeating Cyanie, Cyanknight, or the boss unlocks a catch prompt on Cyanrock Valley. Evolving Cyanie is still the clean Talent path into the final.",
      },
      {
        q: "Cyanknight vs Coulomtis?",
        a: "Same island, different lines. Cyanknight adds Rock coverage; Coulomtis is pure Electric special. Build for the matchups you need.",
      },
      {
        q: "What are Cyanknight’s base stats?",
        a: "Community wiki bases: HP 71, Attack 78, Defense 80, Sp. Atk 96, Sp. Def 111, Speed 68 (BST 504).",
      },
    ],
  },
};
