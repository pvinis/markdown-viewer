import { createLazyFileRoute } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"
import { generateOgImage } from "../utils"

export const Route = createLazyFileRoute("/")({
	component: Index,
})

function Index() {
	return (
		<>
			<Helmet>
				<title>Markdown Viewer</title>
				<meta name="description" content="A great markdown viewer by Pavlos Vinieratos" />

				{/* Open Graph metadata */}
				<meta property="og:title" content="Markdown Viewer" />
				<meta property="og:description" content="A great markdown viewer by Pavlos Vinieratos" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={generateOgImage("Markdown Viewer")} />
			</Helmet>
			<h1>Markdown Viewer</h1>
			<p>
				by Pavlos Vinieratos (<a href="https://twitter.com/pvinis">pvinis</a>)
			</p>
			<p>
				Check out the <a href="/intro">intro</a>, or see the{" "}
				<a href="https://github.com/pvinis/markdown-viewer">source code</a>
			</p>
		</>
	)
}
