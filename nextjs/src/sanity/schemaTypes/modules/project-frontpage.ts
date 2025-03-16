import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import { alignmentFieldset } from '../fragments/fields/alignment'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'projects-frontpage',
	title: 'Project frontpage',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [{ name: 'content', default: true }, { name: 'image' }],
	fieldsets: [alignmentFieldset, { name: 'image', options: { columns: 2 } }],
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
			name: 'projects',
			title: 'Projects',
			type: 'array',
			of: [
				{
					name: 'project',
					title: 'Project',
					type: 'reference',
					to: [{ type: 'project' }],
				},
			],
			description: 'Leave empty to display all projects',
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
			subtitle: 'All Projects',
			media,
		}),
	},
})
