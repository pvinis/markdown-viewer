import { SupportedFrontMatter } from "@/types"
import fm from "front-matter"
import { Metadata } from "next"
import { FilePageProps } from "./page"
import { fixMarkdownUrl } from "@/utils"

const host = process.env.NEXT_PUBLIC_MD_HOST

export default function EmptyLayout({ children }: React.PropsWithChildren) {
	return children
}

export async function generateMetadata({ params }: FilePageProps): Promise<Metadata> {
	const { file } = params
	const url = `${host}/${file}`
	const fixedUrl = fixMarkdownUrl(url)

	const mdFile = await fetch(fixedUrl).then((res) => res.text())

	const { attributes } = fm<SupportedFrontMatter>(mdFile)

	const favicon = attributes.favicon
		? attributes.favicon
		: attributes.faviconEmoji
			? `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${attributes.faviconEmoji}</text></svg>`
			: undefined

	return {
		title: attributes.title,
		description: attributes.description ?? "A great markdown viewer by pvinis",
		icons: favicon,
	}
}
