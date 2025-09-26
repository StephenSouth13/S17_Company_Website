// components/sections/our-services.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Globe, Briefcase, Video, Book, Mic } from "lucide-react";
import Link from "next/link"; // Thêm import Link

export function OurServices() {
  const services = [
    {
      id: 1,
      title: "Chăm sóc các kênh truyền thông",
      type: "Dịch vụ",
      description: "Gói chăm sóc các kênh truyền thông: Facebook, Website, Các kênh Social, Các kênh E-com. Bao gồm nội dung + hình ảnh + Video.",
      image: "/media-channels.jpg",
      price: "4.500.000 - 15.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 2,
      title: "Thiết kế và xây dựng website",
      type: "Dịch vụ",
      description: "Thiết kế website từ căn bản đến nâng cao, bao gồm các dịch vụ trọn gói hoặc theo nhu cầu khách hàng: Domain/ Hosting, Website onepage, Website diễn giả, Website giới thiệu, Website bán hàng.",
      image: "/website-design.jpg",
      price: "3.000.000 - 30.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 3,
      title: "Thiết kế logo",
      type: "Dịch vụ",
      description: "Thiết kế logo theo yêu cầu khách hàng.",
      image: "/logo-design.jpg",
      price: "5.000.000 - 30.000.000",
      status: "Theo hợp đồng",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Theo hợp đồng":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Chăm sóc các kênh truyền thông":
        return <Briefcase className="h-4 w-4 text-primary" />;
      case "Thiết kế và xây dựng website":
        return <Globe className="h-4 w-4 text-primary" />;
      case "Thiết kế logo":
        return <PenTool className="h-4 w-4 text-primary" />;
      default:
        return <Briefcase className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Các dịch vụ <span className="gradient-text">của chúng tôi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Chúng tôi cung cấp các giải pháp truyền thông và sự kiện toàn diện, chuyên nghiệp.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border/50 overflow-hidden flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="secondary" className={getStatusColor(service.status)}>
                      {service.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3 flex-grow"> {/* Thêm flex-grow */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      {getIcon(service.title)}
                      <div>
                        <div className="text-sm font-medium">{service.price} VNĐ</div>
                        <div className="text-xs text-muted-foreground">Giá gói</div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Link href={`/services/${service.id}`} className="w-full">
                    <Button className="w-full" size="sm">
                      Tìm hiểu thêm
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/services">
                Xem tất cả dịch vụ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}