import { ProjectsShowcase } from "@/components/projects/projects-showcase"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investment Projects | S17 Trading",
  description: "Explore our portfolio of successful investment projects and partnerships",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-dark-primary">
      <ProjectsShowcase />
    </main>
  )
}
