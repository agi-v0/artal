import { PortableText } from 'next-sanity'
import Img from '../Img'

const AllProjects = ({
	pretitle,
	content,
	projects,
	...props
}: Partial<{
	pretitle: string
	content: any
	projects: any
}> &
	Sanity.Module) => {

	return (
		<>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="text-foreground mt-6 text-2xl font-light">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8">
					<ul
						role="list"
						className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2"
					>
						{projects.map((project: any, index: string) => (
							<li key={index}>
								<a href={'/work/' + project.slug} className="h-full">
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

export default AllProjects
