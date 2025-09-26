import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Sẵn sàng bắt đầu <span className="gradient-text">hành trình</span> của bạn?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tham gia cùng hàng nghìn khách hàng đã tin tưởng S17 Trading để phát triển tài chính và kinh doanh của họ.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card/50 rounded-2xl p-8 md:p-12 space-y-6 border border-border/50">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Đăng ký nhận thông tin</h3>
              </div>
              <p className="text-muted-foreground">
                Nhận những cập nhật mới nhất về sản phẩm, Dịch Vụ đầu tư và ưu đãi đặc biệt
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 bg-background border-border/50 focus:border-primary"
              />
              <Button className="px-6">
                Đăng ký
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Chính sách bảo mật
              </a>{" "}
              của chúng tôi
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold animate-glow">
              Khám phá Dịch Vụ đầu tư
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-primary/20 hover:bg-primary/10 bg-transparent"
            >
              Mua sắm ngay
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
