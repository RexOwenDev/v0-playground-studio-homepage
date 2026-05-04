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

    // Scroll the active filter into view
    const activeElement = container.querySelector('[data-active="true"]')
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeFilter])

  return (
    <nav
      className="sticky top-[57px] z-40 bg-background/95 backdrop-blur-sm border-b border-current/10 py-4"
      aria-label="Project filters"
    >
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide px-4 sm:px-8 flex flex-row gap-6 sm:gap-8 whitespace-nowrap"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            data-active={filter === activeFilter}
            className={`text-xs tracking-[0.2em] uppercase cursor-pointer transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current py-2 ${
              filter === activeFilter
                ? 'opacity-100 underline decoration-current underline-offset-4 decoration-[0.5px]'
                : 'opacity-30 hover:opacity-70'
            }`}
            aria-pressed={filter === activeFilter}
          >
            {filter}
          </button>
        ))}
      </div>
    </nav>
  )
}
