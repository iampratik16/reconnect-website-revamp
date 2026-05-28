"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  LineArtHip,
  LineArtKnee,
  LineArtSkeleton,
  LineArtSpine,
} from "@/components/primitives/LineArt";

type Step = {
  num: string;
  label: string;
  headline: string;
  body: string;
  art: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const STEPS: Step[] = [
  {
    num: "01",
    label: "Medical Assessment",
    headline: "Always first.",
    body: "A detailed review of your condition, history, medications and imaging by our medical team. This decides everything that follows. Care is patient-to-patient — never a template.",
    art: LineArtSkeleton,
  },
  {
    num: "02",
    label: "Personalised Exercise Program",
    headline: "Not random workouts.",
    body: "Split across upper body, lower body, back and specific joints — we start where your problem is. If you've never lifted a dumbbell, we won't throw numbers at you. A 30-year-old and a busy 40-year-old get different prescriptions of the same method.",
    art: LineArtKnee,
  },
  {
    num: "03",
    label: "Nutrition Plan",
    headline: "Anti-inflammatory. Bone-supportive.",
    body: "A plate-level nutrition plan built from a pre-questionnaire — veg / non-veg / eggetarian, allergies, food preferences, medical history. Tied to your program and your body's actual needs.",
    art: LineArtSpine,
  },
  {
    num: "04",
    label: "Psychology Support",
    headline: "Only if you need it.",
    body: "If we detect a mental block to movement, we refer you to a psychologist. Fear of pain, fear of re-injury, the inertia of long deconditioning — these are real. Mindset matters as much as the muscle.",
    art: LineArtHip,
  },
];

function StickyArt({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const Art = step.art;
  const start = index / total;
  const end = (index + 1) / total;
  const fadeIn = Math.max(0, start - 0.04);
  const fadeOut = Math.min(1, end + 0.04);
  const opacity = useTransform(
    progress,
    [fadeIn, start + 0.02, end - 0.02, fadeOut],
    [0, 1, 1, 0],
  );
  const scale = useTransform(progress, [start, end], [0.96, 1.04]);
  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative">
        <Art aria-hidden className="w-[260px] md:w-[320px] text-sage opacity-80" />
        <span aria-hidden className="absolute -top-8 -left-12 t-eyebrow text-clay">
          Step {step.num}
        </span>
      </div>
    </motion.div>
  );
}

export default function StickyJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduce) {
    return (
      <section className="relative bg-bone py-24">
        <div className="container-x grid gap-20">
          {STEPS.map((s) => {
            const Art = s.art;
            return (
              <div key={s.num} className="grid md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-5">
                  <Art aria-hidden className="w-40 text-sage opacity-50" />
                </div>
                <div className="md:col-span-7">
                  <p className="section-num text-sm">{s.num}</p>
                  <p className="t-eyebrow mt-3 text-clay">{s.label}</p>
                  <h3 className="t-h2 mt-3 text-ink">{s.headline}</h3>
                  <p className="t-lead mt-5 max-w-[60ch]">{s.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-bone">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 md:sticky md:top-[120px] md:self-start md:h-[60vh] flex items-center justify-center order-1">
            <div className="relative w-full h-[60vh] flex items-center justify-center">
              {STEPS.map((s, i) => (
                <StickyArt
                  key={s.num}
                  step={s}
                  index={i}
                  total={STEPS.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-7 order-2 py-24 md:py-32">
            <div className="flex flex-col gap-[60vh]">
              {STEPS.map((s) => (
                <div key={s.num}>
                  <p className="section-num text-sm">{s.num}</p>
                  <p className="t-eyebrow mt-3 text-clay">{s.label}</p>
                  <h3 className="t-h2 mt-3 text-ink max-w-[18ch]">{s.headline}</h3>
                  <p className="t-lead mt-6 max-w-[52ch]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
