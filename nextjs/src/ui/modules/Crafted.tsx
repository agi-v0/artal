import { PortableText } from 'next-sanity'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
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
				<div className="section">
					<div className="max-w-2xl">
						<Pretitle>{pretitle}</Pretitle>
						<div className="text-foreground richtext mt-6">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b">
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
						{/* <CarouselPrevious size="lg" />
						<CarouselNext size="lg" /> */}
					</Carousel>
				</div>
			</section>
		</>
	)
}

export default Crafted
