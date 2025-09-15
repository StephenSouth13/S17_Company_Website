"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/components/cart/cart-context"
import { User, MapPin, CreditCard, Truck, Shield, Gift, CheckCircle, Clock, Package } from "lucide-react"

export function CheckoutForm() {
  const { state } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState({
    // Customer Info
    fullName: "",
    email: "",
    phone: "",

    // Shipping Address
    address: "",
    city: "",
    district: "",
    ward: "",

    // Payment
    paymentMethod: "cod",

    // Additional
    notes: "",
    saveInfo: false,
    agreeTerms: false,
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price)
  }

  const shippingFee = 0
  const tax = Math.round(state.total * 0.1) // 10% VAT
  const finalTotal = state.total + shippingFee + tax

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeTerms) {
      alert("Vui lòng đồng ý với điều khoản và điều kiện")
      return
    }

    setIsProcessing(true)
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
    setCurrentStep(4) // Success step
  }

  const steps = [
    { id: 1, name: "Thông tin", icon: User },
    { id: 2, name: "Giao hàng", icon: Truck },
    { id: 3, name: "Thanh toán", icon: CreditCard },
    { id: 4, name: "Hoàn tất", icon: CheckCircle },
  ]

  if (currentStep === 4) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-green-600">Đặt hàng thành công!</h2>
          <p className="text-muted-foreground">
            Cảm ơn bạn đã mua sắm tại S17 Trading. Đơn hàng của bạn đang được xử lý.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Mã đơn hàng:</span>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                #S17-{Date.now().toString().slice(-6)}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Tổng tiền:</span>
              <span className="font-bold text-primary">{formatPrice(finalTotal)}₫</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Phương thức thanh toán:</span>
              <span>Thanh toán khi nhận hàng</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Thời gian giao hàng dự kiến:</span>
              <span>2-3 ngày làm việc</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Theo dõi đơn hàng</Button>
          <Button variant="outline" size="lg">
            Tiếp tục mua sắm
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Checkout Form */}
      <div className="lg:col-span-2 space-y-6">
        {/* Progress Steps */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {step.name}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 ${currentStep > step.id ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Thông tin khách hàng</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Họ và tên *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Địa chỉ giao hàng</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Địa chỉ cụ thể *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Số nhà, tên đường..."
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Tỉnh/Thành phố *</Label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tỉnh/thành" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                      <SelectItem value="hanoi">Hà Nội</SelectItem>
                      <SelectItem value="danang">Đà Nẵng</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">Quận/Huyện *</Label>
                  <Select
                    value={formData.district}
                    onValueChange={(value) => setFormData({ ...formData, district: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn quận/huyện" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="q1">Quận 1</SelectItem>
                      <SelectItem value="q3">Quận 3</SelectItem>
                      <SelectItem value="q7">Quận 7</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ward">Phường/Xã *</Label>
                  <Select value={formData.ward} onValueChange={(value) => setFormData({ ...formData, ward: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn phường/xã" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="p1">Phường 1</SelectItem>
                      <SelectItem value="p2">Phường 2</SelectItem>
                      <SelectItem value="p3">Phường 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Phương thức thanh toán</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                  <RadioGroupItem value="cod" id="cod" />
                  <div className="flex-1">
                    <Label htmlFor="cod" className="font-medium cursor-pointer">
                      Thanh toán khi nhận hàng (COD)
                    </Label>
                    <p className="text-sm text-muted-foreground">Thanh toán bằng tiền mặt khi nhận hàng</p>
                  </div>
                  <Package className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                  <RadioGroupItem value="bank" id="bank" />
                  <div className="flex-1">
                    <Label htmlFor="bank" className="font-medium cursor-pointer">
                      Chuyển khoản ngân hàng
                    </Label>
                    <p className="text-sm text-muted-foreground">Chuyển khoản qua ngân hàng hoặc ví điện tử</p>
                  </div>
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg opacity-50">
                  <RadioGroupItem value="card" id="card" disabled />
                  <div className="flex-1">
                    <Label htmlFor="card" className="font-medium cursor-pointer">
                      Thẻ tín dụng/ghi nợ
                    </Label>
                    <p className="text-sm text-muted-foreground">Sắp ra mắt - Thanh toán bằng thẻ Visa, Mastercard</p>
                  </div>
                  <Shield className="h-5 w-5 text-muted-foreground" />
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gift className="h-5 w-5" />
                <span>Ghi chú đơn hàng</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notes">Ghi chú (tùy chọn)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ghi chú về đơn hàng, yêu cầu đặc biệt..."
                  rows={3}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={(checked) => setFormData({ ...formData, saveInfo: checked as boolean })}
                  />
                  <Label htmlFor="saveInfo" className="text-sm">
                    Lưu thông tin để sử dụng cho lần mua hàng tiếp theo
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                    required
                  />
                  <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                    Tôi đồng ý với{" "}
                    <Button variant="link" className="p-0 h-auto text-sm text-primary hover:underline">
                      Điều khoản và điều kiện
                    </Button>{" "}
                    và{" "}
                    <Button variant="link" className="p-0 h-auto text-sm text-primary hover:underline">
                      Chính sách bảo mật
                    </Button>
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full animate-glow"
            disabled={isProcessing || !formData.agreeTerms}
          >
            {isProcessing ? (
              <>
                <Clock className="h-5 w-5 mr-2 animate-spin" />
                Đang xử lý...
              </>
            ) : (
              <>
                Đặt hàng
                <CheckCircle className="h-5 w-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Tóm tắt đơn hàng</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Order Items */}
            <div className="space-y-3">
              {state.items.map((item) => (
                <div key={item.id} className="flex space-x-3">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground">
                      {item.quantity}
                    </Badge>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                    <p className="text-sm text-primary font-medium">{item.price}₫</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Pricing Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Tạm tính ({state.itemCount} sản phẩm):</span>
                <span>{formatPrice(state.total)}₫</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Phí vận chuyển:</span>
                <span className="text-green-600">Miễn phí</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>VAT (10%):</span>
                <span>{formatPrice(tax)}₫</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Tổng cộng:</span>
                <span className="text-primary">{formatPrice(finalTotal)}₫</span>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span className="font-medium">Miễn phí vận chuyển</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Giao hàng trong 2-3 ngày làm việc</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Bảo hành chính hãng</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
