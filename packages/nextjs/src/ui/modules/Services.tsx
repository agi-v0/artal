// import { getCollection } from 'astro:content'

import { PortableText } from 'next-sanity'

// import ServicesEntries from '@/components/services/ServicesEntries.astro'

const Services = ({
	pretitle,
	content,
	...props
}: Partial<{
	pretitle: string
	content: any
}> &
	Sanity.Module) => {
	// const allPosts = await getCollection('services')

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
						{/* {allPosts.map((post) => (
							<ServicesEntries
								url={'/services/' + post.slug}
								service={post.data.service}
							/>
						))} */}
					</div>
				</div>
			</section>
		</>
	)
}

export default Services
