"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResultVariant } from "@/lib/result-variants";
import { Season } from "@/lib/seasons";

interface ShareCardProps {
  variant: ResultVariant;
  season: Season;
  firstName: string;
  onClose: () => void;
}

export function ShareCard({ variant, season, firstName, onClose }: ShareCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = "https://the-color-code.vercel.app";
    const text = `I'm a ${season.name}! Discover your personal color profile at The Color Code.`;

    if (navigator.share) {
      try {
        await navigator.share({ title: "The Color Code", text, url });
        return;
      } catch {
        // user cancelled or API unavailable — fall through to copy
      }
    }

    await navigator.clipboard.writeText(`${text}\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          className="flex flex-col items-center gap-5 w-full max-w-xs"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Card */}
          <div
            className="w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ backgroundColor: "#F7F4EF" }}
          >
            {/* Top swatch strip */}
            <div className="flex h-3">
              {variant.coreNeutrals.map((s) => (
                <div key={s.hex} className="flex-1" style={{ backgroundColor: s.hex }} />
              ))}
            </div>

            {/* Body */}
            <div className="flex flex-col items-center text-center px-8 py-10 gap-5">
              <p
                className="text-xs font-medium tracking-[0.25em] uppercase"
                style={{ color: "#A07850" }}
              >
                Personal Color Analysis
              </p>

              <div>
                <p className="text-xs mb-2" style={{ color: "#9E856A" }}>
                  {firstName ? `${firstName} is a` : "My season is"}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#1E1A16",
                    fontSize: 38,
                    fontWeight: 600,
                    lineHeight: 1.1,
                  }}
                >
                  {season.name}
                </h2>
                <p className="text-sm mt-2" style={{ color: "#7A6A5A" }}>
                  {season.tagline}
                </p>
              </div>

              {/* Core neutral swatches */}
              <div className="flex gap-2 mt-1">
                {variant.coreNeutrals.map((s) => (
                  <div
                    key={s.hex}
                    title={s.name}
                    style={{
                      backgroundColor: s.hex,
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      border: "1.5px solid rgba(0,0,0,0.1)",
                    }}
                  />
                ))}
              </div>

              {/* Accent color dots */}
              <div className="flex gap-1.5">
                {variant.accentColors.map((s) => (
                  <div
                    key={s.hex}
                    title={s.name}
                    style={{
                      backgroundColor: s.hex,
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-8 py-4 text-center"
              style={{ borderTop: "1px solid #E8E0D5" }}
            >
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#A07850" }}
              >
                The Color Code
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#B4A090" }}>
                the-color-code.vercel.app
              </p>
            </div>

            {/* Bottom accent strip */}
            <div className="flex h-3">
              {variant.accentColors.map((s) => (
                <div key={s.hex} className="flex-1" style={{ backgroundColor: s.hex }} />
              ))}
            </div>
          </div>

          {/* Screenshot hint */}
          <p className="text-xs text-white/60 text-center">
            Screenshot the card above to share — or use the button below.
          </p>

          {/* Actions */}
          <div className="flex gap-3 w-full">
            <button
              onClick={handleShare}
              className="flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
              style={{ backgroundColor: "#A07850", color: "#FDFCFA" }}
            >
              {copied ? "Copied!" : "Share My Season"}
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
