"use client"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"
import { CartProvider } from "@/components/cart/cart-context"
import { type ReactNode } from "react"

import { useEffect } from "react"

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Suppress unhandledrejection noise from third-party scripts (e.g., FullStory) in dev
    try {
      const onUnhandled = (ev: PromiseRejectionEvent) => {
        try {
          const reason = ev.reason
          if (reason && typeof reason === "object") {
            const msg = (reason.message || "").toString()
            const stack = (reason.stack || "").toString()
            if (msg.includes("Failed to fetch") || stack.includes("fullstory.com")) {
              ev.preventDefault()
            }
          }
        } catch (e) {
          // noop
        }
      }

      window.addEventListener("unhandledrejection", onUnhandled)
      ;(window as any).__fs_unhandled_cb = onUnhandled

      return () => {
        try {
          const cb = (window as any).__fs_unhandled_cb
          if (cb) window.removeEventListener("unhandledrejection", cb)
          delete (window as any).__fs_unhandled_cb
        } catch (e) {}
      }
    } catch (e) {
      // ignore
    }
  }, [])

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
