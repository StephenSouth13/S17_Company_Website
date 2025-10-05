// components/sections/partners-section.tsx

"use client"
import * as React from 'react';
// Nếu bạn muốn dùng component này ở bất cứ đâu, nên import hàm cn hoặc dùng Tailwind trực tiếp.

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
    // Bọc trong thẻ <section> với padding lớn để tạo không gian thoáng đãng, loại bỏ mọi viền.
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      
      {/* Container chính: Đảm bảo nội dung nằm giữa và có khoảng lề đẹp */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Đỉnh cao & Chuyên nghiệp */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0077C8] mb-4">
            Hệ thống các công ty thành viên
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            S17 được sáng lập bởi cộng đồng doanh nhân – doanh nghiệp, cùng đội ngũ tiên phong từ nhiều lĩnh vực: Nhà nước, nhà khoa học, nhà đầu tư, nhà tiêu dùng và nhà giáo dục, kiến tạo mạng lưới hợp tác hiệu quả, mở ra cơ hội bứt phá trên mọi thị trường.
          </p>
        </div>

       {/* Partners Grid */}
        <div 
          // ĐÃ BỎ: border-t pt-8 border-gray-200 dark:border-gray-700
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-24 p-3 md:p-4 rounded-xl 
                         bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700
                         transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#0077C8]/20"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-16 md:max-h-20 w-auto object-contain 
                           transition-all duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}