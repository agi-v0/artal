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
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929] p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="mt-6 text-2xl font-light text-pretty text-white">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929] p-8 lg:py-32">
					<CarouselSection carouselImages={carousel} />
				</div>
			</section>
		</>
	)
}

export default Crafted
