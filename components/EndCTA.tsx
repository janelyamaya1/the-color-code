"use client";

import { motion } from "framer-motion";

const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://youtube.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thecolorcode.vercel.app";

interface EndCTAProps {
  profileLabel: string;
}

export function EndCTA({ profileLabel }: EndCTAProps) {
  const shareText = `I just discovered my Color Code: ${profileLabel}. Find yours at ${SITE_URL}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    alert("Copied to clipboard!");
  };

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "#C4A882" }}>
            What's next
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#DDD5C8" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* YouTube CTA */}
          <motion.div
            className="flex flex-col gap-4 rounded-2xl p-8"
            style={{ backgroundColor: "#EFEBE3", border: "1px solid #DDD5C8" }}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              {/* YouTube icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#A07850">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.6 5 12 5 12 5s-4.6 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.6 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9.5l5.6 2.5-5.6 2.5z" />
              </svg>
              <span
                className="text-xs font-medium tracking-wide uppercase"
                style={{ color: "#A07850" }}
              >
                The Color Code · YouTube
              </span>
            </div>

            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
            >
              Watch me build a wardrobe with this exact system.
            </h3>

            <p className="text-sm leading-relaxed" style={{ color: "#5C5248" }}>
              New videos on color profiling, capsule wardrobes, and building a style system
              that actually works. No trends. No guesswork.
            </p>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-fit"
              style={{ backgroundColor: "#A07850", color: "#FDFCFA" }}
            >
              Subscribe to The Color Code
            </a>
          </motion.div>

          {/* Share CTA */}
          <motion.div
            className="flex flex-col gap-4 rounded-2xl p-8"
            style={{ backgroundColor: "#EFEBE3", border: "1px solid #DDD5C8" }}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="text-xs font-medium tracking-wide uppercase"
              style={{ color: "#A07850" }}
            >
              Share your profile
            </span>

            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
            >
              What&apos;s your color profile?
            </h3>

            <p className="text-sm leading-relaxed" style={{ color: "#5C5248" }}>
              Share your result and challenge a friend to discover theirs.
            </p>

            {/* Share preview card */}
            <div
              className="rounded-xl px-4 py-3 text-xs leading-relaxed"
              style={{ backgroundColor: "#FDFCFA", border: "1px solid #DDD5C8", color: "#5C5248" }}
            >
              {shareText}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-150 hover:scale-[1.02]"
                style={{ backgroundColor: "#1E1A16", color: "#FDFCFA" }}
              >
                Share on X (Twitter)
              </a>
              <button
                onClick={copyToClipboard}
                className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-150 hover:scale-[1.02]"
                style={{ borderColor: "#A07850", color: "#A07850" }}
              >
                Copy link
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
