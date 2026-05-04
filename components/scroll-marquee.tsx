'use client'

// Seamless infinite marquee: Two identical tracks side by side, each animating
// from 0 to -100% of its own width. When the first exits left, the second 
// (starting right behind it) takes its place — creating a perfect loop.

export function ScrollMarquee() {
  const words = 'PLAYGROUND — PLAYGROUND — PLAYGROUND — PLAYGROUND — '

  return (
    <div
      className="overflow-hidden w-full select-none py-2"
      aria-hidden="true"
    >
      <div className="flex">
        {/* First track */}
        <div className="marquee-track flex-shrink-0 whitespace-nowrap text-[17vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.85]">
          {words}
        </div>
        {/* Second track — identical, follows immediately */}
        <div className="marquee-track flex-shrink-0 whitespace-nowrap text-[17vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.85]">
          {words}
        </div>
      </div>
    </div>
  )
}
