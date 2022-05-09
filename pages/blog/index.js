import { createClient } from "contentful";
import { Flex, Heading } from "@chakra-ui/react";
import BlogCard from "../../components/BlogCard";
import BlogLayout from "../../components/layout/blogLayout";

export async function getStaticProps() {
  const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
  });

  const res = await client.getEntries({
    content_type: "blogV2",
    order: "-sys.createdAt",
  });
  return {
    props: {
      blogV2: res.items,
    },
    revalidate: 10,
  };
}

export default function BlogHome({ blogV2 }) {
  // console.log(blogV2);
  return (
    <BlogLayout title={"Blog"}>
      <Heading>Blog</Heading>
      {blogV2.map((blog) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
    </BlogLayout>
  );
}
