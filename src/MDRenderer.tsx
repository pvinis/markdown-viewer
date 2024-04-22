"use client"

import { useQuery } from "@tanstack/react-query"
import remarkFrontmatter from "remark-frontmatter"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { fixMarkdownUrl } from "./utils"

const fetchFile = async (url: string) => {
	const res = await fetch(url)
	return res.text()
}

export function MDRenderer({ url }: { url: string }) {
	const fixedUrl = fixMarkdownUrl(url)

	const {
		data: markdown,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: [fixedUrl],
		queryFn: () => fetchFile(fixedUrl),
		retry: false,
	})

	if (isError) return <p>Error: {String(error)}</p>
	if (isLoading) return <p>Loading...</p>

	return <Markdown remarkPlugins={[remarkGfm, remarkFrontmatter]}>{markdown}</Markdown>
}
