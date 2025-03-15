import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'
import { AnimatedNumber } from '@/components/ui/animated-number'

export default function StatList({
	pretitle,
	intro,
	stats,
	textAlign = 'center',
}: Partial<{
	pretitle: string
	intro: any
	stats: Partial<{
		prefix: string
		value: string
		suffix: string
		text: string
	}>[]
	textAlign: React.CSSProperties['textAlign']
}>) {
	return (
		<section className="bg-background-highlight dark section p-xl">
			{(pretitle || intro) && (
				<header className="richtext text-center">
					<Pretitle>{pretitle}</Pretitle>
					<PortableText value={intro} />
				</header>
			)}
			<dl className="gap-md mx-auto grid grid-cols-2 items-start justify-center md:grid-cols-4">
				{stats?.map(({ prefix, value, suffix, text }, key) => (
					<div className="w-full space-y-2 font-semibold" key={key}>
						<div className="space-x-1">
							{prefix && (
								<span className="text-foreground/30 text-sm">{prefix}</span>
							)}
							<span className="text-foreground text-h2">
								<AnimatedNumber
									value={Number(value)}
									springOptions={{ bounce: 0, duration: 2000 }}
								/>
							</span>
							{suffix && (
								<span className="text-foreground/30 text-sm">{suffix}</span>
							)}
						</div>

						{text && (
							<span className="text-body font-normal text-balance text-neutral-400">
								{text}
							</span>
						)}
					</div>
				))}
			</dl>
		</section>
	)
}
