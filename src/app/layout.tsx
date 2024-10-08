import "./globals.css"
import { Providers } from "@/Providers"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "MD Viewer",
	description: "A great markdown viewer by pvinis",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<div className="prose prose-quoteless mx-auto max-w-prose px-6 pb-16 pt-32 lg:prose-xl dark:prose-invert prose-blockquote:font-normal prose-blockquote:text-gray-400">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
