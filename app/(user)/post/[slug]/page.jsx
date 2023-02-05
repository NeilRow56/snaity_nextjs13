import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { RichTextComponents } from "../../../../components/RichTextComponents";

async function Post({ params: { slug } }) {
  const query = groq`
       *[_type=='post' && slug.current == $slug][0]
       {
        ..., 
        author->,
        categories[]->
  } 
    `;
  const post = await client.fetch(query, { slug });

  return (
    <artice className="px-10 pb-28">
      <section className="space-y-2 border border-[rgb(247,171,10)] text-white">
        <div className="min-h-56 justify-space-between relative flex flex-col md:flex-row">
          <div className="absolute top-0 h-full w-full p-10 opacity-10 blur-sm">
            <Image
              className="mx-auto object-cover object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="w-full bg-[rgb(247,171,10)] p-5">
            <div className="flex flex-col justify-between gap-y-5 md:flex-row">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                {/* <p>
                  {
                    new Date(
                      post._createdAt.toLocaleString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    )
                  }
                </p> */}
              </div>
              <div className="flex items-center space-x-3 ">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* Author text  */}</div>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className=" pt-10 italic text-white">{post.description}</h2>
              <div className="mt-auto flex items-center justify-end space-x-2">
                {post.categories.map((category) => (
                  <p
                    className="font-semi-bold mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm text-white"
                    key={category._id}
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </artice>
  );
}

export default Post;
