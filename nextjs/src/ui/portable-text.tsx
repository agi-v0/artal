import {
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from '@portabletext/react'
import { motion } from 'motion/react'
const FADE_DOWN_ANIMATION_VARIANTS = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { type: 'spring' } },
}

export const components: PortableTextComponents = {
	types: {
		block: ({ value }: PortableTextTypeComponentProps<any>) => {
			if (value.style === 'h1') {
				return (
					<motion.h1
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="text-foreground mb-6 max-w-3xl text-(length:--text-h1) font-semibold text-balance ltr:leading-tight rtl:leading-snug"
					>
						{value.children.map((child: any) => child.text).join('')}
					</motion.h1>
				)
			}
			if (value.style === 'h2') {
				return (
					<motion.h2
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="text-h2 text-foreground leading-tight font-semibold"
					>
						{value.children.map((child: any) => child.text).join('')}
					</motion.h2>
				)
			} else
				return (
					<motion.p
						variants={FADE_DOWN_ANIMATION_VARIANTS}
						className="text-(length:--text-body-l) text-neutral-500 rtl:leading-snug"
					>
						{value.children.map((child: any) => child.text).join('')}
					</motion.p>
				)
		},
	},
}
