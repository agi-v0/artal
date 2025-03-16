import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplate } from '../../../components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(req: NextRequest) {
	const response = await req.json()

	const { fullName, phoneNumber, email, message } = response

	console.log(fullName, phoneNumber, email, message)

	// try {
	// 	const { data, error } = await resend.emails.send({
	// 		from: 'Artal <onboarding@resend.dev>',
	// 		to: process.env.NEXT_PUBLIC_RESEND_EMAIL as string,
	// 		subject: 'Hello world',
	// 		react: EmailTemplate({
	// 			fullName: fullName,
	// 			phoneNumber: phoneNumber,
	// 			email: email,
	// 			message: message,
	// 		}),
	// 	})

	// 	if (error) {
	// 		return NextResponse.json({ error }, { status: 500 })
	// 	}

	// 	return NextResponse.json(data)
	// } catch (error) {
	// 	return NextResponse.json({ error }, { status: 500 })
	// }
}
