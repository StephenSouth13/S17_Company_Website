import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Calendar, Users, DollarSign } from "lucide-react"

export function InvestmentProjects() {
  const projects = [
    {
      id: 1,
      title: "Dự án Bất động sản Eco Green",
      description: "Khu đô thị sinh thái hiện đại tại TP.HCM với tiềm năng tăng trưởng cao",
      image: "/modern-eco-friendly-residential-complex.jpg",
      targetAmount: "50,000,000,000",
      currentAmount: "35,000,000,000",
      progress: 70,
      roi: "18-22%",
      duration: "24 tháng",
      investors: 156,
      status: "Đang gọi vốn",
      risk: "Thấp",
    },
    {
      id: 2,
      title: "Startup Công nghệ FinTech",
      description: "Nền tảng thanh toán số và quản lý tài chính cá nhân thế hệ mới",
      image: "/fintech-mobile-app.png",
      targetAmount: "20,000,000,000",
      currentAmount: "18,500,000,000",
      progress: 92,
      roi: "25-35%",
      duration: "18 tháng",
      investors: 89,
      status: "Sắp đóng",
      risk: "Trung bình",
    },
    {
      id: 3,
      title: "Nhà máy Năng lượng Mặt trời",
      description: "Dự án điện mặt trời quy mô lớn tại Ninh Thuận với công suất 100MW",
      image: "/solar-panel-farm-with-blue-sky.jpg",
      targetAmount: "80,000,000,000",
      currentAmount: "24,000,000,000",
      progress: 30,
      roi: "15-18%",
      duration: "36 tháng",
      investors: 234,
      status: "Mới mở",
      risk: "Thấp",
    },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Thấp":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Trung bình":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "Cao":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Mới mở":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Đang gọi vốn":
        return "bg-primary/10 text-primary border-primary/20"
      case "Sắp đóng":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Dự án <span className="gradient-text">đầu tư</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tham gia các dự án đầu tư được chọn lọc kỹ càng với tiềm năng sinh lời cao và rủi ro được kiểm soát.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border/50 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="secondary" className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className={getRiskColor(project.risk)}>
                      Rủi ro {project.risk}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tiến độ gọi vốn</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{(Number.parseInt(project.currentAmount) / 1000000000).toFixed(1)}B VNĐ</span>
                      <span>{(Number.parseInt(project.targetAmount) / 1000000000).toFixed(1)}B VNĐ</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium text-primary">{project.roi}</div>
                        <div className="text-xs text-muted-foreground">ROI dự kiến</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      <div>
                        <div className="text-sm font-medium">{project.duration}</div>
                        <div className="text-xs text-muted-foreground">Thời gian</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.investors} nhà đầu tư</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Từ 10M VNĐ</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button className="w-full" size="sm">
                    Đầu tư ngay
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 bg-transparent">
              Xem tất cả dự án đầu tư
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
