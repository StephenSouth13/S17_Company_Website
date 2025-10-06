"use client"

export function S17_Eco() {
  const partners = [
    { name: "S17 E-Com", logo: "/logos17/logo.png" },
    { name: "S17 Best Seller", logo: "/logos17/logo.png" },
    { name: "S17 Seller Team", logo: "/logos17/logo.png" },
    { name: "S17 Care", logo: "/logos17/logo.png" },
    { name: "S17 Talk", logo: "/logos17/logo.png" },
    { name: "S17 Edu", logo: "/logos17/logo.png" },
    { name: "S17 Coaching 1one1", logo: "/logos17/logo.png" },
    { name: "S17 Fund", logo: "/logos17/logo.png" },
  ]

  return (
    <section className="py-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50">
              🌐 <span className="text-cyan-500">S17 TRADING ECO</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Hệ sinh thái thương mại của S17, kết nối sản phẩm – con người – thị trường.
            </p>
          </div>


          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-800/60 hover:bg-white dark:hover:bg-neutral-700 transition-all duration-300 shadow-sm hover:shadow-md w-full h-28 md:h-32"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 max-w-[70%] object-contain filter drop-shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
