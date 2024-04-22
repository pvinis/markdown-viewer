import { Metadata } from "next"
import Link from "next/link"

export default function FourOhFour() {
	return (
		<>
			<h1>404</h1>
			<p>Page not found</p>
			<p>
				Try going to the <Link href="/intro">intro</Link> instead 🙂
			</p>
		</>
	)
}

export const metadata: Metadata = { title: "4 Oh 4" }
