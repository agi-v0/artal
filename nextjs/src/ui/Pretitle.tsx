import { cn } from '@/lib/utils'
import { stegaClean } from 'next-sanity'

export default function Pretitle({
	className,
	children,
}: React.ComponentProps<'p'>) {
	if (!children) return null

	return (
		<p
			className={cn(
				'technical w-fit max-w-fit rounded-full border px-3 text-neutral-400',
				className,
			)}
		>
			{stegaClean(children)}
		</p>
	)
}
