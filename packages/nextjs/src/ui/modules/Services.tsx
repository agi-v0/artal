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
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929] p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="mt-6 text-2xl font-light text-white">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929]">
					<div className="grid grid-cols-1 divide-y divide-[#292929] text-white">
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
