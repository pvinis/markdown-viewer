import { ok, Result, err } from "neverthrow"

export type FetchError = "failedToFetch" | "notFound" | "unknownError"

/**
 * Generates an SVG image with the given title for use as og:image
 * @param title The title to display in the image
 * @returns A data URL containing the SVG image
 */
export function generateOgImage(title: string): string {
	// Ensure the title is properly encoded for use in SVG
	const encodedTitle = title
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;")

	const svg = `
		<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
			<rect width="1200" height="630" fill="#e9d5ff"/>
			<text
				x="600"
				y="315"
				font-family="Iosevka, monospace"
				font-size="64"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="#4a044e"
			>${encodedTitle}</text>
		</svg>
	`

	return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`
}

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
