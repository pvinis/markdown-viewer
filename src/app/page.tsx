import Link from "next/link";

export default function HomePage() {
  console.log(process.env.NEXT_PUBLIC_GAMO);
  // console.log(import.meta.env);
  console.log("woaaaaw");
  console.log("damn");

  return (
    <>
      <h1>Markdown Tailwind Viewer</h1>
      <p>by pavlos</p>
      <p>{process.env.NEXT_PUBLIC_GAMO}</p>
      <Link href="/intro.md">Intro</Link>
    </>
  );
}

// spinner for loading? or some simple dots?

/// commit .env
