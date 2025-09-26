import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

// Bạn có thể tạo các component Header và Footer riêng để tái sử dụng
// Nhưng ở đây tôi sẽ viết đầy đủ để bạn dễ dàng dán vào file page.tsx

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto">
          <Card className="w-full border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Phần thông tin liên hệ bên trái */}
              <div className="p-10 lg:p-16 bg-primary/5 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none flex flex-col justify-center">
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Kết nối với chúng tôi
                </CardTitle>
                <p className="text-lg text-muted-foreground mb-8">
                  Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Địa chỉ văn phòng</h4>
                      <p className="text-sm text-muted-foreground">180A, Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, TP.HCM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Hotline</h4>
                      <p className="text-sm text-muted-foreground">(+84) 937 667 945</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-muted-foreground">hello@s17.vn</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phần Form bên phải */}
              <CardContent className="p-6 md:p-10 lg:p-16">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và Tên</Label>
                      <Input id="name" placeholder="Nguyễn Văn A" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input id="phone" type="tel" placeholder="0901234567" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@s17.vn" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Bạn quan tâm đến dịch vụ nào?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn dịch vụ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marketing">Chăm sóc Kênh truyền thông</SelectItem>
                        <SelectItem value="website">Thiết kế & Xây dựng Website</SelectItem>
                        <SelectItem value="branding">Thiết kế Logo & Nhận diện thương hiệu</SelectItem>
                        <SelectItem value="video">Sản xuất Video & TVC</SelectItem>
                        <SelectItem value="event">Tổ chức sự kiện</SelectItem>
                        <SelectItem value="other">Khác</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Nội dung</Label>
                    <Textarea id="message" placeholder="Chi tiết yêu cầu của bạn..." rows={4} required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Tôi đồng ý với các điều khoản và chính sách.
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="px-8 py-6 text-base font-semibold">
                      Gửi yêu cầu
                    </Button>
                  </div>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}