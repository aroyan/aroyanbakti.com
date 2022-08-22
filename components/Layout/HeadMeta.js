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
          <meta
            name="description"
            content={
              content
                ? content
                : "Hello, my name is Aroyan Bakti Setiawan. I'm a frontend developer based in Indonesia"
            }
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.aroyanbakti.com" />
          <meta property="og:title" content={`${content} | Aroyan Bakti`} />
          <meta
            property="og:description"
            content={
              content
                ? content
                : "Hello, my name is Aroyan Bakti Setiawan. I'm a frontend developer based in Indonesia"
            }
          />
          <meta
            property="og:image"
            content={
              card
                ? card
                : "https://raw.githubusercontent.com/aroyan/aroyanbakti.com/main/public/images/card_preview.pngs"
            }
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.aroyanbakti.com" />
          <meta
            property="twitter:title"
            content={`${content} | Aroyan Bakti`}
          />
          <meta
            property="twitter:description"
            content={
              content
                ? content
                : "Hello, my name is Aroyan Bakti Setiawan. I'm a frontend developer based in Indonesia"
            }
          />
          <meta
            property="twitter:image"
            content={
              card
                ? card
                : "https://raw.githubusercontent.com/aroyan/aroyanbakti.com/main/public/images/card_preview.png"
            }
          />
        </Head>
      )}
    </>
  );
}
