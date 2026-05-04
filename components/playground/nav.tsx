'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'sticky top-0 z-50 w-full flex items-center justify-between py-5 px-4 sm:px-8',
        'border-b border-current/10',
        'transition-colors duration-500',
        scrolled
          ? 'bg-black/95 dark:bg-black/95 backdrop-blur-sm text-white'
          : 'bg-transparent',
      ].join(' ')}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        href="/"
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        aria-label="Playground Studio — home"
      >
        <svg
          width="140"
          height="32"
          viewBox="0 0 140 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <text
            x="0"
            y="13"
            fontFamily="var(--font-inter), sans-serif"
            fontSize="13"
            fontWeight="500"
            letterSpacing="0.04em"
            fill="currentColor"
            textAnchor="start"
          >
            PLAYGROUND
          </text>
          <text
            x="0"
            y="29"
            fontFamily="var(--font-inter), sans-serif"
            fontSize="13"
            fontWeight="500"
            letterSpacing="0.04em"
            fill="currentColor"
            textAnchor="start"
          >
            STUDIO
          </text>
        </svg>
      </a>

      {/* Centre nav links */}
      <ul className="hidden lg:flex items-center gap-10" role="list">
        {['WORK', 'CAPABILITY', 'TEAM', 'CONTACT'].map((label) => (
          <li key={label}>
            <a
              href={`/${label.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="w-9 h-9 border border-current/20 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {mounted ? (
          theme === 'dark' ? (
            <Sun size={14} aria-hidden="true" />
          ) : (
            <Moon size={14} aria-hidden="true" />
          )
        ) : (
          <span className="w-[14px] h-[14px]" />
        )}
      </button>
    </nav>
  )
}
