'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
				if (value.style === 'h3') {
					return (
						<p className="text-foreground text-h5 text-balance">
							{value.children.map((child: any) => child.text).join('')}
						</p>
					)
				}
				return (
					<p className="text-body text-foreground/50">
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
		offset: ['00%', '20%'],
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
	return (
		<section ref={containerRef}>
			<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-16">
				<div className="max-w-2xl">
					<Pretitle>{pretitle}</Pretitle>
					<div className="text-foreground richtext mt-6">
						<PortableText value={content} />
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl divide-y divide-neutral-400 border-x border-b border-neutral-400 p-8 lg:py-16">
				<Timeline value={activeStep} orientation="horizontal">
					{steps.map((step: any, id: number) => (
						<TimelineItem key={id} step={id + 1}>
							<TimelineHeader>
								<TimelineSeparator />
								<TimelineTitle className="text-h6">{step.title}</TimelineTitle>
								<TimelineIndicator />
								<motion.div
									className={`absolute size-4 rounded-full border-2 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 ${id + 1 <= activeStep ? 'bg-primary border-primary' : 'border-primary/20'}`}
									initial={false}
									animate={{
										scale: id + 1 === activeStep ? 1.2 : 1,
										transition: { duration: 0.3 },
									}}
								>
									<TimelineIndicator className="!border-0" />
								</motion.div>
							</TimelineHeader>
							<motion.div
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
							</motion.div>
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</section>
	)
}

export default Process
