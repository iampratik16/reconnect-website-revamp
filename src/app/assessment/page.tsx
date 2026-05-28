import AssessmentFunnel from "@/components/assessment/AssessmentFunnel";

export const metadata = {
  title: "Free Assessment",
  description:
    "A 2-minute medical assessment — your primary concern, severity, activity, age, nutrition preference, and contact. We'll recommend a starting track.",
};

export default function Page() {
  return <AssessmentFunnel />;
}
