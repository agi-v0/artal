import { structureTool } from 'sanity/structure'
import { group, singleton } from './lib/utils'
import { VscMultipleWindows, VscServerProcess } from 'react-icons/vsc'
import { BsDatabaseAdd } from 'react-icons/bs'

export const structure = structureTool({
	name: 'content',
	title: 'Content',
	structure: (S) =>
		S.list()
			.title('Content')
			.items([
				singleton(S, 'site', 'Site settings').icon(VscServerProcess),
				S.divider(),

				S.documentTypeListItem('page').title('Pages').icon(VscMultipleWindows),
				S.documentTypeListItem('project').title('Projects'),
				S.documentTypeListItem('service').title('Services'),
				S.documentTypeListItem('blog.post').title('Blog posts'),
				S.documentTypeListItem('blog.category').title('Blog categories'),

				S.divider(),

				S.documentTypeListItem('navigation'),
				S.documentTypeListItem('contactMessage').title('Contact Us Message'),
				S.documentTypeListItem('redirect').title('Redirects'),

				group(S, 'Miscellaneous', [
					S.documentTypeListItem('announcement').title('Announcements'),
					S.documentTypeListItem('logo').title('Logos'),
					S.documentTypeListItem('person').title('People'),
					S.documentTypeListItem('pricing').title('Pricing tiers'),
					S.documentTypeListItem('reputation'),
					S.documentTypeListItem('testimonial').title('Testimonials'),
				]).icon(BsDatabaseAdd),
			]),
})

export function icon() {
	return (
		<img
			style={{ width: '100%', aspectRatio: 1 }}
			src="/favicon.ico"
			alt="Artal Group"
		/>
	)
}
