import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart/cart-context"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"
import { Suspense } from "react"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "S17 Trading - Premium E-commerce & Investment Platform",
  description:
    "Discover premium products and investment opportunities with S17 Trading. Your trusted partner for quality goods and financial growth.",
  generator: "S17 Trading Platform",
  keywords: ["e-commerce", "investment", "trading", "premium products", "S17"],
  authors: [{ name: "S17 Trading" }],
  creator: "S17 Trading",
  publisher: "S17 Trading",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    title: "S17 Trading - Premium E-commerce & Investment Platform",
    description: "Discover premium products and investment opportunities with S17 Trading.",
    siteName: "S17 Trading",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="dark">
      <body className={`font-sans ${workSans.variable} ${openSans.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <LanguageProvider>
              <CartProvider>{children}</CartProvider>
            </LanguageProvider>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
