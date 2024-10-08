import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

import { PropsWithChildren } from "react"
import { HelmetProvider } from "react-helmet-async"

if (typeof window !== "undefined") {
	posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY!, {
		api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
	})
}

export function Providers({ children }: PropsWithChildren) {
	return (
		<PostHogProvider client={posthog}>
			<HelmetProvider>{children}</HelmetProvider>
		</PostHogProvider>
	)
}
