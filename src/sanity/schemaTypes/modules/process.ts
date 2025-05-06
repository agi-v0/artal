import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'process',
	title: 'Process',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [{ name: 'content', default: true }],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }, { type: 'custom-html' }, reputationBlock],
			group: 'content',
		}),
		defineField({
			name: 'steps',
			type: 'array',
			group: 'content',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'title',
							type: 'string',
							title: 'Step Title',
						},
						{
							name: 'content',
							type: 'array',
							title: 'Step Content',
							of: [{ type: 'block' }], 
						},
					],
				},
			],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Process',
		}),
	},
})
