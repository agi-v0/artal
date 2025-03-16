import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
	// import.meta.dirname is available after Node.js v20.11.0
	baseDirectory: import.meta.dirname,
})

const eslintConfig = [
	...compat.config({
		extends: [
			'@sanity/eslint-config-studio',
			'next/core-web-vitals',
			'next/typescript',
		],
	}),
]

export default eslintConfig
