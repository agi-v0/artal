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
					<p className="text-foreground/50 mt-6">
						{value.children.map((child: any) => child.text).join('')}
					</p>
				)
			},
		},
	}

	return (
		<section className="">
			<div className="section p-xl dark bg-grid-white/10 relative bg-red-800">
				<div className="relative z-10 max-w-2xl">
					<Pretitle className="border-white/50 text-white">{pretitle}</Pretitle>
					<div className="richtext text-foreground mt-6">
						<PortableText value={content} />
					</div>
				</div>
				<div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-red-800 to-red-800/0" />
			</div>
		</section>
	)
}

export default About
