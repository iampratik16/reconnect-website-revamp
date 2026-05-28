import HeroHome from "@/components/home/HeroHome";
import StatStrip from "@/components/home/StatStrip";
import Differentiator from "@/components/home/Differentiator";
import Science from "@/components/home/Science";
import ConditionsMarquee from "@/components/home/ConditionsMarquee";
import JourneyBand from "@/components/home/JourneyBand";
import ProgramsBand from "@/components/home/ProgramsBand";
import DarkContrast from "@/components/home/DarkContrast";
import MeetDoctor from "@/components/home/MeetDoctor";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CgmTeaser from "@/components/home/CgmTeaser";
import PricingTeaser from "@/components/home/PricingTeaser";
import CTASection from "@/components/primitives/CTASection";

export default function Home() {
  return (
    <>
      <HeroHome />
      <StatStrip />
      <Differentiator />
      <Science />
      <ConditionsMarquee />
      <JourneyBand />
      <ProgramsBand />
      <DarkContrast />
      <MeetDoctor />
      <TestimonialsSlider />
      <CgmTeaser />
      <PricingTeaser />
      <CTASection
        eyebrow="Final word"
        headline={
          <>
            Your joints deserve better than painkillers and{" "}
            <em className="italic-serif text-clay">rest.</em>
          </>
        }
        sub="Take a 2-minute assessment and find the right program for your body."
        tone="bone"
      />
    </>
  );
}
