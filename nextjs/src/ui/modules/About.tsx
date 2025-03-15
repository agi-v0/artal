import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from 'next-sanity'
import Pretitle from '../Pretitle'

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
						<p className="text-foreground richtext mt-6 text-balance">
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
		<section className="bg-background-highlight section p-xl">
			<div className="max-w-2xl">
				<Pretitle>{pretitle}</Pretitle>
				<div className="text-foreground richtext mt-6">
					<PortableText value={content} />
				</div>
			</div>
		</section>
	)
}

export default About
