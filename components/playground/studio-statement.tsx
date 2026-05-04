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
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02] transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
      }}
      aria-labelledby="statement-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-foreground/40 mb-6">Who we are</p>
        <h2
          id="statement-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] text-foreground text-balance"
        >
          Designers. Writers. Strategists.
          <span className="block text-foreground/60 mt-2">Big dreamers.</span>
        </h2>
        <p className="mt-8 text-base sm:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
          We&apos;re a design-led branding and communications studio. We make work that moves you.
        </p>
      </div>
    </section>
  )
}
