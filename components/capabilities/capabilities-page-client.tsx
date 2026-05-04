'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'

export function CapabilitiesPageClient() {
  return (
    <>
      <CapabilitiesHeader />
      <CapabilityList />
      <ClientSectors />
      <StartProjectCTA />
    </>
  )
}

function CapabilitiesHeader() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl">
        <p 
          className="text-xs tracking-widest uppercase opacity-40 mb-4 transition-all duration-700"
          style={{
            opacity: isVisible ? 0.4 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          What we do
        </p>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '50ms',
          }}
        >
          Full-service creative
          <span className="block opacity-60">for ambitious brands.</span>
        </h1>
        <p 
          className="mt-6 text-lg md:text-xl opacity-60 max-w-2xl leading-relaxed transition-all duration-700"
          style={{
            opacity: isVisible ? 0.6 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms',
          }}
        >
          With our diverse blend of in-house skills, we take brands the whole nine yards. 
          A full-service studio where anything is possible and nothing is off limits.
        </p>
      </div>
    </section>
  )
}

function CapabilityList() {
  const capabilities = [
    {
      number: '01',
      name: 'Insights & Strategy',
      description:
        'Everything we do draws from a thoroughly researched and highly considered brand strategy. We work closely with clients to distil their brand values, vision and essence, using intelligent creative insights to evolve, sharpen and define unique brand stories.',
      tags: ['Brand Identity', 'Brand Strategy', 'Brand Architecture', 'Brand Refresh'],
    },
    {
      number: '02',
      name: 'Creative',
      description:
        'Executed to ambitious standards, our design work is renowned for the depth, quality and originality of its design-led thinking and storytelling. From brand identity to packaging, we create exceptional print and digital creative.',
      tags: ['Brand Identity', 'Visual Storytelling', 'Art Direction', 'Naming', 'Copywriting', 'Packaging', 'Film & Photography'],
    },
    {
      number: '03',
      name: 'Digital',
      description:
        'Our Digital team crafts insightful and highly detailed digital strategies focused on performance and optimisation. Beautiful websites that are functional, practical and conversion-focused.',
      tags: ['Website Design', 'Website Development', 'UI/UX', 'Analytics'],
    },
    {
      number: '04',
      name: 'Data',
      description:
        'Our Data Science team uses data to identify patterns of human behaviour. We produce insights that allow us to monetise marketing activities, predict audience behaviour, and create highly relevant creative.',
      tags: ['Data Gathering', 'Data Insights', 'Analytics & Reporting'],
    },
    {
      number: '05',
      name: 'Social Media',
      description:
        'We transform social media presence into a highly focused source of conversions and engagement. Advanced analytics, calculated lead generation, and multi-channel approach to optimise creative and results.',
      tags: ['Social Strategy', 'Paid & Organic Social', 'Campaign Development', 'Brand Activation'],
    },
    {
      number: '06',
      name: 'Communications',
      description:
        'We craft intelligent communication ecosystems that connect brands and audiences through the right message, at the right moment. From EDM campaigns to CRM strategy, transforming data into meaningful conversation.',
      tags: ['CRM Strategy', 'Email Marketing', 'Automated Nurture', 'Customer Journey Mapping'],
    },
    {
      number: '07',
      name: '3D & Motion',
      description:
        'Industry-leading 3D CGI animations and stills, applied across product, architectural and branding projects. From architectural renders to animated films, pushing creative into new territories.',
      tags: ['3D Renders', '3D Motion', 'Product Imagery', 'AR/VR Experiences'],
    },
    {
      number: '08',
      name: 'Videography',
      description:
        'Stories brought to life through striking visuals, dynamic movement, and emotive storytelling. Brand, lifestyle, architectural, and product films that engage, inspire, and connect.',
      tags: ['Brand Films', 'Product Films', 'Social Video', 'Drone Cinematography'],
    },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      <div className="border-t border-current/10" />
      {capabilities.map((capability, index) => (
        <CapabilityItem key={capability.number} capability={capability} index={index} />
      ))}
    </section>
  )
}

function CapabilityItem({
  capability,
  index,
}: {
  capability: { number: string; name: string; description: string; tags: string[] }
  index: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`border-b border-current/10 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 75}ms` : '0ms',
      }}
    >
      {/* Clickable Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-6 md:py-8 flex items-center justify-between gap-4 text-left group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-xs md:text-sm font-mono opacity-30 w-6">{capability.number}</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight group-hover:opacity-70 transition-opacity">
            {capability.name}
          </h3>
        </div>
        <div className={`p-2 border border-current/20 rounded-full transition-all duration-300 ${isExpanded ? 'rotate-0 bg-current text-background' : 'rotate-0'}`}>
          {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      {/* Expandable Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-10 md:pl-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-sm md:text-base leading-relaxed opacity-60">
            {capability.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {capability.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-3 py-1.5 border border-current/15 rounded-full opacity-60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ClientSectors() {
  const sectors = [
    'Arts & Culture', 'Beauty', 'Finance', 'FMCG', 'Health & Wellness',
    'Hospitality', 'Lifestyle', 'Media', 'Medical', 'Place Making',
    'Property', 'Residential', 'Commercial', 'Mixed-Use', 'Retail',
    'Sports', 'Tech', 'Tourism'
  ]

  const ref = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref}
      className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-current/[0.02] transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-6">Industries we work with</p>
        <div className="flex flex-wrap gap-3">
          {sectors.map((sector, i) => (
            <span 
              key={sector}
              className="text-sm md:text-base opacity-60 transition-all duration-500"
              style={{
                opacity: isVisible ? 0.6 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: `${i * 30}ms`,
              }}
            >
              {sector}
              {i < sectors.length - 1 && <span className="ml-3 opacity-30">•</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function StartProjectCTA() {
  const ref = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref}
      className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-xs tracking-widest uppercase opacity-40 mb-4">Ready to work together?</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-8">
        Let&apos;s build something bold.
      </h2>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-sm tracking-wide bg-current text-background px-6 py-3 hover:opacity-90 transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      >
        Start a project
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </section>
  )
}
