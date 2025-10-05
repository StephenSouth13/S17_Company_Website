import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    // ĐÃ SỬA: Giảm padding dọc (py) của section từ py-20 md:py-32 xuống py-16 md:py-24
    <section className="py-16 md:py-24 bg-background dark:bg-gray-950"> 
      <div className="container mx-auto px-4">
        
        {/* ĐÃ SỬA: Giảm space-y từ space-y-12 xuống space-y-8 */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          
          {/* Main CTA */}
          <div className="space-y-1"> {/* ĐÃ SỬA: Giảm space-y từ 6 xuống 4 */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground dark:text-white">
              Sẵn sàng bắt đầu <span className="text-[#0077C8]">hành trình</span> của bạn?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tham gia cùng hàng nghìn khách hàng đã tin tưởng Trung tâm phát triển S17 để phát triển tài chính và kinh doanh của họ.
            </p>
          </div>

          {/* Newsletter Signup Box */}
          <div 
            // ĐÃ SỬA: Giảm padding của hộp từ p-8 md:p-14 xuống p-6 md:p-10
            className="bg-card dark:bg-gray-800 rounded-3xl p-6 md:p-10 space-y-6 
                       shadow-2xl shadow-primary/10 dark:shadow-primary/5" 
          >
            <div className="space-y-3"> {/* ĐÃ SỬA: Giảm space-y từ 4 xuống 3 */}
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-7 w-7 text-[#FFD06D]" /> 
                <h3 className="text-2xl font-bold text-foreground dark:text-white">Đăng ký nhận thông tin độc quyền</h3>
              </div>
              <p className="text-base text-muted-foreground max-w-lg mx-auto">
                Nhận những cập nhật mới nhất về Sản phẩm, Dịch Vụ và ưu đãi đặc biệt từ S17.
              </p>
            </div>

            {/* Form Input (Không đổi nhiều) */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 h-12 bg-background dark:bg-gray-700 border border-primary/50 text-base" 
              />
              <Button className="px-8 h-12 text-lg font-semibold bg-[#0077C8] hover:bg-[#005ea3] transition-colors">
                Đăng ký
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-1"> {/* ĐÃ SỬA: Giảm pt-2 xuống pt-1 */}
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <a href="/privacy" className="text-[#0077C8] font-medium hover:underline">
                Chính sách bảo mật
              </a>{" "}
              của chúng tôi
            </p>
          </div>

          {/* Action Buttons */}
          {/* ĐÃ SỬA: Giảm padding top từ pt-8 xuống pt-6 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"> 
            <Button 
              size="lg" 
              className="px-4 py-1 h-14 text-xl font-bold bg-[#0077C8] hover:bg-[#005ea3] shadow-lg shadow-[#0077C8]/40 dark:shadow-[#0077C8]/20 transition duration-300"
            >
              Khám phá Dịch Vụ tại S17
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-3 h-14 text-xl font-bold border-2 border-[#FFD06D] text-foreground dark:text-white hover:bg-[#FFD06D]/10 bg-transparent transition duration-300"
            >
              Mua sắm ngay
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}