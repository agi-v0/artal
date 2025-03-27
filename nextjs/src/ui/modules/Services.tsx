'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { Icon } from '@iconify-icon/react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'
import { PortableText } from 'next-sanity'
import Pretitle from '../Pretitle'
import { Cursor } from '@/components/ui/cursor'
import Img from '../Img'
import { Link } from '@/i18n/navigation'

export default function Services({
	pretitle,
	content,
	services,
	...props
}: Partial<{
	pretitle: string
	content: any
	services: Sanity.Service[]
}> &
	Sanity.Module) {
	const [index, setIndex] = useState(0)
	return (
		<section className="">
			<div className="section border-x border-b">
				<div className="max-w-2xl">
					<Pretitle>{pretitle}</Pretitle>
					<div className="richtext text-foreground-primary mt-6">
						<PortableText value={content} />
					</div>
				</div>
			</div>
			{/* <div className="section p-0">
				<div className="text-foreground grid grid-cols-1 divide-y ">
					{services?.map((service, index) => (
						<a
							href={'services/' + service.metadata.slug.current}
							key={index}
							className="hover:bg-background-highlight flex w-full items-center justify-between gap-3 p-8 hover:text-foreground/50"
						>
							<Cursor
								attachToParent
								variants={{
									initial: { height: 0, opacity: 0, scale: 0.3 },
									animate: { height: 'auto', opacity: 1, scale: 1 },
									exit: { height: 0, opacity: 0, scale: 0.3 },
								}}
								transition={{
									type: 'spring',
									duration: 0.3,
									bounce: 0.1,
								}}
								className="overflow-hidden"
								springConfig={{
									bounce: 0.01,
								}}
							>
								<Img
									className="aspect-video h-auto w-60 object-cover object-center"
									image={service.serviceImage}
									width={240}
									format="webp"
									loading="eager"
								/>
							</Cursor>
							<h3 className="text-h5">{service.title}</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
							>
								<path
									fill="currentColor"
									d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
								/>
							</svg>
						</a>
					))}
				</div>
			</div> */}
			<div className="section px-site py-md flex items-end justify-end border-x">
				<div className="flex gap-2">
					<button
						type="button"
						className="bg-background text-foreground hover:bg-secondary flex size-10 items-center justify-center rounded-full border opacity-100 disabled:opacity-40"
						aria-label="Previous slide"
						disabled={index === 0}
						onClick={() => setIndex(index - 1)}
					>
						<Icon icon="carbon:chevron-left" width="20" height="20" />
					</button>
					<button
						type="button"
						className="bg-background text-foreground hover:bg-secondary flex size-10 items-center justify-center rounded-full border opacity-100 disabled:opacity-40"
						aria-label="Next slide"
						disabled={index === (services && services.length - 4)}
						onClick={() => setIndex(index + 1)}
					>
						<Icon icon="carbon:chevron-right" width="20" height="20" />
					</button>
				</div>
			</div>
			<Carousel
				index={index}
				onIndexChange={setIndex}
				className="section p-0"
				// disableDrag
			>
				<CarouselContent
					className="w-full gap-0"
					transition={{
						type: 'spring',
						stiffness: 26.7,
						damping: 4.1,
						mass: 0.2,
					}}
				>
					{services?.map((service, index) => (
						<CarouselItem key={index} className="basis-1/4 p-0">
							<Link
								href="#"
								className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden"
							>
								<Img
									image={service.serviceImage}
									className="pointer-events-none h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black opacity-50"></div>
								<div className="top-md start-md absolute p-4 text-white">
									<h3 className="text-h5">{service.title}</h3>
									<p className="text-body mb-0.5">{service.description}</p>
								</div>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
