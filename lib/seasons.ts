export interface Season {
  name: string;
  tagline: string;
}

export const SEASON_MAP: Record<string, Season> = {
  "warm-soft-low":             { name: "Soft Autumn",   tagline: "Warm · Muted · Low Contrast" },
  "warm-soft-high":            { name: "Deep Autumn",   tagline: "Warm · Rich · High Contrast" },
  "warm-clear-low":            { name: "True Spring",   tagline: "Warm · Clear · Fresh" },
  "warm-clear-high":           { name: "Bright Spring", tagline: "Warm · Vivid · High Contrast" },
  "cool-soft-low":             { name: "Soft Summer",   tagline: "Cool · Muted · Low Contrast" },
  "cool-soft-high":            { name: "True Summer",   tagline: "Cool · Soft · Refined" },
  "cool-clear-low":            { name: "Light Summer",  tagline: "Cool · Clear · Light" },
  "cool-clear-high":           { name: "True Winter",   tagline: "Cool · Vivid · High Contrast" },
  "neutral-warm-soft-low":     { name: "Soft Autumn",   tagline: "Warm-Neutral · Muted · Low Contrast" },
  "neutral-warm-soft-high":    { name: "Deep Autumn",   tagline: "Warm-Neutral · Rich · High Contrast" },
  "neutral-warm-clear-low":    { name: "Light Spring",  tagline: "Warm-Neutral · Clear · Light" },
  "neutral-warm-clear-high":   { name: "True Autumn",   tagline: "Warm-Neutral · Clear · Deep" },
  "neutral-cool-soft-low":     { name: "Soft Summer",   tagline: "Cool-Neutral · Muted · Low Contrast" },
  "neutral-cool-soft-high":    { name: "True Summer",   tagline: "Cool-Neutral · Soft · Refined" },
  "neutral-cool-clear-low":    { name: "Light Summer",  tagline: "Cool-Neutral · Clear · Light" },
  "neutral-cool-clear-high":   { name: "Bright Winter", tagline: "Cool-Neutral · Vivid · Dramatic" },
};

export function getSeason(variantKey: string): Season {
  return SEASON_MAP[variantKey] ?? { name: "Soft Autumn", tagline: "Warm · Muted · Soft" };
}
