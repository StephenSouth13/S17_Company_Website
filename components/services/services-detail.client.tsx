"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  DollarSign,
  Briefcase,
  PenTool,
  Clock,
  User,
  List,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceDetailProps {
  serviceId: string;
}

// Mock service data
const getServiceById = (id: string) => {
  const services = {
    "1": {
      id: 1,
      title: "Chăm sóc các kênh truyền thông",
      type: "Dịch vụ",
      description: "Gói chăm sóc các kênh truyền thông: Facebook, Website, Các kênh Social, Các kênh E-com. Bao gồm nội dung + hình ảnh + Video.",
      longDescription: "Dịch vụ này giúp doanh nghiệp tối ưu hóa và quản lý hiệu quả các kênh truyền thông trực tuyến. Chúng tôi tạo nội dung hấp dẫn, sản xuất hình ảnh và video chất lượng cao, đồng thời theo dõi và báo cáo hiệu suất định kỳ để đảm bảo thương hiệu của bạn luôn nổi bật và thu hút khách hàng tiềm năng.",
      image: "/media-channels.jpg",
      price: "4.500.000 - 15.000.000",
      status: "Theo hợp đồng",
      contractDuration: "Tối thiểu 6 tháng",
      process: [
        "1. Nhận yêu cầu từ khách hàng",
        "2. Tư vấn dịch vụ phù hợp",
        "3. Gửi proposal + báo giá dịch vụ",
        "4. Trình bày phương án (online hoặc offline)",
        "5. Thống nhất nội dung, hợp đồng",
        "6. Thanh toán chi phí theo hợp đồng",
        "7. Triển khai dịch vụ",
        "8. Báo cáo tuần / tháng",
        "9. Nghiệm thu hoặc gia hạn hợp đồng",
      ],
      packages: [
        { name: "Gói Cơ Bản", price: "4.500.000", details: "Chăm sóc 1 kênh, 12 bài viết/tháng, không bao gồm video." },
        { name: "Gói Chuyên Nghiệp", price: "8.000.000", details: "Chăm sóc 2 kênh, 20 bài viết/tháng, 4 video ngắn/tháng." },
        { name: "Gói Toàn Diện", price: "15.000.000", details: "Chăm sóc đa kênh, tối ưu nội dung, sản xuất video chuyên nghiệp." },
      ],
      benefits: [
        "Tiết kiệm chi phí và thời gian quản lý",
        "Nâng cao độ nhận diện thương hiệu",
        "Tăng tương tác và thu hút khách hàng",
        "Đảm bảo sự nhất quán trên các nền tảng",
      ],
      images: ["/media-channels.jpg", "/media-channels-2.jpg", "/media-channels-3.jpg"],
    },
    "2": {
      id: 2,
      title: "Thiết kế và xây dựng website",
      type: "Dịch vụ",
      description: "Thiết kế website từ căn bản đến nâng cao, bao gồm các dịch vụ trọn gói hoặc theo nhu cầu khách hàng.",
      longDescription: "Dịch vụ này cung cấp giải pháp thiết kế website chuyên nghiệp, từ website giới thiệu doanh nghiệp đơn giản đến các trang thương mại điện tử phức tạp. Chúng tôi tập trung vào trải nghiệm người dùng (UX/UI) mượt mà, tốc độ tải trang nhanh và t���i ưu hóa SEO để website của bạn không chỉ đẹp mà còn hiệu quả trong việc kinh doanh.",
      image: "/website-design.jpg",
      price: "3.000.000 - 30.000.000",
      status: "Theo hợp đồng",
      contractDuration: "1-3 tháng (tùy dự án)",
      process: [
        "1. Tiếp nhận yêu cầu, phân tích mục tiêu",
        "2. Thiết kế giao diện (UI/UX) và wireframe",
        "3. Lập trình và phát triển website",
        "4. Kiểm thử và chạy thử nghiệm",
        "5. Hướng dẫn sử dụng và bàn giao",
        "6. Hỗ trợ kỹ thuật và bảo trì",
      ],
      packages: [
        { name: "Gói One-Page", price: "3.000.000", details: "Website đơn trang, phù hợp cho giới thiệu cá nhân, sự kiện." },
        { name: "Gói Doanh Nghiệp", price: "10.000.000", details: "Website đa trang, giới thiệu sản phẩm/dịch vụ chi tiết." },
        { name: "Gói E-commerce", price: "25.000.000", details: "Website bán hàng đầy đủ tính năng, tích hợp thanh toán." },
      ],
      benefits: [
        "Giao diện độc đáo, tối ưu trên mọi thiết bị",
        "Tăng độ tin cậy và uy tín cho doanh nghiệp",
        "Hỗ trợ SEO, dễ dàng lên top tìm kiếm",
        "Tùy chỉnh linh hoạt theo nhu cầu riêng",
      ],
      images: ["/website-design.jpg", "/website-design-2.jpg", "/website-design-3.jpg"],
    },
  };
  return services[id as keyof typeof services] || null;
};

export default function ServiceDetailClient({ serviceId }: ServiceDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl text-white mb-4">Dịch vụ không tồn tại</h1>
        <Link href="/services">
          <Button>Quay lại trang dịch vụ</Button>
        </Link>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Theo hợp đồng":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
        <Link href="/services" passHref>
          <Button variant="outline" className="border-border/50 hover:bg-card/50 bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại trang dịch vụ
          </Button>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-border/50">
                {service.type}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{service.longDescription}</p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-card border-border/50">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={service.images[selectedImage] || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {service.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === index ? "border-primary" : "border-gray-600 hover:border-gray-500"
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${service.title} ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Information Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card border-border/50">
                <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                <TabsTrigger value="process">Quy trình</TabsTrigger>
                <TabsTrigger value="packages">Gói giá</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">Thông tin chung</CardTitle>
                  </CardHeader>
                  <div className="p-4">
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>

                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">Lợi ích</CardTitle>
                  </CardHeader>
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((b: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                        <p className="text-sm text-muted-foreground">{b}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="space-y-4">
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle>Quy trình</CardTitle>
                  </CardHeader>
                  <div className="p-4">
                    <ol className="list-decimal list-inside space-y-2">
                      {service.process.map((step: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="packages" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.packages.map((pkg: any, idx: number) => (
                    <Card key={idx} className="bg-card border-border/50">
                      <CardHeader>
                        <CardTitle>{pkg.name}</CardTitle>
                      </CardHeader>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{pkg.details}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="font-semibold">{pkg.price}</span>
                          <Button size="sm">Chọn gói</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-card border-border/50 sticky top-24">
            <CardContent>
              <h3 className="font-semibold mb-2">Thông tin gói</h3>
              <p className="text-muted-foreground mb-4">Giá từ: {service.price}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{service.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{service.contractDuration}</span>
                </div>
              </div>

              <div className="mt-4">
                <Button className="w-full">Liên hệ tư vấn</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardContent>
              <h4 className="font-semibold mb-2">Liên hệ</h4>
              <p className="text-sm text-muted-foreground">Email: contact@s17.example</p>
              <p className="text-sm text-muted-foreground">Phone: +84 123 456 789</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
