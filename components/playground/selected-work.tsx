'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const PROJECTS = [
  { name: 'Saint Haven',        sector: 'Residential Property', seed: 'sainthaven'  },
  { name: 'Morris Moor',        sector: 'Residential Property', seed: 'morrismoor'  },
  { name: 'Hope & Autumn',      sector: 'Residential Property', seed: 'hopeautumn'  },
  { name: 'Champagne Problems', sector: 'Hospitality',          seed: 'champagne'   },
  { name: 'REVL',               sector: 'Fitness & Activewear', seed: 'revl'        },
  { name: 'Skinstitut',         sector: 'Skincare',             seed: 'skinstitut'  },
  { name: 'Trielle',            sector: 'Residential Property', seed: 'trielle'     },
  { name: 'Seren Row',          sector: 'Residential Property', seed: 'serenrow'    },
  { name: 'Kinrise',            sector: 'Food & Beverage',      seed: 'kinrise'     },
]

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [visible, setVisible] = useState(false)

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
      className="block group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current transition-all duration-[600ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transitionDelay: `${index * 80}ms`,
      }}
      aria-label={`View ${project.name} project`}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://picsum.photos/seed/${project.seed}/900/562`}
          alt={`${project.name} by Playground Studio`}
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
    </Link>
  )
}

export function SelectedWork() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-8" aria-labelledby="work-heading">
      {/* Section header */}
      <p
        id="work-heading"
        className="text-xs tracking-[0.2em] uppercase opacity-40"
      >
        Selected Work
      </p>
      <div className="border-t border-current/10 mt-3 mb-10 md:mb-16" />

      {/* Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 list-none p-0 m-0" role="list">
        {PROJECTS.map((project, i) => (
          <li key={project.seed}>
            <ProjectCard project={project} index={i} />
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/work"
          className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          View all work →
        </Link>
      </div>
    </section>
  )
}
