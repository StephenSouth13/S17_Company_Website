// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

// Đảm bảo rằng component nhận props children
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false} 
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}