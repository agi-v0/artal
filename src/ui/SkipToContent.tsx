export default function SkipToContent() {
	return (
		<a
			href="#main-content"
			className="text-foreground absolute top-0 left-0 z-20 bg-white not-focus:sr-only"
			tabIndex={0}
		>
			Skip to content
		</a>
	)
}
