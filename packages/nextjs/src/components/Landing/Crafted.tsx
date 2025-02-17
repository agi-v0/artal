// Define an array of image objects. Each object can have more properties as needed.
const images = [
	{
		url: '/crafted1.png',
		alt: 'Placeholder image 1',
	},
	{
		url: '/crafted2.png',
		alt: 'Placeholder image 2',
	},
	{
		url: '/crafted3.png',
		alt: 'Placeholder image 3',
	},
	{
		url: '/crafted4.png',
		alt: 'Placeholder image 4',
	},
]

const Crafted = () => {
	return (
		<>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">Crafted by us</span>
						<h3 className="mt-6 text-2xl font-light text-pretty text-white">
							Welcome to our world of limitless possibilities, where creativity
							knows no bounds and innovation reigns supreme. We are the
							architects of imagination, the artisans of ingenuity, and the
							creators of the extraordinary. Step into our realm, and prepare to
							embark on a journey that will captivate your senses and leave you
							inspired.
						</h3>
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8">
					<div
						x-data="{ init() {
            new Splide(this.$refs.splide, {
                perPage: 1,
                gap: '0.5rem',
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                },
            }).mount()
        },
    }"
					>
						<section
							className="splide splide--slide splide--ltr splide--draggable is-active is-initialized"
							aria-label="Splide/Alpine.js"
							x-ref="splide"
							id="splide01"
							aria-roledescription="carousel"
						>
							<div className="splide__arrows splide__arrows--ltr">
								<button
									className="splide__arrow splide__arrow--prev"
									type="button"
									aria-label="Previous slide"
									aria-controls="splide01-track"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 40 40"
										width="40"
										height="40"
										focusable="false"
									>
										<path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
									</svg>
								</button>
								<button
									className="splide__arrow splide__arrow--next"
									type="button"
									aria-label="Next slide"
									aria-controls="splide01-track"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 40 40"
										width="40"
										height="40"
										focusable="false"
									>
										<path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
									</svg>
								</button>
							</div>
							<div
								className="splide__track splide__track--slide splide__track--ltr splide__track--draggable h-full"
								id="splide01-track"
								style={{ paddingLeft: '0px', paddingRight: '0px' }}
								aria-live="polite"
								aria-atomic="true"
								aria-busy="false"
							>
								<ul
									className="splide__list"
									id="splide01-list"
									role="presentation"
									style={{ transform: 'translateX(-1360px)' }}
								>
									{images.map((image, index) => (
										<li className="splide__slide">
											<img
												src={image.url}
												alt={image.alt}
												className="h-[75vh] w-full object-cover object-top"
											/>
										</li>
									))}
								</ul>
							</div>
							<ul
								className="splide__pagination splide__pagination--ltr"
								role="tablist"
								aria-label="Select a slide to show"
							>
								<li role="presentation">
									<button
										className="splide__pagination__page"
										type="button"
										role="tab"
										aria-controls="splide01-slide01"
										aria-label="Go to slide 1"
										tabIndex={-1}
									></button>
								</li>
								<li role="presentation">
									<button
										className="splide__pagination__page"
										type="button"
										role="tab"
										aria-controls="splide01-slide02"
										aria-label="Go to slide 2"
										tabIndex={-1}
									></button>
								</li>
								<li role="presentation">
									<button
										className="splide__pagination__page is-active"
										type="button"
										role="tab"
										aria-controls="splide01-slide03"
										aria-label="Go to slide 3"
										aria-selected="true"
									></button>
								</li>
								<li role="presentation">
									<button
										className="splide__pagination__page"
										type="button"
										role="tab"
										aria-controls="splide01-slide04"
										aria-label="Go to slide 4"
										tabIndex={-1}
									></button>
								</li>
							</ul>
						</section>
					</div>
				</div>
			</section>
		</>
	)
}

export default Crafted