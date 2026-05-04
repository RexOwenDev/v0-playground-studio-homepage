import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-current/10 py-10 md:py-12 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* Logo */}
        <div>
          <Link href="/" aria-label="Playground Studio">
            <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
              <text
                x="0"
                y="10"
                fontFamily="inherit"
                fontSize="10"
                fontWeight="500"
                letterSpacing="-0.02em"
                fill="currentColor"
                style={{ textTransform: 'uppercase' }}
              >
                PLAYGROUND
              </text>
              <text
                x="0"
                y="22"
                fontFamily="inherit"
                fontSize="10"
                fontWeight="500"
                letterSpacing="-0.02em"
                fill="currentColor"
                style={{ textTransform: 'uppercase' }}
              >
                STUDIO
              </text>
            </svg>
          </Link>
        </div>
        {/* Address */}
        <p className="text-xs opacity-40 md:text-center">
          23 Union St · South Melbourne · VIC 3205
        </p>
        {/* Contact */}
        <p className="text-xs opacity-40 md:text-right">
          hello@playgroundstudio.com.au
        </p>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-current/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs opacity-20">© 2025 Playground Studio. All rights reserved.</p>
        <nav className="flex gap-6" aria-label="Footer navigation">
          {[
            ['Work', '/work'],
            ['Capability', '/capabilities'],
            ['Team', '/team'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.15em] uppercase opacity-30 hover:opacity-70 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
