import { PortableText } from 'next-sanity'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Pretitle from '../Pretitle'

export default function FAQ({
	pretitle,
	content,
	faqs,
}: Partial<{
	pretitle: string
	content: any
	faqs: any
}> &
	Sanity.Module) {
	return (
		<>
			<section>
				<div className="section">
					<div className="max-w-2xl">
						<Pretitle>{pretitle}</Pretitle>
						<div className="text-foreground richtext mt-6">
							<PortableText value={content} />
						</div>
					</div>
				</div>
				<div className="section p-0">
					<Accordion
						type="single"
						collapsible
						className="text-foreground w-full"
					>
						{faqs.map((faq: any, index: string) => (
							<AccordionItem
								key={index}
								value={index + 1}
								className="px-site py-md transition-colors data-[state=open]:bg-neutral-50"
							>
								<AccordionTrigger className="text-foreground text-h6 flex cursor-pointer justify-between">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="[&_p]:text-body-l text-foreground/50">
									<PortableText value={faq.answer} />
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>
		</>
	)
}
