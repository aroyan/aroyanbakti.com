import "highlight.js/styles/tokyo-night-dark.css";
import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { getPostFromSlug, getSlugs } from "@/utils/api";
import BlogHead from "@/components/BlogHead";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import { MDXRemote } from "next-mdx-remote";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { serialize } from "next-mdx-remote/serialize";
import ShareButton from "@/components/ShareButton";

const Markdown = ({ post }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, date, month, year, ...rest] = new Date(post.meta.date)
    .toUTCString()
    .split(" ");
  const estReadingTime = readingTime(
    post.source.compiledSource.toString()
  ).text;
  return (
    <>
      <BlogHead title={post.meta.title} description={post.meta.excerpt} />
      <Layout>
        <Prose>
          <Flex flexDir="column">
            <HStack>
              <Text>{`${date} ${month} ${year}`}</Text>
              <Text verticalAlign="center">&bull;</Text>
              <Text>{estReadingTime}</Text>
            </HStack>
            <Heading as={"h1"}>{post.meta.title}</Heading>
          </Flex>
          <MDXRemote {...post.source} components={{ Image }} />
        </Prose>
        <Flex
          as="section"
          my="8"
          justify="center"
          align="center"
          flexDir="column"
        >
          <Text fontSize={"2xl"} fontWeight="bold">
            Thanks for reading, like this article?
          </Text>
          <ShareButton
            title={post.meta.title}
            url={`/blog/${post.meta.slug}`}
          />
        </Flex>
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
