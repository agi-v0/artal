import {
	PortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from 'next-sanity'
import Pretitle from '../Pretitle'

const Why = ({
	pretitle,
	content,
	tips,
	...props
}: Partial<{
	pretitle: string
	content: any
	tips: any
}> &
	Sanity.Module) => {
	return (
		<section>
			<div className="section">
				<div className="max-w-2xl">
					<Pretitle>{pretitle}</Pretitle>
					<div className="text-foreground richtext mt-6">
						<PortableText value={content} />
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl border-x border-b border-neutral-400">
				<div className="text-foreground grid grid-cols-1 divide-y divide-neutral-400">
					{tips.map((tip: any, index: string) => (
						<div
							key={index}
							className="p-lg px-site gap-lg grid grid-cols-1 items-center justify-between md:grid-cols-3"
						>
							<h3 className="text-h6">{tip.title}</h3>
							<div className="text-neutral-400 md:col-span-2">
								<PortableText value={tip.description} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Why
