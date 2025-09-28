import dynamic from 'next/dynamic'

const AboutClient = dynamic(() => import('@/components/about/about-client'), { ssr: false })

export default function AboutPage() {
  return <AboutClient />
}
