import Link from "next/link"

export default function HomePage() {
	return (
		<>
			<h1>Markdown Viewer</h1>
			<p>
				by Pavlos Vinieratos (<Link href="https://twitter.com/pvinis">pvinis</Link>)
			</p>
			<p>
				Check out the <Link href="/intro">intro</Link>, or see the{" "}
				<Link href="https://github.com/pvinis/markdown-viewer">source code</Link>
			</p>
		</>
	)
}
