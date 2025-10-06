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

// TẠO AUTH MODAL STATE VÀ IMPORT
import { AuthModal } from "@/components/auth/AuthModal"; // Đảm bảo đường dẫn này đúng

type AuthView = 'login' | 'register' | 'forgot-password';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  
  // STATE MỚI: Quản lý Auth Modal
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<AuthView>('login');


  // KHÓA CỨNG MÀU NỀN CHO CẢ PC VÀ MOBILE
  const BG_COLOR = 'bg-[#60A5FA]'; // Xanh dương nhẹ đẹp (Header chính)
  const MOBILE_MENU_BG = 'bg-[#3B82F6]'; // Xanh dương đậm hơn (Menu mobile)
  const ACCENT_COLOR = '#FFD06D'; // Màu vàng cho điểm nhấn

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
  
  // HÀM MỞ AUTH MODAL
  const handleOpenAuthModal = (tab: AuthView) => {
    setAuthDefaultTab(tab);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false); // Đóng menu mobile khi mở modal
  }

  return (
    // HEADER CHÍNH (PC & MOBILE) - KHÓA MÀU NỀN
    <>
        <header className={`sticky top-0 z-50 w-full ${BG_COLOR} shadow-lg`}>
          <div className="container mx-auto px-4">
            
            {/* Flex container chính */}
            <div className="flex h-16 items-center justify-between">
              
              {/* 1. Logo */}
             <Link
  href="/"
  className="flex items-center flex-shrink-0 h-16 transition-transform duration-300 hover:scale-105"
>
  <Image
    src="/logos17/logo.png"
    alt="S17 Trading Logo"
    width={100}
    height={40} // tăng một chút để cân đối
    className="object-contain"
  />
</Link>

              
              {/* Desktop Nav và Search (Chỉ hiển thị trên PC) */}
              <div className="hidden md:flex flex-grow items-center justify-end">
                
                {/* Desktop Nav */}
                <nav className="flex items-center space-x-6 lg:space-x-8 mr-10"> 
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-white text-base font-medium transition-colors duration-200 hover:text-white/70`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Search bar (desktop) */}
                <div className="relative flex-shrink-0 items-center space-x-2 hidden lg:flex max-w-xs">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-white/70" />
                  <input
                    type="text"
                    placeholder={t.products.searchPlaceholder}
                    className={`w-full rounded-full border border-white/40 bg-white/20 py-2 pl-10 pr-4 text-sm text-white placeholder-white/80 transition-all duration-300 focus:border-white focus:outline-none focus:ring-1 focus:ring-white`}
                  />
                </div>
              </div>

              {/* 2. Actions (Icon, Cart, Menu Mobile) */}
              <div className="ml-4 flex flex-shrink-0 items-center space-x-2 sm:space-x-3">
                
                {/* Theme toggle */}
                <button
                  aria-label="Toggle color theme"
                  className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-black/10"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  title="Toggle theme"
                >
                  <Sun
                    className={`absolute h-5 w-5 transition-all duration-300 ${
                      theme === "dark" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
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
                  size="icon"
                  className="h-10 w-10 p-0 text-white hover:bg-black/10 md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* 3. Mobile menu - ĐÃ FIX LỖI LẶP VÀ SIÊU ĐẸP */}
            {isMenuOpen && (
              <div className={`border-t border-white/20 ${MOBILE_MENU_BG} py-6 md:hidden`}>
                <nav className="flex flex-col space-y-2">
                  
                  {/* A. Thanh Tìm kiếm (Search) - Vị trí đầu tiên */}
                  <div className="relative px-4 pb-4"> 
                    <Search className="absolute left-7 top-1/2 h-5 w-5 -translate-y-1/2 transform text-white/80" />
                    <input
                      type="text"
                      placeholder={t.products.searchPlaceholder}
                      className={`w-full rounded-xl border-2 border-white/50 bg-white/10 py-3 pl-12 pr-4 text-base text-white placeholder-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white`}
                    />
                  </div>

                  {/* B. Navigation Links */}
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-3 text-lg font-bold text-white transition-colors duration-200 hover:bg-white/10 hover:rounded-lg mx-2`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* C. Đăng nhập/Đăng ký - Cuối cùng, phân cách */}
                  <div className="pt-4 border-t border-white/20 mx-2">
                    
                    {/* Khối Đăng nhập / Đăng ký links tùy chỉnh */}
                    <div className="flex flex-col space-y-2 px-2">
                        {/* SỬ DỤNG BUTTON GỌI MODAL THAY CHO LINK */}
                        <button
                          onClick={() => handleOpenAuthModal('login')}
                          style={{ color: ACCENT_COLOR }} // Sử dụng màu vàng nhấn
                          className="text-left text-lg font-bold transition-colors hover:text-white/90" 
                        >
                          Đăng nhập
                        </button>
                        {/* SỬ DỤNG BUTTON GỌI MODAL THAY CHO LINK */}
                        <button
                          onClick={() => handleOpenAuthModal('register')}
                          className="text-left text-lg font-bold text-white transition-colors hover:text-[#FFD06D]" 
                        >
                          Đăng ký
                        </button>
                    </div>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
        
        {/* THÊM AUTH MODAL VÀO DƯỚI HEADER */}
        {mounted && (
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                defaultTab={authDefaultTab}
            />
        )}
    </>
  );
}
