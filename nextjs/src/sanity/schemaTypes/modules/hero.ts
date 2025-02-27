import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import {
	textAlign,
	alignItems,
	alignmentFieldset,
} from '../fragments/fields/alignment'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'hero',
	title: 'Hero',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [
		{ name: 'content', default: true },
		{ name: 'image' },
		{ name: 'options' },
	],
	fieldsets: [alignmentFieldset, { name: 'image', options: { columns: 2 } }],
	fields: [
		defineField({
			name: 'options',
			type: 'module-options',
			group: 'options',
		}),
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
			name: 'testimonials',
			type: 'array',
			group: 'content',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'content',
							type: 'array',
							title: 'Content',
							of: [{ type: 'block' }],
						},
						{
							name: 'name',
							type: 'string',
							title: 'name',
						},
						{
							name: 'description',
							type: 'string',
							title: 'description',
						},
					],
				},
			],
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'bgImage.asset',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero',
			media,
		}),
	},
})
