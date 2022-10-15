import BlogCard from "@/components/BlogCard";
import BlogLayout from "@/components/Layout/BlogLayout";
import { getAllPosts } from "@/utils/api";

const Blog = ({ posts }) => {
  return (
    <BlogLayout title="Blog">
      {posts.map((post, id) => (
        <BlogCard key={id} meta={post.meta} />
      ))}
    </BlogLayout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}
