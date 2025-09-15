import { ProjectDetail } from "@/components/projects/project-detail"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  return {
    title: `Project Details | S17 Trading`,
    description: "Detailed information about our investment project",
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="min-h-screen bg-dark-primary">
      <ProjectDetail projectId={params.id} />
    </main>
  )
}
