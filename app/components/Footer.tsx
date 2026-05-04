import Link from 'next/link'

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
  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Capability', href: '/capabilities' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/_PLAYGROUNDSTUDIO/', icon: InstagramIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/playgroundstudio/', icon: LinkedInIcon },
  ]

  return (
    <footer className="border-t border-current/10 py-10 md:py-12 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start md:items-center">
        {/* Logo */}
        <div>
          <Link 
            href="/" 
            aria-label="Playground Studio — Home" 
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current inline-block"
          >
            <span className="text-sm font-semibold uppercase tracking-tight">
              Playground Studio
            </span>
          </Link>
        </div>
        {/* Address */}
        <p className="text-xs opacity-60 md:text-center">
          23 Union St · South Melbourne · VIC 3205
        </p>
        {/* Contact */}
        <div className="md:text-right">
          <a 
            href="mailto:hello@playgroundstudio.com.au"
            className="text-xs opacity-60 hover:opacity-100 transition-opacity duration-200"
          >
            hello@playgroundstudio.com.au
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-current/10 mt-8 pt-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
          {/* Copyright and Privacy */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-xs opacity-50">© 2026 Playground Studio. All rights reserved.</p>
            <Link 
              href="/privacy"
              className="text-xs opacity-50 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="text-xs tracking-[0.15em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.label}`}
                className="opacity-50 hover:opacity-100 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
