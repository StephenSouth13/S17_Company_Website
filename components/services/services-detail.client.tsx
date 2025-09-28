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
      longDescription: "Dịch vụ này giúp doanh nghiệp tối ưu hóa và quản lý hiệu quả các kênh truyền thông trực tuyến. Chúng tôi tạo nội dung hấp dẫn, sản xuất hình ảnh và video chất lượng cao, đồng thời theo dõi và báo cáo hiệu suất định kỳ để đảm bảo thư��ng hiệu của bạn luôn nổi bật và thu hút khách hàng tiềm năng.",
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
        "N��ng cao độ nhận diện thương hiệu",
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
    "3": {
      id: 3,
      title: "Thiết kế logo",
      type: "Dịch vụ",
      description: "Thiết kế logo theo yêu cầu khách hàng.",
      longDescription:
        "Dịch vụ thiết kế logo chuyên nghiệp giúp doanh nghiệp xây dựng hình ảnh nhận diện độc đáo, nhất quán và dễ ghi nhớ trên mọi nền tảng.",
      image: "/logo-design.jpg",
      price: "5.000.000 - 30.000.000",
      status: "Theo hợp đồng",
      contractDuration: "2-4 tuần",
      process: [
        "1. Thu thập brief và khảo sát thương hiệu",
        "2. Phân tích định vị và đối tượng mục tiêu",
        "3. Phác thảo concept và moodboard",
        "4. Thiết kế phiên bản đề xuất",
        "5. Hiệu chỉnh theo góp ý",
        "6. Bàn giao file gốc và hướng dẫn sử dụng",
      ],
      packages: [
        { name: "Cơ Bản", price: "5.000.000", details: "2 concept, 2 vòng chỉnh sửa, file PNG, JPG." },
        { name: "Chuyên Nghiệp", price: "12.000.000", details: "3 concept, 3 vòng chỉnh sửa, file vector đầy đủ." },
        { name: "Thương Hiệu", price: "30.000.000", details: "4 concept, 5 vòng chỉnh sửa, guideline sử dụng logo." },
      ],
      benefits: [
        "Thể hiện cá tính thương hiệu",
        "Tăng độ nhận diện",
        "Tài sản thương hiệu bền vững",
      ],
      images: ["/logo-design.jpg", "/logo-design-2.jpg", "/logo-design-3.jpg"],
    },
    "4": {
      id: 4,
      title: "Thiết kế ấn phẩm Social + Ecommerce",
      type: "Dịch vụ",
      description:
        "Thiết kế banner, poster, hình ảnh sản phẩm cho social media và sàn thương mại điện tử.",
      longDescription:
        "Tối ưu hoá hình ảnh truyền thông với bộ ấn phẩm phù hợp từng nền tảng, đảm bảo đồng nhất và thu hút.",
      image: "/social-ecommerce.jpg",
      price: "1.500.000 - 5.000.000",
      status: "Theo hợp đồng",
      contractDuration: "1-2 tuần",
      process: [
        "1. Nhận brief và quy chuẩn thương hiệu",
        "2. Lên khung nội dung và phong cách",
        "3. Thiết kế loạt ấn phẩm",
        "4. Điều chỉnh và hoàn thiện",
        "5. Bàn giao file đúng chuẩn từng nền tảng",
      ],
      packages: [
        { name: "Starter", price: "1.500.000", details: "5 ấn phẩm tĩnh cho 1 nền tảng." },
        { name: "Growth", price: "3.000.000", details: "12 ấn phẩm đa nền tảng." },
        { name: "Pro", price: "5.000.000", details: "20 ấn phẩm + 2 video ngắn." },
      ],
      benefits: [
        "Đồng nhất hình ảnh",
        "Tăng tương tác",
        "Chuẩn kích thước đa nền tảng",
      ],
      images: ["/social-ecommerce.jpg", "/social-ecommerce-2.jpg", "/social-ecommerce-3.jpg"],
    },
    "5": {
      id: 5,
      title: "Sản xuất Video",
      type: "Dịch vụ",
      description:
        "Sản xuất TVC, video marketing, video giới thiệu sản phẩm/chương trình.",
      longDescription:
        "Từ ý tưởng đến sản xuất hậu kỳ, chúng tôi tạo ra video hấp dẫn, phù hợp mục tiêu truyền thông và ngân sách.",
      image: "/video-production.jpg",
      price: "5.000.000 - 50.000.000",
      status: "Theo hợp đồng",
      contractDuration: "2-6 tuần",
      process: [
        "1. Lên concept kịch bản",
        "2. Tiền kỳ (casting, bối cảnh, thiết bị)",
        "3. Quay dựng",
        "4. Hậu kỳ (cắt dựng, âm nhạc, màu sắc)",
        "5. Bàn giao file xuất bản",
      ],
      packages: [
        { name: "Short-form", price: "5.000.000", details: "Video ngắn 30-60s, quay 1 ngày." },
        { name: "Corporate", price: "20.000.000", details: "Video doanh nghiệp 2-3 phút." },
        { name: "TVC", price: "50.000.000", details: "TVC quảng cáo full crew." },
      ],
      benefits: [
        "Tăng sức thuyết phục",
        "Kể chuyện thương hiệu",
        "Dễ dàng quảng bá đa kênh",
      ],
      images: ["/video-production.jpg", "/video-production-2.jpg", "/video-production-3.jpg"],
    },
    "6": {
      id: 6,
      title: "Đào tạo theo chuyên đề",
      type: "Dịch vụ",
      description:
        "Đào tạo ngắn hạn về marketing, truyền thông và kỹ năng mềm cho doanh nghiệp/cá nhân.",
      longDescription:
        "Thiết kế chương trình đào tạo theo mục tiêu, đo lường hiệu quả, kèm tài liệu và mentoring sau khoá học.",
      image: "/training.jpg",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
      contractDuration: "1-4 tuần",
      process: [
        "1. Khảo sát nhu cầu",
        "2. Xây dựng outline & tài liệu",
        "3. Triển khai đào tạo",
        "4. Đánh giá & báo cáo",
      ],
      packages: [
        { name: "Workshop", price: "—", details: "Buổi 3-4 giờ, nhóm nhỏ." },
        { name: "In-house", price: "—", details: "Khoá 1-2 ngày cho doanh nghiệp." },
        { name: "Mentoring", price: "—", details: "Kèm cặp theo lộ trình 4-8 tuần." },
      ],
      benefits: [
        "Ứng dụng thực tế",
        "Tối ưu theo mục tiêu",
        "Theo dõi sau đào tạo",
      ],
      images: ["/training.jpg", "/training-2.jpg", "/training-3.jpg"],
    },
    "7": {
      id: 7,
      title: "Tổ chức workshop",
      type: "Dịch vụ",
      description:
        "Lên ý tưởng, tổ chức và truyền thông cho workshop chuyên nghiệp.",
      longDescription:
        "Đảm bảo trải nghiệm người tham dự, nội dung giá trị và hình ảnh truyền thông hậu sự kiện.",
      image: "/workshop.jpg",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
      contractDuration: "2-6 tuần",
      process: [
        "1. Xác định mục tiêu & đối tượng",
        "2. Lập kế hoạch chương trình",
        "3. Tổ chức & vận hành",
        "4. Tổng kết & truyền thông",
      ],
      packages: [
        { name: "Basic", price: "—", details: "Tổ chức 50-80 khách." },
        { name: "Standard", price: "—", details: "Tổ chức 100-150 khách." },
        { name: "Premium", price: "—", details: "Tổ chức 200+ khách." },
      ],
      benefits: [
        "Tối ưu chi phí",
        "Quy trình chuyên nghiệp",
        "Hiệu ứng truyền thông tốt",
      ],
      images: ["/workshop.jpg", "/workshop-2.jpg", "/workshop-3.jpg"],
    },
    "8": {
      id: 8,
      title: "Tổ chức sự kiện",
      type: "Dịch vụ",
      description:
        "Tổ chức sự kiện quy mô: khai trương, kỷ niệm, hội thảo, hội nghị.",
      longDescription:
        "Từ chiến lược, sản xuất đến vận hành, đảm bảo sự kiện chỉn chu, an toàn và ấn tượng.",
      image: "/event-management.jpg",
      price: "Giá thỏa thuận",
      status: "Theo hợp đồng",
      contractDuration: "4-12 tuần (tuỳ quy mô)",
      process: [
        "1. Lên kế hoạch tổng thể",
        "2. Xin phép & nhà cung cấp",
        "3. Thi công & tổng duyệt",
        "4. Vận hành & báo cáo",
      ],
      packages: [
        { name: "Basic", price: "—", details: "Sự kiện < 200 khách." },
        { name: "Standard", price: "—", details: "Sự kiện 200-500 khách." },
        { name: "Grand", price: "—", details: "Sự kiện > 500 khách." },
      ],
      benefits: [
        "Tối ưu ngân sách",
        "Quy trình chuyên nghiệp",
        "Trải nghiệm ấn tượng",
      ],
      images: ["/event-management.jpg", "/event-management-2.jpg", "/event-management-3.jpg"],
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
