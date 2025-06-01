import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content/blogs");

export const getAllPosts = () => {
  const posts = [];

  // Read all directories in the blogs folder
  const directories = fs.readdirSync(rootDirectory);

  directories.forEach((dir) => {
    const fullPath = path.join(rootDirectory, dir);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Read the index.mdx file in each directory
      const filePath = path.join(fullPath, "index.mdx");
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data: frontmatter, content } = matter(fileContents);

        posts.push({
          slug: frontmatter.slug || dir,
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.publishedAt || frontmatter.date,
          category: frontmatter.category || "Uncategorized",
          published: frontmatter.isPublished ?? true,
          image: frontmatter.image,
          author: frontmatter.author,
          tags: frontmatter.tags || [],
          content,
          ...frontmatter,
        });
      }
    }
  });

  // Sort posts by date
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};
