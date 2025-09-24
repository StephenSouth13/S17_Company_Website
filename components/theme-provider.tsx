'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes'

type Props = NextThemesProviderProps & {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
