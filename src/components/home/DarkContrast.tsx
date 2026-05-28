import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import { LineArtSkeleton } from "@/components/primitives/LineArt";

const points = [
  {
    title: "Doctor-led, not influencer-led",
    copy: "Programs designed by a rheumatologist, not copied from a fitness app.",
  },
  {
    title: "Personalised to your diagnosis",
    copy: "Your body, your condition, your age — not a template.",
  },
  {
    title: "Pain-first",
    copy: "We work around the pain, respect it, reduce it — then build strength.",
  },
  {
    title: "Structured 12-week roadmap",
    copy: "The direction and motivation YouTube can't give you.",
  },
];

export default function DarkContrast() {
  return (
    <Section tone="sage-deep" density="lg" className="relative">
      <LineArtSkeleton
        aria-hidden
        className="absolute -left-32 -bottom-32 w-[680px] text-bone opacity-[0.06]"
      />
      <span aria-hidden className="watermark-num absolute -right-4 -top-10 text-bone/[0.04]">
        05
      </span>

      <div className="container-x relative">
        <div className="max-w-[760px]">
          <SectionHeader
            tone="dark"
            eyebrow="The Difference"
            title={
              <>
                This isn't a fitness app.{" "}
                <em className="italic-serif text-clay-soft">
                  It's medicine that moves you.
                </em>
              </>
            }
            lead="Built by a doctor, not an algorithm. Every plan starts with diagnosis — not demographics."
          />
        </div>

        <Stagger className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {points.map((p, i) => (
            <StaggerItem key={p.title}>
              <article className="flex gap-6">
                <span className="section-num text-clay-soft text-sm shrink-0 mt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="t-h3 text-bone">{p.title}</h3>
                  <p className="t-body text-bone/70 mt-3">{p.copy}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
