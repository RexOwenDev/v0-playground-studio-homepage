'use client'

import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Track scroll for nav transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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
  const isHome = pathname === '/'

  return (
    <>
      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-current/5' 
            : 'bg-transparent'
        }`}
      >
        <nav 
          className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-5"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            aria-label="Playground Studio - Home"
          >
            <span className="text-sm sm:text-base font-semibold tracking-tight transition-opacity group-hover:opacity-70">
              Playground Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`relative text-sm tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
                  isActive(link.href) 
                    ? 'opacity-100' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span 
                  className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-current/10 hover:border-current/30 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              {/* Show a neutral icon during SSR to prevent hydration mismatch */}
              <span className="w-4 h-4 block">
                {mounted ? (
                  resolvedTheme === 'dark' ? (
                    <Sun size={16} strokeWidth={1.5} />
                  ) : (
                    <Moon size={16} strokeWidth={1.5} />
                  )
                ) : (
                  <span className="w-4 h-4 block rounded-full bg-current/20" />
                )}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="lg:hidden p-2 -mr-2 hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-background transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 sm:p-6">
          <span className="text-sm font-semibold tracking-tight">Playground Studio</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 -mr-2 hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col justify-between h-[calc(100vh-80px)] px-4 sm:px-6 pb-8">
          <nav className="flex flex-col gap-2 mt-8" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={() => setMenuOpen(false)}
                className={`text-4xl sm:text-5xl font-medium tracking-tight py-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
                  isActive(link.href) ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
                style={{
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: menuOpen ? (isActive(link.href) ? 1 : 0.5) : 0,
                  transitionDelay: menuOpen ? `${index * 75}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/_PLAYGROUNDSTUDIO/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/playgroundstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                LinkedIn
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity"
            >
              {mounted ? (
                <>
                  {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                  {resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'}
                </>
              ) : (
                <span>Toggle theme</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
