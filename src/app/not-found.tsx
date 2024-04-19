import Head from "next/head"
import Link from "next/link"

export default function FourOhFour() {
	return (
		<>
			<Head>
				<title>wowoworiwoeriu</title>
			</Head>
			<h1>404</h1>
			<p>Page not found</p>
			<p>
				Try going to the <Link href="/intro.md">intro</Link> instead 🙂
			</p>
		</>
	)
}

// maybe try files without .md extension too before failing, for easier linking
