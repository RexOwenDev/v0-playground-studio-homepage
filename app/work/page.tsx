'use client'

import { useState } from 'react'
import { WorkHeader } from '@/components/work/header'
import { FilterBar } from '@/components/work/filter-bar'
import { ProjectGrid } from '@/components/work/project-grid'
import { WorkCTA } from '@/components/work/cta'

export const metadata = {
  title: 'Our Work — Playground Studio',
  description: 'Selected projects across creative, digital, strategy, social, 3D and videography.',
}

const PROJECTS = [
  { name: 'Saint Haven', capability: 'CREATIVE', sector: 'Residential Property', seed: 'sainthaven' },
  { name: 'Morris Moor', capability: 'CREATIVE', sector: 'Residential Property', seed: 'morrismoor' },
  { name: 'Hope & Autumn', capability: 'CREATIVE', sector: 'Residential Property', seed: 'hopeautumn' },
  { name: 'Seren Row', capability: 'CREATIVE', sector: 'Residential Property', seed: 'serenrow' },
  { name: 'Champagne Problems', capability: 'CREATIVE', sector: 'Hospitality', seed: 'champagne' },
  { name: 'Trielle', capability: 'CREATIVE', sector: 'Residential Property', seed: 'trielle' },
  { name: 'Skinstitut', capability: 'DIGITAL', sector: 'Skincare', seed: 'skinstitut' },
  { name: 'REVL', capability: 'DIGITAL', sector: 'Fitness', seed: 'revl' },
  { name: 'Kinrise', capability: 'DIGITAL', sector: 'Food & Beverage', seed: 'kinrise' },
  { name: 'The Property Collective', capability: 'STRATEGY', sector: 'Residential Property', seed: 'propertycol' },
  { name: 'Pacific Fair', capability: 'STRATEGY', sector: 'Retail', seed: 'pacificfair' },
  { name: 'Commune', capability: 'STRATEGY', sector: 'Hospitality', seed: 'commune' },
  { name: 'The Social Standard', capability: 'SOCIAL', sector: 'Hospitality', seed: 'socialstandard' },
  { name: 'Drift', capability: 'SOCIAL', sector: 'Lifestyle', seed: 'drift' },
  { name: 'Peninsula Estate', capability: 'SOCIAL', sector: 'Residential Property', seed: 'peninsula' },
  { name: 'Studio Grano', capability: '3D & MOTION', sector: 'Food & Beverage', seed: 'studiograno' },
  { name: 'Lightfield', capability: '3D & MOTION', sector: 'Architecture', seed: 'lightfield' },
  { name: 'Revel & Co', capability: 'VIDEOGRAPHY', sector: 'Events', seed: 'revelandco' },
]

export default function WorkPage() {
  const [filter, setFilter] = useState('ALL')

  return (
    <>
      <WorkHeader />
      <FilterBar activeFilter={filter} onFilterChange={setFilter} />
      <ProjectGrid projects={PROJECTS} activeFilter={filter} />
      <WorkCTA />
    </>
  )
}
