import { getSite } from '@/sanity/lib/queries'
import Link from 'next/link'
import Img from '@/ui/Img'

export default async function Footer() {
	const { title, tagline, logo, copyright } = await getSite()

	const logoImage = logo?.image?.light || logo?.image?.default

	return (
		<section>
			<div className="mx-auto max-w-7xl border-x border-t border-b border-[#292929] p-8 lg:border-b-0">
				<div>
					<Link className="h3 md:h2 max-w-max text-canvas" href="/">
						{logoImage ? (
							<Img
								className="max-h-[1.5em] w-auto"
								image={logoImage}
								alt={logo?.name || title}
							/>
						) : (
							title
						)}
					</Link>
				</div>
				<div className="mt-32 grid grid-cols-1 lg:grid-cols-2">
					<div>
						<p className="text-2xl font-light text-white">
							<span className="block">If you have a project idea in mind,</span>
							<span className="block"> let's join forces and collaborate.</span>
						</p>
						<div className="mt-6">
							<a
								href="/contact"
								title="your title"
								aria-label="your label"
								className="inline-flex items-center rounded-full border border-transparent bg-[#292929] px-6 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
							>
								CONTACT US
							</a>
						</div>
					</div>
					<div>
						<div className="mt-4 grid gap-2 md:grid-cols-2">
							<ul role="list">
								<li>
									<a
										href="/system/overview"
										title="your title"
										aria-label="your label"
										className="text-sm font-normal text-neutral-400 hover:text-white"
									>
										Overview
									</a>
								</li>
								<li>
									<a
										href="/system/style-guide"
										title="your title"
										aria-label="your label"
										className="text-sm font-normal text-neutral-400 hover:text-white"
									>
										Style Guide
									</a>
								</li>
								<li>
									<a
										href="https://lexingtonthemes.com/"
										title="your title"
										aria-label="your label"
										className="text-sm font-normal text-neutral-400 hover:text-white"
									>
										More themes
									</a>
								</li>
								<li>
									<a
										href="https://www.lexingtonthemes.com/legal/license"
										title="your title"
										aria-label="your label"
										className="text-sm font-normal text-neutral-400 hover:text-white"
									>
										License
									</a>
								</li>
							</ul>
							<ul role="list">
								<li>
									<a
										href="https://lexingtonthemes.com/documentation/quick-start/"
										title="your title"
										aria-label="your label"
										className="text-sm font-normal text-neutral-400 hover:text-white"
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href="https://x.com/lexingtonthemes"
										title="your title"
										aria-label="your label"
										className="text-sm font-normal text-neutral-400 hover:text-white"
									>
										@lexingtonthemes
									</a>
								</li>
								<li>
									<a
										href="https://x.com/Mike_Andreuzza"
										title="your title"
										aria-label="your label"
										className="text-sm font-normal text-neutral-400 hover:text-white"
									>
										@Mike_Andreuzza
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
