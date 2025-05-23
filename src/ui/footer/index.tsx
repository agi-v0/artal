import { getSite } from '@/sanity/lib/queries'
import Link from 'next/link'
import Img from '@/ui/Img'
import CTAList from '../CTAList'

export default async function Footer({ locale }: { locale: string }) {
	const { title, tagline, logo, copyright, ctas } = await getSite(locale)

	const logoImage = logo?.image?.light || logo?.image?.default

	return (
		<section className="">
			<div className="bg-grid-neutral-800 bg-foreground section border-x border-neutral-800 lg:border-y-0">
				<div>
					<Link className="h3 md:h2 max-w-max text-white" href="/">
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
						<p className="text-background text-h4 max-w-2xl">
							If you have a project idea in mind, let's join forces and
							collaborate.
						</p>
						<div className="mt-6">
							{/* <a
								href="/contact"
								title="your title"
								aria-label="your label"
								className="text-foreground bg-background hover:bg-background/90 inline-flex items-center rounded-full border border-transparent px-6 py-2 text-sm ring-1 ring-transparent duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
							>
								CONTACT US
							</a> */}

							<CTAList className="" ctas={ctas} />
						</div>
					</div>
					{/* <div>
						<div className="mt-4 grid gap-2 md:grid-cols-2">
							<ul role="list">
								<li>
									<a
										href="/system/overview"
										title="your title"
										aria-label="your label"
										className="hover:text-accent text-sm font-normal text-foreground/50"
									>
										Overview
									</a>
								</li>
								<li>
									<a
										href="/system/style-guide"
										title="your title"
										aria-label="your label"
										className="hover:text-accent text-sm font-normal text-foreground/50"
									>
										Style Guide
									</a>
								</li>
								<li>
									<a
										href="https://lexingtonthemes.com/"
										title="your title"
										aria-label="your label"
										className="hover:text-accent text-sm font-normal text-foreground/50"
									>
										More themes
									</a>
								</li>
								<li>
									<a
										href="https://www.lexingtonthemes.com/legal/license"
										title="your title"
										aria-label="your label"
										className="hover:text-accent text-sm font-normal text-foreground/50"
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
										className="hover:text-accent text-sm font-normal text-foreground/50"
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href="https://x.com/lexingtonthemes"
										title="your title"
										aria-label="your label"
										className="hover:text-accent text-sm font-normal text-foreground/50"
									>
										@lexingtonthemes
									</a>
								</li>
								<li>
									<a
										href="https://x.com/Mike_Andreuzza"
										title="your title"
										aria-label="your label"
										className="hover:text-accent text-sm font-normal text-foreground/50"
									>
										@Mike_Andreuzza
									</a>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	)
}
