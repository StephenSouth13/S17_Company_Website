"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Star, ShoppingCart, Eye, Heart, Grid3X3, List, Search } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/components/cart/cart-context"

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
  category: string;
  description: string;
  specs: string[];
  inStock: boolean;
}

// Khôi phục mảng mockup từ FeaturedProducts
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cơm khay",
    price: "42.000 - 49.000",
    originalPrice: null,
    rating: 4.8,
    reviews: 25,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Đồ ăn thuần thực vật",
    category: "Cơm",
    description: "Cơm khay dùng ngay. Có 2 loại: cơm trắng & cơm gạo lứt",
    specs: ["Gạo lứt", "Cơm", "Thuần chay"],
    inStock: true,
  },
  {
    id: 2,
    name: "Thực phẩm thuần thực vật",
    price: "18.000 - 55.000",
    originalPrice: null,
    rating: 4.5,
    reviews: 40,
    image: "https://images.unsplash.com/photo-1629853316148-5c4d0e6c6411?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Sản phẩm lon",
    category: "Thực phẩm đóng gói",
    description: "Các sản phẩm lon có thể dùng ngày. Thời hạn sử dụng: 12 tháng từ ngày sản xuất",
    specs: ["Sản phẩm lon", "Đồ ăn vặt", "Thuần chay"],
    inStock: true,
  },
  {
    id: 3,
    name: "Trà trái cây",
    price: "25.000 - 45.000",
    originalPrice: null,
    rating: 4.9,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1596803244243-774b76a086de?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Trà trái cây",
    category: "Thức uống",
    description: "Trà trái cây làm từ trái cây ngâm tự nhiên, không sử dụng syrup",
    specs: ["Thức uống", "Trà", "Giải khát"],
    inStock: true,
  },
  {
    id: 4,
    name: "Bánh ngọt thuần chay",
    price: "35.000 - 60.000",
    originalPrice: "70.000",
    rating: 4.7,
    reviews: 30,
    image: "https://images.unsplash.com/photo-1579782537021-39626b911765?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Bánh ngọt",
    category: "Bánh",
    description: "Bánh ngọt làm từ nguyên li���u tự nhiên, không sữa, không trứng",
    specs: ["Không sữa", "Không trứng", "Tráng miệng"],
    inStock: true,
  },
  {
    id: 5,
    name: "Kem thuần thực vật",
    price: "20.000 - 50.000",
    originalPrice: null,
    rating: 4.6,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1589110467000-84561025a176?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Kem lạnh",
    category: "Tráng miệng",
    description: "Kem làm từ sữa dừa và các loại hạt, không chất bảo quản",
    specs: ["Không sữa", "Kem", "Giải khát"],
    inStock: true,
  },
  {
    id: 6,
    name: "Pizza chay",
    price: "80.000 - 120.000",
    originalPrice: null,
    rating: 4.9,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1596160565863-71f65d1d64c1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Đồ ăn nhanh",
    category: "Món chính",
    description: "Pizza với đế làm từ lúa mì nguyên cám và topping rau củ tươi ngon",
    specs: ["Bánh", "Món chính", "Thực vật"],
    inStock: true,
  },
  {
    id: 7,
    name: "Đậu phụ chiên sả ớt",
    price: "35.000",
    originalPrice: null,
    rating: 4.7,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1629853316148-5c4d0e6c6411?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Món ăn kèm",
    category: "Món ăn kèm",
    description: "Đậu phụ chiên giòn, tẩm ướp sả ớt đậm đà, thơm ngon",
    specs: ["Đậu phụ", "Món ăn kèm", "Gia vị"],
    inStock: true,
  },
  {
    id: 8,
    name: "Bún riêu chay",
    price: "45.000",
    originalPrice: null,
    rating: 4.8,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1596160565863-71f65d1d64c1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    badge: "Món nước",
    category: "Món nước",
    description: "Bún riêu chay thơm ngon chuẩn vị, với nước dùng thanh ngọt từ rau củ",
    specs: ["Bún", "Món nước", "Món truyền thống"],
    inStock: true,
  },
]; 

export function ProductCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")
  
  // Khởi tạo trạng thái sản phẩm với mảng mockup trống
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);

  const { dispatch } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseInt(a.price.split('-')[0].replace(/,/g, "")) - Number.parseInt(b.price.split('-')[0].replace(/,/g, ""))
      case "price-high":
        return Number.parseInt(b.price.split('-')[0].replace(/,/g, "")) - Number.parseInt(a.price.split('-')[0].replace(/,/g, ""))
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return b.reviews - a.reviews
    }
  })

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Đồ ăn thuần thực vật":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Sản phẩm lon":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Trà trái cây":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }
  
  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Phổ biến nhất</SelectItem>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
              <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
              <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border border-border rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="h-8 w-8 p-0"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="h-8 w-8 p-0"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Hiển thị {sortedProducts.length} sản phẩm {searchQuery && `cho "${searchQuery}"`}
        </p>
      </div>

      {sortedProducts.length === 0 ? (
        <p className="text-center text-muted-foreground">Không tìm thấy sản phẩm nào.</p>
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
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
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary" className="bg-gray-500 text-white">
                          Hết hàng
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
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
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
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full" 
                      size="sm" 
                      disabled={!product.inStock}
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Thêm vào giỏ" : "Hết hàng"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 flex gap-2">
                          <Badge variant="secondary" className={getBadgeColor(product.badge)}>
                            {product.badge}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <Link href={`/products/${product.id}`}>
                            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-muted-foreground mt-2">{product.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.specs.map((spec, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4">
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
                            <span className="text-sm text-muted-foreground">({product.reviews} đánh giá)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary">{product.price}₫</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Button 
                            className="px-6" 
                            disabled={!product.inStock}
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            {product.inStock ? "Thêm vào giỏ" : "Hết hàng"}
                          </Button>
                          <Button variant="outline" size="sm" className="h-9 w-9 p-0 bg-transparent">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-9 w-9 p-0 bg-transparent">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </>
      )}

      {/* Phân trang */}
      <div className="flex justify-center items-center space-x-2 pt-8">
        <Button variant="outline" size="sm" disabled>
          Trước
        </Button>
        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm" disabled>
          Sau
        </Button>
      </div>
    </div>
  )
}
