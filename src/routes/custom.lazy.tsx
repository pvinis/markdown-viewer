import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/custom")({
	component: Custom,
})

function Custom() {
	const { u } = Route.useSearch()
	const { data, error } = Route.useLoaderData()

	console.log({ error, data })
	if (error === "missingUrl") {
		return (
			<>
				<h2>Missing url</h2>
				<p>
					You should add a <code>u=</code> on your url, like:
				</p>
				<p>
					<a href="/custom?u=https://raw.githubusercontent.com/react-native-community/rn-diff-purge/master/README_MAINTAINERS.md">
						https://md.quad.codes/custom?
						<span className="rounded-md bg-pink-200 px-1 py-0.5">u=</span>
						https://raw.githubusercontent.com/react-native-community/rn-diff-purge/master/README_MAINTAINERS.md
					</a>
				</p>
				<p>
					or try going to the <a href="/intro">intro</a> instead 🙂
				</p>
			</>
		)
	}

	if (error === "failedToFetch") {
		return (
			<>
				<h2>Failed to fetch url</h2>
				<p>Make sure the url is valid.</p>
				<p>
					Your url: <code>{u}</code>
				</p>
			</>
		)
	}

	return (
		<div>
			Hello from custom! {u}
			<p>{data}</p>
		</div>
	)

}
