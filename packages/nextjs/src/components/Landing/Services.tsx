// import { getCollection } from 'astro:content'

// import ServicesEntries from '@/components/services/ServicesEntries.astro'

const Servics = () => {
	// const allPosts = await getCollection('services')

	return (
		<>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">Best in town</span>
						<h3 className="mt-6 text-2xl font-light text-white">Or services</h3>
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b">
					<div className="divide-gray grid grid-cols-1 divide-y text-white">
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

export default Servics
