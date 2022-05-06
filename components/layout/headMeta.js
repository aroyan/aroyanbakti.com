import Head from "next/head";

export default function CustomHead({ title }) {
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
          <meta
            name="title"
            content="Aroyan Bakti Setiawan - I'm a Front End Developer based in Indonesia"
          />
          <meta
            name="description"
            content="Aroyan Bakti Setiawan Portfolio website, built with NextJS and ChakraUI"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.aroyanbakti.com" />
          <meta
            property="og:title"
            content="Aroyan Bakti Setiawan - I'm a Front End Developer based in Indonesia"
          />
          <meta
            property="og:description"
            content="Aroyan Bakti Setiawan Portfolio website, built with NextJS and ChakraUI"
          />
          <meta property="og:image" content="" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.aroyanbakti.com" />
          <meta
            property="twitter:title"
            content="Aroyan Bakti Setiawan - I'm a Front End Developer based in Indonesia"
          />
          <meta
            property="twitter:description"
            content="Aroyan Bakti Setiawan Portfolio website, built with NextJS and ChakraUI"
          />
          <meta property="twitter:image" content="" />
        </Head>
      )}
    </>
  );
}
