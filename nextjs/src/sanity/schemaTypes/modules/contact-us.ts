import { defineField, defineType } from 'sanity'
import { reputationBlock } from '../documents/reputation'
import { getBlockText } from '@/sanity/lib/utils'
import { GrContact } from 'react-icons/gr'

export default defineType({
	name: 'contact-us',
	title: 'Contact Us',
	icon: GrContact,
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
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Contact US',
		}),
	},
})
