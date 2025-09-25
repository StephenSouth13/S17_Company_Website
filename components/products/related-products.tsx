import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function RelatedProducts() {
  const relatedProducts = [
    {
      id: 1,
      name: "Cơm Khay",
      price: "42.000",
      originalPrice: "49.000",
      rating: 5,
      reviews: 10,
      image: "/com-khay-mockup.jpg", // Thay đổi đường dẫn ảnh mockup
      badge: "Cơm khay",
      description: "Cơm khay dùng ngay. Có 2 loại: cơm trắng & cơm gạo lứt",
      inStock: true,
      notes: "Số lượng lớn hơn 10 khay, cần đặt trước để kiểm tra hàng tổn."
    },
    {
      id: 2,
      name: "Thực phẩm thuần thực vật",
      price: "18.000",
      originalPrice: "55.000",
      rating: 5,
      reviews: 15,
      image: "/thuc-pham-mockup.jpg", // Thay đổi đường dẫn ảnh mockup
      badge: "Đồ ăn thuần thực vật",
      description: "Các sản phẩm lon có thể dùng ngày. Thời hạn sử dụng: 12 tháng từ ngày sản xuất",
      inStock: true,
      notes: "Số lượng lớn hơn 10 lon, cần đặt trước để kiểm tra hàng tổn."
    },
    {
      id: 3,
      name: "Trà trái cây",
      price: "25.000",
      originalPrice: "45.000",
      rating: 5,
      reviews: 20,
      image: "/tra-trai-cay-mockup.jpg", // Thay đổi đường dẫn ảnh mockup
      badge: "Trà trái cây",
      description: "Trà trái cây làm từ trái cây ngâm tự nhiên, không sử dụng syrup",
      inStock: true,
      notes: "Số lượng lớn hơn 10 ly đặt sớm để giao kịp thời"
    },
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Cơm khay":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Đồ ăn thuần thực vật":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
      case "Trà trái cây":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <section className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Sản phẩm <span className="gradient-text">liên quan</span>
          </h2>
          <p className="text-muted-foreground">Khám phá những sản phẩm tương tự có thể bạn quan tâm</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border/50 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="secondary" className={getBadgeColor(product.badge)}>
                    {product.badge}
                  </Badge>
                  {product.originalPrice && (
                    <Badge variant="destructive" className="bg-red-500 text-white">
                      Giảm giá
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">{product.price}₫</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}₫</span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Thêm vào giỏ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 bg-transparent">
            Xem thêm sản phẩm
          </Button>
        </div>
      </div>
    </section>
  )
}