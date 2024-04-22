export function fixMarkdownUrl(url: string) {
	const fixedUrl = url.endsWith(".md") ? url : url + ".md"
	return fixedUrl
}
