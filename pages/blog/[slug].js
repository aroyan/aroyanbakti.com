import Image from "next/image";
import Layout from "../../components/layout/layout";
import { createClient } from "contentful";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Center, Heading, Spinner } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import SocialMediaShare from "../../components/SocialMediaShare";
import DisqusComments from "../../components/comment";

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
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogV2",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: { item: items[0] },
    revalidate: 10,
  };
}

const BLOCK_IMAGE = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // console.log(node);
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
          alt={node.data.target.fields.title}
        />
      );
    },
  },
};

export default function BlogPost({ item }) {
  // console.log(item);
  if (!item)
    return (
      <Layout title={"Loading"}>
        <Center height={"calc(100vh - 80px)"}>
          <Spinner />
        </Center>
      </Layout>
    );
  const { title, blogPost, thumbnail, slug } = item.fields;
  // const { tags } = item.metadata;
  return (
    <Layout
      title={title}
      content={title}
      card={`https:${thumbnail.fields.file.url}`}
    >
      <Prose>
        <h2>{title}</h2>
        {documentToReactComponents(blogPost, BLOCK_IMAGE)}
      </Prose>
      <Center mb={"8"}>
        <SocialMediaShare slug={slug} />
      </Center>
      {/* <DisqusComments slug={slug} title={title} /> */}
    </Layout>
  );
}
