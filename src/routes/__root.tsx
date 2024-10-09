import { createRootRoute, Outlet } from "@tanstack/react-router"
import { FourOhFour } from "../pages/404"
// import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	),
	notFoundComponent: FourOhFour,
})

