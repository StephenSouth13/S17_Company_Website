// components/sections/our-services.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Globe, Briefcase, Video, Book, Mic, ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";

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
    {
      id: 4,
      title: "Thiết kế ấn phẩm Social + Ecommerce",
      type: "Dịch vụ",
      description: "Dịch vụ thiết kế các ấn phẩm cho kênh truyền thông, social media, thương mại điện tử: banner, poster, hình ảnh sản phẩm, bài đăng.",
      image: "/social-ecommerce.jpg",
      price: "1.500.000 - 5.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 5,
      title: "Sản xuất Video",
      type: "Dịch vụ",
      description: "Sản xuất video marketing, video giới thiệu sản phẩm, video viral, TVC quảng cáo, và các loại video khác theo yêu cầu.",
      image: "/video-production.jpg",
      price: "5.000.000 - 50.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 6,
      title: "Đào tạo theo chuyên đề",
      type: "Dịch vụ",
      description: "Tổ chức các khóa đào tạo ngắn hạn chuyên sâu về marketing, truyền thông, kỹ năng mềm cho doanh nghiệp và cá nhân.",
      image: "/training.jpg",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
    },
    {
      id: 7,
      title: "Tổ chức workshop",
      type: "Dịch vụ",
      description: "Tổ chức workshop chuyên nghiệp, từ khâu lên ý tưởng, chuẩn bị nội dung, đến quản lý sự kiện và truyền thông sau sự kiện.",
      image: "/workshop.jpg",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
    },
    {
      id: 8,
      title: "Tổ chức sự kiện",
      type: "Dịch vụ",
      description: "Tổ chức các sự kiện quy mô lớn: khai trương, kỷ niệm, ra mắt sản phẩm, hội thảo, hội nghị.",
      image: "/event-management.jpg",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Theo hợp đồng":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-neutral-500/10 text-neutral-500 border-neutral-500/20";
    }
  };

  const getIcon = (title: string) => {
    switch (title) {
      case "Chăm sóc các kênh truyền thông":
        return <Briefcase className="h-4 w-4 text-accent" />;
      case "Thiết kế và xây dựng website":
        return <Globe className="h-4 w-4 text-accent" />;
      case "Thiết kế logo":
        return <PenTool className="h-4 w-4 text-accent" />;
      case "Thiết kế ấn phẩm Social + Ecommerce":
        return <PenTool className="h-4 w-4 text-accent" />;
      case "Sản xuất Video":
        return <Video className="h-4 w-4 text-accent" />;
      case "Đào tạo theo chuyên đề":
        return <Book className="h-4 w-4 text-accent" />;
      case "Tổ chức workshop":
      case "Tổ chức sự kiện":
        return <Mic className="h-4 w-4 text-accent" />;
      default:
        return <Briefcase className="h-4 w-4 text-accent" />;
    }
  };

  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
              Các dịch vụ <span className="text-accent">của chúng tôi</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              Chúng tôi cung cấp các giải pháp truyền thông và sự kiện toàn diện, chuyên nghiệp.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group flex h-full flex-col overflow-hidden rounded-xl border-neutral-200 bg-neutral-50/80 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/80"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <Badge variant="secondary" className={`border-none ${getStatusColor(service.status)}`}>
                      {service.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="flex-grow pb-3">
                  <h3 className="line-clamp-2 text-lg font-semibold text-neutral-800 transition-colors group-hover:text-accent dark:text-neutral-100 dark:group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-neutral-500 dark:text-neutral-400">{service.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center space-x-2">
                    {getIcon(service.title)}
                    <div>
                      <div className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{service.price} VNĐ</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Giá gói</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="mt-auto flex gap-2 pt-0">
                  <Link href={`/services/${service.id}`} className="flex-1">
                    <Button className="w-full">
                      Tìm hiểu thêm
                    </Button>
                  </Link>
                  <div className="flex-1">
                    <ContactForm triggerLabel="Liên hệ" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="group">
                Xem tất cả dịch vụ
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}