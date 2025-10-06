"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, Heart, ArrowRight } from "lucide-react"; // Xóa PackageOpen thừa
import Link from "next/link";
import { useCart } from "@/components/cart/cart-context";
import Image from "next/image";

// Màu nhấn chính: Cyan (Xanh lục lam)
const ACCENT_COLOR_CLASS = "text-cyan-500";
const ACCENT_BG_CLASS = "bg-cyan-500 hover:bg-cyan-600";

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
      name: "Cơm Khay",
      price: "42.000 - 49.000",
      originalPrice: null,
      rating: 4.8,
      reviews: 25,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Bữa ăn tiện lợi",
      inStock: true,
      category: "Cơm",
      description:
        "Cơm khay dinh dưỡng, được chế biến từ 100% nguyên liệu thuần chay. Gồm 2 lựa chọn: Cơm trắng và Cơm gạo lứt.",
      specs: ["Gạo lứt", "Nhanh gọn", "Thuần chay"],
    },
    {
      id: 2,
      name: "Thực Phẩm Đóng Hộp",
      price: "18.000 - 55.000",
      originalPrice: null,
      rating: 4.5,
      reviews: 40,
      image: "/products/dautamfruit.png",
      badge: "Dùng liền",
      inStock: true,
      category: "Đồ hộp",
      description:
        "Các sản phẩm đóng hộp tiện lợi, có thể dùng ngay. Hạn sử dụng 12 tháng từ ngày sản xuất.",
      specs: ["Đóng hộp", "Tiện lợi", "Thuần chay"],
    },
    {
      id: 3,
      name: "Trà Trái Cây Tự Nhiên",
      price: "25.000 - 45.000",
      originalPrice: null,
      rating: 4.9,
      reviews: 12,
      image: "/products/tratraicay.png",
      badge: "Thức uống",
      inStock: true,
      category: "Thức uống",
      description:
        "Trà trái cây thơm ngon, được ngâm từ trái cây tươi, không sử dụng đường hóa học hay syrup.",
      specs: ["Giải khát", "Tự nhiên", "Tươi mới"],
    },
    {
      id: 4,
      name: "Socola ",
      price: "135.000 - 160.000",
      originalPrice: "70.000",
      rating: 4.7,
      reviews: 30,
      image: "/products/socola.png",
      badge: "Món mặn chay",
      inStock: true,
      category: "Bánh Kẹo",
      description:
        "Socola chế biến từ cacao nguyên chất, không chứa hóa chất độc hại.",
      specs: [ "Ngọt ngào", "Protein thực vật"],
    },
    {
      id: 5,
      name: "Nấm Kim Châm",
      price: "20.000 - 50.000",
      originalPrice: null,
      rating: 4.6,
      reviews: 18,
      image: "/products/namkinhke.png",
      badge: "Rau củ",
      inStock: true,
      category: "Rau củ",
      description:
        "Nấm Kim Châm tươi ngon, giàu dinh dưỡng, phù hợp chế biến nhiều món ăn.",
      specs: ["Nấm", "Sạch", "Bổ dưỡng"],
    },
    {
      id: 6,
      name: "Gạo Lứt Hạt Sen",
      price: "80.000 - 120.000",
      originalPrice: null,
      rating: 4.9,
      reviews: 8,
      image: "/products/GH - Com gao lut hat sen.jpg",
      badge: "Bữa ăn dinh dưỡng",
      inStock: true,
      category: "Cơm",
      description:
        "Cơm gạo lứt hạt sen là sự kết hợp hoàn hảo giữa hạt gạo lứt dẻo thơm và hạt sen bùi béo. Một món ăn thanh đạm, giàu dinh dưỡng, phù hợp cho mọi bữa ăn.",
      specs: ["Gạo lứt", "Thanh đạm", "Dinh dưỡng"],
    },
    {
      id: 7,
      name: "Cơm Tinh Hoa",
      price: "35.000",
      originalPrice: null,
      rating: 4.7,
      reviews: 22,
      image: "/products/comtinhhoa.jpg",
      badge: "Bữa ăn tiện lợi",
      inStock: true,
      category: "Cơm",
      description:
        "Cơm tinh hoa là bữa ăn đầy đủ, được chế biến từ những nguyên liệu tươi ngon, tinh túy nhất. Tiện lợi cho những ngày bận rộn mà vẫn đảm bảo dinh dưỡng.",
      specs: ["Dinh dưỡng", "Tiện lợi", "Đầy đủ"],
    },
    {
      id: 8,
      name: "Cơm Về Cội",
      price: "45.000",
      originalPrice: null,
      rating: 4.8,
      reviews: 15,
      image: "/products/comvecoi.jpg",
      badge: "Món ăn truyền thống",
      inStock: true,
      category: "Cơm",
      description:
        "Cơm Về Cội mang hương vị truyền thống, gợi nhớ bữa cơm quê nhà. Nước dùng thanh ngọt, đậm đà từ rau củ, mang đến cảm giác ấm áp, an lành.",
      specs: ["Truyền thống", "Thanh ngọt", "Ấm áp"],
    },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Bữa ăn tiện lợi":
      case "Bữa ăn dinh dưỡng":
      case "Món ăn truyền thống":
        return "bg-cyan-500/10 text-cyan-700 border-cyan-500/20 dark:text-cyan-300 dark:border-cyan-700";
      case "Dùng liền":
        return "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-300 dark:border-green-700";
      case "Thức uống":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-300 dark:border-blue-700";
      case "Món mặn chay":
        return "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-300 dark:border-red-700";
      case "Rau củ":
        return "bg-teal-500/10 text-teal-700 border-teal-500/20 dark:text-teal-300 dark:border-teal-700";
      default:
        return "bg-neutral-500/10 text-neutral-500 border-neutral-500/20";
    }
  };

  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    // Thêm logic thông báo hoặc chuyển hướng nếu cần
  };

  const handleBuyNow = (product: Product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    window.location.href = "/checkout";
  };

  return (
    // Nền sáng nhẹ, có thể chuyển sang tối
    <section className="pt-10 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-2">
        <div className="mx-auto max-w-7xl">
          {/* Section Header - Tác động mạnh */}
          <div className="mb-16 space-y-6 text-center">
            <Badge
              className="text-sm font-semibold uppercase tracking-widest bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300 rounded-full px-2 py-1.5 shadow-md"
            >
              Thực phẩm thuần chay
            </Badge>
            <h2 className="text-4xl font-extrabold md:text-5xl lg:text-6xl text-neutral-900 dark:text-neutral-50 leading-tight">
              Sản phẩm <span className={`font-black ${ACCENT_COLOR_CLASS}`}>Nổi bật</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-400">
              Khám phá các sản phẩm thuần thực vật tươi ngon, chất lượng được đảm bảo từ thiên nhiên.
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.id}
                // Thêm h-full để cân bằng chiều cao Card
                className="group flex h-full flex-col overflow-hidden rounded-2xl border-neutral-200 bg-white shadow-xl shadow-neutral-200/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-200/40 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-900/30 dark:hover:shadow-cyan-900/50"
              >
                {/* Tối ưu ảnh: Giữ tỉ lệ 1:1 và bo góc trên */}
                <div className="relative overflow-hidden h-64 aspect-square rounded-t-xl">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill // Sử dụng fill để lấp đầy container
                    style={{ objectFit: 'cover' }} // object-cover
                    className="transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={product.id <= 4}
                  />
                  {/* Badge */}
                  <div className="absolute left-4 top-4 z-10 flex gap-2">
                    <Badge 
                      variant="secondary" 
                      className={`border ${getBadgeColor(product.badge)} rounded-full px-3 py-1 text-xs font-bold shadow-md backdrop-blur-sm`}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  {/* Hover Actions */}
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

                <CardContent className="p-6 space-y-3 flex-grow">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="line-clamp-2 text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-cyan-600 dark:text-neutral-50 dark:group-hover:text-cyan-400">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Mô tả sản phẩm */}
                  <p className="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400 min-h-[40px]">
                    {product.description}
                  </p>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-neutral-300 dark:text-neutral-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">({product.reviews})</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{product.price} VNĐ</span>
                      {product.originalPrice && (
                        <span className="text-sm text-neutral-400 line-through">{product.originalPrice} VNĐ</span>
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* Fix Button: Sử dụng layout 2 nút chồng nhau (stacked) để tránh tràn và đẹp hơn */}
                <CardFooter className="mt-auto flex flex-col gap-3 pt-0 pb-6 px-6">
                  {/* Nút 1: Thêm vào giỏ hàng (Màu nhẹ) */}
                  <div className="w-full">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="outline" // Đổi sang outline để phân biệt
                      className={`w-full ${ACCENT_COLOR_CLASS} border-cyan-400 dark:border-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-900 transition-all duration-300 rounded-xl font-semibold`}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Thêm vào giỏ hàng
                    </Button>
                  </div>
                  
                  {/* Nút 2: Mua ngay (Màu nhấn) */}
                  <div className="w-full">
                    <Button
                      onClick={() => handleBuyNow(product)}
                      className={`${ACCENT_BG_CLASS} w-full text-white shadow-lg shadow-cyan-300/50 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5`}
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Mua ngay
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/products">
              <Button size="lg" className={`group ${ACCENT_BG_CLASS} text-lg rounded-full px-8 h-14 font-extrabold shadow-xl shadow-cyan-300/50 transition-all duration-300 transform hover:scale-[1.02]`}>
                Khám phá tất cả sản phẩm
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}