'use client'

import { useEffect, useRef } from 'react'

interface FilterBarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const FILTERS = ['ALL', 'CREATIVE', 'DIGITAL', 'STRATEGY', 'SOCIAL', '3D & MOTION', 'VIDEOGRAPHY']

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const activeElement = container.querySelector('[data-active="true"]')
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeFilter])

  return (
    <nav
      className="sticky top-[65px] z-40 bg-background/95 backdrop-blur-sm border-b border-foreground/10 py-4"
      aria-label="Project filters"
    >
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 -mx-4 sm:mx-0"
      >
        <div className="flex flex-row gap-3 sm:gap-6 md:gap-8 min-w-max px-4 sm:px-0">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              data-active={filter === activeFilter}
              className={`text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground py-2 px-1 whitespace-nowrap ${
                filter === activeFilter
                  ? 'text-foreground underline decoration-foreground underline-offset-4 decoration-[0.5px]'
                  : 'text-foreground/30 hover:text-foreground/60'
              }`}
              aria-pressed={filter === activeFilter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
