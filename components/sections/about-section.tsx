"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";

// Màu nhấn và Gradient chủ đạo
const GRADIENT_TEXT_CLASS = "bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text";
const ICON_BG_CLASS = "bg-gradient-to-br from-cyan-500 to-blue-600";
const ICON_COLOR_CLASS = "text-white";

const features = [
  {
    icon: Target,
    title: "S17 TRADING",
    description:
      "Tập trung vào thương mại & phân phối mọi sản phẩm và dịch vụ tại thị trường trong nước và quốc tế. Xây dựng chuỗi cung ứng vững chắc.",
  },
  {
    icon: Users,
    title: "S17 HOLDING",
    description:
      "Nắm giữ và định hướng phát triển, đảm bảo chuẩn mực về sản phẩm tài chính và nhân sự cho toàn bộ hệ thống công ty thành viên. Quản lý chiến lược.",
  },
  {
    icon: TrendingUp,
    title: "S17 INVESTING",
    description:
      "Đầu tư chiến lược, tập trung phát triển nhân sự & triển khai các dự án trọng điểm thuộc S17 Holding. Tạo ra giá trị tăng trưởng bền vững.",
  },
  // Thêm một mục thứ tư để hoàn thiện grid 4 cột trên desktop
  {
    icon: Shield,
    title: "S17 STRATEGY",
    description:
      "Đảm bảo tuân thủ pháp lý, quản lý rủi ro và xây dựng nền tảng đạo đức kinh doanh minh bạch, bảo vệ giá trị cốt lõi của Tập đoàn.",
  },
];

export function AboutSection() {
  return (
    // Nền tối và cao cấp
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Cấu Trúc Tập Đoàn
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-neutral-50 leading-tight">
              Tầm nhìn của <span className={`font-black ${GRADIENT_TEXT_CLASS}`}>S17 Group</span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              Chúng tôi là đối tác kiến tạo, mang đến các giải pháp thương mại, đầu tư và quản lý doanh nghiệp toàn diện với định hướng phát triển bền vững và đổi mới.
            </p>
          </div>

          {/* Feature Grid - Responsive 2/4 columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  // Thiết kế Card hiện đại: bo góc lớn, đổ bóng sâu
                  className="group flex flex-col items-center p-6 text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-cyan-500/50 dark:hover:border-blue-500/50"
                >
                  {/* Icon Container - Nổi bật với Gradient */}
                  <div className={`
                    p-4 mb-6 rounded-full ${ICON_BG_CLASS} 
                    shadow-lg shadow-cyan-500/30 dark:shadow-blue-500/30
                    transition-all duration-500 group-hover:rotate-6
                  `}>
                    <Icon className={`h-8 w-8 ${ICON_COLOR_CLASS}`} />
                  </div>

                  <CardContent className="p-0 space-y-3">
                    <h3 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-blue-400">
                      {feature.title}
                    </h3>
                    <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action - Nổi bật */}
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
