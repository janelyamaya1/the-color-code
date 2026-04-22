"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ColorProfile } from "@/lib/result-engine";
import { ResultVariant } from "@/lib/result-variants";
import { getSeason } from "@/lib/seasons";
import { PaletteSwatch } from "./PaletteSwatch";
import { ShareCard } from "./ShareCard";

interface ResultsDisplayProps {
  profile: ColorProfile;
  variant: ResultVariant;
  firstName: string;
  onBuildWardrobe: () => void;
}

const DIMENSION_LABELS: Record<string, { label: string; description: string }> = {
  warm: { label: "Warm", description: "Yellow, golden, or peachy undertones" },
  cool: { label: "Cool", description: "Pink, red, or blue undertones" },
  "neutral-warm": { label: "Neutral-Warm", description: "Balanced with a warm lean" },
  "neutral-cool": { label: "Neutral-Cool", description: "Balanced with a cool lean" },
  soft: { label: "Soft & Muted", description: "Dusty, earthy, low saturation" },
  clear: { label: "Clear & Bright", description: "Vivid, defined, higher saturation" },
  low: { label: "Low Contrast", description: "Features blend harmoniously" },
  high: { label: "High Contrast", description: "Strong difference between features" },
  light: { label: "Light", description: "Naturally light coloring" },
  "light-medium": { label: "Light–Medium", description: "Soft, moderate depth" },
  medium: { label: "Medium", description: "Mid-range depth" },
  deep: { label: "Deep", description: "Rich, deep coloring" },
};

function ProfileDimensionCard({
  label,
  value,
  delay,
}: {
  label: string;
  value: string;
  delay: number;
}) {
  const info = DIMENSION_LABELS[value] ?? { label: value, description: "" };
  return (
    <motion.div
      className="flex flex-col gap-1 p-4 rounded-xl"
      style={{ backgroundColor: "#FDFCFA", border: "1px solid #DDD5C8" }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "#A07850" }}>
        {label}
      </span>
      <span
        className="text-base font-semibold"
        style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
      >
        {info.label}
      </span>
      <span className="text-xs" style={{ color: "#5C5248" }}>
        {info.description}
      </span>
    </motion.div>
  );
}

export function ResultsDisplay({ profile, variant, firstName, onBuildWardrobe }: ResultsDisplayProps) {
  const [showShareCard, setShowShareCard] = useState(false);
  const season = getSeason(variant.key);

  return (
    <div className="w-full">
      {/* Season name + share */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: "#A07850" }}>
          {firstName ? `${firstName}'s` : "Your"} Color Profile
        </p>

        {/* Season badge */}
        <motion.div
          className="inline-flex flex-col items-center mb-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase mb-2"
            style={{ color: "#9E856A" }}
          >
            Your Season
          </span>
          <h2
            className="text-4xl sm:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
          >
            {season.name}
          </h2>
          <p className="text-sm mt-2" style={{ color: "#7A6A5A" }}>
            {season.tagline}
          </p>
        </motion.div>

        {/* Share button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <button
            onClick={() => setShowShareCard(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] mb-8"
            style={{
              border: "1.5px solid #C4A882",
              color: "#A07850",
              backgroundColor: "transparent",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            Share My Season
          </button>
        </motion.div>

        <h3
          className="text-lg sm:text-xl font-semibold mb-3 leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
        >
          {variant.headline}
        </h3>
        <p
          className="text-sm leading-relaxed max-w-xl mx-auto"
          style={{ color: "#5C5248" }}
        >
          {variant.insight}
        </p>
      </motion.div>

      {showShareCard && (
        <ShareCard
          variant={variant}
          season={season}
          firstName={firstName}
          onClose={() => setShowShareCard(false)}
        />
      )}

      {/* Profile dimensions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        <ProfileDimensionCard label="Undertone" value={profile.undertone} delay={0.1} />
        <ProfileDimensionCard label="Chroma" value={profile.chroma} delay={0.2} />
        <ProfileDimensionCard label="Contrast" value={profile.contrast} delay={0.3} />
        <ProfileDimensionCard label="Depth" value={profile.depth} delay={0.4} />
      </div>

      {/* Core Neutrals */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3
          className="text-base font-semibold mb-1"
          style={{ color: "#1E1A16" }}
        >
          Your Core Neutrals
        </h3>
        <p className="text-xs mb-5" style={{ color: "#A07850" }}>
          These build your wardrobe foundation — aim for 70–80% of your closet.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {variant.coreNeutrals.map((swatch, i) => (
            <PaletteSwatch key={swatch.hex} swatch={swatch} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Accent Colors */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.65 }}
      >
        <h3
          className="text-base font-semibold mb-1"
          style={{ color: "#1E1A16" }}
        >
          Your Accent Colors
        </h3>
        <p className="text-xs mb-5" style={{ color: "#A07850" }}>
          These are your statement pieces — use them as the 20–30% that adds personality.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {variant.accentColors.map((swatch, i) => (
            <PaletteSwatch key={swatch.hex} swatch={swatch} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Avoid Colors */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-base font-semibold mb-1" style={{ color: "#1E1A16" }}>
          Colors to Avoid
        </h3>
        <p className="text-xs mb-5" style={{ color: "#A07850" }}>
          These fight your natural coloring — even small amounts can throw off an outfit.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {variant.avoidColors.map((swatch, i) => (
            <PaletteSwatch key={swatch.hex} swatch={swatch} index={i} avoided />
          ))}
        </div>
      </motion.div>

      {/* Shopping filter */}
      <motion.div
        className="rounded-2xl p-6"
        style={{ backgroundColor: "#EFEBE3", border: "1px solid #DDD5C8" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h3
          className="text-base font-semibold mb-4"
          style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
        >
          Your 3-Question Shopping Filter
        </h3>
        <p className="text-xs mb-5" style={{ color: "#5C5248" }}>
          Ask yourself these before buying anything new.
        </p>
        <ol className="flex flex-col gap-3">
          {variant.shoppingRules.map((rule, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "#A07850", color: "#FDFCFA" }}
              >
                {i + 1}
              </span>
              <span className="text-sm leading-snug" style={{ color: "#5C5248" }}>
                {rule}
              </span>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* ── Build My Wardrobe System CTA ───────────────────────────────────────── */}
      <motion.div
        className="mt-10 pt-8"
        style={{ borderTop: "1px solid #DDD5C8" }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <div className="text-center flex flex-col items-center gap-4">
          <div>
            <p
              className="text-base font-semibold mb-2"
              style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
            >
              Ready to turn this into a wardrobe?
            </p>
            <p className="text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "#5C5248" }}>
              Get your capsule structure, outfit formulas, and a shopping checklist — built for your profile.
            </p>
          </div>

          {/* TODO: [ACCOUNT GATE] — This button should eventually trigger a login/register gate once the main business auth system is ready. Color Code lives as a sub-brand under the main portfolio. On account creation, save color profile + wardrobe data to user profile. */}
          <button
            onClick={onBuildWardrobe}
            className="px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#A07850", color: "#FDFCFA" }}
          >
            Build My Wardrobe System →
          </button>

          <p className="text-xs" style={{ color: "#C4A882" }}>
            Takes 1 minute · Free
          </p>
        </div>
      </motion.div>
    </div>
  );
}
