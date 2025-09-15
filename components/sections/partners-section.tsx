"use client"

import { useEffect, useState } from "react"

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const partners = [
    { name: "Vietcombank", logo: "/vietcombank-logo.jpg" },
    { name: "FPT Corporation", logo: "/fpt-corporation-logo.jpg" },
    { name: "Vingroup", logo: "/vingroup-logo.jpg" },
    { name: "BIDV", logo: "/bidv-bank-logo.jpg" },
    { name: "Techcombank", logo: "/techcombank-logo.jpg" },
    { name: "VPBank", logo: "/vpbank-logo.jpg" },
    { name: "Sacombank", logo: "/sacombank-logo.jpg" },
    { name: "MB Bank", logo: "/mb-bank-logo.jpg" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 4))
    }, 3000)
    return () => clearInterval(timer)
  }, [partners.length])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Đối tác <span className="gradient-text">tin cậy</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi tự hào hợp tác cùng những tổ chức tài chính và doanh nghiệp hàng đầu Việt Nam
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-300 w-full h-20 group"
                      >
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="max-h-12 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
