import HiwHero from "@/components/howitworks/HiwHero";
import StickyJourney from "@/components/howitworks/StickyJourney";
import Youtube from "@/components/howitworks/Youtube";
import ReconnectVs from "@/components/howitworks/ReconnectVs";
import WhatMakesUsDifferent from "@/components/howitworks/WhatMakesUsDifferent";
import ExpectationTimeline from "@/components/howitworks/ExpectationTimeline";
import CTASection from "@/components/primitives/CTASection";

export const metadata = {
  title: "How It Works",
  description:
    "A doctor-led, personalised process — medical assessment first, then a connected exercise, nutrition and psychology journey.",
};

export default function Page() {
  return (
    <>
      <HiwHero />
      <StickyJourney />
      <Youtube />
      <ReconnectVs />
      <WhatMakesUsDifferent />
      <ExpectationTimeline />
      <CTASection
        eyebrow="Start with assessment"
        headline={
          <>
            See where{" "}
            <em className="italic-serif text-clay">your body</em> is, today.
          </>
        }
        sub="The 2-minute assessment is how every Reconnect program starts."
        tone="bone-deep"
      />
    </>
  );
}
