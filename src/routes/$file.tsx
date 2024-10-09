import { createFileRoute, notFound } from "@tanstack/react-router"
import { Result } from "neverthrow"
import { FetchError, fetchMarkdown } from "../utils"

const host = import.meta.env.VITE_PUBLIC_MD_HOST

export const Route = createFileRoute("/$file")({
	loader: async ({ params: { file } }): Promise<Result<string, FetchError>> => {
		const fileWithExtension = file.endsWith(".md") ? file : `${file}.md`
		const url = `${host}/${fileWithExtension}`
		const result = await fetchMarkdown(url, "$file")

		if (result.isErr()) {
			if (result.error === "notFound" || result.error === "unknownError") throw notFound()
		}

		return result
	},
})
