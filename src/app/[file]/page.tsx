export default function FilePage({ params }: { params: { file: string } }) {
  return (
    <>
      <h1>file {params.file}</h1>
    </>
  );
}
