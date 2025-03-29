import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from '@/sanity/lib/env'
import { dev } from '@/lib/env'

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: !dev,
	stega: {
		// Assuming stega is not needed for this client instance by default.
		// Set enabled: true or configure based on environment (e.g., VERCEL_ENV) if visual editing is required.
		enabled: false,
		// studioUrl: '/admin', // Keep this if stega is enabled and needed
	},
})
