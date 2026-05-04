'use client'

export function ScrollMarquee() {
  return (
    <section 
      className="py-12 md:py-16 overflow-hidden bg-foreground/[0.02]"
      aria-label="Featured text marquee"
    >
      <div className="relative flex overflow-hidden whitespace-nowrap">
        {/* First set */}
        <div className="inline-flex animate-scroll-marquee">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground/20 px-8">
            Playground
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground/20 px-8">
            Studio
          </span>
        </div>
        
        {/* Second set (for seamless loop) */}
        <div className="inline-flex animate-scroll-marquee" aria-hidden="true">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground/20 px-8">
            Playground
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground/20 px-8">
            Studio
          </span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-marquee {
          animation: scroll-marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
