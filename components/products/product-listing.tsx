import React, { useState, useMemo, useEffect } from "react";
import { X, Filter, ShoppingCart, Star } from "lucide-react";

// ===================================================================
// TYPE DEFINITIONS (Định nghĩa kiểu)
// ===================================================================

interface Product {
  id: number;
  name: string;
  price: number;
  // Giả định các loại sản phẩm có thể có:
  type: "com-khay" | "thuc-pham-thuan-thuc-vat" | "tra-trai-cay" | string;
  badges: string[];
  image: string;
  description: string;
  rating: number;
}

interface FilterItem {
  id: string;
  name: string;
  count: number;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}
interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  max: number;
  min: number;
  step: number;
}
interface ButtonProps {
  children: React.ReactNode;
  variant?: "ghost" | "primary";
  size?: "sm" | "default";
  onClick: () => void;
  className?: string;
}
interface BadgeProps {
  children: React.ReactNode;
  variant?: "secondary" | "primary" | "success";
  className?: string;
}

// ===================================================================
// MOCK UI COMPONENTS (Đã thêm định nghĩa kiểu cho Props)
// ===================================================================

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }: CardProps) => <div className={`p-4 ${className}`}>{children}</div>;
const CardContent = ({ children, className = "" }: CardProps) => <div className={`p-4 pt-0 ${className}`}>{children}</div>;
const CardTitle = ({ children, className = "" }: CardProps) => <h3 className={`text-lg font-semibold dark:text-gray-100 ${className}`}>{children}</h3>;

const Checkbox = ({ id, checked, onCheckedChange }: CheckboxProps) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    // Đảm bảo e.target.checked là boolean
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCheckedChange(e.target.checked)}
    className="h-4 w-4 rounded text-indigo-600 border-gray-300 focus:ring-indigo-500 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-indigo-500"
  />
);

const Slider = ({ value, onValueChange, max, min, step }: SliderProps) => (
  <div className="relative pt-2">
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onValueChange([Number(e.target.value), value[1]])}
      className="absolute w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 opacity-0 z-10"
      style={{ top: '0', left: '0' }}
    />
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[1]}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onValueChange([value[0], Number(e.target.value)])}
      className="absolute w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 opacity-0 z-10"
      style={{ top: '0', left: '0' }}
    />

    {/* Custom Track and Range Indicator */}
    <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
      <div
        className="absolute h-1 bg-indigo-500 rounded-full"
        style={{
          left: `${((value[0] - min) / (max - min)) * 100}%`,
          width: `${((value[1] - value[0]) / (max - min)) * 100}%`,
        }}
      ></div>
      {/* Custom Thumb 1 */}
      <div
        className="absolute w-4 h-4 -mt-1.5 bg-white border-2 border-indigo-500 rounded-full shadow cursor-pointer transition-transform duration-150 hover:scale-110"
        style={{ left: `${((value[0] - min) / (max - min)) * 100}%`, transform: 'translateX(-50%)' }}
      ></div>
      {/* Custom Thumb 2 */}
      <div
        className="absolute w-4 h-4 -mt-1.5 bg-white border-2 border-indigo-500 rounded-full shadow cursor-pointer transition-transform duration-150 hover:scale-110"
        style={{ left: `${((value[1] - min) / (max - min)) * 100}%`, transform: 'translateX(-50%)' }}
      ></div>
    </div>
  </div>
);

const Button = ({ children, variant, size, onClick, className = "" }: ButtonProps) => {
    let baseClass = "rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
    if (variant === "ghost") {
        baseClass += " text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700";
    } else {
        baseClass += " bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/50";
    }
    if (size === "sm") {
        baseClass += " px-3 py-1 text-sm";
    } else {
        baseClass += " px-4 py-2";
    }
    return <button onClick={onClick} className={`${baseClass} ${className}`}>{children}</button>;
};

const Badge = ({ children, variant, className = "" }: BadgeProps) => {
    let baseClass = "px-2 py-0.5 text-xs font-semibold rounded-full";
    if (variant === "secondary") {
        baseClass += " bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
    } else if (variant === "primary") {
        baseClass += " bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300";
    } else if (variant === "success") {
        baseClass += " bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300";
    }
    return <span className={`${baseClass} ${className}`}>{children}</span>;
};

// ===================================================================
// MOCK DATA (Đã thêm định nghĩa kiểu)
// ===================================================================

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Cơm chiên kim chi phô mai",
    price: 35000,
    type: "com-khay",
    badges: ["thuần chay", "bán chạy"],
    image: "https://placehold.co/400x300/6366f1/ffffff?text=C%C6%A1m%20Khay",
    description: "Cơm chiên đậm vị kim chi, kết hợp cùng lớp phô mai béo ngậy tan chảy, món ăn hoàn hảo cho bữa trưa nhanh chóng.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bánh ngọt thuần chay đặc biệt",
    price: 55000,
    type: "thuc-pham-thuan-thuc-vat",
    badges: ["thuần chay", "món mới"],
    image: "https://placehold.co/400x300/4f46e5/ffffff?text=Th%E1%BB%B1c%20V%E1%BA%ADt",
    description: "Bánh ngọt không trứng sữa, sử dụng nguyên liệu thực vật 100%, thơm ngon, bổ dưỡng.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Trà đào cam sả thanh mát",
    price: 25000,
    type: "tra-trai-cay",
    badges: ["thức uống", "giải nhiệt"],
    image: "https://placehold.co/400x300/a855f7/ffffff?text=Tr%C3%A0%20Tr%C3%A1i%20C%C3%A2y",
    description: "Hương vị trà đào kết hợp cam tươi và sả, giúp giải khát và detox cơ thể hiệu quả.",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Cơm cuộn rong biển rau củ",
    price: 45000,
    type: "com-khay",
    badges: ["thuần chay", "bán chạy"],
    image: "https://placehold.co/400x300/4338ca/ffffff?text=C%C6%A1m%20Cu%E1%BB%99n",
    description: "Món cơm cuộn Gimbap kiểu Hàn Quốc, đầy đủ rau củ tươi và nước chấm đặc biệt.",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Súp nấm hạt sen dinh dưỡng",
    price: 18000,
    type: "thuc-pham-thuan-thuc-vat",
    badges: ["thuần chay"],
    image: "https://placehold.co/400x300/10b981/ffffff?text=S%C3%BAP%20N%E1%BA%A5m",
    description: "Súp nấm và hạt sen nóng hổi, giàu protein và vitamin, thích hợp cho người ăn kiêng.",
    rating: 4.0,
  },
  {
    id: 6,
    name: "Trà sữa khoai môn trân châu",
    price: 30000,
    type: "tra-trai-cay",
    badges: ["thức uống"],
    image: "https://placehold.co/400x300/ef4444/ffffff?text=Tr%C3%A0%20S%E1%BB%AFa",
    description: "Trà sữa thơm vị khoai môn tự nhiên, kết hợp trân châu dai giòn.",
    rating: 4.7,
  },
];
const allProducts: Product[] = mockProducts;

// ===================================================================
// MAIN COMPONENT (Đã đổi tên thành App và thêm định nghĩa kiểu)
// ===================================================================

export function App() { // Đổi tên từ ProductListing sang App
  const minPrice = 18000;
  const maxPrice = 55000;

  // Khai báo kiểu rõ ràng cho useState
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  // Tính toán dữ liệu lọc dựa trên mock data (đã typing)
  const productTypes: FilterItem[] = useMemo(() => ([
    { id: "com-khay", name: "Cơm khay", count: allProducts.filter(p => p.type === "com-khay").length },
    { id: "thuc-pham-thuan-thuc-vat", name: "Thực phẩm thuần thực vật", count: allProducts.filter(p => p.type === "thuc-pham-thuan-thuc-vat").length },
    { id: "tra-trai-cay", name: "Trà & Thức uống", count: allProducts.filter(p => p.type === "tra-trai-cay").length },
  ]), []);

  const badges: FilterItem[] = useMemo(() => ([
    { id: "thuần chay", name: "Thuần chay", count: allProducts.filter(p => p.badges.includes("thuần chay")).length },
    { id: "bán chạy", name: "Bán chạy nhất", count: allProducts.filter(p => p.badges.includes("bán chạy")).length },
    { id: "món mới", name: "Món mới", count: allProducts.filter(p => p.badges.includes("món mới")).length },
  ]), []);

  // Đã thêm kiểu cho tham số hàm
  const handleProductTypeChange = (typeId: string, checked: boolean) => {
    setSelectedProductTypes(prev => checked
      ? [...prev, typeId]
      : prev.filter((id) => id !== typeId)
    );
  };

  // Đã thêm kiểu cho tham số hàm
  const handleBadgeChange = (badgeId: string, checked: boolean) => {
    setSelectedBadges(prev => checked
      ? [...prev, badgeId]
      : prev.filter((id) => id !== badgeId)
    );
  };

  const clearAllFilters = () => {
    setSelectedProductTypes([]);
    setSelectedBadges([]);
    setPriceRange([minPrice, maxPrice]);
  };

  // Đã thêm kiểu cho tham số hàm
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("vi-VN").format(price) + "₫";
  };
  
  // Dùng useEffect để xử lý lỗi giá trị min > max trong Slider
  useEffect(() => {
    // Sửa lỗi tiềm ẩn: nếu giá trị min > max, hoán đổi chúng
    if (priceRange[0] > priceRange[1]) {
      // Dùng setPriceRange với function để tránh lỗi vòng lặp
      setPriceRange(prevRange => [prevRange[1], prevRange[0]]);
    }
  }, [priceRange]);

  const filteredProducts: Product[] = useMemo(() => {
    return allProducts.filter(product => {
      const minP = Math.min(priceRange[0], priceRange[1]);
      const maxP = Math.max(priceRange[0], priceRange[1]);
      
      const priceMatch = product.price >= minP && product.price <= maxP;
      const typeMatch = selectedProductTypes.length === 0 || selectedProductTypes.includes(product.type);
      // Đảm bảo tất cả các badge đã chọn đều có trong sản phẩm
      const badgeMatch = selectedBadges.length === 0 || selectedBadges.every(badge => product.badges.includes(badge));
      
      return priceMatch && typeMatch && badgeMatch;
    });
  }, [priceRange, selectedProductTypes, selectedBadges]);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Cột lọc - Sticky Sidebar Premium */}
          <div className="lg:col-span-1">
            <div className="space-y-6 lg:sticky lg:top-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              
              <div className="flex items-center justify-between border-b pb-4 border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Filter className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-bold">Bộ lọc tìm kiếm</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <X className="h-4 w-4 mr-1" />
                  Xóa tất cả
                </Button>
              </div>

              {/* Bộ lọc đang áp dụng */}
              {(selectedProductTypes.length > 0 || selectedBadges.length > 0) && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Đang áp dụng:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProductTypes.map((typeId) => {
                      const productType = productTypes.find((t) => t.id === typeId);
                      return (
                        <Badge key={typeId} variant="primary" className="flex items-center space-x-1">
                          <span>{productType?.name}</span>
                          <X className="h-3 w-3 cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleProductTypeChange(typeId, false)} />
                        </Badge>
                      );
                    })}
                    {selectedBadges.map((badgeId) => {
                      const badge = badges.find((b) => b.id === badgeId);
                      return (
                        <Badge key={badgeId} variant="success" className="flex items-center space-x-1">
                          <span>{badge?.name}</span>
                          <X className="h-3 w-3 cursor-pointer opacity-75 hover:opacity-100" onClick={() => handleBadgeChange(badgeId, false)} />
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Card Khoảng giá */}
              <Card className="shadow-none border-t border-gray-100 dark:border-gray-700 pt-4">
                <CardHeader className="p-0 pb-3">
                  <CardTitle className="text-base">Khoảng giá</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={maxPrice}
                    min={minPrice}
                    step={1000}
                  />
                  <div className="flex justify-between text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    <span className="bg-indigo-50/50 dark:bg-gray-700 px-3 py-1 rounded-full">{formatPrice(Math.min(priceRange[0], priceRange[1]))}</span>
                    <span className="bg-indigo-50/50 dark:bg-gray-700 px-3 py-1 rounded-full">{formatPrice(Math.max(priceRange[0], priceRange[1]))}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card Loại sản phẩm */}
              <Card className="shadow-none border-t border-gray-100 dark:border-gray-700 pt-4">
                <CardHeader className="p-0 pb-3">
                  <CardTitle className="text-base">Loại sản phẩm</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {productTypes.map((productType) => (
                    <div key={productType.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={productType.id}
                          checked={selectedProductTypes.includes(productType.id)}
                          onCheckedChange={(checked) => handleProductTypeChange(productType.id, checked)}
                        />
                        <label htmlFor={productType.id} className="text-sm font-medium cursor-pointer text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                          {productType.name}
                        </label>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">({productType.count})</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Card Nhãn sản phẩm */}
              <Card className="shadow-none border-t border-gray-100 dark:border-gray-700 pt-4">
                <CardHeader className="p-0 pb-3">
                  <CardTitle className="text-base">Nhãn sản phẩm</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {badges.map((badge) => (
                    <div key={badge.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={`badge-${badge.id}`}
                          checked={selectedBadges.includes(badge.id)}
                          onCheckedChange={(checked) => handleBadgeChange(badge.id, checked)}
                        />
                        <label htmlFor={`badge-${badge.id}`} className="text-sm font-medium cursor-pointer text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                          {badge.name}
                        </label>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">({badge.count})</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cột hiển thị sản phẩm - Product Grid Premium */}
          <div className="lg:col-span-3">
            <div className="mb-8 flex justify-between items-center border-b pb-3 border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold dark:text-gray-50">
                Tìm thấy <span className="text-indigo-600 dark:text-indigo-400">{filteredProducts.length}</span> sản phẩm
              </h3>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10"
                  >
                    <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                        {/* Sửa lỗi 2339 bằng cách định nghĩa rõ ràng kiểu của sự kiện */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-85"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                                // Ép kiểu e.target sang HTMLImageElement
                                const target = e.currentTarget as HTMLImageElement;
                                target.onerror = null; 
                                target.src = "https://placehold.co/400x300/e0e7ff/3730a3?text=S17%20Product" 
                            }}
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                            {product.badges.map((badge, index) => (
                                <Badge key={index} variant={badge === "bán chạy" ? "primary" : "secondary"} className="text-xs backdrop-blur-sm bg-white/70 dark:bg-gray-900/70">{badge}</Badge>
                            ))}
                        </div>
                        <div className="absolute top-3 right-3 flex items-center bg-white/80 dark:bg-gray-900/80 rounded-full px-2 py-1 backdrop-blur-sm">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-xs font-semibold text-gray-800 dark:text-gray-100">{product.rating}</span>
                        </div>
                    </div>

                    <CardContent className="p-4 space-y-2">
                        <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-50 line-clamp-1 hover:text-indigo-600 transition-colors">
                            {product.name}
                        </CardTitle>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 min-h-[40px]">
                            {product.description}
                        </p>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                                {formatPrice(product.price)}
                            </p>
                            <Button size="sm" onClick={() => console.log(`Thêm ${product.name} vào giỏ hàng`)} className="flex items-center space-x-1">
                                <ShoppingCart className="h-4 w-4" />
                                <span>Mua</span>
                            </Button>
                        </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-20 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-xl shadow-inner">
                <Filter className="h-10 w-10 mb-4 text-indigo-500" />
                <p className="text-xl font-semibold">Rất tiếc, không tìm thấy sản phẩm nào.</p>
                <p className="text-base mt-2">Vui lòng điều chỉnh hoặc xóa các bộ lọc để xem thêm sản phẩm.</p>
                <Button onClick={clearAllFilters} className="mt-6 shadow-indigo-600/30">Xóa Bộ Lọc</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Đây là lệnh bắt buộc để React nhận diện component chính
export default App;
