import moduleProps from '@/lib/moduleProps'
import Img, { Source } from '@/ui/Img'
import { PortableText, stegaClean } from 'next-sanity'
import CTAList from '@/ui/CTAList'
import Pretitle from '@/ui/Pretitle'
import CustomHTML from './CustomHTML'
import Reputation from '@/ui/Reputation'
import { cn } from '@/lib/utils'

export default function Hero({
	pretitle,
	content,
	ctas,
	bgImage,
	bgImageMobile,
	textAlign = 'center',
	alignItems,
	...props
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	bgImage: Sanity.Image
	bgImageMobile: Sanity.Image
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
}> &
	Sanity.Module) {
	const hasImage = !!bgImage?.asset

	const testimonials = [
		{
			text: 'Albin possesses an exceptional talent for design and collaboration, making him a joy to work with. I eagerly anticipate engaging with him on upcoming ventures. I strongly endorse him for those in search of exceptional and distinctive work.',
			name: 'Alex Reed',
			title: 'Initiator of Code Camp',
		},
		{
			text: 'Working with Albin on several design projects, his speed and efficiency were unparalleled. His design approach is modern and effective, bringing tremendous value through continuous refinement and enhancement of his work.',
			name: 'Lucas Gomez',
			title: 'Architect of Pixel Patterns',
		},
		{
			text: 'Albin stands out as a designer and developer with a keen grasp of business necessities. Drawing on his extensive experience, he swiftly created several high-quality landing pages for our platform, Versoly.',
			name: 'Ethan Clarke',
			title: 'Principal at Digital Frontier',
		},
	]

	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929] p-8 lg:py-32">
					<Pretitle className={'font-light text-neutral-400'}>
						{pretitle}
					</Pretitle>

					<PortableText
						value={content}
						components={{
							types: {
								'custom-html': ({ value }) => (
									<CustomHTML
										{...value}
										className={
											'mt-6 text-2xl font-light text-balance text-white'
										}
									/>
								),
								'reputation-block': ({ value }) => (
									<Reputation
										className={
											'mt-6 text-2xl font-light text-balance text-white'
										}
										reputation={value.reputation}
									/>
								),
							},
						}}
					/>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929]">
					<div className="grid grid-cols-1 divide-[#292929] text-white md:grid-cols-3 lg:divide-x">
						{testimonials.map((testimonial) => (
							<div className="flex h-full flex-col justify-between p-8">
								<p className="text-neutral-400">{testimonial.text}</p>
								<div className="mt-3">
									<span className="mt-3 block font-light">
										{testimonial.name}
									</span>
									<span className="block text-neutral-400">
										{testimonial.title}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
