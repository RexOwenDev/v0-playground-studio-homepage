import { Hero } from '@/components/playground/hero'
import { SelectedWork } from '@/components/playground/selected-work'
import { StudioStatement } from '@/components/playground/studio-statement'

export const metadata = {
  title: { absolute: 'PLAYGROUND' },
  description: 'A Melbourne creative studio of designers, writers, strategists and big dreamers.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <StudioStatement />
    </>
  )
}
