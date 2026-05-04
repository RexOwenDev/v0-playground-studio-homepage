'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  { name: 'Saint Haven',        sector: 'Residential Property', seed: 'sainthaven', color: 'from-amber-500/20' },
  { name: 'Morris Moor',        sector: 'Residential Property', seed: 'morrismoor', color: 'from-emerald-500/20' },
  { name: 'Hope & Autumn',      sector: 'Residential Property', seed: 'hopeautumn', color: 'from-rose-500/20' },
  { name: 'Champagne Problems', sector: 'Hospitality',          seed: 'champagne', color: 'from-yellow-500/20' },
  { name: 'REVL',               sector: 'Fitness & Activewear', seed: 'revl', color: 'from-blue-500/20' },
  { name: 'Skinstitut',         sector: 'Skincare',             seed: 'skinstitut', color: 'from-pink-500/20' },
]

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link
      ref={ref}
      href="/work"
      className="block group relative focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground transition-all duration-[600ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View ${project.name} project`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-foreground/5">
        {/* Gradient overlay on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent z-10 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://picsum.photos/seed/${project.seed}/800/600`}
          alt={`${project.name} by Playground Studio`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          width={800}
          height={600}
        />
        
        {/* View Project overlay */}
        <div 
          className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="flex items-center gap-2 text-sm tracking-wide text-white bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
            View project
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-4 flex justify-between items-start gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground group-hover:text-foreground/70 transition-colors">
            {project.name}
          </h3>
          <p className="text-xs sm:text-sm text-foreground/50 mt-0.5">{project.sector}</p>
        </div>
        <div 
          className={`p-2 border rounded-full transition-all duration-300 ${
            isHovered 
              ? 'bg-foreground text-background border-foreground' 
              : 'border-foreground/20 text-foreground'
          }`}
        >
          <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  )
}

export function SelectedWork() {
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8" 
      aria-labelledby="work-heading"
    >
      {/* Section header */}
      <div 
        className={`flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 md:mb-16 transition-all duration-700 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div>
          <p className="text-xs tracking-widest uppercase text-foreground/40 mb-2">Featured</p>
          <h2 id="work-heading" className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Selected Work
          </h2>
        </div>
        <Link
          href="/work"
          className="text-sm text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1 group"
        >
          View all projects
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 list-none p-0 m-0" role="list">
        {PROJECTS.map((project, i) => (
          <li key={project.seed}>
            <ProjectCard project={project} index={i} />
          </li>
        ))}
      </ul>
    </section>
  )
}
