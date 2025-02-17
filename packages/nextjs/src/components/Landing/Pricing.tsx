// Define an array of pricing packages with SVG paths and dynamic pricing
const pricingPackages = [
	{
		name: 'Figma',
		images: ['/assets/figma.svg'],
		monthlyPrice: '1999/mo',
		annualPrice: '1499/year',
		description:
			'Uniquely crafted one-page website designed in Figma, setting you apart and captivating your audience. Includes basic styles and components for easier development.',
		benefits: [
			'UNIQUE ONE-PAGE WEBSITE DESIGN',
			'FIGMA DESKTOP & MOBILE DESIGNS',
			'FIGMA FILE & STYLEGUIDE',
			'VIDEO GUIDE & OVERVIEW',
			'HAND-OVER SUPPORT',
			'SLACK ACCESS',
			'LIVE ONE-PAGE WEBSITE',
			'FULLY RESPONSIVE',
			'SUBTLE INTERACTIONS',
			'14 DAY POST-LAUNCH SUPPORT',
		],
		actionText: 'PURCHASE DESIGN PACKAGE',
		actionLink: '#_',
	},
	{
		name: 'Figma, Astro & Tailwind',
		images: ['/assets/figma.svg', '/assets/astro.svg', '/assets/tailwind.svg'],
		monthlyPrice: '3999/mo',
		annualPrice: '2599/year',
		description:
			'Get a pre-designed website in Figma, developed with Astro & Tailwind, offering a unique user experience through engaging elements and subtle animations.',
		benefits: [
			'UNIQUE ONE-PAGE WEBSITE DESIGN',
			'FIGMA DESKTOP & MOBILE DESIGNS',
			'CODE FILE & STYLEGUIDE',
			'VIDEO GUIDE & OVERVIEW',
			'HAND-OVER SUPPORT',
			'SLACK ACCESS',
			'LIVE ONE-PAGE WEBSITE',
			'FULLY RESPONSIVE',
			'SUBTLE INTERACTIONS',
			'14 DAY POST-LAUNCH SUPPORT',
		],
		actionText: 'PURCHASE FULL PACKAGE',
		actionLink: '#_',
	},
]

const Pricing = () => {
	return (
		<>
			<section x-data="{annual: false}">
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">Pricing</span>
						<h3 className="mt-6 text-2xl font-light text-white">
							We provide straightforward and convenient pricing options to cater
							to your specific requirements. Our aim is to make the process of
							choosing to collaborate with us as seamless as our actual work
							together.
						</h3>
					</div>
				</div>
				<div className="border-gray mx-auto max-w-7xl border-x border-b">
					<div className="divide-gray border-gray inline-flex w-full divide-x border-b">
						<button
							// @click="annual = false"
							type="button"
							className="h-14 w-1/2 px-8 py-2 text-xl font-light uppercase transition duration-200 ring-inset hover:bg-white/10 focus:ring-1 focus:ring-white focus:outline-none"
							// :className="{'bg-gray text-white': !annual, 'bg-transparent text-white': annual}"
						>
							Monthly
						</button>
						<button
							// @click="annual = true"
							type="button"
							className="h-14 w-1/2 px-8 py-2 text-xl font-light uppercase transition duration-200 ring-inset hover:bg-white/10 focus:ring-1 focus:ring-white focus:outline-none"
							// :className="{'bg-gray text-white': annual, 'bg-transparent text-white': !annual}"
						>
							Annual
						</button>
					</div>
					<div className="divide-gray grid grid-cols-1 text-white md:grid-cols-3 lg:divide-x">
						{pricingPackages.map((plan) => (
							<div className="flex flex-col p-8">
								<div>
									<div className="flex gap-3">
										{plan.images.map((imageSrc) => (
											<img
												src={imageSrc}
												className="h-4 w-4 flex-none"
												alt={`${plan.name} logo`}
											/>
										))}
									</div>
									<p className="mt-6 text-2xl font-light text-white">
										{plan.name}
									</p>
									<p className="mt-6 text-2xl font-light text-white">
										<span className="text-2xl tracking-tight">
											<span x-show="!annual">${plan.monthlyPrice}</span>
											<span x-show="annual">${plan.annualPrice}</span>
										</span>
									</p>
									<p className="mt-6 text-pretty text-neutral-400">
										{plan.description}
									</p>
									<h3 className="mt-6 text-white">What you get</h3>
									<ul className="mt-6 space-y-2 font-light text-white">
										{plan.benefits.map((benefit) => (
											<li>{benefit}</li>
										))}
									</ul>
									<div className="border-gray mt-6 border-t pt-6">
										<a
											href={plan.actionLink}
											title={plan.actionText}
											aria-label={plan.actionLink}
											className="bg-gray inline-flex h-10 items-center rounded-full border border-transparent px-6 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
										>
											{plan.actionText}
										</a>
									</div>
								</div>
							</div>
						))}
						<div className="flex h-full flex-col justify-between p-8">
							<div>
								<p className="text-2xl font-light text-white">CUSTOM</p>
								<p className="mt-6 text-pretty text-neutral-400">
									We can provide you with a custom package designed specifically
									to meet your unique requirements and preferences. <br />
									<br /> Our team will work closely with you to understand your
									needs and goals, ensuring that every aspect of the package is
									personalized and tailored to your specifications. <br />
									<br /> By leveraging our expertise and extensive resources, we
									will develop a comprehensive and customized solution that
									aligns perfectly with your vision. You can expect a seamless
									collaboration process, attention to detail, and a final
									product that exceeds your expectations.
								</p>
							</div>
							<div className="border-gray mt-6 border-t pt-6">
								<a
									href="#_"
									title="your title"
									aria-label="your label"
									className="bg-gray inline-flex h-10 items-center rounded-full border border-transparent px-6 py-2 text-sm text-white ring-1 ring-transparent duration-200 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
								>
									CONTACT US
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Pricing