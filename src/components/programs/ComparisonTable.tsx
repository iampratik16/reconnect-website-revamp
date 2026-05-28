import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";

const rows = [
  {
    label: "Who it's for",
    prevent: "Early signs, family history, 40+ joint protection",
    manage: "Active arthritis, joint pain, back/neck pain, disc bulge",
    recover: "Post-surgery, severe OA, long deconditioning",
  },
  {
    label: "Intensity",
    prevent: "Moderate — preventive load",
    manage: "Adaptive — adjusts to pain & flare-ups",
    recover: "Most conservative — close oversight",
  },
  {
    label: "Typical pain (0–10)",
    prevent: "0–3",
    manage: "3–7",
    recover: "5–8 (or post-surgical)",
  },
  {
    label: "Goal",
    prevent: "Build strength & density before problems start",
    manage: "Reduce flare-ups, build resilience",
    recover: "Rebuild safely, restore independence",
  },
  {
    label: "Doctor coordination",
    prevent: "Light — annual review",
    manage: "Steady — alongside your medication",
    recover: "Tight — in step with surgeon/specialist",
  },
];

export default function ComparisonTable() {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          number="04"
          eyebrow="Self-select"
          title="Not sure which track? Use this."
          lead="A rough map — the medical assessment will confirm and personalise it."
        />

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="text-left t-eyebrow text-ink-soft border-b border-line">
                <th className="py-4 pr-6 font-medium w-[28%]">Dimension</th>
                <th className="py-4 px-4 font-medium">Prevent</th>
                <th className="py-4 px-4 font-medium">Manage</th>
                <th className="py-4 pl-4 font-medium">Recover</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-line align-top">
                  <th className="py-5 pr-6 font-medium text-ink text-left text-[0.9375rem]">
                    {r.label}
                  </th>
                  <td className="py-5 px-4 text-[0.9375rem] text-ink-soft">{r.prevent}</td>
                  <td className="py-5 px-4 text-[0.9375rem] text-ink-soft">{r.manage}</td>
                  <td className="py-5 pl-4 text-[0.9375rem] text-ink-soft">{r.recover}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
