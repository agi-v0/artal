const Project = ({
	pretitle,
	content,
	awardsList,
	project,
	...props
}: Partial<{
	pretitle: string
	content: any
	awardsList: any
	project: any
}> &
	Sanity.Module) => {
	return (
		<>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{project.work}</span>
						<h1 className="mt-6 text-2xl font-light text-white">
							{project.company}
						</h1>
						<div className="mt-12 max-w-sm">
							{project.details.map((detail: any) => (
								<div className="grid grid-cols-1 sm:grid-cols-2">
									<p className="text-white">{detail.name}:</p>
									<p className="text-neutral-400">{detail.value}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8">
					<img
						className="w-full object-cover object-center"
						src={project.thumbnail.url}
						alt={project.thumbnail.alt}
					/>
					<div className="prose-styles">
						<slot />
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8">
					<div className="inline-flex w-full items-center justify-between">
						<div>
							<span className="font-light text-neutral-400">Work</span>
							<h1 className="mt-6 text-2xl font-light text-white">
								Other projects
							</h1>
						</div>
						<div className="mt-6">
							<a
								href="/work/home"
								className="bg-gray inline-flex items-center rounded-full border border-transparent px-6 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
							>
								SEE ALL WORK
							</a>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8">
					<ul
						role="list"
						className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3"
					>
						{/* {allProjects.slice(0, 3).map((post) => (
							<AllWork
								url={'/work/' + post.slug}
								company={post.data.company}
								work={post.data.work}
								thumbnail={post.data.thumbnail.url}
							/>
						))} */}
					</ul>
				</div>
			</section>
		</>
	)
}
