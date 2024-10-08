import { createRootRoute, Outlet } from "@tanstack/react-router"
import { FourOhFour } from "../pages/404"
import { RandomSpinner } from "../pages/RandomSpinner"
// import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	),
	pendingComponent: RandomSpinner,
	notFoundComponent: FourOhFour,
})

