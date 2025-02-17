const Header = () => {
	return (
		<>
			<div className="mx-auto w-full justify-center bg-black">
				<div
					className="border-t-none border-gray mx-auto flex w-full max-w-7xl flex-col border p-8 lg:flex-row lg:items-center lg:justify-between"
					x-data="{ open: false }"
				>
					<div className="flex flex-row items-center justify-between text-white">
						<a
							href="/"
							title="your title"
							aria-label="your label"
							className="font-display inline-flex items-center uppercase"
						>
							<span>✿ Dusk.</span>
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
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								></path>
								<path
									className="{'hidden': !open, 'inline-flex': open }"
									// className="hidden"
									d="M6 18L18 6M6 6l12 12"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								></path>
							</svg>
						</button>
					</div>
					<nav
						className="hidden flex-grow flex-col items-center gap-4 p-4 px-5 text-sm text-white opacity-100 md:pb-0 lg:mt-0 lg:flex lg:flex-row lg:justify-start lg:gap-8 lg:p-0 lg:px-0"
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
							className="bg-gray inline-flex items-center rounded-full border border-transparent px-6 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
						>
							Buy Dusk
						</a>
					</nav>
				</div>
			</div>
		</>
	)
}
