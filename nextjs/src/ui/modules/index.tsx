'use client'

import dynamic from 'next/dynamic'

// Simple loading fallback component
const ModuleLoader = () => (
	<div className="w-full py-4 text-center text-neutral-400">
		<span className="animate-pulse">Loading module...</span>
	</div>
)

// Define dynamically imported components with SSR disabled to reduce bundle size
const About = dynamic(() => import('./About'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const AccordionList = dynamic(() => import('./AccordionList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const ProjectsFrontpage = dynamic(() => import('./ProjectsFrontpage'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Awards = dynamic(() => import('./Awards'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const BlogFrontpage = dynamic(() => import('./blog/BlogFrontpage'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const BlogList = dynamic(() => import('./blog/BlogList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const BlogPostContent = dynamic(() => import('./blog/PostContent'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Breadcrumbs = dynamic(() => import('./Breadcrumbs'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Callout = dynamic(() => import('./Callout'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const CardList = dynamic(() => import('./CardList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Crafted = dynamic(() => import('./Crafted'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const CreativeModule = dynamic(() => import('./CreativeModule'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const CustomHTML = dynamic(() => import('./CustomHTML'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const FAQ = dynamic(() => import('./Faq'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const FlagList = dynamic(() => import('./FlagList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Hero = dynamic(() => import('./Hero'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const HeroSplit = dynamic(() => import('./HeroSplit'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const HeroSaaS = dynamic(() => import('./HeroSaaS'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const LogoList = dynamic(() => import('./LogoList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const PersonList = dynamic(() => import('./PersonList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const PricingList = dynamic(() => import('./PricingList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Projects = dynamic(() => import('./ProjectList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Process = dynamic(() => import('./Process'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const RichtextModule = dynamic(() => import('./RichtextModule'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const ScheduleModule = dynamic(() => import('./ScheduleModule'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const SearchModule = dynamic(() => import('./SearchModule'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Services = dynamic(() => import('./Services'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const StatList = dynamic(() => import('./StatList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const StepList = dynamic(() => import('./StepList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const TabbedContent = dynamic(() => import('./TabbedContent'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const TestimonialList = dynamic(() => import('./TestimonialList'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const TestimonialFeatured = dynamic(() => import('./TestimonialFeatured'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})
const Why = dynamic(() => import('./Why'), {
	loading: () => <ModuleLoader />,
	ssr: false,
})

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
				// No need for Suspense with next/dynamic
				switch (module._type) {
					case 'about':
						return <About {...(module as any)} key={module._key} />
					case 'accordion-list':
						return <AccordionList {...(module as any)} key={module._key} />
					case 'projects-frontpage':
						return <ProjectsFrontpage {...(module as any)} key={module._key} />
					case 'awards':
						return <Awards {...(module as any)} key={module._key} />
					case 'blog-frontpage':
						return <BlogFrontpage {...(module as any)} key={module._key} />
					case 'blog-list':
						return <BlogList {...(module as any)} key={module._key} />
					case 'blog-post-content':
						return (
							<BlogPostContent
								{...(module as any)}
								post={post}
								key={module._key}
							/>
						)
					case 'breadcrumbs':
						return (
							<Breadcrumbs
								{...(module as any)}
								currentPage={post || page}
								key={module._key}
							/>
						)
					case 'callout':
						return <Callout {...(module as any)} key={module._key} />
					case 'card-list':
						return <CardList {...(module as any)} key={module._key} />
					case 'crafted':
						return <Crafted {...(module as any)} key={module._key} />
					case 'creative-module':
						return <CreativeModule {...(module as any)} key={module._key} />
					case 'custom-html':
						return <CustomHTML {...(module as any)} key={module._key} />
					case 'faq':
						return <FAQ {...(module as any)} key={module._key} />
					case 'flag-list':
						return <FlagList {...(module as any)} key={module._key} />
					case 'hero':
						return <Hero {...(module as any)} key={module._key} />
					case 'hero.split':
						return <HeroSplit {...(module as any)} key={module._key} />
					case 'hero.saas':
						return <HeroSaaS {...(module as any)} key={module._key} />
					case 'logo-list':
						return <LogoList {...(module as any)} key={module._key} />
					case 'person-list':
						return <PersonList {...(module as any)} key={module._key} />
					case 'pricing-list':
						return <PricingList {...(module as any)} key={module._key} />
					case 'project.list':
						return <Projects {...(module as any)} key={module._key} />
					case 'process':
						return <Process {...(module as any)} key={module._key} />
					case 'richtext-module':
						return <RichtextModule {...(module as any)} key={module._key} />
					case 'schedule-module':
						return <ScheduleModule {...(module as any)} key={module._key} />
					case 'search-module':
						return <SearchModule {...(module as any)} key={module._key} />
					case 'service.list':
						return <Services {...(module as any)} key={module._key} />
					case 'stat-list':
						return <StatList {...(module as any)} key={module._key} />
					case 'step-list':
						return <StepList {...(module as any)} key={module._key} />
					case 'tabbed-content':
						return <TabbedContent {...(module as any)} key={module._key} />
					case 'testimonial-list':
						return <TestimonialList {...(module as any)} key={module._key} />
					case 'testimonial.featured':
						return (
							<TestimonialFeatured {...(module as any)} key={module._key} />
						)
					case 'why':
						return <Why {...(module as any)} key={module._key} />
					default:
						return <div data-type={module._type} key={module._key} />
				}
			})}
		</>
	)
}
