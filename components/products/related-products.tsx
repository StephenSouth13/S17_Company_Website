import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

export function RelatedProducts() {
  const relatedProducts = [
    {
      id: 2,
      name: "MacBook Air M3 13-inch",
      price: "28,990,000",
      originalPrice: "31,990,000",
      rating: 4.7,
      reviews: 89,
      image: "/macbook-air-m3-silver.jpg",
      badge: "Giảm giá",
      discount: "9%",
    },
    {
      id: 3,
      name: "iPad Pro 12.9-inch M2",
      price: "28,990,000",
      originalPrice: null,
      rating: 4.8,
      reviews: 145,
      image: "/ipad-pro-12-9-m2.jpg",
      badge: "Cao cấp",
      discount: null,
    },
    {
      id: 4,
      name: "iPhone 15 Pro Max",
      price: "34,990,000",
      originalPrice: null,
      rating: 4.8,
      reviews: 234,
      image: "/iphone-15-pro-max-titanium.png",
      badge: "Bán chạy",
      discount: null,
    },
    {
      id: 5,
      name: "Apple Studio Display",
      price: "42,990,000",
      originalPrice: null,
      rating: 4.6,
      reviews: 67,
      image: "/apple-studio-display.jpg",
      badge: "Chuyên nghiệp",
      discount: null,
    },
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Giảm giá":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Cao cấp":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
      case "Bán chạy":
        return "bg-primary/10 text-primary border-primary/20"
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
                  {product.discount && (
                    <Badge variant="destructive" className="bg-red-500 text-white">
                      -{product.discount}
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
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
