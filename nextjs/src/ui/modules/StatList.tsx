'use client'
import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'
import { AnimatedNumber } from '@/components/ui/animated-number'
import { useRef, useState } from 'react'
import { useInView } from 'motion/react'

export default function StatList({
	pretitle,
	intro,
	stats,
}: Partial<{
	pretitle: string
	intro: any
	stats: Partial<{
		prefix: string
		value: string
		suffix: string
		text: string
	}>[]
	textAlign: React.CSSProperties['textAlign']
}>) {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { once: true })
	const [values, setValues] = useState([0, 0, 0, 0])

	if (isInView && values?.reduce((acc, curr) => acc + Number(curr), 0) === 0) {
		setValues(stats?.map(({ value }) => Number(value)) || [0, 0, 0, 0])
	}

	return (
		<section className="bg-background-highlight dark section p-xl">
			{(pretitle || intro) && (
				<header className="richtext text-center">
					<Pretitle>{pretitle}</Pretitle>
					<PortableText value={intro} />
				</header>
			)}
			<div
				ref={ref}
				className="gap-md mx-auto grid grid-cols-2 items-start justify-center md:grid-cols-4"
			>
				{stats?.map(({ prefix, value, suffix, text }, key) => (
					<div className="w-full font-semibold" key={key}>
						<div className="space-x-1">
							{prefix && (
								<span className="text-foreground/50 text-h2">{prefix}</span>
							)}
							<span className="text-foreground text-h2">
								<AnimatedNumber
									value={values[key]}
									springOptions={{ bounce: 0, duration: 2000 }}
								/>
							</span>
							{suffix && (
								<span className="text-foreground/50 text-h2">{suffix}</span>
							)}
						</div>
						{text && (
							<span className="text-body text-foreground/50 font-normal text-balance">
								{text}
							</span>
						)}
					</div>
				))}
			</div>
		</section>
	)
}
