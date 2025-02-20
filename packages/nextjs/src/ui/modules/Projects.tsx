const Projects = () => {
	const allPosts = [{ longImage: '/temp/large1.png', company: '' }]

	return (
		<>
			<section>
				<div className="border-[#292929] mx-auto max-w-7xl border-x border-b p-8">
					<div className="w-full items-center justify-between text-left md:inline-flex">
						<div>
							<h3 className="mt-6 text-2xl font-light text-white">
								Checkout all our projects
							</h3>
						</div>
						<div className="mt-6 lg:mt-0 lg:ml-auto">
							<a
								href="/work/home"
								title="your title"
								aria-label="your label"
								className="bg-gray inline-flex items-center rounded-full border border-transparent px-6 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
							>
								SEE ALL WORK
							</a>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="border-[#292929] mx-auto max-w-7xl border-x border-b">
					<ul className="grid-col-1 divide-[#292929] grid h-full md:grid-cols-3 lg:divide-x">
						{allPosts.slice(0, 3).map((post) => (
							<li className="flex h-full flex-col p-8">
								<a>
									<img
										className="h-[40rem] w-full object-cover object-top"
										src={post.longImage}
										alt={post.company}
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Projects
