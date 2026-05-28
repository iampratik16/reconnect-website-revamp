"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export type JourneyStep = {
  num: string;
  title: string;
  blurb: string;
  optional?: boolean;
};

const DEFAULT_STEPS: JourneyStep[] = [
  {
    num: "01",
    title: "Medical Assessment",
    blurb:
      "Always first. A detailed review of your condition, history, medications and imaging by our medical team.",
  },
  {
    num: "02",
    title: "Personalised Exercise Program",
    blurb:
      "Not random workouts. Split by upper body, lower body, back and target joint — starting where your problem is.",
  },
  {
    num: "03",
    title: "Nutrition Plan",
    blurb:
      "Built from a pre-questionnaire (veg/non-veg, allergies, history). Anti-inflammatory and bone-supportive.",
  },
  {
    num: "04",
    title: "Psychology Support",
    blurb:
      "Only if we detect a mental block to movement. Mindset matters as much as the muscle.",
    optional: true,
  },
];

export default function JourneyStepper({
  steps = DEFAULT_STEPS,
  variant = "row",
  tone = "bone",
  className,
}: {
  steps?: JourneyStep[];
  variant?: "row" | "stacked";
  tone?: "bone" | "sage-deep";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const isDark = tone === "sage-deep";

  return (
    <ol
      className={cn(
        "grid gap-6",
        variant === "row" ? "md:grid-cols-4" : "md:grid-cols-1",
        className,
      )}
    >
      {steps.map((s, i) => (
        <motion.li
          key={s.num}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative pt-6 pl-0 md:pl-0",
            "before:absolute before:left-0 before:top-0 before:h-px before:w-12",
            isDark ? "before:bg-bone/40" : "before:bg-clay",
          )}
        >
          <div className="flex items-baseline gap-3 mb-3">
            <span className={cn("section-num text-sm", isDark && "text-clay-soft")}>
              {s.num}
            </span>
            {s.optional && (
              <span className="text-[10px] uppercase tracking-[0.18em] opacity-60">
                If needed
              </span>
            )}
          </div>
          <h3 className={cn("t-h3 mb-2", isDark && "text-bone")}>{s.title}</h3>
          <p className={cn("t-body", isDark && "text-bone/70")}>{s.blurb}</p>
        </motion.li>
      ))}
    </ol>
  );
}
