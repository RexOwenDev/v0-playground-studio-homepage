'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export function Hero() {
  const [visible, setVisible] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Handle video load error gracefully
  const handleVideoError = () => {
    setVideoError(true)
  }

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero"
    >
      {/* Video/Image Background */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.5/1] w-full bg-neutral-900">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* Placeholder video - shows brand work in motion */}
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-21-large.mp4" 
              type="video/mp4" 
            />
          </video>
        ) : (
          /* Fallback gradient if video fails */
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
            aria-hidden="true"
          />
        )}
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      </div>

      {/* Statement section */}
      <div className="px-4 sm:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-16 items-start">
          <p 
            className="text-xs tracking-[0.2em] uppercase opacity-50 transition-all duration-700"
            style={{
              opacity: visible ? 0.5 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            • Hello
          </p>
          <div>
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium uppercase tracking-tight leading-snug transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms',
              }}
            >
              We&apos;re a design-led branding and communications studio. We&apos;re designers, writers, 3D and motion artists, data scientists, social media experts and strategists. We make work that moves you.
            </h2>
            <Link
              href="/capabilities"
              className="inline-block mt-6 text-xs tracking-[0.15em] uppercase border border-current/30 px-5 py-2.5 hover:bg-current hover:text-background transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '200ms',
              }}
            >
              Here&apos;s what we can do →
            </Link>
          </div>
        </div>
        <p
          className="mt-8 md:mt-12 text-xs tracking-[0.2em] uppercase opacity-50 text-right transition-all duration-700"
          style={{
            opacity: visible ? 0.5 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '300ms',
          }}
        >
          Where change happens.
        </p>
      </div>
    </section>
  )
}
