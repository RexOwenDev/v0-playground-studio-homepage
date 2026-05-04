'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FormData {
  workTypes: string[]
  sector: string
  budget: string
  timeline: string
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  source: string
  message: string
}

const workTypeOptions = [
  'Strategy & Insights',
  'Creative & Branding',
  'Digital',
  'Social Media',
  '3D & Motion',
  'Videography',
  'Not sure yet',
]

const sectorOptions = [
  'Residential Property',
  'Hospitality',
  'Retail & Consumer',
  'Finance & Professional Services',
  'Healthcare',
  'Fitness & Wellness',
  'Beauty & Skincare',
  'Startups',
  'Food & Beverage',
  'Other',
]

const budgetOptions = [
  'Under $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  "Not sure yet"
]

const timelineOptions = [
  'Immediately',
  '1 – 3 months',
  '3 – 6 months',
  '6+ months',
  "It's flexible"
]

export function ContactPageClient() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>({
    workTypes: [],
    sector: '',
    budget: '',
    timeline: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    source: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleWorkTypeToggle = (type: string) => {
    setData(prev => ({
      ...prev,
      workTypes: prev.workTypes.includes(type)
        ? prev.workTypes.filter(t => t !== type)
        : [...prev.workTypes, type]
    }))
  }

  const handleSingleSelect = (field: keyof Omit<FormData, 'workTypes' | 'firstName' | 'lastName' | 'company' | 'email' | 'phone' | 'source' | 'message'>, value: string) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const handleInputChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateStep = () => {
    switch (step) {
      case 1:
        return data.workTypes.length > 0
      case 2:
        return data.sector !== ''
      case 3:
        return data.budget !== ''
      case 4:
        return data.timeline !== ''
      case 5:
        return data.firstName && data.lastName && data.email && validateEmail(data.email)
      default:
        return false
    }
  }

  const handleNext = () => {
    setError('')
    if (!validateStep()) {
      if (step === 1) setError('Please select at least one option.')
      else if (step === 5) setError('Please fill in all required fields.')
      else setError('Please select an option.')
      return
    }
    if (step < 5) {
      setStep(step + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setIsSubmitted(true)
      } else {
        setError('Something went wrong. Please email us at hello@playgroundstudio.com.au')
      }
    } catch (err) {
      setError('Something went wrong. Please email us at hello@playgroundstudio.com.au')
    } finally {
      setIsSubmitting(false)
    }
  }

  const Tile = ({ 
    label, 
    selected, 
    onClick, 
    role = 'radio',
    disabled = false 
  }: { 
    label: string
    selected: boolean
    onClick: () => void
    role?: 'radio' | 'checkbox'
    disabled?: boolean
  }) => (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      role={role}
      aria-checked={selected}
      disabled={disabled}
      className={`min-h-[72px] sm:min-h-[80px] border flex items-center justify-center text-center px-4 py-4 cursor-pointer select-none transition-all duration-200 rounded-none text-xs uppercase tracking-[0.1em] font-medium leading-snug focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
        selected
          ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
          : 'bg-transparent border-current/20 hover:border-current/60 hover:bg-current/5'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="py-16 md:py-32 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20 items-start">
        {/* LEFT COLUMN */}
        <div className="md:sticky md:top-32">
          <div className="text-xs tracking-[0.2em] uppercase opacity-40">
            GET IN TOUCH
          </div>
          <div className="border-t border-current/10 mt-3 mb-6 md:mb-8" />
          <div className="text-sm">hello@playgroundstudio.com.au</div>
          <div className="text-sm mt-2">+61 419 248 668</div>
          <div className="text-sm mt-2 opacity-60">
            23 Union St · South Melbourne · VIC 3205
          </div>
          <div className="border-t border-current/10 mt-8 pt-8">
            <div className="text-xs opacity-40">
              We respond to all enquiries within 24 hours.
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - WIZARD */}
        <div>
          {!isSubmitted ? (
            <>
              {/* PROGRESS BAR */}
              <div className="w-full h-[1px] bg-current opacity-10">
                <div
                  className="h-full bg-current transition-all duration-500 ease-out"
                  style={{ width: `${step * 20}%` }}
                />
              </div>
              <div className="mt-3 text-xs tracking-[0.2em] uppercase opacity-30">
                STEP {step} OF 5
              </div>

              {/* STEP CONTENT */}
              <div key={step} className="animate-in fade-in slide-in-from-right-4 duration-300">
                {step === 1 && (
                  <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-medium uppercase tracking-tight">
                      What would you like to create?
                    </h2>
                    <p className="mt-2 text-xs tracking-[0.1em] uppercase opacity-40">
                      Select all that apply.
                    </p>
                    <div
                      role="group"
                      aria-label="Type of work"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8"
                    >
                      {workTypeOptions.map(option => (
                        <Tile
                          key={option}
                          label={option}
                          selected={data.workTypes.includes(option)}
                          onClick={() => handleWorkTypeToggle(option)}
                          role="checkbox"
                        />
                      ))}
                    </div>
                    {error && <div className="text-xs text-red-500 mt-3">{error}</div>}
                  </div>
                )}

                {step === 2 && (
                  <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-medium uppercase tracking-tight">
                      Tell us about your world.
                    </h2>
                    <p className="mt-2 text-xs tracking-[0.1em] uppercase opacity-40">
                      Your industry shapes our approach.
                    </p>
                    <div
                      role="group"
                      aria-label="Industry sector"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8"
                    >
                      {sectorOptions.map(option => (
                        <Tile
                          key={option}
                          label={option}
                          selected={data.sector === option}
                          onClick={() => handleSingleSelect('sector', option)}
                          role="radio"
                        />
                      ))}
                    </div>
                    {error && <div className="text-xs text-red-500 mt-3">{error}</div>}
                  </div>
                )}

                {step === 3 && (
                  <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-medium uppercase tracking-tight">
                      What&apos;s your investment?
                    </h2>
                    <p className="mt-2 text-xs tracking-[0.1em] uppercase opacity-40">
                      This helps us propose the right team.
                    </p>
                    <div
                      role="group"
                      aria-label="Budget range"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8"
                    >
                      {budgetOptions.map(option => (
                        <Tile
                          key={option}
                          label={option}
                          selected={data.budget === option}
                          onClick={() => handleSingleSelect('budget', option)}
                          role="radio"
                        />
                      ))}
                    </div>
                    {error && <div className="text-xs text-red-500 mt-3">{error}</div>}
                  </div>
                )}

                {step === 4 && (
                  <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-medium uppercase tracking-tight">
                      When do you need us?
                    </h2>
                    <p className="mt-2 text-xs tracking-[0.1em] uppercase opacity-40">
                      We&apos;ll make sure the right people are ready.
                    </p>
                    <div
                      role="group"
                      aria-label="Timeline"
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8"
                    >
                      {timelineOptions.map(option => (
                        <Tile
                          key={option}
                          label={option}
                          selected={data.timeline === option}
                          onClick={() => handleSingleSelect('timeline', option)}
                          role="radio"
                        />
                      ))}
                    </div>
                    {error && <div className="text-xs text-red-500 mt-3">{error}</div>}
                  </div>
                )}

                {step === 5 && (
                  <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-medium uppercase tracking-tight">
                      Let&apos;s get acquainted.
                    </h2>
                    <p className="mt-2 text-xs tracking-[0.1em] uppercase opacity-40">
                      We&apos;ll be in touch within 24 hours.
                    </p>

                    <div className="mt-8">
                      {/* First & Last Name */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="sr-only">
                            First Name
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            value={data.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="border-b border-current/20 pb-3 bg-transparent outline-none w-full text-sm focus:border-current/80 transition-colors duration-200 placeholder:opacity-30"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="sr-only">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Last name"
                            value={data.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="border-b border-current/20 pb-3 bg-transparent outline-none w-full text-sm focus:border-current/80 transition-colors duration-200 placeholder:opacity-30"
                            required
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="mt-6">
                        <label htmlFor="company" className="sr-only">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          placeholder="Company (optional)"
                          value={data.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="border-b border-current/20 pb-3 bg-transparent outline-none w-full text-sm focus:border-current/80 transition-colors duration-200 placeholder:opacity-30"
                        />
                      </div>

                      {/* Email */}
                      <div className="mt-6">
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          value={data.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="border-b border-current/20 pb-3 bg-transparent outline-none w-full text-sm focus:border-current/80 transition-colors duration-200 placeholder:opacity-30"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="mt-6">
                        <label htmlFor="phone" className="sr-only">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="Phone (optional)"
                          value={data.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="border-b border-current/20 pb-3 bg-transparent outline-none w-full text-sm focus:border-current/80 transition-colors duration-200 placeholder:opacity-30"
                        />
                      </div>

                      {/* Source */}
                      <div className="mt-6">
                        <label htmlFor="source" className="sr-only">
                          How did you hear about us?
                        </label>
                        <input
                          id="source"
                          type="text"
                          placeholder="How did you hear about us? (optional)"
                          value={data.source}
                          onChange={(e) => handleInputChange('source', e.target.value)}
                          className="border-b border-current/20 pb-3 bg-transparent outline-none w-full text-sm focus:border-current/80 transition-colors duration-200 placeholder:opacity-30"
                        />
                      </div>

                      {/* Message */}
                      <div className="mt-6">
                        <label htmlFor="message" className="sr-only">
                          Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="Message (optional)"
                          value={data.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="border-b border-current/20 pb-3 bg-transparent outline-none w-full text-sm focus:border-current/80 transition-colors duration-200 placeholder:opacity-30 min-h-[80px] resize-none"
                        />
                      </div>
                    </div>

                    {error && <div className="text-xs text-red-500 mt-3">{error}</div>}
                  </div>
                )}
              </div>

              {/* NAVIGATION ROW */}
              <div className="mt-10 flex justify-between items-center">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  >
                    ← BACK
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="bg-black text-white dark:bg-white dark:text-black text-xs tracking-[0.2em] uppercase py-3 px-8 rounded-none hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  {isSubmitting ? 'SENDING…' : step === 5 ? 'SEND ENQUIRY →' : 'NEXT →'}
                </button>
              </div>
            </>
          ) : (
            // SUCCESS STATE
            <div className="py-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-600">
              <h2 className="text-[48px] sm:text-[60px] md:text-[80px] font-medium uppercase tracking-tight leading-none">
                Thank you.
              </h2>
              <p className="mt-4 md:mt-6 text-xs tracking-[0.15em] uppercase opacity-50">
                We&apos;ll be in touch within 24 hours.
              </p>
              <Link
                href="/work"
                className="inline-block mt-8 md:mt-10 text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                ← Explore our work
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
