"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

const queryClient = new QueryClient()

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
	api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
})

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<PostHogProvider client={posthog}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</PostHogProvider>
	)
}

// prettier with tw
