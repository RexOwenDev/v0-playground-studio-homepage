'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ScrollMarquee } from '@/components/scroll-marquee'

export default function Footer() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (footerRef.current) {
      observer.observe(footerRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer 
      ref={footerRef}
      className="border-t border-foreground/10 mt-16 md:mt-24"
    >
      {/* Scrolling Marquee */}
      <ScrollMarquee />

      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block text-xl font-semibold tracking-tight text-foreground hover:text-foreground/70 transition-colors">
              Playground Studio
            </Link>
            <p className="text-sm leading-relaxed text-foreground/65 max-w-md">
              A Melbourne creative studio of designers, writers, strategists and big dreamers. We make work that moves you.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/_PLAYGROUNDSTUDIO/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground/65 hover:text-foreground transition-colors group"
              >
                Instagram
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/playgroundstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground/65 hover:text-foreground transition-colors group"
              >
                LinkedIn
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3" aria-label="Footer navigation">
            <p className="text-xs tracking-widest uppercase text-foreground/80 font-semibold mb-4">Navigate</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="block text-sm text-foreground/65 hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="space-y-3">
            <p className="text-xs tracking-widest uppercase text-foreground/80 font-semibold mb-4">Contact</p>
            <a 
              href="mailto:hello@playgroundstudio.com.au"
              className="block text-sm text-foreground/65 hover:text-foreground transition-colors"
            >
              hello@playgroundstudio.com.au
            </a>
            <a 
              href="tel:+61419248668"
              className="block text-sm text-foreground/65 hover:text-foreground transition-colors"
            >
              +61 419 248 668
            </a>
            <p className="text-sm text-foreground/55">
              23 Union St<br />
              South Melbourne VIC 3205
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-xs text-foreground/55">
              © {new Date().getFullYear()} Playground Studio
            </p>
            <Link 
              href="/privacy" 
              className="text-xs text-foreground/55 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          
          {/* Theme Toggle */}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="text-xs text-foreground/55 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <span className={resolvedTheme === 'light' ? 'text-foreground/80' : 'text-foreground/55'}>Light</span>
              <span className="text-foreground/30">/</span>
              <span className={resolvedTheme === 'dark' ? 'text-foreground/80' : 'text-foreground/55'}>Dark</span>
            </button>
          )}
        </div>
        
        {/* First Nations Acknowledgement */}
        <p className="mt-8 text-xs leading-relaxed text-foreground/45 max-w-2xl">
          We acknowledge First Nations peoples as the traditional custodians of lands, seas and waters throughout Australia. Our studio stands on the land of the Boon Wurrung people of the Kulin Nation, and we pay our respects to their elders past and present.
        </p>
      </div>
    </footer>
  )
}
