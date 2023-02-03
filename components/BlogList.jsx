import Image from "next/image";
import urlFor from "lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const BlogList = ({ posts }) => {
  return (
    <div>
      <hr className="border-[#F7AB0A]" />
      <div className="grid grid-cols-1 gap-x-16 gap-y-16 px-10 pb-24 md:grid-cols-2">
        {/* Posts */}
        {posts.map((post) => (
          <div
            key={post._id}
            className="group mt-3 flex cursor-pointer flex-col "
          >
            <div className="relative  block h-[580px] w-full rounded-lg   drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-95">
              <Image
                className="object-contain object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 flex w-full justify-between rounded bg-black bg-opacity-20 p-5 text-white drop-shadow-lg backdrop-blur-lg">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2">
                  {post.categories.map((category) => (
                    <div
                      key={category._id}
                      className=" rounded-full bg-[#F7AB0A] px-3 py-3 text-center text-sm font-semibold text-black"
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 flex-1 bg-[#fff] md:w-[580px]">
              <p className="text-lg font-bold underline">{post.title}</p>
              <p className="text-gray-500 line-clamp-2 md:w-[580px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consequuntur officia odio consectetur, voluptate magni quam
                sapiente, cum ea ex reprehenderit distinctio odit dolore
                excepturi accusantium. Ut porro iusto quae!
              </p>
            </div>
            <div className="mx-auto mt-5 flex items-center bg-[#fff] font-bold group-hover:underline md:w-[580px]">
              Read Post
              <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
