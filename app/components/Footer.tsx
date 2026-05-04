'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { ScrollMarquee } from '@/components/scroll-marquee'

export default function Footer() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Capability', href: '/capabilities' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/_PLAYGROUNDSTUDIO/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/playgroundstudio/' },
    { label: 'Privacy Policy', href: '/privacy', internal: true },
  ]

  return (
    <footer 
      ref={footerRef}
      className="mt-16 md:mt-24 border-t border-foreground/10"
    >
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16">
          {/* Left Column - Copyright & Acknowledgement */}
          <div className="flex flex-col gap-4 lg:max-w-md">
            <p className="text-sm uppercase tracking-wide text-foreground/70">
              © Playground Studio {new Date().getFullYear()}
            </p>
            <p className="text-xs leading-relaxed text-foreground/50 max-w-md">
              We acknowledge First Nations peoples as the traditional custodians of lands, seas and waters throughout Australia. Our studio stands on the land of the Boon Wurrung people of the Kulin Nation, and we pay our respects to their elders past and present.
            </p>
            
            {/* Theme Toggle */}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="flex items-center gap-2 text-xs uppercase tracking-wide mt-2"
              >
                <span className={resolvedTheme === 'light' ? 'text-foreground' : 'text-foreground/50'}>Light</span>
                <span className="relative w-10 h-5 rounded-full border border-foreground/30">
                  <span 
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground transition-all duration-200 ${
                      resolvedTheme === 'dark' ? 'left-[calc(100%-16px)]' : 'left-1'
                    }`}
                  />
                </span>
                <span className={resolvedTheme === 'dark' ? 'text-foreground' : 'text-foreground/50'}>Dark</span>
              </button>
            )}
          </div>

          {/* Right Column - Navigation Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {/* Navigation */}
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className="text-sm uppercase tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                link.internal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm uppercase tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling PLAYGROUND Marquee at Bottom */}
      <ScrollMarquee />
    </footer>
  )
}
