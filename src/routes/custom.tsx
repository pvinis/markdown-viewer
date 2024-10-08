import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

const customSchema = z.object({
	u: z.string().optional(),
})

type CustomError = "missingUrl" | "failedToFetch" | "unknownError"

export const Route = createFileRoute("/custom")({
	validateSearch: customSchema,
	loaderDeps: ({ search: { u } }) => ({ u }),
	loader: async ({
		deps: { u },
	}): Promise<{ data: string; error: null } | { data: null; error: CustomError }> => {
		if (!u) return { data: null, error: "missingUrl" }

		try {
			const res = await fetch(u)
			if (!res.ok) return { data: null, error: "failedToFetch" }

			return { data: await res.text(), error: null }
		} catch (e) {
			return { data: null, error: "unknownError" }
		}
	},
})
