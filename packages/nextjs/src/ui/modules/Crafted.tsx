import { PortableText } from 'next-sanity'
import { CarouselSection } from '@/components/Carousel'

const Crafted = ({
	pretitle,
	content,
	carousel,
	...props
}: Partial<{
	pretitle: string
	content: any
	carousel: any
}> &
	Sanity.Module) => {
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="text-foreground mt-6 text-2xl font-light text-pretty">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<CarouselSection carouselImages={carousel} />
				</div>
			</section>
		</>
	)
}

export default Crafted
