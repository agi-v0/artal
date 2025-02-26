import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'why',
	title: 'Why',
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
			name: 'tips',
			type: 'array',
			group: 'content',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'title',
							type: 'string',
							title: 'Title',
						},
						{
							name: 'description',
							type: 'array',
							title: 'Description',
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
			subtitle: 'Why',
		}),
	},
})
