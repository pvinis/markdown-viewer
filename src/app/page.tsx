import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Markdown Tailwind Viewer</h1>
      <p>by pavlos</p>
      <Link href="/intro.md">Intro</Link>
    </>
  );
}

// spinner for loading? or some simple dots?

/// commit .env

///try witouhgvercel.json file
