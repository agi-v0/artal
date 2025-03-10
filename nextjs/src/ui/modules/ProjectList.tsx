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
	projects: any
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
								href="/work/home"
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
					<ul className="grid-col-1 grid h-full divide-neutral-400 md:grid-cols-3 lg:divide-x">
						{projects.map((project: any, index: string) => (
							<li key={index} className="flex h-full flex-col overflow-clip">
								<a href="/">
									<Img
										className={
											'aspect-video h-auto w-full scale-105 object-cover object-center hover:scale-100'
										}
										image={project.projectImage}
										width={1920}
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
