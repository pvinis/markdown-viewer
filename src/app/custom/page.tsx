"use client"

import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

const fetchFile = async (url: string) => {
	const res = await fetch(url)
	return res.text()
}

export default function CustomPage() {
	const searchParams = useSearchParams()
	const u = searchParams.get("u")

	const {
		data: markdown,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: [u],
		enabled: !!u,
		queryFn: () => fetchFile(u!),
		retry: false,
	})

	if (!u) return <p>Missing URL parameter</p>
	if (isError) return <p>Error: {String(error)}</p>
	if (isLoading) return <p>Loading...</p>

	return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
}
