import Head from "next/head";

const BlogHead = ({ title, thumbnail, description }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`${title} | Aroyan Bakti`}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={`${title} | Aroyan Bakti`} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.aroyanbakti.com" />
      <meta property="og:title" content={`${title} | Aroyan Bakti`} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={thumbnail ? thumbnail : "/images/card_preview.png"}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.aroyanbakti.com" />
      <meta property="twitter:title" content={`${title} | Aroyan Bakti`} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={thumbnail ? thumbnail : "/images/card_preview.png"}
      />
    </Head>
  );
};

export default BlogHead;
