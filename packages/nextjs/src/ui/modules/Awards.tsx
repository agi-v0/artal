import { PortableText } from 'next-sanity'

// Define the awards array
// const awards = [
// 	{
// 		year: '2023',
// 		award: 'Stellar Achievement',
// 		contest: 'Digital Fusion',
// 		project: 'Cosmosphere',
// 	},
// 	{
// 		year: '2023',
// 		award: 'Innovation Master',
// 		contest: 'Pixel Emporium',
// 		project: 'TechnoVerse',
// 	},
// 	{
// 		year: '2023',
// 		award: 'Creative Breakthrough',
// 		contest: 'Design Oasis',
// 		project: 'DreamScape',
// 	},
// 	{
// 		year: '2022',
// 		award: 'Visionary Excellence',
// 		contest: 'Tech Innovators',
// 		project: 'FutureLink',
// 	},
// 	{
// 		year: '2022',
// 		award: 'Exceptional Ingenuity',
// 		contest: 'WebGlobe Awards',
// 		project: 'Infinitum',
// 	},
// 	{
// 		year: '2021',
// 		award: 'Artistic Brilliance',
// 		contest: 'Design Discovery',
// 		project: 'ChromaFlow',
// 	},
// 	{
// 		year: '2020',
// 		award: 'Technological Advancement',
// 		contest: 'Digital Marvels',
// 		project: 'ConnectX',
// 	},
// ]

const Awards = ({
	pretitle,
	content,
	awardsList,
	...props
}: Partial<{
	pretitle: string
	content: any
	awardsList: any
}> &
	Sanity.Module) => {
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929] p-8 lg:border-b-0 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="mt-6 text-2xl font-light text-white">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl p-8 lg:p-0">
					<div className="flex w-full flex-col">
						<div className="overflow-x-auto">
							<div className="inline-block min-w-full align-middle">
								<div className="overflow-hidden border border-[#292929]">
									<table className="min-w-full divide-y divide-[#292929]">
										<thead>
											<tr className="divide-x divide-[#292929]">
												<th
													className="px-8 py-3.5 text-left text-base leading-none font-light text-white"
													scope="col"
												>
													Year
												</th>
												<th
													className="px-8 py-3.5 text-left text-base leading-none font-light text-white"
													scope="col"
												>
													Award
												</th>
												<th
													className="px-8 py-3.5 text-left text-base leading-none font-light text-white"
													scope="col"
												>
													Contest
												</th>
												<th
													className="px-8 py-3.5 text-left text-base leading-none font-light text-white sm:pr-6"
													scope="col"
												>
													Project
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-[#292929]">
											{awardsList.map((award: any, index: string) => (
												<tr
													key={index}
													className="divide-x divide-[#292929] font-light whitespace-nowrap text-neutral-400"
												>
													<td className="px-8">{award.year}</td>
													<td className="px-8">{award.award}</td>
													<td className="px-8 py-4">{award.contest}</td>
													<td className="px-8 py-4">{award.project}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Awards
