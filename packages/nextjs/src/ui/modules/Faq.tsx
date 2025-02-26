import { PortableText } from 'next-sanity'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = ({
	pretitle,
	content,
	faqs,
	...props
}: Partial<{
	pretitle: string
	content: any
	faqs: any
}> &
	Sanity.Module) => {
	return (
		<>
			<section>
				<div className="mx-auto max-w-7xl border-x border-b border-[#292929] p-8 lg:border-b-0 lg:py-32">
					<div className="max-w-2xl">
						<span className="font-light text-neutral-400">{pretitle}</span>
						<div className="mt-6 text-2xl font-light text-pretty text-white">
							<PortableText value={content} />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="mx-auto max-w-7xl">
					<div className="bg-vulcan-900 relative mx-auto border border-[#292929]">
						<Accordion type="single" collapsible className="w-full text-white">
							{faqs.map((faq: any, index: string) => (
								<AccordionItem key={index} value={index + 1} className="p-4">
									<AccordionTrigger className="mt-6 flex cursor-pointer justify-between text-2xl font-light text-white">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className='text-neutral-400 pt-4 '>
										<PortableText value={faq.answer} />
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>
		</>
	)
}

export default FAQ
