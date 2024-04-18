import { FourOhFour } from "./404";
import { MDTWView } from "./MDTWView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  const currentLocation = window.location.href;
  const { pathname } = new URL(currentLocation);

  if (pathname === "/") {
    return (
      <div className="prose lg:prose-xl">
        <h1>Markdown Tailwind viewer</h1>
        <p>by pavlos</p>
      </div>
    );
  }

  if (pathname.split("").filter((c) => c === "/").length > 1) {
    console.log({ pathname, four: true });
    return <FourOhFour />;
  }

  console.log({ pathname, four: true });
  return (
    <QueryClientProvider client={queryClient}>
      <MDTWView file={pathname} />
    </QueryClientProvider>
  );
}
