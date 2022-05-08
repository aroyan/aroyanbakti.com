import Head from "next/head";

export default function CustomHead({ title, content, card }) {
  return (
    <>
      {title && (
        <Head>
          <meta charset="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{`${title} | Aroyan Bakti`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content={`${content} | Aroyan Bakti`} />
          <meta name="description" content={content} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.aroyanbakti.com" />
          <meta property="og:title" content={`${content} | Aroyan Bakti`} />
          <meta property="og:description" content={content} />
          <meta property="og:image" content={card} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.aroyanbakti.com" />
          <meta
            property="twitter:title"
            content={`${content} | Aroyan Bakti`}
          />
          <meta property="twitter:description" content={content} />
          <meta property="twitter:image" content={card} />
        </Head>
      )}
    </>
  );
}
