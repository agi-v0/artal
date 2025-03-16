export default function Toggle() {
	return (
		<label className="relative flex h-10 w-10 cursor-pointer items-center justify-center [grid-area:toggle] md:hidden">
			<input id="header-toggle" type="checkbox" className="peer sr-only" />

			{/* Single SVG with two lines that transform */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				className="shrink-0"
			>
				{/* First line - transforms from top bar to diagonal */}
				<line
					x1="2"
					y1="12"
					x2="22"
					y2="12"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					className="header-closed:translate-y-[-4px] header-open:rotate-45 origin-center transition-all duration-300"
				/>

				{/* Second line - transforms from bottom bar to diagonal */}
				<line
					x1="2"
					y1="12"
					x2="22"
					y2="12"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					className="header-closed:translate-y-[4px] header-open:-rotate-45 origin-center transition-all duration-300"
				/>
			</svg>

			{/* Screen reader text */}
			<span className="header-open:hidden sr-only">Open Menu</span>
			<span className="header-closed:hidden sr-only">Close Menu</span>
		</label>
	)
}
