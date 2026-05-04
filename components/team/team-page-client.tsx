'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function TeamPageClient() {
  const teamGridRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
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
    { name: 'Sally Dobell', title: 'Director', seed: 'sallyd' },
    { name: 'Olivia Finlayson', title: 'Creative Director', seed: 'oliviaf' },
    { name: 'Millie Romanin', title: 'Managing Director', seed: 'millier' },
    { name: 'Harvey', title: '4 Legs · Mood Setter', seed: 'harveydog' },
  ]

  const pillars = [
    { label: 'APPROACH', statement: 'Bold and rigorous.' },
    { label: 'CULTURE', statement: 'Team-first. Always.' },
    { label: 'BELIEF', statement: 'Great work changes things.' },
  ]

  return (
    <>
      {/* PAGE HEADER */}
      <section className="py-16 md:py-32 px-4 sm:px-8">
        <div className="text-xs tracking-[0.2em] uppercase opacity-40">THE TEAM</div>
        <div className="border-t border-current/10 mt-3" />
        <h1 className="text-[36px] sm:text-[56px] lg:text-[90px] font-medium uppercase tracking-tight leading-none mt-6 md:mt-8">
          The people behind the work.
        </h1>
        <p className="mt-6 md:mt-8 max-w-lg text-sm leading-relaxed opacity-70">
          We&apos;re a Melbourne studio of designers, writers, strategists and big dreamers — brought together by a shared belief that great work changes things.
        </p>
      </section>

      {/* TEAM GRID */}
      <section className="px-4 sm:px-8" ref={teamGridRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
              <div className="aspect-[3/4] overflow-hidden w-full">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/600/800`}
                  alt={`${member.name}, ${member.title} at Playground Studio`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 md:mt-5">
                <h3 className="text-base md:text-lg uppercase tracking-tight font-medium">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs tracking-[0.15em] uppercase opacity-40">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO PILLARS */}
      <section
        className="py-16 md:py-24 px-4 sm:px-8 border-t border-current/10 mt-16 md:mt-24"
        ref={pillarsRef}
      >
        <div className="text-xs tracking-[0.2em] uppercase opacity-40">HOW WE WORK</div>
        <div className="border-t border-current/10 mt-3 mb-10 md:mb-16" />
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
              <div className="text-xs tracking-[0.2em] uppercase opacity-40">
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
          <div className="flex justify-center gap-10 mt-4">
            <Link
              href="/work"
              className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              View our work →
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
