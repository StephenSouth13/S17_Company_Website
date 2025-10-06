"use client";
import dynamic from 'next/dynamic'

const ServiceDetailClient = dynamic(() => import('./services-detail.client'), { ssr: false })

export function ServiceDetail({ serviceId }: { serviceId: string }) {
  return <ServiceDetailClient serviceId={serviceId} />
}
