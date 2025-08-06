"use client"

import * as React from "react"
// This is the corrected import line
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"
import { useState, useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}