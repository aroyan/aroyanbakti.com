import "highlight.js/styles/tokyo-night-dark.css";
import { getPostFromSlug, getSlugs } from "@/utils/api";
import BlogHead from "@/components/BlogHead";
import Image from "next/image";
import Layout from "@/components/Layout/Layout";
import { MDXRemote } from "next-mdx-remote";
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
        <div flexDir="column">
          <div>
            <p>{`${date} ${month} ${year}`}</p>
            <p verticalAlign="center">&bull;</p>
            <p>{estReadingTime}</p>
          </div>
          <h1>{post.meta.title}</h1>
        </div>
        <MDXRemote {...post.source} components={{ Image }} />

        <div
          as="section"
          my="8"
          justify="center"
          align="center"
          flexDir="column"
        >
          <p fontSize={"2xl"} fontWeight="bold">
            Thanks for reading, like this article?
          </p>
          <ShareButton
            title={post.meta.title}
            url={`/blog/${post.meta.slug}`}
          />
        </div>
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
