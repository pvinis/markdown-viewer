import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useParams } from "../router";

const host = import.meta.env.VITE_HOST_URL;

const fetchFile = async (file: string) => {
  console.log("fetching", file, `${host}/${file}`);
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

  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>;
}

// mattersomething on top for title and favicon?
/// frontmatter

/// common file for this and custom

// link to github
// opensource it

// link to raw md? :thinking:
