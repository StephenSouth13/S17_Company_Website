"use client"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"
import { CartProvider } from "@/components/cart/cart-context"
import { type ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  // Install defensive globals to avoid noisy third-party errors (e.g., FullStory) breaking dev RSC fetch
  // This is intentionally conservative: only intercept network errors for known external hosts
  if (typeof window !== "undefined") {
    try {
      const win = window as any
      if (!win.__fetch_wrapped) {
        const originalFetch = win.fetch.bind(win)
        win.__fetch_wrapped = true
        win.fetch = (...args: any[]) => {
          try {
            const url = args[0]
            // If the call is to FullStory or its edge domain, swallow network failures and return a 204 Response
            const isFullStory = typeof url === "string" && url.includes("fullstory.com")
            return originalFetch(...args).catch((err: any) => {
              if (isFullStory && err && (err.message === "Failed to fetch" || err.name === "TypeError")) {
                // Return an empty successful Response so callers won't crash
                try {
                  return Promise.resolve(new Response(null, { status: 204, statusText: "No Content" }))
                } catch (e) {
                  return Promise.resolve(undefined)
                }
              }
              return Promise.reject(err)
            })
          } catch (e) {
            return originalFetch(...args)
          }
        }
      }
    } catch (e) {
      // ignore
    }

    // Suppress unhandledrejection noise from third-party scripts in dev
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
    // ensure removal on HMR; keep reference on window so we can cleanup if module reloads
    ;(window as any).__fs_unhandled_cb = onUnhandled
  }

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
