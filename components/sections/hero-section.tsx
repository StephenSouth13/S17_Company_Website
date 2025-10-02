"use client"

// Đã loại bỏ các import không cần thiết do không còn content
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Award } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  // Đã loại bỏ useLanguage và t
  // const { t, language } = useLanguage()

  // SỬA: Chỉ giữ lại đường dẫn ảnh
  const heroContent = {
    image: "/hero/hero.png", 
  }

  return (
    // SỬA: Đảm bảo section chiếm toàn bộ chiều cao màn hình, nhưng giới hạn trên mobile (dưới md) chỉ còn 65vh
    <section className="relative h-[30vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image (Static) */}
      <div className="absolute inset-0 z-0">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroContent.image}')`,
            }}
          />
      </div>
      
    </section>
  )
}
