import {
  Center,
  HStack,
  Link,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function Home() {
  const githubLogo = useColorModeValue("#333", "#f0f6fc");
  return (
    <div>
      <Head>
        <title>Aroyan Bakti | Front End Developer</title>
        <meta name="description" content="Portfolio made with Next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <VStack mt={"36"}>
          <Heading as={"h1"} fontSize={"3xl"} textAlign={"center"} mb={"4"}>
            I&apos;m a Front End Developer based in Indonesia
          </Heading>
          <Heading
            as="h2"
            textAlign={"center"}
            fontWeight={"regular"}
            fontSize={"2xl"}
          >
            Find me on
          </Heading>
          <HStack>
            <Link
              href="https://github.com/aroyan"
              isExternal
              _hover={{ color: githubLogo }}
            >
              <BsGithub size={"2em"} />
            </Link>
            <Link
              href="https://linkedin.com/in/aroyanbakti/"
              isExternal
              _hover={{ color: "#0A66C2" }}
            >
              <BsLinkedin size={"2em"} />
            </Link>
            <Link
              href="https://youtube.com/aroyanbakti"
              isExternal
              _hover={{ color: "#c4302b " }}
            >
              <BsYoutube size={"2em"} />
            </Link>
          </HStack>
        </VStack>
      </Layout>
    </div>
  );
}
