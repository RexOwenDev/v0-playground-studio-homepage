'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Linkedin } from 'lucide-react'

export function TeamPageClient() {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    setHeaderVisible(true)
  }, [])

  const teamMembers = [
    { 
      name: 'Sally Dobell', 
      title: 'Owner & Director',
      bio: 'Leading Playground with vision and passion for over a decade.',
      image: 'https://www.datocms-assets.com/105312/1692929236-sally.jpg',
      linkedin: 'https://www.linkedin.com/company/playgroundstudio/'
    },
    { 
      name: 'Olivia Finlayson', 
      title: 'Head of Creative',
      bio: 'Driving creative excellence across all brand touchpoints.',
      image: 'https://www.datocms-assets.com/105312/1692929280-olivia.jpg',
      linkedin: 'https://www.linkedin.com/company/playgroundstudio/'
    },
    { 
      name: 'Millie Romanin', 
      title: 'Managing Director',
      bio: 'Ensuring seamless operations and client success.',
      image: 'https://www.datocms-assets.com/105312/1772172759-staff-photo-millie.png',
      linkedin: 'https://www.linkedin.com/company/playgroundstudio/'
    },
  ]

  const values = [
    { 
      title: 'Bold & Rigorous', 
      description: 'We push boundaries while maintaining the highest standards of craft.' 
    },
    { 
      title: 'Team-First Always', 
      description: 'Great work comes from great collaboration and mutual respect.' 
    },
    { 
      title: 'Impact-Driven', 
      description: 'We believe great work has the power to change things.' 
    },
  ]

  return (
    <>
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl">
          <p 
            className="text-xs tracking-widest uppercase opacity-40 mb-4 transition-all duration-700"
            style={{
              opacity: headerVisible ? 0.4 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            Our team
          </p>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] transition-all duration-700"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '50ms',
            }}
          >
            Fiercely passionate
            <span className="block opacity-60">creative minds.</span>
          </h1>
          <p 
            className="mt-6 text-lg md:text-xl opacity-60 max-w-2xl leading-relaxed transition-all duration-700"
            style={{
              opacity: headerVisible ? 0.6 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms',
            }}
          >
            Our studio is home to 20+ talented creatives, strategists, finance and account 
            service experts, led by three passionate leaders — and Harvey, our studio hound.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-current/10">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-12">How we work</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <TeamCTA />
      </section>
    </>
  )
}

function TeamMemberCard({ 
  member, 
  index 
}: { 
  member: { name: string; title: string; bio: string; image: string; linkedin: string }
  index: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden relative bg-neutral-100 dark:bg-neutral-900 rounded-sm">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.title} at Playground Studio`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-105 grayscale-0' : 'scale-100 grayscale'
          }`}
          loading="lazy"
        />
        
        {/* Hover overlay with LinkedIn */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
      
      {/* Info */}
      <div className="mt-4">
        <h3 className="text-lg font-medium tracking-tight">{member.name}</h3>
        <p className="text-sm opacity-50 mt-0.5">{member.title}</p>
        <p className="text-sm opacity-40 mt-2 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  )
}

function ValueCard({ 
  value, 
  index 
}: { 
  value: { title: string; description: string }
  index: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`border-t border-current/10 pt-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-medium tracking-tight">{value.title}</h3>
      <p className="mt-3 text-sm opacity-60 leading-relaxed">{value.description}</p>
    </div>
  )
}

function TeamCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-xs tracking-widest uppercase opacity-40 mb-4">Want to see what we have made?</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-8">
        Explore our work.
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm tracking-wide bg-current text-background px-6 py-3 hover:opacity-90 transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          View projects
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm tracking-wide border border-current/30 px-6 py-3 hover:border-current/60 hover:bg-current/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          Start a project
        </Link>
      </div>
    </div>
  )
}
