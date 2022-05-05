import { createClient } from "contentful";
import Layout from "../../components/layout/layout";
import BlogCard from "../../components/BlogCard";
import { Flex } from "@chakra-ui/react";

export async function getStaticProps() {
  const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
  });

  const res = await client.getEntries({ content_type: "blogV2" });
  return {
    props: {
      blogV2: res.items,
    },
  };
}

export default function BlogHome({ blogV2 }) {
  console.log(blogV2);
  return (
    <Layout>
      <Flex gap={"2"} flexWrap={"wrap"}>
        {blogV2.map((blog) => (
          <BlogCard key={blog.sys.id} blog={blog} />
        ))}
      </Flex>
    </Layout>
  );
}
