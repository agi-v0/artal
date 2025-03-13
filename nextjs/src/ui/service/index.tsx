import { PortableText } from 'next-sanity'
import Img from '../Img'

export default function Service({
	service,
}: Partial<{
	service: any
}>) {
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<div className="mx-auto max-w-2xl">
						<span className="font-light text-neutral-400">{service.title}</span>
						<h1 className="mt-6 text-2xl font-light">{service.content}</h1>
					</div>
					<div className="prose-styles">
						<slot />
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8">
					<Img
						className={'h-[75vh] w-full object-cover object-top'}
						image={service.projectImage}
						width={300}
					/>
					<div className="mt-4">
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
