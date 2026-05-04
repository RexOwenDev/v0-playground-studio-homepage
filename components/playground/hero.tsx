'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

// Animated gradient orb component
function GradientOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  
  return (
    <div 
      className={`absolute rounded-full blur-3xl transition-all duration-1000 ${className}`}
      style={{
        opacity: visible ? 0.3 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.8)',
      }}
      aria-hidden="true"
    />
  )
}

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
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20"
      aria-label="Hero"
    >
      {/* Animated Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <GradientOrb 
          className="w-[600px] h-[600px] -top-48 -right-48 bg-purple-500/20 dark:bg-purple-400/10" 
          delay={200}
        />
        <GradientOrb 
          className="w-[500px] h-[500px] top-1/2 -left-32 bg-blue-500/20 dark:bg-blue-400/10" 
          delay={400}
        />
        <GradientOrb 
          className="w-[400px] h-[400px] -bottom-32 right-1/4 bg-emerald-500/20 dark:bg-emerald-400/10" 
          delay={600}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Tagline */}
        <p 
          className="text-xs tracking-widest uppercase opacity-50 mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 0.5 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          Melbourne Creative Studio
        </p>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.05] transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '100ms',
          }}
        >
          We design brands that
          <span className="block mt-2 bg-gradient-to-r from-current via-current/80 to-current bg-clip-text">
            move people.
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-8 text-lg sm:text-xl md:text-2xl opacity-70 max-w-2xl leading-relaxed transition-all duration-700"
          style={{
            opacity: visible ? 0.7 : 0,
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
            className="inline-flex items-center gap-2 text-sm tracking-wide bg-current text-background px-6 py-3 hover:opacity-90 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            View our work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm tracking-wide border border-current/30 px-6 py-3 hover:border-current/60 hover:bg-current/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            Start a project
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
        style={{
          opacity: visible ? 0.4 : 0,
          transitionDelay: '500ms',
        }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-current/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-current animate-scroll-line" />
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
