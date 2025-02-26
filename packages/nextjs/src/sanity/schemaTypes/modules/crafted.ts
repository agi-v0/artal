import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'
import { reputationBlock } from '../documents/reputation'
import { getBlockText } from '@/sanity/lib/utils'

export default defineType({
	name: 'crafted',
	title: 'Crafted',
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
      name: 'carousel',
      title: 'Carousel Images',
      type: 'array',
      group: 'content',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
            description: 'Important for SEO and accessibility'
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            description: 'Optional caption for the image'
          }
        ]
      }]
    })
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Crafted',
		}),
	},
})
