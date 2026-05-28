import Link from "next/link";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";
import { conditions, conditionGroups } from "@/lib/content/conditions";

export default function ConditionsByGroup() {
  return (
    <Section tone="bone-deep" density="lg">
      <div className="container-x">
        <SectionHeader
          number="02"
          eyebrow="Conditions"
          title="What we treat — across joints, spine, bone, and rehab."
          lead="Every condition links to the program track most appropriate for that case. Severity and starting point come from your medical assessment."
        />

        <div className="mt-14 grid md:grid-cols-4 gap-10">
          {Object.values(conditionGroups).map((g, gi) => {
            const items = conditions.filter((c) => c.group === g.group);
            return (
              <Reveal key={g.group} delay={gi * 0.08}>
                <div>
                  <p className="section-num text-xs">0{gi + 1}</p>
                  <h3 className="t-h3 mt-2 text-ink">{g.title}</h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {items.map((c) => (
                      <li key={c.name}>
                        <Link
                          href={`/programs/${c.track}`}
                          className="group block hairline-t pt-3"
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="text-[0.9375rem] text-ink group-hover:text-clay transition-colors">
                              {c.name}
                            </span>
                            <span className="t-caption text-ink-soft group-hover:text-clay transition-colors">
                              →
                            </span>
                          </span>
                          <span className="t-caption text-ink-soft mt-1 block">
                            {c.blurb}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
