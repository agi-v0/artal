// Define an array of tips for website creation
const creationTips = [
	{
		title: 'Manage your finances wisely',
		description:
			'You want to have a clear understanding of the cost right from the beginning.',
	},
	{
		title: "Demonstrate, don't just explain",
		description:
			'You want to precisely know what you will receive in return for your investment.',
	},
	{
		title: 'Value your time investment',
		description:
			"You don't want to spend excessive hours interviewing freelancers or studios.",
	},
	{
		title: 'Get fast results',
		description:
			'You needed a website yesterday and have no time to waste on interviews.',
	},
	{
		title: 'New to website creation',
		description:
			'You desire an appealing website but lack knowledge about where to begin.',
	},
	{
		title: 'Realize your website vision',
		description:
			'Your current site is not up to par, and you want professionals to create an outstanding one.',
	},
]

const Why = () => {
	return (
		<>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">Why</span>
						<h3 className="mt-6 text-2xl font-light text-white">
							We understand that trust is the foundation of any successful
							relationship. We strive to earn and maintain your trust by
							consistently delivering exceptional products and services. Here's
							why you can rely on us
						</h3>
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b">
					<div className="divide-gray grid grid-cols-1 divide-y text-white">
						{creationTips.map((tip) => (
							<div className="grid grid-cols-1 justify-between gap-3 p-8 md:grid-cols-3">
								<div className="font-light">{tip.title}</div>
								<p className="text-neutral-400 md:col-span-2">{tip.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Why