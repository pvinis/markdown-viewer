"use client";

import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const host = process.env.NEXT_PUBLIC_MD_HOST;

const fetchFile = async (file: string) => {
  const res = await fetch(`${host}/${file}`);
  return res.text();
};

export default function FilePage({ params }: { params: { file: string } }) {
  const { file } = params;

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
    <>
      <Helmet title="WOW">
        <title>lol</title>
      </Helmet>
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </>
  );
}

// mattersomething on top for title and favicon?
/// frontmatter

/// common file for this and custom

// link to github
// opensource it

// link to raw md? :thinking::

//codeblocks copy button
