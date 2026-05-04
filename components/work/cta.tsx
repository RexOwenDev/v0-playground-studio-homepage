'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02] transition-all duration-600 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-foreground/40 mb-4">Have a project in mind?</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
          Let&apos;s bring it to life.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-8 text-sm tracking-wide bg-foreground text-background px-6 py-3.5 hover:bg-foreground/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          Start a conversation
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
