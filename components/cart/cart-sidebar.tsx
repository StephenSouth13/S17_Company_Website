"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, X, ArrowRight, AlertTriangle } from "lucide-react";
import { useCart } from "./cart-context";
import Link from "next/link";
import Image from "next/image";

export function CartSidebar() {
  const { state, dispatch } = useCart();

  // FIX LỖI GIÁ: Helper function để lấy giá trị số nguyên từ chuỗi giá (VD: "42.000 - 49.000₫" -> 42000)
  const getNumericPrice = (priceString: string): number => {
      // 1. Lấy phần giá trị số đầu tiên (xử lý dải giá 'x - y')
      const pricePart = priceString.split('-')[0].trim();
      
      // 2. Loại bỏ TẤT CẢ ký tự không phải số (bao gồm dấu chấm, phẩy, và ký hiệu tiền tệ)
      // Đây là bước quan trọng để chuyển "42.000" thành "42000"
      const cleanedPrice = pricePart.replace(/[^0-9]/g, '');
      
      // 3. Chuyển đổi sang số nguyên
      return Number.parseInt(cleanedPrice) || 0;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={() => dispatch({ type: "TOGGLE_CART" })}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative h-9 w-9 p-0 text-white hover:bg-white/10">
          <ShoppingCart className="h-4 w-4" />
          {state.itemCount > 0 && (
            <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 p-0 text-xs text-white">
              {state.itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      {/* Nâng cấp giao diện Sheet: nền trắng trong suốt, bo góc lớn hơn */}
      <SheetContent className="w-full border-l border-neutral-100 bg-white/95 p-6 backdrop-blur-xl sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-3 text-xl font-bold text-neutral-900">
            <ShoppingCart className="h-6 w-6 text-indigo-600" />
            <span>Giỏ hàng ({state.itemCount})</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col pt-4">
          {state.items.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="space-y-6 text-center">
                <ShoppingCart className="mx-auto h-16 w-16 text-neutral-300 stroke-1" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Giỏ hàng trống</h3>
                  <p className="text-base text-neutral-500 mt-1">Thêm sản phẩm để bắt đầu mua sắm</p>
                </div>
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-300/50 rounded-xl font-semibold px-8 h-10 transition-all duration-300 transform hover:-translate-y-0.5" 
                  onClick={() => dispatch({ type: "CLOSE_CART" })}>
                    Tiếp tục mua sắm
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 space-y-4 overflow-y-auto py-6">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    // Thẻ sản phẩm với bo góc mềm mại và đổ bóng nhẹ
                    className="flex space-x-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100/50"
                  >
                    <Image
                      src={item.image || "https://placehold.co/80x80/EEEEEE/888888?text=SP"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 flex-shrink-0 rounded-lg object-cover shadow-sm"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        {/* Tên sản phẩm */}
                        <h4 className="line-clamp-2 text-base font-semibold text-neutral-900 pr-4">{item.name}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-neutral-400 hover:text-red-500 rounded-full"
                          onClick={() => removeItem(item.id)}
                          title="Xóa sản phẩm"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Giá niêm yết */}
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="font-bold text-indigo-700">{item.price}₫</span>
                        {item.originalPrice && (
                          <span className="text-neutral-500 line-through">{item.originalPrice}₫</span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Nút tăng giảm số lượng bo góc đầy đủ, nền nhẹ */}
                        <div className="flex items-center rounded-full border border-neutral-300 bg-neutral-50">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-neutral-600 hover:bg-neutral-200 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="min-w-[30px] px-2 py-1 text-center text-base font-semibold text-neutral-800">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-neutral-600 hover:bg-neutral-200 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        {/* Tổng giá trị của ITEM: đã FIX lỗi giá */}
                        <span className="text-lg font-extrabold text-indigo-600">
                          {formatPrice(getNumericPrice(item.price) * item.quantity)}₫
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="space-y-4 border-t border-neutral-200 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-base text-neutral-700">
                    <span>Tạm tính:</span>
                    <span className="font-semibold text-neutral-900">{formatPrice(state.total)}₫</span>
                  </div>
                  <div className="flex justify-between text-base text-neutral-700">
                    <span>Phí vận chuyển:</span>
                    <span className="text-green-600 font-semibold">Miễn phí</span>
                  </div>
                  <Separator className="bg-neutral-200 mt-2" />
                  <div className="flex justify-between text-xl font-extrabold text-neutral-900 pt-1">
                    <span>Tổng cộng:</span>
                    <span className="text-indigo-600">{formatPrice(state.total)}₫</span>
                  </div>
                </div>

                {/* CẢNH BÁO: HƯỚNG DẪN FIX LỖI TỔNG TIỀN */}
                <div className="flex items-start space-x-2 rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800 border border-yellow-200">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>
                        **CẢNH BÁO LỖI TỔNG TIỀN:** Giá từng sản phẩm đã đúng, nhưng để **Tổng cộng** và **Tạm tính** hiển thị chính xác, bạn cần áp dụng hàm **`getNumericPrice`** vào logic tính tổng (`state.total`) trong file **`cart-context.tsx`** (Reducer) của bạn.
                    </p>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout" onClick={() => dispatch({ type: "CLOSE_CART" })}>
                    {/* Nút CTA lớn hơn, màu Indigo, có bóng */}
                    <Button 
                      className="w-full bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-lg h-12 rounded-xl shadow-lg shadow-indigo-300/50 transition-all duration-300 transform hover:-translate-y-0.5">
                      Thanh toán
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 h-10 rounded-xl transition-colors duration-200"
                    onClick={() => dispatch({ type: "CLOSE_CART" })}
                  >
                    Tiếp tục mua sắm
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
