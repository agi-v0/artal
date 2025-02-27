import { getSite } from '@/sanity/lib/queries'
import Wrapper from './Wrapper'
import Img from '../Img'

export default async function Header() {
	const { title, logo } = await getSite()

	return (
		<Wrapper className="frosted-glass max-md:header-open:shadow-lg sticky top-0 z-10 border-b border-neutral-400">
			<div className="mx-auto w-full justify-center">
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
						<button
							// @click="open = !open"
							className="focus:shadow-outline rounded-lg focus:outline-none lg:hidden"
						>
							<svg
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									className="{'hidden': open, 'inline-flex': !open }"
									// className="inline-flex"
									d="M4 6h16M4 12h16M4 18h16"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								></path>
								<path
									className="{'hidden': !open, 'inline-flex': open }"
									// className="hidden"
									d="M6 18L18 6M6 6l12 12"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
								></path>
							</svg>
						</button>
					</div>
					<nav
						className="text-foreground hidden flex-grow flex-col items-center gap-4 p-4 px-5 text-sm opacity-100 md:pb-0 lg:mt-0 lg:flex lg:flex-row lg:justify-start lg:gap-8 lg:p-0 lg:px-0"
						// className="{'flex': open, 'hidden': !open}"
					>
						<a
							href="/system/overview"
							title="your title"
							aria-label="your label"
							className="hover:text-zinc-500 lg:ml-auto"
						>
							Overview
						</a>
						<a
							href="/system/style-guide"
							title="your title"
							aria-label="your label"
							className="hover:text-zinc-500"
						>
							Style Guide
						</a>
						<a
							href="https://buy.polar.sh/polar_cl_-FBzY3Ho1rrZJwIiRvMO6xnmRO6LHM8PPwFXitfdNVk"
							title="your title"
							aria-label="your label"
							className="bg-gray text-foreground inline-flex items-center rounded-full border border-transparent px-6 py-2 text-sm ring-1 ring-transparent duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
						>
							Buy Dusk
						</a>
					</nav>
				</div>
			</div>
		</Wrapper>
	)
}
