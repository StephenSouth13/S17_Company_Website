import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { InvestmentProjects } from "@/components/sections/investment-projects"
import { PartnersSection } from "@/components/sections/partners-section"
import { AboutSection } from "@/components/sections/about-section"
import { CTASection } from "@/components/sections/cta-section"
import { Providers } from './providers'

export default function HomePage() {
  return (
    <Providers>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
         
          <FeaturedProducts />
          <InvestmentProjects />
          <PartnersSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </Providers>
  )
}