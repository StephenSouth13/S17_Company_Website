"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100000000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<string[]>([])

  const categories = [
    { id: "laptops", name: "Laptop", count: 45 },
    { id: "smartphones", name: "Điện thoại", count: 67 },
    { id: "tablets", name: "Máy tính bảng", count: 23 },
    { id: "accessories", name: "Phụ kiện", count: 89 },
    { id: "gaming", name: "Gaming", count: 34 },
    { id: "audio", name: "Âm thanh", count: 56 },
  ]

  const brands = [
    { id: "apple", name: "Apple", count: 28 },
    { id: "samsung", name: "Samsung", count: 35 },
    { id: "asus", name: "ASUS", count: 42 },
    { id: "dell", name: "Dell", count: 31 },
    { id: "hp", name: "HP", count: 29 },
    { id: "lenovo", name: "Lenovo", count: 38 },
  ]

  const ratings = [
    { id: "5", name: "5 sao", count: 45 },
    { id: "4", name: "4 sao trở lên", count: 123 },
    { id: "3", name: "3 sao trở lên", count: 189 },
  ]

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId])
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId))
    }
  }

  const handleRatingChange = (ratingId: string, checked: boolean) => {
    if (checked) {
      setSelectedRatings([...selectedRatings, ratingId])
    } else {
      setSelectedRatings(selectedRatings.filter((id) => id !== ratingId))
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedRatings([])
    setPriceRange([0, 100000000])
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price)
  }

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Bộ lọc</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-1" />
          Xóa tất cả
        </Button>
      </div>

      {/* Active Filters */}
      {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedRatings.length > 0) && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Bộ lọc đang áp dụng:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId)
              return (
                <Badge key={categoryId} variant="secondary" className="bg-primary/10 text-primary">
                  {category?.name}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleCategoryChange(categoryId, false)} />
                </Badge>
              )
            })}
            {selectedBrands.map((brandId) => {
              const brand = brands.find((b) => b.id === brandId)
              return (
                <Badge key={brandId} variant="secondary" className="bg-accent/10 text-accent">
                  {brand?.name}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleBrandChange(brandId, false)} />
                </Badge>
              )
            })}
            {selectedRatings.map((ratingId) => {
              const rating = ratings.find((r) => r.id === ratingId)
              return (
                <Badge key={ratingId} variant="secondary" className="bg-yellow-500/10 text-yellow-600">
                  {rating?.name}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleRatingChange(ratingId, false)} />
                </Badge>
              )
            })}
          </div>
        </div>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Khoảng giá</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={100000000} step={1000000} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}₫</span>
            <span>{formatPrice(priceRange[1])}₫</span>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Danh mục</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                />
                <label htmlFor={category.id} className="text-sm font-medium cursor-pointer">
                  {category.name}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">({category.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Thương hiệu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={brand.id}
                  checked={selectedBrands.includes(brand.id)}
                  onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
                />
                <label htmlFor={brand.id} className="text-sm font-medium cursor-pointer">
                  {brand.name}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">({brand.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Ratings */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Đánh giá</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {ratings.map((rating) => (
            <div key={rating.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={rating.id}
                  checked={selectedRatings.includes(rating.id)}
                  onCheckedChange={(checked) => handleRatingChange(rating.id, checked as boolean)}
                />
                <label htmlFor={rating.id} className="text-sm font-medium cursor-pointer">
                  {rating.name}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">({rating.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
