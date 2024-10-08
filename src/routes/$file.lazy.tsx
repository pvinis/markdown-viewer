import { createLazyFileRoute } from "@tanstack/react-router"
import { MDRenderer } from "../components/MDRenderer"
import { SupportedFrontMatter } from "../types"
import fm from "front-matter"
import { Helmet } from "react-helmet-async"

export const Route = createLazyFileRoute("/$file")({
	component: File,
})

function File() {
	const result = Route.useLoaderData()

	if (result.isErr()) return null

	const { attributes } = fm<SupportedFrontMatter>(result.value)

	const favicon = attributes.favicon
		? attributes.favicon
		: attributes.faviconEmoji
			? `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${attributes.faviconEmoji}</text></svg>`
			: undefined

	return (
		<>
			<Helmet>
				{attributes.title && <title>{attributes.title}</title>}
				{attributes.description && <meta name="description" content={attributes.description} />}
				{favicon && <link rel="icon" href={favicon} />}
			</Helmet>
			<MDRenderer text={result.value} />
		</>
	)
}
