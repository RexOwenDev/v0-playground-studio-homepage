'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function TeamPageClient() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const teamGridRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeaderVisible(true)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('[data-animate]')
          items.forEach((item, index) => {
            const element = item as HTMLElement
            setTimeout(() => {
              element.classList.add('animate-in')
            }, index * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (teamGridRef.current) observer.observe(teamGridRef.current)
    if (pillarsRef.current) observer.observe(pillarsRef.current)
    if (ctaRef.current) observer.observe(ctaRef.current)

    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    { 
      name: 'Sally Dobell', 
      title: 'Owner & Director', 
      image: 'https://www.datocms-assets.com/105312/1692929236-sally.jpg'
    },
    { 
      name: 'Olivia Finlayson', 
      title: 'Head of Creative', 
      image: 'https://www.datocms-assets.com/105312/1692929280-olivia.jpg'
    },
    { 
      name: 'Millie Romanin', 
      title: 'Managing Director', 
      image: 'https://www.datocms-assets.com/105312/1772172759-staff-photo-millie.png'
    },
  ]

  const pillars = [
    { label: 'APPROACH', statement: 'Bold and rigorous.' },
    { label: 'CULTURE', statement: 'Team-first. Always.' },
    { label: 'BELIEF', statement: 'Great work changes things.' },
  ]

  return (
    <>
      {/* PAGE HEADER */}
      <section className="py-12 md:py-20 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
          <h1 
            className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-medium uppercase tracking-tight leading-[0.9] transition-all duration-700"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Team
          </h1>
          <p 
            className="text-sm leading-relaxed opacity-70 max-w-sm md:text-right transition-all duration-700"
            style={{
              opacity: headerVisible ? 0.7 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms',
            }}
          >
            PLAYGROUND is a team of fiercely passionate people, led by the three you see here. Our studio is home to 20+ talented creatives, finance and account service experts, and Harvey, our studio hound.
          </p>
        </div>
      </section>

      {/* TEAM GRID - 3 members matching reference layout */}
      <section className="px-4 sm:px-8 pb-16 md:pb-24" ref={teamGridRef}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              data-animate
              className="group opacity-0 translate-y-5"
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden w-full relative bg-neutral-900">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title} at Playground Studio`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              
              {/* Name and Title - matching reference layout */}
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-[10px] tracking-[0.15em] uppercase opacity-50 leading-tight">
                  {member.title.split(' ').slice(0, -1).join(' ')}<br/>
                  {member.title.split(' ').slice(-1)}
                </span>
                <h3 className="text-sm sm:text-base md:text-lg uppercase tracking-tight font-medium text-right">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO PILLARS */}
      <section
        className="py-16 md:py-24 px-4 sm:px-8 border-t border-current/10"
        ref={pillarsRef}
      >
        <div className="text-xs tracking-[0.2em] uppercase opacity-50 mb-10 md:mb-16">HOW WE WORK</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              data-animate
              className="border-t border-current/10 pt-6 md:pt-8 opacity-0 translate-y-5"
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="text-xs tracking-[0.2em] uppercase opacity-50">
                {pillar.label}
              </div>
              <h3 className="mt-3 text-lg md:text-xl font-medium uppercase tracking-tight">
                {pillar.statement}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="py-16 md:py-24 px-4 sm:px-8 border-t border-current/10"
        ref={ctaRef}
      >
        <div
          data-animate
          className="max-w-2xl mx-auto text-center opacity-0 translate-y-5"
          style={{
            transitionProperty: 'opacity, transform',
            transitionDuration: '600ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="text-xl sm:text-2xl font-medium uppercase tracking-tight">
            Want to see what we&apos;ve made?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mt-6">
            <Link
              href="/work"
              prefetch={true}
              className="text-xs tracking-[0.15em] uppercase border border-current/30 px-6 py-3 hover:bg-current hover:text-background transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              View our work →
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              className="text-xs tracking-[0.15em] uppercase border border-current/30 px-6 py-3 hover:bg-current hover:text-background transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
