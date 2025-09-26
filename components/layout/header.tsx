// components/layout/header.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, Sun, Moon } from "lucide-react"
import { UserMenu } from "@/components/auth/user-menu"
import { CartSidebar } from "@/components/cart/cart-sidebar"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
<header className="sticky top-0 z-50 w-full bg-primary shadow-lg">      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="transition-transform duration-300 hover:scale-105">
            <Image
              src={theme === 'dark' ? "/s17-logo.png" : "/s17-logo.png"}
              alt="S17 Trading Logo"
              width={100}
              height={30}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t.products.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all duration-300 hover:shadow-sm"
            />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0 ml-auto">
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 transition-colors hover:bg-secondary/20"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <span className="sr-only">Toggle theme</span>
              {theme === 'dark' ? <Sun className="h-5 w-5 text-secondary" /> : <Moon className="h-5 w-5 text-primary" />}
            </Button>
            <LanguageSwitcher />
            <CartSidebar />
            <div className="hidden md:block">
              <UserMenu />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-9 w-9 p-0 transition-colors hover:bg-secondary/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 px-2 py-1">
                <UserMenu />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative mt-4 px-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t.products.searchPlaceholder}
                  className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}