import "./globals.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { routeTree } from "./routeTree.gen"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { Providers } from "./components/Providers"

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<div className="prose prose-quoteless mx-auto max-w-prose bg-background px-6 pb-16 pt-32 lg:prose-xl dark:prose-invert prose-blockquote:font-normal prose-blockquote:text-gray-400">
				<RouterProvider router={router} />
			</div>
		</Providers>
	</StrictMode>,
)
