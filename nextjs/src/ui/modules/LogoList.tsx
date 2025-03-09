import { fetchSanityLive } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import { PortableText } from 'next-sanity'
import Pretitle from '@/ui/Pretitle'
import Img from '@/ui/Img'
import { cn } from '@/lib/utils'
import css from './LogoList.module.css'
import { AnimatedGroup } from '@/components/ui/animated-group'

export default async function LogoList({
	pretitle,
	intro,
	logos,
	logoType = 'default',
	autoScroll,
	duration = 12,
}: Partial<{
	pretitle: string
	intro: any
	logos: Sanity.Logo[]
	logoType: 'default' | 'light' | 'dark'
	autoScroll?: boolean
	duration?: number
}>) {
	const allLogos =
		logos ||
		(await fetchSanityLive<Sanity.Logo[]>({
			query: groq`*[_type == 'logo']|order(name)`,
		}))

	return (
		<section className="">
			<div className="section relative mx-auto max-w-7xl space-y-8 border-x border-b border-neutral-400 py-8 lg:py-16">
				{(pretitle || intro) && (
					<header className="richtext mx-auto max-w-screen-sm text-center text-balance">
						<Pretitle>{pretitle}</Pretitle>
						<PortableText value={intro} />
					</header>
				)}
				{/* <AnimatedGroup
					className="grid grid-cols-2 divide-x divide-neutral-400 *:p-8 md:grid-cols-3 lg:grid-cols-4"
					preset="scale"
				>
					{allLogos.map((logo, key) => (
						<Img
							className="h-[2.5em] w-[200px] shrink-0 object-contain max-sm:w-[150px]"
							style={{ '--index': key } as React.CSSProperties}
							image={logo.image?.[logoType] || logo.image?.default}
							width={400}
							alt={logo.name}
							key={key}
						/>
					))}
				</AnimatedGroup> */}
				<div className="absolute bottom-8 grid grid-cols-2 divide-x divide-neutral-400 *:p-8 md:grid-cols-3 lg:bottom-16 lg:grid-cols-4">
					{allLogos.map((logo, key) => (
						<div
							className="h-[2.5em] w-[200px] shrink-0 object-contain max-sm:w-[150px]"
							style={{ '--index': key } as React.CSSProperties}
							key={key}
						></div>
					))}
				</div>
			</div>
		</section>
	)
}
