import { PortableText } from 'next-sanity'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Pretitle from '../Pretitle'
import Img from '../Img'

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
					<Carousel className="w-full">
						<CarouselContent>
							{carousel.map((image: any, index: string) => (
								<CarouselItem
									key={index}
									className="md:basis-1/2 lg:basis-full"
								>
									<Img
										className={
											'aspect-video h-auto w-full object-cover object-center'
										}
										image={image}
										width={1920}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>
		</>
	)
}

export default Crafted
