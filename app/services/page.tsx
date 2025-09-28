"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ServiceShowcaseClient from "@/components/services/services-showcase.client"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-dark-primary">
      <Header />
      <main>
        <ServiceShowcaseClient />
      </main>
      <Footer />
    </div>
  )
}
