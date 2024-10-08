import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
	component: Index,
})

function Index() {
	return (
		<>
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
