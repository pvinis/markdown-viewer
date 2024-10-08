import { createLazyFileRoute } from "@tanstack/react-router"
import { MDRenderer } from "../components/MDRenderer"

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

	return <MDRenderer text={result.value} />
}
