import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import MagneticButton from "@/components/primitives/MagneticButton";
import Icon from "@/components/primitives/Icon";
import TimelineRail from "@/components/ui/timeline-rail";
import { journey } from "@/lib/content/journey";

const STEP_ICONS = ["stethoscope", "fitness_center", "nutrition", "psychology"];

export default function JourneyBand() {
  const timelineItems = journey.map((j, i) => ({
    label: j.title,
    caption: j.optional ? `Step ${j.num} · if needed` : `Step ${j.num}`,
    active: !j.optional,
    href:
      i === 0
        ? "/medical"
        : i === 1
          ? "/exercise"
          : i === 2
            ? "/nutrition"
            : "/psychology",
  }));

  return (
    <Section tone="bone-deep" density="lg">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Journey"
          title={
            <>
              One connected journey —{" "}
              <span className="italic-serif text-navy">
                not four separate services.
              </span>
            </>
          }
          lead="Assessment always comes first. Exercise, nutrition and psychology are tuned to your condition, age and life. The four pieces aren't options — they're how the program works."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 md:mt-44 px-2 md:px-12 pb-12 md:pb-36">
            <TimelineRail
              items={timelineItems}
              size="lg"
              labelAngle={38}
              lineThickness={5}
              scrollProgress
              scrollOffsetStart="start 75%"
              scrollOffsetEnd="end 55%"
              className="max-w-[1200px] mx-auto"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ol className="mt-12 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {journey.map((s, i) => (
              <li key={s.num} className="hairline-t pt-6">
                <span className="grid place-items-center w-11 h-11 rounded-2xl bg-paper text-navy border border-line mb-4">
                  <Icon name={STEP_ICONS[i]} size={22} weight={500} />
                </span>
                <div className="flex items-baseline gap-3 mb-2">
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
