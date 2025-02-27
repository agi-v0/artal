import { PortableText } from 'next-sanity'

const Services = ({
	pretitle,
	content,
	services,
	...props
}: Partial<{
	pretitle: string
	content: any
	services: any
}> &
	Sanity.Module) => {
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="text-foreground mt-6 text-2xl font-light">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400">
					<div className="text-foreground grid grid-cols-1 divide-y divide-[#292929]">
						{services?.map((service: any, index: string) => (
							<div
								key={index}
								className="flex w-full justify-between gap-3 p-8"
							>
								<p className="font-light">{service.title}</p>
								<span>&rarr;</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Services
