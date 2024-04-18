import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-6 pt-32 pb-16 max-w-prose prose lg:prose-xl mx-auto dark:prose-invert prose-quoteless prose-blockquote:text-gray-400 prose-blockquote:font-normal">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
