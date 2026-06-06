"use client";

import { useState } from "react";
import { BIBLE_THEMES, getThemesByCategory } from "@/lib/bible-themes";
import { ThemeCard } from "./ThemeCard";
import { CategoryFilter } from "./CategoryFilter";

export function ThemeGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const base =
    activeCategory === "all" ? BIBLE_THEMES : getThemesByCategory(activeCategory);

  const themes =
    searchQuery.trim().length > 0
      ? base.filter(
          (t) =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : base;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter themes…"
            className="w-full pl-8 pr-4 py-2 text-sm bg-white border border-[#EDE5D8] rounded-full outline-none focus:ring-2 focus:ring-[#B8882A]/30 focus:border-[#B8882A] placeholder-[#9E9585] transition"
          />
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9E9585]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </div>
        <p className="text-sm text-[#9E9585] shrink-0">
          {themes.length} theme{themes.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="mb-8">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {themes.length === 0 ? (
        <div className="text-center py-20 text-[#9E9585]">
          <p className="text-4xl mb-3">✦</p>
          <p className="text-lg">No themes match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {themes.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      )}
    </section>
  );
}
