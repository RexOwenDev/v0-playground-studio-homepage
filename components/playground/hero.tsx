'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [visible, setVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x: x * 20, y: y * 20 })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      aria-label="Hero"
    >
      {/* Animated Background Elements - Subtle gradient orbs */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute w-[500px] h-[500px] -top-32 -right-32 rounded-full blur-3xl bg-violet-500/10 dark:bg-violet-400/5 transition-opacity duration-1000"
          style={{ opacity: visible ? 1 : 0 }}
        />
        <div 
          className="absolute w-[400px] h-[400px] top-1/2 -left-24 rounded-full blur-3xl bg-blue-500/10 dark:bg-blue-400/5 transition-opacity duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '200ms' }}
        />
        <div 
          className="absolute w-[350px] h-[350px] -bottom-24 right-1/4 rounded-full blur-3xl bg-emerald-500/10 dark:bg-emerald-400/5 transition-opacity duration-1000"
          style={{ opacity: visible ? 1 : 0, transitionDelay: '400ms' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Tagline */}
        <p 
          className="text-xs tracking-widest uppercase text-foreground/50 mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          Melbourne Creative Studio
        </p>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] text-foreground transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '100ms',
          }}
        >
          We design brands that
          <span className="block mt-2 text-foreground/80">
            move people.
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-8 text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-2xl leading-relaxed transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms',
          }}
        >
          Strategy, creativity, and craft — working together to build bold brands 
          that connect and convert.
        </p>

        {/* CTAs */}
        <div 
          className="mt-10 flex flex-wrap gap-4 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms',
          }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm tracking-wide bg-foreground text-background px-6 py-3.5 hover:bg-foreground/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            View our work
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm tracking-wide border border-foreground/20 text-foreground px-6 py-3.5 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Start a project
          </Link>
        </div>
      </div>

      {/* Scroll Indicator - positioned to not overlap content */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 pointer-events-none hidden md:flex"
        style={{
          opacity: visible ? 0.4 : 0,
          transitionDelay: '500ms',
        }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase text-foreground/60">Scroll</span>
        <div className="w-px h-8 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-foreground/60 animate-scroll-line" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 1.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-line {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
