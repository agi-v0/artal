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
		<section className="">
			<div className="bg-background-highlight dark mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:py-16">
				{(pretitle || intro) && (
					<header className="richtext text-center">
						<Pretitle>{pretitle}</Pretitle>
						<PortableText value={intro} />
					</header>
				)}

				<dl className="mx-auto grid items-start justify-center gap-x-12 gap-y-6 max-md:max-w-max sm:grid-cols-2 md:flex">
					{stats?.map(({ prefix, value, suffix, text }, key) => (
						<div
							className="w-full max-w-[250px] space-y-2 max-md:mx-auto"
							key={key}
						>
							<dt className="font-bold">
								{prefix && (
									<small className="text-foreground/30 text-sm">{prefix}</small>
								)}
								<span className="text-foreground text-6xl">
									<AnimatedNumber
										value={Number(value)}
										springOptions={{ bounce: 0, duration: 2000 }}
									/>
								</span>
								{suffix && (
									<small className="text-foreground/30 text-sm">{suffix}</small>
								)}
							</dt>

							{text && (
								<dd className="text-body font-normal text-balance text-neutral-400">
									{text}
								</dd>
							)}
						</div>
					))}
				</dl>
			</div>
		</section>
	)
}
