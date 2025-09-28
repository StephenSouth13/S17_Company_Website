// components/layout/header.tsx
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

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#66B2FF] via-[#80CFFF] to-[#A3E0FF] backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="transition-transform duration-300 hover:scale-105">
            <Image
              src={theme === "dark" ? "/s17-logo.png" : "/s17-logo.png"}
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
                className="relative text-white/90 text-sm font-medium transition-colors hover:text-accent group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          {/* Search bar (desktop) */}
          <div className="relative mx-8 hidden flex-1 items-center space-x-2 lg:flex max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-white/70" />
            <input
              type="text"
              placeholder={t.products.searchPlaceholder}
              className="w-full rounded-lg border border-white/20 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-white/70 transition-all duration-300 hover:shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Actions */}
          <div className="ml-auto flex flex-shrink-0 items-center space-x-2 sm:space-x-4">
            {/* Theme toggle */}
            <button
              aria-label="Toggle color theme"
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle theme"
            >
              <span className={`icon-wrap moon ${theme === "dark" ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
                <Moon className="h-5 w-5 text-white" />
              </span>
              <span className={`icon-wrap sun ${theme === "dark" ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}>
                <Sun className="h-5 w-5 text-white" />
              </span>
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
              className="h-9 w-9 p-0 text-white hover:bg-white/10 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-white/20 bg-primary/90 py-4 backdrop-blur-md md:hidden">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 px-2 py-1">
                <UserMenu />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-1 text-sm font-medium text-white/90 transition-colors hover:text-accent"
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
                  className="w-full rounded-lg border border-white/20 bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-white/70 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}