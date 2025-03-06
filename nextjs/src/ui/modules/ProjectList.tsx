import { PortableText } from 'next-sanity'
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
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8">
					<div className="w-full items-center justify-between text-left md:inline-flex">
						<div>
							<div className="text-foreground mt-6 text-2xl font-light">
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
					<ul className="grid-col-1 grid h-full divide-[#292929] md:grid-cols-3 lg:divide-x">
						{projects.map((project: any, index: string) => (
							<li key={index} className="flex h-full flex-col p-8">
								<a>
									<Img
										className={'h-[40rem] w-full object-cover object-top'}
										image={project.projectImage}
										width={300}
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
