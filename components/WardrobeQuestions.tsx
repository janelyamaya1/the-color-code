"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LIFESTYLE_OPTIONS = [
  { id: "work", label: "Work / Professional" },
  { id: "casual", label: "Casual / Everyday" },
  { id: "church", label: "Church / Special Events" },
  { id: "gym", label: "Gym / Active" },
  { id: "date-night", label: "Date Night" },
  { id: "travel", label: "Travel" },
];

const SIZE_OPTIONS = [
  {
    id: "strict",
    label: "Strict Capsule",
    description: "20–25 pieces max. Everything must work together.",
  },
  {
    id: "balanced",
    label: "Balanced",
    description: "30–35 pieces. Some flexibility, still intentional.",
  },
  {
    id: "flexible",
    label: "Flexible Closet",
    description: "40+ pieces. Room for variety and occasion-specific items.",
  },
];

interface WardrobeQuestionsProps {
  onComplete: (lifestyles: string[], sizePreference: "strict" | "balanced" | "flexible") => void;
  onBack: () => void;
}

export function WardrobeQuestions({ onComplete, onBack }: WardrobeQuestionsProps) {
  const [screen, setScreen] = useState<1 | 2>(1);
  const [lifestyles, setLifestyles] = useState<string[]>([]);
  const [sizePreference, setSizePreference] = useState<"strict" | "balanced" | "flexible" | "">("");

  function toggleLifestyle(id: string) {
    setLifestyles((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  }

  function handleNext() {
    if (screen === 1 && lifestyles.length > 0) {
      setScreen(2);
    }
  }

  function handleBuild() {
    if (sizePreference) {
      onComplete(lifestyles, sizePreference as "strict" | "balanced" | "flexible");
    }
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: "#A07850" }}>
          Wardrobe Builder
        </p>
        <p className="text-xs" style={{ color: "#9E856A" }}>
          Step {screen} of 2
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 rounded-full mb-8" style={{ backgroundColor: "#DDD5C8" }}>
        <div
          className="h-1 rounded-full transition-all duration-500"
          style={{ width: screen === 1 ? "50%" : "100%", backgroundColor: "#A07850" }}
        />
      </div>

      <AnimatePresence mode="wait">
        {screen === 1 && (
          <motion.div
            key="screen1"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className="text-xl font-semibold mb-2 leading-snug"
              style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
            >
              Which of these do you regularly dress for?
            </h3>
            <p className="text-sm mb-6" style={{ color: "#9E856A" }}>
              Select all that apply.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {LIFESTYLE_OPTIONS.map((opt) => {
                const selected = lifestyles.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleLifestyle(opt.id)}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-150"
                    style={{
                      backgroundColor: selected ? "#A07850" : "#FDFCFA",
                      border: `1px solid ${selected ? "#A07850" : "#DDD5C8"}`,
                      color: selected ? "#FDFCFA" : "#1E1A16",
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center"
                      style={{
                        border: `1.5px solid ${selected ? "#FDFCFA" : "#A07850"}`,
                        backgroundColor: selected ? "#FDFCFA" : "transparent",
                      }}
                    >
                      {selected && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="#A07850"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm font-medium">{opt.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={onBack}
                className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-150"
                style={{ borderColor: "#DDD5C8", color: "#9E856A" }}
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={lifestyles.length === 0}
                className="flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#A07850", color: "#FDFCFA" }}
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}

        {screen === 2 && (
          <motion.div
            key="screen2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className="text-xl font-semibold mb-2 leading-snug"
              style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
            >
              How minimal do you want your wardrobe to be?
            </h3>
            <p className="text-sm mb-6" style={{ color: "#9E856A" }}>
              Choose one.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {SIZE_OPTIONS.map((opt) => {
                const selected = sizePreference === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSizePreference(opt.id as "strict" | "balanced" | "flexible")}
                    className="flex flex-col gap-1 w-full text-left px-4 py-4 rounded-xl transition-all duration-150"
                    style={{
                      backgroundColor: selected ? "#A07850" : "#FDFCFA",
                      border: `1px solid ${selected ? "#A07850" : "#DDD5C8"}`,
                      color: selected ? "#FDFCFA" : "#1E1A16",
                    }}
                  >
                    <span className="text-sm font-semibold">{opt.label}</span>
                    <span
                      className="text-xs leading-snug"
                      style={{ color: selected ? "rgba(253,252,250,0.8)" : "#9E856A" }}
                    >
                      {opt.description}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setScreen(1)}
                className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-150"
                style={{ borderColor: "#DDD5C8", color: "#9E856A" }}
              >
                ← Back
              </button>
              <button
                onClick={handleBuild}
                disabled={!sizePreference}
                className="flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#A07850", color: "#FDFCFA" }}
              >
                Build My Wardrobe →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
