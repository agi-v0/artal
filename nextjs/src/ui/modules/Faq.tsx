import { PortableText } from 'next-sanity'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Pretitle from '../Pretitle'

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
				<div className="mx-auto max-w-7xl">
					<div className="bg-vulcan-900 relative mx-auto border border-neutral-400">
						<Accordion
							type="single"
							collapsible
							className="text-foreground w-full"
						>
							{faqs.map((faq: any, index: string) => (
								<AccordionItem key={index} value={index + 1} className="p-4">
									<AccordionTrigger className="text-foreground richtext flex cursor-pointer justify-between">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="pt-4 text-base text-neutral-400">
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
