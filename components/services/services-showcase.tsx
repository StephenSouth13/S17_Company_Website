import dynamic from 'next/dynamic'

const ServiceShowcaseClient = dynamic(() => import('./services-showcase.client'), { ssr: false })

export function ServiceShowcase() {
  return <ServiceShowcaseClient />
}
