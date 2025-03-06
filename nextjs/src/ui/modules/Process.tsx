import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from 'next-sanity'

const Process = ({
	pretitle,
	content,
	steps,
	...props
}: Partial<{
	pretitle: string
	content: any
	steps: any
}> &
	Sanity.Module) => {
	const components: PortableTextComponents = {
		types: {
			block: ({ value }: PortableTextTypeComponentProps<any>) => {
				if (value.style === 'h3') {
					return (
						<p className="text-foreground mt-6 text-2xl font-light text-balance">
							{value.children.map((child: any) => child.text).join('')}
						</p>
					)
				}
				return (
					<p className="mt-6 text-neutral-400">
						{value.children.map((child: any) => child.text).join('')}
					</p>
				)
			},
		},
	}

	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<PortableText value={content} components={components} />
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl divide-y divide-neutral-400 border-x border-b border-neutral-400">
					<div className="text-foreground grid grid-cols-1 divide-[#292929] md:grid-cols-3 lg:divide-x">
						{steps.map((step: any, index: string) => (
							<div key={index} className="flex flex-col p-8">
								<div className="font-light">{step.title}</div>
								<div className="mt-3 text-pretty text-neutral-400">
									<PortableText value={step.content} components={components} />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Process
