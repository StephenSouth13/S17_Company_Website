"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([18000, 55000]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const productTypes = [
    { id: "com-khay", name: "Cơm khay", count: 1 },
    { id: "thuc-pham-thuan-thuc-vat", name: "Thực phẩm thuần thực vật", count: 1 },
    { id: "tra-trai-cay", name: "Trà trái cây", count: 1 },
  ];

  const badges = [
    { id: "do-an-thuan-thuc-vat", name: "Đồ ăn thuần thực vật", count: 1 },
    { id: "san-pham-lon", name: "Sản phẩm lon", count: 1 },
    { id: "tra-trai-cay-badge", name: "Trà trái cây", count: 1 },
  ];

  const handleProductTypeChange = (typeId: string, checked: boolean) => {
    if (checked) {
      setSelectedProductTypes([...selectedProductTypes, typeId]);
    } else {
      setSelectedProductTypes(selectedProductTypes.filter((id) => id !== typeId));
    }
  };

  const handleBadgeChange = (badgeId: string, checked: boolean) => {
    if (checked) {
      setSelectedBadges([...selectedBadges, badgeId]);
    } else {
      setSelectedBadges(selectedBadges.filter((id) => id !== badgeId));
    }
  };

  const clearAllFilters = () => {
    setSelectedProductTypes([]);
    setSelectedBadges([]);
    setPriceRange([18000, 55000]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "₫";
  };

  return (
    <div className="space-y-6">
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
      ---
      {(selectedProductTypes.length > 0 || selectedBadges.length > 0) && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Bộ lọc đang áp dụng:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProductTypes.map((typeId) => {
              const productType = productTypes.find((t) => t.id === typeId);
              return (
                <Badge key={typeId} variant="secondary" className="bg-primary/10 text-primary">
                  {productType?.name}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleProductTypeChange(typeId, false)} />
                </Badge>
              );
            })}
            {selectedBadges.map((badgeId) => {
              const badge = badges.find((b) => b.id === badgeId);
              return (
                <Badge key={badgeId} variant="secondary" className="bg-green-500/10 text-green-500">
                  {badge?.name}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleBadgeChange(badgeId, false)} />
                </Badge>
              );
            })}
          </div>
        </div>
      )}
      ---
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Khoảng giá</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={55000}
            min={18000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </CardContent>
      </Card>
      ---
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Loại sản phẩm</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {productTypes.map((productType) => (
            <div key={productType.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={productType.id}
                  checked={selectedProductTypes.includes(productType.id)}
                  onCheckedChange={(checked) => handleProductTypeChange(productType.id, checked as boolean)}
                />
                <label htmlFor={productType.id} className="text-sm font-medium cursor-pointer">
                  {productType.name}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">({productType.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>
      ---
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Nhãn sản phẩm</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {badges.map((badge) => (
            <div key={badge.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={badge.id}
                  checked={selectedBadges.includes(badge.id)}
                  onCheckedChange={(checked) => handleBadgeChange(badge.id, checked as boolean)}
                />
                <label htmlFor={badge.id} className="text-sm font-medium cursor-pointer">
                  {badge.name}
                </label>
              </div>
              <span className="text-xs text-muted-foreground">({badge.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}