"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { Suspense } from "react"

const queryClient = new QueryClient()

if (typeof window !== "undefined") {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
		api_host: "/ingest",
		ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
	})
}

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<Suspense>
			<PostHogProvider client={posthog}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</PostHogProvider>
		</Suspense>
	)
}
