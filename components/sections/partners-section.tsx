// components/sections/partners-section.tsx
"use client"

export function PartnersSection() {
  const partners = [
    { name: "VSM", logo: "/logo_partners/vsm.png" },
    { name: "MSC Center", logo: "/logo_partners/msc.png" },
    { name: "Smar", logo: "/logo_partners/smar.png" },
    { name: "smentor", logo: "/logo_partners/smentor.png" }, // Thêm .png vào đây
    { name: "Học Kỳ Doanh Nghiệp", logo: "/logo_partners/hkdn.png" },
    { name: "Action Media", logo: "/logo_partners/actionmedia.png" },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto section-container">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Đối tác <span className="gradient-text">tin cậy</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi tự hào hợp tác cùng những tổ chức tài chính và doanh nghiệp hàng đầu Việt Nam
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-xl border border-border bg-background/80 hover:bg-background/90 transition-colors duration-300 w-full h-28 md:h-32"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-20 max-w-full object-contain filter drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
