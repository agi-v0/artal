import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Img from '@/ui/Img'

export function CarouselSection({ carouselImages }: { carouselImages: any }) {
	return (
		<Carousel className="w-full">
			<CarouselContent>
				{carouselImages.map((image: any, index: string) => (
					<CarouselItem key={index} className="md:basis-1/2 lg:basis-full">
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
	)
}
