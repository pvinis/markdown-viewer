import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "../router";

const host = "https://f000.backblazeb2.com/file/dropshare-public-pavlos";

const fetchFile = async (file: string) => {
  const res = await fetch(`${host}/${file}`);
  return res.text();
};

export default function MDTWView() {
  const { file } = useParams("/:file");

  const {
    data: markdown,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [file],
    queryFn: () => fetchFile(file),
    retry: false,
  });

  if (isError) return <p>Error: {String(error)}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="px-6 pt-32 pb-16 max-w-prose prose lg:prose-xl mx-auto dark:prose-invert prose-quoteless prose-blockquote:text-gray-400 prose-blockquote:font-normal">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
}

// mattersomething on top for title and favicon?
/// frontmatter
