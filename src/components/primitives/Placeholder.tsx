import Section from "./Section";
import SectionHeader from "./SectionHeader";
import MagneticButton from "./MagneticButton";

export default function Placeholder({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          lead={body}
          align="left"
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton href="/assessment" variant="ink">
            Take Free Assessment
          </MagneticButton>
          <MagneticButton href="/" variant="sage">
            Back to home
          </MagneticButton>
        </div>
      </div>
    </Section>
  );
}
