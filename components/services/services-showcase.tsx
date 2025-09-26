"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Clock, Monitor, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

// Cập nhật danh mục và trạng thái dịch vụ
const serviceCategories = ["All services", "Marketing", "Web Development", "Design"];
const serviceStatuses = ["All Status", "Ongoing", "Completed", "Custom"];

// Cập nhật dữ liệu dịch vụ
const mockupServices = [
  {
    id: 1,
    title: "Chăm sóc các kênh truyền thông",
    category: "Marketing",
    status: "Ongoing",
    description: "Quản lý và phát triển nội dung, hình ảnh, video trên các nền tảng Facebook, Website, Social, E-com.",
    image: "/media-channels.jpg",
    price: "4.500.000",
    duration: "Theo tháng",
    minPrice: "4.500.000 VNĐ",
  },
  {
    id: 2,
    title: "Thiết kế và xây dựng website",
    category: "Web Development",
    status: "Custom",
    description: "Thiết kế website trọn gói, chuyên nghiệp từ landing page đến trang web thương mại điện tử.",
    image: "/website-design.jpg",
    price: "Theo dự án",
    duration: "Theo dự án",
    minPrice: "3.000.000 VNĐ",
  },
  {
    id: 3,
    title: "Sáng tạo nội dung độc quyền",
    category: "Marketing",
    status: "Ongoing",
    description: "Xây dựng chiến lược và sản xuất nội dung văn bản, hình ảnh, video chất lượng cao cho thương hiệu.",
    image: "/content-creation.jpg",
    price: "5.000.000",
    duration: "Theo tháng",
    minPrice: "5.000.000 VNĐ",
  },
  {
    id: 4,
    title: "Dịch vụ SEO tổng thể",
    category: "Marketing",
    status: "Ongoing",
    description: "Tối ưu hóa công cụ tìm kiếm, giúp website của bạn tăng thứ hạng và tiếp cận khách hàng tiềm năng.",
    image: "/seo-service.jpg",
    price: "10.000.000",
    duration: "Theo tháng",
    minPrice: "10.000.000 VNĐ",
  },
  {
    id: 5,
    title: "Thiết kế logo và bộ nhận diện",
    category: "Design",
    status: "Completed",
    description: "Xây dựng logo và hệ thống nhận diện thương hiệu chuyên nghiệp, ấn tượng và khác biệt.",
    image: "/branding-design.jpg",
    price: "Theo dự án",
    duration: "Theo dự án",
    minPrice: "5.000.000 VNĐ",
  },
];

export function ServiceShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All services");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { t, language } = useLanguage();

  const filteredServices = mockupServices.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All services" || service.category === selectedCategory;
    const matchesStatus = selectedStatus === "All Status" || service.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Custom":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t.services.title.split(" ")[0]} <span className="text-primary">{t.services.title.split(" ")[1]}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.services.subtitle}</p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={t.services.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border text-foreground placeholder-muted-foreground"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {serviceCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {serviceStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground border-border"}`}
            >
              {t.common.grid}
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-transparent text-muted-foreground border-border"}`}
            >
              {t.common.list}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Services Grid/List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={viewMode === "list" ? "w-full" : ""}
          >
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                    {service.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-2">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground">Giá gói</p>
                      <p className="text-foreground font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-muted-foreground">Thời gian</p>
                      <p className="text-foreground font-semibold">{service.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Từ</p>
                    <p className="text-foreground font-semibold">{service.minPrice}</p>
                  </div>
                  <Link href={`/services/${service.id}`} passHref>
                    <Button className="bg-primary hover:bg-primary/80">Xem chi tiết</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredServices.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            {language === "vi"
              ? "Không tìm thấy dịch vụ phù hợp với tiêu chí của bạn."
              : "No services found matching your criteria."}
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All services");
              setSelectedStatus("All Status");
            }}
            className="mt-4 bg-primary hover:bg-primary/80"
          >
            {t.products.clearFilters}
          </Button>
        </motion.div>
      )}
    </div>
  );
}