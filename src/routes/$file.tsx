import { createFileRoute } from "@tanstack/react-router"

type FileError = "failedToFetch" | "unknownError"

const host = import.meta.env.VITE_PUBLIC_MD_HOST

export const Route = createFileRoute("/$file")({
	loader: async ({
		params: { file },
	}): Promise<{ data: string; error: null } | { data: null; error: FileError }> => {
		const url = `${host}/${file}.md`

		try {
			const res = await fetch(url)
			if (!res.ok) return { data: null, error: "failedToFetch" }

			return { data: await res.text(), error: null }
		} catch (e) {
			return { data: null, error: "unknownError" }
		}
	},
})
