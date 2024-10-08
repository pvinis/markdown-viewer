import { ok, Result, err } from "neverthrow"

export type FetchError = "failedToFetch" | "notFound" | "unknownError"

export async function fetchMarkdown(
	url: string,
	forRoute: "$file" | "custom",
): Promise<Result<string, FetchError>> {
	try {
		const res = await fetch(url)

		if (!res.ok) {
			if (res.status === 404) return err("notFound")
			return err("failedToFetch")
		}

		return ok(await res.text())
	} catch (e) {
		if (e instanceof Error && e.message === "Failed to fetch")
			return forRoute === "$file" ? err("notFound") : err("failedToFetch")

		return err("unknownError")
	}
}
