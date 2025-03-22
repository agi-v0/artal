import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplate } from '../../../components/email-template'
import { Resend } from 'resend'
import { createClient } from 'next-sanity'
import { apiVersion } from '@/sanity/lib/env'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: apiVersion,
  token: process.env.SANITY_API_TOKEN, 
  useCdn: false,
})

export async function POST(req: NextRequest) {
  const response = await req.json()
  const { fullName, phoneNumber, email, message } = response

  try {
    // 1. Send email with Resend
    const { data, error } = await resend.emails.send({
      from: 'Artal <onboarding@resend.dev>',
      to: process.env.NEXT_PUBLIC_RESEND_EMAIL as string,
      subject: 'Contact US Message',
      react: EmailTemplate({
        fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        message: message,
      }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    // 2. Store the message in Sanity
    try {
      const sanityResult = await sanityClient.create({
        _type: 'contactMessage',
        name: fullName,
        email: email,
        phoneNumber: phoneNumber, // Make sure to add this to your schema
        message: message,
        receivedAt: new Date().toISOString(),
        emailId: data?.id || null, // Store Resend email ID for reference
      })
      
      // Return both email and Sanity results
      return NextResponse.json({
        email: data,
        sanity: sanityResult
      })
    } catch (sanityError) {
      console.error('Error saving to Sanity:', sanityError)
      // Still return success for the email since that worked
      return NextResponse.json({
        email: data,
        sanityError: 'Failed to save message to CMS'
      })
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}