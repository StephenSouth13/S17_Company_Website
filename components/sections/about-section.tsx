import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, TrendingUp, Shield } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Tầm nhìn rõ ràng",
      description: "Trở thành nền tảng thương mại điện tử và đầu tư hàng đầu Việt Nam",
    },
    {
      icon: Users,
      title: "Đội ngũ chuyên nghiệp",
      description: "Hơn 50 chuyên gia giàu kinh nghiệm trong lĩnh vực thương mại và đầu tư",
    },
    {
      icon: TrendingUp,
      title: "Tăng trưởng bền vững",
      description: "Cam kết mang lại giá trị lâu dài cho khách hàng và đối tác",
    },
    {
      icon: Shield,
      title: "Uy tín đáng tin cậy",
      description: "Được chứng nhận và giám sát bởi các cơ quan quản lý nhà nước",
    },
  ]

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Về <span className="gradient-text">S17 Trading</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Chúng tôi là đối tác tin cậy, mang đến những giải pháp thương mại điện tử và đầu tư tối ưu cho khách hàng
              trên toàn quốc.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 border-border/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Sứ mệnh của chúng tôi</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Tạo ra một hệ sinh thái thương mại điện tử và đầu tư toàn diện, nơi mọi khách hàng đều có thể tiếp cận
              những sản phẩm chất lượng cao và các cơ hội đầu tư sinh lời một cách dễ dàng và an toàn.
            </p>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 bg-transparent">
              Tìm hiểu thêm về chúng tôi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
