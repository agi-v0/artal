'use client'

import { LazyMotion } from 'motion/react'

export default function Motion({ children }: { children: React.ReactNode }) {
	const domAnimations = () =>
		import('@/lib/features').then((res) => res.default)
	return <LazyMotion features={domAnimations}>{children}</LazyMotion>
}
