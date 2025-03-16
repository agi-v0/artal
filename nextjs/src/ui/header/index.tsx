import { getSite } from '@/sanity/lib/queries'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Img from '@/ui/Img'
import Navigation from './Navigation'
import CTAList from '@/ui/CTAList'
import Toggle from './Toggle'
import { cn } from '@/lib/utils'
import css from './Header.module.css'

export default async function Header({ locale }: { locale: string }) {
	const { title, logo, ctas, headerMenu } = await getSite(locale)

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Wrapper className="frosted-glass bg-background fixed top-0 z-10 w-full border-b border-neutral-400">
			<div
				className={cn(
					css.header,
					'mx-auto grid max-w-7xl items-center gap-x-4 border-x border-neutral-400 p-4',
				)}
			>
				<div className="[grid-area:logo]">
					<Link
						className={cn('h4 md:h3 inline-block', logo?.image && 'max-w-3xs')}
						href="/"
					>
						{logoImage ? (
							<Img
								className="inline-block max-h-[1.2em] w-auto"
								image={logoImage}
								alt={logo?.name || title}
							/>
						) : (
							<span className="text-gradient">{title}</span>
						)}
					</Link>
				</div>

				<Navigation locale={locale} />

				<CTAList
					ctas={ctas}
					className="max-md:header-closed:hidden [grid-area:ctas] max-md:*:w-full md:ms-auto"
				/>

				<Toggle />
			</div>
		</Wrapper>
	)
}
