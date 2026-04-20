"use client";

import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selected: string | null;
  onSelect: (answerId: string) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function QuizQuestion({
  question,
  selected,
  onSelect,
  onNext,
  onBack,
  isFirst,
  isLast,
}: QuizQuestionProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      {/* Question text */}
      <h3
        className="text-xl sm:text-2xl font-semibold mb-2 leading-snug"
        style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
      >
        {question.question}
      </h3>

      {/* Subtext */}
      {question.subtext && (
        <p className="text-sm mb-6" style={{ color: "#A07850" }}>
          {question.subtext}
        </p>
      )}

      {/* Answer options */}
      <div className="flex flex-col gap-3 mt-6">
        {question.answers.map((answer) => {
          const isSelected = selected === answer.id;
          return (
            <button
              key={answer.id}
              onClick={() => onSelect(answer.id)}
              className="w-full text-left px-5 py-4 rounded-xl border transition-all duration-150 text-sm font-medium"
              style={{
                borderColor: isSelected ? "#A07850" : "#DDD5C8",
                backgroundColor: isSelected ? "#E8DDD0" : "#FDFCFA",
                color: isSelected ? "#1E1A16" : "#5C5248",
                outline: "none",
              }}
            >
              {answer.label}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        {/* Back */}
        {!isFirst ? (
          <button
            onClick={onBack}
            className="text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150"
            style={{ color: "#A07850" }}
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {/* Next / See Results */}
        <button
          onClick={onNext}
          disabled={!selected}
          className="px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: selected ? "#A07850" : "#C4A882",
            color: "#FDFCFA",
          }}
        >
          {isLast ? "See My Profile →" : "Next →"}
        </button>
      </div>
    </motion.div>
  );
}
