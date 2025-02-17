const jamstackAdvantages = [
	{
		title: 'Enhanced Performance',
		description:
			'By eliminating time-consuming database queries, static sites built with Jamstack offer a significantly improved user experience and faster loading times, sometimes even up to 10 times faster.',
	},
	{
		title: 'Competitive Advantage',
		description:
			'The Jamstack architecture provides a unique edge that is hard to rival. With Jamstack, your website has the potential to outrank competitors in search engine results.',
	},
	{
		title: 'Heightened Security',
		description:
			'Static sites remove server-side and database operations, minimizing vulnerabilities. You can bid farewell to worries about potential security breaches.',
	},
	{
		title: 'Cost Efficiency',
		description:
			'The streamlined development process and reduced maintenance requirements of Jamstack lead to cost savings. Additionally, hosting static files is typically free, adding to the overall cost-effectiveness.',
	},
	{
		title: 'Scalable Growth',
		description:
			"Should your product gain viral popularity, you can rest assured knowing that downtime and slow performance won't be an issue. Content Delivery Networks (CDNs) seamlessly handle increased traffic and ensure smooth scalability.",
	},
	{
		title: 'Unmatched Reliability',
		description:
			'The delivery of static sites through CDNs and the absence of complex server architecture contribute to an incredibly stable environment, guaranteeing reliable performance.',
	},
]

const Process = () => {
	return (
		<>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">The process</span>
						<h3 className="mt-6 text-2xl font-light text-pretty text-white">
							We offer a comprehensive design solution for creating high-quality
							landing pages tailored to your specific requirements and optimized
							to achieve your goals. By utilizing cutting-edge technologies and
							frameworks, we deliver a fully functional and visually appealing
							design that is ready to go live, all at a fixed price.
						</h3>
						<p className="mt-6 text-neutral-400">
							Our service goes beyond using pre-made templates or unnecessary
							complications. Instead, we focus on creating beautifully
							functional designs that captivate and engage your target audience.
							With a single page, we strive to capture the attention, hearts,
							and minds of your visitors, leaving a lasting impression.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className="border-gray divide-gray mx-auto max-w-7xl divide-y border-x border-b">
					<div className="divide-gray grid grid-cols-1 text-white md:grid-cols-3 lg:divide-x">
						{jamstackAdvantages.map((advantage) => (
							<div className="flex flex-col p-8">
								<div className="font-light">{advantage.title}</div>
								<p className="mt-3 text-pretty text-neutral-400">
									{advantage.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Process