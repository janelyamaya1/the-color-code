"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Answer 10 questions",
    description:
      "Tell us about your natural coloring — skin, hair, eyes, and how you respond to different colors. No color theory knowledge needed.",
  },
  {
    number: "02",
    title: "Get your color profile",
    description:
      "We analyze your answers to determine your undertone, depth, chroma, and contrast level — your four core color dimensions.",
  },
  {
    number: "03",
    title: "Build your wardrobe",
    description:
      "Receive your complete palette — core neutrals, accent colors, what to avoid, and a simple shopping filter you can use in-store.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: "#EFEBE3" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: "#A07850" }}
          >
            How it works
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
          >
            From answers to a palette you can actually use
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Number */}
              <div
                className="text-4xl font-semibold"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#C4A882",
                }}
              >
                {step.number}
              </div>

              {/* Divider */}
              <div className="h-px w-12" style={{ backgroundColor: "#A07850" }} />

              {/* Title */}
              <h3
                className="text-lg font-semibold"
                style={{ color: "#1E1A16", fontFamily: "var(--font-sans)" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#5C5248" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="text-center mt-16">
          <p
            className="text-sm"
            style={{ color: "#A07850" }}
          >
            Takes under 5 minutes · Results sent to your inbox · Completely free
          </p>
        </div>
      </div>
    </section>
  );
}
