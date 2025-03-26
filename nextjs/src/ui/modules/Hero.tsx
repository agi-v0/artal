'use client'
import { PortableText } from 'next-sanity'
import Pretitle from '@/ui/Pretitle'
import { components } from '../portable-text'
import * as m from 'motion/react-m'

export default function Hero({
	pretitle,
	content,
	testimonials,
	...props
}: Partial<{
	pretitle: string
	content: any
	testimonials: any
}> &
	Sanity.Module) {
	return (
		<>
			<section>
				<div
					// style={{ color: 'var(--color-neutral-200)' }}
					className="bg-grid-neutral-200 bg-background-highlight relative mx-auto h-screen max-w-7xl border-x border-b border-neutral-400 p-8 lg:p-16"
				>
					{/* <div className="text-foreground absolute inset-0 h-full w-full opacity-5"></div> */}

					<m.div
						className="flex h-full flex-col items-start justify-end gap-6"
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						variants={{
							hidden: {},
							show: {
								transition: {
									staggerChildren: 0.15,
								},
							},
						}}
					>
						<Pretitle className={'font-light text-neutral-400'}>
							{pretitle}
						</Pretitle>
						<div className="text-foreground richtext text-balance [&_h1]:mb-6 [&_h1]:max-w-3xl [&_p]:text-2xl [&_p]:text-neutral-500">
							<PortableText value={content} components={components} />
						</div>
					</m.div>
				</div>
			</section>
			<section>
				<div className="bg-background mx-auto max-w-7xl border-x border-b border-neutral-400">
					<div className="text-foreground grid grid-cols-1 divide-neutral-400 md:grid-cols-3 lg:divide-x">
						{testimonials.map((testimonial: any, index: string) => (
							<div
								className="flex h-full flex-col justify-between bg-[size:10px_10px] p-8 hover:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]"
								key={index}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 32 32"
										className="mb-8 size-8 text-red-800"
									>
										<path
											fill="currentColor"
											d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"
										/>
									</svg>
									<PortableText value={testimonial.content} />
								</div>
								<div className="mt-4">
									<span className="block font-medium">{testimonial.name}</span>
									<span className="block text-neutral-400">
										{testimonial.description}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
