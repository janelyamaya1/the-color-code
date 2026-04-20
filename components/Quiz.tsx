"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import { computeProfile, ColorProfile } from "@/lib/result-engine";
import { getVariant, ResultVariant } from "@/lib/result-variants";
import { submitToGHL } from "@/lib/ghl-submit";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { ResultsGate } from "./ResultsGate";
import { ResultsDisplay } from "./ResultsDisplay";
import { EndCTA } from "./EndCTA";
import { WardrobeQuestions } from "./WardrobeQuestions";
import { WardrobeDisplay } from "./WardrobeDisplay";
import { buildWardrobe, WardrobeOutput } from "@/lib/wardrobe-engine";

const STORAGE_KEY = "tcc_quiz_state";

type Phase = "quiz" | "gate" | "results" | "wardrobe-q" | "wardrobe";

interface GateFormValues {
  firstName: string;
  email: string;
  phone: string;
}

export function Quiz() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [gateLoading, setGateLoading] = useState(false);
  const [leadData, setLeadData] = useState<GateFormValues | null>(null);
  const [profile, setProfile] = useState<ColorProfile | null>(null);
  const [variant, setVariant] = useState<ResultVariant | null>(null);
  const [wardrobeAnswers, setWardrobeAnswers] = useState<{ lifestyles: string[]; sizePreference: string }>({
    lifestyles: [],
    sizePreference: "",
  });
  const [wardrobeOutput, setWardrobeOutput] = useState<WardrobeOutput | null>(null);

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { answers: savedAnswers, currentIndex: savedIndex } = JSON.parse(saved);
        if (savedAnswers) setAnswers(savedAnswers);
        if (typeof savedIndex === "number") setCurrentIndex(savedIndex);
      }
    } catch {
      // ignore
    }
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    if (phase === "quiz") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, currentIndex }));
      } catch {
        // ignore
      }
    }
  }, [answers, currentIndex, phase]);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const selectedAnswer = answers[currentQuestion.id] ?? null;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === QUIZ_QUESTIONS.length - 1;

  function handleSelect(answerId: string) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answerId }));
  }

  function handleNext() {
    if (!selectedAnswer) return;
    if (isLast) {
      setPhase("gate");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleBack() {
    if (!isFirst) setCurrentIndex((i) => i - 1);
  }

  async function handleGateSubmit(data: GateFormValues) {
    setGateLoading(true);
    const computed = computeProfile(answers);
    const v = getVariant(computed.variantKey);
    setProfile(computed);
    setVariant(v);
    setLeadData(data);

    await submitToGHL({
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      colorProfile: computed.displayLabel,
      undertone: computed.undertone,
      chroma: computed.chroma,
      contrast: computed.contrast,
      depth: computed.depth,
    });

    // Clear saved state
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }

    setGateLoading(false);
    setPhase("results");

    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleBuildWardrobe() {
    setPhase("wardrobe-q");
    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleWardrobeComplete(lifestyles: string[], sizePreference: "strict" | "balanced" | "flexible") {
    if (!profile || !variant) return;
    setWardrobeAnswers({ lifestyles, sizePreference });
    const output = buildWardrobe({ profile, variant, lifestyles, sizePreference });
    setWardrobeOutput(output);
    setPhase("wardrobe");
    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <section id="quiz-section" className="py-20 px-6" style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase mb-3"
            style={{ color: "#A07850" }}
          >
            The Color Profile Quiz
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
          >
            {phase === "results"
              ? "Your complete color profile"
              : phase === "wardrobe-q"
              ? "Build your wardrobe"
              : phase === "wardrobe"
              ? "Your capsule wardrobe"
              : "Discover your color profile"}
          </h2>
        </div>

        {/* Quiz card */}
        {(phase === "quiz" || phase === "gate" || phase === "wardrobe-q") && (
          <div
            className="rounded-2xl p-8 sm:p-10 shadow-sm"
            style={{ backgroundColor: "#EFEBE3", border: "1px solid #DDD5C8" }}
          >
            {phase === "quiz" && (
              <>
                <QuizProgress
                  current={currentIndex + 1}
                  total={QUIZ_QUESTIONS.length}
                />
                <div className="mt-8">
                  <AnimatePresence mode="wait">
                    <QuizQuestion
                      key={currentQuestion.id}
                      question={currentQuestion}
                      selected={selectedAnswer}
                      onSelect={handleSelect}
                      onNext={handleNext}
                      onBack={handleBack}
                      isFirst={isFirst}
                      isLast={isLast}
                    />
                  </AnimatePresence>
                </div>
              </>
            )}

            {phase === "gate" && (
              <ResultsGate onSubmit={handleGateSubmit} isLoading={gateLoading} />
            )}

            {phase === "wardrobe-q" && (
              <WardrobeQuestions
                onComplete={handleWardrobeComplete}
                onBack={() => setPhase("results")}
              />
            )}
          </div>
        )}

        {/* Results */}
        {phase === "results" && profile && variant && (
          <div id="results-section">
            <motion.div
              className="rounded-2xl p-8 sm:p-10 shadow-sm mb-10"
              style={{ backgroundColor: "#EFEBE3", border: "1px solid #DDD5C8" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ResultsDisplay
                profile={profile}
                variant={variant}
                firstName={leadData?.firstName ?? ""}
                onBuildWardrobe={handleBuildWardrobe}
              />
            </motion.div>
          </div>
        )}

        {/* Wardrobe output */}
        {phase === "wardrobe" && wardrobeOutput && (
          <div id="results-section">
            <motion.div
              className="rounded-2xl p-8 sm:p-10 shadow-sm mb-10"
              style={{ backgroundColor: "#EFEBE3", border: "1px solid #DDD5C8" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WardrobeDisplay output={wardrobeOutput} />
            </motion.div>
            {profile && <EndCTA profileLabel={profile.displayLabel} />}
          </div>
        )}
      </div>
    </section>
  );
}
