"use client";

import { motion } from "framer-motion";

const SWATCHES = [
  { hex: "#F5EDD8", delay: 0 },
  { hex: "#C4A882", delay: 0.1 },
  { hex: "#A07850", delay: 0.2 },
  { hex: "#8A8C6A", delay: 0.3 },
  { hex: "#7A5C44", delay: 0.4 },
  { hex: "#4A4440", delay: 0.5 },
  { hex: "#E0B89A", delay: 0.15 },
];

export function Hero() {
  const scrollToQuiz = () => {
    document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 overflow-hidden"
      style={{ backgroundColor: "#F7F4EF" }}
    >
      {/* Swatch strip — top decorative */}
      <div className="absolute top-0 left-0 right-0 flex h-1.5">
        {SWATCHES.map((s, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full"
            style={{ backgroundColor: s.hex }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: s.delay, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="text-xs font-medium tracking-[0.25em] uppercase mb-6"
          style={{ color: "#A07850" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Personal Color Analysis
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#1E1A16",
            letterSpacing: "0.04em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          The Color Code
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl sm:text-2xl font-normal mb-4 leading-relaxed"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#5C5248",
            fontStyle: "italic",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Build a wardrobe that works — every time.
        </motion.p>

        {/* Sub-copy */}
        <motion.p
          className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-12"
          style={{ color: "#5C5248" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          Stop guessing. Build a wardrobe based on your actual color profile — not trends.
          Answer 10 questions and discover the exact palette that works with your natural
          coloring.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button
            onClick={scrollToQuiz}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              backgroundColor: "#A07850",
              color: "#FDFCFA",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.05em",
            }}
          >
            Discover Your Color Profile
            <span className="text-base">→</span>
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          className="mt-6 text-xs"
          style={{ color: "#A07850" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Under 5 minutes · No color theory knowledge needed · Free
        </motion.p>
      </div>

      {/* Bottom palette swatch strip */}
      <div className="absolute bottom-0 left-0 right-0 flex h-12 opacity-20">
        {SWATCHES.concat([
          { hex: "#C19A6B", delay: 0 },
          { hex: "#8B7355", delay: 0 },
          { hex: "#E8DDD0", delay: 0 },
        ]).map((s, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full"
            style={{ backgroundColor: s.hex }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 + i * 0.05 }}
          />
        ))}
      </div>
    </section>
  );
}
