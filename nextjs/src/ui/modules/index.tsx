import AccordionList from './AccordionList'
import BlogFrontpage from './blog/BlogFrontpage'
import BlogList from './blog/BlogList'
import BlogPostContent from './blog/PostContent'
import Breadcrumbs from './Breadcrumbs'
import Callout from './Callout'
import CardList from './CardList'
import CreativeModule from './CreativeModule'
import CustomHTML from './CustomHTML'
import FlagList from './FlagList'
import Hero from './Hero'
import HeroSplit from './HeroSplit'
import HeroSaaS from './HeroSaaS'
import LogoList from './LogoList'
import PersonList from './PersonList'
import PricingList from './PricingList'
import Projects from './ProjectList'
import RichtextModule from './RichtextModule'
import ScheduleModule from './ScheduleModule'
import SearchModule from './SearchModule'
import StatList from './StatList'
import StepList from './StepList'
import TabbedContent from './TabbedContent'
import TestimonialList from './TestimonialList'
import TestimonialFeatured from './TestimonialFeatured'
import Services from './Services'
import About from './About'
import Process from './Process'
import Awards from './Awards'
import Crafted from './Crafted'
import Why from './Why'
import FAQ from './Faq'
import ProjectsFrontpage from './ProjectsFrontpage'

export default function Modules({
	modules,
	page,
	post,
}: {
	modules?: Sanity.Module[]
	page?: Sanity.Page
	post?: Sanity.BlogPost
}) {
	return (
		<>
			{modules?.map((module) => {
				switch (module._type) {
					case 'about':
						return <About {...module} key={module._key} />
					case 'accordion-list':
						return <AccordionList {...module} key={module._key} />
					case 'projects-frontpage':
						return <ProjectsFrontpage {...module} key={module._key} />
					case 'awards':
						return <Awards {...module} key={module._key} />
					case 'blog-frontpage':
						return <BlogFrontpage {...module} key={module._key} />
					case 'blog-list':
						return <BlogList {...module} key={module._key} />
					case 'blog-post-content':
						return <BlogPostContent {...module} post={post} key={module._key} />
					case 'breadcrumbs':
						return (
							<Breadcrumbs
								{...module}
								currentPage={post || page}
								key={module._key}
							/>
						)
					case 'callout':
						return <Callout {...module} key={module._key} />
					case 'card-list':
						return <CardList {...module} key={module._key} />
					// case 'crafted':
					// 	return <Crafted {...module} key={module._key} />
					case 'creative-module':
						return <CreativeModule {...module} key={module._key} />
					case 'custom-html':
						return <CustomHTML {...module} key={module._key} />
					case 'faq':
						return <FAQ {...module} key={module._key} />
					case 'flag-list':
						return <FlagList {...module} key={module._key} />
					case 'hero':
						return <Hero {...module} key={module._key} />
					case 'hero.split':
						return <HeroSplit {...module} key={module._key} />
					case 'hero.saas':
						return <HeroSaaS {...module} key={module._key} />
					case 'logo-list':
						return <LogoList {...module} key={module._key} />
					case 'person-list':
						return <PersonList {...module} key={module._key} />
					case 'pricing-list':
						return <PricingList {...module} key={module._key} />
					case 'project.list':
						return <Projects {...module} key={module._key} />
					case 'process':
						return <Process {...module} key={module._key} />
					case 'richtext-module':
						return <RichtextModule {...module} key={module._key} />
					case 'schedule-module':
						return <ScheduleModule {...module} key={module._key} />
					case 'search-module':
						return <SearchModule {...module} key={module._key} />
					case 'service.list':
						return <Services {...module} key={module._key} />
					case 'stat-list':
						return <StatList {...module} key={module._key} />
					case 'step-list':
						return <StepList {...module} key={module._key} />
					case 'tabbed-content':
						return <TabbedContent {...module} key={module._key} />
					case 'testimonial-list':
						return <TestimonialList {...module} key={module._key} />
					case 'testimonial.featured':
						return <TestimonialFeatured {...module} key={module._key} />
					case 'why':
						return <Why {...module} key={module._key} />

					default:
						return <div data-type={module._type} key={module._key} />
				}
			})}
		</>
	)
}
