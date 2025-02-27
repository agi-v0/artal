import { defineCliConfig } from 'sanity/cli'
import { projectId, dataset } from '@/sanity/lib/env'
import path from 'path'

console.log(path.resolve(__dirname, 'src'))

export default defineCliConfig({
	api: {
		projectId,
		dataset,
	},
	studioHost: 'artal',
	vite: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
	},
})
