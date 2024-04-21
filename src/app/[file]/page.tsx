import { MDRenderer } from "@/MDRenderer"
import { SupportedFrontMatter } from "@/types"
import fm from "front-matter"
import { Metadata } from "next"
import posthog from "posthog-js"

const host = process.env.NEXT_PUBLIC_MD_HOST

interface FilePageProps {
	params: {
		file: string
	}
}

export default function FilePage({ params }: FilePageProps) {
	const { file } = params
	const url = `${host}/${file}`

	posthog.capture("load page", { file })

	return <MDRenderer url={url} />
}

/// common file for this and custom

// link to github

// link to raw md? :thinking::

//codeblocks copy button

export async function generateMetadata({ params }: FilePageProps): Promise<Metadata> {
	const { file } = params
	const url = `${host}/${file}`

	const mdFile = await fetch(url).then((res) => res.text())

	const { attributes } = fm<SupportedFrontMatter>(mdFile)

	const favicon = attributes.favicon
		? attributes.favicon
		: attributes.faviconEmoji
			? `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${attributes.faviconEmoji}</text></svg>`
			: undefined

	return {
		title: attributes.title,
		icons: favicon,
	}
}

/// dark mode favicon
