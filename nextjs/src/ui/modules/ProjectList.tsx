import { PortableText } from 'next-sanity'
import { components } from '../portable-text'

import Img from '../Img'

const Projects = ({
	content,
	ctas,
	projects,
	...props
}: Partial<{
	content: any
	ctas?: any
	projects: Sanity.Project[]
}> &
	Sanity.Module) => {

	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-16">
					<div className="w-full items-center justify-between text-left md:inline-flex">
						<div className="max-w-2xl">
							{/* <Pretitle>{pretitle}</Pretitle> */}
							<div className="text-foreground richtext mt-6">
								<PortableText value={content} />
							</div>
						</div>
						<div className="mt-6 lg:mt-0 lg:ml-auto">
							<a
								href="/en/projects"
								title="your title"
								aria-label="your label"
								className="text-background bg-foreground hover:bg-foreground/90 inline-flex items-center rounded-full border border-transparent px-6 py-2 text-sm ring-1 ring-transparent duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
							>
								{ctas[0]?.link?.label}
							</a>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400">
					<ul className="grid-col-1 grid divide-neutral-400 md:grid-cols-3 lg:divide-x">
						{projects?.map((project: Sanity.Project, index: number) => (
							<li key={index} className="group flex flex-col">
								<a
									href={'/projects/' + project.metadata.slug.current}
									className="relative aspect-video w-full overflow-clip border-b border-neutral-400"
								>
									<div className="aspect-video w-full overflow-clip">
										<Img
											className={
												'aspect-video h-auto w-full scale-105 object-cover object-center transition-all duration-300 group-hover:scale-100'
											}
											image={project.projectImage}
											width={1920}
										/>
									</div>
									<div className="text-foreground absolute bottom-0 flex h-16 w-full translate-y-full flex-row items-center justify-between overflow-hidden border-t border-neutral-400 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] p-4 transition-all duration-300 group-hover:translate-0 [&_svg]:text-red-800">
										<span className="text-body-l font-medium">Read more</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
										>
											<path
												fill="currentColor"
												d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
											/>
										</svg>
									</div>
								</a>
								<div className="bg-background-highlight p-4">
									<h3 className="text-h5 font-medium">{project.title}</h3>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Projects
