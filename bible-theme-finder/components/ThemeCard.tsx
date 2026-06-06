import Link from "next/link";
import { BibleTheme, getCategoryInfo } from "@/lib/bible-themes";

export function ThemeCard({ theme }: { theme: BibleTheme }) {
  const cat = getCategoryInfo(theme.categorySlug);
  const otCount = theme.references.filter((r) => r.testament === "OT").length;
  const ntCount = theme.references.filter((r) => r.testament === "NT").length;

  return (
    <Link
      href={`/themes/${theme.slug}`}
      className="group flex flex-col bg-white border border-[#EDE5D8] rounded-2xl p-5 hover:border-[#B8882A] hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${cat?.color ?? "bg-gray-100 text-gray-700 border-gray-200"}`}
        >
          {theme.category}
        </span>
        <span className="text-[#B8882A] opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none">
          →
        </span>
      </div>

      <h3
        className="text-xl font-semibold text-[#1A1714] leading-snug mb-2 group-hover:text-[#B8882A] transition-colors"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {theme.name}
      </h3>

      <p className="text-sm text-[#5C5347] leading-relaxed line-clamp-2 flex-1 mb-4">
        {theme.description}
      </p>

      <div className="flex items-center gap-3 text-xs text-[#9E9585]">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8882A] inline-block" />
          {theme.references.length} passages
        </span>
        {otCount > 0 && <span>{otCount} OT</span>}
        {ntCount > 0 && <span>{ntCount} NT</span>}
      </div>
    </Link>
  );
}
