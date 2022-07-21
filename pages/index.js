import {
  Heading,
  VStack,
  useColorModeValue,
  Stack,
  Flex,
  Text,
  Button,
  Image,
  useBreakpointValue,
  Container,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../components/layout/layout";
import Socials from "../components/socialList";

export default function Home() {
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  console.log(process.env.NODE_ENV);
  return (
    <Layout
      title={"Home"}
      content={
        "Hello, my name is Aroyan Bakti Setiawan. I'm a frontend developer based in Indonesia. This website is my portfolio and I write a blog too"
      }
    >
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Passionate about{" "}
            <Text as={"span"} color={"orange.400"}>
              Frontend Development
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Hello, my name is Aroyan. I&apos;m an frontend developer and open
            source contributor. I&apos;m currently open to fulltime work or
            freelance work
          </Text>
          <Stack spacing={6} direction={"row"}>
            <NextLink href={"/contact"} passHref>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bg={"orange.400"}
                _hover={{ bg: "orange.500" }}
                as={"a"}
                href="mailto:abssneakers@gmail.com"
              >
                Contact Me
              </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Button rounded={"full"} px={6} as={"a"} alignItems={"center"}>
                Read Blog
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}
