import type { Metadata } from 'next';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { OurServices } from "@/components/sections/services";
import { PartnersSection } from "@/components/sections/partners-section";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import { Providers } from './providers';

// Thêm metadata riêng cho trang này
export const metadata: Metadata = {
  title: "S17 - Trang chủ | Trung tâm Phát triển Kinh tế",
  description: "Trang chủ chính thức của S17 Trading. Khám phá các sản phẩm cao cấp và cơ hội đầu tư hấp dẫn để phát triển kinh tế bền vững.",
  keywords: ["trang chủ S17", "S17 Trading", "đầu tư", "phát triển kinh tế", "sản phẩm cao cấp"],
};

export default function HomePage() {
  return (
    <Providers>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturedProducts />
          <OurServices />
          <PartnersSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}