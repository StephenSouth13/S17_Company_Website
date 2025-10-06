"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { UserMenu } from "@/components/auth/user-menu";
import { CartSidebar } from "@/components/cart/cart-sidebar";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  // NOTE: Để thiết lập mặc định tiếng Việt, hãy đảm bảo LanguageContext
  // được khởi tạo với ngôn ngữ mặc định là 'vi'. Tệp này chỉ sử dụng ngôn ngữ đã được context cung cấp.

  // Thay đổi: Đặt màu nhấn (accent) mặc định cho các hiệu ứng hover.
  const ACCENT_COLOR_CLASS = 'text-blue-300'; // Màu sáng hơn cho hiệu ứng nổi bật (giữ nguyên để chữ hover vẫn đẹp)
  // Đã loại bỏ ACCENT_BG_CLASS vì yêu cầu không highlight/gạch chân.

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Thay đổi: Nền đơn sắc xanh biển đậm cao cấp và chữ trắng rõ ràng
  return (
    <header className="sticky top-0 z-50 w-full bg-blue-700/95 backdrop-blur-sm shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="transition-transform duration-300 hover:scale-105">
            <Image
              // Giữ nguyên logic logo, nhưng đảm bảo logo có độ tương phản cao trên nền xanh đậm
              src={theme === "dark" ? "/logos17/logo.png" : "/logos17/logo.png"}
              alt="S17 Trading Logo"
              width={100}
              height={30}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // Thay đổi: Loại bỏ 'relative' và 'group' vì không còn gạch chân, giữ text-white và hover đẹp
                className={`text-white text-sm font-medium transition-colors hover:${ACCENT_COLOR_CLASS}`}
              >
                {item.name}
                {/* Đã loại bỏ thẻ <span> gạch chân theo yêu cầu */}
              </Link>
            ))}
          </nav>

          {/* Search bar (desktop) */}
          <div className="relative mx-8 hidden flex-1 items-center space-x-2 lg:flex max-w-md">
            {/* Thay đổi: Text-white/70 cho icon tìm kiếm */}
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-white/70" />
            <input
              type="text"
              placeholder={t.products.searchPlaceholder}
              // Giữ input nền trắng đục, chữ trắng
              className={`w-full rounded-lg border border-white/20 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-white/70 transition-all duration-300 hover:shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white`}
            />
          </div>

          {/* Actions */}
          <div className="ml-auto flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
            {/* Theme toggle - Đã FIX LỖI LỆCH HÀNG */}
            <button
              aria-label="Toggle color theme"
              // Đã thêm relative, flex, h, w để căn giữa và tạo khung cố định cho nút
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/20"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle theme"
            >
              {/* Sun icon: Dùng absolute để phủ lên vị trí Moon, dùng transition, rotate và opacity để tạo hiệu ứng chuyển đổi mượt mà và fix lỗi lệch hàng */}
              <Sun
                className={`absolute h-5 w-5 transition-all duration-300 ${
                  theme === "dark" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              {/* Moon icon: Tương tự, dùng absolute để đảm bảo căn chỉnh */}
              <Moon
                className={`absolute h-5 w-5 transition-all duration-300 ${
                  theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </button>

            <LanguageSwitcher />
            <CartSidebar />

            <div className="hidden md:block">
              <UserMenu />
            </div>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              // Text-white và hover:bg-white/10 để đảm bảo tương phản
              className="h-9 w-9 p-0 text-white hover:bg-white/10 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          // Thay đổi: Nền tối hơn một chút (bg-blue-800) để tạo sự phân biệt với header chính
          <div className="border-t border-white/20 bg-blue-800/90 py-4 backdrop-blur-sm md:hidden">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 px-2 py-1">
                <UserMenu />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  // text-white/90 và hover:text-blue-300
                  className={`px-2 py-1 text-sm font-medium text-white/90 transition-colors hover:${ACCENT_COLOR_CLASS}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative mt-4 px-2">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-white/70" />
                <input
                  type="text"
                  placeholder={t.products.searchPlaceholder}
                  className={`w-full rounded-lg border border-white/20 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-white/70 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white`}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}