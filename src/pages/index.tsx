export default function Page() {
  console.log(import.meta.env.VITE_GAMO);
  console.log(import.meta.env);
  console.log("woaaaaw");
  console.log("damn");
  return (
    <>
      <h1>Markdown Tailwind Viewer</h1>
      <p>by pavlos</p>
      <a href="/intro.md">Intro</a>
      <p>{import.meta.env.VITE_GAMO}</p>
    </>
  );
}

// spinner for loading? or some simple dots?
