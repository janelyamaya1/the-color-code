"use client";

interface QuizProgressProps {
  current: number; // 1-based
  total: number;
}

export function QuizProgress({ current, total }: QuizProgressProps) {
  const pct = (current / total) * 100;

  return (
    <div className="w-full">
      {/* Step counter */}
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-xs font-medium tracking-wide"
          style={{ color: "#A07850" }}
        >
          Question {current} of {total}
        </span>
        <span
          className="text-xs"
          style={{ color: "#C4A882" }}
        >
          {Math.round(pct)}% complete
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="w-full h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: "#E8DDD0" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            backgroundColor: "#A07850",
            transition: "width 400ms ease",
          }}
        />
      </div>
    </div>
  );
}
