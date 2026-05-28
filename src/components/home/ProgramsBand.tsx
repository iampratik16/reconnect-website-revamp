import Link from "next/link";
import Image from "next/image";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import GradientBorder from "@/components/primitives/GradientBorder";
import Pill from "@/components/primitives/Pill";
import { programs } from "@/lib/content/programs";

export default function ProgramsBand() {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          number="04"
          eyebrow="Programs"
          title={
            <>
              Choose <span className="italic-serif text-navy">your path.</span>
            </>
          }
          lead="Three tracks for where you are today. Each is personalised after your medical assessment."
        />

        <Stagger className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
          {programs.map((p, i) => (
            <StaggerItem key={p.slug}>
              <GradientBorder
                href={`/programs/${p.slug}`}
                animated={i === 1}
                innerClassName="flex flex-col h-full overflow-hidden"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={p.hero}
                    alt={p.heroAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <span className="absolute top-5 left-5 t-eyebrow bg-paper/90 px-3 py-1.5 rounded-full text-ink">
                    0{i + 1} · {p.name}
                  </span>
                </div>
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <h3 className="t-h3 text-ink">{p.oneLiner}</h3>
                  <p className="t-body line-clamp-3">{p.forWhom}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.tags.slice(0, 3).map((tag) => (
                      <Pill key={tag} tone="ink">
                        {tag}
                      </Pill>
                    ))}
                  </div>
                </div>
              </GradientBorder>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
