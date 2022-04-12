import { Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio made with Next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading as={"h1"} textAlign={"center"}>
          Aroyan Bakti Setiawan
        </Heading>
        <Text textAlign={"center"}>Front End Developer</Text>
        <br />
        <Text textAlign={"center"}>
          My name is Aroyan and I&apos;m interested in front end development
        </Text>
      </Layout>
    </div>
  );
}
