import { previewData } from "next/headers";

export default function Home() {
  if (previewData()) {
    return <div>Preview mode</div>;
  }
  return (
    <section className="container mx-auto text-center">
      <h1>Not in Preview Mode</h1>
    </section>
  );
}
