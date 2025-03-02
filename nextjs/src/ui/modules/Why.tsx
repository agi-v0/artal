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
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-16">
					<div className="max-w-2xl">
						<Pretitle>{pretitle}</Pretitle>
						<div className="text-foreground richtext mt-6">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400">
					<div className="text-foreground grid grid-cols-1 divide-y divide-neutral-400">
						{tips.map((tip: any, index: string) => (
							<div
								key={index}
								className="grid grid-cols-1 justify-between gap-3 p-8 md:grid-cols-3"
							>
								<div className="font-light">{tip.title}</div>

								<div className="text-neutral-400 md:col-span-2">
									<PortableText value={tip.description} />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Why
