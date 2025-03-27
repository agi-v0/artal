import { PortableText } from 'next-sanity'
import Pretitle from '../Pretitle'
import { Cursor } from '@/components/ui/cursor'
import Img from '../Img'

const Services = ({
	pretitle,
	content,
	services,
	...props
}: Partial<{
	pretitle: string
	content: any
	services: Sanity.Service[]
}> &
	Sanity.Module) => {
	return (
		<section>
			<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-16">
				<div className="max-w-2xl">
					<Pretitle>{pretitle}</Pretitle>
					<div className="richtext text-foreground-primary mt-6">
						<PortableText value={content} />
					</div>
				</div>
			</div>
			<div className="section p-0">
				<div className="text-foreground grid grid-cols-1 divide-y divide-neutral-400">
					{services?.map((service, index) => (
						<a
							href={'services/' + service.metadata.slug.current}
							key={index}
							className="hover:bg-background-highlight flex w-full items-center justify-between gap-3 p-8 hover:text-neutral-400"
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
			</div>
		</section>
	)
}

export default Services
