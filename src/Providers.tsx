"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export function Providers({ children }: React.PropsWithChildren) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

// prettier with tw
