"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Section from "@/components/primitives/Section";
import Eyebrow from "@/components/primitives/Eyebrow";
import Reveal from "@/components/primitives/Reveal";
import MagneticButton from "@/components/primitives/MagneticButton";

export default function MeetDoctor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div ref={ref} className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-[420px] mx-auto md:mx-0 rounded-[24px] overflow-hidden border border-line">
              <motion.div style={{ y }} className="absolute inset-0">
                <Image
                  src="/dr-shruthi.avif"
                  alt="Dr. Shruthi Desai, rheumatologist and founder of Reconnect"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-clay/10 to-transparent mix-blend-multiply" />
              </motion.div>
            </div>
            {/* Caption tag */}
            <div className="hidden md:flex absolute -right-6 bottom-10 bg-calcium border border-line rounded-full px-5 py-2 shadow-sm">
              <span className="t-eyebrow text-clay">12+ yrs rheumatology</span>
            </div>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>Your medical lead</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="t-h1 mt-5 text-ink">
                Dr. Shruthi Desai —{" "}
                <em className="italic-serif text-clay">rheumatologist by training,</em>{" "}
                strength-coach by conviction.
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-eyebrow mt-6 text-ink-soft">
                MBBS · MD (Internal Medicine) · DM (Rheumatology)
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="t-lead mt-6">
                Over 12 years in rheumatology — chronic conditions, chronic
                pain, non-surgical. Reconnect was born from her belief that
                strength training, done right, is the most powerful medicine
                for joint and bone health. Works alongside your existing
                medical care, never instead of it.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <MagneticButton href="/about" variant="sage">
                  Read full story
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
