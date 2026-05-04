export function Footer() {
  return (
    <footer className="border-t border-current/10 py-10 md:py-12 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
        {/* Logo */}
        <div>
          <a
            href="/"
            className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            aria-label="Playground Studio — home"
          >
            <svg
              width="100"
              height="28"
              viewBox="0 0 100 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <text
                x="0"
                y="11"
                fontFamily="var(--font-inter), sans-serif"
                fontSize="11"
                fontWeight="500"
                letterSpacing="0.04em"
                fill="currentColor"
              >
                PLAYGROUND
              </text>
              <text
                x="0"
                y="25"
                fontFamily="var(--font-inter), sans-serif"
                fontSize="11"
                fontWeight="500"
                letterSpacing="0.04em"
                fill="currentColor"
              >
                STUDIO
              </text>
            </svg>
          </a>
        </div>

        {/* Address */}
        <address className="not-italic text-xs opacity-40 text-left md:text-center">
          23 Union St · South Melbourne · VIC 3205
        </address>

        {/* Email */}
        <div className="text-left md:text-right">
          <a
            href="mailto:hello@playgroundstudio.com.au"
            className="text-xs opacity-40 hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            hello@playgroundstudio.com.au
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-current/10 mt-8 pt-6">
        <p className="text-xs opacity-20 text-center">
          © 2025 Playground Studio.
        </p>
      </div>
    </footer>
  )
}
