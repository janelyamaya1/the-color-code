import { BIBLE_THEMES, CATEGORIES } from "@/lib/bible-themes";

export function Hero() {
  const totalRefs = BIBLE_THEMES.reduce((sum, t) => sum + t.references.length, 0);

  return (
    <section className="relative overflow-hidden bg-[#FDFAF4] pt-16 pb-14 px-4 text-center">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #B8882A 0px, #B8882A 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #B8882A 0px, #B8882A 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <p
          className="uppercase tracking-widest text-[#B8882A] text-xs font-medium mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Scripture by Topic
        </p>

        <h1
          className="text-5xl sm:text-6xl font-semibold text-[#1A1714] leading-tight mb-5"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What does the Bible{" "}
          <em className="italic text-[#B8882A]">really say</em>{" "}
          about…
        </h1>

        <p className="text-[#5C5347] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Explore {BIBLE_THEMES.length} themes — from love and marriage to fear and
          justice. Every passage, organized so you can go deeper.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-center">
          <Stat value={BIBLE_THEMES.length} label="Themes" />
          <div className="w-px bg-[#EDE5D8] self-stretch" />
          <Stat value={totalRefs} label="Passages" />
          <div className="w-px bg-[#EDE5D8] self-stretch" />
          <Stat value={CATEGORIES.length} label="Categories" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <p
        className="text-3xl font-semibold text-[#B8882A]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {value.toLocaleString()}
      </p>
      <p className="text-sm text-[#9E9585] uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}
