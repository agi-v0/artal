import resolveUrl from './resolveUrl'
import { BASE_URL, vercelPreview } from './env'
import type { Metadata } from 'next'

export default async function processMetadata(
	page: Sanity.Page | Sanity.BlogPost | Sanity.Project | Sanity.Service,
): Promise<Metadata> {
	const url = resolveUrl(page)
	const { title, description, ogimage: uploadedOg, noIndex } = page.metadata

	const autogeneratedOg = `${BASE_URL}/api/og?title=${encodeURIComponent(title)}`

	return {
		metadataBase: new URL(BASE_URL),
		title,
		description,
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			images: uploadedOg || autogeneratedOg,
		},
		robots: {
			index: noIndex || vercelPreview ? false : undefined,
		},
		alternates: {
			canonical: url,
			types: {
				'application/rss+xml': '/blog/rss.xml',
			},
		},
	}
}
