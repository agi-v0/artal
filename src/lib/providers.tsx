'use client'

import { LazyMotion } from 'motion/react'
import { NextIntlClientProvider } from 'next-intl'

export default function Providers({
	messages,
	locale,
	children,
}: {
	messages: any
	locale: string
	children: React.ReactNode
}) {
	const domAnimations = () =>
		import('@/lib/features').then((res) => res.default)

	return (
		<LazyMotion features={domAnimations}>
			<NextIntlClientProvider messages={messages} locale={locale}>
				{children}
			</NextIntlClientProvider>
		</LazyMotion>
	)
}
