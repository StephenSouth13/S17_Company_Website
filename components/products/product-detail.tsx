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

  // Mock product data - in real app, fetch based on productId
  const product = {
    id: 1,
    name: "MacBook Pro 16-inch M3 Max",
    price: "89,990,000",
    originalPrice: "94,990,000",
    rating: 4.9,
    reviews: 156,
    images: [
      "/macbook-pro-16-m3-max.jpg",
      "/macbook-pro-16-m3-max-side.jpg",
      "/macbook-pro-16-m3-max-keyboard.jpg",
      "/macbook-pro-16-m3-max-ports.jpg",
    ],
    badge: "Mới nhất",
    discount: "5%",
    category: "Laptop",
    brand: "Apple",
    description:
      "MacBook Pro 16-inch với chip M3 Max mang đến hiệu suất vượt trội cho các tác vụ chuyên nghiệp. Màn hình Liquid Retina XDR 16.2 inch với độ sáng lên đến 1600 nits, hỗ trợ dải màu P3 rộng và HDR10.",
    specs: [
      { label: "Chip", value: "Apple M3 Max với CPU 12 lõi và GPU 38 lõi" },
      { label: "Bộ nhớ", value: "32GB RAM thống nhất" },
      { label: "Lưu trữ", value: "1TB SSD" },
      { label: "Màn hình", value: "16.2 inch Liquid Retina XDR (3456 x 2234)" },
      { label: "Pin", value: "Lên đến 22 giờ phát video" },
      { label: "Trọng lượng", value: "2.16 kg" },
    ],
    features: [
      "Chip M3 Max với hiệu suất vượt trội",
      "Màn hình Liquid Retina XDR 16.2 inch",
      "Hệ thống âm thanh 6 loa với Spatial Audio",
      "Camera FaceTime HD 1080p",
      "Touch ID tích hợp",
      "Bàn phím Magic Keyboard có đèn nền",
    ],
    inStock: true,
    warranty: "12 tháng chính hãng Apple",
    shipping: "Miễn phí giao hàng toàn quốc",
    returnPolicy: "Đổi trả trong 30 ngày",
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
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
          {product.discount && (
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="bg-red-500 text-white">
                -{product.discount}
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
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {product.badge}
            </Badge>
            <span className="text-sm text-muted-foreground">{product.category}</span>
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
            <span className="text-sm text-muted-foreground">Thương hiệu: {product.brand}</span>
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
          {product.discount && (
            <p className="text-sm text-green-600">
              Tiết kiệm{" "}
              {(
                (Number.parseInt(product.originalPrice?.replace(/,/g, "") || "0") -
                  Number.parseInt(product.price.replace(/,/g, ""))) /
                1000000
              ).toFixed(1)}
              M VNĐ
            </p>
          )}
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specs">Thông số kỹ thuật</TabsTrigger>
            <TabsTrigger value="features">Tính năng</TabsTrigger>
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
          <TabsContent value="features" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
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
