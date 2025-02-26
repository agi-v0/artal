import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from 'next-sanity'

const About = ({
	pretitle,
	content,
	...props
}: Partial<{
	pretitle: string
	content: any
}> &
	Sanity.Module) => {
	const components: PortableTextComponents = {
		types: {
			block: ({ value }: PortableTextTypeComponentProps<any>) => {
				if (value.style === 'h3') {
					return (
						<p className="mt-6 text-2xl font-light text-balance text-white">
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
		<section>
			<div className="mx-auto max-w-7xl border-x border-b border-[#292929] p-8 lg:py-32">
				<div className="max-w-2xl">
					<span className="font-light text-neutral-400">{pretitle}</span>
					<PortableText value={content} components={components} />
				</div>
			</div>
		</section>
	)
}

export default About
