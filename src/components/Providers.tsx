
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PropsWithChildren } from "react"
import { HelmetProvider } from "react-helmet-async"

export function Providers({ children }: PropsWithChildren) {
	return (
		<HelmetProvider>
			{children}
			<SpeedInsights />
			<Analytics />
		</HelmetProvider>
	)
}
