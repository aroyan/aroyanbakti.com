import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Heading, Text } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { getPostFromSlug, getSlugs } from "../../utils/api";
import Layout from "../../components/Layout/Layout";
import BlogHead from "../../components/BlogHead";
import "highlight.js/styles/tokyo-night-dark.css";

const Markdown = ({ post }) => {
  const [_, date, month, year, ...rest] = new Date(post.meta.date)
    .toUTCString()
    .split(" ");
  return (
    <>
      <BlogHead title={post.meta.title} description={post.meta.excerpt} />
      <Layout>
        <Prose>
          <MDXRemote {...post.source} components={{ Image }} />
        </Prose>
        <Text textAlign="center">{`${date} ${month} ${year}`}</Text>
      </Layout>
    </>
  );
};

export default Markdown;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      post: { source: mdxSource, meta },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
