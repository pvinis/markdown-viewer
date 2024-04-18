import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import { useSearchParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

const fetchFile = async (url: string) => {
  const res = await fetch(url);
  return res.text();
};

export default function Custom() {
  const [searchParams] = useSearchParams();
  const u = searchParams.get("u");

  const {
    data: markdown,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [u],
    queryFn: () => fetchFile(u),
    retry: false,
  });

  if (isError) return <p>Error: {String(error)}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="px-6 pt-32 pb-16 max-w-prose prose lg:prose-xl mx-auto prose-blockquote:overline dark:prose-invert">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
}

///dark mode

/// quotes
