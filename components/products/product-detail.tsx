"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react"
import Image from "next/image"

// Import dữ liệu từ file bạn đã tạo
import { allProducts } from "@/data/products-data"

interface ProductDetailProps {
  productId: number
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Tìm sản phẩm dựa trên productId được truyền vào
  const product = allProducts.find(p => p.id === productId);

  // Nếu không tìm thấy sản phẩm, hiển thị thông báo lỗi
  if (!product) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">Không tìm thấy sản phẩm</h1>
        <p className="text-muted-foreground mt-4">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      </div>
    );
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

  // Dữ liệu bổ sung cho từng sản phẩm
  const productDetails = {
    1: { // Cơm khay
      originalPrice: "49,000",
      images: [
        "/images/com-khay.jpg", // Sử dụng hình ảnh từ dữ liệu
      ],
      rating: 5,
      reviews: 10,
      inStock: true,
      warranty: "Không áp dụng",
      shipping: "Giao ngay trong nội thành (áp dụng cho đơn hàng dưới 10 khay)",
      returnPolicy: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm",
      specs: [
        { label: "Loại", value: "Cơm trắng & Cơm gạo lứt" },
        { label: "Bảo quản", value: "Ngăn mát tủ lạnh" },
        { label: "Hạn sử dụng", value: "24 giờ từ ngày sản xuất" },
        { label: "Ghi chú", value: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm" },
      ]
    },
    2: { // Thực phẩm thuần thực vật
      originalPrice: null,
      images: [
        "/images/thuc-pham-chay.jpg",
      ],
      rating: 4,
      reviews: 5,
      inStock: true,
      warranty: "Không áp dụng",
      shipping: "Giao ngay trong nội thành (áp dụng cho đơn hàng dưới 10 lon)",
      returnPolicy: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm",
      specs: [
        { label: "Loại", value: "Sản phẩm lon" },
        { label: "Bảo quản", value: "Nơi khô ráo, thoáng mát" },
        { label: "Hạn sử dụng", value: "12 tháng từ ngày sản xuất" },
        { label: "Ghi chú", value: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm" },
      ]
    },
    3: { // Trà trái cây
      originalPrice: "45,000",
      images: [
        "/images/tra-trai-cay.jpg",
      ],
      rating: 5,
      reviews: 8,
      inStock: true,
      warranty: "Không áp dụng",
      shipping: "Giao ngay trong nội thành (áp dụng cho đơn hàng dưới 10 ly)",
      returnPolicy: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm",
      specs: [
        { label: "Loại", value: "Trà trái cây ngâm tự nhiên" },
        { label: "Bảo quản", value: "Ngăn mát tủ lạnh" },
        { label: "Hạn sử dụng", value: "Trong ngày" },
        { label: "Ghi chú", value: "Đổi trả hoàn tiền khi có dấu hiệu hư hỏng của sản phẩm" },
      ]
    }
  };

  const currentProductDetails = productDetails[product.id as keyof typeof productDetails] || {};
  const getFormattedPrice = (price: number | string) => {
    return new Intl.NumberFormat("vi-VN").format(Number(price)) + "₫";
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-card">
          <Image
            src={currentProductDetails.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          {currentProductDetails.originalPrice && (
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="bg-red-500 text-white">
                Giảm giá
              </Badge>
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {currentProductDetails.images.map((image, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index ? "border-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                layout="fill"
                objectFit="cover"
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
            {product.badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className={getBadgeColor(badge)}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(currentProductDetails.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({currentProductDetails.reviews} đánh giá)</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-primary">{getFormattedPrice(product.price)}</span>
            {currentProductDetails.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">{currentProductDetails.originalPrice}₫</span>
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
            <Button size="lg" className="flex-1 animate-glow" disabled={!currentProductDetails.inStock}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              {currentProductDetails.inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
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
                  <p className="text-xs text-muted-foreground">{currentProductDetails.warranty}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Giao hàng</p>
                  <p className="text-xs text-muted-foreground">{currentProductDetails.shipping}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Đổi trả</p>
                  <p className="text-xs text-muted-foreground">{currentProductDetails.returnPolicy}</p>
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
                  {currentProductDetails.specs.map((spec, index) => (
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