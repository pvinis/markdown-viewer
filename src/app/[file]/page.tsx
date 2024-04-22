"use client"

import { MDRenderer } from "@/MDRenderer"
import { usePostHog } from "posthog-js/react"

const host = process.env.NEXT_PUBLIC_MD_HOST

export interface FilePageProps {
	params: {
		file: string
	}
}

export default function FilePage({ params }: FilePageProps) {
	const { file } = params
	const url = `${host}/${file}`

	const posthog = usePostHog()
	posthog.capture("markdown load my", { file })

	return <MDRenderer url={url} />
}

//codeblocks copy button

//  dark mode favicon
