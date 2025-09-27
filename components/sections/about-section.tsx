"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "S17 TRADING",
    description:
      "Tập trung vào thương mại & phân phối mọi sản phẩm và dịch vụ tại thị trường trong nước và quốc tế.",
  },
  {
    icon: Users,
    title: "S17 HOLDING",
    description:
      "Nắm giữ và định hướng phát triển, đảm bảo chuẩn mực về sản phẩm tài chính và nhân sự cho toàn bộ hệ thống công ty thành viên.",
  },
  {
    icon: TrendingUp,
    title: "S17 INVESTING",
    description:
      "Đầu tư chiến lược, tập trung phát triển nhân sự & triển khai các dự án trọng điểm thuộc S17 Holding.",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-card/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Về <span className="gradient-text">S17 Group</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Chúng tôi là đối tác tin cậy, mang đến các giải pháp thương mại điện tử, đầu tư và quản lý doanh nghiệp toàn diện.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative w-64 h-64 group"
              >
                {/* Hexagon border */}
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full rounded-[30%] border-4 border-transparent"
                    style={{
                      borderImage: "linear-gradient(45deg, #FFD06D, #0077C8) 1",
                      clipPath:
                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                    }}
                  />
                </div>

                {/* Icon */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Icon className="h-10 w-10 text-[#0077C8]" />
                </div>

                {/* Text */}
                <div className="absolute bottom-6 w-full px-4 text-center">
                  <h3 className="text-lg font-bold text-[#0077C8] mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
