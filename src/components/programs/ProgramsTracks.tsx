import Link from "next/link";
import Image from "next/image";
import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";
import Pill from "@/components/primitives/Pill";
import MagneticButton from "@/components/primitives/MagneticButton";
import { programs } from "@/lib/content/programs";

export default function ProgramsTracks() {
  return (
    <Section tone="bone" density="lg" className="border-t border-line">
      <div className="container-x">
        <div className="flex flex-col gap-24 md:gap-32">
          {programs.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.slug}
                className={
                  "grid md:grid-cols-12 gap-10 md:gap-16 items-center " +
                  (reverse ? "" : "")
                }
              >
                <Reveal
                  className={
                    "md:col-span-7 " + (reverse ? "md:order-2" : "md:order-1")
                  }
                >
                  <div className="relative aspect-[5/4] rounded-[20px] overflow-hidden border border-line group">
                    <Image
                      src={p.hero}
                      alt={p.heroAlt}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-clay/10 to-transparent mix-blend-multiply" />
                    <span className="absolute top-5 left-5 t-eyebrow bg-bone/90 text-ink px-3 py-1.5 rounded-full">
                      0{i + 1} · {p.name}
                    </span>
                  </div>
                </Reveal>

                <div
                  className={
                    "md:col-span-5 " + (reverse ? "md:order-1" : "md:order-2")
                  }
                >
                  <Reveal>
                    <span className="t-eyebrow text-clay">
                      Track 0{i + 1}
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className="t-h2 mt-4 text-ink">{p.name}</h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="t-lead mt-5">{p.oneLiner}</p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <p className="t-body mt-5 text-ink-soft">{p.forWhom}</p>
                  </Reveal>
                  <Reveal delay={0.25}>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Pill key={t} tone="sage">
                          {t}
                        </Pill>
                      ))}
                    </div>
                  </Reveal>
                  <Reveal delay={0.32}>
                    <div className="mt-8 flex gap-3 items-center">
                      <MagneticButton href={`/programs/${p.slug}`} variant="ink">
                        Explore {p.name}
                      </MagneticButton>
                      <Link
                        href="/assessment"
                        className="t-eyebrow text-sage hover:text-clay transition-colors"
                      >
                        Or start with assessment →
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
