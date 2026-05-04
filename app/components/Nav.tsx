'use client'

import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const links = [
  { href: '/work', label: 'WORK' },
  { href: '/capabilities', label: 'CAPABILITY' },
  { href: '/team', label: 'TEAM' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Nav() {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + '/')

  return (
    <>
      {/* Large PLAYGROUND wordmark */}
      <div className="w-full overflow-hidden px-2 sm:px-4 pt-4 sm:pt-6">
        <Link 
          href="/" 
          className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          aria-label="Playground Studio — Home"
        >
          <h1 
            className="text-[15vw] sm:text-[14vw] md:text-[12vw] font-black uppercase leading-[0.85] tracking-[-0.02em] select-none"
            style={{ fontStretch: 'condensed' }}
          >
            PLAYGROUND
          </h1>
        </Link>
      </div>

      {/* Navigation bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-current/5">
        <nav 
          className="flex items-center justify-between px-4 sm:px-8 py-4"
          aria-label="Main navigation"
        >
          {/* Desktop links - spread across */}
          <div className="hidden md:flex items-center justify-between w-full">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`text-xs tracking-[0.15em] uppercase transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current flex items-center gap-2 ${
                  isActive(link.href) ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-xs tracking-[0.15em] uppercase opacity-50">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="w-10 h-10 flex items-center justify-center -mr-2 hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Close button */}
          <div className="flex justify-end p-4 sm:p-6">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center text-white hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white hover:opacity-60 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-6">
              <a
                href="https://www.instagram.com/_PLAYGROUNDSTUDIO/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-white opacity-50 hover:opacity-100 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/playgroundstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="text-white opacity-50 hover:opacity-100 transition-opacity"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            {/* Theme toggle in mobile menu */}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="mt-8 text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors"
              >
                {resolvedTheme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
