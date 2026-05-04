'use client'

import { Nav } from '@/components/playground/nav'
import { Hero } from '@/components/playground/hero'
import { SelectedWork } from '@/components/playground/selected-work'
import { StudioStatement } from '@/components/playground/studio-statement'
import { Footer } from '@/components/playground/footer'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <SelectedWork />
      <StudioStatement />
      <Footer />
    </main>
  )
}
