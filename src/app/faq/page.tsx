"use client";

import { useState } from "react";
import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";
import Eyebrow from "@/components/primitives/Eyebrow";
import SplitReveal from "@/components/primitives/SplitReveal";
import Accordion from "@/components/primitives/Accordion";
import CTASection from "@/components/primitives/CTASection";
import { LineArtHand } from "@/components/primitives/LineArt";
import { faqs, type FaqGroup } from "@/lib/content/faqs";

const groups: FaqGroup[] = [
  "About the program",
  "Medical & safety",
  "Logistics & pricing",
];

export default function Page() {
  const [active, setActive] = useState<FaqGroup>("About the program");
  const items = faqs.filter((f) => f.group === active).map((f) => ({ q: f.q, a: f.a }));

  return (
    <>
      <section className="relative bg-bone overflow-hidden">
        <LineArtHand
          aria-hidden
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[460px] text-sage opacity-[0.06]"
        />
        <div className="paper-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />
        <div className="container-x relative z-10 pt-28 md:pt-40 pb-16">
          <Reveal>
            <Eyebrow number="00">FAQ</Eyebrow>
          </Reveal>
          <h1 className="t-h1 mt-8 max-w-[20ch] text-ink">
            <span className="block">
              <SplitReveal delay={0.1}>Common questions —</SplitReveal>
            </span>
            <span className="block">
              <em className="italic-serif text-clay">
                <SplitReveal delay={0.28}>answered honestly.</SplitReveal>
              </em>
            </span>
          </h1>
        </div>
      </section>

      <Section tone="bone" density="lg" className="border-t border-line">
        <div className="container-x grid md:grid-cols-12 gap-10">
          {/* Sticky group nav */}
          <nav
            aria-label="FAQ topics"
            className="md:col-span-4 md:sticky md:top-[120px] md:self-start"
          >
            <p className="t-eyebrow text-ink-soft mb-5">Topics</p>
            <ul className="flex md:flex-col flex-wrap gap-1">
              {groups.map((g) => {
                const isActive = g === active;
                return (
                  <li key={g}>
                    <button
                      onClick={() => setActive(g)}
                      className={
                        "block text-left w-full px-4 py-3 rounded-2xl transition-colors " +
                        (isActive
                          ? "bg-sage-tint text-sage-deep"
                          : "text-ink-soft hover:text-ink hover:bg-bone-deep")
                      }
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="t-eyebrow block">
                        0{groups.indexOf(g) + 1}
                      </span>
                      <span className="text-[1.0625rem] mt-1 block">{g}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Accordion */}
          <div className="md:col-span-8">
            <Reveal key={active}>
              <Accordion items={items} />
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Still wondering?"
        headline={
          <>
            Take the 2-minute{" "}
            <em className="italic-serif text-clay">assessment.</em>
          </>
        }
        sub="Or reach out — we'll answer anything else over chat or a quick call."
        tone="bone-deep"
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
