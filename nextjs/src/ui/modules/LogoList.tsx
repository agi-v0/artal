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
			<div className="section mx-auto max-w-7xl space-y-8 border-x border-b border-neutral-400 px-0 pt-8 pb-0 lg:pt-16">
				{(pretitle || intro) && (
					<header className="richtext mx-auto max-w-screen-sm text-center text-balance">
						<Pretitle>{pretitle}</Pretitle>
						<PortableText value={intro} />
					</header>
				)}
				<div className="relative">
					<AnimatedGroup
						className="grid grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-4"
						preset="scale"
					>
						{allLogos.map((logo, key) => (
							<div className="group flex h-[104px] w-full shrink-0 items-center justify-center bg-[size:10px_10px] object-contain hover:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] max-sm:w-[150px]">
								<Img
									className="mx-auto h-[2.5em] w-[200px] shrink-0 object-contain grayscale group-hover:grayscale-0 max-sm:w-[150px]"
									style={{ '--index': key } as React.CSSProperties}
									image={logo.image?.[logoType] || logo.image?.default}
									width={400}
									alt={logo.name}
									key={key}
								/>
							</div>
						))}
					</AnimatedGroup>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute bottom-0 grid w-full grid-cols-2 divide-x divide-neutral-400 border-t border-neutral-400 md:grid-cols-3 lg:grid-cols-4"
					>
						{allLogos.map((logo, key) => (
							<div
								className="h-[104px] w-full shrink-0 object-contain max-sm:w-[150px]"
								style={{ '--index': key } as React.CSSProperties}
								key={key}
							></div>
						))}
						<div
							className="h-[104px] w-full shrink-0 object-contain max-sm:w-[150px]"
							style={{ '--index': allLogos.length + 1 } as React.CSSProperties}
							// key={key}
						></div>
					</div>
				</div>
			</div>
		</section>
	)
}
