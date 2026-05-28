"use client";

import Reveal from "@/components/primitives/Reveal";
import Eyebrow from "@/components/primitives/Eyebrow";
import SplitReveal from "@/components/primitives/SplitReveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import { LineArtHip } from "@/components/primitives/LineArt";

export default function ProgramsHero() {
  return (
    <section className="relative bg-bone overflow-hidden">
      <LineArtHip
        aria-hidden
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] text-sage opacity-[0.07]"
      />
      <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />

      <div className="container-x relative z-10 pt-28 md:pt-40 pb-20 md:pb-28">
        <Reveal>
          <Eyebrow number="00">Programs</Eyebrow>
        </Reveal>
        <h1 className="t-h1 mt-8 max-w-[22ch] text-ink">
          <span className="block">
            <SplitReveal delay={0.1}>One method.</SplitReveal>
          </span>
          <span className="block">
            <SplitReveal delay={0.25}>Three starting points.</SplitReveal>
          </span>
        </h1>
        <Reveal delay={0.55}>
          <p className="t-lead mt-8 max-w-[640px]">
            Every member gets a medical assessment first. Then a personalised
            program — built around your exact condition. Every track runs the
            same connected journey: Assessment → Exercise → Nutrition →
            Psychology, tuned to your severity and life.
          </p>
        </Reveal>
        <Reveal delay={0.7}>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton href="/assessment" variant="ink">
              Take Free Assessment
            </MagneticButton>
            <MagneticButton href="/how-it-works" variant="sage">
              See the method
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
