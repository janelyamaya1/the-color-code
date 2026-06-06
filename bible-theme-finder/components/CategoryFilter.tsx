"use client";

import { CATEGORIES } from "@/lib/bible-themes";

interface Props {
  active: string;
  onChange: (slug: string) => void;
}

export function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onChange("all")}
        className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition ${
          active === "all"
            ? "bg-[#1A1714] text-white border-[#1A1714]"
            : "bg-white text-[#5C5347] border-[#EDE5D8] hover:border-[#B8882A] hover:text-[#B8882A]"
        }`}
      >
        All Themes
      </button>

      {CATEGORIES.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition ${
            active === cat.slug
              ? "bg-[#1A1714] text-white border-[#1A1714]"
              : "bg-white text-[#5C5347] border-[#EDE5D8] hover:border-[#B8882A] hover:text-[#B8882A]"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
