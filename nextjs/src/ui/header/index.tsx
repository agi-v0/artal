import { getSite } from '@/sanity/lib/queries'
import Wrapper from './Wrapper'
import Img from '../Img'
import CTAList from '../CTAList'
import Menu from './Navigation'

export default async function Header() {
	const { title, logo, ctas } = await getSite()

	return (
		<Wrapper className="frosted-glass max-md:header-open:shadow-lg fixed top-0 z-10 w-full border-b border-neutral-400">
			<div className="mx-auto w-full">
				<div
					className="mx-auto flex w-full max-w-7xl flex-col border-x border-t-0 border-neutral-400 p-8 lg:flex-row lg:items-center lg:justify-between"
					x-data="{ open: false }"
				>
					<div className="text-foreground flex flex-row items-center justify-between">
						<a
							href="/"
							title="your title"
							aria-label="your label"
							className="font-display inline-flex items-center uppercase"
						>
							<span>
								{logo && (
									<Img image={logo.image?.default} className="h-8 w-auto" />
								)}
							</span>
						</a>
						<button className="focus:shadow-outline rounded-lg focus:outline-none lg:hidden">
							<svg
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									className="{'hidden': open, 'inline-flex': !open }"
									d="M4 6h16M4 12h16M4 18h16"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								></path>
								<path
									className="{'hidden': !open, 'inline-flex': open }"
									d="M6 18L18 6M6 6l12 12"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								></path>
							</svg>
						</button>
					</div>
					<nav className="text-foreground hidden flex-grow flex-col items-center gap-4 p-4 px-5 text-sm opacity-100 md:pb-0 lg:mt-0 lg:flex lg:flex-row lg:justify-end lg:gap-6 lg:p-0 lg:px-0">
						<Menu />
						<CTAList ctas={ctas} />
					</nav>
				</div>
			</div>
		</Wrapper>
	)
}
