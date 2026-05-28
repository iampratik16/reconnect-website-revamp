import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import GradientBorder from "@/components/primitives/GradientBorder";
import { science } from "@/lib/content/science";
import { LineArtKnee, LineArtSpine, LineArtHand, LineArtHip } from "@/components/primitives/LineArt";

const ICONS = {
  knee: LineArtKnee,
  skeleton: LineArtSpine,
  hand: LineArtHand,
  hip: LineArtHip,
};

const SPANS = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-3 md:row-span-1",
];

export default function Science() {
  return (
    <Section tone="bone-deep" density="lg">
      <div className="container-x">
        <SectionHeader
          number="02"
          eyebrow="The Science"
          title={
            <>
              Why strength training{" "}
              <span className="italic-serif text-navy">changes everything.</span>
            </>
          }
          lead="The science is unambiguous. Targeted resistance training is the most effective non-pharmacological intervention we have for joint and bone health — at any age."
        />

        <Reveal>
          <div className="mt-14 grid md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4">
            {science.map((s, i) => {
              const Icon = ICONS[s.icon];
              const useAnimated = i === 0;
              return (
                <GradientBorder
                  key={s.title}
                  animated={useAnimated}
                  className={SPANS[i]}
                  innerClassName="p-7 md:p-8 flex flex-col gap-4 justify-between h-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="section-num text-sm">0{i + 1}</span>
                      <h3 className="t-h3 mt-3 text-ink">{s.title}</h3>
                    </div>
                    <Icon
                      className="w-12 h-16 opacity-70 shrink-0 text-navy"
                      aria-hidden
                    />
                  </div>
                  <p className="t-body max-w-[40ch]">{s.copy}</p>
                </GradientBorder>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
