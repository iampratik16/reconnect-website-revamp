import Link from "next/link";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import ScrollMarquee from "@/components/primitives/ScrollMarquee";
import { conditions } from "@/lib/content/conditions";
import {
  LineArtKnee,
  LineArtSpine,
  LineArtHand,
  LineArtHip,
  LineArtSkeleton,
} from "@/components/primitives/LineArt";

const GROUP_ICON = {
  joints: LineArtKnee,
  spine: LineArtSpine,
  bone: LineArtSkeleton,
  rehab: LineArtHip,
} as const;

function ConditionCard({
  name,
  blurb,
  track,
  group,
}: (typeof conditions)[number]) {
  const Icon = GROUP_ICON[group] ?? LineArtHand;
  return (
    <Link
      href={`/programs/${track}`}
      className="gradient-border-static block shrink-0 w-[280px] md:w-[320px]"
    >
      <div className="gradient-border-inner p-6 flex flex-col gap-4 h-full">
        <Icon className="w-10 h-12 text-navy" aria-hidden />
        <div>
          <h3 className="t-h3 text-ink">{name}</h3>
          <p className="t-caption mt-2 text-ink-soft">{blurb}</p>
        </div>
        <span className="mt-auto t-eyebrow text-navy">
          {track === "prevent"
            ? "Prevent"
            : track === "manage"
              ? "Manage"
              : "Recover"}{" "}
          →
        </span>
      </div>
    </Link>
  );
}

export default function ConditionsMarquee() {
  const row1 = conditions.slice(0, Math.ceil(conditions.length / 2));
  const row2 = conditions.slice(Math.ceil(conditions.length / 2));
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          number="03"
          eyebrow="Conditions"
          title={
            <>
              Built for the conditions you{" "}
              <em className="italic-serif text-navy">actually</em> live with.
            </>
          }
          lead="Each card links to the most relevant program track. Hover to pause."
        />
      </div>

      <div className="mt-12 flex flex-col gap-7">
        <ScrollMarquee duration={48}>
          {row1.map((c) => (
            <ConditionCard key={c.name} {...c} />
          ))}
        </ScrollMarquee>
        <ScrollMarquee duration={52} reverse>
          {row2.map((c) => (
            <ConditionCard key={c.name} {...c} />
          ))}
        </ScrollMarquee>
      </div>
    </Section>
  );
}
