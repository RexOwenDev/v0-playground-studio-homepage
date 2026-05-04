'use client'

import React from 'react'
import Link from 'next/link'

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
    <section className="py-12 md:py-20 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
        <h1 
          className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-medium uppercase tracking-tight leading-[0.9] transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Capability
        </h1>
        <p 
          className="text-sm leading-relaxed opacity-70 max-w-sm md:text-right transition-all duration-700"
          style={{
            opacity: isVisible ? 0.7 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms',
          }}
        >
          With our diverse blend of in-house skills, we take brands the whole nine yards. We are a full-service studio where anything is possible and nothing is off limits.
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
        'Everything we do draws from a thoroughly researched and highly considered brand strategy. We work closely with clients to distil their brand values, vision and essence, using intelligent creative insights to evolve, sharpen and define unique brand stories. A thorough strategy connects brands not only with themselves, but with their target audiences, resulting in strong brand awareness, clear direction and results.',
      tags: ['Brand Identity', 'Brand Strategy', 'Brand Architecture', 'Brand Refresh and Evolution'],
    },
    {
      number: '02',
      name: 'Creative',
      description:
        'Executed to ambitious standards, PLAYGROUND\'s design work is renowned for the depth, quality and originality of its design-led thinking and storytelling. Springboarding from a deeply considered brand strategy, the team creates and oversees every piece of exceptional-quality print and digital creative, working with the wider team to generate ideas and bring them to life.',
      tags: ['Brand Identity', 'Brand Strategy', 'Brand Guidelines', 'Motion And Animation', 'Visual Storytelling', 'Art Direction', 'Naming', 'Copywriting', 'Packaging', 'Wayfinding', 'Film & Photography'],
    },
    {
      number: '03',
      name: 'Digital',
      description:
        'Our Digital team crafts insightful and highly detailed digital strategies focused on performance and optimisation. In addition to the design and build of beautiful websites that are functional, practical and conversion-focused, the team uses custom CRM systems, lead management, advanced analytics ad tracking, user journey mapping and more to ensure ongoing, long-term success.',
      tags: ['Website Design', 'Website Development', 'UI and UX', 'Analytics And Reporting'],
    },
    {
      number: '04',
      name: 'Data',
      description:
        'In this era of omnipresent connectivity, our Data Science team uses data to identify patterns of human behaviour. Armed with this knowledge, we produce, control and draw insights that allow us to monetise marketing and communication activities for clients. Complex digital tech provides us with increasingly accurate profiles of target audiences, enabling our team to predict how clients\' target audiences think and behave. This data informs highly relevant creative geared to engage and convert.',
      tags: ['Data Gathering', 'Data Insights', 'Analytics And Reporting'],
    },
    {
      number: '05',
      name: 'Social Media',
      description:
        'We transform clients\' social media presence and performance into a highly focused and effective source of conversions and engagement. We use advanced analytics, calculated lead generation, close monitoring and a multi-channel approach and social AI to consistently optimise our clients\' social media creative, presence and results.',
      tags: ['Social Media Strategy', 'Social Media Creative', 'Paid And Organic Social', 'Launch And Activation', 'Campaign Development', 'Brand Activation'],
    },
    {
      number: '06',
      name: 'Communications',
      description:
        'We craft intelligent communication ecosystems that connect brands and audiences through the right message, at the right moment. From EDM campaigns and SMS automations to CRM strategy and lead nurture journeys, PLAYGROUND transforms data into meaningful conversation. Our approach blends creativity with precision — building communication systems that drive engagement, nurture relationships, and convert leads into loyal customers.',
      tags: ['CRM Strategy & Implementation', 'Email Marketing (EDM)', 'Automated Nurture Campaigns', 'SMS & Direct Messaging', 'Customer Journey Mapping', 'Database Segmentation & Management', 'Copywriting & Content Development', 'Analytics & Performance Optimisation'],
    },
    {
      number: '07',
      name: '3D & Motion',
      description:
        'Our 3D team produces industry-leading 3D CGI animations and stills. Their craft is complex, applied predominantly across product, architectural and branding projects. PLAYGROUND\'s 3D capabilities allows us to push stunning creative into new, mind-blowing territories. From exceptional architectural renders to vibrant 3D animated films, the possibilities of 3D are limitless.',
      tags: ['Architectural Renders', '3D Statics', '3D Motion', 'Product Imagery', 'Brand Imagery', 'Graphic packages', 'AR/VR Experiences', 'Interactive Media Experiences'],
    },
    {
      number: '08',
      name: 'Videography',
      description:
        'Our videography team brings stories to life through striking visuals, dynamic movement, and emotive storytelling. Specialising in brand, lifestyle, architectural, and product films, PLAYGROUND captures the essence of every idea with cinematic precision. From concept to post-production, we craft films that engage, inspire, and connect — blending creative direction, motion, and sound into seamless visual experiences that define brands and elevate campaigns.',
      tags: ['Brand Films', 'Product Films', 'Architectural Films', 'Lifestyle & Campaign Content', 'Social Media Video Content', 'Motion Direction & Editing', 'Drone Cinematography', 'Studio & On-Location Filming', 'Post-Production & Colour Grading'],
    },
  ]

  return (
    <section className="px-4 sm:px-8 border-t border-current/10">
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
      className={`border-t border-current/10 py-12 md:py-20 grid grid-cols-1 md:grid-cols-[80px_200px_1fr_200px] gap-6 md:gap-8 items-start transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Number */}
      <div className="text-xs tracking-[0.15em] uppercase opacity-40 md:pt-1">
        {capability.number}
      </div>
      
      {/* Name */}
      <h3 className="text-base md:text-lg uppercase tracking-tight font-medium leading-tight">
        {capability.name}
      </h3>
      
      {/* Description */}
      <p className="text-sm leading-relaxed opacity-70 max-w-xl">
        {capability.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-col gap-1">
        {capability.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs opacity-50 hover:opacity-100 transition-opacity cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ClientSectors() {
  const sectors = [
    'Arts & Culture',
    'Beauty',
    'Finance',
    'FMCG',
    'Health & Wellness',
    'Hospitality',
    'Lifestyle',
    'Media',
    'Medical',
    'Place Making',
    'Property',
    'Residential, Commercial & Mixed-Use',
    'Retail',
    'Sports',
    'Tech',
    'Tourism',
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
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16">
        <div>
          <h2 className="text-xs tracking-[0.15em] uppercase opacity-60">
            Client Sectors We Currently Work With
          </h2>
        </div>
        <p className="text-sm md:text-base uppercase tracking-tight font-medium leading-relaxed">
          {sectors.join(' • ')}
        </p>
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
          <Link
            href="/contact"
            className="inline-block text-xs tracking-[0.15em] uppercase border border-current/30 px-6 py-3 hover:bg-current hover:text-background transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  )
}
