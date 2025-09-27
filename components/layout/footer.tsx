"use client";

import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#0077C8] text-white border-t border-[#005ea3]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#FFD06D]">
                <Building2 className="h-6 w-6 text-[#0077C8]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold" style={{ background: 'linear-gradient(90deg, #FFD06D, #0077C8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  S17
                </span>
                <span className="text-xs text-white/80">Trading</span>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {language === "vi"
                ? "Nền tảng thương mại điện tử và đầu tư hàng đầu, mang đến những sản phẩm chất lượng cao và cơ hội đầu tư sinh lời."
                : "Leading e-commerce and investment platform, bringing premium products and profitable investment opportunities."}
            </p>
            <div className="flex space-x-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4 text-white" />
                </Button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFD06D]">{t.footer.company.title}</h3>
            <ul className="space-y-2">
              {(["home", "products", "services", "about", "contact"] as const).map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${slug === "home" ? "" : slug}`}
                    className="text-sm text-white/80 hover:text-[#FFD06D] transition-colors"
                  >
                    {t.nav[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFD06D]">{t.footer.products.title}</h3>
            <ul className="space-y-2">
              {[
                { href: "/products", label: t.footer.products.catalog },
                { href: "/products?filter=new", label: t.footer.products.newArrivals },
                { href: "/products?filter=bestsellers", label: t.footer.products.bestsellers },
                { href: "/products?filter=deals", label: t.footer.products.deals },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-[#FFD06D] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFD06D]">
              {language === "vi" ? "Thông tin liên hệ" : "Contact Information"}
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#FFD06D]" />
                <span>
                  {language === "vi"
                    ? "123 Trương Định, Quận 3, TP.HCM, Việt Nam"
                    : "123 Truong Dinh , District 3, Ho Chi Minh City, Vietnam"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#FFD06D]" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#FFD06D]" />
                <span>contact@s17trading.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">© {currentYear} S17 Trading. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {(["privacy", "terms", "cookies"] as const).map((slug) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="text-sm text-white/70 hover:text-[#FFD06D] transition-colors"
              >
                {t.footer.legal[slug]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}