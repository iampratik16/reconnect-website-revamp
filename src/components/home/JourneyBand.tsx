import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import TimelineRail from "@/components/ui/timeline-rail";
import { journey } from "@/lib/content/journey";

export default function JourneyBand() {
  // Map content/journey to the timeline items.
  // First 3 are core (active = always); psychology is "if needed" (inactive).
  const timelineItems = journey.map((j, i) => ({
    label: j.title,
    caption: j.optional ? `Step ${j.num} · if needed` : `Step ${j.num}`,
    active: !j.optional,
    href: i === 0 ? "/medical" : i === 1 ? "/exercise" : i === 2 ? "/nutrition" : "/psychology",
  }));

  return (
    <Section tone="bone-deep" density="lg">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Journey"
          title={
            <>
              One connected journey —{" "}
              <span className="italic-serif text-navy">not four separate services.</span>
            </>
          }
          lead="Assessment always comes first. Exercise, nutrition and psychology are tuned to your condition, age and life. The four pieces aren't options — they're how the program works."
        />

        {/* Timeline rail */}
        <Reveal delay={0.1}>
          <div className="mt-20 md:mt-24 px-4 md:px-8 pb-16">
            <TimelineRail
              items={timelineItems}
              size="lg"
              labelAngle={42}
              lineThickness={4}
              emphasizeActiveTrail
              className="max-w-[1080px] mx-auto"
            />
          </div>
        </Reveal>

        {/* Step descriptions below the rail */}
        <Reveal delay={0.2}>
          <ol className="mt-16 md:mt-20 grid md:grid-cols-4 gap-8 md:gap-10">
            {journey.map((s) => (
              <li key={s.num} className="hairline-t pt-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="section-num text-sm">{s.num}</span>
                  {s.optional && (
                    <span className="t-eyebrow text-ink-soft">If needed</span>
                  )}
                </div>
                <h3 className="t-h3 text-ink">{s.title}</h3>
                <p className="t-body mt-3">{s.blurb}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12">
          <MagneticButton href="/how-it-works" variant="paper">
            See how it works
          </MagneticButton>
        </div>
      </div>
    </Section>
  );
}
