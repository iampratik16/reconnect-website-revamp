import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramsTracks from "@/components/programs/ProgramsTracks";
import ConditionsByGroup from "@/components/programs/ConditionsByGroup";
import ProgramsJourney from "@/components/programs/ProgramsJourney";
import ComparisonTable from "@/components/programs/ComparisonTable";
import CgmAddOn from "@/components/programs/CgmAddOn";
import CTASection from "@/components/primitives/CTASection";


export const metadata = {
  title: "Programs",
  description:
    "Three condition-focused tracks — Prevent, Manage, Recover. Doctor-led, personalised. One connected journey from assessment to exercise to nutrition.",
};

export default function Page() {
  return (
    <>
      <ProgramsHero />
      <ProgramsTracks />
      <ConditionsByGroup />
      <ProgramsJourney />
      <ComparisonTable />
      <CgmAddOn />
      <CTASection
        eyebrow="Ready to start"
        headline={
          <>
            Take the 2-minute{" "}
            <em className="italic-serif text-clay">free assessment.</em>
          </>
        }
        sub="It tells us your starting track and your starting point — then your program is built around it."
        tone="bone"
      />
    </>
  );
}
