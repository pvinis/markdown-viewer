import { useQuery } from "@tanstack/react-query";

const host = "https://f000.backblazeb2.com/file/dropshare-public-pavlos";

const fetchFile = async (file: string) => {
  const res = await fetch(`${host}${file}`);
  return res.text();
};

export function MDTWView({ file }: { file: string }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [file],
    queryFn: () => fetchFile(file),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error}</p>;

  return (
    <article className="prose lg:prose-xl">
      <p>{file}</p>
      {data}
    </article>
  );
}

/// mattersomething on top
