import {
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from '@portabletext/react'
import * as m from 'motion/react-m'
const FADE_DOWN_ANIMATION_VARIANTS = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { type: 'spring' } },
}

export const components: PortableTextComponents = {
	types: {
		block: ({ value }: PortableTextTypeComponentProps<any>) => {
			if (value.style === 'h1') {
				return (
					<m.h1
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="text-foreground mb-6 max-w-3xl text-(length:--text-h1) font-semibold text-balance ltr:leading-tight rtl:leading-snug"
					>
						{value.children.map((child: any) => child.text).join('')}
					</m.h1>
				)
			}
			if (value.style === 'h2') {
				return (
					<m.h2
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="text-h2 text-foreground leading-tight font-semibold"
					>
						{value.children.map((child: any) => child.text).join('')}
					</m.h2>
				)
			} else
				return (
					<m.p
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="text-(length:--text-body-l) text-neutral-500 rtl:leading-snug"
					>
						{value.children.map((child: any) => child.text).join('')}
					</m.p>
				)
		},
	},
}
