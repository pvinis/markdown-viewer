import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const host = "https://f000.backblazeb2.com/file/dropshare-public-pavlos";

const fetchFile = async (file: string) => {
  console.log("fetching", `${host}${file}`);
  const res = await fetch(`${host}${file}`);
  return res.text();
};

export function MDTWView({ file }: { file: string }) {
  const {
    data: markdown,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [file],
    queryFn: () => fetchFile(file),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {String(error)}</p>;

  return (
    <div className="px-6 pt-32 pb-16 max-w-prose prose lg:prose-xl mx-auto prose-blockquote:overline">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
}

/// mattersomething on top for title and favicon?

//dark mode

// frontmatter
