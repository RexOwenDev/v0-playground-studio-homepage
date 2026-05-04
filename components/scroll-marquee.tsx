'use client'

// Single-track marquee: one flex row of N items duplicated inside,
// animated so the whole row translates left by exactly half its own width.
// The duplicate makes the loop invisible — when the first half exits left,
// the second half is already in view and snaps seamlessly back to 0.

export function ScrollMarquee() {
  const word = 'PLAYGROUND'
  // 8 copies per half so there's never a gap at any viewport width
  const half = Array(8).fill(word)

  return (
    <div
      className="overflow-hidden w-full select-none"
      aria-hidden="true"
    >
      {/* The track is twice as wide as the viewport.
          We translate it left by 50% (= one full set of 8 words) then snap back. */}
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {/* First set */}
        {half.map((text, i) => (
          <span
            key={`a-${i}`}
            className="inline-block text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] font-black uppercase tracking-tighter leading-none pr-[4vw]"
          >
            {text}
          </span>
        ))}
        {/* Duplicate set — identical, placed immediately after */}
        {half.map((text, i) => (
          <span
            key={`b-${i}`}
            className="inline-block text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] font-black uppercase tracking-tighter leading-none pr-[4vw]"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
