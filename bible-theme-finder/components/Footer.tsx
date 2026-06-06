export function Footer() {
  return (
    <footer className="border-t border-[#EDE5D8] bg-[#FDFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#9E9585]">
        <div className="flex items-center gap-2">
          <span className="text-[#B8882A]">✦</span>
          <span style={{ fontFamily: "var(--font-serif)" }} className="text-base font-medium text-[#1A1714]">
            Bible Theme Finder
          </span>
        </div>
        <p className="text-center sm:text-right max-w-sm">
          Scripture references are provided for personal study. All passages are listed
          by reference only — open your Bible to read the full text.
        </p>
      </div>
    </footer>
  );
}
