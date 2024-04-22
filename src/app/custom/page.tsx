"use client"

import { MDRenderer } from "@/MDRenderer"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function CustomPage() {
	const searchParams = useSearchParams()
	const url = searchParams.get("u")

	if (!url) {
		return (
			<>
				<h2>Wrong url</h2>
				<p>
					Try going to the <Link href="/intro">intro</Link> instead 🙂
				</p>
			</>
		)
	}

	return <MDRenderer url={url} />
}

/// choose a font
