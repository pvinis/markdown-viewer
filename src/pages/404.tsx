import { Helmet } from "react-helmet-async"

export function FourOhFour() {
	return (
		<>
			<Helmet>
				<title>4 oh 4</title>
				<meta name="description" content="Page not found" />
			</Helmet>

			<h1>404</h1>
			<p>Page not found</p>
			<p>
				Try going to the <a href="/intro">intro</a> instead 🙂
			</p>
		</>
	)
}
