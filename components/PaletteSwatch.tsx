import { Swatch } from "@/lib/result-variants";

interface PaletteSwatchProps {
  swatch: Swatch;
  index?: number;
  avoided?: boolean;
}

export function PaletteSwatch({ swatch, index = 0, avoided = false }: PaletteSwatchProps) {
  return (
    <div
      className="flex flex-col items-center gap-2 swatch-animate"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Color block */}
      <div
        className="relative w-full aspect-square rounded-lg shadow-sm overflow-hidden"
        style={{ backgroundColor: swatch.hex }}
      >
        {/* Avoided X overlay */}
        {avoided && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
          >
            <span className="text-white text-2xl font-light select-none">✕</span>
          </div>
        )}
      </div>

      {/* Label */}
      <span
        className="text-xs text-center leading-tight font-medium"
        style={{ color: avoided ? "#C4A882" : "#5C5248" }}
      >
        {swatch.name}
      </span>
    </div>
  );
}
