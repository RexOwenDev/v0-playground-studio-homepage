import { NextResponse } from 'next/server'

interface EnquiryData {
  workTypes: string[]
  sector: string
  budget: string
  timeline: string
  firstName: string
  lastName: string
  company?: string
  email: string
  phone?: string
  source?: string
  message?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateEnquiry(data: EnquiryData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.workTypes || data.workTypes.length === 0) {
    errors.push('Work type is required')
  }
  if (!data.sector) {
    errors.push('Sector is required')
  }
  if (!data.budget) {
    errors.push('Budget is required')
  }
  if (!data.timeline) {
    errors.push('Timeline is required')
  }
  if (!data.firstName?.trim()) {
    errors.push('First name is required')
  }
  if (!data.lastName?.trim()) {
    errors.push('Last name is required')
  }
  if (!data.email?.trim()) {
    errors.push('Email is required')
  } else if (!validateEmail(data.email)) {
    errors.push('Invalid email format')
  }

  return { valid: errors.length === 0, errors }
}

export async function POST(request: Request) {
  try {
    const body: EnquiryData = await request.json()
    
    // Validate the enquiry data
    const validation = validateEnquiry(body)
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      )
    }

    // Log the enquiry (in production, this would send to CRM/email service)
    console.log('=== NEW PROJECT ENQUIRY ===')
    console.log('Date:', new Date().toISOString())
    console.log('Name:', `${body.firstName} ${body.lastName}`)
    console.log('Company:', body.company || 'Not provided')
    console.log('Email:', body.email)
    console.log('Phone:', body.phone || 'Not provided')
    console.log('Work Types:', body.workTypes.join(', '))
    console.log('Sector:', body.sector)
    console.log('Budget:', body.budget)
    console.log('Timeline:', body.timeline)
    console.log('Source:', body.source || 'Not provided')
    console.log('Message:', body.message || 'No message')
    console.log('===========================')

    // In production, integrate with:
    // - Email service (SendGrid, Resend, etc.)
    // - CRM (HubSpot, Salesforce, etc.)
    // - Slack notification
    // - Database storage

    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your enquiry. We will be in touch within 24 hours.'
    })
    
  } catch (error) {
    console.error('Enquiry submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process enquiry' },
      { status: 500 }
    )
  }
}
