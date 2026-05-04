'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Tiny delay so the browser has painted before we trigger the animation
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="min-h-[calc(100vh-73px)] relative overflow-hidden flex flex-col justify-end pb-12 sm:pb-20 px-4 sm:px-8"
      aria-label="Hero"
    >
      {/* Background — dark placeholder for video */}
      <div className="absolute inset-0 bg-neutral-900" aria-hidden="true" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      {/*
        Production: add behind the divs above —
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
      */}

      {/* Text content */}
      <div className="relative z-10">
        <h1
          className="text-[40px] sm:text-[64px] lg:text-[110px] font-medium uppercase tracking-tight leading-none text-white transition-all duration-[900ms] ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '200ms',
          }}
        >
          Playground Studio
        </h1>

        <p
          className="mt-3 text-xs sm:text-sm tracking-[0.15em] uppercase text-white/60 transition-all duration-[900ms] ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '500ms',
          }}
        >
          Bold, brave brands of the future.
        </p>
      </div>

      {/* Scroll cue */}
      <span
        className="absolute bottom-6 right-6 sm:right-8 text-xs tracking-[0.2em] uppercase text-white/30"
        aria-hidden="true"
      >
        ↓ Scroll
      </span>
    </section>
  )
}
