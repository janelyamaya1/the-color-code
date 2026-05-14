import { QUIZ_QUESTIONS } from "./quiz-data";

export type Undertone = "warm" | "cool" | "neutral-warm" | "neutral-cool";
export type Chroma = "soft" | "clear";
export type Contrast = "low" | "high";
export type Depth = "light" | "light-medium" | "medium" | "deep";

export interface ColorProfile {
  undertone: Undertone;
  chroma: Chroma;
  contrast: Contrast;
  depth: Depth;
  variantKey: string; // e.g. "warm-soft-low"
  displayLabel: string; // e.g. "Warm · Soft · Low Contrast"
}

export function computeProfile(answers: Record<number, string>): ColorProfile {
  // --- UNDERTONE (Q1, Q2, Q4, Q8, Q9) ---
  let warmScore = 0;
  let coolScore = 0;

  const undertoneQuestions = [1, 2, 4, 8, 9];
  for (const qId of undertoneQuestions) {
    const answerId = answers[qId];
    if (!answerId) continue;
    const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
    const answer = question?.answers.find((a) => a.id === answerId);
    if (answer?.undertone === "warm") warmScore++;
    if (answer?.undertone === "cool") coolScore++;
    // neutral = no score change
  }

  let undertone: Undertone;
  const total = warmScore + coolScore;
  if (total === 0) {
    undertone = "neutral-warm"; // default
  } else if (warmScore >= 4) {
    undertone = "warm";
  } else if (coolScore >= 4) {
    undertone = "cool";
  } else if (warmScore > coolScore) {
    undertone = warmScore >= 3 ? "warm" : "neutral-warm";
  } else if (coolScore > warmScore) {
    undertone = coolScore >= 3 ? "cool" : "neutral-cool";
  } else {
    // tied — look at Q9 (jewelry) as tiebreaker
    const q9 = answers[9];
    undertone = q9 === "gold" ? "neutral-warm" : "neutral-cool";
  }

  // --- CHROMA (Q2, Q6) ---
  let softScore = 0;
  let clearScore = 0;

  const chromaQuestions = [2, 6];
  for (const qId of chromaQuestions) {
    const answerId = answers[qId];
    if (!answerId) continue;
    const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
    const answer = question?.answers.find((a) => a.id === answerId);
    if (answer?.chroma === "soft") softScore++;
    if (answer?.chroma === "clear") clearScore++;
  }

  const chroma: Chroma = softScore > clearScore ? "soft" : "clear";

  // --- CONTRAST (Q7, with depth cross-check from Q3+Q5) ---
  const q7 = answers[7];
  let contrast: Contrast;

  if (q7 === "high-contrast") {
    contrast = "high";
  } else if (q7 === "low-contrast") {
    contrast = "low";
  } else {
    // medium — resolve using depth cross-check
    const q3 = QUIZ_QUESTIONS[2].answers.find((a) => a.id === answers[3]);
    const q5 = QUIZ_QUESTIONS[4].answers.find((a) => a.id === answers[5]);
    const hairDepth = q3?.depth ?? 2;
    const eyeDepth = q5?.depth ?? 2;
    contrast = Math.abs(hairDepth - eyeDepth) >= 2 ? "high" : "low";
  }

  // --- DEPTH (Q3, Q5 average) ---
  const q3Answer = QUIZ_QUESTIONS[2].answers.find((a) => a.id === answers[3]);
  const q5Answer = QUIZ_QUESTIONS[4].answers.find((a) => a.id === answers[5]);
  const depthAvg = ((q3Answer?.depth ?? 2) + (q5Answer?.depth ?? 2)) / 2;

  let depth: Depth;
  if (depthAvg >= 3.5) depth = "deep";
  else if (depthAvg >= 2.5) depth = "medium";
  else if (depthAvg >= 1.5) depth = "light-medium";
  else depth = "light";

  const variantKey = `${undertone}-${chroma}-${contrast}`;

  const undertoneLabel =
    undertone === "neutral-warm"
      ? "Neutral-Warm"
      : undertone === "neutral-cool"
      ? "Neutral-Cool"
      : undertone.charAt(0).toUpperCase() + undertone.slice(1);

  const depthLabel =
    depth === "light-medium"
      ? "Light-Medium"
      : depth.charAt(0).toUpperCase() + depth.slice(1);

  const displayLabel = `${undertoneLabel} · ${chroma === "soft" ? "Soft" : "Clear"} · ${depthLabel} · ${contrast === "low" ? "Low" : "High"} Contrast`;

  return { undertone, chroma, contrast, depth, variantKey, displayLabel };
}
