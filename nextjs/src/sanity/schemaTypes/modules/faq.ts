import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'faq',
	title: 'FAQ',
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
			name: 'faqs',
			type: 'array',
			group: 'content',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'question',
							type: 'string',
							title: 'Question',
						},
						{
							name: 'answer',
							type: 'array',
							title: 'Answer',
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
			subtitle: 'FAQ',
		}),
	},
})
