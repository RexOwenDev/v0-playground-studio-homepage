'use client'

import { useState, useEffect } from 'react'

export function WorkHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header className="py-12 md:py-20 px-4 sm:px-8">
      <h1 
        className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-medium uppercase tracking-tight leading-[0.9] transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        Work
      </h1>
    </header>
  )
}
