export interface Swatch {
  name: string;
  hex: string;
}

export interface ResultVariant {
  key: string;
  headline: string;
  insight: string;
  shoppingRules: string[];
  coreNeutrals: Swatch[];
  accentColors: Swatch[];
  avoidColors: Swatch[];
}

const VARIANTS: ResultVariant[] = [
  // ─── WARM · SOFT · LOW ───────────────────────────────────────────────────
  {
    key: "warm-soft-low",
    headline: "You're a Warm Soft — your palette lives in golden earth tones.",
    insight:
      "Your coloring is warm-leaning with a naturally muted, blended quality. Nothing about you is stark — your features flow together beautifully. The colors that will elevate you are soft, earthy, and low-saturation warm tones. Bold primaries and high-contrast combos will fight your coloring. Lean into the warm, dusty, organic side of your palette and your features will do the rest.",
    shoppingRules: [
      "Is it warm (yellow or golden undertone)?",
      "Is it muted — not bright or saturated?",
      "Does it pair with at least 3 items already in your wardrobe?",
    ],
    coreNeutrals: [
      { name: "Warm Ivory", hex: "#F5EFE2" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Warm Taupe", hex: "#9E856A" },
      { name: "Soft Brown", hex: "#7A5C44" },
      { name: "Blush Beige", hex: "#E2CEBA" },
      { name: "Charcoal Brown", hex: "#3D2B1F" },
    ],
    accentColors: [
      { name: "Sage", hex: "#87A878" },
      { name: "Dusty Rose", hex: "#C9897A" },
      { name: "Soft Rust", hex: "#B5694B" },
      { name: "Warm Cocoa", hex: "#8B5E3C" },
      { name: "Muted Teal", hex: "#6B9E9A" },
      { name: "Warm Blush", hex: "#E8B4A0" },
    ],
    avoidColors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Jet Black", hex: "#0D0D0D" },
      { name: "Neon Yellow", hex: "#FFE600" },
      { name: "Icy Lavender", hex: "#D0CBEE" },
    ],
  },
  // ─── WARM · SOFT · HIGH ──────────────────────────────────────────────────
  {
    key: "warm-soft-high",
    headline: "You're a Warm Soft High Contrast — rich earth tones with bold structure.",
    insight:
      "You have warm undertones but strong natural contrast between your features, meaning you can handle deeper, more grounded colors than other warm palettes. Rich chocolates, warm olives, and terracotta make your features pop without clashing. Avoid pastels (too weak for your contrast level) and stark black-and-white combinations (too cool for your warmth).",
    shoppingRules: [
      "Is it warm-toned (not icy or blue-based)?",
      "Is it rich or deep enough to match your contrast level?",
      "Does it avoid cool-leaning brights?",
    ],
    coreNeutrals: [
      { name: "Rich Cream", hex: "#F0E6D3" },
      { name: "Dark Chocolate", hex: "#2C1810" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Bronze", hex: "#8B6914" },
      { name: "Warm Gray", hex: "#8A7E72" },
      { name: "Ivory", hex: "#FAF3E8" },
    ],
    accentColors: [
      { name: "Burnt Orange", hex: "#B5522A" },
      { name: "Olive", hex: "#6B7C3C" },
      { name: "Terracotta", hex: "#B5542A" },
      { name: "Forest Green", hex: "#3D5C3A" },
      { name: "Warm Gold", hex: "#C4943A" },
      { name: "Dusty Rose", hex: "#C4897A" },
    ],
    avoidColors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Jet Black", hex: "#0D0D0D" },
      { name: "Cobalt Blue", hex: "#0047AB" },
      { name: "Icy Pink", hex: "#FFB6C1" },
    ],
  },
  // ─── WARM · CLEAR · LOW ──────────────────────────────────────────────────
  {
    key: "warm-clear-low",
    headline: "You're a Warm Clear — golden, glowing, and luminous.",
    insight:
      "Your coloring is warm with a naturally bright, clear quality — even at low contrast, your skin has a luminous golden quality that responds beautifully to saturated warm tones. You're one of the rare profiles that can wear bold warm colors without looking overdressed. Muted and dusty tones can feel flat on you. Lean into your natural glow — gold, warm amber, and fresh greens will all work in your favor.",
    shoppingRules: [
      "Is it warm (golden, peachy, or amber-based)?",
      "Is it clear and relatively saturated (not muddy)?",
      "Does the warmth complement your skin's natural glow?",
    ],
    coreNeutrals: [
      { name: "Warm White", hex: "#FBF6EE" },
      { name: "Honey Beige", hex: "#D4A96A" },
      { name: "Warm Sand", hex: "#C4A882" },
      { name: "Golden Brown", hex: "#8B6914" },
      { name: "Soft Camel", hex: "#C8A870" },
      { name: "Warm Espresso", hex: "#3C2010" },
    ],
    accentColors: [
      { name: "Warm Amber", hex: "#C8761A" },
      { name: "Fresh Olive", hex: "#7A8C3C" },
      { name: "Warm Coral", hex: "#E8724A" },
      { name: "Golden Yellow", hex: "#D4A832" },
      { name: "Warm Teal", hex: "#4A8C7A" },
      { name: "Paprika", hex: "#B5381A" },
    ],
    avoidColors: [
      { name: "Blue-White", hex: "#EEF2FF" },
      { name: "Ash Gray", hex: "#9CA3AF" },
      { name: "Cool Lavender", hex: "#C4B5E8" },
      { name: "Icy Blue", hex: "#BFDBFE" },
    ],
  },
  // ─── WARM · CLEAR · HIGH ─────────────────────────────────────────────────
  {
    key: "warm-clear-high",
    headline: "You're a Warm Clear High Contrast — bold, golden, and striking.",
    insight:
      "You have the most dynamic warm profile — strong contrast paired with clear, vivid coloring means you can carry bold outfits with ease. Deep warm colors paired with bright warm accents are your superpower. Think: rich chocolate with amber gold, or olive with warm ivory. You're one of the few profiles who can pull off warm color blocking without it looking overwhelming.",
    shoppingRules: [
      "Is it warm and vivid (not muted or ashy)?",
      "Does it work in a high-contrast pairing with another piece?",
      "Does it avoid cool or icy tones entirely?",
    ],
    coreNeutrals: [
      { name: "Warm Ivory", hex: "#FAF0DC" },
      { name: "Espresso", hex: "#2A1508" },
      { name: "Caramel", hex: "#C08040" },
      { name: "Warm Charcoal", hex: "#3A2A1A" },
      { name: "Golden Sand", hex: "#D4B07A" },
      { name: "Warm Bronze", hex: "#8B5E1A" },
    ],
    accentColors: [
      { name: "Deep Amber", hex: "#B56010" },
      { name: "Rich Olive", hex: "#5C6C28" },
      { name: "Warm Scarlet", hex: "#B52818" },
      { name: "Deep Teal", hex: "#1A6058" },
      { name: "Saffron", hex: "#E8A020" },
      { name: "Copper", hex: "#B87030" },
    ],
    avoidColors: [
      { name: "Cool White", hex: "#F0F4FF" },
      { name: "Jet Black", hex: "#0D0D0D" },
      { name: "Cool Pink", hex: "#F9A8D4" },
      { name: "Steel Blue", hex: "#60A5FA" },
    ],
  },
  // ─── COOL · SOFT · LOW ───────────────────────────────────────────────────
  {
    key: "cool-soft-low",
    headline: "You're a Cool Soft — misty, refined, and quietly elegant.",
    insight:
      "Your coloring is cool with a naturally soft, blended quality. You have the most refined and understated of all profiles — your palette is the kind that looks expensive without trying. Dusty rose, lavender, soft blue-gray, and muted plum are your best friends. Warm or earthy tones can look muddy on you. High contrast outfits will overpower your coloring. Stick to cool, muted tones and low-contrast combinations for a consistently polished look.",
    shoppingRules: [
      "Is it cool-toned (pink, blue, or lavender-based)?",
      "Is it muted and low-saturation?",
      "Does it blend easily with other pieces (low contrast pairing)?",
    ],
    coreNeutrals: [
      { name: "Soft White", hex: "#F5F5FA" },
      { name: "Dusty Mauve", hex: "#BEB0C4" },
      { name: "Cool Gray", hex: "#9CA3AF" },
      { name: "Slate", hex: "#64748B" },
      { name: "Soft Charcoal", hex: "#4A4A5A" },
      { name: "Cool Blush", hex: "#F0E0E8" },
    ],
    accentColors: [
      { name: "Dusty Rose", hex: "#C4849A" },
      { name: "Soft Lavender", hex: "#B4A8D0" },
      { name: "Sage Blue", hex: "#78A0A8" },
      { name: "Muted Plum", hex: "#8A6880" },
      { name: "Soft Periwinkle", hex: "#8890C8" },
      { name: "Dusty Teal", hex: "#5A8880" },
    ],
    avoidColors: [
      { name: "Warm Cream", hex: "#FFF8DC" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Neon Orange", hex: "#FF6500" },
      { name: "Golden Yellow", hex: "#FFD700" },
    ],
  },
  // ─── COOL · SOFT · HIGH ──────────────────────────────────────────────────
  {
    key: "cool-soft-high",
    headline: "You're a Cool Soft High Contrast — dramatic yet refined.",
    insight:
      "Cool undertones and high contrast give your palette a striking quality even in muted tones. You can wear deeper cool colors — deep navy, burgundy, plum — without looking harsh. The key is keeping everything cool in temperature even as you work with depth and contrast. Warm-toned pieces will look jarring against your naturally cool coloring.",
    shoppingRules: [
      "Is it cool (blue, pink, or lavender-based)?",
      "Can it work in a high-contrast pairing (dark + light)?",
      "Is it free of warm (golden/orange) undertones?",
    ],
    coreNeutrals: [
      { name: "True White", hex: "#FAFAFA" },
      { name: "Deep Navy", hex: "#1A1A3A" },
      { name: "Cool Charcoal", hex: "#3A3A4A" },
      { name: "Soft Silver", hex: "#C0C8D0" },
      { name: "Slate Blue", hex: "#708090" },
      { name: "Cool Blush", hex: "#F0E0E8" },
    ],
    accentColors: [
      { name: "Deep Burgundy", hex: "#6E1A28" },
      { name: "Rich Plum", hex: "#6A2A6A" },
      { name: "Deep Teal", hex: "#1A5A68" },
      { name: "Icy Pink", hex: "#E8A0B4" },
      { name: "Cool Cobalt", hex: "#3A50A0" },
      { name: "Rose Mauve", hex: "#A06880" },
    ],
    avoidColors: [
      { name: "Warm Beige", hex: "#F5DEB3" },
      { name: "Orange", hex: "#FF8C00" },
      { name: "Terracotta", hex: "#B5542A" },
      { name: "Golden Brown", hex: "#C8960C" },
    ],
  },
  // ─── COOL · CLEAR · LOW ──────────────────────────────────────────────────
  {
    key: "cool-clear-low",
    headline: "You're a Cool Clear — crisp, luminous, and effortlessly polished.",
    insight:
      "Cool undertones with a naturally vivid, bright quality means you light up in cool, saturated colors. Jewel tones — sapphire, emerald, and cool fuchsia — are your best investment. Despite your low contrast, your cool clarity means you benefit from colors with vibrancy and depth. Dusty or muted colors can flatten your naturally bright coloring.",
    shoppingRules: [
      "Is it cool-toned (blue or pink-based)?",
      "Is it relatively clear and vibrant (not dusty)?",
      "Does it avoid warm or earthy undertones?",
    ],
    coreNeutrals: [
      { name: "Crisp White", hex: "#F8FAFF" },
      { name: "Cool Gray", hex: "#9BA8B8" },
      { name: "Pale Blush", hex: "#F2E4EC" },
      { name: "Silver Gray", hex: "#8090A0" },
      { name: "Soft Navy", hex: "#344870" },
      { name: "Cool Charcoal", hex: "#404858" },
    ],
    accentColors: [
      { name: "Sapphire", hex: "#2848A0" },
      { name: "Cool Fuchsia", hex: "#C02878" },
      { name: "Emerald", hex: "#186848" },
      { name: "Icy Blue", hex: "#7AB0D8" },
      { name: "Soft Magenta", hex: "#D050A0" },
      { name: "Clear Teal", hex: "#207890" },
    ],
    avoidColors: [
      { name: "Warm Ivory", hex: "#FFFACD" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Coral", hex: "#FF7F50" },
      { name: "Mustard", hex: "#FFDB58" },
    ],
  },
  // ─── COOL · CLEAR · HIGH ─────────────────────────────────────────────────
  {
    key: "cool-clear-high",
    headline: "You're a Cool Clear High Contrast — bold, crisp, and commanding.",
    insight:
      "This is the most striking cool profile. Your combination of cool undertones, vivid clarity, and high contrast means you wear jewel tones and true brights better than almost any other profile. You are the rare type who actually looks best in true black-and-white combinations — but only with cool accents. Bold cool color blocking is your signature. Warm earthy tones are your kryptonite.",
    shoppingRules: [
      "Is it cool and vivid — no warm undertones?",
      "Can it hold its own in a high-contrast pairing?",
      "Is it free from dusty, earthy, or muted warm tones?",
    ],
    coreNeutrals: [
      { name: "True White", hex: "#FFFFFF" },
      { name: "Jet Black", hex: "#0D0D0D" },
      { name: "Cool Charcoal", hex: "#2D2D3A" },
      { name: "Silver", hex: "#A8B0C0" },
      { name: "Navy", hex: "#1A2050" },
      { name: "Icy Gray", hex: "#D0D8E8" },
    ],
    accentColors: [
      { name: "True Red", hex: "#CC0020" },
      { name: "Royal Blue", hex: "#2040C0" },
      { name: "Deep Emerald", hex: "#005840" },
      { name: "Cool Fuchsia", hex: "#C02060" },
      { name: "Clear Teal", hex: "#008080" },
      { name: "Icy Lavender", hex: "#9090D0" },
    ],
    avoidColors: [
      { name: "Warm Beige", hex: "#F5DEB3" },
      { name: "Orange", hex: "#FF8C00" },
      { name: "Warm Brown", hex: "#8B4513" },
      { name: "Golden Yellow", hex: "#FFD700" },
    ],
  },
  // ─── NEUTRAL-WARM · SOFT · LOW ────────────────────────────────────────────
  {
    key: "neutral-warm-soft-low",
    headline: "You're a Neutral-Warm Soft — the most versatile profile of all.",
    insight:
      "You sit slightly on the warm side of neutral with a naturally soft, blended quality and low contrast between your features. This is why both warm and cool tones have 'looked fine' on you — but there's a real difference between fine and *best*. Your palette lives in muted, soft, warm-neutral tones where earthy warmth meets gentle softness. Your biggest differentiator isn't warm vs. cool — it's chroma (muted vs. vivid) and depth. Bold, bright colors will wash you out. Stay soft, stay warm-leaning, and stay low-contrast in your outfit combinations.",
    shoppingRules: [
      "Is it muted — not bright or saturated?",
      "Is it soft and warm-neutral (not icy or blue-based)?",
      "Does it work with at least 3 items you already own?",
    ],
    coreNeutrals: [
      { name: "Warm Cream", hex: "#F5EDD8" },
      { name: "Taupe", hex: "#B8A898" },
      { name: "Warm Beige", hex: "#D4C4A8" },
      { name: "Soft Olive", hex: "#8A8C6A" },
      { name: "Muted Camel", hex: "#C0A878" },
      { name: "Soft Charcoal", hex: "#4A4440" },
    ],
    accentColors: [
      { name: "Sage", hex: "#8EA87A" },
      { name: "Dusty Rose", hex: "#C8907A" },
      { name: "Soft Rust", hex: "#A86848" },
      { name: "Warm Cocoa", hex: "#907060" },
      { name: "Muted Teal", hex: "#6A9890" },
      { name: "Warm Blush", hex: "#E0B89A" },
    ],
    avoidColors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Jet Black", hex: "#0D0D0D" },
      { name: "Neon", hex: "#39FF14" },
      { name: "Icy Blue", hex: "#BFDBFE" },
    ],
  },
  // ─── NEUTRAL-WARM · SOFT · HIGH ───────────────────────────────────────────
  {
    key: "neutral-warm-soft-high",
    headline: "You're a Neutral-Warm Soft High Contrast — grounded with natural drama.",
    insight:
      "Your slight warm lean combines with high natural contrast to give you more range than most soft profiles. You can anchor outfits with deep warm neutrals and layer softer warm tones above. The key is staying in the warm-neutral zone — your contrast gives you structure, but cool tones will still look off. Think deep warm browns paired with soft ivory or camel, not stark black and white.",
    shoppingRules: [
      "Is it warm-neutral (not icy)?",
      "Is it muted enough to stay in your soft chroma range?",
      "Does the depth level match your natural contrast?",
    ],
    coreNeutrals: [
      { name: "Warm Ivory", hex: "#F5EDD8" },
      { name: "Warm Brown", hex: "#5A3820" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Taupe", hex: "#A89080" },
      { name: "Soft Olive", hex: "#8A8C6A" },
      { name: "Warm Charcoal", hex: "#3A3028" },
    ],
    accentColors: [
      { name: "Dusty Terracotta", hex: "#B07050" },
      { name: "Sage", hex: "#8EA87A" },
      { name: "Warm Plum", hex: "#8A5870" },
      { name: "Muted Gold", hex: "#C8A838" },
      { name: "Dusty Teal", hex: "#5A8880" },
      { name: "Warm Rose", hex: "#D09080" },
    ],
    avoidColors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Cool Black", hex: "#0A0A14" },
      { name: "Icy Lavender", hex: "#D0CBEE" },
      { name: "Cobalt Blue", hex: "#0047AB" },
    ],
  },
  // ─── NEUTRAL-WARM · CLEAR · LOW ───────────────────────────────────────────
  {
    key: "neutral-warm-clear-low",
    headline: "You're a Neutral-Warm Clear — glowing warmth with a natural luminosity.",
    insight:
      "You sit warm but with a clear, vibrant quality that means you can carry warm colors with more saturation than other neutral profiles. Your low contrast means outfit combos should stay tonal, but within your warm palette you can pick brighter pieces. You're the warm profile that can go from dusty camel to a richer amber without looking overdressed — warmth is your constant, vibrancy is your accent.",
    shoppingRules: [
      "Is it warm and relatively clear (not dusty)?",
      "Does it stay in a low-contrast tonal outfit combination?",
      "Is it free from cool or icy undertones?",
    ],
    coreNeutrals: [
      { name: "Warm White", hex: "#FAF5EC" },
      { name: "Honey", hex: "#D4A96A" },
      { name: "Warm Sand", hex: "#C8B080" },
      { name: "Golden Taupe", hex: "#A89060" },
      { name: "Soft Camel", hex: "#C4A070" },
      { name: "Warm Espresso", hex: "#3C2010" },
    ],
    accentColors: [
      { name: "Amber", hex: "#C87820" },
      { name: "Warm Olive", hex: "#7A8840" },
      { name: "Coral", hex: "#E07848" },
      { name: "Warm Jade", hex: "#4A8C6A" },
      { name: "Paprika", hex: "#B84028" },
      { name: "Golden Rose", hex: "#E09870" },
    ],
    avoidColors: [
      { name: "Cool White", hex: "#F0F4FF" },
      { name: "Ash Gray", hex: "#9CA3AF" },
      { name: "Icy Pink", hex: "#FFB6C1" },
      { name: "Cool Purple", hex: "#A855F7" },
    ],
  },
  // ─── NEUTRAL-WARM · CLEAR · HIGH ──────────────────────────────────────────
  {
    key: "neutral-warm-clear-high",
    headline: "You're a Neutral-Warm Clear High Contrast — warm, bold, and confident.",
    insight:
      "High contrast and warm clarity means you can wear the most saturated warm tones of any neutral profile. You look striking in warm jewel tones — cognac, warm emerald, deep rust. Your palette should always stay warm but can go deep and vivid. This is the profile that can pull off a rich terracotta blazer or a deep teal with golden undertones and look completely put-together.",
    shoppingRules: [
      "Is it warm and clear (vivid, not dusty)?",
      "Does it have depth that matches your contrast level?",
      "Is it free from cool, icy, or flat undertones?",
    ],
    coreNeutrals: [
      { name: "Warm Ivory", hex: "#FAF0DC" },
      { name: "Rich Espresso", hex: "#2A1408" },
      { name: "Cognac", hex: "#A05820" },
      { name: "Warm Charcoal", hex: "#3A2A18" },
      { name: "Honey", hex: "#D4A060" },
      { name: "Golden Bronze", hex: "#906018" },
    ],
    accentColors: [
      { name: "Deep Rust", hex: "#A03818" },
      { name: "Warm Emerald", hex: "#286840" },
      { name: "Cognac Orange", hex: "#C06020" },
      { name: "Deep Teal", hex: "#1A6058" },
      { name: "Warm Gold", hex: "#C89820" },
      { name: "Paprika Red", hex: "#B03018" },
    ],
    avoidColors: [
      { name: "Cool White", hex: "#F0F4FF" },
      { name: "Jet Black", hex: "#0D0D0D" },
      { name: "Cobalt", hex: "#0047AB" },
      { name: "Bubblegum Pink", hex: "#FF69B4" },
    ],
  },
  // ─── NEUTRAL-COOL · SOFT · LOW ────────────────────────────────────────────
  {
    key: "neutral-cool-soft-low",
    headline: "You're a Neutral-Cool Soft — cool, calm, and quietly refined.",
    insight:
      "Your slight cool lean with a muted, soft quality makes you look polished in understated cool-neutral tones. Dusty mauve, cool greige, soft slate, and muted blue-gray are your foundation. Warm earthy tones will pull off your natural cool balance. Your strength is in the subtlety — your palette looks effortlessly curated when you stick to cool, muted, low-contrast combinations.",
    shoppingRules: [
      "Is it cool or cool-neutral (no golden undertones)?",
      "Is it muted and soft in chroma?",
      "Does it pair in low-contrast combinations?",
    ],
    coreNeutrals: [
      { name: "Cool Ivory", hex: "#F5F5F0" },
      { name: "Greige", hex: "#B8B0A8" },
      { name: "Cool Taupe", hex: "#A0A0A8" },
      { name: "Slate Gray", hex: "#708090" },
      { name: "Soft Charcoal", hex: "#484858" },
      { name: "Cool Blush", hex: "#EEE0E8" },
    ],
    accentColors: [
      { name: "Dusty Mauve", hex: "#B890A0" },
      { name: "Soft Periwinkle", hex: "#8898C8" },
      { name: "Muted Sage", hex: "#7A9888" },
      { name: "Cool Lavender", hex: "#B0A8C8" },
      { name: "Dusty Blue", hex: "#6888A8" },
      { name: "Soft Plum", hex: "#907090" },
    ],
    avoidColors: [
      { name: "Warm Camel", hex: "#C19A6B" },
      { name: "Terracotta", hex: "#B5542A" },
      { name: "Golden Olive", hex: "#8B7538" },
      { name: "Warm Orange", hex: "#E8721A" },
    ],
  },
  // ─── NEUTRAL-COOL · SOFT · HIGH ───────────────────────────────────────────
  {
    key: "neutral-cool-soft-high",
    headline: "You're a Neutral-Cool Soft High Contrast — cool depth and refined drama.",
    insight:
      "Cool undertones with high contrast but soft chroma means you look best in deep cool tones paired with lighter cool neutrals. You can wear deep slate, dusty navy, and cool plum with crisp light pieces without looking overdressed. Avoid warm tone intrusions — they'll conflict with your cool balance even in small doses.",
    shoppingRules: [
      "Is it cool (not warm-based)?",
      "Does it work in a high-contrast cool pairing?",
      "Is it muted or soft rather than bright and vivid?",
    ],
    coreNeutrals: [
      { name: "Soft White", hex: "#F5F5FA" },
      { name: "Deep Slate", hex: "#2A3040" },
      { name: "Cool Gray", hex: "#8090A0" },
      { name: "Dusty Navy", hex: "#304060" },
      { name: "Silver Gray", hex: "#A8B0C0" },
      { name: "Cool Charcoal", hex: "#404858" },
    ],
    accentColors: [
      { name: "Deep Plum", hex: "#5A2860" },
      { name: "Dusty Teal", hex: "#305868" },
      { name: "Muted Burgundy", hex: "#682838" },
      { name: "Soft Cobalt", hex: "#3858A0" },
      { name: "Dusty Rose", hex: "#C08898" },
      { name: "Cool Mauve", hex: "#907890" },
    ],
    avoidColors: [
      { name: "Warm Beige", hex: "#F5DEB3" },
      { name: "Terracotta", hex: "#B5542A" },
      { name: "Warm Gold", hex: "#C8960C" },
      { name: "Bright Coral", hex: "#FF6347" },
    ],
  },
  // ─── NEUTRAL-COOL · CLEAR · LOW ───────────────────────────────────────────
  {
    key: "neutral-cool-clear-low",
    headline: "You're a Neutral-Cool Clear — fresh, bright, and effortlessly clean.",
    insight:
      "Cool undertones with clear, vivid chroma but low contrast means you can wear cool jewel tones but should keep your outfit combinations tonal and harmonious. Think: soft teal top with dusty blue pants — cool and clear but not high-contrast. Your vibrancy will shine in focused, tonal cool outfits. Avoid the earthy warmth that will fight your naturally fresh coloring.",
    shoppingRules: [
      "Is it cool and clear (vivid but not warm)?",
      "Does it work in a low-contrast tonal outfit?",
      "Is it free from warm, golden, or earthy undertones?",
    ],
    coreNeutrals: [
      { name: "Cool White", hex: "#F5F8FF" },
      { name: "Pale Gray", hex: "#D0D8E0" },
      { name: "Cool Sand", hex: "#B8C0C8" },
      { name: "Soft Slate", hex: "#7090A8" },
      { name: "Navy Gray", hex: "#485870" },
      { name: "Cool Charcoal", hex: "#404858" },
    ],
    accentColors: [
      { name: "Clear Teal", hex: "#208088" },
      { name: "Soft Cobalt", hex: "#4068B8" },
      { name: "Cool Fuchsia", hex: "#C03880" },
      { name: "Aqua", hex: "#40B8C8" },
      { name: "Soft Sapphire", hex: "#3860A8" },
      { name: "Lavender Blue", hex: "#7880C8" },
    ],
    avoidColors: [
      { name: "Warm Cream", hex: "#FFFACD" },
      { name: "Mustard", hex: "#FFDB58" },
      { name: "Terracotta", hex: "#B5542A" },
      { name: "Warm Olive", hex: "#8B7538" },
    ],
  },
  // ─── NEUTRAL-COOL · CLEAR · HIGH ──────────────────────────────────────────
  {
    key: "neutral-cool-clear-high",
    headline: "You're a Neutral-Cool Clear High Contrast — cool, striking, and polished.",
    insight:
      "The most dramatic cool-neutral profile. Clear chroma, cool undertones, and high contrast means you can carry jewel tones with authority. Deep teal with crisp cool white, rich cobalt with silver — you make cool color pairings look intentional. Unlike fully cool profiles, you have slight neutral flexibility, meaning an occasional soft warm-neutral won't completely derail your look. But vivid warm colors will still pull off your natural balance.",
    shoppingRules: [
      "Is it cool or cool-neutral (primarily)?",
      "Is it clear and vivid — not dusty?",
      "Does it work in a high-contrast cool pairing?",
    ],
    coreNeutrals: [
      { name: "Crisp White", hex: "#F8FAFF" },
      { name: "Deep Navy", hex: "#1A2050" },
      { name: "Cool Charcoal", hex: "#2D3040" },
      { name: "Silver", hex: "#A8B8C8" },
      { name: "Pale Blue-Gray", hex: "#C8D0DC" },
      { name: "Slate", hex: "#607080" },
    ],
    accentColors: [
      { name: "Sapphire", hex: "#2040B0" },
      { name: "Emerald", hex: "#187058" },
      { name: "Deep Teal", hex: "#107880" },
      { name: "Cool Fuchsia", hex: "#C02870" },
      { name: "Icy Lavender", hex: "#8080C8" },
      { name: "Clear Cobalt", hex: "#3050B8" },
    ],
    avoidColors: [
      { name: "Warm Beige", hex: "#F5DEB3" },
      { name: "Terracotta", hex: "#B5542A" },
      { name: "Orange", hex: "#FF8C00" },
      { name: "Warm Gold", hex: "#FFD700" },
    ],
  },
];

export function getVariant(variantKey: string): ResultVariant {
  const variant = VARIANTS.find((v) => v.key === variantKey);
  if (variant) return variant;
  // fallback to nearest match
  return VARIANTS.find((v) => v.key === "neutral-warm-soft-low") ?? VARIANTS[0];
}
