"use client"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"
import { CartProvider } from "@/components/cart/cart-context"
import { type ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <LanguageProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
