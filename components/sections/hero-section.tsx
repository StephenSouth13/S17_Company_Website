"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Shield, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t, language } = useLanguage()

  const slides = [
    {
      title: language === "vi" ? "Nền tảng thương mại điện tử hàng đầu" : "Leading E-commerce Platform",
      subtitle:
        language === "vi"
          ? "Khám phá những sản phẩm chất lượng cao và cơ hội đầu tư sinh lời cùng S17 Trading"
          : "Discover premium products and profitable investment opportunities with S17 Trading",
      image: "/modern-tech-office-blue.png",
    },
    {
      title: language === "vi" ? "Đầu tư thông minh, sinh lời bền vững" : "Smart Investment, Sustainable Profits",
      subtitle:
        language === "vi"
          ? "Tham gia các Dịch Vụ đầu tư được chọn lọc kỹ càng với tỷ suất sinh lời hấp dẫn"
          : "Join carefully selected investment services with attractive returns",
      image: "/financial-charts-and-graphs-on-dark-background.jpg",
    },
    {
      title: language === "vi" ? "Đối tác tin cậy cho tương lai" : "Trusted Partner for the Future",
      subtitle:
        language === "vi"
          ? "Xây dựng danh mục đầu tư đa dạng với sự hỗ trợ từ đội ngũ chuyên gia giàu kinh nghiệm"
          : "Build a diversified investment portfolio with support from experienced experts",
      image: "/business-handshake-with-city-skyline.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
          >
            <Award className="w-4 h-4 mr-2" />
            {language === "vi"
              ? "Nền tảng được tin cậy bởi hơn 10,000+ khách hàng"
              : "Trusted platform by 10,000+ customers"}
          </Badge>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">{slides[currentSlide].title}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">
                {language === "vi" ? "Khách hàng tin tưởng" : "Trusted customers"}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">25%</div>
              <div className="text-sm text-muted-foreground">
                {language === "vi" ? "Tỷ suất sinh lời trung bình" : "Average return rate"}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">
                {language === "vi" ? "Năm kinh nghiệm" : "Years of experience"}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold animate-glow">
              {t.home.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-primary/20 hover:bg-primary/10 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              {language === "vi" ? "Xem video giới thiệu" : "Watch intro video"}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 opacity-70">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              {language === "vi" ? "Bảo mật tuyệt đối" : "Absolute security"}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-accent" />
              {language === "vi" ? "Tăng trưởng ổn định" : "Stable growth"}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              {language === "vi" ? "Được chứng nhận" : "Certified"}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
