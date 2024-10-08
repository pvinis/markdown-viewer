import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

const customSchema = z.object({
	u: z.string(),
})

export const Route = createFileRoute("/custom")({
	validateSearch: customSchema,
	loaderDeps: ({ search: { u } }) => ({ u }),
	loader: async ({ deps: { u } }) => {
		const res = await fetch(u)
		return res.text()
	},
	component: Custom,
})

function Custom() {
	const { u } = Route.useSearch()
	const data = Route.useLoaderData()

	return (
		<div className="p-2">
			Hello from custom! {u}
			<p>{data}</p>
		</div>
	)
}

