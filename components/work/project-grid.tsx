'use client'

import { useEffect, useRef, useState } from 'react'

interface Project {
  name: string
  capability: string
  sector: string
  seed: string
}

interface ProjectGridProps {
  projects: Project[]
  activeFilter: string
}

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [cardVisible, setCardVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) {
      setCardVisible(false)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div
      ref={ref}
      className="group transition-all duration-400 ease-in-out"
      style={{
        opacity: isVisible ? (cardVisible ? 1 : 0) : 0,
        transform: isVisible ? (cardVisible ? 'translateY(0)' : 'translateY(16px)') : 'scale(0.99)',
        height: isVisible ? 'auto' : 0,
        overflow: isVisible ? 'visible' : 'hidden',
        pointerEvents: isVisible ? 'auto' : 'none',
        transitionDelay: isVisible ? `${index * 60}ms` : '0ms',
      }}
    >
      <div className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://picsum.photos/seed/${project.seed}/900/562`}
            alt={`${project.name} — Playground Studio`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
            width={900}
            height={562}
          />
        </div>

        {/* Caption */}
        <div className="mt-3 flex justify-between items-baseline">
          <span className="text-sm uppercase tracking-[0.08em] font-medium">{project.name}</span>
          <span className="text-xs opacity-40">{project.sector}</span>
        </div>
      </div>
    </div>
  )
}

export function ProjectGrid({ projects, activeFilter }: ProjectGridProps) {
  return (
    <section className="px-4 sm:px-8 pb-16 md:pb-32 mt-6 md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2" role="list">
        {projects.map((project, index) => {
          const isVisible = activeFilter === 'ALL' || project.capability === activeFilter
          return (
            <div key={project.seed} role="listitem">
              <ProjectCard project={project} index={index} isVisible={isVisible} />
            </div>
          )
        })}
      </div>

      {/* Count */}
      <div className="mt-6 text-center">
        <p className="text-xs tracking-[0.2em] uppercase opacity-20">18 projects.</p>
      </div>
    </section>
  )
}
