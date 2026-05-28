import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import Reveal from "@/components/primitives/Reveal";
import GradientBorder from "@/components/primitives/GradientBorder";
import Icon from "@/components/primitives/Icon";
import { differentiators, pullQuotes } from "@/lib/content/differentiators";

const ICONS = ["stethoscope", "tune", "favorite", "route"];

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
                  <em className="italic-serif text-navy">A program designed for your body.</em>
                </>
              }
              lead="Generic fitness apps take your height and weight and hand you a template. We start with a medical assessment and design a program around your exact condition."
            />
          </div>
          <Reveal delay={0.2} className="md:col-span-5">
            <figure className="bg-bone-deep border border-line rounded-[24px] p-8 md:p-10 h-full">
              <Icon name="format_quote" size={32} className="text-navy mb-3" weight={600} />
              <blockquote className="t-h3 text-ink">{pullQuotes.youtube}</blockquote>
              <figcaption className="t-caption mt-6 text-ink-soft">
                — Dr. Shruthi Desai, founder
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 md:mt-24">
          {differentiators.map((d, i) => (
            <StaggerItem key={d.title}>
              <GradientBorder
                animated={i === 1}
                innerClassName="p-7 h-full flex flex-col gap-4"
              >
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-navy-tint text-navy">
                  <Icon name={ICONS[i] ?? "check_circle"} size={26} weight={500} />
                </span>
                <span className="section-num text-sm">0{i + 1}</span>
                <h3 className="t-h3 text-ink">{d.title}</h3>
                <p className="t-body">{d.copy}</p>
              </GradientBorder>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
