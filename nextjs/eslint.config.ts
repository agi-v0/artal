const eslintConfig = {
	extends: [
		'next/core-web-vitals',
		'next/typescript',
		'plugin:prettier/recommended',
		'@sanity/eslint-config-studio',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
}

export default eslintConfig
