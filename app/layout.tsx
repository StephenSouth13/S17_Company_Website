import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Providers } from "./providers"
import "./globals.css"
import BackToTop from "@/components/BackToTop"; // import nút back to top
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
  title: "S17 - Trung tâm Phát triển Kinh tế",
  description:
    "Discover premium products and investment opportunities with S17 Trading. Your trusted partner for quality goods and financial growth.",
 generator: "S17 Trading Platform",
  keywords: ["e-commerce", "investment", "trading", "premium products", "S17"],
  authors: [{ name: "S17 Trading" }],
  creator: "S17 Trading",
  publisher: "S17 Trading",
  robots: "index, follow",

  // ➡️ Đặt thuộc tính icons ở đây (cấp cao nhất)
  icons: {
    icon: "/favico.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    // ...các thuộc tính openGraph
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    title: "S17 Trading - Premium E-commerce & Investment Platform",
    description: "Discover premium products and investment opportunities with S17 Trading.",
    siteName: "S17 Trading",
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`font-sans ${workSans.variable} ${openSans.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Providers>
            {children}
          </Providers>
          <BackToTop /> {/* Nút back to top */}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
