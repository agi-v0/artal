const faqs = [
	{
		question: "Why wouldn't I just hire a full-time designer?",
		answer:
			"Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
	},
	{
		question: 'Is there a limit to how many requests I can have?',
		answer:
			"Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
	},
	{
		question: 'How fast will I receive my designs?',
		answer:
			'On average, most requests are completed in just two days or less. However, more complex requests can take longer.',
	},
	{
		question: 'Can I change my plan later?',
		answer:
			"Absolutely, you can adjust your plan at any time to fit your needs. Whether you need to scale up for more extensive projects or scale down, we're flexible.",
	},
	{
		question: 'What kind of design work can you do?',
		answer:
			'We specialize in a wide range of design work, including web design, graphic design, UX/UI, and more. Just let us know what you need!',
	},
	{
		question: 'Do I own the rights to the designs?',
		answer:
			'Yes, once the project is completed and paid for, you own the full rights to the designs.',
	},
	{
		question: "What if I'm not satisfied with a design?",
		answer:
			"We strive for your satisfaction, so if you're not happy with a design, we'll make the necessary revisions until you are.",
	},
	{
		question: 'How does the billing cycle work?',
		answer:
			'Our billing cycle is monthly, starting from the day you subscribe. You can pause or cancel your subscription anytime.',
	},
	{
		question: 'What software do your designers use?',
		answer:
			'Our designers are proficient in a variety of software, including Adobe Creative Suite, Sketch, Figma, and more, ensuring we can accommodate your specific project needs.',
	},
]

const FAQ = () => {
	return (
		<>
			<section>
				<div className="border-gray mx-auto max-w-7xl border-x border-b p-8 lg:border-b-0 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">FAQ</span>
						<h3 className="mt-6 text-2xl font-light text-white">
							Frequent questions & answers
						</h3>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl">
					<div className="border-gray bg-vulcan-900 relative mx-auto border">
						<ul className="list-none text-white" role="list">
							{faqs.map((faq, index) => (
								<li className="border-gray relative flex border-b">
									<details className="group flex w-full cursor-pointer px-8 py-6 text-left">
										<summary className="mt-6 flex cursor-pointer justify-between text-2xl font-light text-white">
											{faq.question}
											<span className="transition group-open:rotate-180">
												<svg
													fill="none"
													height="24"
													shape-rendering="geometricPrecision"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="1.5"
													viewBox="0 0 24 24"
													width="24"
												>
													<path d="M6 9l6 6 6-6" />
												</svg>
											</span>
										</summary>
										<div className="pt-4 pb-20 text-neutral-400">{faq.answer}</div>
									</details>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}

export default FAQ