import Link from "next/link"

export default function HomePage() {
	return (
		<>
			<h1>Markdown Tailwind Viewer</h1>
			<p>by Pavlos Vinieratos</p>
			<p>
				Check out the <Link href="/intro">intro</Link>, or see the{" "}
				<Link href="https://github.com/pvinis/markdown-tailwind-viewer">source code</Link>
			</p>
		</>
	)
}

// spinner for loading? or some simple dots?

///try witouhgvercel.json file

// better readme
