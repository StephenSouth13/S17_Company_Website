import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServiceShowcase } from "@/components/services/services-showcase"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | S17 Trading",
  description: "Explore our portfolio of successful investment services and partnerships",
}

export default function servicesPage() {
  return (
    // Thêm div bọc toàn bộ nội dung
    <div className="min-h-screen bg-dark-primary">
      {/* Thêm Header nếu cần, nhưng trong ví dụ của bạn thì không có */}
      <Header />
      <main>
        <ServiceShowcase />
      </main>
      {/* Thêm component Footer ở cuối */}
      <Footer />
    </div>
  )
}