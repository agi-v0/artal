'use client'

import { PortableText } from 'next-sanity'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

export default function ContactUS({
	pretitle,
	content,
}: Partial<{
	pretitle: string
	content: any
}> &
	Sanity.Module) {
	const [formData, setFormData] = useState({
		fullName: '',
		phoneNumber: '',
		email: '',
		message: '',
	})

	const [isSending, setIsSending] = useState(false)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!formData.email || !formData.message) {
			toast.info('Email and message are required fields')
			return
		}

		try {
			setIsSending(true)
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fullName: formData.fullName,
					phoneNumber: formData.phoneNumber,
					email: formData.email,
					message: formData.message,
				}),
			})

			// handle success
			if (response.ok) {
				toast.success('Email Sent Successfully!')
				setFormData({
					fullName: '',
					phoneNumber: '',
					email: '',
					message: '',
				})
			} else {
				toast.error('There was a problem sending email. Pls try again!')
			}
		} catch (error) {
			console.log('Error sending email:', error)
			toast.error('There was a problem sending email. Pls try again!')
		} finally {
			setIsSending(false)
		}
	}

	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b p-8 pt-[calc(32px+var(--header-height))] lg:py-16 lg:pt-[calc(64px+var(--header-height))]">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="text-foreground richtext mt-6">
							<PortableText value={content} />
						</div>
					</div>
				</div>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<div className="mx-auto max-w-2xl">
						<form onSubmit={handleSubmit}>
							<div className="mb-5">
								<label
									htmlFor="fullName"
									className="mb-3 block text-base font-medium text-black"
								>
									Full Name
								</label>
								<input
									name="fullName"
									type="text"
									placeholder="Full Name"
									className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
									value={formData.fullName}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="phoneNumber"
									className="mb-3 block text-base font-medium text-black"
								>
									Phone Number
								</label>
								<input
									name="phoneNumber"
									type="text"
									placeholder="Phone Number"
									className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
									value={formData.phoneNumber}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="email"
									className="mb-3 block text-base font-medium text-black"
								>
									Email Address
								</label>
								<input
									name="email"
									type="email"
									placeholder="example@domain.com"
									className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="message"
									className="mb-3 block text-base font-medium text-black"
								>
									Message
								</label>
								<textarea
									name="message"
									rows={4}
									placeholder="Type your message"
									className="w-full resize-none rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
									value={formData.message}
									onChange={handleChange}
								/>
							</div>
							<div>
								<button
									className="cursor-pointer rounded-md bg-black px-8 py-3 text-base font-semibold text-white outline-none"
									disabled={isSending}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}
