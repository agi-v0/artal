import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscEdit } from 'react-icons/vsc'
import imageBlock from '../fragments/image-block'

export default defineType({
	name: 'project',
	title: 'Projects',
	icon: VscEdit,
	type: 'document',
	groups: [
		{ name: 'content', default: true },
		{ name: 'options' },
		{ name: 'seo', title: 'SEO' },
	],
	fields: [
		defineField({
			name:'client',
			type:'string',
			title:'Client name',
			group:'content'
		}),
		defineField({
			name:'services',
			type:'string',
			title:'Services',
			group:'content'
		}),
		defineField({
			name:'year',
			type:'date',
			title:'Year',
			group:'content'
		}),
		defineField({
			name: 'projectImage',
			type: 'image',
			group:'content'
		}),
		defineField({
			name: 'body',
			type: 'array',
			of: [
				{ type: 'block' },
				imageBlock,
				defineArrayMember({
					title: 'Code block',
					type: 'code',
					options: {
						withFilename: true,
					},
				}),
				{ type: 'custom-html' },
			],
			group: 'content',
		}),
		defineField({
			name: 'publishDate',
			type: 'date',
			validation: (Rule) => Rule.required(),
			group: 'content',
		}),
		defineField({
			name: 'featured',
			type: 'boolean',
			group: 'options',
			initialValue: false,
		}),
		defineField({
			name: 'hideTableOfContents',
			type: 'boolean',
			group: 'options',
			initialValue: false,
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'seo',
		}),
	],
	preview: {
		select: {
			featured: 'featured',
			title: 'metadata.title',
			publishDate: 'publishDate',
			media: 'metadata.image',
		},
		prepare: ({ title, publishDate, media, featured }) => ({
			title: [featured && '★', title].filter(Boolean).join(' '),
			subtitle: publishDate,
			media,
		}),
	},
	orderings: [
		{
			title: 'Date',
			name: 'date',
			by: [{ field: 'publishDate', direction: 'desc' }],
		},
		{
			title: 'Title',
			name: 'metadata.title',
			by: [{ field: 'title', direction: 'asc' }],
		},
	],
})
