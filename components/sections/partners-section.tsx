"use client"

export function PartnersSection() {
  const partners = [
    { name: "VSM", logo: "/logo_partners/vsm.png" },
    { name: "MSC Center", logo: "/logo_partners/msc.png" },
    { name: "Smar", logo: "/logo_partners/smar.png" },
    { name: "smentor", logo: "/logo_partners/smentor.png" },
    { name: "Học Kỳ Doanh Nghiệp", logo: "/logo_partners/hkdn.png" },
    { name: "Action Media", logo: "/logo_partners/actionmedia.png" },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Hệ thống các công ty thành viên
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Chúng tôi tự hào hợp tác cùng những tổ chức tài chính và doanh nghiệp hàng đầu Việt Nam
          </p>
        </div>

        {/* Grid logo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-20 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
