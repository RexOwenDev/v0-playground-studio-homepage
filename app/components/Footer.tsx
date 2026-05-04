'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animate footer on scroll into view
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
      className="border-t border-current/10 mt-16 md:mt-24"
    >
      {/* CTA Section */}
      <div 
        className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xs tracking-widest uppercase opacity-50 mb-4">Ready to start?</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight max-w-4xl mx-auto">
          Let&apos;s create something bold together.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-8 text-sm tracking-wide border border-current/30 px-6 py-3 hover:bg-current hover:text-background transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          Start a conversation
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-current/10 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
              Playground Studio
            </Link>
            <p className="text-sm leading-relaxed opacity-60 max-w-md">
              A Melbourne creative studio of designers, writers, strategists and big dreamers. We make work that moves you.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/_PLAYGROUNDSTUDIO/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 transition-opacity group"
              >
                Instagram
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/playgroundstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 transition-opacity group"
              >
                LinkedIn
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3" aria-label="Footer navigation">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-4">Navigate</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="block text-sm opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="space-y-3">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-4">Contact</p>
            <a 
              href="mailto:hello@playgroundstudio.com.au"
              className="block text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              hello@playgroundstudio.com.au
            </a>
            <a 
              href="tel:+61419248668"
              className="block text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              +61 419 248 668
            </a>
            <p className="text-sm opacity-40">
              23 Union St<br />
              South Melbourne VIC 3205
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-current/10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-xs opacity-40">
              © {new Date().getFullYear()} Playground Studio
            </p>
            <Link 
              href="/privacy" 
              className="text-xs opacity-40 hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </Link>
          </div>
          
          {/* Theme Toggle */}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="text-xs opacity-40 hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <span className={resolvedTheme === 'light' ? 'opacity-100' : 'opacity-50'}>Light</span>
              <span className="text-current/30">/</span>
              <span className={resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-50'}>Dark</span>
            </button>
          )}
        </div>
        
        {/* First Nations Acknowledgement */}
        <p className="mt-8 text-xs leading-relaxed opacity-30 max-w-2xl">
          We acknowledge First Nations peoples as the traditional custodians of lands, seas and waters throughout Australia. Our studio stands on the land of the Boon Wurrung people of the Kulin Nation, and we pay our respects to their elders past and present.
        </p>
      </div>
    </footer>
  )
}
