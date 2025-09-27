"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/components/cart/cart-context"
import ContactForm from "@/components/contact/ContactForm_2";
// Định nghĩa kiểu dữ liệu cho sản phẩm
interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string | null;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  inStock: boolean;
  category: string;
  description: string;
  specs: string[];
}

export function FeaturedProducts() {
  const { dispatch } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: "Cơm khay",
      price: "42.000 - 49.000",
      originalPrice: null,
      rating: 4.8,
      reviews: 25,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Đồ ăn thuần thực vật",
      inStock: true,
      category: "Cơm",
      description: "Cơm khay dùng ngay. Có 2 loại: cơm trắng & cơm gạo lứt",
      specs: ["Gạo lứt", "Cơm", "Thuần chay"],
    },
    {
      id: 2,
      name: "Thực phẩm thuần thực vật",
      price: "18.000 - 55.000",
      originalPrice: null,
      rating: 4.5,
      reviews: 40,
      image: "https://images.unsplash.com/photo-1629853316148-5c4d0e6c6411?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Sản phẩm lon",
      inStock: true,
      category: "Thực phẩm đóng gói",
      description: "Các sản phẩm lon có thể dùng ngày. Thời hạn sử dụng: 12 tháng từ ngày sản xuất",
      specs: ["Sản phẩm lon", "Đồ ăn vặt", "Thuần chay"],
    },
    {
      id: 3,
      name: "Trà trái cây",
      price: "25.000 - 45.000",
      originalPrice: null,
      rating: 4.9,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1596803244243-774b76a086de?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Trà trái cây",
      inStock: true,
      category: "Thức uống",
      description: "Trà trái cây làm từ trái cây ngâm tự nhiên, không sử dụng syrup",
      specs: ["Thức uống", "Trà", "Giải khát"],
    },
    {
      id: 4,
      name: "Bánh ngọt thuần chay",
      price: "35.000 - 60.000",
      originalPrice: "70.000",
      rating: 4.7,
      reviews: 30,
      image: "https://images.unsplash.com/photo-1579782537021-39626b911765?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Bánh ngọt",
      inStock: true,
      category: "Bánh",
      description: "Bánh ngọt làm từ nguyên liệu tự nhiên, không sữa, không trứng",
      specs: ["Không sữa", "Không trứng", "Tráng miệng"],
    },
    {
      id: 5,
      name: "Kem thuần thực vật",
      price: "20.000 - 50.000",
      originalPrice: null,
      rating: 4.6,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1589110467000-84561025a176?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Kem lạnh",
      inStock: true,
      category: "Tráng miệng",
      description: "Kem làm từ sữa dừa và các loại hạt, không chất bảo quản",
      specs: ["Không sữa", "Kem", "Giải khát"],
    },
    {
      id: 6,
      name: "Pizza chay",
      price: "80.000 - 120.000",
      originalPrice: null,
      rating: 4.9,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1596160565863-71f65d1d64c1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Đồ ăn nhanh",
      inStock: true,
      category: "Món chính",
      description: "Pizza với đế làm từ lúa mì nguyên cám và topping rau củ tươi ngon",
      specs: ["Bánh", "Món chính", "Thực vật"],
    },
    {
      id: 7,
      name: "Đậu phụ chiên sả ớt",
      price: "35.000",
      originalPrice: null,
      rating: 4.7,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1629853316148-5c4d0e6c6411?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Món ăn kèm",
      inStock: true,
      category: "Món ăn kèm",
      description: "Đậu phụ chiên giòn, tẩm ướp sả ớt đậm đà, thơm ngon",
      specs: ["Đậu phụ", "Món ăn kèm", "Gia vị"],
    },
    {
      id: 8,
      name: "Bún riêu chay",
      price: "45.000",
      originalPrice: null,
      rating: 4.8,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1596160565863-71f65d1d64c1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Món nước",
      inStock: true,
      category: "Món nước",
      description: "Bún riêu chay thơm ngon chuẩn vị, với nước dùng thanh ngọt từ rau củ",
      specs: ["Bún", "Món nước", "Món truyền thống"],
    },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Đồ ăn thuần thực vật":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Sản phẩm lon":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Trà trái cây":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Bánh ngọt":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Kem lạnh":
        return "bg-pink-500/10 text-pink-500 border-pink-500/20";
      case "Đồ ăn nhanh":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "Món ăn kèm":
        return "bg-teal-500/10 text-teal-500 border-teal-500/20";
      case "Món nước":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto section-container">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Sản phẩm <span className="gradient-text">nổi bật</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Khám phá các sản phẩm thuần thực vật tươi ngon, chất lượng ��ược đảm bảo.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border/50 overflow-hidden flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className={getBadgeColor(product.badge)}>
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0" asChild>
                        <Link href={`/products/${product.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3 flex-grow">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
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
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row sm:gap-2 gap-2">
  {/* Thêm vào giỏ */}
  <Button
    className="w-full sm:w-1/2 flex items-center justify-center"
    size="sm"
    onClick={() => handleAddToCart(product)}
  >
    <ShoppingCart className="h-4 w-4 mr-2" />
    Thêm vào giỏ
  </Button>

  {/* Liên hệ */}
  <div className="w-full sm:w-1/2">
    <ContactForm triggerLabel="Liên hệ" />
  </div>
</CardFooter>

              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/10 bg-transparent"
            >
              <Link href="/products">
                Xem tất cả sản phẩm
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
