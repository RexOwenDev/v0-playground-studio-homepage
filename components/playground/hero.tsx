'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [visible, setVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section
      className="relative h-[100dvh] min-h-[600px] overflow-hidden"
      aria-label="Hero"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="https://playgroundstudio.com.au/img/home/pg-showreel.mp4"
          type="video/mp4"
        />
      </video>

      {/* Base overlay */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Bottom gradient — tall enough to cover raised content block */}
      <div
        className="absolute bottom-0 inset-x-0 h-80 sm:h-80 md:h-[36rem] bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Content — percentage-based bottom so it scales with any screen height */}
      <div
        className="absolute left-0 right-0 z-10 px-4 sm:px-6 lg:px-8"
        style={{ bottom: 'max(10%, 80px)' }}
      >
        {/* PLAYGROUND wordmark */}
        <h1
          className="font-black uppercase text-white leading-none tracking-tighter transition-all duration-1000"
          style={{
            fontSize: 'clamp(2.5rem, 11vw, 10rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          PLAYGROUND
        </h1>

        {/* CTAs — tight to wordmark, wrap on very small screens */}
        <div
          className="mt-4 sm:mt-5 flex flex-wrap gap-3 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '300ms',
          }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wide bg-white text-black px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-white/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View our work
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wide border border-white/30 text-white px-5 sm:px-6 py-3 sm:py-3.5 hover:border-white/60 hover:bg-white/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  )
}
