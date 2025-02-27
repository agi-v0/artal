import { PortableText } from 'next-sanity'
import Pretitle from '@/ui/Pretitle'

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
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<Pretitle className={'font-light text-neutral-400'}>
						{pretitle}
					</Pretitle>

					<div className="text-foreground mt-6 text-6xl font-light text-balance">
						<PortableText value={content} />
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400">
					<div className="text-foreground grid grid-cols-1 divide-[#292929] md:grid-cols-3 lg:divide-x">
						{testimonials.map((testimonial: any, index: string) => (
							<div
								className="flex h-full flex-col justify-between p-8"
								key={index}
							>
								<div className="text-neutral-400">
									<PortableText value={testimonial.content} />
								</div>

								<div className="mt-3">
									<span className="mt-3 block font-light">
										{testimonial.name}
									</span>
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
