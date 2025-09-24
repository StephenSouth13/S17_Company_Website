"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, TrendingUp, ShieldCheck, Rocket, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "2020",
      title: "Khởi nguồn",
      description: "S17 ra đời từ cộng đồng doanh nhân – doanh nghiệp với khát vọng đổi mới và hợp tác chiến lược.",
      icon: <Rocket className="w-6 h-6 text-primary" />,
    },
    {
      year: "2022",
      title: "Mở rộng hệ sinh thái",
      description: "Phát triển mạnh mẽ các giải pháp thương mại điện tử và đầu tư hiện đại, tối ưu cho khách hàng.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
    },
    {
      year: "2024",
      title: "Khẳng định uy tín",
      description: "Được đồng hành, chứng nhận và giám sát bởi các tổ chức, cơ quan quản lý và cộng đồng doanh nghiệp.",
      icon: <Award className="w-6 h-6 text-primary" />,
    },
    {
      year: "2025+",
      title: "Vươn ra toàn cầu",
      description: "Trở thành bệ phóng quốc tế cho ý tưởng, sản phẩm và con người dám mơ lớn, khẳng định vị thế mới.",
      icon: <Globe className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Về S17 Trading
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            S17 được sáng lập bởi cộng đồng doanh nhân – doanh nghiệp cùng đội ngũ tiên phong từ nhiều lĩnh vực. 
            Chúng tôi xây dựng mạng lưới hợp tác chiến lược, mở ra cơ hội bứt phá, mang đến giải pháp thương mại điện tử 
            và đầu tư hiện đại, tối ưu cho khách hàng.
          </motion.p>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition bg-card">
            <CardContent className="p-6 text-center space-y-4">
              <Building2 className="w-10 h-10 mx-auto text-primary" />
              <h3 className="font-semibold text-xl">Tầm nhìn đột phá</h3>
              <p className="text-muted-foreground text-sm">
                Trở thành bệ phóng cho những ý tưởng, sản phẩm và con người dám mơ lớn, khẳng định vị thế trên thị trường trong nước.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition bg-card">
            <CardContent className="p-6 text-center space-y-4">
              <Users className="w-10 h-10 mx-auto text-primary" />
              <h3 className="font-semibold text-xl">Đội ngũ tiên phong</h3>
              <p className="text-muted-foreground text-sm">
                Quy tụ chuyên gia, doanh nhân và đối tác chiến lược từ nhiều lĩnh vực, mang đến tri thức, kinh nghiệm và sức mạnh cộng hưởng.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition bg-card">
            <CardContent className="p-6 text-center space-y-4">
              <TrendingUp className="w-10 h-10 mx-auto text-primary" />
              <h3 className="font-semibold text-xl">Tăng trưởng bền vững</h3>
              <p className="text-muted-foreground text-sm">
                Cam kết tạo ra giải pháp đột phá, sản phẩm chất lượng, dịch vụ tin cậy, góp phần kiến tạo giá trị lâu dài.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition bg-card">
            <CardContent className="p-6 text-center space-y-4">
              <ShieldCheck className="w-10 h-10 mx-auto text-primary" />
              <h3 className="font-semibold text-xl">Uy tín & Tin cậy</h3>
              <p className="text-muted-foreground text-sm">
                Đồng hành, chứng nhận và giám sát bởi các tổ chức, cơ quan quản lý và cộng đồng doanh nghiệp – bảo chứng minh bạch và bền vững.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sứ mệnh */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sứ mệnh của chúng tôi
          </motion.h2>

          <ul className="space-y-6 text-lg text-muted-foreground">
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              🌱 S17 là tổ chức phát triển bền vững và truyền thừa
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🎯 S17 là môi trường coaching và mentoring
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              📚 S17 là môi trường học tập và nỗ lực suốt đời
            </motion.li>
          </ul>
        </div>
      </section>

      {/* Timeline phát triển */}
      <section className="py-20 container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hành trình phát triển
        </motion.h2>

        <div className="relative border-l border-border/50 ml-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white ring-8 ring-background">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold">{item.year} – {item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
