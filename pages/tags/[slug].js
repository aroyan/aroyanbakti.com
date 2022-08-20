import Image from "next/image";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/Layout/BlogLayout";
import BlogCard from "../../components/BlogCard";
import { getAllPosts } from "../../utils/api";
import { Heading } from "@chakra-ui/react";

export default function Tags({ slug, meta }) {
  return (
    <>
      <BlogLayout>
        {meta.map((x, id) => (
          <BlogCard key={id} meta={x} />
        ))}
      </BlogLayout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      meta: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
