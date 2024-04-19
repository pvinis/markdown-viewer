import Link from "next/link"

export default function HomePage() {
	return (
		<>
			<h1>Markdown Tailwind Viewer</h1>
			<p>by Pavlos Vinieratos</p>
			<p>
				Check out the <Link href="/intro.md">intro</Link>
			</p>
		</>
	)
}

// spinner for loading? or some simple dots?

///try witouhgvercel.json file

// put back to md.quad.codes
