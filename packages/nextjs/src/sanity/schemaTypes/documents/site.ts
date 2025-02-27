import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site settings',
	type: 'document',
	groups: [
		{ name: 'branding', default: true },
		{ name: 'info' },
		{ name: 'navigation' },
	],
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			hidden: true,
		}),
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'branding',
		}),
		defineField({
			name: 'tagline',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'branding',
		}),
		defineField({
			name: 'logo',
			type: 'logo',
			group: 'branding',
		}),
		defineField({
			name: 'announcements',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'announcement' }] }],
			group: 'info',
		}),
		defineField({
			name: 'copyright',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
				},
			],
			group: 'info',
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-action (global)',
			description: 'Typically used in the header and/or footer.',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'navigation',
		}),
		defineField({
			name: 'headerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'footerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
		defineField({
			name: 'social',
			type: 'reference',
			to: [{ type: 'navigation' }],
			group: 'navigation',
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Site settings',
		}),
	},
})
