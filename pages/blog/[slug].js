import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../../components/layout/layout";

const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_KEY}`,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogV2",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogV2",
    "fields.slug": params.slug,
  });

  return {
    props: { blog: items[0] },
    revalidate: 10,
  };
}

export default function BlogPost({ blog }) {
  console.log(blog);
  const { title, blogPost } = blog.fields;
  return <Layout>{documentToReactComponents(blogPost)}</Layout>;
}
