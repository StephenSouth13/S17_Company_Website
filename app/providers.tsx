"use client"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"
import { CartProvider } from "@/components/cart/cart-context"
import { type ReactNode } from "react"

import { useEffect } from "react"

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Install defensive globals to avoid noisy third-party errors (e.g., FullStory) breaking dev RSC fetch
    try {
      const win = window as any
      if (!win.__fetch_wrapped) {
        const originalFetch = win.fetch.bind(win)
        win.__fetch_wrapped = true
        win.fetch = (...args: any[]) => {
          try {
            const url = args[0]
            const isFullStory = typeof url === "string" && url.includes("fullstory.com")
            return originalFetch(...args).catch((err: any) => {
              if (isFullStory && err && (err.message === "Failed to fetch" || err.name === "TypeError")) {
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
      // store so HMR can cleanup later
      ;(window as any).__fs_unhandled_cb = onUnhandled

      return () => {
        // cleanup
        try {
          if ((window as any).__fetch_wrapped) {
            // we cannot reliably restore original fetch if other code wrapped it; so only remove our marker
            delete (window as any).__fetch_wrapped
          }
        } catch (e) {}
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
