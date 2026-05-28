import Link from "next/link";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/primitives/SectionHeader";
import Stagger, { StaggerItem } from "@/components/primitives/Stagger";
import { plans } from "@/lib/content/pricing";

export default function PricingTeaser() {
  return (
    <Section tone="bone" density="lg">
      <div className="container-x">
        <SectionHeader
          number="07"
          eyebrow="Pricing"
          title="Health packages."
          lead="Three 6-month packages. All include a medical assessment, a personalised exercise plan, and progress tracking."
        />

        <Stagger className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <StaggerItem key={p.slug}>
              <Link
                href="/pricing"
                className={
                  "group relative card flex flex-col h-full p-7 md:p-8 transition-colors duration-500 " +
                  (p.popular
                    ? "bg-navy-deep text-bone border-navy-deep"
                    : "hover:bg-navy-deep hover:text-bone hover:border-navy-deep")
                }
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 t-eyebrow bg-clay text-bone px-3 py-1.5 rounded-full">
                    Most popular
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3
                    className={
                      "t-h3 " +
                      (p.popular
                        ? "text-bone"
                        : "text-ink group-hover:text-bone")
                    }
                  >
                    {p.name}
                  </h3>
                  <span
                    className={
                      "section-num text-xs " +
                      (p.popular ? "" : "group-hover:text-clay-soft")
                    }
                  >
                    0{i + 1}
                  </span>
                </div>
                <p
                  className={
                    "t-body mt-2 " +
                    (p.popular ? "text-bone/70" : "group-hover:text-bone/70")
                  }
                >
                  {p.blurb}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={
                      "t-number text-[2.5rem] leading-none " +
                      (p.popular
                        ? "text-bone"
                        : "text-ink group-hover:text-bone")
                    }
                  >
                    ₹{p.price.toLocaleString("en-IN")}
                  </span>
                  <span
                    className={
                      "text-sm " +
                      (p.popular
                        ? "text-bone/60"
                        : "text-ink-soft group-hover:text-bone/60")
                    }
                  >
                    {p.period}
                  </span>
                </div>
                <ul className="mt-7 flex flex-col gap-3">
                  {p.features.slice(0, 5).map((f) => (
                    <li
                      key={f.label}
                      className={
                        "flex items-start gap-3 text-sm transition-colors " +
                        (!f.included
                          ? "opacity-40 line-through " +
                            (p.popular ? "text-bone" : "text-ink-soft group-hover:text-bone")
                          : p.popular
                            ? "text-bone/85"
                            : "text-ink-soft group-hover:text-bone/85")
                      }
                    >
                      <span
                        aria-hidden
                        className={
                          "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors " +
                          (p.popular
                            ? "bg-clay-soft"
                            : "bg-clay group-hover:bg-clay-soft")
                        }
                      />
                      {f.label}
                    </li>
                  ))}
                </ul>
                <span
                  className={
                    "mt-8 t-eyebrow inline-flex items-center gap-1.5 " +
                    (p.popular
                      ? "text-clay-soft"
                      : "text-clay group-hover:text-clay-soft")
                  }
                >
                  View details →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
