import { getSite } from '@/sanity/lib/queries'
import { getLocale } from 'next-intl/server'
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

const domain = process.env.NEXT_PUBLIC_BASE_URL?.replace(/https?:\/\//, '')

const color = '#1d1d1f'

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const locale = await getLocale()
	const site = await getSite(locale)

	// remove divider and site.title in metadata.title
	const regex = new RegExp(` [-—|] ${site.title}$`)
	const title = searchParams.get('title')?.replace(regex, '')

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					height: '100%',
					padding: '4rem',
					backgroundColor: '#fff',
					color: '#1d1d1f',
				}}
			>
				<div
					style={{
						display: 'block',
						marginTop: 'auto',
						marginBottom: 'auto',
						fontSize: '5rem',
						lineHeight: 1.15,
						lineClamp: 4,
					}}
				>
					{title || site.title}
				</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						textAlign: 'center',
						fontSize: '2rem',
					}}
				>
					<img
						style={{
							width: '2rem',
							height: '2rem',
							marginRight: '0.5rem',
						}}
						src={`https://icons.artalgroup.dev/vsc/VscHeartFilled?hex=${color.slice(1)}`}
					/>

					<span
						style={{
							lineHeight: 1.4,
							backgroundImage: `linear-gradient(to bottom right, ${color}, ${color}55)`,
							backgroundClip: 'text',
							color: 'transparent',
						}}
					>
						{domain || site.title}
					</span>
				</div>
			</div>
		),
		{
			fonts: [
				{
					name: 'serif',
					data: await loadGoogleFont('Geist'),
				},
			],
		},
	)
}

async function loadGoogleFont(fontFamily: string) {
	const url = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@600`
	const css = await (await fetch(url)).text()
	const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

	if (resource) {
		const response = await fetch(resource[1])
		if (response.status == 200) {
			return await response.arrayBuffer()
		}
	}

	throw new Error('failed to load font data')
}
