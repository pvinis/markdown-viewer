import { createFileRoute, notFound } from "@tanstack/react-router"
import { err, Result } from "neverthrow"
import { z } from "zod"
import { FetchError, fetchMarkdown } from "../utils"

const customSchema = z.object({
	u: z.string().optional(),
})

export const Route = createFileRoute("/custom")({
	validateSearch: customSchema,
	loaderDeps: ({ search: { u } }) => ({ u }),
	loader: async ({ deps: { u } }): Promise<Result<string, FetchError | "missingUrl">> => {
		if (!u) return err("missingUrl")

		const result = await fetchMarkdown(u, "custom")
		if (result.isErr()) {
			if (result.error === "notFound" || result.error === "unknownError") throw notFound()
		}

		return result
	},
})
