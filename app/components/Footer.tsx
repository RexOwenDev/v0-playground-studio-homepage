'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Footer() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

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
    <footer className="border-t border-current/10">
      {/* Main footer content */}
      <div className="px-4 sm:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 md:gap-16">
          {/* Left column - Copyright and acknowledgement */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.1em] opacity-60">
              © Playground Studio 2026
            </p>
            <p className="text-xs leading-relaxed opacity-50 max-w-sm">
              We acknowledge First Nations peoples as the traditional custodians of lands, seas and waters throughout Australia. Our studio stands on the land of the Boon Wurrung people of the Kulin Nation, and we pay our respects to their elders past and present.
            </p>
            
            {/* Theme Toggle */}
            {mounted && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`text-xs uppercase tracking-[0.1em] transition-opacity ${
                    resolvedTheme === 'light' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  Light
                </button>
                <div 
                  className="w-12 h-6 rounded-full bg-current/10 relative cursor-pointer"
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  role="switch"
                  aria-checked={resolvedTheme === 'dark'}
                  aria-label="Toggle theme"
                >
                  <div 
                    className={`absolute top-1 w-4 h-4 rounded-full bg-current transition-all duration-200 ${
                      resolvedTheme === 'dark' ? 'left-7' : 'left-1'
                    }`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`text-xs uppercase tracking-[0.1em] transition-opacity ${
                    resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  Dark
                </button>
              </div>
            )}
          </div>

          {/* Middle column - Navigation */}
          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="text-xs uppercase tracking-[0.1em] opacity-60 hover:opacity-100 transition-opacity w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right column - Social */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              link.internal ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.1em] opacity-60 hover:opacity-100 transition-opacity w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.1em] opacity-60 hover:opacity-100 transition-opacity w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling PLAYGROUND marquee */}
      <div className="overflow-hidden border-t border-current/5 py-4">
        <div 
          className="flex whitespace-nowrap animate-marquee"
          style={{
            width: 'fit-content',
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span 
              key={i} 
              className="text-[20vw] sm:text-[15vw] md:text-[12vw] font-black uppercase leading-none tracking-[-0.02em] mx-4 select-none"
              style={{ fontStretch: 'condensed' }}
              aria-hidden={i > 0}
            >
              PLAYGROUND
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </footer>
  )
}
