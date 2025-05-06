import { client } from '@/sanity/lib/client'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import Project from '@/ui/project'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const project = await getProject(await params)

	if (!project) notFound()

	return <Project project={project}/>
}

export async function generateMetadata({ params }: Props) {
	const project = await getProject(await params)

	if (!project) notFound()

	return processMetadata(project)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[_type == 'project' && defined(metadata.slug.current)].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug }))
}

async function getProject(params: { slug?: string }) {
	return await fetchSanityLive<Sanity.Project>({
		query: groq`*[_type == 'project' && metadata.slug.current == $slug][0]{
			...,
			body[]{
				...,
				_type == 'image' => { asset-> }
			},
			'readTime': length(string::split(pt::text(body), ' ')) / 200,
			'headings': body[style in ['h2', 'h3']]{
				style,
				'text': pt::text(@)
			},
			title,
			client,
			services,
			year,
			otherProjects[]->,
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
		params,
	})
}

type Props = {
	params: Promise<{ slug?: string }>
}
