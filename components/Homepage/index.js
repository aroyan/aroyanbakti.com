import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import ProjectCard from "../ProjectCard";

export const CTASection = () => {
  return (
    <>
      <Flex w={"full"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={"2xl"} spacing={6}>
            <Text
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Aroyan Bakti Setiawan
            </Text>
            <Text
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            >
              Frontend developer and open source contributor. Currently open to
              fulltime or freelance work
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                <Link href={"/projects"}>Projects</Link>
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                variant="outline"
                _hover={{ bg: "whiteAlpha.500" }}
                width={"90px"}
              >
                <Link href={"/blog"}>Blog</Link>
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export const ProjectListSection = () => {
  return (
    <>
      {" "}
      <ProjectCard
        imageLink={"/images/chat-app.png"}
        altImage={"Chat App CSS Illustration"}
        heading={"Chat App CSS Illustration"}
        description={"Create a Illustration using CSS"}
        codeLink={"https://github.com/aroyan/chat-app"}
        previewLink={"https://aroyan.github.io/chat-app"}
      />
      <ProjectCard
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
