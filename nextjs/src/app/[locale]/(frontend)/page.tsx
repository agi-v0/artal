import { fetchSanityLive } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import { MODULES_QUERY } from '@/sanity/lib/queries'
import Modules from '@/ui/modules'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const { locale } = await params
	const page = await getPage(locale)
	return <Modules modules={page?.modules} />
}

export async function generateMetadata({ params }: Props) {
	const { locale } = await params
	const page = await getPage(locale)
	return processMetadata(page)
}

async function getPage(locale: string) {
	const data = await fetchSanityLive<Sanity.Page>({
		query: groq`*[_type == 'page' && metadata.slug.current == 'index' && language == $locale ][0]{
			...,
			modules[]{ ${MODULES_QUERY} },
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200',
			}
		}`,
		params: {
			locale: locale,
		},
	})

	if (!data)
		throw Error('No `page` document with slug "index" found in the Studio')

	return data
}

type Props = {
	params: Promise<{
		locale: string
		slug?: string[]
	}>
}
