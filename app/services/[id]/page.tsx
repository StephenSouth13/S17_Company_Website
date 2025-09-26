import { ServiceDetail } from "@/components/services/services-detail" // Changed from project-detail
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  return {
    title: `Các dịch vụ S17`,
    description: "Detailed information about our investment project",
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="min-h-screen bg-dark-primary">
      <ServiceDetail serviceId={params.id} /> {/* Also changed the component name and prop */}
    </main>
  )
}