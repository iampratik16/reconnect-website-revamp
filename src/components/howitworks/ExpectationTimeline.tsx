import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";

const rows = [
  {
    when: "Week 1",
    expect:
      "Assessment, baseline measurements, posture and mobility work. Most members say they feel calmer about their body by the end of the week.",
  },
  {
    when: "Weeks 4–6",
    expect:
      "Stabilisers wake up. Pain often starts settling. Movements get more deliberate. The plan adapts as we learn how your body responds.",
  },
  {
    when: "Month 2",
    expect:
      "Muscles activate. Standing work, light dumbbells, real resistance — but only because your body asked for it.",
  },
  {
    when: "Month 3+",
    expect:
      "Strength becomes a habit, not a project. Flare-ups (if you had them) become rare and shorter. Movement is the medicine.",
  },
];

export default function ExpectationTimeline() {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          number="04"
          eyebrow="What to expect — measured"
          title="A realistic timeline. Not a sales chart."
          lead="No cure claims. No before-and-after gimmicks. Just what we typically see, with cautious language."
        />

        <ol className="mt-14 grid md:grid-cols-2 gap-10">
          {rows.map((r, i) => (
            <Reveal key={r.when} delay={i * 0.05}>
              <li className="hairline-t pt-6">
                <p className="section-num text-sm">0{i + 1}</p>
                <p className="t-eyebrow mt-3 text-clay">{r.when}</p>
                <p className="t-body mt-3 text-ink max-w-[40ch]">{r.expect}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
