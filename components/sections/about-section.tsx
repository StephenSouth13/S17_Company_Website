"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, ArrowRight } from "lucide-react";

// Màu nhấn và Gradient chủ đạo (Phỏng theo màu trong ảnh)
const GRADIENT_TEXT_CLASS = "bg-gradient-to-r from-cyan-500 to-indigo-600 text-transparent bg-clip-text";
const ICON_BG_CLASS = "bg-gradient-to-br from-cyan-500 to-blue-600";
const ICON_COLOR_CLASS = "text-white";

// Định nghĩa màu cho từng lĩnh vực theo ảnh
const FEATURE_COLORS: { [key: string]: string } = {
  TRADING: 'bg-purple-600 shadow-purple-500/50', // Tím/Hồng
  HOLDING: 'bg-orange-500 shadow-orange-500/50', // Cam
  INVESTING: 'bg-red-500 shadow-red-500/50',    // Đỏ/Cam Đậm
};

// Cập nhật dữ liệu theo 3 Lĩnh vực trong ảnh
const features = [
  {
    icon: Target,
    title: "S17 TRADING",
    description:
      "Tập trung vào thương mại đa ngành, kinh doanh và phân phối mọi sản phẩm và dịch vụ tại thị trường trong nước và quốc tế.",
    colorKey: "TRADING",
  },
  {
    icon: Users,
    title: "S17 HOLDING",
    description:
      "Nắm giữ, phát triển và chuẩn hóa từng sản phẩm và dịch vụ theo mô hình holding: Tài chính, sản phẩm, con người.",
    colorKey: "HOLDING",
  },
  {
    icon: TrendingUp,
    title: "S17 INVESTING",
    description:
      "Đầu tư chiến lược, phát triển nhân sự kế thừa và các dự án trọng điểm thuộc S17.",
    colorKey: "INVESTING",
  },
];

// SVG cho logo S17 - Phục vụ cho phần trực quan hóa trung tâm
const S17_LOGO_SVG = (
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
        <rect width="100" height="100" fill="url(#pattern0)"/>
        <defs>
            {/* Đây là phần mô phỏng logo S17 Group - Chỉ hiển thị vòng tròn chính */}
            <linearGradient id="S17Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:"#06B6D4", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#3B82F6", stopOpacity:1}} />
            </linearGradient>
            
            {/* Vòng ngoài - Gradient Xanh/Tím */}
            <circle cx="50" cy="50" r="45" stroke="url(#S17Gradient)" strokeWidth="3" className="opacity-70 animate-pulse" />
            
            {/* Vòng trong - Màu trắng/Cyan */}
            <circle cx="50" cy="50" r="35" fill="white" className="dark:fill-neutral-800 shadow-xl" />
            
            {/* Chữ S17 (Tạm thời là text) */}
            <text x="50" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#06B6D4" className="dark:fill-cyan-400">S17</text>
        </defs>
    </svg>
);


export function AboutSection() {
  return (
    // Nền tối và cao cấp
    <section className="py-10 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Lộ Trình Phát Triển Chiến Lược
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-neutral-50 leading-tight">
              <span className={`font-black ${GRADIENT_TEXT_CLASS}`}>3 Lĩnh vực Đầu tư</span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              Tập đoàn S17 hoạt động xoay quanh 3 trụ cột chính, tạo nên một hệ sinh thái kinh doanh toàn diện và bền vững.
            </p>
          </div>

          {/* Visualization Grid - Mô phỏng bố cục trong ảnh */}
          <div className="relative flex flex-col items-center lg:flex-row lg:justify-between lg:items-start space-y-16 lg:space-y-0 lg:space-x-12 mt-20">
            
            {/* Trụ cột chính (S17 Group Center) - Vị trí tương tự logo trong ảnh */}
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0 order-first lg:order-none lg:mt-32">
                {S17_LOGO_SVG}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Tên Tập đoàn */}
                    <div className="text-center">
                        <span className="block text-2xl font-black text-cyan-600 dark:text-cyan-400">S17</span>
                        <span className="block text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Invest for Future</span>
                    </div>
                </div>
            </div>

            {/* Các Lĩnh vực (Features) - Xếp hàng dọc theo 3 cột */}
            <div className="flex flex-col space-y-8 w-full lg:w-auto lg:space-y-10 order-last lg:order-none">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    const colorClass = FEATURE_COLORS[feature.colorKey];
                    const numberColor = index === 0 ? 'text-purple-600' : index === 1 ? 'text-orange-500' : 'text-red-500';

                    return (
                        <div
                            key={index}
                            className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-l-4 border-transparent hover:border-cyan-500"
                        >
                            {/* Số thứ tự và Vòng tròn - Nổi bật */}
                            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 ${numberColor} bg-white dark:bg-neutral-900 shadow-md`}>
                                <span className={`text-xl font-black ${numberColor}`}>{index + 1}</span>
                            </div>

                            {/* Nội dung */}
                            <div className="flex-1">
                                <h3 className={`text-xl font-extrabold ${numberColor} transition-colors duration-300`}>
                                    {feature.title}
                                </h3>
                                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>


          {/* Call to Action - Giữ nguyên phong cách VIP */}
          <div className="mt-20 text-center">
             <a href="/contact" className="inline-flex items-center justify-center h-14 px-8 text-lg font-extrabold text-white rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-400/50"
                style={{backgroundImage: 'linear-gradient(90deg, #06B6D4, #3B82F6)'}}
             >
                Liên hệ để hợp tác chiến lược
                <ArrowRight className="ml-3 h-5 w-5" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
