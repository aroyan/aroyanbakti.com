import path from "path";
import fs from "fs";
import { sync } from "glob";
import os from "os";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = () => {
  const res = sync("**/*.mdx");
  const splitted = res.map((x) => {
    const parts = x.split("/");
    const [basePath, fileName] = parts;
    const [slug, ext] = fileName.split(".");
    return slug;
  });
  return splitted;
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .filter((item) => item.meta.draft === false)
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return -1;
      if (a.meta.date < b.meta.date) return 1;
      return 0;
    });
  return posts;
};

export const getPostFromSlug = (slug) => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);
  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toISOString(),
      thumbnail: data.thumbnail ?? "",
      draft: data.draft ?? false,
    },
  };
};
