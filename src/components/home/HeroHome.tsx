"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitReveal from "@/components/primitives/SplitReveal";
import Reveal from "@/components/primitives/Reveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import Eyebrow from "@/components/primitives/Eyebrow";

export default function HeroHome() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0.4]);

  return (
    <section ref={ref} className="relative min-h-[100svh] bg-bone overflow-hidden">
      {/* Hero media — parallax + warm grade */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <Image
          src="/woman-dumbbell.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_30%]"
        />
        {/* Warm grade + clinical wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-clay/15 via-transparent to-sage-deep/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-bone/65 via-bone/30 to-bone" />
        {/* X-ray glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] rounded-full opacity-50 pointer-events-none"
             style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--color-clay) 18%, transparent), transparent 70%)", filter: "blur(60px)" }} />
      </motion.div>

      <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />

      <div className="relative z-10 container-x flex flex-col justify-between min-h-[100svh] pt-32 md:pt-40 pb-16">
        <div className="max-w-[1100px]">
          <Reveal>
            <Eyebrow tone="clay">
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-2 h-2 rounded-full bg-clay"
                />
                Designed by Dr. Shruthi Desai, Rheumatologist
              </span>
            </Eyebrow>
          </Reveal>

          <h1 className="t-hero mt-8 md:mt-10 max-w-[18ch] text-ink">
            <span className="block">
              <SplitReveal delay={0.15}>Stronger joints.</SplitReveal>
            </span>
            <span className="block">
              <SplitReveal delay={0.32}>Denser bones.</SplitReveal>
            </span>
            <span className="block">
              <SplitReveal delay={0.5}>A life without the</SplitReveal>{" "}
              <em className="italic-serif text-clay">
                <SplitReveal delay={0.7}>pain.</SplitReveal>
              </em>
            </span>
          </h1>

          <Reveal delay={0.95}>
            <p className="t-lead mt-8 max-w-[560px]">
              A doctor-designed strength and nutrition program for arthritis,
              joint pain, back issues, and osteoporosis. Built for real people,
              not athletes.
            </p>
          </Reveal>

          <Reveal delay={1.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="/assessment" variant="ink">
                Take Free Assessment
              </MagneticButton>
              <MagneticButton href="/contact" variant="sage">
                Book Consultation
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1.3}>
          <div className="hidden md:flex items-end justify-between mt-10 text-[0.8125rem] text-ink-soft">
            <span className="t-eyebrow">scroll</span>
            <span className="font-[family-name:var(--font-display)] text-[0.875rem]">
              Reconnect — Bones · Joints · Strength
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
