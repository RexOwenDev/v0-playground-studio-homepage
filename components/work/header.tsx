'use client'

import { useState, useEffect } from 'react'

export function WorkHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl">
        <p 
          className="text-xs tracking-widest uppercase opacity-40 mb-4 transition-all duration-700"
          style={{
            opacity: isVisible ? 0.4 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          Our work
        </p>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '50ms',
          }}
        >
          Selected projects
          <span className="block opacity-60">that move people.</span>
        </h1>
      </div>
    </header>
  )
}
