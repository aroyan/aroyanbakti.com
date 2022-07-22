import { Heading, Text, Stack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import BlogPostWithImage from "../cards";

export const CTASection = () => {
  return (
    <>
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
        Hello, my name is Aroyan. I&apos;m a frontend developer and open source
        contributor. Currently open to fulltime or freelance work
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
          <Button
            rounded={"full"}
            px={6}
            as={"a"}
            alignItems={"center"}
            variant="outline"
            border="2px"
            borderColor="orange.400"
          >
            Read Blog
          </Button>
        </NextLink>
      </Stack>
    </>
  );
};

export const ProjectListSection = () => {
  return (
    <>
      {" "}
      <BlogPostWithImage
        imageLink={"/images/chat-app.png"}
        altImage={"Chat App CSS Illustration"}
        heading={"Chat App CSS Illustration"}
        description={"Create a Illustration using CSS"}
        codeLink={"https://github.com/aroyan/chat-app"}
        previewLink={"https://aroyan.github.io/chat-app"}
      />
      <BlogPostWithImage
        imageLink={"/images/drum-machine.png"}
        altImage={"Drum Machine Preview"}
        heading={"Simple Drum Machine"}
        description={
          "Simple Drum Machine built with React and ChakraUI for Front End Libraries Development projects by freeCodeCamp"
        }
        codeLink={"https://github.com/aroyan/drum-machine"}
        previewLink={"https://drum-machine-arbase.vercel.app/"}
      />
    </>
  );
};
