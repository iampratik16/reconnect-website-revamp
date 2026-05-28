import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";
import { pullQuotes } from "@/lib/content/differentiators";

export default function Youtube() {
  return (
    <Section tone="bone-deep" density="lg">
      <div className="container-x">
        <Reveal>
          <p className="t-eyebrow text-clay">Why not just YouTube?</p>
        </Reveal>
        <Reveal delay={0.05}>
          <blockquote className="t-h1 mt-6 max-w-[22ch] text-ink">
            <em className="italic-serif">“</em>
            {pullQuotes.youtube}
            <em className="italic-serif">”</em>
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="t-caption mt-6 text-ink-soft">
            — Dr. Shruthi Desai, founder
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
