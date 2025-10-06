"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Icons: Sử dụng màu cyan-500 làm màu nhấn (accent)
import { PenTool, Globe, Briefcase, Video, Book, Mic, ArrowRight } from "lucide-react";
import Link from "next/link";
// Giả định ContactForm đã được import đúng
import ContactForm from "@/components/contact/ContactForm"; 
import Image from "next/image";

// Màu nhấn chính: Cyan (Xanh lục lam)
const ACCENT_COLOR_CLASS = "text-cyan-500";
const ACCENT_BG_CLASS = "bg-cyan-500 hover:bg-cyan-600";

export function OurServices() {
  const services = [
    {
      id: 1,
      title: "Chăm sóc các kênh truyền thông",
      type: "Dịch vụ",
      description: "Gói chăm sóc các kênh truyền thông: Facebook, Website, Các kênh Social, Các kênh E-com. Bao gồm nội dung + hình ảnh + Video.",
      // Placeholder image URL - Teal/Cyan
      image: "services/csktt.png", 
      price: "4.500.000 - 15.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 2,
      title: "Thiết kế và xây dựng website",
      type: "Dịch vụ",
      description: "Thiết kế website từ căn bản đến nâng cao, bao gồm các dịch vụ trọn gói hoặc theo nhu cầu khách hàng: Domain/ Hosting, Website onepage, Website diễn giả, Website giới thiệu, Website bán hàng.",
      image: "https://placehold.co/500x300/14B8A6/FFFFFF?text=THIET+KE+WEBSITE",
      price: "3.000.000 - 30.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 3,
      title: "Thiết kế logo",
      type: "Dịch vụ",
      description: "Thiết kế logo theo yêu cầu khách hàng.",
      image: "https://placehold.co/500x300/14B8A6/FFFFFF?text=LOGO+THUONG+HIEU",
      price: "5.000.000 - 30.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 4,
      title: "Thiết kế ấn phẩm Social + Ecommerce",
      type: "Dịch vụ",
      description: "Dịch vụ thiết kế các ấn phẩm cho kênh truyền thông, social media, thương mại điện tử: banner, poster, hình ảnh sản phẩm, bài đăng.",
      image: "https://placehold.co/500x300/14B8A6/FFFFFF?text=AN+PHAM+SOCIAL+ECOM",
      price: "1.500.000 - 5.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 5,
      title: "Sản xuất Video",
      type: "Dịch vụ",
      description: "Sản xuất video marketing, video giới thiệu sản phẩm, video viral, TVC quảng cáo, và các loại video khác theo yêu cầu.",
      image: "https://placehold.co/500x300/14B8A6/FFFFFF?text=SAN+XUAT+VIDEO",
      price: "5.000.000 - 50.000.000",
      status: "Theo hợp đồng",
    },
    {
      id: 6,
      title: "Đào tạo theo chuyên đề",
      type: "Dịch vụ",
      description: "Tổ chức các khóa đào tạo ngắn hạn chuyên sâu về marketing, truyền thông, kỹ năng mềm cho doanh nghiệp và cá nhân.",
      image: "https://placehold.co/500x300/14B8A6/FFFFFF?text=KHOA+DAO+TAO",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
    },
    {
      id: 7,
      title: "Tổ chức workshop",
      type: "Dịch vụ",
      description: "Tổ chức workshop chuyên nghiệp, từ khâu lên ý tưởng, chuẩn bị nội dung, đến quản lý sự kiện và truyền thông sau sự kiện.",
      image: "https://placehold.co/500x300/14B8A6/FFFFFF?text=TO+CHUC+WORKSHOP",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
    },
    {
      id: 8,
      title: "Tổ chức sự kiện",
      type: "Dịch vụ",
      description: "Tổ chức các sự kiện quy mô lớn: khai trương, kỷ niệm, ra mắt sản phẩm, hội thảo, hội nghị.",
      image: "https://placehold.co/500x300/14B8A6/FFFFFF?text=TO+CHUC+SU+KIEN",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Theo hợp đồng":
        return "bg-cyan-500/10 text-cyan-700 border-cyan-500/20 dark:text-cyan-300 dark:border-cyan-700";
      default:
        return "bg-neutral-500/10 text-neutral-500 border-neutral-500/20";
    }
  };

  const getIcon = (title: string) => {
    // Sử dụng màu nhấn Cyan
    const iconClass = `h-5 w-5 ${ACCENT_COLOR_CLASS}`;
    switch (title) {
      case "Chăm sóc các kênh truyền thông":
        return <Briefcase className={iconClass} />;
      case "Thiết kế và xây dựng website":
        return <Globe className={iconClass} />;
      case "Thiết kế logo":
        return <PenTool className={iconClass} />;
      case "Thiết kế ấn phẩm Social + Ecommerce":
        return <PenTool className={iconClass} />;
      case "Sản xuất Video":
        return <Video className={iconClass} />;
      case "Đào tạo theo chuyên đề":
        return <Book className={iconClass} />;
      case "Tổ chức workshop":
      case "Tổ chức sự kiện":
        return <Mic className={iconClass} />;
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  return (
    // Nền sáng nhẹ, có thể chuyển sang tối
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Section Header - Tác động mạnh */}
          <div className="mb-16 space-y-6 text-center">
            <Badge 
                className="text-sm font-semibold uppercase tracking-widest bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300 rounded-full px-4 py-1.5 shadow-md"
            >
                Giải pháp toàn diện
            </Badge>
            <h2 className="text-4xl font-extrabold md:text-5xl lg:text-6xl text-neutral-900 dark:text-neutral-50 leading-tight">
              Các dịch vụ <span className={`font-black ${ACCENT_COLOR_CLASS}`}>Đẳng cấp</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-400">
              Chúng tôi kiến tạo giá trị đột phá thông qua các giải pháp Digital Marketing, Sáng tạo Nội dung và Tổ chức Sự kiện chuyên nghiệp, linh hoạt theo mọi nhu cầu.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.id}
                // Thẻ sang trọng: bo góc lớn, đổ bóng sâu, nền trắng tinh
                className="group flex h-full flex-col overflow-hidden rounded-2xl border-neutral-200 bg-white shadow-xl shadow-neutral-200/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-200/40 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-900/30 dark:hover:shadow-cyan-900/50"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "https://placehold.co/500x300/EEEEEE/888888?text=SP"}
                    alt={service.title}
                    width={500}
                    height={300}
                    // Hiệu ứng ảnh mượt mà
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <Badge variant="secondary" className={`border ${getStatusColor(service.status)} rounded-full px-3 py-1 text-xs font-bold shadow-sm`}>
                      {service.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="flex-grow pb-3 pt-6">
                  <h3 className="line-clamp-2 text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-cyan-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                    {service.title}
                  </h3>
                  <p className="line-clamp-3 text-base text-neutral-500 dark:text-neutral-400 mt-2">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-2">
                  <div className="flex items-center space-x-3 border-t border-neutral-100 dark:border-neutral-700 pt-3">
                    {getIcon(service.title)}
                    <div>
                      <div className="text-base font-extrabold text-cyan-600 dark:text-cyan-400">{service.price} VNĐ</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Chi phí ước tính</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="mt-auto flex gap-3 pt-0 pb-6 px-6">
                  <Link href={`/services/${service.id}`} className="flex-1">
                    <Button 
                        variant="ghost"
                        className={`w-full ${ACCENT_COLOR_CLASS} border border-cyan-200 dark:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-900 transition-all duration-300 rounded-xl font-semibold`}
                    >
                      Chi tiết
                    </Button>
                  </Link>
                  <div className="flex-1">
                    <ContactForm 
  triggerLabel="Liên hệ ngay" 
  className={`${ACCENT_BG_CLASS} w-full text-white shadow-lg shadow-cyan-300/50 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5`} 
/>

                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View All Button - Nổi bật hơn */}
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className={`group ${ACCENT_BG_CLASS} text-lg rounded-full px-8 h-14 font-extrabold shadow-xl shadow-cyan-300/50 transition-all duration-300 transform hover:scale-[1.02]`}>
                Khám phá tất cả giải pháp
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
