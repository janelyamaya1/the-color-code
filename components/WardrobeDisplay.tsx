"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WardrobeOutput } from "@/lib/wardrobe-engine";

interface WardrobeDisplayProps {
  output: WardrobeOutput;
}

const PRIORITY_LABELS: Record<string, string> = {
  foundation: "Foundation",
  accent: "Accent",
  optional: "Optional",
};

const PRIORITY_COLORS: Record<string, { bg: string; text: string }> = {
  foundation: { bg: "#A07850", text: "#FDFCFA" },
  accent: { bg: "#DDD5C8", text: "#5C5248" },
  optional: { bg: "#EFEBE3", text: "#9E856A" },
};

export function WardrobeDisplay({ output }: WardrobeDisplayProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  function toggleCheck(i: number) {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
  }

  function copyChecklist() {
    const lines = output.shoppingList.map((item, i) => {
      const checkmark = checked[i] ? "☑" : "☐";
      return `${checkmark} [${PRIORITY_LABELS[item.priority]}] ${item.item}`;
    });
    navigator.clipboard.writeText(lines.join("\n"));
    alert("Checklist copied to clipboard!");
  }

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-xs font-medium tracking-[0.25em] uppercase mb-3"
          style={{ color: "#A07850" }}
        >
          Your Capsule Wardrobe
        </p>
        <h2
          className="text-2xl sm:text-3xl font-semibold"
          style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
        >
          Built for your profile
        </h2>
      </motion.div>

      {/* ── Section 1: Capsule Structure ─────────────────────────────────────── */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#A07850" }}
          >
            Capsule Structure
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid #DDD5C8" }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-[120px_60px_1fr] gap-4 px-5 py-3"
            style={{ backgroundColor: "#FDFCFA", borderBottom: "1px solid #DDD5C8" }}
          >
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9E856A" }}>
              Category
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9E856A" }}>
              Pieces
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9E856A" }}>
              What to look for
            </span>
          </div>

          {output.structure.map((cat, i) => (
            <div
              key={cat.name}
              className="grid grid-cols-[120px_60px_1fr] gap-4 px-5 py-4"
              style={{
                backgroundColor: i % 2 === 0 ? "#FDFCFA" : "#F7F4EF",
                borderBottom: i < output.structure.length - 1 ? "1px solid #EDE8E1" : "none",
              }}
            >
              <span className="text-sm font-medium" style={{ color: "#1E1A16" }}>
                {cat.name}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#A07850" }}
              >
                {cat.count}
              </span>
              <div className="flex flex-col gap-1">
                {cat.items.slice(0, 3).map((item, j) => (
                  <span key={j} className="text-xs leading-snug" style={{ color: "#5C5248" }}>
                    {item.description}{" "}
                    <span style={{ color: "#9E856A" }}>{item.colorNote}</span>
                    {item.styleNote && (
                      <span style={{ color: "#C4A882" }}> · {item.styleNote}</span>
                    )}
                  </span>
                ))}
                {cat.items.length > 3 && (
                  <span className="text-xs" style={{ color: "#C4A882" }}>
                    + {cat.items.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Section 2: Outfit Formulas ────────────────────────────────────────── */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#A07850" }}
          >
            Outfit Formulas
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {output.outfits.map((outfit, i) => (
            <motion.div
              key={outfit.name}
              className="flex flex-col gap-3 rounded-2xl p-5"
              style={{ backgroundColor: "#EFEBE3", border: "1px solid #DDD5C8" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
            >
              <div className="flex items-start justify-between gap-2">
                <h4
                  className="text-base font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
                >
                  {outfit.name}
                </h4>
                <span
                  className="flex-shrink-0 text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "#DDD5C8", color: "#5C5248" }}
                >
                  {outfit.occasion}
                </span>
              </div>

              <ul className="flex flex-col gap-1">
                {outfit.pieces.map((piece, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#5C5248" }}>
                    <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: "#A07850" }} />
                    {piece}
                  </li>
                ))}
              </ul>

              <p className="text-xs leading-snug pt-1" style={{ color: "#9E856A", borderTop: "1px solid #DDD5C8", paddingTop: "8px" }}>
                <span className="font-medium" style={{ color: "#A07850" }}>Tip:</span> {outfit.tip}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Section 3: Shopping Checklist ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#A07850" }}
          >
            Shopping Checklist
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
        </div>

        <div
          className="rounded-2xl overflow-hidden mb-4"
          style={{ border: "1px solid #DDD5C8" }}
        >
          {/* Group by priority */}
          {(["foundation", "accent", "optional"] as const).map((priority) => {
            const items = output.shoppingList
              .map((item, idx) => ({ item, idx }))
              .filter(({ item }) => item.priority === priority);

            if (items.length === 0) return null;

            const colors = PRIORITY_COLORS[priority];

            return (
              <div key={priority}>
                <div
                  className="px-5 py-2"
                  style={{ backgroundColor: colors.bg }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: colors.text }}
                  >
                    {PRIORITY_LABELS[priority]}
                  </span>
                </div>
                {items.map(({ item, idx }) => (
                  <button
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className="flex items-start gap-3 w-full text-left px-5 py-3 transition-colors duration-100"
                    style={{
                      backgroundColor: checked[idx] ? "#F7F4EF" : "#FDFCFA",
                      borderBottom: "1px solid #EDE8E1",
                    }}
                  >
                    {/* Checkbox */}
                    <span
                      className="flex-shrink-0 mt-0.5 w-4 h-4 rounded flex items-center justify-center"
                      style={{
                        border: `1.5px solid ${checked[idx] ? "#A07850" : "#C4A882"}`,
                        backgroundColor: checked[idx] ? "#A07850" : "transparent",
                      }}
                    >
                      {checked[idx] && (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path
                            d="M1 3L3 5L7 1"
                            stroke="#FDFCFA"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span
                      className="text-sm leading-snug"
                      style={{
                        color: checked[idx] ? "#C4A882" : "#1E1A16",
                        textDecoration: checked[idx] ? "line-through" : "none",
                      }}
                    >
                      {item.item}
                    </span>
                  </button>
                ))}
              </div>
            );
          })}
        </div>

        {/* Copy button */}
        <div className="flex justify-end">
          <button
            onClick={copyChecklist}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-150 hover:scale-[1.01]"
            style={{ borderColor: "#A07850", color: "#A07850" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="4" width="8" height="9" rx="1.5" stroke="#A07850" strokeWidth="1.2" />
              <path d="M4 4V2.5A1.5 1.5 0 0 1 5.5 1h7A1.5 1.5 0 0 1 14 2.5v7A1.5 1.5 0 0 1 12.5 11H11" stroke="#A07850" strokeWidth="1.2" />
            </svg>
            Copy checklist
          </button>
        </div>
      </motion.div>
    </div>
  );
}
