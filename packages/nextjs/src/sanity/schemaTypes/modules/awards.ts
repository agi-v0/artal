import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'awards',
	title: 'Awards',
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
			name: 'awardsList',
			title: 'Awards List',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'year',
							title: 'Year',
							type: 'string',
						},
						{
							name: 'award',
							title: 'Award',
							type: 'string',
						},
						{
							name: 'contest',
							title: 'Contest',
							type: 'string',
						},
						{
							name: 'project',
							title: 'Project',
							type: 'string',
						},
					],
					preview: {
						select: {
							year: 'year',
							award: 'award',
							contest: 'contest',
						},
						prepare: ({ year, award, contest }) => ({
							title: `${year}: ${award}`,
							subtitle: contest,
						}),
					},
				},
			],
			group: 'content',
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Awards',
		}),
	},
})
