import { client } from '@/sanity/lib/client'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import { MODULES_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const page = await getPageTemplate()
	const project = await getProject(await params)

	if (!page)
		throw Error('No `project` document with slug "projects/*" found in the Studio')

	if (!project) notFound()

	return <Modules modules={page?.modules} page={page} project={project} />
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
			categories[]->,
			authors[]->,
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
		params,
	})
}

async function getPageTemplate() {
	return await fetchSanityLive<Sanity.Page>({
		query: groq`*[_type == 'project'  ][0]{
			...,
			modules[]{ ${MODULES_QUERY} },
			metadata { slug }
		}`,
	})
}

type Props = {
	params: Promise<{ slug?: string }>
}
