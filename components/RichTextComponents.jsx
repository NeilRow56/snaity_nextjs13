import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fil
          />
        </div>
      );
    },
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="py-10 text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="py-10 text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="py-10 text-2xl font-bold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-5 border-l-4 border-l-[#F7AB0A] py-5 pl-5">
        {children}
      </blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-primary text-lg text-purple-700">{children}</h2>
    ),
  },

  marks: {
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const rel = !value.href.startsWith("/")
        ? "nonferrer noopener"
        : undefined;
      return (
        <Link
          href={value?.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
