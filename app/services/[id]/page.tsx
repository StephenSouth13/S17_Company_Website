"use client"

import ServiceDetailClient from "@/components/services/services-detail.client"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="min-h-screen bg-dark-primary">
      <ServiceDetailClient serviceId={params.id} />
    </main>
  )
}
