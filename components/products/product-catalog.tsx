"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Star, ShoppingCart, Eye, Heart, Grid3X3, List, Search } from "lucide-react"
import Link from "next/link"

export function ProductCatalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: 1,
      name: "MacBook Pro 16-inch M3 Max",
      price: "89,990,000",
      originalPrice: "94,990,000",
      rating: 4.9,
      reviews: 156,
      image: "/macbook-pro-16-m3-max.jpg",
      badge: "Mới nhất",
      discount: "5%",
      category: "Laptop",
      brand: "Apple",
      description: "Laptop cao cấp với chip M3 Max mạnh mẽ, màn hình Liquid Retina XDR 16.2 inch",
      specs: ["Chip M3 Max", "32GB RAM", "1TB SSD", "Màn hình 16.2 inch"],
      inStock: true,
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max 256GB",
      price: "34,990,000",
      originalPrice: null,
      rating: 4.8,
      reviews: 234,
      image: "/iphone-15-pro-max-titanium.png",
      badge: "Bán chạy",
      discount: null,
      category: "Điện thoại",
      brand: "Apple",
      description: "Smartphone cao cấp với khung Titanium, camera 48MP và chip A17 Pro",
      specs: ["A17 Pro", "256GB", "Camera 48MP", "Titanium"],
      inStock: true,
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: "29,990,000",
      originalPrice: "32,990,000",
      rating: 4.7,
      reviews: 189,
      image: "/samsung-galaxy-s24-ultra-black.jpg",
      badge: "Giảm giá",
      discount: "9%",
      category: "Điện thoại",
      brand: "Samsung",
      description: "Flagship Android với S Pen, camera 200MP và màn hình Dynamic AMOLED 2X",
      specs: ["Snapdragon 8 Gen 3", "12GB RAM", "Camera 200MP", "S Pen"],
      inStock: true,
    },
    {
      id: 4,
      name: "ASUS ROG Strix G16",
      price: "45,990,000",
      originalPrice: "52,990,000",
      rating: 4.6,
      reviews: 98,
      image: "/gaming-laptop-with-rgb-lighting.jpg",
      badge: "Gaming",
      discount: "13%",
      category: "Laptop",
      brand: "ASUS",
      description: "Laptop gaming mạnh mẽ với RTX 4070, Intel Core i7 và màn hình 165Hz",
      specs: ["Intel Core i7", "RTX 4070", "16GB RAM", "165Hz"],
      inStock: true,
    },
    {
      id: 5,
      name: "iPad Pro 12.9-inch M2",
      price: "28,990,000",
      originalPrice: null,
      rating: 4.8,
      reviews: 145,
      image: "/ipad-pro-12-9-m2.jpg",
      badge: "Cao cấp",
      discount: null,
      category: "Máy tính bảng",
      brand: "Apple",
      description: "Máy tính bảng chuyên nghiệp với chip M2, màn hình Liquid Retina XDR",
      specs: ["Chip M2", "128GB", "12.9 inch", "Liquid Retina XDR"],
      inStock: false,
    },
    {
      id: 6,
      name: "Dell XPS 13 Plus",
      price: "38,990,000",
      originalPrice: "42,990,000",
      rating: 4.5,
      reviews: 87,
      image: "/dell-xps-13-plus.jpg",
      badge: "Ultrabook",
      discount: "9%",
      category: "Laptop",
      brand: "Dell",
      description: "Ultrabook cao cấp với thiết kế tối giản, Intel Core i7 thế hệ 12",
      specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "13.4 inch"],
      inStock: true,
    },
  ]

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseInt(a.price.replace(/,/g, "")) - Number.parseInt(b.price.replace(/,/g, ""))
      case "price-high":
        return Number.parseInt(b.price.replace(/,/g, "")) - Number.parseInt(a.price.replace(/,/g, ""))
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
      case "Mới nhất":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Bán chạy":
        return "bg-primary/10 text-primary border-primary/20"
      case "Giảm giá":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "Gaming":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      case "Cao cấp":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="space-y-6">
      {/* Search and Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
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

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Sort */}
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

          {/* View Mode */}
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

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Hiển thị {sortedProducts.length} sản phẩm {searchQuery && `cho "${searchQuery}"`}
        </p>
      </div>

      {/* Products Grid/List */}
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
                  {product.discount && (
                    <Badge variant="destructive" className="bg-red-500 text-white">
                      -{product.discount}
                    </Badge>
                  )}
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
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}₫</span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" size="sm" disabled={!product.inStock}>
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
                      {product.discount && (
                        <Badge variant="destructive" className="bg-red-500 text-white">
                          -{product.discount}
                        </Badge>
                      )}
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
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}₫</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button className="px-6" disabled={!product.inStock}>
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

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 pt-8">
        <Button variant="outline" size="sm" disabled>
          Trước
        </Button>
        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Sau
        </Button>
      </div>
    </div>
  )
}
