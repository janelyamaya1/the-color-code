"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  email: string;
  phone: string;
}

interface ResultsGateProps {
  onSubmit: (data: FormValues) => void;
  isLoading: boolean;
}

export function ResultsGate({ onSubmit, isLoading }: ResultsGateProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md mx-auto"
    >
      {/* Icon */}
      <div className="text-4xl mb-4 text-center">🎨</div>

      {/* Headline */}
      <h3
        className="text-2xl sm:text-3xl font-semibold text-center mb-3"
        style={{ fontFamily: "var(--font-serif)", color: "#1E1A16" }}
      >
        Your Color Profile is ready.
      </h3>

      <p
        className="text-sm text-center mb-8 leading-relaxed"
        style={{ color: "#5C5248" }}
      >
        Enter your details below and we&apos;ll send your full color breakdown, wardrobe
        palette, and shopping guide straight to your inbox.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* First Name */}
        <div>
          <label
            className="block text-xs font-medium mb-1.5 tracking-wide"
            style={{ color: "#5C5248" }}
          >
            First Name
          </label>
          <input
            {...register("firstName", { required: "First name is required" })}
            placeholder="Your first name"
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors duration-150"
            style={{
              borderColor: errors.firstName ? "#B5542A" : "#DDD5C8",
              backgroundColor: "#FDFCFA",
              color: "#1E1A16",
            }}
          />
          {errors.firstName && (
            <p className="text-xs mt-1" style={{ color: "#B5542A" }}>
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            className="block text-xs font-medium mb-1.5 tracking-wide"
            style={{ color: "#5C5248" }}
          >
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors duration-150"
            style={{
              borderColor: errors.email ? "#B5542A" : "#DDD5C8",
              backgroundColor: "#FDFCFA",
              color: "#1E1A16",
            }}
          />
          {errors.email && (
            <p className="text-xs mt-1" style={{ color: "#B5542A" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            className="block text-xs font-medium mb-1.5 tracking-wide"
            style={{ color: "#5C5248" }}
          >
            Phone Number
            <span
              className="ml-1 font-normal"
              style={{ color: "#A07850" }}
            >
              (for your free color consult follow-up)
            </span>
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors duration-150"
            style={{
              borderColor: errors.phone ? "#B5542A" : "#DDD5C8",
              backgroundColor: "#FDFCFA",
              color: "#1E1A16",
            }}
          />
          {errors.phone && (
            <p className="text-xs mt-1" style={{ color: "#B5542A" }}>
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 w-full py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-200 disabled:opacity-60 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: "#A07850",
            color: "#FDFCFA",
          }}
        >
          {isLoading ? "Sending your profile..." : "Send My Color Profile →"}
        </button>

        <p className="text-xs text-center" style={{ color: "#C4A882" }}>
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </motion.div>
  );
}
