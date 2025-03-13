import { PortableText } from 'next-sanity'
import Img from '../Img'

export default function Project({
	project,
}: Partial<{
	project: any
}>) {

	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-32">
					<div className="max-w-2xl">
						<h1 className="mt-6 text-2xl text-neutral-400">{project.client}</h1>
						<div className="mt-12 max-w-sm">
							<div>
								Client:{' '}
								<span className="text-neutral-400">{project.client}</span>
							</div>
							<div>
								services:{' '}
								<span className="text-neutral-400">{project.services}</span>
							</div>
							<div>
								Year: <span className="text-neutral-400">{project.year}</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8">
					<Img
						className={'h-[75vh] w-full object-cover object-top'}
						image={project.projectImage}
						width={300}
					/>
					<div className="mt-4">
						<PortableText value={project.body} />
					</div>
					<div className="prose-styles">
						<slot />
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8">
					<div className="inline-flex w-full items-center justify-between">
						<div>
							<span className="font-light text-neutral-400">Work</span>
							<h1 className="mt-6 text-2xl">Other projects</h1>
						</div>
						<div className="mt-6">
							<a
								href="/projects"
								className="text-background bg-foreground hover:bg-foreground/90 inline-flex items-center rounded-full border border-transparent px-6 py-2 text-sm ring-1 ring-transparent duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
							>
								SEE ALL WORK
							</a>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8">
					<ul
						role="list"
						className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3"
					>
						{project.otherProjects?.map((project: any, index: string) => (
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
