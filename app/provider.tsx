"use client"

import * as React from "react"
// Import NextThemesProvider from the updated package instead
import { ThemeProvider as NextThemesProvider } from '@teispace/next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
