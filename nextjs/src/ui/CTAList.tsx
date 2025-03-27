import CTA from './CTA'
import { cn } from '@/lib/utils'

export default function CTAList({
	ctas,
	className,
}: {
	ctas?: Sanity.CTA[]
} & React.ComponentProps<'div'>) {
	if (!ctas?.length) return null

	return (
		<div className={cn('flex flex-wrap items-center gap-[.5em]', className)}>
			{ctas?.map((cta, key) => (
				<CTA
					className="inline-flex items-center rounded-full border border-transparent bg-red-800 px-6 py-2 text-sm font-medium text-white ring-1 ring-transparent duration-200 hover:bg-red-800/90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
					{...cta}
					key={key}
				/>
			))}
		</div>
	)
}
