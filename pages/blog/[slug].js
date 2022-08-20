import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Heading, Text } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { getPostFromSlug, getSlugs } from "../../utils/api";
import Layout from "../../components/Layout/Layout";
import "highlight.js/styles/tokyo-night-dark.css";

const Markdown = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.meta.title} | Aroyan</title>
      </Head>
      <Layout>
        <Text>{new Date(post.meta.date).toString()}</Text>
        <Prose>
          <MDXRemote {...post.source} components={{ Image }} />
        </Prose>
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
