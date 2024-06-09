"use client"

import { useQuery } from "@tanstack/react-query"
import remarkFrontmatter from "remark-frontmatter"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { fixMarkdownUrl } from "./utils"
import rehypeRaw from "rehype-raw"
import { RandomLoader } from "./RandomLoader"

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
	if (isLoading) {
		return (
			<div>
				<span className="text-7xl">M</span>
				<RandomLoader />
			</div>
		)
	}

	return (
		<Markdown remarkPlugins={[remarkGfm, remarkFrontmatter]} rehypePlugins={[rehypeRaw]}>
			{markdown}
		</Markdown>
	)
}
