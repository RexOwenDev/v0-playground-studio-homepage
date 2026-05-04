'use client'

import { useEffect, useRef, useState } from 'react'

export function StudioStatement() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-16 md:py-32 px-4 sm:px-8 border-t border-current/10 transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
      }}
      aria-labelledby="statement-heading"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          id="statement-heading"
          className="text-2xl sm:text-3xl md:text-5xl font-medium uppercase tracking-tight leading-tight text-balance"
        >
          Designers. Writers. Strategists. Big dreamers.
        </h2>

        <div className="mt-6">
          <a
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            Start a project →
          </a>
        </div>
      </div>
    </section>
  )
}
