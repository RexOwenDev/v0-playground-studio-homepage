'use client'

import { useEffect, useRef, useState } from 'react'

export function WorkCTA() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-4 sm:px-8 border-t border-current/10 transition-all duration-600 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tight">
          Have a project in mind?
        </h2>
        <a
          href="/contact"
          className="inline-block mt-6 text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          Start a conversation →
        </a>
      </div>
    </section>
  )
}
