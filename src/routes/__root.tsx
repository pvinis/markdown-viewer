import { createRootRoute, Outlet } from "@tanstack/react-router"
// import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
	component: () => (
		<div className="prose-quoteless prose mx-auto max-w-prose px-6 pb-16 pt-32 lg:prose-xl dark:prose-invert prose-blockquote:font-normal prose-blockquote:text-gray-400">
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</div>
	),
})
