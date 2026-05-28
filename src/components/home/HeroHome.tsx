"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import SplitReveal from "@/components/primitives/SplitReveal";
import Reveal from "@/components/primitives/Reveal";
import MagneticButton from "@/components/primitives/MagneticButton";
export default function HeroHome() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, reduce ? 1 : 0.35]);

  const showVideo = !reduce && !isMobile;

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] bg-ink overflow-hidden"
    >
      {/* Hero media — looping muted video on desktop, poster on mobile/reduced-motion */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0" aria-hidden>
        {showVideo ? (
          <video
            ref={videoRef}
            src="/hero.mp4"
            poster="/woman-dumbbell.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src="/woman-dumbbell.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_30%]"
          />
        )}
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-ink/65 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-ink/45 to-transparent" />
      </motion.div>

      {/* Content — bottom-left like MyHealthPrac */}
      <div className="relative z-10 container-x flex flex-col justify-end min-h-[100svh] pt-28 pb-12 md:pb-20">
        <div className="max-w-[1200px]">
          {/* BIG headline — short declarative two-line phrase */}
          <h1
            className="font-[family-name:var(--font-display)] font-bold tracking-[-0.035em] text-paper max-w-[16ch]"
            style={{ fontSize: "clamp(2.25rem, 8.2vw, 7.5rem)", lineHeight: 0.98 }}
          >
            <span className="block">
              <SplitReveal delay={0.1}>Doctor-led.</SplitReveal>
            </span>
            <span className="block">
              <em className="italic-serif">
                <SplitReveal delay={0.32}>Rheumatology.</SplitReveal>
              </em>
            </span>
          </h1>

          {/* Smaller sub-headline (2 sizes down) */}
          <Reveal delay={0.7}>
            <p
              className="mt-5 sm:mt-7 md:mt-9 font-[family-name:var(--font-display)] font-medium tracking-[-0.02em] text-paper/90 max-w-[36ch]"
              style={{ fontSize: "clamp(1.0625rem, 2.4vw, 2.25rem)", lineHeight: 1.22 }}
            >
              Your bones and joints hold the answers — we design the doctor-led
              strength and nutrition program that gets you back to living.
            </p>
          </Reveal>

          <Reveal delay={0.95}>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-start">
              <MagneticButton href="/assessment" variant="paper">
                Take Free Assessment
              </MagneticButton>
              <MagneticButton href="/contact" variant="bone-outline">
                Book Consultation
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll affordance */}
      <Reveal delay={1.2}>
        <div className="hidden md:flex absolute bottom-6 left-0 right-0 z-10 container-x items-end justify-between text-[0.8125rem] text-paper/60">
          <span className="t-eyebrow">scroll ↓</span>
          <span className="font-[family-name:var(--font-display)] text-[0.875rem]">
            Reconnect — Bones · Joints · Strength
          </span>
        </div>
      </Reveal>
    </section>
  );
}
