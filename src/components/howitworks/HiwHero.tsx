"use client";

import Reveal from "@/components/primitives/Reveal";
import Eyebrow from "@/components/primitives/Eyebrow";
import SplitReveal from "@/components/primitives/SplitReveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import { LineArtSkeleton } from "@/components/primitives/LineArt";

export default function HiwHero() {
  return (
    <section className="relative bg-bone overflow-hidden">
      <LineArtSkeleton
        aria-hidden
        className="absolute -right-32 top-12 w-[620px] text-sage opacity-[0.06]"
      />
      <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />

      <div className="container-x relative z-10 pt-28 md:pt-40 pb-20 md:pb-28">
        <Reveal>
          <Eyebrow number="00">How Reconnect works</Eyebrow>
        </Reveal>
        <h1 className="t-h1 mt-8 max-w-[18ch] text-ink">
          <span className="block">
            <SplitReveal delay={0.1}>A doctor-led,</SplitReveal>
          </span>
          <span className="block">
            <SplitReveal delay={0.22}>personalised process —</SplitReveal>
          </span>
          <span className="block">
            <SplitReveal delay={0.36}>assessment</SplitReveal>{" "}
            <em className="italic-serif text-clay">
              <SplitReveal delay={0.55}>first.</SplitReveal>
            </em>
          </span>
        </h1>
        <Reveal delay={0.8}>
          <p className="t-lead mt-8 max-w-[640px]">
            Four steps that aren't four separate services. They're one
            connected method — each one shaped by what your medical assessment
            uncovered.
          </p>
        </Reveal>
        <Reveal delay={0.95}>
          <div className="mt-10">
            <MagneticButton href="/assessment" variant="ink">
              Take Free Assessment
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
