// components/cart/cart-sidebar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, X, ArrowRight } from "lucide-react";
import { useCart } from "./cart-context";
import Link from "next/link";
import Image from "next/image";

export function CartSidebar() {
  const { state, dispatch } = useCart();

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
            <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent p-0 text-xs text-accent-foreground">
              {state.itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full border-l border-neutral-200 bg-neutral-50/80 p-6 backdrop-blur-md sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2 text-neutral-800">
            <ShoppingCart className="h-5 w-5" />
            <span>Giỏ hàng ({state.itemCount})</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          {state.items.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="space-y-4 text-center">
                <ShoppingCart className="mx-auto h-16 w-16 text-neutral-400" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Giỏ hàng trống</h3>
                  <p className="text-sm text-neutral-500">Thêm sản phẩm để bắt đầu mua sắm</p>
                </div>
                <Button onClick={() => dispatch({ type: "CLOSE_CART" })}>Tiếp tục mua sắm</Button>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 space-y-4 overflow-y-auto py-6">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 rounded-lg border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="line-clamp-2 text-sm font-medium text-neutral-800">{item.name}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 text-neutral-400 hover:text-red-500"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-accent">{item.price}₫</span>
                        {item.originalPrice && (
                          <span className="text-xs text-neutral-500 line-through">{item.originalPrice}₫</span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-neutral-200 bg-white">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-neutral-600 hover:bg-neutral-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="min-w-[40px] px-3 py-1 text-center text-sm text-neutral-700">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-neutral-600 hover:bg-neutral-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="text-sm font-semibold text-neutral-800">
                          {formatPrice(Number.parseInt(item.price.replace(/,/g, "")) * item.quantity)}₫
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="space-y-4 border-t border-neutral-200 pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-neutral-700">
                    <span>Tạm tính:</span>
                    <span>{formatPrice(state.total)}₫</span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-700">
                    <span>Phí vận chuyển:</span>
                    <span className="text-green-600">Miễn phí</span>
                  </div>
                  <Separator className="bg-neutral-200" />
                  <div className="flex justify-between text-lg font-bold text-neutral-800">
                    <span>Tổng cộng:</span>
                    <span className="text-accent">{formatPrice(state.total)}₫</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link href="/checkout" onClick={() => dispatch({ type: "CLOSE_CART" })}>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Thanh toán
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100"
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