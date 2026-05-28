import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import GradientBorder from "@/components/primitives/GradientBorder";
import Icon from "@/components/primitives/Icon";
import { science } from "@/lib/content/science";

const ICON_NAME: Record<string, string> = {
  knee: "healing",
  skeleton: "skeleton",
  hand: "fitness_center",
  hip: "shield_person",
};

const SPANS = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-3 lg:row-span-1 sm:col-span-2",
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
          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4">
            {science.map((s, i) => {
              const iconName = ICON_NAME[s.icon] ?? "favorite";
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
                    <span className="grid place-items-center w-12 h-12 rounded-2xl bg-navy-tint text-navy shrink-0">
                      <Icon name={iconName} size={26} weight={500} />
                    </span>
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
