const BlogEntriesOne = ({ props }: any) => {
	const { title, url, description, pubDate, author, image } = props

	return (
		<li>
			<a href={url} title={title} className="group">
				<article className="flex h-full flex-1 flex-col">
					<div className="block w-full">
						<img
							className="aspect-[384/246] h-full bg-center object-cover"
							src={image}
							alt={title}
						/>
					</div>
					<div className="mt-4 flex w-full flex-1 flex-col items-start justify-between p-8">
						<div className="w-full">
							<div>
								<p className="text-white">{title}</p>
							</div>
							<p className="mt-2 line-clamp-3 text-sm text-neutral-400">
								{description}
							</p>
						</div>
						<footer>
							<div className="mt-6 inline-flex items-center space-x-1">
								<p className="text-xs font-medium text-neutral-400">{author}</p>
								<span aria-hidden="true">&middot;</span>
								<div className="flex text-xs text-neutral-400">
									<time dateTime="2020-03-16"> {pubDate}</time>
								</div>
							</div>
						</footer>
					</div>
				</article>
			</a>
		</li>
	)
}

export default BlogEntriesOne
