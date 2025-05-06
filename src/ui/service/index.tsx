import { PortableText } from 'next-sanity'
import Img from '../Img'

export default function Service({ service }: { service: Sanity.Service }) {
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="mx-auto max-w-2xl">
						<h1 className="text-foreground/50 font-light">{service.title}</h1>
					</div>
					<div className="prose-styles">
						<slot />
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b p-8">
					<Img
						className={'h-[75vh] w-full object-cover object-top'}
						image={service.serviceImage}
						width={300}
					/>
					<div className="richtext mx-auto mt-4 max-w-3xl">
						<PortableText value={service.body} />
					</div>
					<div className="prose-styles">
						<slot />
					</div>
				</div>
			</section>
		</>
	)
}
