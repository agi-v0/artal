import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import { alignmentFieldset } from '../fragments/fields/alignment'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'service.list',
	title: 'Service List',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [
		{ name: 'content', default: true },
		{ name: 'options' },
	],
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
			name: 'services',
			title: 'Services',
			type: 'array',
			of: [
				{
					name: 'service',
					title: 'Service',
					type: 'reference',
					to: [{ type: 'service' }],
				},
			],
			group: 'content',
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'bgImage.asset',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Services',
			media,
		}),
	},
})
