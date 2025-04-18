'use client'

import pkg from '$/package.json'
import { Box, Card, Code, Flex, Heading, Label, Stack, Text } from '@sanity/ui'
import { FaGithub, FaBluesky, FaXTwitter } from 'react-icons/fa6'
import { SiSanity } from 'react-icons/si'
import type { DashboardWidget, LayoutConfig } from '@sanity/dashboard'

export function infoWidget(
	config: { layout?: LayoutConfig } = {},
): DashboardWidget {
	return {
		name: 'Guide',
		component: Widget,
		layout: config.layout ?? { width: 'medium' },
	}
}

function Widget() {
	return (
		<Card paddingY={4}>
			<Stack space={4}>
				<Box paddingX={3} as="header">
					<Heading size={1} as="h2">
						<Flex align="flex-end" justify="space-between" wrap="wrap" gap={4}>
							<Flex align="center" gap={2}>
								🖤 SanityPress
								<Code size={1}>v{pkg.version}</Code>
							</Flex>

							<Flex align="center" gap={4}>
								{social.map((item, key) => (
									<a
										style={{ color: 'inherit' }}
										href={item.url}
										target="_blank"
										key={key}
									>
										<item.icon />
									</a>
								))}
							</Flex>
						</Flex>
					</Heading>
				</Box>

				{linkGroups.map((group, i) => (
					<Stack space={3} key={i}>
						<Card borderBottom padding={3}>
							<Label size={0} muted>
								{group.title}
							</Label>
						</Card>

						{group.links.map((link, key) => (
							<Stack space={4} paddingX={3} key={key}>
								<Text size={1}>
									<a href={link.url} target="_blank">
										{link.label}
									</a>
								</Text>
							</Stack>
						))}
					</Stack>
				))}
			</Stack>
		</Card>
	)
}

const social: Array<{
	icon: React.ElementType
	url: string
	label: string
}> = [
	{
		icon: SiSanity,
		url: 'https://sanity.io/templates/sanitypress',
		label: 'Sanity.io',
	},
	{
		icon: FaGithub,
		url: 'https://github.com/nuotsu/sanitypress',
		label: 'GitHub',
	},
	{
		icon: FaBluesky,
		url: 'https://bsky.app/profile/sanitypress.dev',
		label: 'Bluesky',
	},
	{
		icon: FaXTwitter,
		url: 'https://x.com/sanitypress',
		label: 'X',
	},
]

const linkGroups: Array<{
	title: string
	links: { label: string; url: string }[]
}> = [
	{
		title: 'Resources',
		links: [
			{ label: 'Documentation', url: 'https://sanitypress.dev/docs' },
			{
				label: 'The Styled Heart — SanityPress Blog',
				url: 'https://sanitypress.dev/blog',
			},
		],
	},
	{
		title: 'Guides',
		links: [
			{
				label: 'File Structure',
				url: 'https://sanitypress.dev/docs/how-sanitypress-works',
			},
			{
				label: 'Built-in Modules',
				url: 'https://sanitypress.dev/docs/modules',
			},
			{
				label: 'Customization Guides',
				url: 'https://sanitypress.dev/blog/the-developers-guide-to-customizing-sanitypress',
			},
			{
				label: 'Scheduling Content',
				url: 'https://sanitypress.dev/blog/introducing-the-schedule-module',
			},
			{
				label: 'Adding New Modules',
				url: 'https://sanitypress.dev/blog/adding-new-modules',
			},
			{
				label: 'A Guide for Nested Routes',
				url: 'https://sanitypress.dev/blog/a-guide-for-nested-routes',
			},
		],
	},
	{
		title: 'GitHub',
		links: [
			{
				label: 'Changelog',
				url: 'https://github.com/nuotsu/sanitypress/releases',
			},
			{
				label: 'Discussions',
				url: 'https://github.com/nuotsu/sanitypress/discussions',
			},
			{
				label: 'Report an issue',
				url: 'https://github.com/nuotsu/sanitypress/issues',
			},
		],
	},
]
