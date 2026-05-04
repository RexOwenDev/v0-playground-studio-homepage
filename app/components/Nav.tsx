'use client'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Link from 'next/link'

const links = [
  { href: '/work', label: 'WORK' },
  { href: '/capabilities', label: 'CAPABILITY' },
  { href: '/team', label: 'TEAM' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Nav() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + '/')

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 flex items-center justify-between border-b border-current/10 transition-colors duration-500 ${scrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm' : 'bg-transparent'}`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Playground Studio — Home"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <svg width="140" height="32" viewBox="0 0 140 32" fill="none">
            <text
              x="0"
              y="14"
              fontFamily="inherit"
              fontSize="13"
              fontWeight="500"
              letterSpacing="-0.02em"
              fill="currentColor"
              style={{ textTransform: 'uppercase' }}
            >
              PLAYGROUND
            </text>
            <text
              x="0"
              y="30"
              fontFamily="inherit"
              fontSize="13"
              fontWeight="500"
              letterSpacing="-0.02em"
              fill="currentColor"
              style={{ textTransform: 'uppercase' }}
            >
              STUDIO
            </text>
          </svg>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.2em] uppercase transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${isActive(link.href) ? 'opacity-100 underline underline-offset-4 decoration-[0.5px]' : 'opacity-40 hover:opacity-70'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark/light mode"
            className="w-9 h-9 border border-current/20 rounded-full flex items-center justify-center hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            {resolvedTheme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-9 h-9 flex items-center justify-center hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black dark:bg-black flex flex-col items-center justify-center"
          style={{ animation: 'fadeIn 0.25s ease-out' }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-5 right-4 sm:right-8 w-9 h-9 flex items-center justify-center text-white hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X size={20} />
          </button>
          <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-4xl sm:text-5xl font-medium uppercase tracking-tight text-white hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Spacer so content doesn't hide behind fixed nav */}
      <div className="h-[73px]" aria-hidden="true" />

      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </>
  )
}
