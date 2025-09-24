import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectsShowcase } from "@/components/projects/projects-showcase"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Investment Projects | S17 Trading",
  description: "Explore our portfolio of successful investment projects and partnerships",
}

export default function ProjectsPage() {
  return (
    // Thêm div bọc toàn bộ nội dung
    <div className="min-h-screen bg-dark-primary">
      {/* Thêm Header nếu cần, nhưng trong ví dụ của bạn thì không có */}
      <Header />
      <main>
        <ProjectsShowcase />
      </main>
      {/* Thêm component Footer ở cuối */}
      <Footer />
    </div>
  )
}