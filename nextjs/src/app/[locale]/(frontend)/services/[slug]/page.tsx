import { client } from '@/sanity/lib/client'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import processMetadata from '@/lib/processMetadata'
import Service from '@/ui/service'

export default async function Page({ params }: Props) {
	const service = await getService(await params)

	if (!service) notFound()

	return <Service service={service}/>
}

export async function generateMetadata({ params }: Props) {
	const service = await getService(await params)

	if (!service) notFound()

	return processMetadata(service)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[_type == 'service' && defined(metadata.slug.current)].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug }))
}

async function getService(params: { slug?: string }) {
	return await fetchSanityLive<Sanity.Service>({
		query: groq`*[_type == 'service' && metadata.slug.current == $slug][0]{
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
			content,
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
