import { ColorProfile } from "./result-engine";
import { ResultVariant } from "./result-variants";

export interface WardrobeInput {
  profile: ColorProfile;
  variant: ResultVariant;
  lifestyles: string[];
  sizePreference: "strict" | "balanced" | "flexible";
}

export interface WardrobeItem {
  category: string;
  description: string;
  colorNote: string;
  styleNote?: string;
}

export interface WardrobeCategory {
  name: string;
  count: number;
  items: WardrobeItem[];
}

export interface OutfitFormula {
  name: string;
  occasion: string;
  pieces: string[];
  tip: string;
}

export interface ShoppingItem {
  category: string;
  item: string;
  colorNote: string;
  priority: "foundation" | "accent" | "optional";
  checked: boolean;
}

export interface WardrobeOutput {
  structure: WardrobeCategory[];
  outfits: OutfitFormula[];
  shoppingList: ShoppingItem[];
}

// ─── Base counts by size preference ───────────────────────────────────────────

const BASE_COUNTS = {
  strict: { tops: 6, bottoms: 4, outerwear: 2, shoes: 3, accessories: 2, dresses: 1 },
  balanced: { tops: 9, bottoms: 6, outerwear: 3, shoes: 4, accessories: 3, dresses: 2 },
  flexible: { tops: 12, bottoms: 8, outerwear: 4, shoes: 5, accessories: 4, dresses: 3 },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function neutralNames(variant: ResultVariant, count: number): string[] {
  return variant.coreNeutrals.slice(0, count).map((s) => s.name);
}

function accentNames(variant: ResultVariant, count: number): string[] {
  return variant.accentColors.slice(0, count).map((s) => s.name);
}

function neutralPair(variant: ResultVariant): string {
  const [a, b] = variant.coreNeutrals;
  return `${a.name} or ${b.name}`;
}

function accentPair(variant: ResultVariant): string {
  const [a, b] = variant.accentColors;
  return `${a.name} or ${b.name}`;
}

function travelNote(lifestyles: string[], base: string): string {
  return lifestyles.includes("travel") ? `${base} — versatile, packable` : base;
}

// ─── Item description builders ────────────────────────────────────────────────

function buildTops(variant: ResultVariant, count: number, lifestyles: string[]): WardrobeItem[] {
  const items: WardrobeItem[] = [
    {
      category: "Tops",
      description: "Relaxed button-down or blouse",
      colorNote: `in ${neutralPair(variant)}`,
      styleNote: travelNote(lifestyles, "lightweight, breathable fabric"),
    },
    {
      category: "Tops",
      description: "Simple crew or V-neck tee",
      colorNote: `in ${neutralNames(variant, 3).join(", ")}`,
      styleNote: "quality cotton or modal",
    },
    {
      category: "Tops",
      description: "Knit or ribbed top",
      colorNote: `in ${accentPair(variant)}`,
      styleNote: "medium weight, fitted or relaxed",
    },
    {
      category: "Tops",
      description: "Lightweight layering top",
      colorNote: `in ${variant.coreNeutrals[0].name}`,
      styleNote: "silk or satin-finish for elevated looks",
    },
    {
      category: "Tops",
      description: "Casual weekend top",
      colorNote: `in ${variant.accentColors[1]?.name ?? accentPair(variant)}`,
    },
    {
      category: "Tops",
      description: "Statement or accent top",
      colorNote: `in ${variant.accentColors[0].name}`,
      styleNote: "use as your color pop piece",
    },
    {
      category: "Tops",
      description: "Structured blouse",
      colorNote: `in ${variant.coreNeutrals[1].name}`,
      styleNote: "tailored for professional settings",
    },
    {
      category: "Tops",
      description: "Flowy or draped top",
      colorNote: `in ${variant.accentColors[2]?.name ?? accentPair(variant)}`,
      styleNote: "relaxed silhouette",
    },
    {
      category: "Tops",
      description: "Bold accent blouse",
      colorNote: `in ${variant.accentColors[3]?.name ?? accentPair(variant)}`,
      styleNote: "statement piece — keep the rest minimal",
    },
    {
      category: "Tops",
      description: "Classic shell top",
      colorNote: `in ${variant.coreNeutrals[4]?.name ?? neutralPair(variant)}`,
    },
    {
      category: "Tops",
      description: "Textured or embellished top",
      colorNote: `in ${variant.coreNeutrals[2].name}`,
      styleNote: "adds depth without adding color",
    },
    {
      category: "Tops",
      description: "Versatile turtleneck or mock-neck",
      colorNote: `in ${variant.coreNeutrals[5]?.name ?? neutralPair(variant)}`,
    },
  ];
  return items.slice(0, count);
}

function buildBottoms(variant: ResultVariant, count: number, lifestyles: string[]): WardrobeItem[] {
  const items: WardrobeItem[] = [
    {
      category: "Bottoms",
      description: "Tailored straight-leg trouser",
      colorNote: `in ${variant.coreNeutrals[2].name}`,
      styleNote: travelNote(lifestyles, "mid-weight, wrinkle-resistant"),
    },
    {
      category: "Bottoms",
      description: "Well-fitted dark jeans",
      colorNote: `in ${variant.coreNeutrals[5]?.name ?? "your deepest neutral"}`,
      styleNote: "straight or slim, no distressing",
    },
    {
      category: "Bottoms",
      description: "Casual linen or cotton trouser",
      colorNote: `in ${variant.coreNeutrals[0].name}`,
      styleNote: travelNote(lifestyles, "relaxed fit"),
    },
    {
      category: "Bottoms",
      description: "Flowy midi skirt",
      colorNote: `in ${variant.accentColors[1]?.name ?? accentPair(variant)}`,
    },
    {
      category: "Bottoms",
      description: "Slim or cigarette-leg pant",
      colorNote: `in ${variant.coreNeutrals[1].name}`,
    },
    {
      category: "Bottoms",
      description: "Casual shorts or wide-leg pant",
      colorNote: `in ${variant.coreNeutrals[3]?.name ?? neutralPair(variant)}`,
    },
    {
      category: "Bottoms",
      description: "Structured A-line skirt",
      colorNote: `in ${variant.accentColors[0].name}`,
      styleNote: "knee length, works for professional or elevated casual",
    },
    {
      category: "Bottoms",
      description: "Jogger or relaxed trouser",
      colorNote: `in ${variant.coreNeutrals[2].name}`,
      styleNote: "elevated casual, not athleisure",
    },
  ];
  return items.slice(0, count);
}

function buildOuterwear(variant: ResultVariant, count: number, lifestyles: string[]): WardrobeItem[] {
  const hasWork = lifestyles.includes("work");
  const items: WardrobeItem[] = [
    {
      category: "Outerwear",
      description: hasWork ? "Tailored blazer" : "Structured coat",
      colorNote: `in ${variant.coreNeutrals[1].name}`,
      styleNote: "your workhorse layer — pairs with everything",
    },
    {
      category: "Outerwear",
      description: "Classic trench or longline coat",
      colorNote: `in ${variant.coreNeutrals[2].name}`,
      styleNote: travelNote(lifestyles, "mid-weight"),
    },
    {
      category: "Outerwear",
      description: "Casual denim or utility jacket",
      colorNote: `in ${variant.coreNeutrals[4]?.name ?? neutralPair(variant)}`,
    },
    {
      category: "Outerwear",
      description: "Second blazer or structured cardigan",
      colorNote: `in ${variant.accentColors[0].name}`,
      styleNote: "accent layer for variety",
    },
  ];
  return items.slice(0, count);
}

function buildShoes(variant: ResultVariant, count: number, lifestyles: string[]): WardrobeItem[] {
  const hasChurch = lifestyles.includes("church");
  const hasDate = lifestyles.includes("date-night");
  const items: WardrobeItem[] = [
    {
      category: "Shoes",
      description: "Flat loafer or mule",
      colorNote: `in ${variant.coreNeutrals[1].name}`,
      styleNote: "your most-worn shoe — keep it neutral",
    },
    {
      category: "Shoes",
      description: "Clean white or neutral sneaker",
      colorNote: `in ${variant.coreNeutrals[0].name}`,
      styleNote: travelNote(lifestyles, "comfortable, versatile"),
    },
    {
      category: "Shoes",
      description: hasChurch || hasDate ? "Low or block heel" : "Ankle boot or Chelsea boot",
      colorNote: `in ${variant.coreNeutrals[5]?.name ?? neutralPair(variant)}`,
      styleNote: "elevated without effort",
    },
    {
      category: "Shoes",
      description: "Sandal or open-toe flat",
      colorNote: `in ${variant.coreNeutrals[2].name}`,
    },
    {
      category: "Shoes",
      description: hasDate ? "Statement heel or strappy sandal" : "Slip-on flat or loafer",
      colorNote: `in ${variant.accentColors[0].name}`,
      styleNote: "accent piece — let it be the focal point",
    },
  ];
  return items.slice(0, count);
}

function buildAccessories(variant: ResultVariant, count: number): WardrobeItem[] {
  const metalTone = variant.key.startsWith("warm") || variant.key.startsWith("neutral-warm")
    ? "brushed gold or bronze"
    : "silver or rose gold";

  const items: WardrobeItem[] = [
    {
      category: "Accessories",
      description: "Everyday bag (tote or structured)",
      colorNote: `in ${variant.coreNeutrals[1].name}`,
    },
    {
      category: "Accessories",
      description: "Simple jewelry set",
      colorNote: `${metalTone} — earrings, necklace, or bracelet`,
      styleNote: "keep it minimal and consistent in tone",
    },
    {
      category: "Accessories",
      description: "Belt or leather accessory",
      colorNote: `in ${variant.coreNeutrals[2].name}`,
    },
    {
      category: "Accessories",
      description: "Scarf or wrap",
      colorNote: `in ${variant.accentColors[1]?.name ?? accentPair(variant)}`,
      styleNote: "adds warmth and personality",
    },
  ];
  return items.slice(0, count);
}

function buildDresses(variant: ResultVariant, count: number, lifestyles: string[]): WardrobeItem[] {
  const hasChurch = lifestyles.includes("church");
  const hasDate = lifestyles.includes("date-night");
  const items: WardrobeItem[] = [
    {
      category: "Dresses / Elevated",
      description: hasChurch ? "Modest midi dress" : "Wrap or fit-and-flare dress",
      colorNote: `in ${variant.accentColors[0].name}`,
      styleNote: "your go-to for occasions",
    },
    {
      category: "Dresses / Elevated",
      description: hasDate ? "Evening or date-night dress" : "Casual sundress or shirt dress",
      colorNote: `in ${variant.accentColors[1]?.name ?? accentPair(variant)}`,
    },
    {
      category: "Dresses / Elevated",
      description: "Classic versatile dress",
      colorNote: `in ${variant.coreNeutrals[3]?.name ?? neutralPair(variant)}`,
      styleNote: "neutral enough to style up or down",
    },
  ];
  return items.slice(0, count);
}

function buildActivewear(variant: ResultVariant): WardrobeCategory {
  const neutral = variant.coreNeutrals[5]?.name ?? variant.coreNeutrals[0].name;
  const accent = variant.accentColors[0].name;
  return {
    name: "Activewear",
    count: 3,
    items: [
      {
        category: "Activewear",
        description: "High-waist leggings",
        colorNote: `in ${neutral}`,
        styleNote: "your everyday workout base",
      },
      {
        category: "Activewear",
        description: "Athletic top or sports bra",
        colorNote: `in ${accent} or ${neutral}`,
      },
      {
        category: "Activewear",
        description: "Zip-up hoodie or track jacket",
        colorNote: `in ${neutral}`,
        styleNote: "doubles as casual outerwear",
      },
    ],
  };
}

// ─── Outfit formula builders ──────────────────────────────────────────────────

function buildOutfits(variant: ResultVariant, lifestyles: string[], sizePreference: string): OutfitFormula[] {
  const neutral1 = variant.coreNeutrals[0].name;
  const neutral2 = variant.coreNeutrals[1].name;
  const neutral3 = variant.coreNeutrals[2].name;
  const accent1 = variant.accentColors[0].name;
  const accent2 = variant.accentColors[1]?.name ?? accent1;

  const chromaTip =
    variant.key.includes("soft")
      ? "Keep contrast low — tone-on-tone combinations in your palette read as elegant, not boring."
      : "You can handle bolder contrast — try one bright accent against a clean neutral base.";

  const contrastTip =
    variant.key.includes("high")
      ? "Your high contrast coloring means you can anchor an outfit with a deep, rich piece."
      : "Low contrast coloring? Let texture and silhouette do the work — not color drama.";

  const outfits: OutfitFormula[] = [
    {
      name: "The Classic Neutral",
      occasion: "Everyday",
      pieces: [
        `${neutral1} simple top`,
        `${neutral3} straight-leg trouser`,
        `${neutral2} loafer or mule`,
      ],
      tip: chromaTip,
    },
    {
      name: "The Accent Pop",
      occasion: "Casual / Weekend",
      pieces: [
        `${accent1} knit or blouse`,
        `${neutral3} relaxed jeans`,
        `${neutral2} sneaker`,
      ],
      tip: "One accent piece is enough — keep everything else in your core neutrals.",
    },
  ];

  if (lifestyles.includes("work")) {
    outfits.push({
      name: "The Work Edit",
      occasion: "Office / Meetings",
      pieces: [
        `${neutral1} structured blouse`,
        `${neutral3} tailored trouser`,
        `${neutral2} blazer`,
        `${neutral2} low heel or loafer`,
      ],
      tip: contrastTip,
    });
  }

  if (lifestyles.includes("church")) {
    outfits.push({
      name: "The Sunday Best",
      occasion: "Church / Special Events",
      pieces: [
        `${accent1} midi dress`,
        `${neutral2} low or block heel`,
        `${neutral1} wrap or cardigan`,
      ],
      tip: "Let your dress do the talking — keep accessories tonal and minimal.",
    });
  }

  if (lifestyles.includes("date-night")) {
    outfits.push({
      name: "The Evening Edit",
      occasion: "Date Night",
      pieces: [
        `${accent2} elevated top or dress`,
        `${neutral3} slim trouser or skirt`,
        `${accent1} statement shoe or sandal`,
      ],
      tip: "One accent piece elevated with a heel reads as fully dressed-up.",
    });
  }

  if (lifestyles.includes("gym")) {
    outfits.push({
      name: "The Active Look",
      occasion: "Gym / Active",
      pieces: [
        `${neutral1 ?? "neutral"} athletic top`,
        `${variant.coreNeutrals[5]?.name ?? neutral3} high-waist leggings`,
        `${neutral2} zip jacket`,
      ],
      tip: "Even activewear looks more intentional when kept within your palette.",
    });
  }

  if (lifestyles.includes("travel")) {
    outfits.push({
      name: "The Travel Formula",
      occasion: "Travel Days",
      pieces: [
        `${neutral1} lightweight top`,
        `${neutral3} wrinkle-resistant trouser`,
        `${neutral2} sneaker or flat`,
        `${accent1} scarf or wrap`,
      ],
      tip: "Pack only from your core neutrals — everything will mix and match effortlessly.",
    });
  }

  // Always add a layered look
  outfits.push({
    name: "The Layered Look",
    occasion: "Cool Weather / Transitional",
    pieces: [
      `${neutral1} simple tee or blouse`,
      `${neutral3} straight-leg jeans`,
      `${neutral2} trench or coat`,
      `${accent2} scarf or accessory`,
    ],
    tip: chromaTip,
  });

  return outfits;
}

// ─── Shopping checklist builder ───────────────────────────────────────────────

function buildShoppingList(categories: WardrobeCategory[], variant: ResultVariant): ShoppingItem[] {
  const list: ShoppingItem[] = [];

  for (const cat of categories) {
    for (const item of cat.items) {
      const isFoundation = variant.coreNeutrals.some((n) =>
        item.colorNote.includes(n.name)
      );
      const isAccent = variant.accentColors.some((a) =>
        item.colorNote.includes(a.name)
      );

      let priority: "foundation" | "accent" | "optional";
      if (isFoundation) priority = "foundation";
      else if (isAccent) priority = "accent";
      else priority = "optional";

      list.push({
        category: cat.name,
        item: `${item.description} ${item.colorNote}`,
        colorNote: item.colorNote,
        priority,
        checked: false,
      });
    }
  }

  // Sort: foundation → accent → optional
  const order: Record<string, number> = { foundation: 0, accent: 1, optional: 2 };
  list.sort((a, b) => order[a.priority] - order[b.priority]);

  return list;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function buildWardrobe(input: WardrobeInput): WardrobeOutput {
  const { profile, variant, lifestyles, sizePreference } = input;
  void profile; // reserved for future depth-based adjustments

  const base = BASE_COUNTS[sizePreference];

  // Apply lifestyle adjustments
  let topCount = base.tops;
  let bottomCount = base.bottoms;
  let outerwearCount = base.outerwear;
  let shoeCount = base.shoes;
  let accessoryCount = base.accessories;
  let dressCount = base.dresses;

  if (lifestyles.includes("work")) {
    topCount += 1;
    bottomCount += 1;
    outerwearCount = Math.max(outerwearCount, base.outerwear + 1);
  }
  if (lifestyles.includes("church")) {
    dressCount += 1;
    shoeCount += 1;
  }
  if (lifestyles.includes("date-night")) {
    topCount += 1;
  }

  const categories: WardrobeCategory[] = [
    {
      name: "Tops",
      count: topCount,
      items: buildTops(variant, topCount, lifestyles),
    },
    {
      name: "Bottoms",
      count: bottomCount,
      items: buildBottoms(variant, bottomCount, lifestyles),
    },
    {
      name: "Outerwear",
      count: outerwearCount,
      items: buildOuterwear(variant, outerwearCount, lifestyles),
    },
    {
      name: "Shoes",
      count: shoeCount,
      items: buildShoes(variant, shoeCount, lifestyles),
    },
    {
      name: "Accessories",
      count: accessoryCount,
      items: buildAccessories(variant, accessoryCount),
    },
    {
      name: "Dresses / Elevated",
      count: dressCount,
      items: buildDresses(variant, dressCount, lifestyles),
    },
  ];

  if (lifestyles.includes("gym")) {
    categories.push(buildActivewear(variant));
  }

  const outfits = buildOutfits(variant, lifestyles, sizePreference);
  const shoppingList = buildShoppingList(categories, variant);

  return { structure: categories, outfits, shoppingList };
}
