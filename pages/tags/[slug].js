import BlogCard from "../../components/BlogCard";
import BlogLayout from "../../components/Layout/BlogLayout";
import { getAllPosts } from "../../utils/api";

export default function Tags({ slug, meta }) {
  return (
    <>
      <BlogLayout title={slug}>
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
  // eslint-disable-next-line no-undef
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({
    params: { slug: tag },
  }));

  return {
    paths,
    fallback: false,
  };
};
