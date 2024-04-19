export default function FilePage({ params }: { params: { file: string } }) {
  console.log("woaaaaw");
  console.log("damn");

  return (
    <>
      <h1>file {params.file}</h1>
    </>
  );
}
