import { FourOhFour } from "./404";
import { MDTWView } from "./MDTWView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  const currentLocation = window.location.href;
  const { pathname } = new URL(currentLocation);

  console.log({ pathname });

  if (pathname.split("").filter((c) => c === "/").length > 1) {
    return <FourOhFour />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <MDTWView file={pathname} />
    </QueryClientProvider>
  );
}
