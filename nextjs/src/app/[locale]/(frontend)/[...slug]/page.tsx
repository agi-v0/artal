import { client } from '@/sanity/lib/client'
import { fetchSanityLive } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import { MODULES_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const page = await getPage(await params)
	if (!page) notFound()
	return <Modules modules={page?.modules} page={page} />
}

export async function generateMetadata({ params }: Props) {
	const page = await getPage(await params)
	if (!page) notFound()
	return processMetadata(page)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[
			_type == 'page' &&
			defined(metadata.slug.current)  &&
			!(metadata.slug.current in ['index', 'blog/*']) 
		].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug: slug.split('/') }))
}

async function getPage({ locale, slug }: { locale: string; slug?: string[] }) {
	return await fetchSanityLive<Sanity.Page>({
		query: groq`*[
			_type == 'page' &&
			metadata.slug.current == $slug &&
			!(metadata.slug.current in ['index', 'blog/*'] && language == $locale)
		][0]{
			...,
			modules[]{ ${MODULES_QUERY} },
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
		params: { slug: slug?.join('/'), locale: locale },
	})
}

type Props = {
	params: Promise<{
		locale: string
		slug?: string[]
	}>
}
