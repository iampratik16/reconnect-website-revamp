import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import JourneyStepper from "@/components/primitives/JourneyStepper";
import { journey } from "@/lib/content/journey";

export default function ProgramsJourney() {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          number="03"
          eyebrow="How every program is built"
          title="The same connected journey — tuned to your track."
          lead="Whichever track fits you, the four pieces stay the same. What changes is the intensity, the medical coordination, and what we focus on first."
        />
        <div className="mt-14">
          <JourneyStepper steps={journey} variant="row" />
        </div>
      </div>
    </Section>
  );
}
