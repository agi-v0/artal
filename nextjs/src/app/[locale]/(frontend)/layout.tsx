// import { GoogleTagManager } from '@next/third-parties/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import SkipToContent from '@/ui/SkipToContent'
import Announcement from '@/ui/Announcement'
import Header from '@/ui/header'
import Footer from '@/ui/footer'
import VisualEditingControls from '@/ui/VisualEditingControls'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/app.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'

const font = IBM_Plex_Sans_Arabic({
	subsets: ['latin', 'arabic'],
	display: 'swap',
	weight: ['400', '500', '600'],
})

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: any
}) {
	const { locale } = await params
	if (!routing.locales.includes(locale as any)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} className={font.className}>
			{/* <GoogleTagManager gtmId="" /> */}

			<body className="text-foreground bg-background relative w-full">
				<NuqsAdapter>
					<SkipToContent />
					<Announcement />
					<Header />
					<main id="main-content" role="main" tabIndex={-1}>
						<NextIntlClientProvider messages={messages}>
							{children}
						</NextIntlClientProvider>
					</main>
					<Footer />

					<VisualEditingControls />
				</NuqsAdapter>

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
