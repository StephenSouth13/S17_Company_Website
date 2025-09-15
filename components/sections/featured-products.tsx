import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye, Heart } from "lucide-react"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Laptop Gaming ROG Strix",
      price: "45,990,000",
      originalPrice: "52,990,000",
      rating: 4.8,
      reviews: 124,
      image: "/gaming-laptop-with-rgb-lighting.jpg",
      badge: "Bán chạy",
      discount: "13%",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: "34,990,000",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "/iphone-15-pro-max-titanium.png",
      badge: "Mới nhất",
      discount: null,
    },
    {
      id: 3,
      name: "MacBook Air M3",
      price: "28,990,000",
      originalPrice: "31,990,000",
      rating: 4.7,
      reviews: 156,
      image: "/macbook-air-m3-silver.jpg",
      badge: "Giảm giá",
      discount: "9%",
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      price: "29,990,000",
      originalPrice: null,
      rating: 4.6,
      reviews: 203,
      image: "/samsung-galaxy-s24-ultra-black.jpg",
      badge: "Cao cấp",
      discount: null,
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Sản phẩm <span className="gradient-text">nổi bật</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Khám phá những sản phẩm công nghệ hàng đầu với chất lượng được đảm bảo và giá cả cạnh tranh nhất thị
              trường.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
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
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  </div>
                  {product.discount && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="destructive" className="bg-red-500 text-white">
                        -{product.discount}
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
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

          {/* View All Button */}
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10 bg-transparent">
              Xem tất cả sản phẩm
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
