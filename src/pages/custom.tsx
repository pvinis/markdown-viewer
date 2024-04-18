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
    enabled: !!u,
    queryFn: () => fetchFile(u!),
    retry: false,
  });

  if (!u) return <p>Missing URL parameter</p>;
  if (isError) return <p>Error: {String(error)}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="px-6 pt-32 pb-16 max-w-prose prose lg:prose-xl mx-auto dark:prose-invert prose-quoteless prose-blockquote:text-gray-400 prose-blockquote:font-normal">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
}
