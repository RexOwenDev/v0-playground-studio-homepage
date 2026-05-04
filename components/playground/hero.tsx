'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero"
    >
      {/* Video Background */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.5/1] w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          {/* Using a sample video - replace with actual Playground video */}
          <source 
            src="https://player.vimeo.com/external/517090081.sd.mp4?s=60b67e0cf5d8e7a3f62a7a31f3a3d2f0a9f0f0f0&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
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
