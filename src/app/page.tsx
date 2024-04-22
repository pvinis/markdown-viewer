import Link from "next/link"
import posthog from "posthog-js"

export default function HomePage() {
	posthog.capture("my event", { property: "value" })

	return (
		<>
			<h1>Markdown Tailwind Viewer</h1>
			<p>by Pavlos Vinieratos</p>
			<p>
				Check out the <Link href="/intro">intro</Link>
			</p>
		</>
	)
}

// spinner for loading? or some simple dots?

///try witouhgvercel.json file

// put back to md.quad.codes
