"use client";

import Link from "next/link";
import { useState } from "react";
import { searchThemes } from "@/lib/bible-themes";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const results = query.trim().length > 1 ? searchThemes(query).slice(0, 6) : [];

  function handleSelect(slug: string) {
    setQuery("");
    setOpen(false);
    router.push(`/themes/${slug}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FDFAF4]/90 backdrop-blur border-b border-[#EDE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#B8882A] text-2xl">✦</span>
          <span
            className="font-serif text-xl font-semibold tracking-wide text-[#1A1714]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Bible Theme Finder
          </span>
        </Link>

        <div className="relative w-full max-w-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder="Search themes…"
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#EDE5D8] rounded-full outline-none focus:ring-2 focus:ring-[#B8882A]/30 focus:border-[#B8882A] placeholder-[#9E9585] transition"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9585]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>

          {open && results.length > 0 && (
            <ul className="absolute top-full mt-2 left-0 right-0 bg-white border border-[#EDE5D8] rounded-xl shadow-lg overflow-hidden z-50">
              {results.map((t) => (
                <li key={t.slug}>
                  <button
                    onMouseDown={() => handleSelect(t.slug)}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#F5E6C3] transition flex flex-col gap-0.5"
                  >
                    <span className="text-sm font-medium text-[#1A1714]">{t.name}</span>
                    <span className="text-xs text-[#9E9585]">{t.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
