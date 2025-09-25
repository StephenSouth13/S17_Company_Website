"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react"

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Dữ liệu mockup mới
  const product = {
    id: 1,
    name: "Cơm khay thuần thực vật",
    price: "42,000",
    originalPrice: "49,000",
    rating: 5,
    reviews: 10,
    images: [
      "/com-khay-mockup-1.jpg",
      "/com-khay-mockup-2.jpg",
      "/com-khay-mockup-3.jpg",
    ],
    badge: "Đồ ăn thuần thực vật",
    description: "Cơm khay dùng ngay. Có 2 loại: cơm trắng & cơm gạo lứt.",
    specs: [
      { label: "Loại", value: "Cơm trắng & Cơm gạo lứt" },
      { label: "Bảo quản", value: "Ngăn mát tủ lạnh" },
      { label: "Hạn sử dụng", value: "24 giờ từ ngày sản xuất" },
      { label: "Ghi chú", value: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm" },
    ],
    inStock: true,
    warranty: "Không áp dụng",
    shipping: "Giao ngay trong nội thành (áp dụng cho đơn hàng dưới 10 khay)",
    returnPolicy: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm",
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Đồ ăn thuần thực vật":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-card">
          <img
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.originalPrice && (
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="bg-red-500 text-white">
                Giảm giá
              </Badge>
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className={getBadgeColor(product.badge)}>
              {product.badge}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} đánh giá)</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-primary">{product.price}₫</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">{product.originalPrice}₫</span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{product.description}</p>

        {/* Quantity and Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Số lượng:</span>
            <div className="flex items-center border border-border rounded-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="h-10 w-10 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
              <Button variant="ghost" size="sm" onClick={() => handleQuantityChange(1)} className="h-10 w-10 p-0">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 animate-glow" disabled={!product.inStock}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
            </Button>
            <Button variant="outline" size="lg" className="px-6 bg-transparent">
              <Heart className="h-5 w-5 mr-2" />
              Yêu thích
            </Button>
            <Button variant="outline" size="lg" className="px-6 bg-transparent">
              <Share2 className="h-5 w-5 mr-2" />
              Chia sẻ
            </Button>
          </div>
        </div>

        {/* Features */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Bảo hành</p>
                  <p className="text-xs text-muted-foreground">{product.warranty}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Giao hàng</p>
                  <p className="text-xs text-muted-foreground">{product.shipping}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Đổi trả</p>
                  <p className="text-xs text-muted-foreground">{product.returnPolicy}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="specs">Thông số</TabsTrigger>
            <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
          </TabsList>
          <TabsContent value="specs" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-border/50 pb-2 last:border-b-0"
                    >
                      <span className="text-sm font-medium text-muted-foreground">{spec.label}:</span>
                      <span className="text-sm text-foreground text-right max-w-xs">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Đánh giá sẽ được hiển thị ở đây</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}