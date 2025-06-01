"use client";
import React from "react";
import MDXContent from "./MdxContent";

const mdxComponents = {
  // Add any custom components here
};

const RenderMdx = ({ blog }) => {
  return (
    <div
      className="font-in prose sm:prose-base md:prose-lg max-w-none
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-figure:relative
    prose-figcaption:mt-1
    prose-figcaption:mb-2

    prose-li:marker:text-accent

    first-letter:text-3xl
    sm:first-letter:text-5xl"
    >
      <MDXContent code={blog.body} components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
