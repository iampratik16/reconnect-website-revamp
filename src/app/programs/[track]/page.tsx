import { notFound } from "next/navigation";
import ProgramDetail from "@/components/programs/ProgramDetail";
import { getProgram, programs } from "@/lib/content/programs";

type Params = { track: string };

export function generateStaticParams() {
  return programs.map((p) => ({ track: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { track } = await params;
  const program = getProgram(track as never);
  if (!program) return { title: "Programs" };
  return {
    title: `${program.name} Program`,
    description: program.oneLiner,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { track } = await params;
  const program = getProgram(track as never);
  if (!program) notFound();
  return <ProgramDetail program={program} />;
}
