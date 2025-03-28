import { groq, PortableText } from 'next-sanity'
import Img from '../Img'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import Link from 'next/link'

export default async function ProjectsFrontpage({
	pretitle,
	content,
	projects,
}: Partial<{
	pretitle: string
	content: any
	projects: Sanity.Project[]
}> &
	Sanity.Module) {
	const allProjects: Sanity.Project[] =
		projects ||
		(await fetchSanityLive<Sanity.Project[]>({
			query: groq`*[_type == 'project']|order(name)`,
		}))

	return (
		<section>
			<div className="mx-auto max-w-7xl border-x border-b p-8 pt-[calc(32px+var(--header-height))] lg:py-16 lg:pt-[calc(64px+var(--header-height))]">
				<div className="max-w-2xl">
					<span className="font-light text-neutral-400">{pretitle}</span>
					<div className="text-foreground richtext mt-6">
						<PortableText value={content} />
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl border-x">
				<ul role="list" className="grid grid-cols-1 md:grid-cols-2">
					{allProjects.map((project: Sanity.Project, index: number) => (
						<li key={index} className="border-b odd:border-e">
							<Img
								className={
									'aspect-video w-full border-b object-cover object-center'
								}
								image={project.projectImage}
								width={300}
							/>
							<div className="p-6">
								<h2 className="text-foreground text-h5">{project.title}</h2>
								<p className="text-foreground text-body">
									{project.description}
								</p>
								<Link
									href={'/projects/' + project.metadata.slug.current}
									className="text-body-l text-foreground/50 h-full"
								>
									Read more
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 32 32"
										className="ms-2 inline-block size-6"
									>
										<g clip-path="url(#a)">
											<path
												fill="currentColor"
												d="M16 0C11.58 0 7.58 1.79 4.69 4.69 1.79 7.59 0 11.59 0 16s1.79 8.42 4.69 11.31C7.58 30.21 11.58 32 16 32c4.42 0 8.41-1.79 11.31-4.69C30.21 24.42 32 20.42 32 16c0-8.83-7.17-16-16-16Zm1.5 24-1.08-1.14 5.69-6.06H7v-1.6h15.11l-5.69-6.08L17.5 8l7.5 8-7.5 8Z"
											/>
										</g>
										<defs>
											<clipPath id="a">
												<path fill="#fff" d="M0 0h32v32H0z" />
											</clipPath>
										</defs>
									</svg>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
