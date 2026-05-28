import Section from "@/components/primitives/Section";
import AnimatedCounter from "@/components/primitives/AnimatedCounter";
import Reveal from "@/components/primitives/Reveal";

const stats = [
  { value: 500, suffix: "+", label: "Members helped" },
  { value: 12, suffix: " wk", label: "Structured program" },
  { value: 4.9, decimals: 1, label: "Average rating" },
  { value: 3, label: "Specialist tracks" },
];

export default function StatStrip() {
  return (
    <Section tone="bone" density="sm" className="border-y border-line">
      <div className="container-x">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <li className="flex flex-col gap-3 py-2 md:py-4">
                <span className="t-number text-[2.5rem] md:text-[3rem] leading-none text-ink">
                  <AnimatedCounter
                    to={s.value}
                    suffix={s.suffix ?? ""}
                    decimals={s.decimals ?? 0}
                  />
                </span>
                <span className="t-eyebrow text-ink-soft">{s.label}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
