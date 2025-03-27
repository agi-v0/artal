'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'motion/react'
import * as m from 'motion/react-m'
import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from 'next-sanity'
import Pretitle from '../Pretitle'
import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from '@/components/ui/timeline'
import useWindowSize from '@/lib/useWindowSize'

const Process = ({
	pretitle,
	content,
	steps,
	...props
}: Partial<{
	pretitle: string
	content: any
	steps: any
}> &
	Sanity.Module) => {
	const components: PortableTextComponents = {
		types: {
			block: ({ value }: PortableTextTypeComponentProps<any>) => {
				if (value.style === 'h2') {
					return (
						<p className="text-foreground text-h4 text-balance">
							{value.children.map((child: any) => child.text).join('')}
						</p>
					)
				} else if (value.style === 'h3') {
					return (
						<p className="text-foreground text-h5 text-balance">
							{value.children.map((child: any) => child.text).join('')}
						</p>
					)
				} else
					return (
						<p className="text-base text-neutral-600">
							{value.children.map((child: any) => child.text).join('')}
						</p>
					)
			},
		},
	}
	const containerRef = useRef<HTMLDivElement>(null)
	const [activeStep, setActiveStep] = useState(1)

	// Set up scroll tracking
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['0%', '60%'],
	})

	// Map scroll progress to timeline steps
	const step = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 2, 3, 4])

	// Update active step based on scroll position
	useEffect(() => {
		const unsubscribe = step.onChange((value) => {
			setActiveStep(Math.round(value))
		})

		return () => unsubscribe()
	}, [step])

	let windowsSize = useWindowSize()

	return (
		<section ref={containerRef} className="">
			<div className="section border-x border-b bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]">
				<Pretitle>{pretitle}</Pretitle>
				<div className="text-foreground richtext mt-6">
					<PortableText value={content} />
				</div>
			</div>
			<div className="mx-auto max-w-7xl divide-y border-x border-b p-8">
				<Timeline
					value={activeStep}
					orientation={windowsSize.width > 768 ? 'horizontal' : 'vertical'}
				>
					{steps.map((step: any, id: number) => (
						<TimelineItem key={id} step={id + 1}>
							<TimelineHeader>
								<TimelineSeparator />
								<TimelineTitle className="text-h6">{step.title}</TimelineTitle>
								<TimelineIndicator />
								<m.div
									className={`absolute size-4 rounded-full border-2 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 ${id + 1 <= activeStep ? 'border-red-800 bg-red-800' : 'border-primary/20'}`}
									initial={false}
									animate={{
										scale: id + 1 === activeStep ? 1.2 : 1,
										transition: { duration: 0.3 },
									}}
								>
									<TimelineIndicator className="!border-0" />
								</m.div>
							</TimelineHeader>
							<m.div
								initial={{ opacity: 0, y: 10 }}
								animate={{
									opacity: id + 1 === activeStep ? 1 : 0.5,
									y: id + 1 === activeStep ? 4 : 0,
								}}
								transition={{ duration: 0.3 }}
							>
								<TimelineContent>
									<PortableText value={step.content} components={components} />
								</TimelineContent>
							</m.div>
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</section>
	)
}

export default Process
