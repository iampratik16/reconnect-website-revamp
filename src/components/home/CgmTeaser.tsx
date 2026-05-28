import Link from "next/link";
import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";

export default function CgmTeaser() {
  return (
    <Section tone="bone-deep" density="sm">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-line rounded-[20px] p-6 md:p-7 bg-calcium">
            <div className="flex items-start gap-5">
              <span aria-hidden className="t-eyebrow text-sage mt-1">
                Add-on
              </span>
              <div>
                <h3 className="t-h3 text-ink">
                  Managing borderline sugar? Ask about CGM.
                </h3>
                <p className="t-body mt-2 max-w-[60ch]">
                  Our Continuous Glucose Monitoring program logs your readings
                  for ~15 days and helps you adjust nutrition and exercise — a
                  separate, secondary track to bones &amp; joints.
                </p>
              </div>
            </div>
            <Link href="/cgm" className="t-eyebrow text-clay self-end md:self-auto shrink-0">
              ₹15,000 / 6 months →
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
