'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function FaviconSwitcher() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null
    if (!favicon) return
    favicon.href = resolvedTheme === 'dark' ? '/favicon-white.png' : '/favicon-black.png'
  }, [resolvedTheme])

  return null
}
