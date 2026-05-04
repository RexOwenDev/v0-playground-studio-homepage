'use client'

import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
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
  const [hasRolled, setHasRolled] = useState(false)
  const logoRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
      
      // Trigger roll animation once when first scrolling down
      if (isScrolled && !hasRolled) {
        setHasRolled(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasRolled])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

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
      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-foreground/5' 
            : 'bg-transparent'
        }`}
      >
        <nav 
          className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-5"
          aria-label="Main navigation"
        >
          {/* Logo with Rolling Animation */}
          <Link 
            href="/" 
            className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            aria-label="Playground Studio - Home"
          >
            <span 
              ref={logoRef}
              className={`pg-logo inline-block font-black tracking-tighter text-xl sm:text-2xl text-foreground group-hover:opacity-70 transition-opacity duration-200 ${
                hasRolled ? 'animate-roll-once' : ''
              }`}
            >
              PLAYGROUND
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`relative text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                  isActive(link.href) 
                    ? 'text-foreground' 
                    : 'text-foreground/50 hover:text-foreground'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-foreground/10 text-foreground hover:border-foreground/30 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                {mounted ? (
                  resolvedTheme === 'dark' ? (
                    <Sun size={16} strokeWidth={1.5} />
                  ) : (
                    <Moon size={16} strokeWidth={1.5} />
                  )
                ) : (
                  <div className="w-4 h-4 rounded-full bg-foreground/20" />
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
            className="lg:hidden p-2 -mr-2 text-foreground hover:text-foreground/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
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
          <span className="pg-logo font-black tracking-tighter text-xl sm:text-2xl text-foreground">PLAYGROUND</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 -mr-2 text-foreground hover:text-foreground/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col justify-between h-[calc(100vh-80px)] px-4 sm:px-6 pb-8">
          <nav className="flex flex-col gap-1 mt-8" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl sm:text-3xl font-medium tracking-tight py-3 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                  isActive(link.href) ? 'text-foreground' : 'text-foreground/40 hover:text-foreground'
                }`}
                style={{
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: menuOpen ? 1 : 0,
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
                className="text-sm text-foreground/40 hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/playgroundstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm text-foreground/40 hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors"
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
