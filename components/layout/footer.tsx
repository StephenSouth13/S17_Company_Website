"use client";

import Link from "next/link"
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t, language } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">S17</span>
                <span className="text-xs text-muted-foreground">Trading</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === "vi"
                ? "Nền tảng thương mại điện tử và đầu tư hàng đầu, mang đến những sản phẩm chất lượng cao và cơ hội đầu tư sinh lời."
                : "Leading e-commerce and investment platform, bringing premium products and profitable investment opportunities."}
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.footer.company.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t.footer.products.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.products.catalog}
                </Link>
              </li>
              <li>
                <Link
                  href="/products?filter=new"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.products.newArrivals}
                </Link>
              </li>
              <li>
                <Link
                  href="/products?filter=bestsellers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.products.bestsellers}
                </Link>
              </li>
              <li>
                <Link
                  href="/products?filter=deals"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.products.deals}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {language === "vi" ? "Thông tin liên hệ" : "Contact Information"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {language === "vi"
                    ? "123 Đường ABC, Quận 1, TP.HCM, Việt Nam"
                    : "123 ABC Street, District 1, Ho Chi Minh City, Vietnam"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">contact@s17trading.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">{t.common.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.legal.privacy}
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.legal.terms}
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.legal.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
