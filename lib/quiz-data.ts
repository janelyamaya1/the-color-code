export interface QuizAnswer {
  id: string;
  label: string;
  // scoring signals: warm/cool/neutral for undertone; depth value; chroma signal; contrast signal
  undertone?: "warm" | "cool" | "neutral";
  depth?: number; // 1=light, 2=light-medium, 3=medium, 4=deep
  chroma?: "soft" | "clear" | "neutral";
  contrast?: "low" | "medium" | "high";
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtext?: string;
  answers: QuizAnswer[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "When you're in the sun, your skin tends to...",
    subtext: "Think of your natural reaction before any sunscreen.",
    answers: [
      { id: "burn", label: "Burn easily", undertone: "cool" },
      { id: "tan", label: "Tan easily", undertone: "warm" },
      { id: "burn-tan", label: "Burn first, then tan", undertone: "neutral" },
      { id: "hard-tell", label: "Hard to tell", undertone: "neutral" },
    ],
  },
  {
    id: 2,
    question: "Your skin tone reads more...",
    subtext: "Look at the inside of your wrist in natural light.",
    answers: [
      { id: "golden", label: "Golden / olive / peachy", undertone: "warm", chroma: "clear" },
      { id: "pink", label: "Pink / rosy", undertone: "cool", chroma: "clear" },
      { id: "balanced", label: "Hard to tell — very balanced", undertone: "neutral", chroma: "soft" },
      { id: "deep", label: "Deep / rich brown", undertone: "neutral", chroma: "clear" },
    ],
  },
  {
    id: 3,
    question: "Your natural hair color is closest to...",
    subtext: "At your roots, before any coloring.",
    answers: [
      { id: "very-dark", label: "Very dark — black or near-black", depth: 4 },
      { id: "medium-brown", label: "Medium brown", depth: 3 },
      { id: "light-brown", label: "Light brown / soft brown", depth: 2 },
      { id: "blonde", label: "Blonde / light", depth: 1 },
    ],
  },
  {
    id: 4,
    question: "Your hair pulls...",
    subtext: "In sunlight, does it look warm-toned or cool-toned?",
    answers: [
      { id: "warm-hair", label: "Warm — reddish, golden, or amber", undertone: "warm" },
      { id: "cool-hair", label: "Cool — ashy, blue-toned, or flat", undertone: "cool" },
      { id: "neutral-hair", label: "Neutral — hard to tell", undertone: "neutral" },
    ],
  },
  {
    id: 5,
    question: "Your eye color is...",
    answers: [
      { id: "dark-brown", label: "Dark brown / nearly black", depth: 4 },
      { id: "medium-hazel", label: "Medium brown / hazel", depth: 3 },
      { id: "green", label: "Green / blue-green", depth: 2 },
      { id: "blue-gray", label: "Blue / gray-blue", depth: 1 },
    ],
  },
  {
    id: 6,
    question: "Looking closely at your eyes, they appear...",
    subtext: "Focus on the quality — not just color.",
    answers: [
      { id: "deep-rich", label: "Deep and rich", chroma: "clear" },
      { id: "soft-muted", label: "Soft and muted", chroma: "soft" },
      { id: "bright-clear", label: "Bright and clear", chroma: "clear" },
    ],
  },
  {
    id: 7,
    question: "The contrast between your skin, hair, and eyes is...",
    subtext: "Example: light skin + dark hair = high contrast.",
    answers: [
      { id: "high-contrast", label: "High — strong difference between features", contrast: "high" },
      { id: "low-contrast", label: "Low — everything blends together", contrast: "low" },
      { id: "medium-contrast", label: "Medium — somewhere in between", contrast: "medium" },
    ],
  },
  {
    id: 8,
    question: "Which looks better on you near your face?",
    subtext: "Trust your gut — no second-guessing.",
    answers: [
      { id: "pure-white", label: "Pure white", undertone: "cool" },
      { id: "warm-cream", label: "Warm cream / off-white", undertone: "warm" },
    ],
  },
  {
    id: 9,
    question: "Which jewelry metal feels more natural on you?",
    answers: [
      { id: "silver", label: "Silver / platinum / white gold", undertone: "cool" },
      { id: "gold", label: "Gold / rose gold / brass", undertone: "warm" },
    ],
  },
  {
    id: 10,
    question: "Next to your face, which feels more \"right\"?",
    subtext: "Think of tops and scarves — not just accessories.",
    answers: [
      { id: "true-black", label: "True black", undertone: "cool" },
      { id: "soft-charcoal", label: "Soft charcoal / very dark brown", undertone: "warm" },
    ],
  },
];
