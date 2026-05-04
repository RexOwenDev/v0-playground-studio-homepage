'use client'

export function ScrollMarquee() {
  // Creates 6 instances of PLAYGROUND for seamless loop
  const items = Array(6).fill('PLAYGROUND')
  
  return (
    <div 
      className="overflow-hidden py-4 md:py-6"
      aria-label="Playground Studio"
    >
      <div className="relative flex whitespace-nowrap">
        {/* First track */}
        <div className="flex animate-marquee">
          {items.map((text, i) => (
            <span 
              key={i}
              className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold tracking-tighter text-foreground leading-[0.85] px-[2vw]"
              style={{ fontWeight: 700 }}
            >
              {text}
            </span>
          ))}
        </div>
        
        {/* Second track for seamless loop */}
        <div className="flex animate-marquee" aria-hidden="true">
          {items.map((text, i) => (
            <span 
              key={`dup-${i}`}
              className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold tracking-tighter text-foreground leading-[0.85] px-[2vw]"
              style={{ fontWeight: 700 }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
