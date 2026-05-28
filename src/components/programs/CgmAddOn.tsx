import Link from "next/link";
import Section from "@/components/primitives/Section";
import Reveal from "@/components/primitives/Reveal";

export default function CgmAddOn() {
  return (
    <Section tone="bone-deep" density="sm">
      <div className="container-x">
        <Reveal>
          <div className="border border-line bg-calcium rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <span className="t-eyebrow text-sage">Add-on track</span>
              <h3 className="t-h3 mt-3 text-ink max-w-[40ch]">
                Borderline sugar? CGM is a secondary — but powerful — package.
              </h3>
              <p className="t-body mt-3 max-w-[60ch]">
                15-day continuous glucose monitoring + remote interpretation +
                nutrition & exercise adjustment. Separate from bones & joints,
                but built on the same medical foundation.
              </p>
            </div>
            <Link
              href="/cgm"
              className="t-eyebrow text-clay shrink-0 hover:opacity-80 transition-opacity"
            >
              ₹15,000 / 6 months →
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
