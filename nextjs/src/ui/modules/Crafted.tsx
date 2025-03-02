import { PortableText } from 'next-sanity'
import { CarouselSection } from '@/components/Carousel'
import Pretitle from '../Pretitle'

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
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-16">
					<div className="max-w-2xl">
						<Pretitle>{pretitle}</Pretitle>
						<div className="text-foreground richtext mt-6">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400">
					<CarouselSection carouselImages={carousel} />
				</div>
			</section>
		</>
	)
}

export default Crafted
