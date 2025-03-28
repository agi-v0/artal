import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from 'next-sanity'
import { apiVersion } from '@/sanity/lib/env'
import EmailTemplate from '@/components/email-template'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
	apiVersion: apiVersion,
	token: process.env.SANITY_API_WRITE_TOKEN,
	useCdn: false,
})

export async function POST(req: NextRequest) {
	const response = await req.json()
	const { fullName, phoneNumber, email, message } = response

	try {
		const { data, error } = await resend.batch.send([
			// 1. Send the email to the Artal Group email
			{
				from: `${fullName} <${process.env.NEXT_PUBLIC_RESEND_EMAIL || 'onboarding@resend.dev'}>`,
				to:
					(process.env.NEXT_PUBLIC_RESEND_EMAIL as string) ||
					'omaroubari2002@gmail.com',
				subject: 'Artal Group - New Message',
				replyTo: email,
				react: EmailTemplate({
					fullName: fullName,
					phoneNumber: phoneNumber,
					email: email,
					message: message,
				}),
			},
			// 2. Send the email to the sender
			{
				from: `Artal Group <${process.env.NEXT_PUBLIC_RESEND_EMAIL || 'onboarding@resend.dev'}>`,
				to: email,
				subject: 'Thank you for contacting Artal Group',
				html: `
					<div>
						<h2>Thank you for your message, ${fullName}!</h2>
						<p>We have received your inquiry and will get back to you as soon as possible.</p>
						<p>For reference, here is a copy of your message:</p>
						<blockquote style="padding: 10px; border-left: 4px solid #ccc; margin: 10px 0;">
							${message}
						</blockquote>
						<p>Best regards,<br/>Artal Group</p>
					</div>
				`,
			},
		])

		if (error) {
			return NextResponse.json({ error }, { status: 500 })
		}

		// 2. Store the message in Sanity
		try {
			const sanityContactDoc = await sanityClient.create({
				_type: 'contactMessage',
				name: fullName,
				email: email,
				phoneNumber: phoneNumber,
				message: message,
				receivedAt: new Date().toISOString(),
				emailId:
					data?.data?.reduce((acc, curr) => {
						return acc + curr.id
					}, '') || null,
				// emailBatchResponse: data, // Store the entire batch response
			})

			// Return both email and Sanity results
			return NextResponse.json({
				email: data,
				sanity: sanityContactDoc,
			})
		} catch (sanityError) {
			console.error('Error saving to Sanity:', sanityError)
			// Still return success for the email since that worked
			return NextResponse.json({
				email: data,
				sanityError: 'Failed to save message to CMS',
			})
		}
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 })
	}
}
