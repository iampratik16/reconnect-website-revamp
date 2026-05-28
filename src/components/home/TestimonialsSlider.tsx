"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import { testimonials } from "@/lib/content/testimonials";

export default function TestimonialsSlider() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const t = testimonials[i];

  return (
    <Section tone="bone" density="lg" className="border-t border-line">
      <div className="container-x">
        <SectionHeader
          number="06"
          eyebrow="Results"
          title="Real people, real outcomes."
          lead="Members across early prevention, active management and post-surgical recovery. Names and outcomes shared with consent."
        />

        <div className="mt-14 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-line">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.slug}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={t.image}
                    alt={`${t.name} — ${t.condition}`}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.slug}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="t-eyebrow text-clay">
                  {t.metric}
                </p>
                <blockquote className="t-h2 mt-5 max-w-[24ch] text-ink">
                  <em className="italic-serif">“</em>
                  {t.quote}
                  <em className="italic-serif">”</em>
                </blockquote>
                <figcaption className="t-body mt-7">
                  <span className="text-ink font-medium">
                    {t.name}, {t.age}
                  </span>{" "}
                  · <span className="text-ink-soft">{t.condition}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3" role="tablist" aria-label="Testimonials">
              {testimonials.map((tt, idx) => (
                <button
                  key={tt.slug}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Show ${tt.name}'s story`}
                  onClick={() => setI(idx)}
                  className={
                    "h-px transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
                    (i === idx ? "w-16 bg-clay" : "w-8 bg-line hover:bg-ink-soft")
                  }
                />
              ))}
              <span className="t-caption ml-auto">
                {i + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
