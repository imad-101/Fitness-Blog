import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  // Only render if we have at least one blog post
  if (sortedBlogs.length === 0) {
    return null;
  }

  const blog = sortedBlogs[0];

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-2 sm:mx-10 relative">
        {/* Mobile: Image with natural aspect ratio */}
        <div className="block sm:hidden relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
          <Image
            src={blog.image.src}
            placeholder="blur"
            blurDataURL={blog.image.blurDataURL}
            alt={blog.title}
            fill
            quality={100}
            className="w-full h-full object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Mobile gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 rounded-3xl z-10" />

          {/* Mobile content - positioned inside this container */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end z-20 text-white">
            <div className="mb-2">
              <Tag
                link={`/categories/${slug(blog.tags[0])}`}
                name={blog.tags[0]}
              />
            </div>
            <Link href={blog.url} className="block">
              <h1 className="font-bold capitalize text-lg leading-tight">
                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                  {blog.title}
                </span>
              </h1>
            </Link>
          </div>
        </div>

        {/* Desktop: Full height container */}
        <div className="hidden sm:flex flex-col items-start justify-end relative h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] w-full rounded-3xl overflow-hidden">
          {/* Desktop gradient overlay */}
          <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-black/20 from-0% via-black/50 via-40% to-black/80 z-10" />

          {/* Desktop image container */}
          <div className="absolute inset-0">
            <Image
              src={blog.image.src}
              placeholder="blur"
              blurDataURL={blog.image.blurDataURL}
              alt={blog.title}
              fill
              quality={100}
              className="w-full h-full object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>

          {/* Desktop content - positioned inside this container */}
          <div className="relative w-full lg:w-3/4 p-6 md:p-8 lg:p-12 xl:p-16 z-20 text-white">
            <div className="mb-2 sm:mb-3">
              <Tag
                link={`/categories/${slug(blog.tags[0])}`}
                name={blog.tags[0]}
              />
            </div>

            <Link href={blog.url} className="block mb-2 sm:mb-4">
              <h1 className="font-bold capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                  {blog.title}
                </span>
              </h1>
            </Link>

            <p className="text-base md:text-lg lg:text-xl font-in text-white/90 leading-relaxed line-clamp-2 lg:line-clamp-none max-w-4xl">
              {blog.description}
            </p>
          </div>
        </div>

        {/* Content wrapper - only for spacing, actual content is inside each container */}
        <div className="w-full">
          {/* Content is now inside each respective container above */}
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
