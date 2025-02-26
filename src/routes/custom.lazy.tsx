import { createLazyFileRoute } from "@tanstack/react-router"
import { MDRenderer } from "../components/MDRenderer"
import { SupportedFrontMatter } from "../types"
import fm from "front-matter"
import { Helmet } from "react-helmet-async"
import { generateOgImage } from "../utils"

export const Route = createLazyFileRoute("/custom")({
	component: Custom,
})

function Custom() {
	const { u } = Route.useSearch()
	const result = Route.useLoaderData()

	if (result.isErr()) {
		if (result.error === "missingUrl") {
			return (
				<>
					<h1>Missing url</h1>
					<p>
						You should add a <code>u=</code> on your url, like:
					</p>
					<p>
						<a href="/custom?u=https://raw.githubusercontent.com/react-native-community/rn-diff-purge/master/README_MAINTAINERS.md">
							https://md.quad.codes/custom?
							<span className="rounded-md bg-accent px-1 py-0.5">u=</span>
							https://raw.githubusercontent.com/react-native-community/rn-diff-purge/master/README_MAINTAINERS.md
						</a>
					</p>
					<p>
						or try going to the <a href="/intro">intro</a> instead 🙂
					</p>
				</>
			)
		}

		if (result.error === "failedToFetch") {
			return (
				<>
					<h1>Failed to fetch url</h1>
					<p>Make sure the url is valid.</p>
					<p>
						Your url: <code>{u}</code>
					</p>
				</>
			)
		}

		return <h1>Unknown error</h1>
	}

	// Parse frontmatter if present
	const { attributes } = fm<SupportedFrontMatter>(result.value)

	// Create favicon from emoji if specified
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
				{favicon && <link rel="icon" href={favicon} media="(prefers-color-scheme: light)" />}
				{favicon && <link rel="icon" href={favicon} media="(prefers-color-scheme: dark)" />}

				{/* Open Graph metadata */}
				{attributes.title && <meta property="og:title" content={attributes.title} />}
				{attributes.description && (
					<meta property="og:description" content={attributes.description} />
				)}
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content={generateOgImage(attributes.title || "Markdown Viewer")}
				/>
			</Helmet>
			<MDRenderer text={result.value} />
		</>
	)
}
