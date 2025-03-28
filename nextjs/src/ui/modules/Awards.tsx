import { PortableText } from 'next-sanity'
import Pretitle from '../Pretitle'

export default function Awards({
	pretitle,
	content,
	awardsList,
}: Partial<{
	pretitle: string
	content: any
	awardsList: any
}> &
	Sanity.Module) {
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-neutral-400 p-8 lg:border-b-0 lg:py-16">
					<div className="max-w-2xl">
						<Pretitle>{pretitle}</Pretitle>
						<div className="text-foreground richtext mt-6">
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
								<div className="overflow-hidden border border-neutral-400">
									<table className="min-w-full divide-y divide-neutral-400">
										<thead>
											<tr className="divide-x divide-neutral-400">
												<th
													className="text-foreground px-8 py-3.5 text-left text-base leading-none font-light"
													scope="col"
												>
													Year
												</th>
												<th
													className="text-foreground px-8 py-3.5 text-left text-base leading-none font-light"
													scope="col"
												>
													Award
												</th>
												<th
													className="text-foreground px-8 py-3.5 text-left text-base leading-none font-light"
													scope="col"
												>
													Contest
												</th>
												<th
													className="text-foreground px-8 py-3.5 text-left text-base leading-none font-light sm:pr-6"
													scope="col"
												>
													Project
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-neutral-400">
											{awardsList.map((award: any, index: string) => (
												<tr
													key={index}
													className="divide-x divide-neutral-400 font-light whitespace-nowrap text-neutral-400"
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
