import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Reveal from "@/components/primitives/Reveal";

const rows = [
  {
    them: "Inputs: height, weight, food preferences",
    us: "Inputs: medical history, imaging, condition severity, age, mobility",
  },
  {
    them: "Output: one generic workout template",
    us: "Output: a program split by body region, starting where your problem is",
  },
  {
    them: "Pain is a stop signal — work around it on your own",
    us: "Pain is calmed first by the medical team; only then do we build strength",
  },
  {
    them: "Motivation: streaks, points, badges",
    us: "Motivation: a 12-week roadmap with phases that mean something",
  },
  {
    them: "Coordination with your doctor: none",
    us: "Designed by a rheumatologist; works alongside your medication",
  },
];

export default function ReconnectVs() {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          number="02"
          eyebrow="Reconnect vs generic apps"
          title="Two fundamentally different starting points."
          lead="HealthifyMe, Fitternity and the like start from a template. We start from a diagnosis."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <Reveal>
            <article className="card p-8 h-full bg-bone-deep">
              <p className="t-eyebrow text-ink-soft">Generic apps</p>
              <ul className="mt-6 flex flex-col gap-5">
                {rows.map((r) => (
                  <li key={r.them} className="hairline-t pt-5 t-body text-ink-soft">
                    {r.them}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="card p-8 h-full bg-sage-deep text-bone border-sage-deep">
              <p className="t-eyebrow text-clay-soft">Reconnect</p>
              <ul className="mt-6 flex flex-col gap-5">
                {rows.map((r) => (
                  <li
                    key={r.us}
                    className="border-t border-bone/15 pt-5 text-[0.9375rem] text-bone/85"
                  >
                    {r.us}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
