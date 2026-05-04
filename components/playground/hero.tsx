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
      className="relative h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden"
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

      {/* Overlay — locks contrast regardless of light/dark mode */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Subtle radial orb — keeps the modern touch on top of video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl bg-white/5 transition-opacity duration-1000"
          style={{ opacity: visible ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8">
        {/* PLAYGROUND wordmark */}
        <h1
          className="font-black uppercase text-white leading-none tracking-tighter transition-all duration-1000"
          style={{
            fontSize: 'clamp(3rem, 14vw, 13rem)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          PLAYGROUND
        </h1>

        {/* Tagline */}
        <p
          className="mt-4 text-white/60 uppercase tracking-[0.3em] text-xs sm:text-sm transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '300ms' }}
        >
          Bold. Brave. Melbourne.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-4 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '500ms',
          }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm tracking-wide bg-white text-black px-6 py-3.5 hover:bg-white/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View our work
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm tracking-wide border border-white/30 text-white px-6 py-3.5 hover:border-white/60 hover:bg-white/10 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start a project
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-700"
        style={{ opacity: visible ? 0.5 : 0, transitionDelay: '800ms' }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase text-white/50">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/60 animate-scroll-line" />
        </div>
      </div>

      {/* Bottom fade — smooth into next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent"
        aria-hidden="true"
      />

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 1.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-line { animation: none; }
        }
      `}</style>
    </section>
  )
}
