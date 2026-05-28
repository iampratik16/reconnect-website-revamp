import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import Reveal from "@/components/primitives/Reveal";
import { differentiators, pullQuotes } from "@/lib/content/differentiators";

export default function Differentiator() {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <SectionHeader
              number="01"
              eyebrow="Why Reconnect"
              title={
                <>
                  Not random workouts.{" "}
                  <em className="italic-serif text-clay">A program designed for your body.</em>
                </>
              }
              lead="Generic fitness apps take your height and weight and hand you a template. We start with a medical assessment and design a program around your exact condition."
            />
          </div>
          <Reveal delay={0.2} className="md:col-span-5">
            <figure className="bg-bone-deep border border-line rounded-[24px] p-8 md:p-10 h-full">
              <svg
                aria-hidden
                className="text-clay mb-4"
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="currentColor"
              >
                <path d="M0 22V13.4c0-3.7.5-6.7 1.5-9C2.5 2 4.6.9 7.8.9V5c-2.2.4-3.4 1.8-3.6 4.1H8V22H0zm16 0V13.4c0-3.7.5-6.7 1.5-9 1-2.4 3.1-3.5 6.3-3.5V5c-2.2.4-3.4 1.8-3.6 4.1H24V22h-8z" />
              </svg>
              <blockquote className="t-h3 text-ink">{pullQuotes.youtube}</blockquote>
              <figcaption className="t-caption mt-6 text-ink-soft">
                — Dr. Shruthi Desai, founder
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 md:mt-24">
          {differentiators.map((d, i) => (
            <StaggerItem key={d.title}>
              <article className="card p-7 h-full flex flex-col gap-4">
                <span className="section-num text-sm">0{i + 1}</span>
                <h3 className="t-h3 text-ink">{d.title}</h3>
                <p className="t-body">{d.copy}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
