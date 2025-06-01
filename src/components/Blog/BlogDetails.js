import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-3 py-4 sm:px-4 sm:py-6 bg-accent/10 dark:bg-accentDark/10 rounded-xl flex items-center justify-center flex-wrap gap-8 sm:gap-24 text-xs sm:text-base font-medium">
      <div className="flex items-center gap-2 sm:gap-4">
        <time className="text-accent dark:text-accentDark">
          {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <span className="text-accent dark:text-accentDark">
          <ViewCounter slug={blogSlug} />
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="text-accent dark:text-accentDark">
          {blog.readingTime.text}
        </span>
        <Link
          href={`/categories/${slug(blog.tags[0])}`}
          className="text-accent dark:text-accentDark hover:underline"
        >
          #{blog.tags[0]}
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
