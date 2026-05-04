'use client'

import React from 'react'

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
  return (
    <section className="py-16 md:py-32 px-4 sm:px-8">
      <div className="text-xs tracking-[0.2em] uppercase opacity-40">Capability</div>
      <div className="mt-3 mb-0 border-t border-current/10" />
      <h1 className="text-[36px] sm:text-[60px] lg:text-[100px] font-medium uppercase tracking-tight leading-none mt-6 md:mt-8">
        What we do.
      </h1>
    </section>
  )
}

function CapabilityList() {
  const capabilities = [
    {
      number: '01',
      name: 'Insights & Strategy',
      description:
        'We begin where others often end — with understanding. Rigorous research into your market, your audience and your competitors, translated into strategy that works.',
    },
    {
      number: '02',
      name: 'Creative',
      description:
        'Brand identities and campaign creative that make people stop. Built on insight, refined with obsession, and designed to be remembered.',
    },
    {
      number: '03',
      name: 'Digital',
      description:
        'Websites and digital experiences that are as beautiful as they are effective. Design and development held to the same exacting standard.',
    },
    {
      number: '04',
      name: 'Data',
      description:
        'Your numbers, made useful. We turn analytics into clear intelligence — so every decision is informed, not guesswork.',
    },
    {
      number: '05',
      name: 'Social Media',
      description:
        'Content that earns attention and builds real community. Social strategy and creative execution that sustains it.',
    },
    {
      number: '06',
      name: 'Communications',
      description:
        'Strategic communications and PR that puts your brand in conversations that matter.',
    },
    {
      number: '07',
      name: '3D & Motion',
      description:
        'Spatial visuals, animation and motion graphics that bring brands to life. And keep them there.',
    },
    {
      number: '08',
      name: 'Videography',
      description:
        'Production that captures the real story of your brand. Crafted with the precision of a short film. Built to last.',
    },
  ]

  return (
    <section className="px-4 sm:px-8">
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
  capability: { number: string; name: string; description: string }
  index: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

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
      className={`border-t border-current/10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16 items-start transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
      }}
    >
      <div>
        <div className="text-[50px] md:text-[100px] font-medium leading-none text-current opacity-[0.07]">
          {capability.number}
        </div>
        <div className="mt-2 md:mt-4 text-lg md:text-xl uppercase tracking-tight font-medium leading-tight">
          {capability.name}
        </div>
      </div>
      <div className="md:self-center">
        <p className="text-sm leading-relaxed max-w-lg opacity-75">{capability.description}</p>
      </div>
    </div>
  )
}

function ClientSectors() {
  const sectors = [
    'Residential Property',
    'Hospitality',
    'Retail & Consumer',
    'Finance & Professional Services',
    'Healthcare',
    'Fitness & Wellness',
    'Beauty & Skincare',
    'Startups',
    'Food & Beverage',
    'Corporate',
    'Arts & Culture',
    'Education',
  ]

  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

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
    <section
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-8 border-t border-current/10 transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
      }`}
    >
      <div className="text-xs tracking-[0.2em] uppercase opacity-40">Who we work with</div>
      <div className="mt-3 mb-10 md:mb-16 border-t border-current/10" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {sectors.map((sector) => (
          <div key={sector} className="border-t border-current/10 pt-5 pb-5 pr-4">
            <p className="text-sm uppercase tracking-[0.08em] font-medium">{sector}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function StartProjectCTA() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

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
    <section
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-8 border-t border-current/10 transition-all duration-600 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
      }`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tight">
          Ready to build something bold?
        </h2>
        <div className="mt-6">
          <a
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current inline-block"
          >
            Start a project →
          </a>
        </div>
      </div>
    </section>
  )
}
