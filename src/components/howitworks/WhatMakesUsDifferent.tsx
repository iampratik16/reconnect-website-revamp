import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import { differentiators } from "@/lib/content/differentiators";

export default function WhatMakesUsDifferent() {
  return (
    <Section tone="bone-deep" density="lg">
      <div className="container-x">
        <SectionHeader
          number="03"
          eyebrow="What makes us different"
          title="Four things to keep in mind — even before you sign up."
        />
        <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentiators.map((d, i) => (
            <StaggerItem key={d.title}>
              <article className="card p-7 h-full">
                <p className="section-num text-xs">0{i + 1}</p>
                <h3 className="t-h3 mt-3 text-ink">{d.title}</h3>
                <p className="t-body mt-3">{d.copy}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
