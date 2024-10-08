import remarkFrontmatter from "remark-frontmatter"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

interface MDRendererProps {
	text: string
}

export function MDRenderer({ text }: MDRendererProps) {
	return (
		<Markdown remarkPlugins={[remarkGfm, remarkFrontmatter]} rehypePlugins={[rehypeRaw]}>
			{text}
		</Markdown>
	)
}
