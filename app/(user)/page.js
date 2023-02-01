import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  if (previewData()) {
    return (
      <div className="container mx-auto text-center text-7xl">Preview mode</div>
    );
  }

  const posts = await client.fetch(query);

  console.log(posts);
  return (
    <section className="container mx-auto text-center">
      <h1>Not in Preview Mode</h1>
    </section>
  );
}
